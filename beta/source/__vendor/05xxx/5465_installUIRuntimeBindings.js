// Module ID: 5465
// Function ID: 5466
// Name: installUIRuntimeBindings
// Dependencies: [5453, 5466, 5424]
// Exports: installUIRuntimeBindings

// Module 5465 (installUIRuntimeBindings)
import NativeProxy2 from "NativeProxy" /* 5466 */;

const require = globalThis.__r;
let _require;


export function installUIRuntimeBindings(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("ghQueueMicrotask");
  obj.ghQueueMicrotask(() => {
    let tmp;
    const _globalThis = globalThis;
    if (closure_0 != null) {
      tmp = closure_0();
    }
    _globalThis.__RNGH_UI_WORKLET_RUNTIME_HOLDER = tmp;
    try {
      const NativeProxy = NativeProxy2.NativeProxy;
      const tmp2 = require;
      if (!NativeProxy.installUIRuntimeBindings()) {
        const _console = console;
        const tmp2Result = tmp2(5424);
        warn(tmp2Result.tagMessage("Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues."));
      }
      const _globalThis2 = globalThis;
      globalThis.__RNGH_UI_WORKLET_RUNTIME_HOLDER = undefined;
    } catch (tmp5) {
      const _globalThis3 = globalThis;
      globalThis.__RNGH_UI_WORKLET_RUNTIME_HOLDER = undefined;
      throw tmp5;
    }
  });
}
