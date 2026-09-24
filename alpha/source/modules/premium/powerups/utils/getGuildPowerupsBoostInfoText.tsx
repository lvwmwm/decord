// Module ID: 12903
// Function ID: 12904
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [4718, 1115, 2518, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 12903 (getGuildPowerupsBoostInfoText)
import util from "util" /* 1115 */;
import _modDef2518 from "module_2518" /* 2518 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4718 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = util.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2518.BdRXZA, obj2);
  } else if (tmp.SPENT === type) {
    const intl2 = util.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2518.xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = util.intl;
    return intl.string(_modDef2518["/F7Z2y"]);
  }
};
