// Module ID: 954
// Function ID: 955
// Name: httpContextIntegration
// Dependencies: [693, 902]

// Module 954 (httpContextIntegration)
import _mod902 from "module_902" /* 902 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "HttpContext",
    preprocessEvent(request) {
      const tmpResult = _mod902;
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
