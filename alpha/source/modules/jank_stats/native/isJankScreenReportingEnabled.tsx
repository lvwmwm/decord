// Module ID: 15928
// Function ID: 15929
// Name: isJankScreenReportingEnabled
// Dependencies: [1369, 559, 2]
// Exports: isJankScreenReportingEnabled

// Module 15928 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1369 */;
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
