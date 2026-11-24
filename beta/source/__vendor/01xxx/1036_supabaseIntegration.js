// Module ID: 1036
// Function ID: 1037
// Name: supabaseIntegration
// Dependencies: [886]
// Exports: supabaseIntegration

// Module 1036 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;


export function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
}
