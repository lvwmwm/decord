// Module ID: 6679
// Function ID: 6680
// Name: showInvalidUsernameToastNative
// Dependencies: [4768, 1126, 5010, 2]
// Exports: showInvalidUsernameToast

// Module 6679 (showInvalidUsernameToastNative)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import AssetRegistryDefault from "AssetRegistry" /* 5010 */;
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
