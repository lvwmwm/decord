// Module ID: 11711
// Function ID: 11712
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [5953, 1114, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 11711 (showActivitiesInvalidPermissionsAlert)
import intl3 from "intl" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
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
