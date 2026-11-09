// Module ID: 16780
// Function ID: 16781
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [5837, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 16780 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
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
