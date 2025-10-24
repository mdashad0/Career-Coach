// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

// export const generateAIInsights = async (industry) => {
//   const prompt = `
//           Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
//           {
//             "salaryRanges": [
//               { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
//             ],
//             "growthRate": number,
//             "demandLevel": "HIGH" | "MEDIUM" | "LOW",
//             "topSkills": ["skill1", "skill2"],
//             "marketOutlook": "Positive" | "Neutral" | "Negative",
//             "keyTrends": ["trend1", "trend2"],
//             "recommendedSkills": ["skill1", "skill2"]
//           }
          
//           IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
//           Include at least 5 common roles for salary ranges.
//           Growth rate should be a percentage.
//           Include at least 5 skills and trends.
//         `;

//   const result = await model.generateContent(prompt);
//   const response = result.response;
//   const text = response.text();
//   const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

//   return JSON.parse(cleanedText);
// };

// export async function getIndustryInsights() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     include: {
//       industryInsight: true,
//     },
//   });

//   if (!user) throw new Error("User not found");

//   // If no insights exist, generate them
//   if (!user.industryInsight) {
//     const insights = await generateAIInsights(user.industry);

//     const industryInsight = await db.industryInsight.create({
//       data: {
//         industry: user.industry,
//         ...insights,
//         nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//       },
//     });

//     return industryInsight;
//   }

//   return user.industryInsight;
// }





"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

export const generateAIInsights = async (industry) => {
  if (!industry) throw new Error("Industry is required to generate AI insights");

  const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "HIGH" | "MEDIUM" | "LOW",
      "topSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
      "marketOutlook": "Positive" | "Neutral" | "Negative",
      "keyTrends": ["trend1", "trend2", "trend3", "trend4", "trend5"],
      "recommendedSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"]
    }

    IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
    Include at least 5 common roles for salary ranges.
    Growth rate should be a percentage.
    Include at least 5 skills and trends.
  `;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  try {
    return JSON.parse(cleanedText);
  } catch (err) {
    console.error("Failed to parse AI JSON:", cleanedText);
    throw new Error("Invalid AI response format");
  }
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: { industryInsight: true },
  });

  if (!user) return null;

  // Validate industry
  const industry = user.industry;
  if (!industry) {
    return null; // User hasn't completed onboarding
  }

  // If no insights exist, generate them
  if (!user.industryInsight) {
    const insights = await generateAIInsights(industry);

    const industryInsight = await db.industryInsight.create({
      data: {
        industry,        // guaranteed to be non-null
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return industryInsight;
  }

  return user.industryInsight;
}








// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// export const generateAIInsights = async (industry) => {
//   const prompt = `
//     Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
//     {
//       "salaryRanges": [
//         { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
//       ],
//       "growthRate": number,
//       "demandLevel": "HIGH" | "MEDIUM" | "LOW",
//       "topSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
//       "marketOutlook": "Positive" | "Neutral" | "Negative",
//       "keyTrends": ["trend1", "trend2", "trend3", "trend4", "trend5"],
//       "recommendedSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"]
//     }

//     IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
//     Include at least 5 common roles for salary ranges.
//     Growth rate should be a percentage.
//     Include at least 5 skills and trends.
//   `;

//   const result = await model.generateContent (prompt);
//   const response = result.response;
//   const text = response.text();

//   // Clean up potential markdown formatting
//   const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

//   // Safely parse JSON
//   try {
//     return JSON.parse(cleanedText);
//   } catch (err) {
//     console.error("Failed to parse AI response:", cleanedText);
//     throw new Error("Invalid AI response format");
//   }
// };

// export async function getIndustryInsights() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     include: { industryInsight: true },
//   });

//   if (!user) throw new Error("User not found");

//   // Generate insights if not already present
//   if (!user.industryInsight) {
//     const insights = await generateAIInsights(user.industry);

//     const industryInsight = await db.industryInsight.create({
//       data: {
//         industry: user.industry,
//         ...insights,
//         nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//       },
//     });

//     return industryInsight;
//   }

//   return user.industryInsight;
// }
