// Module ID: 13092
// Function ID: 13093
// Name: debugIntegration
// Dependencies: [13004, 13060]

// Module 13092 (debugIntegration)
import module_13060 from "module_13060" /* 13060 */;


export const debugIntegration = module_13060.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = { debugger: false, stringify: false };
  const merged = Object.assign(obj);
  return {
    name: "Debug",
    setup(on) {
      on.on("beforeSendEvent", (arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        const obj = obj2(closure_1_1[0]);
        obj.consoleSandbox(() => {
          const _console = console;
          if (obj2.stringify) {
            const _JSON = JSON;
            log(JSON.stringify(closure_0, null, 2));
            let length2 = closure_1;
            if (length2) {
              const _Object2 = Object;
              length2 = Object.keys(tmp8).length;
            }
            if (length2) {
              const _console3 = console;
              const _JSON2 = JSON;
              console.log(JSON.stringify(closure_1, null, 2));
            }
          } else {
            log(closure_0);
            let length = closure_1;
            if (length) {
              const _Object = Object;
              length = Object.keys(tmp3).length;
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
});
