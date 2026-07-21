// Module ID: 16041
// Function ID: 123175
// Name: fetchRTCLatencyTestRegions
// Dependencies: []
// Exports: completeRTCLatencyTest, fetchRTCLatencyTestRegions

// Module 16041 (fetchRTCLatencyTestRegions)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("actions/RTCLatencyTestActionCreators.tsx");

export const fetchRTCLatencyTestRegions = function fetchRTCLatencyTestRegions(arg0) {
  const HTTP = require(dependencyMap[0]).HTTP;
  const obj = { url: "" + "https:" + window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT + "?v=" + arg0, rejectWithError: require(dependencyMap[0]).rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const completeRTCLatencyTest = function completeRTCLatencyTest(latencyRankedRegions, mapped) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions, geoRankedRegions: mapped };
  obj.dispatch(obj);
};
