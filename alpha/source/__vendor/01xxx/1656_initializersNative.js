// Module ID: 1656
// Function ID: 1657
// Name: initializersNative
// Dependencies: [1657, 1795, 1796, 1707]
// Exports: initializeReanimatedModule

// Module 1656 (initializersNative)
import _mod1657 from "module_1657" /* 1657 */;
import _mod1795 from "module_1795" /* 1795 */;
import bundleModeNative from "module_1707" /* 1707 */;

let tmp2;
globalThis.__toggleSlowAnimationsOnUIRuntime = () => {
  const obj = bundleModeNative;
  return obj.toggleSlowAnimationsOnUIRuntime();
};
const items = [{ code: "(function pnpm_initializersNativeTs1(){global._tagToJSPropNamesMapping={};})" }];
[tmp2] = items;
function pnpm_initializersNativeTs1() {
  global._tagToJSPropNamesMapping = {};
}
pnpm_initializersNativeTs1.__workletHash = 4559181787150;
pnpm_initializersNativeTs1.__initData = tmp2;
bundleModeNative.runOnUISync(pnpm_initializersNativeTs1);

export function initializeReanimatedModule(ReanimatedModule) {
  const tmp = ReanimatedModule;
  if (tmp) {
    const obj = _mod1657;
    obj.setCSSEventHandler((arg0) => {
      const cssCallbacksRegistry = _mod1657.cssCallbacksRegistry;
      return cssCallbacksRegistry.dispatch(arg0);
    });
    const obj2 = _mod1795;
    const tmp5 = require;
    if (obj2.getStaticFeatureFlag("EXPERIMENTAL_CSS_ANIMATIONS_FOR_SVG_COMPONENTS")) {
      const tmp5Result = tmp5(1796);
      const svgCssSupport = tmp5Result.initSvgCssSupport();
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] Tried to initialize Reanimated without a valid ReanimatedModule");
    throw error;
  }
}
