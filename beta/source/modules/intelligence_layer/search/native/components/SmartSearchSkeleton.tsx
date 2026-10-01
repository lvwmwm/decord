// Module ID: 16510
// Function ID: 16511
// Name: SmartSearchSkeleton
// Dependencies: [19, 17, 11847, 13936, 21, 3877, 4836, 576, 4550, 1115, 13941, 13935, 13939, 16494, 2]

// Module 16510 (SmartSearchSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef3877 from "module_3877" /* 3877 */;
import waveTransition from "waveTransition" /* 13941 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16494 */;
import react from "react" /* 19 */;
import IntelligenceSearchConstants from "IntelligenceSearchConstants" /* 11847 */;
import AILoaderConstants from "AILoaderConstants" /* 13936 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let isCollapsed;

let AI_LOADER_REST_FRACTION;
let AI_LOADER_STEP_FRACTION;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ LOADING_BLOCK_HEIGHT: hasOwnProperty, LOADING_BOTTOM_GAP: metroRequire } = IntelligenceSearchConstants);
({ AI_LOADER_CYCLE_MS: metroImportDefault, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroImportAll, AI_LOADER_REST_FRACTION, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = AI_LOADER_REST_FRACTION + 2 * AI_LOADER_STEP_FRACTION;
let items = [_modDef3877.G9wVrJ, _modDef3877.nE828Q, _modDef3877.RJyNW8, _modDef3877.bsB1as, _modDef3877.nQrJzz, _modDef3877["5OQUzL"], _modDef3877.LCtCSE];
let closure_13 = createStyles.createStyles((arg0) => {
  let num;
  let num2;
  let tmp;
  if (arg0) {
    tmp = hasOwnProperty;
  }
  const obj = { height: tmp, marginBottom: num };
  num = 0;
  if (arg0) {
    num = metroRequire;
  }
  const obj2 = { block: obj, header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 }, label: { flexShrink: 1, overflow: "hidden" }, skeletons: { flex: num2, overflow: "hidden" } };
  num2 = 0;
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 });
  if (arg0) {
    num2 = 1;
  }
  return obj2;
});
const memoResult = react.memo((isCollapsed) => {
  let fromResult;
  let items1;
  let items2;
  let shimmerDelayMs;
  let shimmerDurationMs;
  let shimmerInitialDelayMs;
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_13(isCollapsed);
  reducedMotion = react.useContext(reducedMotion(4550).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = react.useMemo(() => {
    items = [_modDef3877.CM07jO, ...closure_1_12.sort(() => Math.random() - 0.5)];
    return items.map((item) => {
      const intl = reducedMotion(closure_1_2[9]).intl;
      return intl.string(item);
    });
  }, []);
  const memo1 = react.useMemo(() => {
    const tmp = reducedMotion.enabled ? metroImportAll : metroImportDefault;
    const result = 0.8 * tmp;
    let REDUCED_MOTION_PASS_MS = result;
    if (reducedMotion.enabled) {
      REDUCED_MOTION_PASS_MS = waveTransition.REDUCED_MOTION_PASS_MS;
    }
    const diff = tmp - REDUCED_MOTION_PASS_MS;
    return { shimmerDurationMs: result, shimmerDelayMs: diff, shimmerInitialDelayMs: tmp * closure_11 - diff };
  }, items);
  const obj = { style: tmp.block, children: items2 };
  const obj2 = { style: tmp.header, children: items1 };
  ({ shimmerDurationMs, shimmerDelayMs, shimmerInitialDelayMs } = memo1);
  items1 = [closure_9(reducedMotion(13935).AILoader, { size: 12, color: "interactive-text-default" }), ];
  const obj3 = { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp.label };
  items1[1] = closure_9(reducedMotion(13939).AIShimmer, obj3);
  items2 = [closure_10(View, obj2), ];
  let num = 6;
  const _Array = Array;
  const obj4 = {
    style: tmp.skeletons,
    children: fromResult.map((item, index) => {
      const tmp = FormRowPlaceholderDefault;
      return closure_1_9(tmp, {}, "skeleton-" + index);
    })
  };
  const tmp4 = closure_10;
  const tmp6 = closure_9;
  if (isCollapsed) {
    num = 3;
  }
  fromResult = from({ length: num });
  items2[1] = tmp6(View, obj4);
  return tmp4(View, obj);
});
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default memoResult;
