// Module ID: 10891
// Function ID: 10892
// Name: isSocialLayerApplication
// Dependencies: [676, 5692, 8946, 2]
// Exports: default, isSocialLayerSDKAuthorization

// Module 10891 (isSocialLayerApplication)
import { ApplicationFlags } from "ME";

const result = require("items").fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = require(5692) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(5692) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = require(5692) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = require(5692) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require(5692) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = require(5692) /* getApplicationFlags */;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((arg0) => callback(table[2]).isSocialLayerUmbrellaScope(arg0));
  }
  return hasApplicationFlagResult;
};
