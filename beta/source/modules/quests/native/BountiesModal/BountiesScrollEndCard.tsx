// Module ID: 17284
// Function ID: 17285
// Name: BountiesScrollEndCard
// Dependencies: [19, 17, 5141, 6836, 21, 5140, 575, 5370, 5373, 1652, 5715, 17285, 17287, 17245, 504, 17246, 10082, 2]
// Exports: default

// Module 17284 (BountiesScrollEndCard)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import timingPresets from "timingPresets" /* 5373 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import QuestConstants from "QuestConstants" /* 6836 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10082 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 17245 */;
import useVisibilityTransition from "useVisibilityTransition" /* 17246 */;
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta" /* 17285 */;
import BountiesModalEndedCtaButtonsDefault from "BountiesModalEndedCtaButtons" /* 17287 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
function BountiesScrollEndCardContent(arg0) {
  let bounty;
  let isActive;
  let isScrollingInBoundsSharedValue;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj7;
  let opacityStyle;
  let sourceQuestContent;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let visible;
  ({ bounty, isActive, sourceQuestContent } = arg0);
  ({ visible, isScrollingInBoundsSharedValue, opacityStyle } = arg0);
  const tmp = closure_10();
  let tmp2 = dependencyMap;
  const items = [closure_13, isScrollingInBoundsSharedValue, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[2] = timing_timing.withTiming;
  items[3] = isActive;
  items[4] = timingPresets.timingStandard;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class BountiesScrollEndCardTsx3 {
    constructor() {
      let value;
      const obj = c0;
      if (c0 != null) {
        value = obj.get();
      }
      let num = 0;
      const tmp2 = c1;
      if (c2) {
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      const obj2 = { opacity: tmp2(num, c3) };
      return obj2;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  BountiesScrollEndCardTsx3.__closure = items1;
  BountiesScrollEndCardTsx3.__workletHash = 11141440579356;
  BountiesScrollEndCardTsx3.__initData = tmp4;
  const animatedStyle = useAnimatedStyle(BountiesScrollEndCardTsx3);
  let obj = { style: items2, pointerEvents: "box-none", children: items3 };
  items2 = [tmp.container, opacityStyle];
  let obj2 = { style: tmp.backdropTint, pointerEvents: "none" };
  const View = _modDef1652.View;
  items3 = [metroImportAll(hasOwnProperty, obj2), , ];
  const obj3 = { colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"], style: tmp.backdropGradient, pointerEvents: "none" };
  items3[1] = metroImportAll(LinearGradientDefault, obj3);
  const obj4 = { style: items4, pointerEvents: "box-none", children: items5 };
  items4 = [tmp.overlayContent, animatedStyle];
  const View2 = _modDef1652.View;
  items5 = [, ];
  const obj5 = { bounty, sourceQuestContent, disabled: !isActive };
  items5[0] = metroImportAll(BountiesEndCardPressableCtaDefault, obj5);
  const obj6 = { style: tmp.endedCtaButtonsContainer, pointerEvents: "box-none", children: metroImportAll(BountiesModalEndedCtaButtonsDefault, obj7) };
  obj7 = {
    bounty,
    visible,
    sourceQuestContent,
    onClose() {

    },
    showCloseButton: false,
    disabled: !isActive
  };
  items5[1] = metroImportAll(hasOwnProperty, obj6);
  items3[2] = React4(View2, obj4);
  return React4(View, obj);
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
let items = [{ code: "(function BountiesScrollEndCardTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})" }, timing_timing.withTiming, timingPresets.timingStandard];
let c0;
let c1;
[tmp4, tmp5, tmp6] = items;
class BountiesScrollEndCardTsx1 {
  constructor(arg0) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp5, tmp6];
BountiesScrollEndCardTsx1.__closure = items1;
BountiesScrollEndCardTsx1.__workletHash = 17037395898182;
BountiesScrollEndCardTsx1.__initData = tmp4;
let items2 = [{ code: "(function BountiesScrollEndCardTsx2(visible,cleanUp){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};})" }, timing_timing.withTiming, timingPresets.timingStandard];
c0 = undefined;
c1 = undefined;
[tmp7, tmp8, tmp9] = items2;
class BountiesScrollEndCardTsx2 {
  constructor(arg0, arg1) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings", arg1) };
    return obj;
  }
}
let items3 = [tmp8, tmp9];
BountiesScrollEndCardTsx2.__closure = items3;
BountiesScrollEndCardTsx2.__workletHash = 14533750403909;
BountiesScrollEndCardTsx2.__initData = tmp7;
let closure_13 = { code: "(function BountiesScrollEndCardTsx3(){let[isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard]=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};})" };
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
    const obj5 = { useReducedMotion: stateFromStores, item: tmp15, entering: BountiesScrollEndCardTsx1, exiting: BountiesScrollEndCardTsx2, renderItem: callback };
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
