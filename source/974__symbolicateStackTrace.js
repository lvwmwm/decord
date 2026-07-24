// Module ID: 974
// Function ID: 10484
// Name: _symbolicateStackTrace
// Dependencies: [5, 975, 215]
// Exports: default

// Module 974 (_symbolicateStackTrace)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
async function _symbolicateStackTrace(arg0, arg1, arg2) {
  let obj = outer2_1(outer2_2[1]);
  if (defaultResult.bundleLoadedFromServer) {
    let _fetch = outer2_0.fetch;
    if (null == _fetch) {
      _fetch = outer2_1(outer2_2[2]).fetch;
    }
    obj = { method: "POST" };
    obj = { "Content-Type": "application/json" };
    obj.headers = obj;
    const _JSON = JSON;
    const obj1 = { stack: arg0, extraData: arg1 };
    const text = `${tmp.url}symbolicate`;
    obj.body = JSON.stringify(obj1);
    return yield yield _fetch(`${tmp.url}symbolicate`, obj).json();
  } else {
    const _Error = Error;
    const error = new Error("Bundle was not loaded from Metro.");
    throw error;
  }
  defaultResult = obj.default();
}

export default function symbolicateStackTrace(arg0, arg1) {
  return _symbolicateStackTrace(...arguments);
};
