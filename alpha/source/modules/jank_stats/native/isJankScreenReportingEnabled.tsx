// Module ID: 17258
// Function ID: 17259
// Name: isJankScreenReportingEnabled
// Dependencies: [1384, 559, 4923, 2]
// Exports: isJankScreenReportingEnabled

// Module 17258 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import DeviceUtils from "DeviceUtils" /* 4923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export const isJankScreenReportingEnabled = function isJankScreenReportingEnabled() {
  let cachedEnabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const AndroidJankPerScreenExperiment = tmp(559).AndroidJankPerScreenExperiment;
    cachedEnabled = AndroidJankPerScreenExperiment.getCachedEnabled();
  } else {
    const tmpResult = PlatformUtils;
    cachedEnabled = tmpResult.isIOS();
    if (cachedEnabled) {
      const tmpResult2 = DeviceUtils;
      cachedEnabled = tmpResult2.getSystemVersionMajor() >= 18;
    }
    if (cachedEnabled) {
      const IOSJankPerScreenExperiment = tmp(559).IOSJankPerScreenExperiment;
      cachedEnabled = IOSJankPerScreenExperiment.getCachedEnabled();
    }
  }
  return cachedEnabled;
};
