// Module ID: 12146
// Function ID: 12147
// Name: GameOrganizationBenefits
// Dependencies: [1112, 2559, 2]

// Module 12146 (GameOrganizationBenefits)
import intl2 from "intl" /* 1112 */;
import _modDef2559 from "module_2559" /* 2559 */;
import size from "module_2" /* 2 */;

const items = [, , ];
const obj = {
  key: "auto-sync",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2559.WUVzdk);
  }
};
items[0] = obj;
items[1] = {
  key: "linked-channel",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2559.MEQJ1m);
  }
};
items[2] = {
  key: "guild-invite",
  getText(arg0) {
    let displayNoun = arg0;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const prop = _modDef2559["hn+Lsg"];
    if (arg0 == null) {
      displayNoun = "other";
    }
    return formatToPlainString(prop, { displayNoun });
  }
};
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;
