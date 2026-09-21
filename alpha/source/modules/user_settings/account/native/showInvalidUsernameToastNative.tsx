// Module ID: 7236
// Function ID: 7237
// Name: showInvalidUsernameToastNative
// Dependencies: [4454, 1115, 7237, 2]
// Exports: showInvalidUsernameToast

// Module 7236 (showInvalidUsernameToastNative)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import _modDef7237 from "module_7237" /* 7237 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7237;
  ToastActionCreatorsDefault.open(obj2);
};
