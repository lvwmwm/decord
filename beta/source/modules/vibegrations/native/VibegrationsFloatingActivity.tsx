// Module ID: 16398
// Function ID: 16399
// Name: VibegrationsFloatingActivity
// Dependencies: [32, 19, 17, 21, 4836, 576, 4566, 4837, 16379, 5435, 1115, 3715, 9611, 4832, 5850, 2]
// Exports: default

// Module 16398 (VibegrationsFloatingActivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import VibegrationsTodoListDefault from "VibegrationsTodoList" /* 16379 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
obj2 = { flexDirection: "row", alignItems: "center", maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj4 = { paddingLeft: nativeDefault.space.PX_12 };
obj5 = { maxWidth: "100%", marginBottom: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
let closure_8 = createStyles(obj);
const __initData = { code: "function VibegrationsFloatingActivityTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFloatingActivity.tsx");

export default function VibegrationsFloatingActivity(agents) {
  let ClipboardListIcon;
  let _undefined;
  let bottom;
  let c1;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let items4;
  let line;
  let obj11;
  let obj12;
  let obj5;
  let onJumpToActivity;
  let tmp8;
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
  let obj = sharedValue(4566);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    let obj = timing;
    const result = set(obj.withTiming(1, { duration: 150 }));
    return () => {
      const obj = sharedValue(dependencyMap[6]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const fn = function x() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 13383549561987;
  fn.__initData = __initData;
  const obj2 = sharedValue(4566);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  [tmp8, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  const obj3 = { style: items1, pointerEvents: "box-none", children: items2 };
  items1 = [tmp.root, { bottom }, animatedStyle];
  let tmp12 = null;
  View = ReanimatedRexportDefault.View;
  if (tmp8) {
    tmp12 = null;
    if (null != todos) {
      const obj4 = { style: tmp.panel, children: closure_6(VibegrationsTodoListDefault, obj5) };
      obj5 = { todos, agents, live: todosLive, announceProgress: false };
      tmp12 = closure_6(View, obj4);
    }
  }
  items2 = [tmp12, ];
  const obj6 = { style: tmp.pill, children: items4 };
  const obj7 = { style: tmp.pillMain, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef3715.Sk4CzQ, { activity: line }), hitSlop: 8, onPress: onJumpToActivity, children: items3 };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  intl = tmp2(1115).intl;
  const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  const MagicWandIcon = tmp2(9611).MagicWandIcon;
  items3 = [closure_6(MagicWandIcon, obj8), ];
  const obj9 = { style: tmp.label, children: closure_6(sharedValue(4832).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: line }) };
  items3[1] = closure_6(View, obj9);
  items4 = [closure_7(PressableOpacity, obj7), ];
  let tmp16Result = null;
  const tmp15 = View;
  if (null != todos) {
    const obj10 = { style: tmp.checklistButton, accessibilityRole: "button", accessibilityState: obj11, accessibilityLabel: intl2.string(_modDef3715.OZIOl8), hitSlop: 8, onPress: callback, children: closure_6(ClipboardListIcon, obj12) };
    obj11 = { expanded: tmp8 };
    const PressableOpacity2 = tmp2(5435).PressableOpacity;
    intl2 = tmp2(1115).intl;
    ClipboardListIcon = tmp2(5850).ClipboardListIcon;
    const colors = tmp11(576).colors;
    obj12 = { size: "xs", color: tmp8 ? colors.TEXT_BRAND : colors.TEXT_MUTED };
    tmp16Result = tmp16(PressableOpacity2, obj10);
  }
  items4[1] = tmp16Result;
  items2[1] = closure_7(tmp15, obj6);
  return closure_7(View, obj3);
};
