// Module ID: 14316
// Function ID: 14317
// Name: getGameOrganizationDisplayNoun
// Dependencies: [10810, 1128, 2459, 2]
// Exports: default

// Module 14316 (getGameOrganizationDisplayNoun)
import intl3 from "intl" /* 1128 */;
import _modDef2459 from "module_2459" /* 2459 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10810 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  let stringResult;
  if (arg0 === constants.GUILD) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef2459.sm5cz5);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef2459.nVMqjA);
  }
  return stringResult;
};
