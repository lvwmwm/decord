// Module ID: 1008
// Function ID: 11005
// Name: makeFetchTransport
// Dependencies: []
// Exports: makeFetchTransport

// Module 1008 (makeFetchTransport)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const makeFetchTransport = function makeFetchTransport(bufferSize) {
  const require = bufferSize;
  async function _makeRequest(body, arg1) {
    closure_2 = closure_2 + length;
    closure_3 = closure_3 + 1;
    let obj = { "Bool(false)": "auto.browser.global_handlers.onunhandledrejection", "Bool(false)": "a", "Bool(false)": "p", body: body.body, headers: headers.headers };
    let tmp2 = tmp;
    if (closure_2 <= 60000) {
      tmp2 = closure_3 < 15;
    }
    obj.keepalive = tmp2;
    const response = yield closure_1(closure_0.url, Object.assign(obj, closure_0.fetchOptions));
    obj = { statusCode: response.status };
    obj = { x-sentry-rate-limits: headers.get("X-Sentry-Rate-Limits"), retry-after: headers2.get("Retry-After") };
    const headers = response.headers;
    const headers2 = response.headers;
    obj.headers = obj;
    closure_2 = closure_2 - length;
    closure_3 = closure_3 - 1;
    return obj;
  }
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let nativeImplementation = arguments[1];
    }
    const dependencyMap = nativeImplementation;
    let closure_2 = 0;
    let closure_3 = 0;
    const obj2 = require(dependencyMap[2]);
    let num3 = bufferSize.bufferSize;
    if (!num3) {
      num3 = 40;
    }
    return obj2.createTransport(bufferSize, function makeRequest(arg0) {
      return _makeRequest(...arguments);
    }, require(dependencyMap[2]).makePromiseBuffer(num3));
  }
  nativeImplementation = require(dependencyMap[1]).getNativeImplementation("fetch");
};
