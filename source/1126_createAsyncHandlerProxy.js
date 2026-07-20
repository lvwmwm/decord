// Module ID: 1126
// Function ID: 12838
// Name: createAsyncHandlerProxy
// Dependencies: []

// Module 1126 (createAsyncHandlerProxy)
function createAsyncHandlerProxy(arg0, handle, nextResult, closure_23) {
  const arg6 = nextResult;
  const proxy = new Proxy(arg0, {
    apply(apply) {
      let search;
      let obj = arg1(arg2[0]);
      const navigationContext = obj.getNavigationContext();
      if (null != navigationContext) {
        if (navigationContext.targetPath) {
          obj = { pathname: navigationContext.targetPath };
          let tmp2 = obj;
        }
        while (true) {
          let tmp4 = arg1;
          let tmp5 = arg2;
          let obj4 = arg1(arg2[0]);
          let navigationContext1 = obj4.getNavigationContext();
          if (navigationContext1) {
            let span = navigationContext1.span;
          } else {
            let tmp7 = arg1;
            let tmp8 = arg2;
            let obj5 = arg1(arg2[0]);
            span = obj5.getActiveRootSpan();
          }
          let tmp9 = arg1;
          let tmp10 = arg2;
          let applyResult = apply.apply(arg1, arg2);
          let tmp12 = callback;
          let tmp13 = arg1;
          let tmp14 = arg2;
          let tmp15 = arg3;
          let tmp16 = applyResult;
          let tmp17 = tmp2;
          let tmp18 = span;
          let tmp19 = callback(applyResult, arg1, arg2, arg3, tmp2, span);
          return applyResult;
        }
      }
      tmp2 = null;
      if (undefined !== arg1(arg2[1]).WINDOW) {
        const _location = arg1(arg2[1]).WINDOW.location;
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
        const tmp22 = _location;
      }
    }
  });
  const result = handle(arg6[3]).addNonEnumerableProperty(proxy, "__sentry_proxied__", true);
  return proxy;
}
function handleAsyncHandlerResult(promise) {
  const arg6 = arg2;
  if (obj.isThenable(promise)) {
    promise.then((arg0) => {
      if (Array.isArray(arg0)) {
        let tmp5;
        if (null != arg4) {
          tmp5 = arg4;
        }
        arg3(arg0, arg1, tmp5, arg5);
        const tmp = arg3;
      }
    }).catch((arg0) => {
      if (arg1(arg2[2]).DEBUG_BUILD) {
        const debug = arg1(arg2[3]).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("Error resolving async handler '" + arg2 + "' for route", arg1, arg0);
      }
    });
    const nextPromise = promise.then((arg0) => {
      if (Array.isArray(arg0)) {
        let tmp5;
        if (null != arg4) {
          tmp5 = arg4;
        }
        arg3(arg0, arg1, tmp5, arg5);
        const tmp = arg3;
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
function checkRouteForAsyncHandler(handle, closure_23) {
  if (handle.handle) {
    if ("object" === typeof tmp.handle) {
      const _Object = Object;
      const keys = Object.keys(tmp.handle);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let tmp6 = handle;
        let tmp7 = tmp.handle[nextResult];
        let tmp8 = tmp7;
        let tmp9 = "function" !== typeof tmp7;
        let __sentry_proxied__ = tmp9;
        if (!tmp9) {
          let tmp10 = tmp7;
          __sentry_proxied__ = tmp8.__sentry_proxied__;
        }
        if (!__sentry_proxied__) {
          let tmp11 = handle;
          let tmp12 = nextResult;
          let tmp13 = createAsyncHandlerProxy;
          let tmp14 = tmp7;
          let tmp15 = closure_23;
          let tmp16 = tmp;
          let tmp17 = tmp5;
          tmp.handle[tmp5] = createAsyncHandlerProxy(tmp8, handle, nextResult, closure_23);
        }
        // continue
      }
    }
  }
  if (Array.isArray(handle.children)) {
    const children = handle.children;
    for (const item10042 of children) {
      let tmp19 = closure_4;
      let tmp20 = arg1;
      let tmp21 = closure_4(item10042, arg1);
    }
  }
}
arg5.checkRouteForAsyncHandler = checkRouteForAsyncHandler;
arg5.createAsyncHandlerProxy = createAsyncHandlerProxy;
arg5.handleAsyncHandlerResult = handleAsyncHandlerResult;
