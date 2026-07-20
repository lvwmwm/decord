// Module ID: 7198
// Function ID: 57988
// Name: enhancedFetch
// Dependencies: []

// Module 7198 (enhancedFetch)
let closure_0 = importDefault(dependencyMap[0]);

export const enhancedFetch = () => {
  const callback = callback(async (arg0, arg1) => {
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
    obj.headers = { "Bool(true)": null, "Bool(true)": null };
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
}();
