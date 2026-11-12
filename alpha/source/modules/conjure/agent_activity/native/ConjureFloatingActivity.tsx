// Module ID: 13657
// Function ID: 13658
// Name: ConjureFloatingActivity
// Dependencies: [32, 19, 17, 21, 5243, 575, 1652, 5485, 13601, 7364, 1113, 4079, 10459, 5866, 13658, 6867, 2]
// Exports: default

// Module 13657 (ConjureFloatingActivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _modDef4079 from "module_4079" /* 4079 */;
import timing_timing from "timing/timing" /* 5485 */;
import AssetRegistryDefault from "AssetRegistry" /* 6867 */;
import ConjureTodoListDefault from "ConjureTodoList" /* 13601 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let importDefault, set;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: rect, pill: obj2, pillMain: obj3, checklistButton: obj4, panel: obj5, label: { flexShrink: 1 } };
rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj4 = { marginVertical: -nativeDefault.space.PX_8, marginLeft: nativeDefault.space.PX_4, marginRight: -nativeDefault.space.PX_8 };
obj5 = { maxWidth: "100%", marginBottom: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function ConjureFloatingActivityTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureFloatingActivity.tsx");

export default function ConjureFloatingActivity(agents) {
  let ToggleIconButton;
  let _undefined;
  let bottom;
  let c1;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let line;
  let obj12;
  let obj6;
  let onJumpToActivity;
  let tmp10;
  let tmp6;
  let tmp7;
  let todos;
  let todosLive;
  ({ line, todos, todosLive } = agents);
  ({ onJumpToActivity, bottom } = agents);
  if (todosLive === undefined) {
    todosLive = true;
  }
  let sharedValue;
  importDefault = undefined;
  agents = agents.agents;
  const tmp = closure_8();
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    let obj = timing_timing;
    const result = set(obj.withTiming(1, { duration: 150 }));
    return () => {
      const obj = sharedValue(dependencyMap[6]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const items1 = [closure_9, sharedValue];
  let c0;
  [tmp6, tmp7] = items1;
  const obj3 = sharedValue(1652);
  class ConjureFloatingActivityTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp7];
  ConjureFloatingActivityTsx1.__closure = items2;
  ConjureFloatingActivityTsx1.__workletHash = 8355728640531;
  ConjureFloatingActivityTsx1.__initData = tmp6;
  const animatedStyle = obj3.useAnimatedStyle(ConjureFloatingActivityTsx1);
  [tmp10, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = obj2.useCallback(() => _undefined((arg0) => !arg0), []);
  const obj4 = { style: items3, pointerEvents: "box-none", children: items4 };
  items3 = [tmp.root, { bottom }, animatedStyle];
  let tmp14 = null;
  View = _modDef1652.View;
  if (tmp10) {
    tmp14 = null;
    if (null != todos) {
      const obj5 = { style: tmp.panel, children: closure_6(ConjureTodoListDefault, obj6) };
      obj6 = { todos, agents, live: todosLive, announceProgress: false };
      tmp14 = closure_6(View, obj5);
    }
  }
  items4 = [tmp14, ];
  const obj7 = { style: tmp.pill, children: items6 };
  const obj8 = { style: tmp.pillMain, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef4079.xuQfOT, { activity: line }), hitSlop: 8, onPress: onJumpToActivity, children: items5 };
  const PressableOpacity = tmp2(7364).PressableOpacity;
  intl = tmp2(1113).intl;
  const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  const MagicWandIcon = tmp2(10459).MagicWandIcon;
  items5 = [closure_6(MagicWandIcon, obj9), ];
  const obj10 = { style: tmp.label, children: closure_6(sharedValue(5866).Text, { variant: "body-sm/medium", color: "text-default", lineClamp: 1, children: line }) };
  items5[1] = closure_6(View, obj10);
  items6 = [closure_7(PressableOpacity, obj8), ];
  let tmp18Result = null;
  if (null != todos) {
    const obj11 = { style: tmp.checklistButton, children: closure_6(ToggleIconButton, obj12) };
    obj12 = { variant: "default", size: "sm", icon: AssetRegistryDefault, pressed: tmp10, accessibilityLabel: intl2.string(_modDef4079.Qp2isI), onPress: callback };
    ToggleIconButton = tmp2(13658).ToggleIconButton;
    intl2 = tmp2(1113).intl;
    tmp18Result = tmp18(tmp17, obj11);
  }
  items6[1] = tmp18Result;
  items4[1] = closure_7(View, obj7);
  return closure_7(View, obj4);
};
