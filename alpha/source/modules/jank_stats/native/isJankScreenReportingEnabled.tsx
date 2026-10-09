// Module ID: 16350
// Function ID: 16351
// Name: isJankScreenReportingEnabled
// Dependencies: [1382, 559, 2]
// Exports: isJankScreenReportingEnabled

// Module 16350 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let tmp;
const libdiscoreExperiments = tmp(559);
const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export const isJankScreenReportingEnabled = function isJankScreenReportingEnabled() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const AndroidJankPerScreenExperiment = libdiscoreExperiments.AndroidJankPerScreenExperiment;
    isAndroidResult = AndroidJankPerScreenExperiment.getCachedEnabled();
  }
  return isAndroidResult;
};
