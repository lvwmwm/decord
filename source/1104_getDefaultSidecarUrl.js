// Module ID: 1104
// Function ID: 12609
// Name: getDefaultSidecarUrl
// Dependencies: [65, 794, 792, 973]
// Exports: spotlightIntegration

// Module 1104 (getDefaultSidecarUrl)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function getDefaultSidecarUrl() {
  const Devtools = require(973) /* reactNativeVersion */.ReactNativeLibraries.Devtools;
  let devServer;
  if (null !== Devtools) {
    if (undefined !== obj) {
      devServer = obj.getDevServer();
    }
  }
  if (null !== devServer) {
    const url = {}.url;
    if (url) {
      const match = url.match(/^(?:\w+:)?\/\/([^/:]+)(:\d+)?(.*)$/);
      let tmp10;
      if (null != match) {
        tmp10 = match[1];
      }
      let tmp11 = null;
      if (tmp10) {
        tmp11 = match[1];
      }
      const _HermesInternal = HermesInternal;
      let combined = "http://" + tmp11 + ":8969/stream";
    } else {
      combined = c3;
    }
    return combined;
  }
}
let c3 = "http://localhost:8969/stream";

export const spotlightIntegration = function spotlightIntegration(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let sidecarUrl = {}.sidecarUrl;
    if (undefined === sidecarUrl) {
      sidecarUrl = getDefaultSidecarUrl();
    }
    let debug = sidecarUrl(794).debug;
    debug.log("[Spotlight] Using Sidecar URL", sidecarUrl);
    const obj = {
      name: "Spotlight",
      setupOnce() {

        },
      setup(on) {
          (function _setup(on, sidecarUrl) {
            (function sendEnvelopesToSidecar(on, sidecarUrl) {
              let closure_0 = sidecarUrl;
              if (on.on) {
                on.on("beforeEnvelope", (arg0) => {
                  let tmp = outer4_2(arg0);
                  tmp[1] = outer4_2(arg0[1]).filter(() => { ... });
                  const arr = outer4_2(arg0[1]);
                  const stealthXhr = sidecarUrl(outer4_1[2]).createStealthXhr();
                  if (stealthXhr) {
                    stealthXhr.open("POST", stealthXhr, true);
                    stealthXhr.setRequestHeader("Content-Type", "application/x-sentry-envelope");
                    stealthXhr.onreadystatechange = function onreadystatechange() { ... };
                    stealthXhr.send(sidecarUrl(outer4_1[1]).serializeEnvelope(tmp));
                    const obj3 = sidecarUrl(outer4_1[1]);
                  } else {
                    let debug = sidecarUrl(outer4_1[1]).debug;
                    debug.error("[Spotlight] Sentry SDK can not create XHR object");
                  }
                });
              }
            })(on, sidecarUrl);
          })(on, sidecarUrl);
        }
    };
    return obj;
  }
};
export { getDefaultSidecarUrl };
