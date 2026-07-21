// Module ID: 1104
// Function ID: 12607
// Name: getDefaultSidecarUrl
// Dependencies: []
// Exports: spotlightIntegration

// Module 1104 (getDefaultSidecarUrl)
function getDefaultSidecarUrl() {
  const Devtools = arg1(dependencyMap[3]).ReactNativeLibraries.Devtools;
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
      combined = closure_3;
    }
    return combined;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = "http://localhost:8969/stream";

export const spotlightIntegration = function spotlightIntegration(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let sidecarUrl = {}.sidecarUrl;
    if (undefined === sidecarUrl) {
      sidecarUrl = getDefaultSidecarUrl();
    }
    const arg1 = sidecarUrl;
    const debug = arg1(dependencyMap[1]).debug;
    debug.log("[Spotlight] Using Sidecar URL", sidecarUrl);
    const obj = {
      name: "Spotlight",
      setupOnce() {

        },
      setup(on) {
          function _setup(on, sidecarUrl) {
            function sendEnvelopesToSidecar(on, sidecarUrl) {
              if (on.on) {
                on.on("beforeEnvelope", (arg0) => {
                  const tmp = callback(arg0);
                  tmp[1] = callback(arg0[1]).filter(() => { ... });
                  const arr = callback(arg0[1]);
                  const stealthXhr = arg1(closure_1[2]).createStealthXhr();
                  const arg1 = stealthXhr;
                  if (stealthXhr) {
                    stealthXhr.open("POST", arg1, true);
                    stealthXhr.setRequestHeader("Content-Type", "application/x-sentry-envelope");
                    stealthXhr.onreadystatechange = function onreadystatechange() { ... };
                    stealthXhr.send(arg1(closure_1[1]).serializeEnvelope(tmp));
                    const obj3 = arg1(closure_1[1]);
                  } else {
                    const debug = arg1(closure_1[1]).debug;
                    debug.error("[Spotlight] Sentry SDK can not create XHR object");
                  }
                });
              }
            }(on, sidecarUrl);
          }(on, sidecarUrl);
        }
    };
    return obj;
  }
};
export { getDefaultSidecarUrl };
