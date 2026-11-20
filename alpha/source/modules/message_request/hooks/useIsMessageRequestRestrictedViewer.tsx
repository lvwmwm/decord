// Module ID: 13206
// Function ID: 13207
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6292, 5456, 5464, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13206 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5456 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5464 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6292 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
