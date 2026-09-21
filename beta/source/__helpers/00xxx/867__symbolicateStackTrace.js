// Module ID: 867
// Function ID: 868
// Name: _symbolicateStackTrace
// Dependencies: [5, 868, 215]
// Exports: default

// Module 867 (_symbolicateStackTrace)
import _mod868 from "module_868" /* 868 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = arg1;
let closure_4 = async function _symbolicateStackTrace(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp4;
          closure_131_0 = undefined;
          const tmp22 = closure_0;
          const tmp23 = closure_1;
          const tmp24 = require;
          const tmp25 = dependencyMap;
          if (defaultResult.bundleLoadedFromServer) {
            _fetch = _fetch.fetch;
            let fetch = _fetch;
            if (_fetch == null) {
              fetch = tmp24(tmp25[2]).fetch;
            }
            const request = { method: "POST", headers: { "Content-Type": "application/json" }, body: null };
            const _JSON = JSON;
            const obj4 = { stack: tmp22, extraData: tmp23 };
            const text = `${tmp26.url}symbolicate`;
            request.body = JSON.stringify(obj4);
            c4 = 1;
            c5 = 1;
            const obj5 = { value: fetch(`${tmp26.url}symbolicate`, request), done: false };
            return obj5;
          } else {
            const _Error = Error;
            const error = new Error("Bundle was not loaded from Metro.");
            throw error;
          }
          defaultResult = _mod868.default();
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_131_0 = value;
          c4 = 2;
          c5 = 1;
          const obj7 = { value: closure_131_0.json(), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp17) {
      c5 = tmp;
      throw tmp17;
    }
  }
};

export default function symbolicateStackTrace(arg0, arg1) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
