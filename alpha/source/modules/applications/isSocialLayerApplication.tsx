// Module ID: 14381
// Function ID: 14382
// Name: isSocialLayerApplication
// Dependencies: [1072, 6963, 9849, 2]
// Exports: default, isSocialLayerSDKAuthorization

// Module 14381 (isSocialLayerApplication)
import Constants from "Constants" /* 1072 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6963 */;
import scopes2 from "scopes" /* 9849 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  const obj = ApplicationFlagUtils;
  let hasApplicationFlagResult = obj.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  const tmp3 = ApplicationFlags;
  if (!hasApplicationFlagResult) {
    const tmpResult = ApplicationFlagUtils;
    hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, tmp3.SOCIAL_LAYER_INTEGRATION);
  }
  return hasApplicationFlagResult;
};
export function isSocialLayerSDKAuthorization(application, scopes) {
  let obj = ApplicationFlagUtils;
  let hasApplicationFlagResult = obj.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  const tmp3 = ApplicationFlags;
  if (!hasApplicationFlagResult) {
    const tmpResult = ApplicationFlagUtils;
    hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, tmp3.SOCIAL_LAYER_INTEGRATION);
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item) => {
      const obj = scopes2;
      return obj.isSocialLayerUmbrellaScope(item);
    });
  }
  return hasApplicationFlagResult;
}
