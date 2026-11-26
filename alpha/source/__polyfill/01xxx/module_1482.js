// Module ID: 1482
// Function ID: 1483
// Dependencies: []

// Module 1482
const obj = {
  reachabilityUrl: "https://clients3.google.com/generate_204",
  reachabilityMethod: "HEAD",
  reachabilityHeaders: {},
  reachabilityTest(status) {
    return Promise.resolve(204 === status.status);
  },
  reachabilityShortTimeout: 5000,
  reachabilityLongTimeout: 60000,
  reachabilityRequestTimeout: 15000,
  reachabilityShouldRun() {
    return true;
  },
  shouldFetchWiFiSSID: false,
  useNativeReachability: true
};

export default obj;
