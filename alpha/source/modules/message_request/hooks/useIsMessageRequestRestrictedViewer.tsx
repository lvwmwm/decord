// Module ID: 14871
// Function ID: 14872
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6820, 5985, 5993, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14871 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5985 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5993 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6820 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
