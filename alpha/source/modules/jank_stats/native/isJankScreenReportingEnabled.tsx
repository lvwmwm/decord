// Module ID: 17571
// Function ID: 17572
// Name: isJankScreenReportingEnabled
// Dependencies: [1380, 4667, 4749, 2]
// Exports: isJankScreenReportingEnabled

// Module 17571 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import DeviceUtils from "DeviceUtils" /* 4749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export function isJankScreenReportingEnabled() {
  let cachedEnabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const AndroidJankPerScreenExperiment = tmp(4667).AndroidJankPerScreenExperiment;
    cachedEnabled = AndroidJankPerScreenExperiment.getCachedEnabled();
  } else {
    const tmpResult = PlatformUtils;
    cachedEnabled = tmpResult.isIOS();
    if (cachedEnabled) {
      const tmpResult2 = DeviceUtils;
      cachedEnabled = tmpResult2.getSystemVersionMajor() >= 18;
    }
    if (cachedEnabled) {
      const IOSJankPerScreenExperiment = tmp(4667).IOSJankPerScreenExperiment;
      cachedEnabled = IOSJankPerScreenExperiment.getCachedEnabled();
    }
  }
  return cachedEnabled;
}
