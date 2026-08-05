// Module ID: 8295
// Function ID: 8296
// Name: showInvalidUsernameToast
// Dependencies: [3956, 1236, 7809, 2]
// Exports: showInvalidUsernameToast

// Module 8295 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3956);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(7809);
  obj.open(obj);
};
