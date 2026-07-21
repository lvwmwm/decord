// Module ID: 11258
// Function ID: 87563
// Name: getItemSubtitleForMaxPlayers
// Dependencies: []
// Exports: default, getItemSubtitleForMaxPlayersShort, getItemSubtitleForMaxPlayersShorter

// Module 11258 (getItemSubtitleForMaxPlayers)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/getItemSubtitleForMaxPlayers.tsx");

export default function getItemSubtitleForMaxPlayers(count) {
  if (count > 0) {
    const intl2 = require(dependencyMap[0]).intl;
    const obj = { count };
    let formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[0]).t.p/YmkR, obj);
  } else {
    const intl = require(dependencyMap[0]).intl;
    formatToPlainStringResult = intl.string(require(dependencyMap[0]).t.s1vQIL);
  }
  return formatToPlainStringResult;
};
export const getItemSubtitleForMaxPlayersShort = function getItemSubtitleForMaxPlayersShort(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1 - " + arg0;
  } else {
    const intl = require(dependencyMap[0]).intl;
    combined = intl.string(require(dependencyMap[0]).t.zMNEiF);
  }
  return combined;
};
export const getItemSubtitleForMaxPlayersShorter = function getItemSubtitleForMaxPlayersShorter(arg0) {
  if (arg0 > 0) {
    const _HermesInternal = HermesInternal;
    let combined = "1-" + arg0;
  } else {
    const intl = require(dependencyMap[0]).intl;
    combined = intl.string(require(dependencyMap[0]).t.zMNEiF);
  }
  return combined;
};
