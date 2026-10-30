// Module ID: 944
// Function ID: 945
// Dependencies: [934, 681, 890]
// Exports: checkAndWarnIfIsEmbeddedBrowserExtension

// Module 944
import _mod681 from "module_681" /* 681 */;
import _mod890 from "module_890" /* 890 */;
import _mod934 from "module_934" /* 934 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== _mod890.WINDOW.window) {
    const WINDOW = tmp(890).WINDOW;
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
        const tmpResult = _mod681;
        const locationHref = tmpResult.getLocationHref();
        let someResult = tmp(890).WINDOW === tmp(890).WINDOW.top;
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
    if (_mod934.DEBUG_BUILD) {
      const tmpResult2 = _mod681;
      tmpResult2.consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
    }
  }
  return flag2;
}
