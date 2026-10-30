// Module ID: 13116
// Function ID: 13117
// Dependencies: [13005, 13003, 13004]
// Exports: supportsDOMError, supportsDOMException, supportsErrorEvent, supportsNativeFetch, supportsReferrerPolicy, supportsReportingObserver

// Module 13116
import _mod13003 from "module_13003" /* 13003 */;
import _mod13005 from "module_13005" /* 13005 */;

function supportsFetch() {
  if ("fetch" in _mod13005.GLOBAL_OBJ) {
    try {
      const _Headers = Headers;
      const self = this;
      const headers = new Headers();
      const _Request = Request;
      const self2 = this;
      const request = new Request("http://www.example.com");
      const _Response = Response;
      const self3 = this;
      const response = new Response();
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
function isNativeFunction(arg0) {
  let isMatch = arg0;
  if (isMatch) {
    const obj = /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/;
    isMatch = obj.test(arg0.toString());
  }
  return isMatch;
}

export { isNativeFunction };
export function supportsDOMError() {
  try {
    const self = this;
    const dOMError = new globalThis.DOMError("");
    return true;
  } catch (err) {
    return false;
  }
}
export function supportsDOMException() {
  try {
    const self = this;
    const dOMException = new globalThis.DOMException("");
    return true;
  } catch (err) {
    return false;
  }
}
export function supportsErrorEvent() {
  try {
    const self = this;
    const errorEvent = new globalThis.ErrorEvent("");
    return true;
  } catch (err) {
    return false;
  }
}
export { supportsFetch };
export function supportsNativeFetch() {
  if (typeof globalThis.EdgeRuntime === "string") {
    return true;
  } else if (supportsFetch()) {
    const tmp = isNativeFunction;
    if (isNativeFunction(_mod13005.GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      let flag2 = false;
      const _document = tmp2(13005).GLOBAL_OBJ.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            const _fetch = element.contentWindow && tmp5.contentWindow.fetch;
            if (_fetch) {
              flag2 = tmp(tmp5.contentWindow.fetch);
            }
            const head2 = _document.head;
            head2.removeChild(element);
          } catch (tmp10) {
            if (_mod13003.DEBUG_BUILD) {
              const logger = tmp2(13004).logger;
              logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", tmp10);
            }
          }
        }
      }
      return flag2;
    }
  } else {
    return false;
  }
}
export function supportsReferrerPolicy() {
  if (supportsFetch()) {
    try {
      const _Request = Request;
      const self = this;
      const request = new Request("_", { referrerPolicy: "origin" });
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
export function supportsReportingObserver() {
  return "ReportingObserver" in _mod13005.GLOBAL_OBJ;
}
