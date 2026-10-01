// Module ID: 1040
// Function ID: 1041
// Name: supabaseIntegration
// Dependencies: [889]
// Exports: supabaseIntegration

// Module 1040 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;


export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
};
