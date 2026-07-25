// Module ID: 11581
// Function ID: 90026
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [4019, 1212, 2231, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 11581 (getGuildPowerupsBoostInfoText)
import { BoostInfoType } from "BoostedGuildTiers";

const result = require("messagesProxy").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { boostCount: count };
    return intl3.formatToPlainString(importDefault(2231).BdRXZA, obj);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { boostCount: count };
    return intl2.formatToPlainString(importDefault(2231).xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2231)["/F7Z2y"]);
  }
};
