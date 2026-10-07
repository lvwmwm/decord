// Module ID: 9013
// Function ID: 9014
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [5707, 1126, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 9013 (showActivitiesInvalidPermissionsAlert)
import intl3 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
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
