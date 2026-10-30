// Module ID: 1037
// Function ID: 1038
// Name: supabaseIntegration
// Dependencies: [886]
// Exports: supabaseIntegration

// Module 1037 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;


export function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
}
