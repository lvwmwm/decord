// Module ID: 10127
// Function ID: 10128
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [6046, 1112, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 10127 (showActivitiesInvalidPermissionsAlert)
import intl3 from "intl" /* 1112 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6046 */;
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
