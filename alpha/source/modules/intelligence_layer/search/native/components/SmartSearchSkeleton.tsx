// Module ID: 18705
// Function ID: 18706
// Name: SmartSearchSkeleton
// Dependencies: [19, 17, 12063, 21, 4120, 5009, 575, 5023, 1114, 12062, 12747, 18693, 2]

// Module 18705 (SmartSearchSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4120 from "module_4120" /* 4120 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 18693 */;
import react from "react" /* 19 */;
import AILoaderConstants from "AILoaderConstants" /* 12063 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire } = AILoaderConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [_modDef4120.Sb2fo2, _modDef4120.rXNe0Z, _modDef4120["22g6Ju"], _modDef4120.IogGZY, _modDef4120.UEnMJF, _modDef4120.kk7BVL, _modDef4120.UVa49v];
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
const memoResult = react.memo(function SmartSearchSkeleton(isCollapsed) {
  let fromResult;
  let items1;
  let items2;
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_10(isCollapsed);
  reducedMotion = react.useContext(reducedMotion(5023).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = react.useMemo(() => {
    items = [_modDef4120.ffCCEe, ...closure_1_9.sort(() => Math.random() - 0.5)];
    return items.map((item) => {
      const intl = reducedMotion(closure_1_2[8]).intl;
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
  items1 = [closure_7(reducedMotion(12062).AILoader, { size: 12, color: "interactive-text-default" }), ];
  const obj3 = { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: memo1.shimmerDelayMs, initialDelay: memo1.shimmerInitialDelayMs, duration: memo1.shimmerDurationMs, style: tmp.label };
  items1[1] = closure_7(reducedMotion(12747).AIShimmer, obj3);
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
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default memoResult;
