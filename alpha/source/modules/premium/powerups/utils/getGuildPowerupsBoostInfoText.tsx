// Module ID: 14113
// Function ID: 14114
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5230, 1113, 2570, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 14113 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1113 */;
import _modDef2570 from "module_2570" /* 2570 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5230 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2570.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2570.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2570["/F7Z2y"]);
  }
}
