// Module ID: 9160
// Function ID: 71891
// Name: showInvalidUsernameToast
// Dependencies: [3832, 1212, 7640, 2]
// Exports: showInvalidUsernameToast

// Module 9160 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3832);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["TGg/2k"]);
  obj.icon = importDefault(7640);
  obj.open(obj);
};
