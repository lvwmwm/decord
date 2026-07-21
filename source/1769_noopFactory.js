// Module ID: 1769
// Function ID: 19712
// Name: noopFactory
// Dependencies: []

// Module 1769 (noopFactory)
function noopFactory(defaultReturnValue) {
  const arg1 = defaultReturnValue;
  /* worklet (recovered source) */ function pnpm_RNScreensTurboModuleTs1(){const{logger,defaultReturnValue}=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;}
  pnpm_RNScreensTurboModuleTs1.__closure = { logger: arg1(arg6[0]).logger, defaultReturnValue };
  pnpm_RNScreensTurboModuleTs1.__workletHash = 6450550757460;
  pnpm_RNScreensTurboModuleTs1.__initData = closure_2;
  return pnpm_RNScreensTurboModuleTs1;
}
let closure_2 = { code: "function pnpm_RNScreensTurboModuleTs1(){const{logger,defaultReturnValue}=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;}" };
RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
if (!RNScreensTurboModule) {
  const obj = { startTransition: noopFactory({}), updateTransition: noopFactory(), finishTransition: noopFactory() };
  RNScreensTurboModule = obj;
}
arg5.RNScreensTurboModule = RNScreensTurboModule;
