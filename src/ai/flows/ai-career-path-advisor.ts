'use server';

/**
 * @fileOverview An AI Career Path Advisor flow.
 *
 * - getCareerPathAdvice - A function that provides career path advice based on a student's qualifications.
 * - CareerPathAdviceInput - The input type for the getCareerPathAdvice function.
 * - CareerPathAdviceOutput - The return type for the getCareerPathAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerPathAdviceInputSchema = z.object({
  qualification: z.string().describe('The student\'s qualification.'),
  interests: z.string().describe('The student\'s interests.'),
});
export type CareerPathAdviceInput = z.infer<typeof CareerPathAdviceInputSchema>;

const CareerPathAdviceOutputSchema = z.object({
  predictedJobPathways: z.string().describe('Potential job pathways based on the student\'s qualifications.'),
  recommendedIndustries: z.string().describe('High-growth industries relevant to the student\'s field.'),
  upskillingSuggestions: z.string().describe('Personalized upskilling suggestions for the student.'),
});
export type CareerPathAdviceOutput = z.infer<typeof CareerPathAdviceOutputSchema>;

export async function getCareerPathAdvice(input: CareerPathAdviceInput): Promise<CareerPathAdviceOutput> {
  return careerPathAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerPathAdvicePrompt',
  input: {schema: CareerPathAdviceInputSchema},
  output: {schema: CareerPathAdviceOutputSchema},
  prompt: `You are a career advisor specializing in helping students make informed decisions about their career trajectories.

  Based on the student's qualification and interests, provide potential job pathways, recommend high-growth industries, and offer personalized upskilling suggestions.

  Qualification: {{{qualification}}}
  Interests: {{{interests}}}

  Consider South African context and realities when providing advice.
  `,
});

const careerPathAdviceFlow = ai.defineFlow(
  {
    name: 'careerPathAdviceFlow',
    inputSchema: CareerPathAdviceInputSchema,
    outputSchema: CareerPathAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
