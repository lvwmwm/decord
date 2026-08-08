// Module ID: 8512
// Function ID: 8513
// Name: showInvalidUsernameToast
// Dependencies: [4002, 1236, 8027, 2]
// Exports: showInvalidUsernameToast

// Module 8512 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(4002);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(8027);
  obj.open(obj);
};
