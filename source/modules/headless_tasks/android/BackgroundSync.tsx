// Module ID: 16730
// Function ID: 130290
// Name: resolved
// Dependencies: [4843, 1194, 6307, 3, 1899, 16105, 2]

// Module 16730 (resolved)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import importDefaultResult from "timestamp";

const require = arg1;
importDefaultResult = new importDefaultResult("BackgroundSync");
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  if ("active" === state.getState()) {
    let resolved = Promise.resolve();
  } else {
    let isConnectedResult = _isNativeReflectConstruct.isConnected();
    if (!isConnectedResult) {
      isConnectedResult = _isNativeReflectConstruct.isTryingToConnect();
    }
    if (!isConnectedResult) {
      const result = importDefault(1899).carefullyOpenDatabase(id.getId());
      let obj = importDefault(1899);
    }
    resolved = new Promise((arg0) => {
      outer1_6.log("Executing BackgroundSync with ", callback);
      const obj = callback(outer1_2[5]);
      callback(outer1_2[5]).backgroundSync({}).then(arg0);
    });
  }
  return resolved;
};
