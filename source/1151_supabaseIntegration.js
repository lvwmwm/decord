// Module ID: 1151
// Function ID: 13104
// Name: supabaseIntegration
// Dependencies: [1000]

// Module 1151 (supabaseIntegration)
const require = arg1;
const dependencyMap = arg6;
arg5.supabaseIntegration = function supabaseIntegration(supabaseClient) {
  let obj = require(1000) /* keys */;
  obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};
