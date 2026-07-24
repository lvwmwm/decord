// Module ID: 11298
// Function ID: 87878
// Name: getItemSubtitleForMaxPlayers
// Dependencies: [1212, 2]
// Exports: default, getItemSubtitleForMaxPlayersShort, getItemSubtitleForMaxPlayersShorter

// Module 11298 (getItemSubtitleForMaxPlayers)
const result = require("set").fileFinishedImporting("modules/activities/utils/getItemSubtitleForMaxPlayers.tsx");

export default function getItemSubtitleForMaxPlayers(count) {
  if (count > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj = { count };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["p/YmkR"], obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t.s1vQIL);
  }
  return formatToPlainStringResult;
};
export const getItemSubtitleForMaxPlayersShort = function getItemSubtitleForMaxPlayersShort(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1 - " + arg0;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    combined = intl.string(require(1212) /* getSystemLocale */.t.zMNEiF);
  }
  return combined;
};
export const getItemSubtitleForMaxPlayersShorter = function getItemSubtitleForMaxPlayersShorter(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1-" + arg0;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    combined = intl.string(require(1212) /* getSystemLocale */.t.zMNEiF);
  }
  return combined;
};
