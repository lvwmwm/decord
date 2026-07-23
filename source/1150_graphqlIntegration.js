// Module ID: 1150
// Function ID: 13102
// Name: graphqlIntegration
// Dependencies: [1000]

// Module 1150 (graphqlIntegration)
const require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = require(1000) /* keys */;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};
