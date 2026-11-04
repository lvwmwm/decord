// Module ID: 942
// Function ID: 943
// Name: httpContextIntegration
// Dependencies: [681, 890]

// Module 942 (httpContextIntegration)
import _mod890 from "module_890" /* 890 */;
import registerSpanErrorInstrumentation from "module_681" /* 681 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "HttpContext",
    preprocessEvent(request) {
      const tmpResult = _mod890;
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
