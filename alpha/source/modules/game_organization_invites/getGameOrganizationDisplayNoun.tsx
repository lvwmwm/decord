// Module ID: 14367
// Function ID: 14368
// Name: getGameOrganizationDisplayNoun
// Dependencies: [10833, 1128, 2396, 2]
// Exports: default

// Module 14367 (getGameOrganizationDisplayNoun)
import intl3 from "intl" /* 1128 */;
import _modDef2396 from "module_2396" /* 2396 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10833 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  let stringResult;
  if (arg0 === constants.GUILD) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef2396.sm5cz5);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef2396.nVMqjA);
  }
  return stringResult;
};
