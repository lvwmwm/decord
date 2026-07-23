// Module ID: 7208
// Function ID: 58056
// Name: enhancedFetch
// Dependencies: [5]

// Module 7208 (enhancedFetch)
import asyncGeneratorStep from "asyncGeneratorStep";


export const enhancedFetch = (() => {
  callback = callback(async (arg0, arg1) => {
    let obj = {};
    let method;
    if (null != arg1) {
      method = arg1.method;
    }
    let str = "GET";
    if (null != method) {
      str = method;
    }
    obj.method = str;
    obj.headers = { Accept: "application/json", "Content-Type": "application/json" };
    if (null != arg1) {
      if (arg1.body) {
        obj = {};
        const _JSON = JSON;
        obj.body = JSON.stringify(arg1.body);
      }
      const obj3 = yield fetch(arg0, Object.assign(obj, {}));
      if (obj3.ok) {
        return obj3.json();
      } else {
        const _Object = Object;
        const _Error = Error;
        const error = new Error(obj3.statusText);
        obj = { statusCode: obj3.status };
        throw Object.assign(error, obj);
      }
    }
  });
  return function enhancedFetch(combined) {
    return callback(...arguments);
  };
})();
