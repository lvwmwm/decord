// Module ID: 12290
// Function ID: 12291
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [5008, 1126, 2600, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 12290 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1126 */;
import _modDef2600 from "module_2600" /* 2600 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5008 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2600.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2600.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2600["/F7Z2y"]);
  }
};
