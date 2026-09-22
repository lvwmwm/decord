// Module ID: 12687
// Function ID: 12688
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [4526, 1114, 2428, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 12687 (getGuildPowerupsBoostInfoText)
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4526 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = util.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2428.BdRXZA, obj2);
  } else if (tmp.SPENT === type) {
    const intl2 = util.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2428.xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = util.intl;
    return intl.string(_modDef2428["/F7Z2y"]);
  }
};
