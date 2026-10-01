// Module ID: 947
// Function ID: 948
// Dependencies: [937, 682, 893]
// Exports: checkAndWarnIfIsEmbeddedBrowserExtension

// Module 947
import _mod682 from "module_682" /* 682 */;
import _mod893 from "module_893" /* 893 */;
import _mod937 from "module_937" /* 937 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== _mod893.WINDOW.window) {
    const WINDOW = tmp(893).WINDOW;
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
        const tmpResult = _mod682;
        const locationHref = tmpResult.getLocationHref();
        let someResult = tmp(893).WINDOW === tmp(893).WINDOW.top;
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
    if (_mod937.DEBUG_BUILD) {
      const tmpResult2 = _mod682;
      tmpResult2.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
};
