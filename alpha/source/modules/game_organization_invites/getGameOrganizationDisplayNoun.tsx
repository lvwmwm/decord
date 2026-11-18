// Module ID: 12019
// Function ID: 12020
// Name: getGameOrganizationDisplayNoun
// Dependencies: [11856, 1113, 2555, 2]
// Exports: default

// Module 12019 (getGameOrganizationDisplayNoun)
import intl5 from "intl" /* 1113 */;
import _modDef2555 from "module_2555" /* 2555 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11856 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  let displayNoun;
  let lowercase;
  ({ displayNoun, lowercase } = arg0);
  if (lowercase === undefined) {
    lowercase = false;
  }
  if (constants.GUILD === displayNoun) {
    const intl4 = intl5.intl;
    const string4 = intl4.string;
    const tmp17 = _modDef2555;
    return string4(lowercase ? tmp17.aikK3o : tmp17.sm5cz5);
  } else if (constants.ALLIANCE === displayNoun) {
    const intl3 = intl5.intl;
    const string3 = intl3.string;
    const tmp13 = _modDef2555;
    return string3(lowercase ? tmp13.Y84911 : tmp13.qw4LoI);
  } else if (constants.CLAN === displayNoun) {
    const intl2 = intl5.intl;
    const string2 = intl2.string;
    const tmp9 = _modDef2555;
    return string2(lowercase ? tmp9.QGuKKF : tmp9.jc1qry);
  } else {
    const intl = intl5.intl;
    const string = intl.string;
    const tmp5 = _modDef2555;
    return string(lowercase ? tmp5.xXXGsq : tmp5.nVMqjA);
  }
};
