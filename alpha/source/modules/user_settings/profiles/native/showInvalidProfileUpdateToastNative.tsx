// Module ID: 14780
// Function ID: 14781
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [4768, 5010, 587, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 14780 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import AssetRegistryDefault from "AssetRegistry" /* 5010 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: AssetRegistryDefault, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
  obj.open(obj2);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: AssetRegistryDefault, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
  obj.open(obj2);
};
