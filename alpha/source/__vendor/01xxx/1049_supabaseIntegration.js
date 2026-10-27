// Module ID: 1049
// Function ID: 1050
// Name: supabaseIntegration
// Dependencies: [898]
// Exports: supabaseIntegration

// Module 1049 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;


export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
};
