// Module ID: 7156
// Function ID: 7157
// Name: showInvalidUsernameToastNative
// Dependencies: [5707, 1114, 2]
// Exports: showInvalidUsernameToast

// Module 7156 (showInvalidUsernameToastNative)
import intl2 from "intl" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
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
