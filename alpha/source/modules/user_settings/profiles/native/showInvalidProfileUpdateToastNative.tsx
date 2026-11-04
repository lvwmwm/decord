// Module ID: 16712
// Function ID: 16713
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [5846, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 16712 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export function showGenericProfileUpdateFailureToast(intl2) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: intl2, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
}
export function showGenericGuildProfileUpdateFailureToast(intl2) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: intl2, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
}
