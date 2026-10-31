// Module ID: 15132
// Function ID: 15133
// Name: getRemoteJoinFooterLabel
// Dependencies: [9738, 1113, 2]
// Exports: getRemoteJoinFooterLabel

// Module 15132 (getRemoteJoinFooterLabel)
import intl6 from "intl" /* 1113 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getRemoteJoinFooterLabel.tsx");

export function getRemoteJoinFooterLabel(remoteJoinPlatform) {
  if (ActivityGamePlatforms.ActivityGamePlatforms.DESKTOP === remoteJoinPlatform) {
    const intl5 = tmp(1113).intl;
    return intl5.string(intl6.t.aqN8U9);
  } else if (ActivityGamePlatforms.ActivityGamePlatforms.IOS === remoteJoinPlatform) {
    const intl4 = tmp(1113).intl;
    return intl4.string(intl6.t.CyQ5ia);
  } else if (ActivityGamePlatforms.ActivityGamePlatforms.ANDROID === remoteJoinPlatform) {
    const intl3 = tmp(1113).intl;
    return intl3.string(intl6.t.fMs6uW);
  } else if (ActivityGamePlatforms.ActivityGamePlatforms.XBOX === remoteJoinPlatform) {
    const intl2 = tmp(1113).intl;
    return intl2.string(intl6.t.o0hjdt);
  } else {
    const intl = tmp(1113).intl;
    return intl.string(intl6.t["R/1GpG"]);
  }
}
