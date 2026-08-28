// Module ID: 17440
// Function ID: 17441
// Name: resolved
// Dependencies: [5186, 1218, 7104, 3, 1974, 16830, 2]

// Module 17440 (resolved)
import timestampDefault from "timestamp" /* 3 */;
import databaseNameDefault from "databaseName" /* 1974 */;
import closure_3 from "_handleConnectionOpen" /* 5186 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "getState" /* 7104 */;

const require = arg1;
let closure_6 = new timestampDefault("BackgroundSync");
let tmp = new timestampDefault("BackgroundSync");
let result = require("set").fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default (arg0) => {
  closure_0 = arg0;
  if ("active" === state.getState()) {
    let resolved = Promise.resolve();
  } else {
    if (!tmp) {
      const result = databaseNameDefault.carefullyOpenDatabase(id.getId());
      const obj2 = databaseNameDefault;
    }
    resolved = new Promise((arg0) => {
      closure_1_6.log("Executing BackgroundSync with ", callback);
      const obj = callback(closure_1_2[5]);
      callback(closure_1_2[5]).backgroundSync({}).then(arg0);
    });
    let obj = connected;
    tmp = connected.isConnected() || connected.isTryingToConnect();
  }
  return resolved;
};
