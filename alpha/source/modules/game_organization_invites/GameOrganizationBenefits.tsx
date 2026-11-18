// Module ID: 12221
// Function ID: 12222
// Name: GameOrganizationBenefits
// Dependencies: [1113, 2555, 2]

// Module 12221 (GameOrganizationBenefits)
import intl2 from "intl" /* 1113 */;
import _modDef2555 from "module_2555" /* 2555 */;
import size from "module_2" /* 2 */;

let obj = {
  key: "auto-sync",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2555.WUVzdk);
  }
};
const items = [
  obj,
  {
    key: "linked-channel",
    getText() {
      const intl = intl2.intl;
      return intl.string(_modDef2555.MEQJ1m);
    }
  },
  {
    key: "guild-invite",
    getText(noun) {
      const intl = intl2.intl;
      const obj = { noun };
      return intl.formatToPlainString(_modDef2555["hn+Lsg"], obj);
    }
  }
];
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;
