// Module ID: 1058
// Function ID: 11318
// Name: checkAndWarnIfIsEmbeddedBrowserExtension
// Dependencies: [1048, 794, 1004]

// Module 1058 (checkAndWarnIfIsEmbeddedBrowserExtension)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  const tmp = (function _isEmbeddedBrowserExtension() {
    if (undefined === outer1_0(outer1_1[2]).WINDOW.window) {
      return false;
    } else {
      const WINDOW = outer1_0(outer1_1[2]).WINDOW;
      if (WINDOW.nw) {
        return false;
      } else {
        if (null != (WINDOW.chrome || WINDOW.browser)) {
          const runtime = tmp.runtime;
          if (null != runtime) {
            if (runtime.id) {
              const locationHref = outer1_0(outer1_1[1]).getLocationHref();
              const items = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
              const obj = outer1_0(outer1_1[1]);
              return !(outer1_0(outer1_1[2]).WINDOW === outer1_0(outer1_1[2]).WINDOW.top && items.some((arg0) => closure_0.startsWith("" + arg0 + "://")));
            }
          }
        }
        return false;
      }
    }
  })();
  let flag = tmp;
  if (tmp) {
    flag = true;
    if (require(1048).DEBUG_BUILD) {
      require(794) /* registerSpanErrorInstrumentation */.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag = true;
      let obj = require(794) /* registerSpanErrorInstrumentation */;
    }
  }
  return flag;
};
