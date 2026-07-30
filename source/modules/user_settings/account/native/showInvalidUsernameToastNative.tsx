// Module ID: 9224
// Function ID: 9225
// Name: showInvalidUsernameToast
// Dependencies: [3890, 1236, 7696, 2]
// Exports: showInvalidUsernameToast

// Module 9224 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3890);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(7696);
  obj.open(obj);
};
