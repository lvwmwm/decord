// Module ID: 12268
// Function ID: 12269
// Name: GameOrganizationBenefits
// Dependencies: [1112, 2639, 2]

// Module 12268 (GameOrganizationBenefits)
import intl2 from "intl" /* 1112 */;
import _modDef2639 from "module_2639" /* 2639 */;
import size from "module_2" /* 2 */;

const items = [, , ];
const obj = {
  key: "auto-sync",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2639.WUVzdk);
  }
};
items[0] = obj;
items[1] = {
  key: "linked-channel",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2639.MEQJ1m);
  }
};
items[2] = {
  key: "guild-invite",
  getText(arg0) {
    let displayNoun = arg0;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const prop = _modDef2639["hn+Lsg"];
    if (arg0 == null) {
      displayNoun = "other";
    }
    return formatToPlainString(prop, { displayNoun });
  }
};
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;
