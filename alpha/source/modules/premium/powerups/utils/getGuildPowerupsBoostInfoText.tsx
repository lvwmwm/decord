// Module ID: 13552
// Function ID: 13553
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [8298, 1112, 2879, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 13552 (getGuildPowerupsBoostInfoText)
import intl4 from "intl" /* 1112 */;
import _modDef2879 from "module_2879" /* 2879 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8298 */;
import size from "module_2" /* 2 */;

const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = intl4.intl;
    const obj2 = { boostCount: count };
    return intl3.formatToPlainString(_modDef2879.BdRXZA, obj2);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = intl4.intl;
    const obj = { boostCount: count };
    return intl2.formatToPlainString(_modDef2879.xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = intl4.intl;
    return intl.string(_modDef2879["/F7Z2y"]);
  }
}
