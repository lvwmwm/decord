// Module ID: 12187
// Function ID: 93699
// Name: getRemoteJoinFooterLabel
// Dependencies: []
// Exports: getRemoteJoinFooterLabel

// Module 12187 (getRemoteJoinFooterLabel)
const ActivityGamePlatforms = require(dependencyMap[0]).ActivityGamePlatforms;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform2) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform2) {
    const intl5 = require(dependencyMap[1]).intl;
    return intl5.string(require(dependencyMap[1]).t.aqN8U9);
  } else if (ActivityGamePlatforms.IOS === remoteJoinPlatform2) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.CyQ5ia);
  } else if (ActivityGamePlatforms.ANDROID === remoteJoinPlatform2) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.fMs6uW);
  } else if (ActivityGamePlatforms.XBOX === remoteJoinPlatform2) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.o0hjdt);
  } else {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.R/1GpG);
  }
};
