// Module ID: 14150
// Function ID: 14151
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [4531, 6413, 588, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 14150 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 588 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: AssetRegistryDefault, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj2);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: AssetRegistryDefault, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj2);
};
