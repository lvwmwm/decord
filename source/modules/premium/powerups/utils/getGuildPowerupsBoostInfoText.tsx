// Module ID: 11645
// Function ID: 11646
// Name: getGuildPowerupsBoostInfoText
// Dependencies: [4077, 1236, 2255, 2]
// Exports: getGuildPowerupsBoostInfoText

// Module 11645 (getGuildPowerupsBoostInfoText)
import { BoostInfoType } from "BoostedGuildTiers";

const result = require("messagesProxy").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let obj = { boostCount: null };
    obj[0] = count;
    return intl3.formatToPlainString(importDefault(2255).BdRXZA, obj);
  } else if (tmp.SPENT === type) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { boostCount: null };
    obj[0] = count;
    return intl2.formatToPlainString(importDefault(2255).xvgIVG, obj);
  } else if (tmp.TOTAL === type) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2255)["/F7Z2y"]);
  }
};
