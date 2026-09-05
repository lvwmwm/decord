// Module ID: 12554
// Function ID: 12555
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [4450, 1114, 2428, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 12554 (getGuildPowerupsBoostInfoText)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2428 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4450 */;

const BoostInfoType = BoostedGuildTiers.BoostInfoType;
const result = set.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = getSystemLocale.intl;
    let obj = { boostCount: null };
    obj[0] = count;
    return intl3.formatToPlainString(messagesProxyDefault.BdRXZA, obj);
  } else if (tmp.SPENT === type) {
    const intl2 = getSystemLocale.intl;
    obj = { boostCount: null };
    obj[0] = count;
    return intl2.formatToPlainString(messagesProxyDefault.xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["/F7Z2y"]);
  }
};
