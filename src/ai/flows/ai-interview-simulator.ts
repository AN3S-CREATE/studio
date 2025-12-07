'use server';

/**
 * @fileOverview This file defines a Genkit flow for an AI Interview Simulator.
 *
 * The flow generates industry-specific interview questions, evaluates student answers,
 * and provides constructive feedback to help students build confidence and improve their interview skills.
 *
 * @exports `aiInterviewSimulator` - The main function to run the AI Interview Simulator flow.
 * @exports `AIInterviewSimulatorInput` - The input type for the `aiInterviewSimulator` function.
 * @exports `AIInterviewSimulatorOutput` - The output type for the `aiInterviewSimulator` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIInterviewSimulatorInputSchema = z.object({
  industry: z.string().describe('The industry for the interview simulation.'),
  jobTitle: z.string().describe('The job title for the interview simulation.'),
  studentAnswer: z.string().describe('The student answer to a specific interview question.'),
  interviewQuestion: z.string().optional().describe('The current interview question, if any.')
});

export type AIInterviewSimulatorInput = z.infer<typeof AIInterviewSimulatorInputSchema>;

const AIInterviewSimulatorOutputSchema = z.object({
  question: z.string().describe('The generated interview question.'),
  feedback: z.string().describe('The AI feedback on the student answer.'),
});

export type AIInterviewSimulatorOutput = z.infer<typeof AIInterviewSimulatorOutputSchema>;

export async function aiInterviewSimulator(input: AIInterviewSimulatorInput): Promise<AIInterviewSimulatorOutput> {
  return aiInterviewSimulatorFlow(input);
}

const aiInterviewSimulatorPrompt = ai.definePrompt({
  name: 'aiInterviewSimulatorPrompt',
  input: {schema: AIInterviewSimulatorInputSchema},
  output: {schema: AIInterviewSimulatorOutputSchema},
  prompt: `You are an AI Interview Simulator designed to help students prepare for job interviews.

You will generate industry-specific interview questions, evaluate the student's answers, and provide constructive feedback.

The industry for this interview is: {{{industry}}}
The job title for this interview is: {{{jobTitle}}}

{{#if interviewQuestion}}
The previous interview question was: {{{interviewQuestion}}}
The student's answer was: {{{studentAnswer}}}

Evaluate the student's answer and provide constructive feedback. Focus on areas for improvement and provide specific suggestions.

After providing feedback, generate the next interview question.
{{else}}
Generate the first interview question for the student.
{{/if}}

Output the next question and your feedback.
`,
});

const aiInterviewSimulatorFlow = ai.defineFlow(
  {
    name: 'aiInterviewSimulatorFlow',
    inputSchema: AIInterviewSimulatorInputSchema,
    outputSchema: AIInterviewSimulatorOutputSchema,
  },
  async input => {
    const {output} = await aiInterviewSimulatorPrompt(input);
    return output!;
  }
);
