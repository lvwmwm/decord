// Module ID: 14346
// Function ID: 14347
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5354, 1113, 2699, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 14346 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1113 */;
import _modDef2699 from "module_2699" /* 2699 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5354 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2699.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2699.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2699["/F7Z2y"]);
  }
}
