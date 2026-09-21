// Module ID: 16344
// Function ID: 16345
// Name: isJankScreenReportingEnabled
// Dependencies: [1368, 2071, 2]
// Exports: isJankScreenReportingEnabled

// Module 16344 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 2071 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export const isJankScreenReportingEnabled = function isJankScreenReportingEnabled() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    const AndroidJankPerScreenExperiment = libdiscoreExperiments.AndroidJankPerScreenExperiment;
    isAndroidResult = AndroidJankPerScreenExperiment.getCachedEnabled();
  }
  return isAndroidResult;
};
