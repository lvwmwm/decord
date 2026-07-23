// Module ID: 9232
// Function ID: 72197
// Name: showInvalidUsernameToast
// Dependencies: [3831, 1212, 7607, 2]
// Exports: showInvalidUsernameToast

// Module 9232 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3831);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["TGg/2k"]);
  obj.icon = importDefault(7607);
  obj.open(obj);
};
