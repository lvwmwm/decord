// Module ID: 15807
// Function ID: 15808
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [5649, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 15807 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
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
