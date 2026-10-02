// Module ID: 1052
// Function ID: 1053
// Name: supabaseIntegration
// Dependencies: [901]
// Exports: supabaseIntegration

// Module 1052 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;


export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
};
