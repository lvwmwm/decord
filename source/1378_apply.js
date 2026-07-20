// Module ID: 1378
// Function ID: 16512
// Name: apply
// Dependencies: []

// Module 1378 (apply)
let apply = "object" === typeof Reflect;
if (apply) {
  const _Reflect = Reflect;
  apply = null !== Reflect;
}
if (apply) {
  const _Reflect2 = Reflect;
  apply = Reflect.apply;
}
let tmp2 = apply;
let closure_3 = apply;
if ("function" === typeof apply) {
  const _Object = Object;
  if ("function" === typeof Object.defineProperty) {
    const _Object2 = Object;
    let obj = {
      get() {
            throw obj;
          }
    };
    const definePropertyResult = Object.defineProperty({}, "length", obj);
    obj = {};
    tmp2(() => {
      throw 42;
    }, null, definePropertyResult);
  }
  while (true) {
    let closure_4 = /^\s*class\b/;
    function isES6ClassFunction(arg0) {
      return regex.test(toString.call(arg0));
    }
    function tryFunctionToStr(arg0) {
      const tmp = !isES6ClassFunction(arg0);
      let flag = tmp;
      if (tmp) {
        toString.call(arg0);
        flag = true;
      }
      return flag;
    }
    let _Object3 = Object;
    toString = Object.prototype.toString;
    let _Symbol = Symbol;
    let toStringTag = "function" === typeof Symbol;
    if (!toStringTag) {
      break;
    } else {
      let _Symbol2 = Symbol;
      toStringTag = Symbol.toStringTag;
      // break
    }
    let items = [];
    let num = 1;
    items.length = 1;
    let num2 = 0;
    let closure_9 = !(0 in items);
    function isDocumentDotAll() {
      return false;
    }
    let _document = document;
    if ("object" === typeof document) {
      let _document2 = document;
      let _document3 = document;
      let callResult = toString.call(document.all);
      if (callResult === toString.call(document.all)) {
        isDocumentDotAll = function isDocumentDotAll(arg0) {
          if (closure_9) {
            const callResult = toString.call(arg0);
            let tmp9 = tmp8;
            if ("[object HTMLAllCollection]" !== callResult) {
              tmp9 = "[object HTML document.all class]" === tmp7;
            }
            let tmp11 = tmp9;
            if (!tmp9) {
              tmp11 = "[object HTMLCollection]" === tmp7;
            }
            let tmp13 = tmp11;
            if (!tmp11) {
              tmp13 = "[object Object]" === tmp7;
            }
            let tmp15 = tmp13;
            if (tmp13) {
              tmp15 = null == arg0("");
            }
            return tmp15;
          }
        };
      }
    }
    let tmp10 = module;
    module.exports = tmp2 ? function isCallable(arg0) {
      if (isDocumentDotAll(arg0)) {
        return true;
      } else if (tmp) {
        if ("function" !== typeof tmp) {
          if ("object" !== typeof tmp) {
            return false;
          }
        }
        _null(tmp, null, definePropertyResult);
        while (true) {
          let tmp10 = isES6ClassFunction;
          let tmp11 = arg0;
          let tmp12 = !isES6ClassFunction(tmp);
          let tmp13 = tmp12;
          if (!tmp12) {
            break;
          } else {
            let tmp14 = tryFunctionToStr;
            tmp13 = tryFunctionToStr(arg0);
            // break
          }
          return tmp13;
        }
      } else {
        return false;
      }
    } : function isCallable(arg0) {
      if (isDocumentDotAll(arg0)) {
        return true;
      } else if (arg0) {
        if ("function" !== typeof arg0) {
          if ("object" !== tmp) {
            return false;
          }
        }
        if (toStringTag) {
          return tryFunctionToStr(arg0);
        } else if (isES6ClassFunction(arg0)) {
          return false;
        } else {
          const callResult = toString.call(arg0);
          let tmp6 = "[object Function]" !== callResult;
          if (tmp6) {
            tmp6 = "[object GeneratorFunction]" !== callResult;
          }
          if (tmp6) {
            tmp6 = !/^\[object HTML/.test(callResult);
            const obj = /^\[object HTML/;
          }
          let tmp7 = !tmp6;
          if (!tmp6) {
            tmp7 = tryFunctionToStr(arg0);
          }
          return tmp7;
        }
      } else {
        return false;
      }
    };
  }
}
tmp2 = null;
closure_3 = null;
