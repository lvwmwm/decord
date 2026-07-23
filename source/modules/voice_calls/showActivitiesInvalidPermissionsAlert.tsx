// Module ID: 10521
// Function ID: 82127
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [4470, 1212, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 10521 (showActivitiesInvalidPermissionsAlert)
const result = require("set").fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  let obj = importDefault(4470);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.otsg2R);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["/Yx5qX"]);
  obj.hideActionSheet = false;
  obj.show(obj);
};
