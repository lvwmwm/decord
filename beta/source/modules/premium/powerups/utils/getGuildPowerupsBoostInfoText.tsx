// Module ID: 11960
// Function ID: 11961
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [4726, 1127, 2522, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 11960 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1127 */;
import _modDef2522 from "module_2522" /* 2522 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4726 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2522.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2522.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2522["/F7Z2y"]);
  }
};
