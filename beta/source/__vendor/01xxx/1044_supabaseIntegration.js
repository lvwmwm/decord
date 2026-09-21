// Module ID: 1044
// Function ID: 1045
// Name: supabaseIntegration
// Dependencies: [893]
// Exports: supabaseIntegration

// Module 1044 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 893 */;

require = arg1;
const dependencyMap = arg6;

export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
};
