// Module ID: 1126
// Function ID: 12843
// Name: createAsyncHandlerProxy
// Dependencies: [1125, 1000, 1118, 794]

// Module 1126 (createAsyncHandlerProxy)
const require = arg1;
let dependencyMap = arg6;
function createAsyncHandlerProxy(arg0, item10042, nextResult, outer1_23) {
  const _require = item10042;
  const dependencyMap = nextResult;
  let closure_2 = outer1_23;
  const proxy = new Proxy(arg0, {
    apply(apply) {
      let search;
      let obj = item10042(nextResult[0]);
      const navigationContext = obj.getNavigationContext();
      if (null != navigationContext) {
        if (navigationContext.targetPath) {
          obj = { pathname: navigationContext.targetPath, search: "", hash: "", state: null, key: "default" };
          let tmp2 = obj;
        }
        while (true) {
          let tmp4 = item10042;
          let tmp5 = nextResult;
          let obj4 = item10042(nextResult[0]);
          let navigationContext1 = obj4.getNavigationContext();
          if (navigationContext1) {
            let span = navigationContext1.span;
          } else {
            let tmp7 = item10042;
            let tmp8 = nextResult;
            let obj5 = item10042(nextResult[0]);
            span = obj5.getActiveRootSpan();
          }
          let tmp9 = arg1;
          let tmp10 = arg2;
          let applyResult = apply.apply(arg1, arg2);
          let tmp12 = outer1_3;
          let tmp13 = item10042;
          let tmp14 = nextResult;
          let tmp15 = closure_2;
          let tmp16 = applyResult;
          let tmp17 = tmp2;
          let tmp18 = span;
          let tmp19 = outer1_3(applyResult, item10042, nextResult, closure_2, tmp2, span);
          return applyResult;
        }
      }
      tmp2 = null;
      if (undefined !== item10042(nextResult[1]).WINDOW) {
        const _location = item10042(nextResult[1]).WINDOW.location;
        if (_location) {
          obj = {};
          ({ pathname: obj2.pathname, search } = tmp22);
          let str = search;
          if (!search) {
            str = "";
          }
          obj.search = str;
          const hash = _location.hash;
          let str2 = hash;
          if (!hash) {
            str2 = "";
          }
          obj.hash = str2;
          obj.state = null;
          obj.key = "default";
          tmp2 = obj;
        } else {
          tmp2 = null;
        }
        tmp22 = _location;
      }
    }
  });
  const result = _require(794).addNonEnumerableProperty(proxy, "__sentry_proxied__", true);
  return proxy;
}
function handleAsyncHandlerResult(promise) {
  const _require = arg1;
  const dependencyMap = arg2;
  let closure_2 = arg3;
  let closure_3 = arg4;
  let closure_4 = arg5;
  if (obj.isThenable(promise)) {
    promise.then((arg0) => {
      if (Array.isArray(arg0)) {
        let tmp5;
        if (null != closure_3) {
          tmp5 = closure_3;
        }
        closure_2(arg0, closure_0, tmp5, closure_4);
        const tmp = closure_2;
      }
    }).catch((arg0) => {
      if (callback(1118).DEBUG_BUILD) {
        const debug = callback(794).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("Error resolving async handler '" + dependencyMap + "' for route", callback, arg0);
      }
    });
    const nextPromise = promise.then((arg0) => {
      if (Array.isArray(arg0)) {
        let tmp5;
        if (null != closure_3) {
          tmp5 = closure_3;
        }
        closure_2(arg0, closure_0, tmp5, closure_4);
        const tmp = closure_2;
      }
    });
  } else {
    const _Array = Array;
    if (Array.isArray(promise)) {
      let tmp3;
      if (null != arg4) {
        tmp3 = arg4;
      }
      arg3(promise, arg1, tmp3, arg5);
    }
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function checkRouteForAsyncHandler(item10042, outer1_23) {
  if (item10042.handle) {
    if ("object" === typeof tmp.handle) {
      const _Object = Object;
      const keys = Object.keys(tmp.handle);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let tmp6 = item10042;
        let tmp7 = tmp.handle[nextResult];
        let tmp8 = tmp7;
        let tmp9 = "function" !== typeof tmp7;
        let __sentry_proxied__ = tmp9;
        if (!tmp9) {
          let tmp10 = tmp7;
          __sentry_proxied__ = tmp8.__sentry_proxied__;
        }
        if (!__sentry_proxied__) {
          let tmp11 = item10042;
          let tmp12 = nextResult;
          let tmp13 = createAsyncHandlerProxy;
          let tmp14 = tmp7;
          let tmp15 = outer1_23;
          let tmp16 = tmp;
          let tmp17 = tmp5;
          tmp.handle[tmp5] = createAsyncHandlerProxy(tmp8, item10042, nextResult, outer1_23);
        }
        continue;
      }
    }
  }
  if (Array.isArray(item10042.children)) {
    const children = item10042.children;
    for (const item10042 of children) {
      let tmp19 = checkRouteForAsyncHandler;
      let tmp20 = arg1;
      let tmp21 = checkRouteForAsyncHandler(item10042, arg1);
      continue;
    }
  }
}
arg5.checkRouteForAsyncHandler = checkRouteForAsyncHandler;
arg5.createAsyncHandlerProxy = createAsyncHandlerProxy;
arg5.handleAsyncHandlerResult = handleAsyncHandlerResult;
