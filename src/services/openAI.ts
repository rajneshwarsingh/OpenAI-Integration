import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OpenAI_API_KEY });

export class OpenAIServices {
  public static async generateText(prompt: unknown) {
    console.log('process.env.OpenAI_API_KEY', process.env.OpenAI_API_KEY);
    return {};
    // const completion = await openai.chat.completions.create({
    //   model: 'gpt-3.5-turbo',
    //   messages: [{ role: "user", content: prompt + ". Provide your answer in maximum 2000 characters using bullet points. Also don't mention this 2000 character limit in your response" }],
    //   max_tokens: 1000,
    // });
    // return completion?.choices[0]
  }
}
