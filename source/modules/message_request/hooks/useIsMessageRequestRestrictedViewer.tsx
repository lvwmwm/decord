// Module ID: 11528
// Function ID: 11529
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4405, 3868, 3875, 11529, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 11528 (useIsMessageRequestRestrictedViewer)
const result = require("SettingsDefaultFeature").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = require(4405) /* useShouldCallReactiveCheck */;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = require(3868) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(3875) /* SettingsDefaultFeature */.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = require(3868) /* isFeatureAgeGated */;
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
