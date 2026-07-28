// Module ID: 11508
// Function ID: 89456
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [4382, 3844, 3851, 11509, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 11508 (useIsMessageRequestRestrictedViewer)
const result = require("SettingsDefaultFeature").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = require(4382) /* isReactiveCheckEnabled */;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = require(3844) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(3851) /* SettingsDefaultFeature */.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = require(3844) /* isFeatureAgeGated */;
  obj = { location: ChatInputGuardMessageRequest };
  let enabled = !isExplicitlyVerifiedAdult;
  if (enabled) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj3.useConfig(obj).enabled;
  }
  return enabled;
};
