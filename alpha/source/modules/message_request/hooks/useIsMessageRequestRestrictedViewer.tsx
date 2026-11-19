// Module ID: 13236
// Function ID: 13237
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6290, 5454, 5462, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13236 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5454 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5462 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6290 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
