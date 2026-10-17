// Module ID: 17130
// Function ID: 17131
// Name: isJankScreenReportingEnabled
// Dependencies: [1384, 559, 2]
// Exports: isJankScreenReportingEnabled

// Module 17130 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1384 */;
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
