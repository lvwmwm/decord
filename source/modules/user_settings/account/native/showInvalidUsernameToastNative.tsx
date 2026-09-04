// Module ID: 6931
// Function ID: 6932
// Name: showInvalidUsernameToast
// Dependencies: [4194, 1233, 6932, 2]
// Exports: showInvalidUsernameToast

// Module 6931 (showInvalidUsernameToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import registerAssetDefault from "registerAsset" /* 6932 */;

const result = set.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["TGg/2k"]);
  obj[2] = registerAssetDefault;
  obj.open(obj);
};
