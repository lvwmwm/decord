// Module ID: 7324
// Function ID: 59060
// Name: debugIntegration
// Dependencies: [7236, 7292]

// Module 7324 (debugIntegration)
import setupIntegration from "setupIntegration";


export const debugIntegration = setupIntegration.defineIntegration(function _debugIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let _Object = Object;
    let closure_0 = Object.assign({ debugger: false, stringify: false }, {});
    const obj = {
      name: "Debug",
      setup(on) {
          on.on("beforeSendEvent", (arg0, arg1) => {
            const callback = arg0;
            let closure_1 = arg1;
            callback(outer2_1[0]).consoleSandbox(() => {
              const _console = console;
              if (outer2_0.stringify) {
                const _JSON = JSON;
                log(JSON.stringify(closure_0, null, 2));
                let length2 = closure_1;
                if (closure_1) {
                  const _Object2 = Object;
                  length2 = Object.keys(closure_1).length;
                }
                if (length2) {
                  const _console3 = console;
                  const _JSON2 = JSON;
                  console.log(JSON.stringify(closure_1, null, 2));
                }
              } else {
                log(closure_0);
                let length = closure_1;
                if (closure_1) {
                  const _Object = Object;
                  length = Object.keys(closure_1).length;
                }
                if (length) {
                  const _console2 = console;
                  console.log(closure_1);
                }
              }
            });
          });
        }
    };
    return obj;
  }
});
