// Module ID: 13436
// Function ID: 13437
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5180, 1128, 2568, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 13436 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1128 */;
import _modDef2568 from "module_2568" /* 2568 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5180 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2568.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2568.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2568["/F7Z2y"]);
  }
};
