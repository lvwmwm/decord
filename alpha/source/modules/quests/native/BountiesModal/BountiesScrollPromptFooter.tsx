// Module ID: 17161
// Function ID: 17162
// Name: BountiesScrollPromptFooter
// Dependencies: [19, 17, 5142, 6916, 21, 5141, 575, 5378, 5381, 504, 1627, 1652, 5273, 17162, 17163, 10139, 2]
// Exports: default

// Module 17161 (BountiesScrollPromptFooter)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import timingPresets from "timingPresets" /* 5381 */;
import QuestConstants from "QuestConstants" /* 6916 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10139 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 17162 */;
import useVisibilityTransition from "useVisibilityTransition" /* 17163 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportAll;
let metroImportDefault;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
function BountiesScrollPromptFooterContent(zIndex) {
  let BountiesScrollGradientRive;
  let bottom;
  let children;
  let items3;
  let items4;
  let items5;
  let items6;
  let onContentLayout;
  let str;
  let useReducedMotion;
  let visibilityOpacityStyle;
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  importDefault = undefined;
  ({ children, onContentLayout, visibilityOpacityStyle } = zIndex);
  const tmp = closure_9();
  const items = [zIndex];
  const memo = react.useMemo(() => {
    let tmp2;
    if (null != zIndex) {
      tmp2 = { zIndex: tmp };
      const obj = { zIndex: tmp };
    }
    return tmp2;
  }, items);
  let obj = zIndex(504);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp6 = useSafeAreaInsetsDefault();
  importDefault = tmp6;
  const items2 = [tmp6.bottom];
  const memo1 = react.useMemo(() => {
    const obj = { paddingBottom: Math.max(bottom.bottom, nativeDefault.space.PX_8) };
    return obj;
  }, items2);
  const obj2 = { style: items3, pointerEvents: "none", children: items5 };
  items3 = [tmp.root, visibilityOpacityStyle, memo];
  const View = _modDef1652.View;
  const obj3 = { style: items4, children: closure_7(BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str }) };
  items4 = [tmp.gradient, opacityStyle];
  const View2 = _modDef1652.View;
  str = "play";
  BountiesScrollGradientRive = zIndex(5273).BountiesScrollGradientRive;
  const tmp8 = closure_8;
  if (stateFromStores) {
    str = "halt";
  }
  items5 = [closure_7(View2, obj3), ];
  const obj4 = { style: items6, onLayout: onContentLayout, children };
  items6 = [tmp.content, memo1, opacityStyle];
  items5[1] = closure_7(_modDef1652.View, obj4);
  return tmp8(View, obj2);
}
const StyleSheet = react_native.StyleSheet;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  let obj3;
  const obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 }, content: { flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 }, gradient: obj3 };
  ({ flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  obj3 = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  return obj;
});
let items = [{ code: "(function BountiesScrollPromptFooterTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})" }, timing_timing.withTiming, timingPresets.timingStandard];
let c0;
let c1;
[tmp3, tmp4, tmp5] = items;
class BountiesScrollPromptFooterTsx1 {
  constructor(arg0) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp4, tmp5];
BountiesScrollPromptFooterTsx1.__closure = items1;
BountiesScrollPromptFooterTsx1.__workletHash = 6190498486460;
BountiesScrollPromptFooterTsx1.__initData = tmp3;
let items2 = [{ code: "(function BountiesScrollPromptFooterTsx2(visible,cleanUp){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};})" }, timing_timing.withTiming, timingPresets.timingStandard];
c0 = undefined;
c1 = undefined;
[tmp6, tmp7, tmp8] = items2;
class BountiesScrollPromptFooterTsx2 {
  constructor(arg0, arg1) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings", arg1) };
    return obj;
  }
}
let items3 = [tmp7, tmp8];
BountiesScrollPromptFooterTsx2.__closure = items3;
BountiesScrollPromptFooterTsx2.__workletHash = 12923710972959;
BountiesScrollPromptFooterTsx2.__initData = tmp6;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default function BountiesScrollPromptFooter(visible) {
  let tmp16;
  let useReducedMotion;
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let obj = BountiesModalTransitionsRefactorExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = react.useCallback((arg0, visibilityOpacityStyle) => {
    const obj = { visibilityOpacityStyle };
    const merged = Object.assign(arg0);
    return closure_1_7(BountiesScrollPromptFooterContent, obj);
  }, []);
  const obj3 = useVisibilityTransition;
  const obj4 = { visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
  const visibilityTransition = obj3.useVisibilityTransition(obj4);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: tmp16, entering: BountiesScrollPromptFooterTsx1, exiting: BountiesScrollPromptFooterTsx2, renderItem: callback };
    tmp16 = undefined;
    const tmp13 = metroImportDefault;
    const tmp15 = AnimatedEnterExitItemDefault;
    if (visible) {
      tmp16 = merged;
    }
    shouldRender = tmp13(tmp15, obj5);
  } else if (shouldRender) {
    const obj6 = { visibilityOpacityStyle: tmp7 };
    const merged1 = Object.assign(merged);
    shouldRender = metroImportDefault(BountiesScrollPromptFooterContent, obj6);
  }
  return shouldRender;
};
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;
