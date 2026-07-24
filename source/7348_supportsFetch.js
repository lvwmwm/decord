// Module ID: 7348
// Function ID: 59297
// Name: supportsFetch
// Dependencies: [7237, 7235, 7236]

// Module 7348 (supportsFetch)
const require = arg1;
const dependencyMap = arg6;
function supportsFetch() {
  if ("fetch" in require(7237) /* getGlobalSingleton */.GLOBAL_OBJ) {
    const _Headers = Headers;
    const headers = new Headers();
    const _Request = Request;
    const request = new Request("http://www.example.com");
    const _Response = Response;
    const response = new Response();
    return true;
  } else {
    return false;
  }
}
function isNativeFunction(arg0) {
  let isMatch = arg0;
  if (arg0) {
    isMatch = /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(arg0.toString());
    const obj = /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/;
  }
  return isMatch;
}
arg5.isNativeFunction = isNativeFunction;
arg5.supportsDOMError = function supportsDOMError() {
  const dOMError = new globalThis.DOMError("");
  return true;
};
arg5.supportsDOMException = function supportsDOMException() {
  const dOMException = new globalThis.DOMException("");
  return true;
};
arg5.supportsErrorEvent = function supportsErrorEvent() {
  const errorEvent = new globalThis.ErrorEvent("");
  return true;
};
arg5.supportsFetch = supportsFetch;
arg5.supportsNativeFetch = function supportsNativeFetch() {
  if ("string" === typeof globalThis.EdgeRuntime) {
    return true;
  } else if (supportsFetch()) {
    if (isNativeFunction(require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      const _document = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.document;
      if (_document) {
        if ("function" === typeof obj.createElement) {
          const element = <iframe />;
          element.hidden = true;
          const head2 = obj.head;
          head2.appendChild(element);
          const contentWindow = element.contentWindow;
          let _fetch = contentWindow;
          if (contentWindow) {
            _fetch = tmp14.contentWindow.fetch;
          }
          if (_fetch) {
            isNativeFunction(tmp14.contentWindow.fetch);
          }
          const head = _document.head;
          head.removeChild(element);
        }
      }
    }
  } else {
    return false;
  }
};
arg5.supportsReferrerPolicy = function supportsReferrerPolicy() {
  if (supportsFetch()) {
    const _Request = Request;
    const obj = { referrerPolicy: "origin" };
    const request = new Request("_", obj);
    return true;
  } else {
    return false;
  }
};
arg5.supportsReportingObserver = function supportsReportingObserver() {
  return "ReportingObserver" in require(7237) /* getGlobalSingleton */.GLOBAL_OBJ;
};
