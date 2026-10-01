// Module ID: 14544
// Function ID: 14545
// Name: BountiesScrollPromptFooter
// Dependencies: [19, 17, 4825, 5756, 21, 4836, 576, 4837, 4840, 504, 1613, 4566, 4618, 14545, 14546, 9424, 2]
// Exports: default

// Module 14544 (BountiesScrollPromptFooter)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9424 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 14545 */;
import useVisibilityTransition from "useVisibilityTransition" /* 14546 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportAll;
let metroImportDefault;
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
  const View = ReanimatedRexportDefault.View;
  const obj3 = { style: items4, children: closure_7(BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str }) };
  items4 = [tmp.gradient, opacityStyle];
  const View2 = ReanimatedRexportDefault.View;
  str = "play";
  BountiesScrollGradientRive = zIndex(4618).BountiesScrollGradientRive;
  const tmp8 = closure_8;
  if (stateFromStores) {
    str = "halt";
  }
  items5 = [closure_7(View2, obj3), ];
  const obj4 = { style: items6, onLayout: onContentLayout, children };
  items6 = [tmp.content, memo1, opacityStyle];
  items5[1] = closure_7(ReanimatedRexportDefault.View, obj4);
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
const entering = function t(value) {
  let obj2;
  const obj = { opacity: obj2.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  obj2 = timing;
  return obj;
};
let obj = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
entering.__closure = obj;
entering.__workletHash = 11416950434629;
entering.__initData = { code: "function BountiesScrollPromptFooterTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function n(value, fn2) {
  let obj2;
  const obj = { opacity: obj2.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn2) };
  obj2 = timing;
  return obj;
};
let obj2 = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
fn2.__closure = obj2;
fn2.__workletHash = 9928471408966;
fn2.__initData = { code: "function BountiesScrollPromptFooterTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
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
    const obj5 = { useReducedMotion: stateFromStores, item: tmp16, entering, exiting: fn2, renderItem: callback };
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
