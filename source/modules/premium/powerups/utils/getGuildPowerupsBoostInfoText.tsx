// Module ID: 11569
// Function ID: 89968
// Name: getGuildPowerupsBoostInfoText
// Dependencies: []
// Exports: getGuildPowerupsBoostInfoText

// Module 11569 (getGuildPowerupsBoostInfoText)
const BoostInfoType = require(dependencyMap[0]).BoostInfoType;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx");

export const getGuildPowerupsBoostInfoText = function getGuildPowerupsBoostInfoText(count, type) {
  if (BoostInfoType.AVAILABLE === type) {
    const intl3 = require(dependencyMap[1]).intl;
    let obj = { boostCount: count };
    return intl3.formatToPlainString(importDefault(dependencyMap[2]).BdRXZA, obj);
  } else if (BoostInfoType.SPENT === type) {
    const intl2 = require(dependencyMap[1]).intl;
    obj = { boostCount: count };
    return intl2.formatToPlainString(importDefault(dependencyMap[2]).xvgIVG, obj);
  } else if (BoostInfoType.TOTAL === type) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(importDefault(dependencyMap[2])./F7Z2y);
  }
};
