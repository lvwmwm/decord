// Module ID: 7237
// Function ID: 7238
// Name: showInvalidUsernameToastNative
// Dependencies: [4458, 1119, 7238, 2]
// Exports: showInvalidUsernameToast

// Module 7237 (showInvalidUsernameToastNative)
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import _modDef7238 from "module_7238" /* 7238 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7238;
  ToastActionCreatorsDefault.open(obj2);
};
