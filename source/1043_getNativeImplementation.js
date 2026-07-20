// Module ID: 1043
// Function ID: 11206
// Name: getNativeImplementation
// Dependencies: []

// Module 1043 (getNativeImplementation)
function getNativeImplementation(fetch) {
  if (closure_2[fetch]) {
    return tmp2;
  } else {
    const tmp6 = arg1(arg6[0]).WINDOW[tmp];
    let obj = tmp6;
    if (obj2.isNativeFunction(tmp6)) {
      const bindResult = obj.bind(arg1(arg6[0]).WINDOW);
      closure_2[fetch] = bindResult;
      return bindResult;
    } else {
      const _document = arg1(arg6[0]).WINDOW.document;
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
          let tmp18 = closure_2;
          let tmp19 = fetch;
          let tmp20 = obj;
          let tmp21 = arg1;
          let tmp22 = arg6;
          let bindResult1 = obj.bind(arg1(arg6[0]).WINDOW);
          closure_2[tmp] = bindResult1;
          let tmp17 = bindResult1;
        } else {
          tmp17 = obj;
        }
        return tmp17;
      }
    }
    const obj2 = arg1(arg6[1]);
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
