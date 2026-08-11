// Module ID: 8518
// Function ID: 8519
// Name: showInvalidUsernameToast
// Dependencies: [4021, 1236, 8029, 2]
// Exports: showInvalidUsernameToast

// Module 8518 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(4021);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(8029);
  obj.open(obj);
};
