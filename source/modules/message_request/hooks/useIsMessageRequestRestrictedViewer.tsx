// Module ID: 11713
// Function ID: 11714
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4500, 3964, 3971, 11714, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 11713 (useIsMessageRequestRestrictedViewer)
const result = require("SettingsDefaultFeature").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = require(4500) /* useAgeVerificationRunner */;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = require(3964) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(3971) /* SettingsDefaultFeature */.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = require(3964) /* isFeatureAgeGated */;
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
