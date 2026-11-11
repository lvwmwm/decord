// Module ID: 16968
// Function ID: 16969
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [5952, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 16968 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
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
