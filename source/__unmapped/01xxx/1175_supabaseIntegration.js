// Module ID: 1175
// Function ID: 1176
// Name: supabaseIntegration
// Dependencies: [1024]

// Module 1175 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1024 */;

require = arg1;
const dependencyMap = arg6;
arg5.supabaseIntegration = function supabaseIntegration(supabaseClient) {
  let obj = feedbackAsyncIntegration;
  obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};
