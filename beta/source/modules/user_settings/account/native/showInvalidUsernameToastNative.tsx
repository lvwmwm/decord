// Module ID: 7268
// Function ID: 7269
// Name: showInvalidUsernameToastNative
// Dependencies: [4486, 1115, 7269, 2]
// Exports: showInvalidUsernameToast

// Module 7268 (showInvalidUsernameToastNative)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import _modDef7269 from "module_7269" /* 7269 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7269;
  ToastActionCreatorsDefault.open(obj2);
};
