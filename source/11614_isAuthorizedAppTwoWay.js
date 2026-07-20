// Module ID: 11614
// Function ID: 90217
// Name: isAuthorizedAppTwoWay
// Dependencies: []
// Exports: useShouldWarnAuthorizedAppTwoWay

// Module 11614 (isAuthorizedAppTwoWay)
function isAuthorizedAppTwoWay(id) {
  let hasItem = require(dependencyMap[0]).ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require(dependencyMap[0]).ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default isAuthorizedAppTwoWay;
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  return isAuthorizedAppTwoWay(id);
};
