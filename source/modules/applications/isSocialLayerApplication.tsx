// Module ID: 10844
// Function ID: 84210
// Name: isSocialLayerApplication
// Dependencies: []
// Exports: isSocialLayerSDKAuthorization

// Module 10844 (isSocialLayerApplication)
function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = require(dependencyMap[1]).hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(dependencyMap[1]).hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const obj2 = require(dependencyMap[1]);
  }
  return hasApplicationFlagResult;
}
const ApplicationFlags = require(dependencyMap[0]).ApplicationFlags;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default isSocialLayerApplication;
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  return isSocialLayerApplication(application) && scopes.some((arg0) => callback(closure_1[2]).isSocialLayerUmbrellaScope(arg0));
};
