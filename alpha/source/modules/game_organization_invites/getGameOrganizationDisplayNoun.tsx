// Module ID: 14202
// Function ID: 14203
// Name: getGameOrganizationDisplayNoun
// Dependencies: [10719, 1126, 2438, 2]
// Exports: default

// Module 14202 (getGameOrganizationDisplayNoun)
import intl3 from "intl" /* 1126 */;
import _modDef2438 from "module_2438" /* 2438 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10719 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  let stringResult;
  if (arg0 === constants.GUILD) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef2438.sm5cz5);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef2438.nVMqjA);
  }
  return stringResult;
};
