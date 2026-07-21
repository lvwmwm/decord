// Module ID: 10510
// Function ID: 82064
// Name: showActivitiesInvalidPermissionsAlert
// Dependencies: []
// Exports: showActivitiesInvalidPermissionsAlert

// Module 10510 (showActivitiesInvalidPermissionsAlert)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  let obj = importDefault(dependencyMap[0]);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.otsg2R);
  const intl2 = require(dependencyMap[1]).intl;
  obj.body = intl2.string(require(dependencyMap[1]).t./Yx5qX);
  obj.hideActionSheet = false;
  obj.show(obj);
};
