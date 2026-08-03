// Module ID: 13787
// Function ID: 13788
// Name: showGenericProfileUpdateFailureToast
// Dependencies: [3956, 7825, 712, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 13787 (showGenericProfileUpdateFailureToast)
const result = require("Themes").fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = importDefault(3956);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(7825), iconColor: importDefault(712).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = importDefault(3956);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: importDefault(7825), iconColor: importDefault(712).colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
