// Module ID: 17060
// Function ID: 17061
// Name: VibegrationsFloatingActivity
// Dependencies: [32, 19, 17, 21, 4758, 580, 558, 568, 4497, 4759, 17044, 1119, 3682, 12984, 4754, 5341, 5757, 2]

// Module 17060 (VibegrationsFloatingActivity)
import nativeDefault from "native" /* 580 */;
import _modDef3682 from "module_3682" /* 3682 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4497 */;
import timing from "timing" /* 4759 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { root: null, pill: null, pillMain: null, checklistButton: null, panel: null, label: null };
const rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, alignItems: "center" };
obj2.root = rect;
obj2.pill = { flexDirection: "row", alignItems: "center", maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
let obj3 = { flexDirection: "row", alignItems: "center", maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
obj2.pillMain = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.checklistButton = { paddingLeft: nativeDefault.space.PX_12 };
let obj5 = { paddingLeft: nativeDefault.space.PX_12 };
obj2.panel = { maxWidth: "100%", marginBottom: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
obj2.label = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function VibegrationsFloatingActivityTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function VibegrationsFloatingActivityTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const ReactCompilerGating = fn(558);
let obj6 = { maxWidth: "100%", marginBottom: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFloatingActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = sharedValue(568).c(40);
  ({ line, onJumpToActivity, bottom, todos, agents } = arg0);
  const tmp4 = closure_8();
  const obj = sharedValue(568);
  const tmp = sharedValue;
  sharedValue = sharedValue(4497).useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function h() {
      const result = sharedValue.set(timing.withTiming(1, { duration: 150 }));
      return () => sharedValue(dependencyMap[8]).cancelAnimation(closure_1_0);
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  const obj2 = sharedValue(4497);
  class E {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  E.__closure = { opacity: sharedValue };
  E.__workletHash = 13383549561987;
  E.__initData = __initData;
  const animatedStyle = tmp(4497).useAnimatedStyle(E);
  const tmpResult = tmp(4497);
  [r10045, importDefault] = noop.useState(false);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_1((arg0) => !arg0);
      }
    }
    cResult[3] = O;
  } else {
    class O {
      constructor() {
        return closure_1((arg0) => !arg0);
      }
    }
  }
  if (cResult[4] !== bottom) {
    class O {
      constructor() {
        return closure_1((arg0) => !arg0);
      }
    }
    tmp13[0] = bottom;
    cResult[4] = bottom;
    cResult[5] = tmp13;
  } else {
    class O {
      constructor() {
        return closure_1((arg0) => !arg0);
      }
    }
  }
  if (cResult[6] === animatedStyle) {
    class O {
      constructor() {
        return closure_1((arg0) => !arg0);
      }
    }
  }
  const items1 = [tmp4.root, tmp12, animatedStyle];
  cResult[6] = animatedStyle;
  cResult[7] = tmp4.root;
  cResult[8] = tmp12;
  cResult[9] = items1;
}) : ((arg0) => {
  ({ line, todos } = arg0);
  let sharedValue;
  importDefault = undefined;
  ({ onJumpToActivity, bottom, agents } = arg0);
  const tmp = closure_8();
  sharedValue = sharedValue(4497).useSharedValue(0);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(1, { duration: 150 }));
    return () => sharedValue(dependencyMap[8]).cancelAnimation(closure_1_0);
  }, items);
  const obj = sharedValue(4497);
  const fn = function f() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 15157413879808;
  fn.__initData = __initData2;
  const animatedStyle = sharedValue(4497).useAnimatedStyle(fn);
  const obj2 = sharedValue(4497);
  [tmp8, c1] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const obj3 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp.root, { bottom }, animatedStyle];
  obj3.style = items1;
  let tmp12 = null;
  if (tmp8) {
    tmp12 = null;
    if (null != todos) {
      const obj4 = { style: tmp.panel, children: null };
      const obj5 = { todos, agents, announceProgress: false };
      obj4.children = closure_6(tmp11(17044), obj5);
      tmp12 = closure_6(View, obj4);
    }
  }
  const items2 = [tmp12, ];
  const obj6 = { style: tmp.pill, children: null };
  const obj7 = { style: tmp.pillMain, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, onPress: null, children: null };
  const intl = tmp2(1119).intl;
  obj7.accessibilityLabel = intl.formatToPlainString(_modDef3682.Sk4CzQ, { activity: line });
  obj7.onPress = onJumpToActivity;
  const tmp15 = View;
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const items3 = [closure_6(sharedValue(12984).MagicWandIcon, { size: "xs", color: nativeDefault.colors.TEXT_BRAND }), ];
  const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  items3[1] = closure_6(View, { style: tmp.label, children: closure_6(sharedValue(4754).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: line }) });
  obj7.children = items3;
  const items4 = [closure_7(sharedValue(5341).PressableOpacity, obj7), ];
  if (null == todos) {
    items4[1] = null;
    obj6.children = items4;
    items2[1] = tmp10(tmp15, obj6);
    obj3.children = items2;
    return tmp10(ReanimatedRexportDefault.View, obj3);
  } else {
    const obj10 = { style: tmp.checklistButton, accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, hitSlop: 8, onPress: null, children: null };
    const obj11 = { expanded: tmp8 };
    obj10.accessibilityState = obj11;
    const intl2 = tmp2(1119).intl;
    obj10.accessibilityLabel = intl2.string(tmp11(3682).OZIOl8);
    obj10.onPress = callback;
    let colors = tmp11(580).colors;
    const obj12 = { size: "xs", color: tmp8 ? colors.TEXT_BRAND : colors.TEXT_MUTED };
    colors = tmp16(tmp2(5757).ClipboardListIcon, obj12);
    obj10.children = colors;
    tmp16(tmp2(5341).PressableOpacity, obj10);
  }
});
