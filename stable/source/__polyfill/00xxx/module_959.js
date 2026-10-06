// Module ID: 959
// Function ID: 960
// Dependencies: [949, 694, 905]
// Exports: checkAndWarnIfIsEmbeddedBrowserExtension

// Module 959
import _mod694 from "module_694" /* 694 */;
import _mod905 from "module_905" /* 905 */;
import _mod949 from "module_949" /* 949 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== _mod905.WINDOW.window) {
    const WINDOW = tmp(905).WINDOW;
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
        const tmpResult = _mod694;
        const locationHref = tmpResult.getLocationHref();
        let someResult = tmp(905).WINDOW === tmp(905).WINDOW.top;
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
    if (_mod949.DEBUG_BUILD) {
      const tmpResult2 = _mod694;
      tmpResult2.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
};
