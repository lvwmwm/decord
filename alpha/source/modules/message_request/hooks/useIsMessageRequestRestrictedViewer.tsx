// Module ID: 13424
// Function ID: 13425
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6825, 5705, 5713, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13424 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5705 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5713 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
