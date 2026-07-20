// Module ID: 13447
// Function ID: 102140
// Name: showGenericProfileUpdateFailureToast
// Dependencies: []
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 13447 (showGenericProfileUpdateFailureToast)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = importDefault(dependencyMap[0]);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(dependencyMap[1]), iconColor: importDefault(dependencyMap[2]).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = importDefault(dependencyMap[0]);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(dependencyMap[1]), iconColor: importDefault(dependencyMap[2]).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
