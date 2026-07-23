// Module ID: 12305
// Function ID: 95876
// Name: getRemoteJoinFooterLabel
// Dependencies: [653, 1212, 2]
// Exports: getRemoteJoinFooterLabel

// Module 12305 (getRemoteJoinFooterLabel)
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform2) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform2) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.aqN8U9);
  } else if (ActivityGamePlatforms.IOS === remoteJoinPlatform2) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.CyQ5ia);
  } else if (ActivityGamePlatforms.ANDROID === remoteJoinPlatform2) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.fMs6uW);
  } else if (ActivityGamePlatforms.XBOX === remoteJoinPlatform2) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.o0hjdt);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["R/1GpG"]);
  }
};
