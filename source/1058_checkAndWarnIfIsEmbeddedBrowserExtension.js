// Module ID: 1058
// Function ID: 11312
// Name: checkAndWarnIfIsEmbeddedBrowserExtension
// Dependencies: []

// Module 1058 (checkAndWarnIfIsEmbeddedBrowserExtension)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  const tmp = function _isEmbeddedBrowserExtension() {
    if (undefined === callback(closure_1[2]).WINDOW.window) {
      return false;
    } else {
      const WINDOW = callback(closure_1[2]).WINDOW;
      if (WINDOW.nw) {
        return false;
      } else {
        if (null != (WINDOW.chrome || WINDOW.browser)) {
          const runtime = tmp.runtime;
          if (null != runtime) {
            if (runtime.id) {
              const callback = callback(closure_1[1]).getLocationHref();
              const items = [];
              const obj = callback(closure_1[1]);
              return !(callback(closure_1[2]).WINDOW === callback(closure_1[2]).WINDOW.top && items.some((arg0) => closure_0.startsWith("" + arg0 + "://")));
            }
          }
        }
        return false;
      }
    }
  }();
  let flag = tmp;
  if (tmp) {
    flag = true;
    if (arg1(arg6[0]).DEBUG_BUILD) {
      arg1(arg6[1]).consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag = true;
      const obj = arg1(arg6[1]);
    }
  }
  return flag;
};
