// Module ID: 956
// Function ID: 957
// Dependencies: [946, 693, 902]
// Exports: checkAndWarnIfIsEmbeddedBrowserExtension

// Module 956
import _mod693 from "module_693" /* 693 */;
import _mod902 from "module_902" /* 902 */;
import _mod946 from "module_946" /* 946 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== _mod902.WINDOW.window) {
    const WINDOW = tmp(902).WINDOW;
    flag = false;
    if (!WINDOW.nw) {
      let id;
      if ((WINDOW.chrome || WINDOW.browser) != null) {
        const runtime = tmp3.runtime;
        if (runtime != null) {
          id = runtime.id;
        }
      }
      flag = false;
      if (id) {
        const tmpResult = _mod693;
        const locationHref = tmpResult.getLocationHref();
        let someResult = tmp(902).WINDOW === tmp(902).WINDOW.top;
        if (someResult) {
          const items = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
          someResult = items.some((item) => closure_0.startsWith("" + item + "://"));
        }
        flag = !someResult;
      }
    }
  }
  let flag2 = flag;
  if (flag2) {
    flag2 = true;
    if (_mod946.DEBUG_BUILD) {
      const tmpResult2 = _mod693;
      tmpResult2.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
};
