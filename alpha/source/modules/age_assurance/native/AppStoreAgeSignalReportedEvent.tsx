// Module ID: 8078
// Function ID: 8079
// Name: AppStoreAgeSignalReportedEvent
// Dependencies: [1071, 1256, 1379, 2]
// Exports: trackAgeSignalReported

// Module 8078 (AppStoreAgeSignalReportedEvent)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReportedEvent.tsx");

export function trackAgeSignalReported(app_start, submitted, result) {
  let obj2;
  let reason;
  const obj = { platform: obj2.getNativePlatform(), source: app_start, outcome: submitted, server_result: result, skip_reason: reason };
  const track = AnalyticsUtilsDefault.track;
  const APP_STORE_AGE_SIGNAL_REPORTED = AnalyticEvents.APP_STORE_AGE_SIGNAL_REPORTED;
  AnalyticsUtilsDefault;
  result = undefined;
  obj2 = PlatformUtils;
  if (result != null) {
    result = result.result;
  }
  if (result == null) {
    result = null;
  }
  reason = undefined;
  if (result != null) {
    reason = result.reason;
  }
  if (reason == null) {
    reason = null;
  }
  track(APP_STORE_AGE_SIGNAL_REPORTED, obj);
}
