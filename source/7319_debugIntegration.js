// Module ID: 7319
// Function ID: 59026
// Name: debugIntegration
// Dependencies: []

// Module 7319 (debugIntegration)
const _module = require(dependencyMap[1]);

export const debugIntegration = _module.defineIntegration(function _debugIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let closure_0 = Object.assign({ zIndex: true, display: true }, {});
    const obj = {
      name: "Debug",
      setup(on) {
          on.on("beforeSendEvent", (arg0, arg1) => {
            arg0(arg1[0]).consoleSandbox(() => {
              const _console = console;
              if (arg0.stringify) {
                const _JSON = JSON;
                log(JSON.stringify(arg0, null, 2));
                let length2 = arg1;
                if (arg1) {
                  const _Object2 = Object;
                  length2 = Object.keys(arg1).length;
                }
                if (length2) {
                  const _console3 = console;
                  const _JSON2 = JSON;
                  console.log(JSON.stringify(arg1, null, 2));
                }
              } else {
                log(arg0);
                let length = arg1;
                if (arg1) {
                  const _Object = Object;
                  length = Object.keys(arg1).length;
                }
                if (length) {
                  const _console2 = console;
                  console.log(arg1);
                }
              }
            });
          });
        }
    };
    return obj;
  }
});
