// Module ID: 10648
// Function ID: 10649
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [5739, 1113, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 10648 (showActivitiesInvalidPermissionsAlert)
import intl3 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5739 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export function showActivitiesInvalidPermissionsAlert() {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl3.t.otsg2R), body: intl2.string(intl3.t["/Yx5qX"]), hideActionSheet: false };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
}
