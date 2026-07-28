// Module ID: 9204
// Function ID: 72043
// Name: showInvalidUsernameToast
// Dependencies: [3866, 1212, 7676, 2]
// Exports: showInvalidUsernameToast

// Module 9204 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3866);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["TGg/2k"]);
  obj.icon = importDefault(7676);
  obj.open(obj);
};
