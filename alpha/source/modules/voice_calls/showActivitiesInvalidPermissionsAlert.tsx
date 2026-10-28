// Module ID: 11457
// Function ID: 11458
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: [5944, 1125, 2]
// Exports: showActivitiesInvalidPermissionsAlert

// Module 11457 (showActivitiesInvalidPermissionsAlert)
import intl3 from "intl" /* 1125 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5944 */;
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
