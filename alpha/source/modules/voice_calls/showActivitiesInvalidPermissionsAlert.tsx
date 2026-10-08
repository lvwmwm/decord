// Module ID: 10659
// Function ID: 10660
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [5297, 1126, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 10659 (showActivitiesInvalidPermissionsAlert)
import intl3 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5297 */;
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
