// Module ID: 1043
// Function ID: 11212
// Name: getNativeImplementation
// Dependencies: [1015, 794, 1011]

// Module 1043 (getNativeImplementation)
const require = arg1;
const dependencyMap = arg6;
function getNativeImplementation(fetch) {
  if (table[fetch]) {
    return tmp2;
  } else {
    const tmp6 = require(1015) /* WINDOW */.WINDOW[tmp];
    let obj = tmp6;
    if (obj2.isNativeFunction(tmp6)) {
      const bindResult = obj.bind(require(1015) /* WINDOW */.WINDOW);
      table[fetch] = bindResult;
      return bindResult;
    } else {
      const _document = require(1015) /* WINDOW */.WINDOW.document;
      if (_document) {
        if ("function" === typeof obj3.createElement) {
          const element = <iframe />;
          element.hidden = true;
          const head2 = obj3.head;
          head2.appendChild(element);
          const contentWindow = element.contentWindow;
          let tmp12 = tmp35;
          if (null != contentWindow) {
            tmp12 = tmp33[tmp];
          }
          if (tmp12) {
            obj = tmp33[tmp];
          }
          const head = _document.head;
          head.removeChild(element);
        }
      }
      while (true) {
        let tmp16 = obj;
        if (obj) {
          let tmp18 = table;
          let tmp19 = fetch;
          let tmp20 = obj;
          let tmp21 = require;
          let tmp22 = dependencyMap;
          let bindResult1 = obj.bind(require(1015) /* WINDOW */.WINDOW);
          table[tmp] = bindResult1;
          let tmp17 = bindResult1;
        } else {
          tmp17 = obj;
        }
        return tmp17;
      }
    }
    obj2 = require(794) /* registerSpanErrorInstrumentation */;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};
arg5.clearCachedImplementation = function clearCachedImplementation(arg0) {
  closure_2[arg0] = undefined;
};
arg5.fetch = function fetch() {
  return getNativeImplementation("fetch")(...arguments);
};
arg5.getNativeImplementation = getNativeImplementation;
arg5.setTimeout = function setTimeout() {
  return getNativeImplementation("setTimeout")(...arguments);
};
