// Module ID: 16512
// Function ID: 16513
// Name: SmartSearchSkeleton
// Dependencies: [19, 17, 11740, 13938, 21, 3880, 4837, 588, 558, 576, 4554, 1127, 13943, 13937, 13941, 16496, 2]

// Module 16512 (SmartSearchSkeleton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import _modDef3880 from "module_3880" /* 3880 */;
import react3 from "react" /* 4554 */;
import AILoader from "AILoader" /* 13937 */;
import AIShimmer from "AIShimmer" /* 13941 */;
import waveTransition from "waveTransition" /* 13943 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16496 */;
import react from "react" /* 19 */;
import IntelligenceSearchConstants from "IntelligenceSearchConstants" /* 11740 */;
import AILoaderConstants from "AILoaderConstants" /* 13938 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const f125416 = () => Math.random() - 0.5;
const View = react_native.View;
({ LOADING_BLOCK_HEIGHT: hasOwnProperty, LOADING_BOTTOM_GAP: metroRequire } = IntelligenceSearchConstants);
({ AI_LOADER_CYCLE_MS: metroImportDefault, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroImportAll, AI_LOADER_REST_FRACTION, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = AI_LOADER_REST_FRACTION + 2 * AI_LOADER_STEP_FRACTION;
let items = [_modDef3880.G9wVrJ, _modDef3880.nE828Q, _modDef3880.RJyNW8, _modDef3880.bsB1as, _modDef3880.nQrJzz, _modDef3880["5OQUzL"], _modDef3880.LCtCSE];
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
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isCollapsed) => {
  let first;
  let items1;
  let items2;
  let shimmerDelayMs;
  let shimmerDurationMs;
  let shimmerInitialDelayMs;
  const obj = react2;
  const cResult = obj.c(23);
  isCollapsed = isCollapsed.isCollapsed;
  const tmp5 = closure_13(isCollapsed);
  const reducedMotion = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [_modDef3880.CM07jO];
    HermesBuiltin.arraySpread(items, items.sort(f125416), 1);
    const mapped = items.map((item) => {
      const intl = intl2.intl;
      return intl.string(item);
    });
    cResult[0] = mapped;
    first = mapped;
  } else {
    first = cResult[0];
  }
  const tmp12 = reducedMotion.enabled ? metroImportAll : metroImportDefault;
  const result = 0.8 * tmp12;
  let REDUCED_MOTION_PASS_MS = result;
  if (reducedMotion.enabled) {
    REDUCED_MOTION_PASS_MS = tmp2(13943).REDUCED_MOTION_PASS_MS;
  }
  const diff = tmp12 - REDUCED_MOTION_PASS_MS;
  const diff1 = tmp12 * closure_11 - diff;
  if (cResult[1] === diff) {
    if (cResult[2] === result) {
      let tmp16;
      let tmp17;
      if (cResult[3] === diff1) {
        tmp16 = cResult[4];
      }
      ({ shimmerDurationMs, shimmerDelayMs, shimmerInitialDelayMs } = tmp16);
      const _Symbol = Symbol;
      const block = tmp5.block;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = React4(AILoader.AILoader, { size: 12, color: "interactive-text-default" });
        cResult[5] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === shimmerDelayMs) {
        if (cResult[7] === shimmerDurationMs) {
          if (cResult[8] === shimmerInitialDelayMs) {
            let tmp20;
            if (cResult[9] === tmp5.label) {
              tmp20 = cResult[10];
            }
            if (cResult[11] === tmp5.header) {
              let tmp23;
              let tmp27;
              if (cResult[12] === tmp20) {
                tmp23 = cResult[13];
              }
              const skeletons = tmp5.skeletons;
              if (cResult[14] !== isCollapsed) {
                let num12 = 6;
                const _Array = Array;
                if (isCollapsed) {
                  num12 = 3;
                }
                const obj2 = { length: num12 };
                const fromResult = from(obj2);
                const mapped1 = fromResult.map((item, index) => {
                  const tmp = FormRowPlaceholderDefault;
                  return closure_1_9(tmp, {}, "skeleton-" + index);
                });
                cResult[14] = isCollapsed;
                cResult[15] = mapped1;
                tmp27 = mapped1;
              } else {
                tmp27 = cResult[15];
              }
              if (cResult[16] === tmp5.skeletons) {
                let tmp29;
                if (cResult[17] === tmp27) {
                  tmp29 = cResult[18];
                }
                if (cResult[19] === tmp5.block) {
                  if (cResult[20] === tmp23) {
                    let tmp33;
                    if (cResult[21] === tmp29) {
                      tmp33 = cResult[22];
                    }
                    return tmp33;
                  }
                }
                const obj3 = { style: block, children: items1 };
                items1 = [tmp23, tmp29];
                const tmp36 = authStore(View, obj3);
                cResult[19] = tmp5.block;
                cResult[20] = tmp23;
                cResult[21] = tmp29;
                cResult[22] = tmp36;
                tmp33 = tmp36;
              }
              const obj4 = { style: skeletons, children: tmp27 };
              const tmp32 = React4(View, obj4);
              cResult[16] = tmp5.skeletons;
              cResult[17] = tmp27;
              cResult[18] = tmp32;
              tmp29 = tmp32;
            }
            const obj5 = { style: tmp5.header, children: items2 };
            items2 = [tmp17, tmp20];
            const tmp26 = authStore(View, obj5);
            cResult[11] = tmp5.header;
            cResult[12] = tmp20;
            cResult[13] = tmp26;
            tmp23 = tmp26;
          }
        }
      }
      const obj6 = { text: first, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp5.label };
      const tmp22 = React4(AIShimmer.AIShimmer, obj6);
      cResult[6] = shimmerDelayMs;
      cResult[7] = shimmerDurationMs;
      cResult[8] = shimmerInitialDelayMs;
      cResult[9] = tmp5.label;
      cResult[10] = tmp22;
      tmp20 = tmp22;
    }
  }
  const obj7 = { shimmerDurationMs: result, shimmerDelayMs: diff, shimmerInitialDelayMs: diff1 };
  cResult[1] = diff;
  cResult[2] = result;
  cResult[3] = diff1;
  cResult[4] = obj7;
  tmp16 = obj7;
}) : ((isCollapsed) => {
  let fromResult;
  let items1;
  let items2;
  let shimmerDelayMs;
  let shimmerDurationMs;
  let shimmerInitialDelayMs;
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_13(isCollapsed);
  reducedMotion = react.useContext(reducedMotion(4554).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = react.useMemo(() => {
    items = [_modDef3880.CM07jO, ...closure_1_12.sort(f125416)];
    return items.map((item) => {
      const intl = reducedMotion(closure_1_2[11]).intl;
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
  items1 = [closure_9(reducedMotion(13937).AILoader, { size: 12, color: "interactive-text-default" }), ];
  const obj3 = { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp.label };
  items1[1] = closure_9(reducedMotion(13941).AIShimmer, obj3);
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
}));
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default memoResult;
