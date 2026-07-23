// Module ID: 1008
// Function ID: 11010
// Name: makeFetchTransport
// Dependencies: [5, 1009, 794]
// Exports: makeFetchTransport

// Module 1008 (makeFetchTransport)
import asyncGeneratorStep from "asyncGeneratorStep";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const makeFetchTransport = function makeFetchTransport(bufferSize) {
  const _require = bufferSize;
  async function _makeRequest(arg0, arg1) {
    outer2_2 = outer2_2 + length;
    outer2_3 = outer2_3 + 1;
    let obj = { body: arg0.body, method: "POST", referrerPolicy: "strict-origin", headers: outer2_0.headers };
    let tmp2 = tmp;
    if (outer2_2 <= 60000) {
      tmp2 = outer2_3 < 15;
    }
    obj.keepalive = tmp2;
    const response = yield outer2_1(outer2_0.url, Object.assign(obj, outer2_0.fetchOptions));
    obj = { statusCode: response.status };
    obj = { "x-sentry-rate-limits": headers.get("X-Sentry-Rate-Limits"), "retry-after": headers2.get("Retry-After") };
    headers = response.headers;
    headers2 = response.headers;
    obj.headers = obj;
    outer2_2 = outer2_2 - length;
    outer2_3 = outer2_3 - 1;
    return obj;
  }
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let nativeImplementation = arguments[1];
    }
    let c2 = 0;
    let c3 = 0;
    const obj2 = _require(nativeImplementation[2]);
    let num3 = bufferSize.bufferSize;
    if (!num3) {
      num3 = 40;
    }
    return obj2.createTransport(bufferSize, function makeRequest(arg0) {
      return _makeRequest(...arguments);
    }, _require(nativeImplementation[2]).makePromiseBuffer(num3));
  }
  nativeImplementation = _require(nativeImplementation[1]).getNativeImplementation("fetch");
};
