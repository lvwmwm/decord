// Module ID: 11614
// Function ID: 90303
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [4018, 1212, 2230, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 11614 (getGuildPowerupsBoostInfoText)
import { BoostInfoType } from "BoostedGuildTiers";

const result = require("messagesProxy").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { boostCount: count };
    return intl3.formatToPlainString(importDefault(2230).BdRXZA, obj);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { boostCount: count };
    return intl2.formatToPlainString(importDefault(2230).xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2230)["/F7Z2y"]);
  }
};
