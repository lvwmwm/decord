// Module ID: 8622
// Function ID: 8623
// Name: showInvalidUsernameToast
// Dependencies: [4094, 1236, 8143, 2]
// Exports: showInvalidUsernameToast

// Module 8622 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(4094);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(8143);
  obj.open(obj);
};
