// Module ID: 18598
// Function ID: 18599
// Name: isJankScreenReportingEnabled
// Dependencies: [1377, 5118, 5200, 2]
// Exports: isJankScreenReportingEnabled

// Module 18598 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import DeviceUtils from "DeviceUtils" /* 5200 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export function isJankScreenReportingEnabled() {
  let cachedEnabled;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const AndroidJankPerScreenExperiment = tmp(5118).AndroidJankPerScreenExperiment;
    cachedEnabled = AndroidJankPerScreenExperiment.getCachedEnabled();
  } else {
    const tmpResult = PlatformUtils;
    cachedEnabled = tmpResult.isIOS();
    if (cachedEnabled) {
      const tmpResult2 = DeviceUtils;
      cachedEnabled = tmpResult2.getSystemVersionMajor() >= 18;
    }
    if (cachedEnabled) {
      const IOSJankPerScreenExperiment = tmp(5118).IOSJankPerScreenExperiment;
      cachedEnabled = IOSJankPerScreenExperiment.getCachedEnabled();
    }
  }
  return cachedEnabled;
}
