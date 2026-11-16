// Module ID: 1965
// Function ID: 1966
// Name: RNScreensTurboModule
// Dependencies: [1665]

// Module 1965 (RNScreensTurboModule)
import _mod1665 from "module_1665" /* 1665 */;

let closure_2 = { code: "(function pnpm_RNScreensTurboModuleTs1(){let[logger,defaultReturnValue]=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;})" };
let RNScreensTurboModule = global.RNScreensTurboModule;
if (!RNScreensTurboModule) {
  function noopFactory(arg0) {
    let tmp;
    let tmp2;
    let tmp3;
    const items = [closure_2, _mod1665.logger, arg0];
    let c0;
    let c1;
    [tmp, tmp2, tmp3] = items;
    function pnpm_RNScreensTurboModuleTs1() {
      _undefined.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
      return c1;
    }
    const items1 = [tmp2, tmp3];
    pnpm_RNScreensTurboModuleTs1.__closure = items1;
    pnpm_RNScreensTurboModuleTs1.__workletHash = 2287509312493;
    pnpm_RNScreensTurboModuleTs1.__initData = tmp;
    return pnpm_RNScreensTurboModuleTs1;
  }
  RNScreensTurboModule = { startTransition: noopFactory({ topScreenId: -1, belowTopScreenId: -1, canStartTransition: false }), updateTransition: noopFactory(), finishTransition: noopFactory() };
  const obj = { startTransition: noopFactory({ topScreenId: -1, belowTopScreenId: -1, canStartTransition: false }), updateTransition: noopFactory(), finishTransition: noopFactory() };
}

export { RNScreensTurboModule };
