// Module ID: 17532
// Function ID: 17533
// Name: isJankScreenReportingEnabled
// Dependencies: [1378, 4788, 4870, 2]
// Exports: isJankScreenReportingEnabled

// Module 17532 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import DeviceUtils from "DeviceUtils" /* 4870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export function isJankScreenReportingEnabled() {
  let cachedEnabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const AndroidJankPerScreenExperiment = tmp(4788).AndroidJankPerScreenExperiment;
    cachedEnabled = AndroidJankPerScreenExperiment.getCachedEnabled();
  } else {
    const tmpResult = PlatformUtils;
    cachedEnabled = tmpResult.isIOS();
    if (cachedEnabled) {
      const tmpResult2 = DeviceUtils;
      cachedEnabled = tmpResult2.getSystemVersionMajor() >= 18;
    }
    if (cachedEnabled) {
      const IOSJankPerScreenExperiment = tmp(4788).IOSJankPerScreenExperiment;
      cachedEnabled = IOSJankPerScreenExperiment.getCachedEnabled();
    }
  }
  return cachedEnabled;
}
