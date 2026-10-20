// Module ID: 13277
// Function ID: 13278
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5143, 1128, 2558, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 13277 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1128 */;
import _modDef2558 from "module_2558" /* 2558 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5143 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2558.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2558.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2558["/F7Z2y"]);
  }
};
