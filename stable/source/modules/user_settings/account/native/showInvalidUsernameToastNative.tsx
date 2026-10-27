// Module ID: 6958
// Function ID: 6959
// Name: showInvalidUsernameToastNative
// Dependencies: [4904, 1128, 2]
// Exports: showInvalidUsernameToast

// Module 6958 (showInvalidUsernameToastNative)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let intl;
  const obj = { text: intl.string(intl2.t["TGg/2k"]), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("USER_SETTINGS_UPDATE_FAILURE", obj);
};
