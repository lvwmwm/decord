// Module ID: 11657
// Function ID: 11658
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4997, 4075, 4082, 11658, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 11657 (useIsMessageRequestRestrictedViewer)
import set from "set" /* 2 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4075 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 4082 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4997 */;

const result = set.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = useAgeVerificationRunner;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = isFeatureAgeGated.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = isFeatureAgeGated;
  obj = { location: ChatInputGuardMessageRequest };
  let enabled = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj3.useConfig(obj).enabled;
  }
  return enabled;
};
