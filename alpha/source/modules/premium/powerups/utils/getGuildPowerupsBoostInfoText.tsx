// Module ID: 14078
// Function ID: 14079
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5225, 1114, 2569, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 14078 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1114 */;
import _modDef2569 from "module_2569" /* 2569 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5225 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2569.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2569.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2569["/F7Z2y"]);
  }
}
