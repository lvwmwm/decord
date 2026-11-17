// Module ID: 12933
// Function ID: 12934
// Name: GameOrganizationBenefits
// Dependencies: [1113, 2565, 2]

// Module 12933 (GameOrganizationBenefits)
import intl2 from "intl" /* 1113 */;
import _modDef2565 from "module_2565" /* 2565 */;
import size from "module_2" /* 2 */;

let obj = {
  key: "auto-sync",
  getText() {
    const intl = intl2.intl;
    return intl.string(_modDef2565.WUVzdk);
  }
};
const items = [
  obj,
  {
    key: "linked-channel",
    getText() {
      const intl = intl2.intl;
      return intl.string(_modDef2565.MEQJ1m);
    }
  },
  {
    key: "guild-invite",
    getText(noun) {
      const intl = intl2.intl;
      const obj = { noun };
      return intl.formatToPlainString(_modDef2565["hn+Lsg"], obj);
    }
  }
];
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;
