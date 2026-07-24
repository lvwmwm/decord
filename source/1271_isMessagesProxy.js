// Module ID: 1271
// Function ID: 14379
// Name: isMessagesProxy
// Dependencies: []

// Module 1271 (isMessagesProxy)
function isMessagesProxy(importDefaultResult) {
  return "IntlMessagesProxy" === importDefaultResult[Symbol.toStringTag];
}
arg5.chainMessagesObjects = function chainMessagesObjects(importDefaultResult, $$loader2) {
  const tmp = isMessagesProxy(importDefaultResult);
  let tmp2 = isMessagesProxy($$loader2);
  if (tmp) {
    if (tmp2) {
      const $$loader = importDefaultResult.$$loader;
      $$loader.fallbackWith($$loader2.$$loader);
      let merged = importDefaultResult;
    }
    return merged;
  }
  if (!tmp) {
    if (!tmp2) {
      const _Object = Object;
      const _Object2 = Object;
      merged = Object.assign(Object.assign({}, $$loader2), importDefaultResult);
    }
  }
  if (tmp) {
    if (!tmp2) {
      const _Object3 = Object;
      merged = Object.assign(importDefaultResult.$$baseObject, $$loader2);
    }
  }
  if (tmp2) {
    tmp2 = !tmp;
  }
  merged = importDefaultResult;
  if (tmp2) {
    const _Object4 = Object;
    merged = Object.assign($$loader2.$$baseObject, importDefaultResult);
  }
};
arg5.makeMessagesProxy = function makeMessagesProxy(loader) {
  let closure_0 = loader;
  function makeBind(arg0) {
    let closure_0 = arg0;
    return (arg0) => closure_0.get(closure_0, arg0);
  }
  let obj = {};
  obj = {
    ownKeys(arg0) {
      return Reflect.ownKeys(arg0);
    },
    getOwnPropertyDescriptor(arg0, arg1) {
      if (!arg0[arg1]) {
        arg0[arg1] = makeBind(arg1);
      }
      return Reflect.getOwnPropertyDescriptor(arg0, arg1);
    },
    get(arg0, arg1) {
      let str = "object";
      if ("$$typeof" !== arg1) {
        const _Symbol = Symbol;
        let str2 = "IntlMessagesProxy";
        if (arg1 !== Symbol.toStringTag) {
          if (!arg0[arg1]) {
            arg0[arg1] = makeBind(arg1);
          }
          str2 = arg0[arg1];
        }
        str = str2;
      }
      return str;
    }
  };
  const proxy = new Proxy(obj, obj);
  obj = { value: null, enumerable: false, configurable: false, writable: false };
  obj.value = obj;
  Object.defineProperty(proxy, "$$baseObject", obj);
  const obj1 = { value: loader, enumerable: false, configurable: false, writable: false };
  Object.defineProperty(proxy, "$$loader", obj1);
  return proxy;
};
