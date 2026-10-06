// Module ID: 6412
// Function ID: 6413
// Name: showInvalidUsernameToastNative
// Dependencies: [4531, 1127, 6413, 2]
// Exports: showInvalidUsernameToast

// Module 6412 (showInvalidUsernameToastNative)
import intl2 from "intl" /* 1127 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let intl;
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: intl.string(intl2.t["TGg/2k"]), icon: AssetRegistryDefault };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open(obj);
};
