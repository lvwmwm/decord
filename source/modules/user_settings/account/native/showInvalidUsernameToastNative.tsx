// Module ID: 8323
// Function ID: 8324
// Name: showInvalidUsernameToast
// Dependencies: [3986, 1236, 7837, 2]
// Exports: showInvalidUsernameToast

// Module 8323 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3986);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(7837);
  obj.open(obj);
};
