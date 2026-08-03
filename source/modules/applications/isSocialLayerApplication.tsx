// Module ID: 11031
// Function ID: 11032
// Name: isSocialLayerApplication
// Dependencies: [676, 7498, 9136, 2]
// Exports: default, isSocialLayerSDKAuthorization

// Module 11031 (isSocialLayerApplication)
import { ApplicationFlags } from "ME";

const result = require("items").fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = require(7498) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(7498) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = require(7498) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = require(7498) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(7498) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = require(7498) /* getApplicationFlags */;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((arg0) => callback(table[2]).isSocialLayerUmbrellaScope(arg0));
  }
  return hasApplicationFlagResult;
};
