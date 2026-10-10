// Module ID: 14835
// Function ID: 14836
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [4809, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 14835 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: avatar, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: avatar, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
};
