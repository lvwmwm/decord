// Module ID: 1084
// Function ID: 12447
// Name: _diagnoseSdkConnectivity
// Dependencies: []
// Exports: diagnoseSdkConnectivity

// Module 1084 (_diagnoseSdkConnectivity)
async function _diagnoseSdkConnectivity() {
  let str3;
  const client = str3(closure_1[1]).getClient();
  if (client) {
    if (client.getDsn()) {
      const tunnel = client.getOptions().tunnel;
      str3 = tunnel;
      if (!tunnel) {
        str3 = "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
      }
      yield str3(closure_1[1]).suppressTracing(() => fetch(str3, {}));
    } else {
      return "no-dsn-configured";
    }
  } else {
    return "no-client-active";
  }
  const obj = str3(closure_1[1]);
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const diagnoseSdkConnectivity = function diagnoseSdkConnectivity() {
  return _diagnoseSdkConnectivity(...arguments);
};
