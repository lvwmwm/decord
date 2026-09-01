// Module ID: 7763
// Function ID: 7764
// Name: showInvalidUsernameToast
// Dependencies: [4194, 1236, 7764, 2]
// Exports: showInvalidUsernameToast

// Module 7763 (showInvalidUsernameToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import registerAssetDefault from "registerAsset" /* 7764 */;

const result = set.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["TGg/2k"]);
  obj[2] = registerAssetDefault;
  obj.open(obj);
};
