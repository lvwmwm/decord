// Module ID: 12204
// Function ID: 12205
// Name: GameOrganizationBenefits
// Dependencies: [1113, 2557, 2]

// Module 12204 (GameOrganizationBenefits)
import intl2 from "intl" /* 1113 */;
import _modDef2557 from "module_2557" /* 2557 */;
import size from "module_2" /* 2 */;

const items = [, , ];
const obj = {
  key: "auto-sync",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2557.WUVzdk);
  }
};
items[0] = obj;
items[1] = {
  key: "linked-channel",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2557.MEQJ1m);
  }
};
items[2] = {
  key: "guild-invite",
  getText(arg0) {
    let displayNoun = arg0;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const prop = _modDef2557["hn+Lsg"];
    if (arg0 == null) {
      displayNoun = "other";
    }
    return formatToPlainString(prop, { displayNoun });
  }
};
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;
