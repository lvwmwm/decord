// Module ID: 12805
// Function ID: 12806
// Name: getRemoteJoinFooterLabel
// Dependencies: [1086, 1127, 2]
// Exports: getRemoteJoinFooterLabel

// Module 12805 (getRemoteJoinFooterLabel)
import Constants from "Constants" /* 1086 */;
import intl6 from "intl" /* 1127 */;
import size from "module_2" /* 2 */;

const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export const getRemoteJoinFooterLabel = function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = intl6.intl;
    return intl5.string(intl6.t.aqN8U9);
  } else if (ActivityGamePlatforms.IOS === remoteJoinPlatform) {
    const intl4 = intl6.intl;
    return intl4.string(intl6.t.CyQ5ia);
  } else if (ActivityGamePlatforms.ANDROID === remoteJoinPlatform) {
    const intl3 = intl6.intl;
    return intl3.string(intl6.t.fMs6uW);
  } else if (ActivityGamePlatforms.XBOX === remoteJoinPlatform) {
    const intl2 = intl6.intl;
    return intl2.string(intl6.t.o0hjdt);
  } else {
    const intl = intl6.intl;
    return intl.string(intl6.t["R/1GpG"]);
  }
};
