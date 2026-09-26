// Module ID: 947
// Function ID: 948
// Dependencies: [937, 682, 893]
// Exports: checkAndWarnIfIsEmbeddedBrowserExtension

// Module 947
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const checkAndWarnIfIsEmbeddedBrowserExtension = function checkAndWarnIfIsEmbeddedBrowserExtension() {
  let flag = false;
  if (undefined !== ignoreNextOnError.WINDOW.window) {
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
        const locationHref = tmp(682).getLocationHref();
        let someResult = tmp(893).WINDOW === tmp(893).WINDOW.top;
        if (someResult) {
          const items = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
          someResult = items.some((item) => closure_0.startsWith("" + item + "://"));
        }
        flag = !someResult;
        const tmpResult = tmp(682);
      }
    }
  }
  let flag2 = flag;
  if (flag2) {
    flag2 = true;
    if (tmp(937).DEBUG_BUILD) {
      tmp(682).consoleSandbox(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
      flag2 = true;
      const tmpResult2 = tmp(682);
    }
  }
  return flag2;
};
