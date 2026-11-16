// Module ID: 1654
// Function ID: 1655
// Name: initializersNative
// Dependencies: [1655, 1793, 1794, 1705]
// Exports: initializeReanimatedModule

// Module 1654 (initializersNative)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1793 from "module_1793" /* 1793 */;
import bundleModeNative from "module_1705" /* 1705 */;

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
    const obj = _mod1655;
    obj.setCSSEventHandler((arg0) => {
      const cssCallbacksRegistry = _mod1655.cssCallbacksRegistry;
      return cssCallbacksRegistry.dispatch(arg0);
    });
    const obj2 = _mod1793;
    const tmp5 = require;
    if (obj2.getStaticFeatureFlag("EXPERIMENTAL_CSS_ANIMATIONS_FOR_SVG_COMPONENTS")) {
      const tmp5Result = tmp5(1794);
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
