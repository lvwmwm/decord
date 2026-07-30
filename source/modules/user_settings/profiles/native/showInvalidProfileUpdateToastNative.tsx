// Module ID: 13700
// Function ID: 13701
// Name: showGenericProfileUpdateFailureToast
// Dependencies: [3890, 7696, 712, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 13700 (showGenericProfileUpdateFailureToast)
const result = require("Themes").fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = importDefault(3890);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(7696), iconColor: importDefault(712).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = importDefault(3890);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(7696), iconColor: importDefault(712).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
