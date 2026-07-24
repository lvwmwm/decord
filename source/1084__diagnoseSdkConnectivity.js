// Module ID: 1084
// Function ID: 12453
// Name: _diagnoseSdkConnectivity
// Dependencies: [5, 794]
// Exports: diagnoseSdkConnectivity

// Module 1084 (_diagnoseSdkConnectivity)
import asyncGeneratorStep from "asyncGeneratorStep";

async function _diagnoseSdkConnectivity() {
  let str3;
  const client = outer2_0(outer2_1[1]).getClient();
  if (client) {
    if (client.getDsn()) {
      const tunnel = client.getOptions().tunnel;
      str3 = tunnel;
      if (!tunnel) {
        str3 = "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
      }
      yield outer2_0(outer2_1[1]).suppressTracing(() => fetch(str3, { body: "{}", method: "POST", mode: "cors", credentials: "omit" }));
    } else {
      return "no-dsn-configured";
    }
  } else {
    return "no-client-active";
  }
  const obj = outer2_0(outer2_1[1]);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const diagnoseSdkConnectivity = function diagnoseSdkConnectivity() {
  return _diagnoseSdkConnectivity(...arguments);
};
