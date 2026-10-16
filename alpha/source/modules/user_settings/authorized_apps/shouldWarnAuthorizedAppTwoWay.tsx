// Module ID: 13218
// Function ID: 13219
// Name: shouldWarnAuthorizedAppTwoWay
// Dependencies: [13219, 2]
// Exports: default, useShouldWarnAuthorizedAppTwoWay

// Module 13218 (shouldWarnAuthorizedAppTwoWay)
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 13219 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default function isAuthorizedAppTwoWay(arg0) {
  let hasItem = ConsoleOAuthApplications.ConsoleOAuthApplications.XBOX_APPLICATION_ID === arg0;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = ConsoleOAuthApplications.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(arg0);
  }
  return hasItem;
};
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  let hasItem = ConsoleOAuthApplications.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = ConsoleOAuthApplications.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
};
