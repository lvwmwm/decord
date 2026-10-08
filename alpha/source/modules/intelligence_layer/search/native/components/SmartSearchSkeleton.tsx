// Module ID: 17159
// Function ID: 17160
// Name: SmartSearchSkeleton
// Dependencies: [19, 17, 14052, 21, 4051, 5090, 587, 558, 576, 4794, 1126, 14051, 14055, 17147, 2]

// Module 17159 (SmartSearchSkeleton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef4051 from "module_4051" /* 4051 */;
import react3 from "react" /* 4794 */;
import AILoader from "AILoader" /* 14051 */;
import AIShimmer from "AIShimmer" /* 14055 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 17147 */;
import react from "react" /* 19 */;
import AILoaderConstants from "AILoaderConstants" /* 14052 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f128429 = () => Math.random() - 0.5;
const View = react_native.View;
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire } = AILoaderConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [_modDef4051.Sb2fo2, _modDef4051.rXNe0Z, _modDef4051["22g6Ju"], _modDef4051.IogGZY, _modDef4051.UEnMJF, _modDef4051.kk7BVL, _modDef4051.UVa49v];
let closure_10 = createStyles.createStyles((arg0) => {
  let num2;
  let num3;
  let num;
  if (arg0) {
    num = 228;
  }
  const obj = { height: num, marginBottom: num2 };
  num2 = 0;
  if (arg0) {
    num2 = 18;
  }
  const obj2 = { block: obj, header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 }, label: { flexShrink: 1, overflow: "hidden" }, skeletons: { flex: num3, overflow: "hidden" } };
  num3 = 0;
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 });
  if (arg0) {
    num3 = 1;
  }
  return obj2;
});
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchSkeleton(isCollapsed) {
  let first;
  let items1;
  let items2;
  let tmp12;
  let tmp16;
  const obj = react2;
  const cResult = obj.c(21);
  isCollapsed = isCollapsed.isCollapsed;
  const tmp5 = closure_10(isCollapsed);
  const reducedMotion = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [_modDef4051.ffCCEe];
    HermesBuiltin.arraySpread(items, items.sort(f128429), 1);
    const mapped = items.map((item) => {
      const intl = intl2.intl;
      return intl.string(item);
    });
    cResult[0] = mapped;
    first = mapped;
  } else {
    first = cResult[0];
  }
  if (reducedMotion.enabled) {
    let tmp14;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { shimmerDurationMs: 1000, shimmerDelayMs: metroRequire - 450, shimmerInitialDelayMs: 550 };
      cResult[1] = obj2;
      tmp14 = obj2;
    } else {
      tmp14 = cResult[1];
    }
    tmp12 = tmp14;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { shimmerDurationMs: 1000, shimmerDelayMs: hasOwnProperty - 1000, shimmerInitialDelayMs: 300 };
      cResult[2] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[2];
    }
  }
  const block = tmp5.block;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = metroImportDefault(AILoader.AILoader, { size: 12, color: "interactive-text-default" });
    cResult[3] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === tmp12.shimmerDelayMs) {
    if (cResult[5] === tmp12.shimmerDurationMs) {
      if (cResult[6] === tmp12.shimmerInitialDelayMs) {
        let tmp19;
        if (cResult[7] === tmp5.label) {
          tmp19 = cResult[8];
        }
        if (cResult[9] === tmp5.header) {
          let tmp21;
          let tmp25;
          if (cResult[10] === tmp19) {
            tmp21 = cResult[11];
          }
          const skeletons = tmp5.skeletons;
          if (cResult[12] !== isCollapsed) {
            let num11 = 6;
            const _Array = Array;
            if (isCollapsed) {
              num11 = 3;
            }
            const obj4 = { length: num11 };
            const fromResult = from(obj4);
            const mapped1 = fromResult.map((item, index) => {
              const tmp = FormRowPlaceholderDefault;
              return closure_1_7(tmp, {}, "skeleton-" + index);
            });
            cResult[12] = isCollapsed;
            cResult[13] = mapped1;
            tmp25 = mapped1;
          } else {
            tmp25 = cResult[13];
          }
          if (cResult[14] === tmp5.skeletons) {
            let tmp27;
            if (cResult[15] === tmp25) {
              tmp27 = cResult[16];
            }
            if (cResult[17] === tmp5.block) {
              if (cResult[18] === tmp21) {
                let tmp31;
                if (cResult[19] === tmp27) {
                  tmp31 = cResult[20];
                }
                return tmp31;
              }
            }
            const obj5 = { style: block, children: items1 };
            items1 = [tmp21, tmp27];
            const tmp34 = metroImportAll(View, obj5);
            cResult[17] = tmp5.block;
            cResult[18] = tmp21;
            cResult[19] = tmp27;
            cResult[20] = tmp34;
            tmp31 = tmp34;
          }
          const obj6 = { style: skeletons, children: tmp25 };
          const tmp30 = metroImportDefault(View, obj6);
          cResult[14] = tmp5.skeletons;
          cResult[15] = tmp25;
          cResult[16] = tmp30;
          tmp27 = tmp30;
        }
        const obj7 = { style: tmp5.header, children: items2 };
        items2 = [tmp16, tmp19];
        const tmp24 = metroImportAll(View, obj7);
        cResult[9] = tmp5.header;
        cResult[10] = tmp19;
        cResult[11] = tmp24;
        tmp21 = tmp24;
      }
    }
  }
  const obj8 = { text: first, variant: "text-sm/semibold", color: "interactive-text-default", delay: tmp12.shimmerDelayMs, initialDelay: tmp12.shimmerInitialDelayMs, duration: tmp12.shimmerDurationMs, style: tmp5.label };
  const tmp20 = metroImportDefault(AIShimmer.AIShimmer, obj8);
  cResult[4] = tmp12.shimmerDelayMs;
  cResult[5] = tmp12.shimmerDurationMs;
  cResult[6] = tmp12.shimmerInitialDelayMs;
  cResult[7] = tmp5.label;
  cResult[8] = tmp20;
  tmp19 = tmp20;
}) : (function SmartSearchSkeleton(isCollapsed) {
  let fromResult;
  let items1;
  let items2;
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_10(isCollapsed);
  reducedMotion = react.useContext(reducedMotion(4794).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = react.useMemo(() => {
    items = [_modDef4051.ffCCEe, ...closure_1_9.sort(f128429)];
    return items.map((item) => {
      const intl = reducedMotion(closure_1_2[10]).intl;
      return intl.string(item);
    });
  }, []);
  const memo1 = react.useMemo(() => {
    let obj;
    if (reducedMotion.enabled) {
      obj = { shimmerDurationMs: 1000, shimmerDelayMs: metroRequire - 450, shimmerInitialDelayMs: 550 };
      const obj2 = { shimmerDurationMs: 1000, shimmerDelayMs: metroRequire - 450, shimmerInitialDelayMs: 550 };
    } else {
      obj = { shimmerDurationMs: 1000, shimmerDelayMs: hasOwnProperty - 1000, shimmerInitialDelayMs: 300 };
    }
    return obj;
  }, items);
  let obj = { style: tmp.block, children: items2 };
  let obj2 = { style: tmp.header, children: items1 };
  items1 = [closure_7(reducedMotion(14051).AILoader, { size: 12, color: "interactive-text-default" }), ];
  const obj3 = { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: memo1.shimmerDelayMs, initialDelay: memo1.shimmerInitialDelayMs, duration: memo1.shimmerDurationMs, style: tmp.label };
  items1[1] = closure_7(reducedMotion(14055).AIShimmer, obj3);
  items2 = [closure_8(View, obj2), ];
  let num = 6;
  const _Array = Array;
  const obj4 = {
    style: tmp.skeletons,
    children: fromResult.map((item, index) => {
      const tmp = FormRowPlaceholderDefault;
      return closure_1_7(tmp, {}, "skeleton-" + index);
    })
  };
  const tmp4 = closure_8;
  const tmp6 = closure_7;
  if (isCollapsed) {
    num = 3;
  }
  fromResult = from({ length: num });
  items2[1] = tmp6(View, obj4);
  return tmp4(View, obj);
}));
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default memoResult;
