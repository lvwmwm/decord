// Module ID: 932
// Function ID: 933
// Name: fetch
// Dependencies: [904, 682, 900]
// Exports: clearCachedImplementation, fetch, setTimeout

// Module 932 (fetch)
import _mod682 from "module_682" /* 682 */;
import _mod900 from "module_900" /* 900 */;
import _mod904 from "module_904" /* 904 */;

function getNativeImplementation(fetch) {
  if (closure_2[fetch]) {
    return closure_2[fetch];
  } else {
    const tmp5 = _mod904.WINDOW[fetch];
    let obj = tmp5;
    const obj2 = _mod682;
    if (obj2.isNativeFunction(tmp5)) {
      const bindResult = obj.bind(_mod904.WINDOW);
      closure_2[fetch] = bindResult;
      return bindResult;
    } else {
      let tmp20;
      const _document = tmp3(904).WINDOW.document;
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
            if (_mod900.DEBUG_BUILD) {
              const debug = tmp3(682).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Could not create sandbox iframe for " + fetch + " check, bailing to window." + fetch + ": ", tmp13);
            }
          }
        }
      }
      const tmp19 = obj;
      if (tmp19) {
        const bindResult1 = obj.bind(_mod904.WINDOW);
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
