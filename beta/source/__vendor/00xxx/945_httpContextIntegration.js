// Module ID: 945
// Function ID: 946
// Name: httpContextIntegration
// Dependencies: [682, 893]

// Module 945 (httpContextIntegration)
import _mod893 from "module_893" /* 893 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "HttpContext",
    preprocessEvent(request) {
      const tmpResult = _mod893;
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
