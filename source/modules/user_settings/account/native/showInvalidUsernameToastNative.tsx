// Module ID: 9224
// Function ID: 72132
// Name: showInvalidUsernameToast
// Dependencies: [0, 0, 0, 0]
// Exports: showInvalidUsernameToast

// Module 9224 (showInvalidUsernameToast)
const result = require("__exportStarResult1").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(dependencyMap[0]);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE" };
  const intl = require(dependencyMap[1]).intl;
  obj.content = intl.string(require(dependencyMap[1]).t.TGg/2k);
  obj.icon = importDefault(dependencyMap[2]);
  obj.open(obj);
};
