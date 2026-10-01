// Module ID: 11933
// Function ID: 11934
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [5048, 5735, 6717, 11934, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 11933 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6717 */;
import MessageRequestRestrictionExperimentDefault from "MessageRequestRestrictionExperiment" /* 11934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  const obj = AgeVerificationUtils;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  let tmp3 = !isExplicitlyVerifiedAdult;
  const obj3 = MessageRequestRestrictionExperimentDefault;
  const obj4 = { location: ChatInputGuardMessageRequest };
  const enabled = obj3.useConfig(obj4).enabled;
  if (!isExplicitlyVerifiedAdult) {
    tmp3 = isSettingTeenByDefault;
  }
  if (tmp3) {
    tmp3 = enabled;
  }
  return tmp3;
};
