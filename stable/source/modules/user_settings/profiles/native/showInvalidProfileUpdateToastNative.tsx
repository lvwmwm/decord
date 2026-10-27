// Module ID: 15626
// Function ID: 15627
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [4904, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 15626 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(intl2) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: intl2, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(intl2) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: intl2, variant: "critical" };
  obj.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
};
