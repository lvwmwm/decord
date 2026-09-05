// Module ID: 6991
// Function ID: 6992
// Name: showInvalidUsernameToast
// Dependencies: [4259, 1114, 6992, 2]
// Exports: showInvalidUsernameToast

// Module 6991 (showInvalidUsernameToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import dispatcherDefault from "dispatcher" /* 4259 */;
import registerAssetDefault from "registerAsset" /* 6992 */;

const result = set.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["TGg/2k"]);
  obj[2] = registerAssetDefault;
  obj.open(obj);
};
