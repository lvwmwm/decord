// Module ID: 10855
// Function ID: 84283
// Name: isSocialLayerApplication
// Dependencies: [653, 7371, 8955, 2]
// Exports: isSocialLayerSDKAuthorization

// Module 10855 (isSocialLayerApplication)
import { ApplicationFlags } from "ME";

function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = require(7371) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(7371) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const obj2 = require(7371) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
}
const result = require("items").fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default isSocialLayerApplication;
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  return isSocialLayerApplication(application) && scopes.some((arg0) => outer1_0(outer1_1[2]).isSocialLayerUmbrellaScope(arg0));
};
