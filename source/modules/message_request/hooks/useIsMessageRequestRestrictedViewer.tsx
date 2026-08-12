// Module ID: 11861
// Function ID: 11862
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4559, 4040, 4047, 11862, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 11861 (useIsMessageRequestRestrictedViewer)
const result = require("SettingsDefaultFeature").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = require(4559) /* useAgeVerificationRunner */;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = require(4040) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(4047) /* SettingsDefaultFeature */.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = require(4040) /* isFeatureAgeGated */;
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
