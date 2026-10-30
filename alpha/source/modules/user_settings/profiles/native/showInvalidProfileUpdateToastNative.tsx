// Module ID: 16412
// Function ID: 16413
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [5707, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 16412 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
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
