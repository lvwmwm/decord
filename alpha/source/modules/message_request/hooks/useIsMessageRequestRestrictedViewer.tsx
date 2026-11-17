// Module ID: 13952
// Function ID: 13953
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6815, 5989, 5997, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13952 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5989 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5997 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
