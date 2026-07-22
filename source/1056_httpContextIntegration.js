// Module ID: 1056
// Function ID: 11309
// Name: httpContextIntegration
// Dependencies: []

// Module 1056 (httpContextIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const httpContextIntegration = _module.defineIntegration(() => ({
  name: "HttpContext",
  preprocessEvent(request) {
    let obj = callback(closure_1[1]);
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
