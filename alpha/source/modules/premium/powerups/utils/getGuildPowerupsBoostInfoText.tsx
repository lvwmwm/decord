// Module ID: 14068
// Function ID: 14069
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5518, 1113, 2735, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 14068 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1113 */;
import _modDef2735 from "module_2735" /* 2735 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5518 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2735.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2735.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2735["/F7Z2y"]);
  }
}
