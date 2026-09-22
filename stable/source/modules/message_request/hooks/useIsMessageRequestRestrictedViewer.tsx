// Module ID: 12573
// Function ID: 12574
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4849, 5504, 7402, 12574, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 12573 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4849 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5504 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7402 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  let enabled = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj3.useConfig(obj4).enabled;
  }
  return enabled;
};
