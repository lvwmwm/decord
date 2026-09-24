// Module ID: 17896
// Function ID: 17897
// Name: RTCLatencyTestActionCreators
// Dependencies: [1275, 577, 2]
// Exports: completeRTCLatencyTest, fetchRTCLatencyTestRegions

// Module 17896 (RTCLatencyTestActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/RTCLatencyTestActionCreators.tsx");

export const fetchRTCLatencyTestRegions = function fetchRTCLatencyTestRegions(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: "https:" + window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT + "?v=" + arg0, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const completeRTCLatencyTest = function completeRTCLatencyTest(latencyRankedRegions, mapped) {
  DispatcherDefault.dispatch({ type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions, geoRankedRegions: mapped });
};
