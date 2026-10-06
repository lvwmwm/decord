// Module ID: 944
// Function ID: 945
// Name: fetch
// Dependencies: [916, 694, 912]
// Exports: clearCachedImplementation, fetch, setTimeout

// Module 944 (fetch)
import _mod694 from "module_694" /* 694 */;
import _mod912 from "module_912" /* 912 */;
import _mod916 from "module_916" /* 916 */;

function getNativeImplementation(fetch) {
  if (closure_2[fetch]) {
    return closure_2[fetch];
  } else {
    const tmp5 = _mod916.WINDOW[fetch];
    let obj = tmp5;
    const obj2 = _mod694;
    if (obj2.isNativeFunction(tmp5)) {
      const bindResult = obj.bind(_mod916.WINDOW);
      closure_2[fetch] = bindResult;
      return bindResult;
    } else {
      let tmp20;
      const _document = tmp3(916).WINDOW.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            const contentWindow = element.contentWindow;
            let tmp11;
            if (contentWindow != null) {
              tmp11 = contentWindow[fetch];
            }
            if (tmp11) {
              obj = contentWindow[fetch];
            }
            const head2 = _document.head;
            head2.removeChild(element);
          } catch (tmp13) {
            if (_mod912.DEBUG_BUILD) {
              const debug = tmp3(694).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Could not create sandbox iframe for " + fetch + " check, bailing to window." + fetch + ": ", tmp13);
            }
          }
        }
      }
      const tmp19 = obj;
      if (tmp19) {
        const bindResult1 = obj.bind(_mod916.WINDOW);
        closure_2[fetch] = bindResult1;
        tmp20 = bindResult1;
      } else {
        tmp20 = obj;
      }
      return tmp20;
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};

export const clearCachedImplementation = function clearCachedImplementation(fetch) {
  closure_2[fetch] = undefined;
};
export const fetch = function fetch() {
  const items = [...arguments];
  const tmp = getNativeImplementation("fetch");
  return tmp(...items);
};
export { getNativeImplementation };
export const setTimeout = function setTimeout() {
  const items = [...arguments];
  const tmp = getNativeImplementation("setTimeout");
  return tmp(...items);
};
