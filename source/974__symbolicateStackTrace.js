// Module ID: 974
// Function ID: 10478
// Name: _symbolicateStackTrace
// Dependencies: []
// Exports: default

// Module 974 (_symbolicateStackTrace)
async function _symbolicateStackTrace(stack, extraData, arg2) {
  let obj = callback(closure_2[1]);
  if (defaultResult.bundleLoadedFromServer) {
    let _fetch = _fetch.fetch;
    if (null == _fetch) {
      _fetch = callback(closure_2[2]).fetch;
    }
    obj = { method: "POST" };
    obj = { Content-Type: "application/json" };
    obj.headers = obj;
    const _JSON = JSON;
    const obj1 = { stack, extraData };
    const text = `${tmp.url}symbolicate`;
    obj.body = JSON.stringify(obj1);
    return yield yield _fetch(`${tmp.url}symbolicate`, obj).json();
  } else {
    const _Error = Error;
    const error = new Error("Bundle was not loaded from Metro.");
    throw error;
  }
  const defaultResult = obj.default();
}
let closure_3 = importDefault(dependencyMap[0]);

export default function symbolicateStackTrace(arg0, arg1) {
  return _symbolicateStackTrace(...arguments);
};
