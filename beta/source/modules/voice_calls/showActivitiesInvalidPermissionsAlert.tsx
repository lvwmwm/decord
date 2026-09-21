// Module ID: 9609
// Function ID: 9610
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [5110, 1119, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 9609 (showActivitiesInvalidPermissionsAlert)
import util from "util" /* 1119 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  const obj2 = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj2.title = intl.string(util.t.otsg2R);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t["/Yx5qX"]);
  AlertActionCreatorsDefault.show(obj2);
};
