'use server';

/**
 * @fileOverview AI-powered CV and profile builder flow.
 *
 * This flow takes student's details, and improve their CV and profile.
 * It fixes grammar, structure, and ATS formatting automatically.
 * It also adds quantified achievements for experience-poor students and suggests missing skills based on industry or SETA sector.
 *
 * - aiCVProfileBuilder - A function that handles the CV and profile building process.
 * - AICVProfileBuilderInput - The input type for the aiCVProfileBuilder function.
 * - AICVProfileBuilderOutput - The return type for the aiCVProfileBuilder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICVProfileBuilderInputSchema = z.object({
  details: z.string().describe('Details of the student, including education, experience, skills, and projects.'),
  industry: z.string().describe('The industry the student is targeting.'),
  setaSector: z.string().describe('The SETA sector the student is targeting.'),
});
export type AICVProfileBuilderInput = z.infer<typeof AICVProfileBuilderInputSchema>;

const AICVProfileBuilderOutputSchema = z.object({
  improvedProfile: z.string().describe('The improved CV and profile of the student.'),
});
export type AICVProfileBuilderOutput = z.infer<typeof AICVProfileBuilderOutputSchema>;

export async function aiCVProfileBuilder(input: AICVProfileBuilderInput): Promise<AICVProfileBuilderOutput> {
  return aiCVProfileBuilderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCVProfileBuilderPrompt',
  input: {schema: AICVProfileBuilderInputSchema},
  output: {schema: AICVProfileBuilderOutputSchema},
  prompt: `You are an AI-powered CV and profile builder. Your task is to improve the given student's profile based on their details, targeted industry, and SETA sector.

  Specifically, you should:
  - Fix any grammar and structural issues.
  - Ensure the profile is ATS (Applicant Tracking System) friendly.
  - Add quantified achievements to compensate for limited experience, wherever possible.
  - Suggest any relevant skills that are missing, based on the specified industry and SETA sector.

  Student Details: {{{details}}}
  Target Industry: {{{industry}}}
  SETA Sector: {{{setaSector}}}

  Improved Profile:`,
});

const aiCVProfileBuilderFlow = ai.defineFlow(
  {
    name: 'aiCVProfileBuilderFlow',
    inputSchema: AICVProfileBuilderInputSchema,
    outputSchema: AICVProfileBuilderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
