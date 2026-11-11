// Module ID: 9843
// Function ID: 9844
// Dependencies: [9732, 9730, 9731]
// Exports: supportsDOMError, supportsDOMException, supportsErrorEvent, supportsNativeFetch, supportsReferrerPolicy, supportsReportingObserver

// Module 9843
import _mod9730 from "module_9730" /* 9730 */;
import _mod9732 from "module_9732" /* 9732 */;

function supportsFetch() {
  if ("fetch" in _mod9732.GLOBAL_OBJ) {
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
    if (isNativeFunction(_mod9732.GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      let flag2 = false;
      const _document = tmp2(9732).GLOBAL_OBJ.document;
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
            if (_mod9730.DEBUG_BUILD) {
              const logger = tmp2(9731).logger;
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
  return "ReportingObserver" in _mod9732.GLOBAL_OBJ;
}
