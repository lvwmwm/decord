// Module ID: 8435
// Function ID: 8436
// Name: showInvalidUsernameToast
// Dependencies: [3985, 1236, 7950, 2]
// Exports: showInvalidUsernameToast

// Module 8435 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3985);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(7950);
  obj.open(obj);
};
