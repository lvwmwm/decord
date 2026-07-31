// Module ID: 9237
// Function ID: 9238
// Name: showInvalidUsernameToast
// Dependencies: [3894, 1236, 7704, 2]
// Exports: showInvalidUsernameToast

// Module 9237 (showInvalidUsernameToast)
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(3894);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = importDefault(7704);
  obj.open(obj);
};
