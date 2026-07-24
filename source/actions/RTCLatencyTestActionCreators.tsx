// Module ID: 16213
// Function ID: 125714
// Name: fetchRTCLatencyTestRegions
// Dependencies: [507, 686, 2]
// Exports: completeRTCLatencyTest, fetchRTCLatencyTestRegions

// Module 16213 (fetchRTCLatencyTestRegions)
const result = require("set").fileFinishedImporting("actions/RTCLatencyTestActionCreators.tsx");

export const fetchRTCLatencyTestRegions = function fetchRTCLatencyTestRegions(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: "" + "https:" + window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT + "?v=" + arg0, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const completeRTCLatencyTest = function completeRTCLatencyTest(latencyRankedRegions, mapped) {
  let obj = importDefault(686);
  obj = { type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions, geoRankedRegions: mapped };
  obj.dispatch(obj);
};
