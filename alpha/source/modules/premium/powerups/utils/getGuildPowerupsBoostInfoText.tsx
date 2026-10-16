// Module ID: 13172
// Function ID: 13173
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5067, 1128, 2603, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 13172 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1128 */;
import _modDef2603 from "module_2603" /* 2603 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5067 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2603.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2603.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2603["/F7Z2y"]);
  }
};
