// Module ID: 18004
// Function ID: 18005
// Name: isJankScreenReportingEnabled
// Dependencies: [1376, 4884, 4966, 2]
// Exports: isJankScreenReportingEnabled

// Module 18004 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import DeviceUtils from "DeviceUtils" /* 4966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export function isJankScreenReportingEnabled() {
  let cachedEnabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const AndroidJankPerScreenExperiment = tmp(4884).AndroidJankPerScreenExperiment;
    cachedEnabled = AndroidJankPerScreenExperiment.getCachedEnabled();
  } else {
    const tmpResult = PlatformUtils;
    cachedEnabled = tmpResult.isIOS();
    if (cachedEnabled) {
      const tmpResult2 = DeviceUtils;
      cachedEnabled = tmpResult2.getSystemVersionMajor() >= 18;
    }
    if (cachedEnabled) {
      const IOSJankPerScreenExperiment = tmp(4884).IOSJankPerScreenExperiment;
      cachedEnabled = IOSJankPerScreenExperiment.getCachedEnabled();
    }
  }
  return cachedEnabled;
}
