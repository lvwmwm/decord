// Module ID: 10871
// Function ID: 84188
// Name: isSocialLayerApplication
// Dependencies: [653, 5674, 8926, 2]
// Exports: isSocialLayerSDKAuthorization

// Module 10871 (isSocialLayerApplication)
import { ApplicationFlags } from "ME";

function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = require(5674) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(5674) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const obj2 = require(5674) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
}
const result = require("items").fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default isSocialLayerApplication;
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  return isSocialLayerApplication(application) && scopes.some((arg0) => outer1_0(outer1_1[2]).isSocialLayerUmbrellaScope(arg0));
};
