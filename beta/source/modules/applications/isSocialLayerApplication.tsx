// Module ID: 11688
// Function ID: 11689
// Name: isSocialLayerApplication
// Dependencies: [1078, 9165, 9360, 2]
// Exports: default, isSocialLayerSDKAuthorization

// Module 11688 (isSocialLayerApplication)
import Constants from "Constants" /* 1078 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9165 */;
import scopes2 from "scopes" /* 9360 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = ApplicationFlagUtils;
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = ApplicationFlagUtils;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item) => scopes2.isSocialLayerUmbrellaScope(item));
  }
  return hasApplicationFlagResult;
};
