// Module ID: 851
// Function ID: 852
// Dependencies: [685, 687, 688]
// Exports: supportsDOMError, supportsDOMException, supportsErrorEvent, supportsHistory, supportsNativeFetch, supportsReferrerPolicy, supportsReportingObserver

// Module 851
import _mod685 from "module_685" /* 685 */;
import _mod687 from "module_687" /* 687 */;

function _isFetchSupported() {
  if ("fetch" in _mod685.GLOBAL_OBJ) {
    try {
      const _Headers = Headers;
      const self = this;
      const headers = new Headers();
      const _Request = Request;
      const self2 = this;
      const request = new Request("data:,");
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

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
export const supportsFetch = _isFetchSupported;
export function supportsHistory() {
  const tmp3 = "history" in _mod685.GLOBAL_OBJ && _mod685.GLOBAL_OBJ.history;
  return tmp3;
}
export function supportsNativeFetch() {
  if (typeof globalThis.EdgeRuntime === "string") {
    return true;
  } else if (_isFetchSupported()) {
    const tmp = isNativeFunction;
    if (isNativeFunction(_mod685.GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      let flag2 = false;
      const _document = tmp2(685).GLOBAL_OBJ.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            const contentWindow = element.contentWindow;
            let _fetch;
            const tmp5 = element;
            if (contentWindow != null) {
              _fetch = contentWindow.fetch;
            }
            if (_fetch) {
              flag2 = tmp(tmp5.contentWindow.fetch);
            }
            const head2 = _document.head;
            head2.removeChild(element);
          } catch (tmp11) {
            if (_mod687.DEBUG_BUILD) {
              const debug = tmp2(688).debug;
              debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", tmp11);
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
  if (_isFetchSupported()) {
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
  return "ReportingObserver" in _mod685.GLOBAL_OBJ;
}
