// Module ID: 957
// Function ID: 958
// Name: httpContextIntegration
// Dependencies: [694, 905]

// Module 957 (httpContextIntegration)
import _mod905 from "module_905" /* 905 */;
import registerSpanErrorInstrumentation from "module_694" /* 694 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "HttpContext",
    preprocessEvent(request) {
      const tmpResult = _mod905;
      const httpRequestData = tmpResult.getHttpRequestData();
      const obj = {};
      const merged = Object.assign(httpRequestData.headers);
      request = request.request;
      let headers;
      if (request != null) {
        headers = request.headers;
      }
      const merged1 = Object.assign(headers);
      const obj2 = { headers: obj };
      const merged2 = Object.assign(httpRequestData);
      const merged3 = Object.assign(request.request);
      request.request = obj2;
    }
  };
  return obj;
});
