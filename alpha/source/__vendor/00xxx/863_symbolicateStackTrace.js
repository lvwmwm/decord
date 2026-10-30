// Module ID: 863
// Function ID: 864
// Name: symbolicateStackTrace
// Dependencies: [5, 864, 215]
// Exports: default

// Module 863 (symbolicateStackTrace)
import getDevServer from "getDevServer" /* 864 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let _fetch;

let obj = function _symbolicateStackTrace() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c4;
    let c5;
    let closure_3;
    let obj4;
    _fetch = arg0;
    let closure_1 = arg1;
    const obj10 = getDevServer;
    const defaultResult = obj10.default();
    const tmp18 = _fetch;
    const tmp19 = closure_1;
    const tmp20 = require;
    const tmp21 = dependencyMap;
    if (!defaultResult.bundleLoadedFromServer) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Bundle was not loaded from Metro.");
      throw error;
    }
    _fetch = _fetch.fetch;
    let fetch = _fetch;
    if (_fetch == null) {
      fetch = tmp20(tmp21[2]).fetch;
    }
    const request = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj4) };
    const _JSON = JSON;
    obj4 = { stack: tmp18, extraData: tmp19 };
    const text = `${tmp22.url}symbolicate`;
    _fetch = await fetch(`${tmp22.url}symbolicate`, request);
    await closure_0.json();
    return arg1;
  });
  return obj(...arguments);
};

export default function symbolicateStackTrace(arg0, arg1) {
  return obj(...arguments);
};
