// Module ID: 14605
// Function ID: 14606
// Name: showGenericProfileUpdateFailureToast
// Dependencies: [4259, 6992, 576, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 14605 (showGenericProfileUpdateFailureToast)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 576 */;
import dispatcherDefault from "dispatcher" /* 4259 */;
import registerAssetDefault from "registerAsset" /* 6992 */;

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
