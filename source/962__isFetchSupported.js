// Module ID: 962
// Function ID: 10415
// Name: _isFetchSupported
// Dependencies: []

// Module 962 (_isFetchSupported)
function _isFetchSupported() {
  if ("fetch" in arg1(arg6[0]).GLOBAL_OBJ) {
    const _Headers = Headers;
    const headers = new Headers();
    const _Request = Request;
    const request = new Request("data:,");
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
arg5.supportsFetch = _isFetchSupported;
arg5.supportsHistory = function supportsHistory() {
  let history = "history" in arg1(arg6[0]).GLOBAL_OBJ;
  if (history) {
    history = arg1(arg6[0]).GLOBAL_OBJ.history;
  }
  return history;
};
arg5.supportsNativeFetch = function supportsNativeFetch() {
  if ("string" === typeof globalThis.EdgeRuntime) {
    return true;
  } else if (_isFetchSupported()) {
    if (isNativeFunction(arg1(arg6[0]).GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      const _document = arg1(arg6[0]).GLOBAL_OBJ.document;
      if (_document) {
        if ("function" === typeof obj.createElement) {
          const element = <iframe />;
          element.hidden = true;
          const head2 = obj.head;
          head2.appendChild(element);
          const contentWindow = element.contentWindow;
          let _fetch = tmp17;
          if (null != contentWindow) {
            _fetch = contentWindow.fetch;
          }
          if (_fetch) {
            isNativeFunction(tmp13.contentWindow.fetch);
          }
          const head = _document.head;
          head.removeChild(element);
          const tmp13 = element;
        }
      }
    }
  } else {
    return false;
  }
};
arg5.supportsReferrerPolicy = function supportsReferrerPolicy() {
  if (_isFetchSupported()) {
    const _Request = Request;
    const obj = { referrerPolicy: "origin" };
    const request = new Request("_", obj);
    return true;
  } else {
    return false;
  }
};
arg5.supportsReportingObserver = function supportsReportingObserver() {
  return "ReportingObserver" in arg1(arg6[0]).GLOBAL_OBJ;
};
