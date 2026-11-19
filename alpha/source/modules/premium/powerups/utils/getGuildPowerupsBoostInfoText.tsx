// Module ID: 13354
// Function ID: 13355
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [8213, 1113, 2755, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 13354 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1113 */;
import _modDef2755 from "module_2755" /* 2755 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8213 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2755.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2755.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2755["/F7Z2y"]);
  }
}
