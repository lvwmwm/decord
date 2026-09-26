// Module ID: 1040
// Function ID: 1041
// Name: supabaseIntegration
// Dependencies: [889]
// Exports: supabaseIntegration

// Module 1040 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

require = arg1;
const dependencyMap = arg6;

export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
};
