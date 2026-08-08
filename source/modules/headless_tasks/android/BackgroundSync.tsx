// Module ID: 17002
// Function ID: 17003
// Name: resolved
// Dependencies: [4994, 1218, 6876, 3, 1952, 16382, 2]

// Module 17002 (resolved)
import _handleConnectionOpen from "_handleConnectionOpen";
import fetchFingerprint from "fetchFingerprint";
import getState from "getState";

const require = arg1;
let closure_6 = new require("timestamp")("BackgroundSync");
let tmp = new require("timestamp")("BackgroundSync");
let result = require("getState").fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  if ("active" === state.getState()) {
    let resolved = Promise.resolve();
  } else {
    if (!tmp) {
      const result = importDefault(1952).carefullyOpenDatabase(id.getId());
      const obj2 = importDefault(1952);
    }
    resolved = new Promise((arg0) => {
      outer1_6.log("Executing BackgroundSync with ", callback);
      const obj = callback(outer1_2[5]);
      callback(outer1_2[5]).backgroundSync({}).then(arg0);
    });
    let obj = connected;
    tmp = connected.isConnected() || connected.isTryingToConnect();
  }
  return resolved;
};
