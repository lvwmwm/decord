// Module ID: 12156
// Function ID: 12157
// Name: isAuthorizedAppTwoWay
// Dependencies: [10618, 2]
// Exports: default, useShouldWarnAuthorizedAppTwoWay

// Module 12156 (isAuthorizedAppTwoWay)
import set from "set" /* 2 */;
import set2 from "set" /* 10618 */;

const result = set.fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default function isAuthorizedAppTwoWay(arg0) {
  let hasItem = set2.ConsoleOAuthApplications.XBOX_APPLICATION_ID === arg0;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = set2.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(arg0);
  }
  return hasItem;
};
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  let hasItem = set2.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = set2.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
};
