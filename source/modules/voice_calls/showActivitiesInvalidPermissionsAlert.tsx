// Module ID: 9460
// Function ID: 9461
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [4865, 1233, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 9460 (showActivitiesInvalidPermissionsAlert)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import setDefault from "set" /* 4865 */;

const result = set.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  let obj = setDefault;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.otsg2R);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["/Yx5qX"]);
  obj.show(obj);
};
