// Module ID: 11393
// Function ID: 11394
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [5906, 1128, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 11393 (showActivitiesInvalidPermissionsAlert)
import intl3 from "intl" /* 1128 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5906 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl3.t.otsg2R), body: intl2.string(intl3.t["/Yx5qX"]), hideActionSheet: false };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
};
