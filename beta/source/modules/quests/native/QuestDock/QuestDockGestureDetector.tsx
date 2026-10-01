// Module ID: 14714
// Function ID: 14715
// Name: QuestDockGestureDetector
// Dependencies: [19, 5756, 14624, 21, 14631, 14621, 14625, 10895, 14628, 14711, 4566, 14629, 14626, 6073, 14623, 4801, 2]

// Module 14714 (QuestDockGestureDetector)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import QuestDockUtils from "QuestDockUtils" /* 14623 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import size from "module_2" /* 2 */;

let set, set2, set3;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function useQuestDockSwipeGesture() {
  let activeQuestDockMode;
  let questDockExpandHandler;
  let windowDimensions;
  let obj = questDockExpandHandler(activeQuestDockMode[4]);
  const questDockCreative = obj.useQuestDockCreative();
  let obj2 = questDockExpandHandler(activeQuestDockMode[5]);
  questDockExpandHandler = obj2.useQuestDockExpandHandler(questDockCreative);
  const context = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[6]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  let tmp4 = questDockWrapperSpecs(activeQuestDockMode[7])();
  const safeArea = tmp4;
  const context1 = windowDimensions.useContext(questDockExpandHandler(activeQuestDockMode[8]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = windowDimensions.useContext(questDockWrapperSpecs(activeQuestDockMode[9])).isVisibleToUser;
  let obj3 = questDockExpandHandler(activeQuestDockMode[10]);
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: false };
  const sharedValue = obj3.useSharedValue(point);
  let obj5 = questDockExpandHandler(activeQuestDockMode[10]);
  const sharedValue1 = obj5.useSharedValue(0);
  let obj6 = questDockExpandHandler(activeQuestDockMode[10]);
  const sharedValue2 = obj6.useSharedValue(isVisibleToUser);
  let obj7 = questDockExpandHandler(activeQuestDockMode[11]);
  const youBarTotalHeight = obj7.useYouBarTotalHeight();
  let obj8 = questDockExpandHandler(activeQuestDockMode[12]);
  const youBarHorizontalMargin = obj8.useYouBarHorizontalMargin();
  const items = [isVisibleToUser, sharedValue2];
  const effect = windowDimensions.useEffect(() => {
    const result = sharedValue2.set(isVisibleToUser);
  }, items);
  const items1 = [restingQuestDockMode, sharedValue, tmp4, sharedValue1, windowDimensions, questDockWrapperSpecs, setRestingQuestDockMode, activeQuestDockMode, minExpandedContentHeight, youBarTotalHeight, youBarHorizontalMargin, questDockOffset, questDockExpandHandler];
  const memo = windowDimensions.useMemo(() => {
    let height;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(false);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    let result = maxPointersResult.shouldCancelWhenOutside(false);
    class I {
      constructor(absoluteX) {
        const result = sharedValue1.set(0);
        const point = { absoluteX: absoluteX.changedTouches[0].absoluteX, absoluteY: absoluteX.changedTouches[0].absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: false };
        const result1 = sharedValue.set(point);
      }
    }
    const obj = { touchMoveCount: sharedValue1, initialGestureOffset: sharedValue, questDockWrapperSpecs, restingQuestDockMode, QuestDockMode };
    I.__closure = obj;
    I.__workletHash = 15649211210155;
    I.__initData = __initData4;
    const onTouchesDownResult = result.onTouchesDown(I);
    class A {
      constructor(state) {
        if (state.state === questDockExpandHandler(activeQuestDockMode[13]).State.BEGAN) {
          if (!sharedValue.get().active) {
            const result = sharedValue1.set(sharedValue1.get() + 1);
            const first = state.changedTouches[0];
            const absoluteY = first.absoluteY;
            const absoluteX = first.absoluteX;
            const tmp4 = sharedValue1.get() <= youBarTotalHeight;
            const diff = obj3.get().absoluteY - absoluteY;
            const _Math = Math;
            const absolute = Math.abs(diff);
            const tmp10 = restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED && tmp4 && diff >= 0;
            if (!tmp10) {
              let tmp11 = obj.get() === tmp9.COLLAPSED && diff > questDockOffset;
              if (!tmp11) {
                let tmp13 = obj.get() === tmp9.EXPANDED;
                if (tmp13) {
                  tmp13 = diff < -questDockOffset || diff > questDockOffset;
                }
                tmp11 = tmp13;
              }
              if (!tmp11) {
                tmp11 = obj.get() === tmp9.COLLAPSED && diff < 0 && absolute > isVisibleToUser;
                const tmp15 = obj.get() === tmp9.COLLAPSED && diff < 0 && absolute > isVisibleToUser;
              }
              if (!tmp11) {
                tmp11 = obj.get() === tmp9.CLOSED && diff > 0 && diff > isVisibleToUser;
                const tmp17 = obj.get() === tmp9.CLOSED && diff > 0 && diff > isVisibleToUser;
              }
              if (!tmp11) {
                tmp11 = obj.get() === tmp9.CLOSED && diff < 0 && absolute > isVisibleToUser;
                const tmp19 = obj.get() === tmp9.CLOSED && diff < 0 && absolute > isVisibleToUser;
              }
              if (tmp11) {
                const point = { absoluteX, absoluteY, x: questDockWrapperSpecs.get().x, y: questDockWrapperSpecs.get().y, height: questDockWrapperSpecs.get().height, isDrawer: restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED, active: true };
                set = sharedValue.set;
                const result1 = set(point);
              }
            }
          }
        }
      }
    }
    let obj2 = { State: LegacyBaseButton.State, initialGestureOffset: sharedValue, touchMoveCount: sharedValue1, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1, restingQuestDockMode, QuestDockMode, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: metroImportAll, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: React4, questDockWrapperSpecs };
    A.__closure = obj2;
    A.__workletHash = 16451041821957;
    A.__initData = __initData3;
    const fn = function s(absoluteY) {
      let bound;
      let bound1;
      let getQuestDockClosedWidth;
      let getQuestDockCollapsedWidth;
      let getQuestDockExpandedWidth;
      let left;
      let num2;
      let num3;
      let result5;
      let right;
      let tmp51;
      let width;
      let width2;
      let width3;
      const diff = absoluteY.absoluteY - closure_1_10.get().absoluteY;
      const value = closure_1_4.get();
      const diff1 = closure_1_10.get().height - diff;
      let sum = diff1;
      const tmp4 = diff1 > value && closure_1_2.get() === minExpandedContentHeight.EXPANDED;
      if (tmp4) {
        sum = value + (diff1 - value) * closure_2_16;
      }
      if (closure_1_4.get() > 0) {
        const _Math = Math;
        bound = Math.min(obj2.get(), sharedValue);
      } else {
        bound = sharedValue;
      }
      if (sum >= bound) {
        if (!closure_1_10.get().isDrawer) {
          const obj3 = { isDrawer: true };
          set3 = closure_1_10.set;
          const merged = Object.assign(obj.get());
          set3(obj3);
        }
        const obj6 = { x: 0, y: num3, width: getQuestDockExpandedWidth(width3, height.get().left, height.get().right), height: Math.min(sum, windowDimensions.get().height), prevDeltaY: diff };
        const set4 = questDockWrapperSpecs.set;
        const merged1 = Object.assign(questDockWrapperSpecs.get());
        num3 = 0;
        if (youBarTotalHeight > 0) {
          num3 = youBarTotalHeight;
        }
        getQuestDockExpandedWidth = questDockExpandHandler(activeQuestDockMode[14]).getQuestDockExpandedWidth;
        questDockExpandHandler(activeQuestDockMode[14]);
        width3 = windowDimensions.get().width;
        const _Math4 = Math;
        set4(obj6);
        const result = closure_1_2.set(minExpandedContentHeight.EXPANDED);
      } else if (sum < sharedValue1) {
        const obj7 = closure_1_2;
        if (closure_1_2.get() === minExpandedContentHeight.CLOSED) {
          const _Math5 = Math;
          const result1 = (1 - Math.min(sum, 0) / restingQuestDockMode) * (restingQuestDockMode - sum);
          const obj8 = { x: 0, y: num2, width: getQuestDockClosedWidth(width2, height.get().left, height.get().right), height: tmp51, prevDeltaY: diff };
          const set6 = questDockWrapperSpecs.set;
          const merged2 = Object.assign(questDockWrapperSpecs.get());
          num2 = 0;
          const tmp79 = restingQuestDockMode;
          if (0 < result1) {
            num2 = result1 * closure_2_15;
          }
          getQuestDockClosedWidth = questDockExpandHandler(activeQuestDockMode[14]).getQuestDockClosedWidth;
          questDockExpandHandler(activeQuestDockMode[14]);
          width2 = windowDimensions.get().width;
          tmp51 = sum;
          if (0 < result1) {
            tmp51 = tmp79;
          }
          set6(obj8);
          const result2 = obj7.set(minExpandedContentHeight.CLOSED);
        }
      } else {
        const result3 = -1 * (sum - height) * (1 - sum / sharedValue / youBarHorizontalMargin);
        let num = 0;
        const set5 = set.set;
        if (youBarTotalHeight > 0) {
          const _Math2 = Math;
          num = -Math.min(result3, 0);
        }
        set5(num);
        if (closure_1_10.get().isDrawer) {
          const obj9 = { isDrawer: false };
          const merged3 = Object.assign(obj.get());
          const result4 = set(obj9);
        }
        const tmp17 = tmp72 !== questDockWrapperSpecs.get().height && closure_1_2.get() !== minExpandedContentHeight.EXPANDED;
        if (tmp17) {
          const obj5 = questDockExpandHandler(activeQuestDockMode[10]);
          const runOnJSResult = obj5.runOnJS(questDockExpandHandler(activeQuestDockMode[15]).triggerHapticFeedback);
          runOnJSResult(questDockExpandHandler(activeQuestDockMode[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
        }
        const obj10 = { x: 0, y: result5 + bound1, width: getQuestDockCollapsedWidth(width, left, right), height, prevDeltaY: diff };
        set2 = questDockWrapperSpecs.set;
        const merged4 = Object.assign(obj4.get());
        bound1 = result3;
        result5 = -1 * setRestingQuestDockMode;
        if (youBarTotalHeight > 0) {
          const _Math3 = Math;
          bound1 = Math.min(result3, 0);
        }
        getQuestDockCollapsedWidth = questDockExpandHandler(activeQuestDockMode[14]).getQuestDockCollapsedWidth;
        questDockExpandHandler(activeQuestDockMode[14]);
        width = windowDimensions.get().width;
        if (youBarTotalHeight > 0) {
          left = closure_1_14;
        } else {
          left = height.get().left;
        }
        if (youBarTotalHeight > 0) {
          right = closure_1_14;
        } else {
          right = height.get().right;
        }
        set2(obj10);
        const result6 = closure_1_2.set(minExpandedContentHeight.COLLAPSED);
      }
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(A);
    let obj3 = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: authStore3, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: authStore, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: QuestDockUtils.getQuestDockExpandedWidth, windowDimensions, safeArea, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId, QUEST_DOCK_CLOSED_HEIGHT: metroRequire, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, getQuestDockClosedWidth: QuestDockUtils.getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT: hasOwnProperty, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: authStore2, questDockOffset, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: metroImportDefault, getQuestDockCollapsedWidth: QuestDockUtils.getQuestDockCollapsedWidth, youBarHorizontalMargin };
    fn.__closure = obj3;
    fn.__workletHash = 3375221025411;
    fn.__initData = __initData2;
    const fn2 = function t(arg0) {
      let SOFT_DISMISSED;
      let obj2;
      let tmp5;
      let velocityY;
      let y;
      ({ velocityY, y } = arg0);
      const absolute = Math.abs(velocityY);
      if (absolute <= sharedValue2) {
        if (absolute < sharedValue2) {
          const tmp8 = obj2.get() === tmp5.CLOSED && SOFT_DISMISSED !== tmp5.EXPANDED && y < 0 && tmp2 > sharedValue1;
          if (tmp8) {
            SOFT_DISMISSED = tmp5.COLLAPSED;
          }
          if (SOFT_DISMISSED === tmp5.EXPANDED) {
            const obj3 = questDockExpandHandler(activeQuestDockMode[10]);
            obj3.runOnJS(closure_1_0)();
          }
          const obj4 = questDockExpandHandler(activeQuestDockMode[10]);
          obj4.runOnJS(setRestingQuestDockMode)(SOFT_DISMISSED);
        }
        tmp5 = minExpandedContentHeight;
        if (restingQuestDockMode.get() !== minExpandedContentHeight.COLLAPSED) {
          if (velocityY <= sharedValue2) {
            if (restingQuestDockMode.get() !== tmp5.COLLAPSED) {
              if (restingQuestDockMode.get() !== tmp5.CLOSED) {
                SOFT_DISMISSED = tmp5.COLLAPSED;
              }
            }
            SOFT_DISMISSED = tmp5.RESET_TO_PREVIOUS;
          }
          SOFT_DISMISSED = tmp5.COLLAPSED;
        } else {
          SOFT_DISMISSED = tmp5.SOFT_DISMISSED;
        }
        obj2 = obj;
      }
      SOFT_DISMISSED = restingQuestDockMode.get() === minExpandedContentHeight.EXPANDED ? tmp7.RESET_TO_PREVIOUS : tmp7.EXPANDED;
      tmp5 = tmp7;
      obj2 = restingQuestDockMode;
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn);
    let obj4 = { QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: sharedValue2, restingQuestDockMode, QuestDockMode, initialGestureOffset: sharedValue, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId, runOnJS: ReanimatedRexport.runOnJS, onExpand: questDockExpandHandler, setRestingQuestDockMode };
    fn2.__closure = obj4;
    fn2.__workletHash = 4243094635005;
    fn2.__initData = __initData;
    return onChangeResult.onEnd(fn2);
  }, items1);
  let obj9 = questDockExpandHandler(activeQuestDockMode[10]);
  class W {
    constructor() {
      const obj = { mode: activeQuestDockMode.get(), isVisible: sharedValue2.get() };
      return obj;
    }
  }
  W.__closure = { activeQuestDockMode, isVisibleSharedValue: sharedValue2 };
  W.__workletHash = 13629688537260;
  W.__initData = __initData;
  class X {
    constructor(mode, mode2) {
      let mode1;
      mode = mode.mode;
      if (mode2 != null) {
        mode1 = mode2.mode;
      }
      let isVisible = mode !== mode1 && mode.mode !== minExpandedContentHeight.CLOSED;
      if (isVisible) {
        mode2 = undefined;
        if (mode2 != null) {
          mode2 = mode2.mode;
        }
        isVisible = mode2 !== minExpandedContentHeight.CLOSED;
      }
      if (isVisible) {
        isVisible = mode.isVisible;
      }
      if (isVisible) {
        const obj = questDockExpandHandler(activeQuestDockMode[10]);
        const runOnJSResult = obj.runOnJS(questDockExpandHandler(activeQuestDockMode[15]).triggerHapticFeedback);
        runOnJSResult(questDockExpandHandler(activeQuestDockMode[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }
  }
  let obj4 = { QuestDockMode: minExpandedContentHeight, runOnJS: questDockExpandHandler(activeQuestDockMode[10]).runOnJS, triggerHapticFeedback: questDockExpandHandler(activeQuestDockMode[15]).triggerHapticFeedback, HapticFeedbackTypes: questDockExpandHandler(activeQuestDockMode[15]).HapticFeedbackTypes };
  X.__closure = obj4;
  X.__workletHash = 17417080823410;
  X.__initData = __initData2;
  const animatedReaction = obj9.useAnimatedReaction(W, X);
  return memo;
}
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_COLLAPSED_HEIGHT: hasOwnProperty, QUEST_DOCK_CLOSED_HEIGHT: metroRequire, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: metroImportDefault, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: metroImportAll, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: c9, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: c10, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: unpackModuleId, QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: map1, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16 } = QuestDockConstants);
const jsx = Fragment.jsx;
let closure_18 = { code: "function QuestDockGestureDetectorTsx1(event){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,onExpand,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}if(resultingDockMode===QuestDockMode.EXPANDED){runOnJS(onExpand)();}runOnJS(setRestingQuestDockMode)(resultingDockMode);}" };
let closure_19 = { code: "function QuestDockGestureDetectorTsx2(event){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange,0):newChange),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}" };
let closure_20 = { code: "function QuestDockGestureDetectorTsx3(event){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}" };
let closure_21 = { code: "function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}" };
const __initData = { code: "function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}" };
const __initData2 = { code: "function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
const memoResult = react.memo(function QuestDockGestureDetector(children) {
  return jsx(LegacyBaseButton.GestureDetector, { gesture: useQuestDockSwipeGesture(), children: children.children });
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default memoResult;
export { useQuestDockSwipeGesture };
