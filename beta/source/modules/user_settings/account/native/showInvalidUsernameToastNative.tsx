// Module ID: 7257
// Function ID: 7258
// Name: showInvalidUsernameToastNative
// Dependencies: [5869, 1113, 2]
// Exports: showInvalidUsernameToast

// Module 7257 (showInvalidUsernameToastNative)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export function showInvalidUsernameToast() {
  let intl;
  const obj = { text: intl.string(intl2.t["TGg/2k"]), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("USER_SETTINGS_UPDATE_FAILURE", obj);
}
