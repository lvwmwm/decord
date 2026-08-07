// Module ID: 8452
// Function ID: 8453
// Name: showInvalidUsernameToast
// Dependencies: [4002, 1236, 7967, 2]
// Exports: showInvalidUsernameToast

// Module 8452 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(4002);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(7967);
  obj.open(obj);
};
