// Module ID: 9220
// Function ID: 72120
// Name: showInvalidUsernameToast
// Dependencies: [0, 0, 0, 0]
// Exports: showInvalidUsernameToast

// Module 9220 (showInvalidUsernameToast)
import result from "result";

result = result.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = importDefault(dependencyMap[0]);
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE" };
  const intl = require(dependencyMap[1]).intl;
  obj.content = intl.string(require(dependencyMap[1]).t.TGg/2k);
  obj.icon = importDefault(dependencyMap[2]);
  obj.open(obj);
};
