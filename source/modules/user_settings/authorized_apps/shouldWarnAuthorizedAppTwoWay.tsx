// Module ID: 11688
// Function ID: 11689
// Name: isAuthorizedAppTwoWay
// Dependencies: [8970, 2]
// Exports: default, useShouldWarnAuthorizedAppTwoWay

// Module 11688 (isAuthorizedAppTwoWay)
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/shouldWarnAuthorizedAppTwoWay.tsx");

export default function isAuthorizedAppTwoWay(arg0) {
  let hasItem = require(8970) /* set */.ConsoleOAuthApplications.XBOX_APPLICATION_ID === arg0;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require(8970) /* set */.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(arg0);
  }
  return hasItem;
};
export const useShouldWarnAuthorizedAppTwoWay = function useShouldWarnAuthorizedAppTwoWay(id) {
  let hasItem = require(8970) /* set */.ConsoleOAuthApplications.XBOX_APPLICATION_ID === id;
  if (!hasItem) {
    const PLAYSTATION_APPLICATION_IDS = require(8970) /* set */.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS;
    hasItem = PLAYSTATION_APPLICATION_IDS.has(id);
  }
  return hasItem;
};
