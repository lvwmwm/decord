// Module ID: 14482
// Function ID: 14483
// Name: showGenericProfileUpdateFailureToast
// Dependencies: [4194, 7773, 709, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 14482 (showGenericProfileUpdateFailureToast)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import registerAssetDefault from "registerAsset" /* 7773 */;

const result = set.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAssetDefault, iconColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAssetDefault, iconColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
