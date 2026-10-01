// Module ID: 15636
// Function ID: 15637
// Name: isJankScreenReportingEnabled
// Dependencies: [1364, 2071, 2]
// Exports: isJankScreenReportingEnabled

// Module 15636 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let tmp;
const libdiscoreExperiments = tmp(2071);
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
