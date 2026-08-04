// Module ID: 13821
// Function ID: 13822
// Name: showGenericProfileUpdateFailureToast
// Dependencies: [3986, 7837, 712, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 13821 (showGenericProfileUpdateFailureToast)
const result = require("Themes").fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = importDefault(3986);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(7837), iconColor: importDefault(712).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = importDefault(3986);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(7837), iconColor: importDefault(712).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
