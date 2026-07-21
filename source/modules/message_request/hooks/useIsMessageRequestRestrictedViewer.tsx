// Module ID: 11462
// Function ID: 89302
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: []
// Exports: useIsMessageRequestRestrictedViewer

// Module 11462 (useIsMessageRequestRestrictedViewer)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = function useIsMessageRequestRestrictedViewer(ChatInputGuardMessageRequest) {
  let obj = require(dependencyMap[0]);
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = require(dependencyMap[1]).useIsSettingTeenByDefault(require(dependencyMap[2]).SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  const obj2 = require(dependencyMap[1]);
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
