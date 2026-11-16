// Module ID: 16809
// Function ID: 16810
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [5869, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 16809 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export function showGenericProfileUpdateFailureToast(text) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
}
export function showGenericGuildProfileUpdateFailureToast(intl2) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: intl2, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
}
