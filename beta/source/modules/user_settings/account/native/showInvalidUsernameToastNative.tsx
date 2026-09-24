// Module ID: 7269
// Function ID: 7270
// Name: showInvalidUsernameToastNative
// Dependencies: [4490, 1119, 7270, 2]
// Exports: showInvalidUsernameToast

// Module 7269 (showInvalidUsernameToastNative)
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import _modDef7270 from "module_7270" /* 7270 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7270;
  ToastActionCreatorsDefault.open(obj2);
};
