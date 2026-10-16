// Module ID: 14244
// Function ID: 14245
// Name: getGameOrganizationDisplayNoun
// Dependencies: [10731, 1128, 2441, 2]
// Exports: default

// Module 14244 (getGameOrganizationDisplayNoun)
import intl3 from "intl" /* 1128 */;
import _modDef2441 from "module_2441" /* 2441 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10731 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  let stringResult;
  if (arg0 === constants.GUILD) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef2441.sm5cz5);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef2441.nVMqjA);
  }
  return stringResult;
};
