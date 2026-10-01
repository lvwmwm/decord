// Module ID: 14580
// Function ID: 14581
// Name: BountiesScrollEndCard
// Dependencies: [19, 17, 4825, 5756, 21, 4836, 576, 4837, 4840, 4566, 5293, 14581, 14583, 14545, 504, 14546, 9424, 2]
// Exports: default

// Module 14580 (BountiesScrollEndCard)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9424 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 14545 */;
import useVisibilityTransition from "useVisibilityTransition" /* 14546 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
function BountiesScrollEndCardContent(isScrollingInBoundsSharedValue) {
  let bounty;
  let isActive;
  let items;
  let items1;
  let items2;
  let items3;
  let obj9;
  let opacityStyle;
  let visible;
  ({ bounty, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  ({ visible, opacityStyle } = isScrollingInBoundsSharedValue);
  const tmp = closure_10();
  let obj = isActive(4566);
  class S {
    constructor() {
      let value;
      const obj = isScrollingInBoundsSharedValue;
      if (isScrollingInBoundsSharedValue != null) {
        value = obj.get();
      }
      let num = 0;
      const withTiming = timing.withTiming;
      timing;
      if (isActive) {
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
      return obj2;
    }
  }
  let obj2 = { isScrollingInBoundsSharedValue, withTiming: isActive(4837).withTiming, isActive, timingStandard: isActive(4840).timingStandard };
  S.__closure = obj2;
  S.__workletHash = 4903386092677;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  const obj3 = { style: items, pointerEvents: "box-none", children: items1 };
  items = [tmp.container, opacityStyle];
  const obj4 = { style: tmp.backdropTint, pointerEvents: "none" };
  const View = isScrollingInBoundsSharedValue(4566).View;
  items1 = [closure_8(closure_5, obj4), , ];
  const obj5 = { colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"], style: tmp.backdropGradient, pointerEvents: "none" };
  items1[1] = closure_8(isScrollingInBoundsSharedValue(5293), obj5);
  const obj6 = { style: items2, pointerEvents: "box-none", children: items3 };
  items2 = [tmp.overlayContent, animatedStyle];
  const View2 = isScrollingInBoundsSharedValue(4566).View;
  items3 = [, ];
  const obj7 = { bounty, sourceQuestContent, disabled: !isActive };
  items3[0] = closure_8(isScrollingInBoundsSharedValue(14581), obj7);
  const obj8 = { style: tmp.endedCtaButtonsContainer, pointerEvents: "box-none", children: closure_8(isScrollingInBoundsSharedValue(14583), obj9) };
  obj9 = {
    bounty,
    visible,
    sourceQuestContent,
    onClose() {

    },
    showCloseButton: false,
    disabled: !isActive
  };
  items3[1] = closure_8(closure_5, obj8);
  items1[2] = closure_9(View2, obj6);
  return closure_9(View, obj3);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let rect;
  const obj = { container: obj2, backdropTint: obj3, backdropGradient: obj4, overlayContent: obj5, endedCtaButtonsContainer: rect };
  obj2 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj3 = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj4 = {};
  const merged2 = Object.assign(React3.absoluteFillObject);
  obj5 = { justifyContent: "center", alignItems: "center" };
  const merged3 = Object.assign(React3.absoluteFillObject);
  rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
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
entering.__workletHash = 12127714049951;
entering.__initData = { code: "function BountiesScrollEndCardTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function n(value, fn2) {
  let obj2;
  const obj = { opacity: obj2.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn2) };
  obj2 = timing;
  return obj;
};
let obj2 = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
fn2.__closure = obj2;
fn2.__workletHash = 7470211880124;
fn2.__initData = { code: "function BountiesScrollEndCardTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
const __initData = { code: "function BountiesScrollEndCardTsx3(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(visible) {
  let tmp15;
  let useReducedMotion;
  visible = visible.visible;
  let obj = BountiesModalTransitionsRefactorExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = react.useCallback((arg0, opacityStyle) => {
    const obj = { opacityStyle };
    const merged = Object.assign(arg0);
    return closure_1_8(BountiesScrollEndCardContent, obj);
  }, []);
  const obj3 = useVisibilityTransition;
  const obj4 = { visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
  const visibilityTransition = obj3.useVisibilityTransition(obj4);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: tmp15, entering, exiting: fn2, renderItem: callback };
    tmp15 = undefined;
    const tmp12 = metroImportAll;
    const tmp14 = AnimatedEnterExitItemDefault;
    if (visible) {
      tmp15 = visible;
    }
    shouldRender = tmp12(tmp14, obj5);
  } else if (shouldRender) {
    const obj6 = { opacityStyle: tmp6 };
    let merged = Object.assign(visible);
    shouldRender = metroImportAll(BountiesScrollEndCardContent, obj6);
  }
  return shouldRender;
};
