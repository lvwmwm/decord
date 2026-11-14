// Module ID: 14871
// Function ID: 14872
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6830, 5995, 6003, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14871 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5995 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6003 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
