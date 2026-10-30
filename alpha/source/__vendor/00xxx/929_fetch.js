// Module ID: 929
// Function ID: 930
// Name: fetch
// Dependencies: [901, 681, 897]
// Exports: clearCachedImplementation, fetch, setTimeout

// Module 929 (fetch)
import _mod681 from "module_681" /* 681 */;
import _mod897 from "module_897" /* 897 */;
import _mod901 from "module_901" /* 901 */;

function getNativeImplementation(fetch) {
  if (closure_2[fetch]) {
    return closure_2[fetch];
  } else {
    const tmp5 = _mod901.WINDOW[fetch];
    let obj = tmp5;
    const obj2 = _mod681;
    if (obj2.isNativeFunction(tmp5)) {
      const bindResult = obj.bind(_mod901.WINDOW);
      closure_2[fetch] = bindResult;
      return bindResult;
    } else {
      let tmp20;
      const _document = tmp3(901).WINDOW.document;
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
            if (_mod897.DEBUG_BUILD) {
              const debug = tmp3(681).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Could not create sandbox iframe for " + fetch + " check, bailing to window." + fetch + ": ", tmp13);
            }
          }
        }
      }
      const tmp19 = obj;
      if (tmp19) {
        const bindResult1 = obj.bind(_mod901.WINDOW);
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

export function clearCachedImplementation(fetch) {
  closure_2[fetch] = undefined;
}
export function fetch() {
  const items = [...arguments];
  const tmp = getNativeImplementation("fetch");
  return tmp(...items);
}
export { getNativeImplementation };
export function setTimeout() {
  const items = [...arguments];
  const tmp = getNativeImplementation("setTimeout");
  return tmp(...items);
}
