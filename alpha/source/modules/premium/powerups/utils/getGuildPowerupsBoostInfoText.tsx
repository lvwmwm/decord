// Module ID: 13713
// Function ID: 13714
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5218, 1125, 2567, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 13713 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1125 */;
import _modDef2567 from "module_2567" /* 2567 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5218 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2567.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2567.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2567["/F7Z2y"]);
  }
};
