// Module ID: 13204
// Function ID: 13205
// Name: getGameOrganizationDisplayNoun
// Dependencies: [11364, 1113, 2404, 2]
// Exports: default

// Module 13204 (getGameOrganizationDisplayNoun)
import intl3 from "intl" /* 1113 */;
import _modDef2404 from "module_2404" /* 2404 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11364 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(lowercase) {
  let string2Result;
  let flag = lowercase.lowercase;
  const displayNoun = lowercase.displayNoun;
  if (flag === undefined) {
    flag = false;
  }
  if (displayNoun === constants.GUILD) {
    const intl2 = intl3.intl;
    const string2 = intl2.string;
    const tmp9 = _modDef2404;
    string2Result = string2(flag ? tmp9.aikK3o : tmp9.sm5cz5);
  } else {
    const intl = intl3.intl;
    const string = intl.string;
    const tmp4 = _modDef2404;
    string2Result = string(flag ? tmp4.xXXGsq : tmp4.nVMqjA);
  }
  return string2Result;
};
