// Module ID: 5467
// Function ID: 5468
// Name: installUIRuntimeBindings
// Dependencies: [5455, 5468, 5426]
// Exports: installUIRuntimeBindings

// Module 5467 (installUIRuntimeBindings)
import NativeProxy2 from "NativeProxy" /* 5468 */;

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
        const tmp2Result = tmp2(5426);
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
