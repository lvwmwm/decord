// Module ID: 10832
// Function ID: 84062
// Name: isSocialLayerApplication
// Dependencies: [653, 5664, 8882, 2]
// Exports: isSocialLayerSDKAuthorization

// Module 10832 (isSocialLayerApplication)
import { ApplicationFlags } from "ME";

function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = require(5664) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(5664) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const obj2 = require(5664) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
}
const result = require("items").fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default isSocialLayerApplication;
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  return isSocialLayerApplication(application) && scopes.some((arg0) => outer1_0(outer1_1[2]).isSocialLayerUmbrellaScope(arg0));
};
