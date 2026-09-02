// Module ID: 1172
// Function ID: 1173
// Name: supabaseIntegration
// Dependencies: [1021]

// Module 1172 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1021 */;

require = arg1;
const dependencyMap = arg6;
arg5.supabaseIntegration = function supabaseIntegration(supabaseClient) {
  let obj = feedbackAsyncIntegration;
  obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};
