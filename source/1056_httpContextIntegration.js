// Module ID: 1056
// Function ID: 11311
// Name: httpContextIntegration
// Dependencies: [794, 1004]

// Module 1056 (httpContextIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "HttpContext",
  preprocessEvent(request) {
    let obj = outer1_0(outer1_1[1]);
    const httpRequestData = obj.getHttpRequestData();
    request = request.request;
    let headers;
    if (null != request) {
      headers = request.headers;
    }
    obj = { headers: Object.assign({}, httpRequestData.headers, headers) };
    request.request = Object.assign({}, httpRequestData, request.request, obj);
  }
}));
