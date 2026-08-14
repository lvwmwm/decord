// Module ID: 8583
// Function ID: 8584
// Name: showInvalidUsernameToast
// Dependencies: [4062, 1236, 8093, 2]
// Exports: showInvalidUsernameToast

// Module 8583 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(4062);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(8093);
  obj.open(obj);
};
