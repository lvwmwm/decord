// Module ID: 1051
// Function ID: 1052
// Name: supabaseIntegration
// Dependencies: [900]
// Exports: supabaseIntegration

// Module 1051 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;


export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
};
