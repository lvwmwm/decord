// Module ID: 1657
// Function ID: 1658
// Name: initializersNative
// Dependencies: [1658, 1796, 1797, 1708]
// Exports: initializeReanimatedModule

// Module 1657 (initializersNative)
import _mod1658 from "module_1658" /* 1658 */;
import _mod1796 from "module_1796" /* 1796 */;
import bundleModeNative from "module_1708" /* 1708 */;

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
    const obj = _mod1658;
    obj.setCSSEventHandler((arg0) => {
      const cssCallbacksRegistry = _mod1658.cssCallbacksRegistry;
      return cssCallbacksRegistry.dispatch(arg0);
    });
    const obj2 = _mod1796;
    const tmp5 = require;
    if (obj2.getStaticFeatureFlag("EXPERIMENTAL_CSS_ANIMATIONS_FOR_SVG_COMPONENTS")) {
      const tmp5Result = tmp5(1797);
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
