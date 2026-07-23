// Module ID: 14079
// Function ID: 108302
// Name: useQuestDockSwipeGesture
// Dependencies: [31, 4976, 13994, 33, 13995, 10394, 13998, 14076, 3991, 13999, 13996, 5217, 13993, 4099, 2]

// Module 14079 (useQuestDockSwipeGesture)
import importAllResult from "result";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function useQuestDockSwipeGesture() {
  const context = minExpandedContentHeight.useContext(questDockWrapperSpecs(windowDimensions[4]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  minExpandedContentHeight = context.minExpandedContentHeight;
  const tmp2 = activeQuestDockMode(windowDimensions[5])();
  const QuestDockMode = tmp2;
  const context1 = minExpandedContentHeight.useContext(questDockWrapperSpecs(windowDimensions[6]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = minExpandedContentHeight.useContext(activeQuestDockMode(windowDimensions[7])).isVisibleToUser;
  let obj = questDockWrapperSpecs(windowDimensions[8]);
  obj = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED, active: false };
  const sharedValue = obj.useSharedValue(obj);
  const sharedValue1 = questDockWrapperSpecs(windowDimensions[8]).useSharedValue(0);
  const obj3 = questDockWrapperSpecs(windowDimensions[8]);
  const sharedValue2 = questDockWrapperSpecs(windowDimensions[8]).useSharedValue(isVisibleToUser);
  let obj4 = questDockWrapperSpecs(windowDimensions[8]);
  const youBarTotalHeight = questDockWrapperSpecs(windowDimensions[9]).useYouBarTotalHeight();
  let obj5 = questDockWrapperSpecs(windowDimensions[9]);
  const youBarHorizontalMargin = questDockWrapperSpecs(windowDimensions[10]).useYouBarHorizontalMargin();
  const items = [isVisibleToUser, sharedValue2];
  const effect = minExpandedContentHeight.useEffect(() => {
    const result = sharedValue2.set(isVisibleToUser);
  }, items);
  const items1 = [restingQuestDockMode, sharedValue, tmp2, sharedValue1, windowDimensions, questDockWrapperSpecs, setRestingQuestDockMode, activeQuestDockMode, minExpandedContentHeight, youBarTotalHeight, youBarHorizontalMargin, questDockOffset];
  const memo = minExpandedContentHeight.useMemo(() => {
    const Gesture = questDockWrapperSpecs(windowDimensions[11]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(false);
    let result = Gesture.Pan().manualActivation(false).maxPointers(1).shouldCancelWhenOutside(false);
    class I {
      constructor(arg0) {
        result = outer1_10.set(0);
        obj = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: outer1_0.get().x, y: outer1_0.get().y, height: outer1_0.get().height, isDrawer: outer1_5.get() === outer2_4.EXPANDED, active: false };
        result1 = outer1_9.set(obj);
        return;
      }
    }
    let obj = { touchMoveCount: sharedValue1, initialGestureOffset: sharedValue, questDockWrapperSpecs, restingQuestDockMode, QuestDockMode: closure_4 };
    I.__closure = obj;
    I.__workletHash = 15649211210155;
    I.__initData = outer1_21;
    const maxPointersResult = Gesture.Pan().manualActivation(false).maxPointers(1);
    class A {
      constructor(arg0) {
        if (arg0.state === questDockWrapperSpecs(windowDimensions[11]).State.BEGAN) {
          tmp40 = outer1_9;
          if (!outer1_9.get().active) {
            tmp = outer1_10;
            num = 1;
            result = outer1_10.set(outer1_10.get() + 1);
            tmp3 = c13;
            num2 = 0;
            first = arg0.changedTouches[0];
            absoluteY = first.absoluteY;
            tmp6 = outer1_9;
            tmp4 = outer1_10.get() <= c13;
            diff = outer1_9.get().absoluteY - absoluteY;
            tmp8 = globalThis;
            _Math = Math;
            absolute = Math.abs(diff);
            tmp10 = outer1_5;
            tmp11 = outer2_4;
            tmp12 = outer1_5.get() === outer2_4.EXPANDED && tmp4 && diff >= 0;
            if (!tmp12) {
              tmp13 = outer1_5;
              tmp14 = outer2_4;
              tmp15 = outer1_5.get() === outer2_4.COLLAPSED;
              if (tmp15) {
                tmp16 = isVisibleToUser;
                tmp15 = diff > isVisibleToUser;
              }
              if (!tmp15) {
                tmp17 = outer1_5;
                tmp18 = outer2_4;
                tmp19 = outer1_5.get() === outer2_4.EXPANDED;
                if (tmp19) {
                  tmp20 = isVisibleToUser;
                  tmp21 = diff < -isVisibleToUser;
                  if (!tmp21) {
                    tmp22 = isVisibleToUser;
                    tmp21 = diff > isVisibleToUser;
                  }
                  tmp19 = tmp21;
                }
                tmp15 = tmp19;
              }
              if (!tmp15) {
                tmp23 = outer1_5;
                tmp24 = outer2_4;
                tmp25 = outer1_5.get() === outer2_4.COLLAPSED && diff < 0;
                if (tmp25) {
                  tmp26 = outer2_9;
                  tmp25 = absolute > outer2_9;
                }
                tmp15 = tmp25;
              }
              if (!tmp15) {
                tmp27 = outer1_5;
                tmp28 = outer2_4;
                tmp29 = outer1_5.get() === outer2_4.CLOSED && diff > 0;
                if (tmp29) {
                  tmp30 = outer2_9;
                  tmp29 = diff > outer2_9;
                }
                tmp15 = tmp29;
              }
              if (!tmp15) {
                tmp31 = outer1_5;
                tmp32 = outer2_4;
                tmp33 = outer1_5.get() === outer2_4.CLOSED && diff < 0;
                if (tmp33) {
                  tmp34 = outer2_9;
                  tmp33 = absolute > outer2_9;
                }
                tmp15 = tmp33;
              }
              if (tmp15) {
                tmp35 = outer1_9;
                obj = {};
                obj.absoluteX = first.absoluteX;
                obj.absoluteY = absoluteY;
                tmp36 = outer1_0;
                obj.x = outer1_0.get().x;
                obj.y = outer1_0.get().y;
                obj.height = outer1_0.get().height;
                tmp37 = outer1_5;
                tmp38 = outer2_4;
                obj.isDrawer = outer1_5.get() === outer2_4.EXPANDED;
                flag = true;
                obj.active = true;
                result1 = outer1_9.set(obj);
              }
            }
          }
        }
        return;
      }
    }
    obj = { State: questDockWrapperSpecs(windowDimensions[11]).State, initialGestureOffset: sharedValue, touchMoveCount: sharedValue1, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: youBarHorizontalMargin, restingQuestDockMode, QuestDockMode: closure_4, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: isVisibleToUser, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: sharedValue, questDockWrapperSpecs };
    A.__closure = obj;
    A.__workletHash = 16451041821957;
    A.__initData = outer1_20;
    const onTouchesDownResult = result.onTouchesDown(I);
    const fn = function o(absoluteY) {
      const diff = absoluteY.absoluteY - outer1_9.get().absoluteY;
      const value = outer1_3.get();
      const diff1 = outer1_9.get().height - diff;
      let tmp4 = diff1 > value;
      if (tmp4) {
        tmp4 = outer1_1.get() === constants.EXPANDED;
      }
      let sum = diff1;
      if (tmp4) {
        sum = value + (diff1 - value) * outer2_16;
      }
      if (outer1_3.get() > 0) {
        const _Math = Math;
        let bound = Math.min(outer1_3.get(), sharedValue1);
      } else {
        bound = sharedValue1;
      }
      if (sum >= bound) {
        if (!outer1_9.get().isDrawer) {
          let obj = {};
          const merged = Object.assign(outer1_9.get());
          obj["isDrawer"] = true;
          const result = outer1_9.set(obj);
        }
        obj = {};
        const merged1 = Object.assign(outer1_0.get());
        obj["x"] = 0;
        let num7 = 0;
        if (outer1_12 > 0) {
          num7 = outer1_12;
        }
        obj["y"] = num7;
        obj["width"] = questDockWrapperSpecs(windowDimensions[12]).getQuestDockExpandedWidth(outer1_2.get().width, outer1_4.get().left, outer1_4.get().right);
        const _Math4 = Math;
        obj["height"] = Math.min(sum, outer1_2.get().height);
        obj["prevDeltaY"] = diff;
        const result1 = outer1_0.set(obj);
        const result2 = outer1_1.set(constants.EXPANDED);
        const obj8 = questDockWrapperSpecs(windowDimensions[12]);
      } else if (sum < sharedValue2) {
        if (outer1_1.get() === constants.CLOSED) {
          const _Math5 = Math;
          const result3 = (1 - Math.min(sum, 0) / setRestingQuestDockMode) * (setRestingQuestDockMode - sum);
          let obj1 = {};
          const merged2 = Object.assign(outer1_0.get());
          obj1["x"] = 0;
          let num5 = 0;
          if (result3 > 0) {
            num5 = result3 * outer2_15;
          }
          obj1["y"] = num5;
          obj1["width"] = questDockWrapperSpecs(windowDimensions[12]).getQuestDockClosedWidth(outer1_2.get().width, outer1_4.get().left, outer1_4.get().right);
          let tmp56 = sum;
          if (result3 > 0) {
            tmp56 = setRestingQuestDockMode;
          }
          obj1["height"] = tmp56;
          obj1["prevDeltaY"] = diff;
          const result4 = outer1_0.set(obj1);
          const result5 = outer1_1.set(constants.CLOSED);
          const obj5 = questDockWrapperSpecs(windowDimensions[12]);
        }
      } else {
        const result6 = -1 * (sum - restingQuestDockMode) * (1 - sum / sharedValue1 / outer2_14);
        let num = 0;
        if (outer1_12 > 0) {
          const _Math2 = Math;
          num = -Math.min(result6, 0);
        }
        const result7 = outer1_7.set(num);
        if (outer1_9.get().isDrawer) {
          obj = {};
          const merged3 = Object.assign(outer1_9.get());
          obj["isDrawer"] = false;
          const result8 = outer1_9.set(obj);
        }
        let tmp22 = restingQuestDockMode !== outer1_0.get().height;
        if (tmp22) {
          tmp22 = outer1_1.get() !== constants.EXPANDED;
        }
        if (tmp22) {
          obj1 = questDockWrapperSpecs(windowDimensions[8]);
          obj1.runOnJS(questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback)(questDockWrapperSpecs(windowDimensions[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const runOnJSResult = obj1.runOnJS(questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback);
        }
        const obj2 = {};
        const merged4 = Object.assign(outer1_0.get());
        obj2["x"] = 0;
        let bound1 = result6;
        const result9 = -1 * questDockOffset;
        if (outer1_12 > 0) {
          const _Math3 = Math;
          bound1 = Math.min(result6, 0);
        }
        obj2["y"] = result9 + bound1;
        if (outer1_12 > 0) {
          let left = outer1_13;
        } else {
          left = outer1_4.get().left;
        }
        if (outer1_12 > 0) {
          let right = outer1_13;
        } else {
          right = outer1_4.get().right;
        }
        obj2["width"] = questDockWrapperSpecs(windowDimensions[12]).getQuestDockCollapsedWidth(outer1_2.get().width, left, right);
        obj2["height"] = restingQuestDockMode;
        obj2["prevDeltaY"] = diff;
        const result10 = outer1_0.set(obj2);
        const result11 = outer1_1.set(constants.COLLAPSED);
        const obj4 = questDockWrapperSpecs(windowDimensions[12]);
      }
    };
    const onTouchesMoveResult = result.onTouchesDown(I).onTouchesMove(A);
    fn.__closure = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode: closure_4, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: outer1_16, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: sharedValue1, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockExpandedWidth, windowDimensions, safeArea: closure_4, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue2, QUEST_DOCK_CLOSED_HEIGHT: setRestingQuestDockMode, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: outer1_15, getQuestDockClosedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT: restingQuestDockMode, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: outer1_14, questDockOffset, runOnJS: questDockWrapperSpecs(windowDimensions[8]).runOnJS, triggerHapticFeedback: questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback, HapticFeedbackTypes: questDockWrapperSpecs(windowDimensions[13]).HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: questDockOffset, getQuestDockCollapsedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockCollapsedWidth, youBarHorizontalMargin };
    fn.__workletHash = 3375221025411;
    fn.__initData = outer1_19;
    let obj1 = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode: closure_4, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: outer1_16, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: sharedValue1, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockExpandedWidth, windowDimensions, safeArea: closure_4, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue2, QUEST_DOCK_CLOSED_HEIGHT: setRestingQuestDockMode, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: outer1_15, getQuestDockClosedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT: restingQuestDockMode, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: outer1_14, questDockOffset, runOnJS: questDockWrapperSpecs(windowDimensions[8]).runOnJS, triggerHapticFeedback: questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback, HapticFeedbackTypes: questDockWrapperSpecs(windowDimensions[13]).HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: questDockOffset, getQuestDockCollapsedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockCollapsedWidth, youBarHorizontalMargin };
    const fn2 = function t(arg0) {
      let velocityY;
      let y;
      ({ velocityY, y } = arg0);
      const absolute = Math.abs(velocityY);
      if (absolute <= youBarTotalHeight) {
        if (outer1_5.get() !== constants.COLLAPSED) {
          if (velocityY <= youBarTotalHeight) {
            if (outer1_5.get() !== constants.COLLAPSED) {
              if (outer1_5.get() !== constants.CLOSED) {
                let COLLAPSED = constants.COLLAPSED;
              }
            }
            COLLAPSED = constants.RESET_TO_PREVIOUS;
          }
          COLLAPSED = constants.COLLAPSED;
        } else {
          COLLAPSED = constants.SOFT_DISMISSED;
        }
        let tmp26 = outer1_5.get() === constants.CLOSED;
        if (tmp26) {
          tmp26 = COLLAPSED !== constants.EXPANDED;
        }
        if (tmp26) {
          tmp26 = y < 0;
        }
        if (tmp26) {
          tmp26 = tmp2 > sharedValue2;
        }
        if (tmp26) {
          COLLAPSED = constants.COLLAPSED;
        }
        questDockWrapperSpecs(windowDimensions[8]).runOnJS(outer1_6)(COLLAPSED);
      }
      if (outer1_5.get() === constants.EXPANDED) {
        let EXPANDED = constants.RESET_TO_PREVIOUS;
      } else {
        EXPANDED = constants.EXPANDED;
      }
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn);
    fn2.__closure = { QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: youBarTotalHeight, restingQuestDockMode, QuestDockMode: closure_4, initialGestureOffset: sharedValue, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue2, runOnJS: questDockWrapperSpecs(windowDimensions[8]).runOnJS, setRestingQuestDockMode };
    fn2.__workletHash = 10107537449160;
    fn2.__initData = outer1_18;
    return onChangeResult.onEnd(fn2);
  }, items1);
  const obj6 = questDockWrapperSpecs(windowDimensions[10]);
  class V {
    constructor() {
      obj = { mode: activeQuestDockMode.get(), isVisible: closure_11.get() };
      return obj;
    }
  }
  V.__closure = { activeQuestDockMode, isVisibleSharedValue: sharedValue2 };
  V.__workletHash = 13629688537260;
  V.__initData = closure_22;
  class F {
    constructor(arg0, arg1) {
      mode = undefined;
      if (null != arg1) {
        mode = arg1.mode;
      }
      isVisible = arg0.mode !== mode;
      if (isVisible) {
        tmp2 = outer1_4;
        isVisible = arg0.mode !== outer1_4.CLOSED;
      }
      if (isVisible) {
        mode1 = undefined;
        if (null != arg1) {
          mode1 = arg1.mode;
        }
        tmp4 = outer1_4;
        isVisible = mode1 !== outer1_4.CLOSED;
      }
      if (isVisible) {
        isVisible = arg0.isVisible;
      }
      if (isVisible) {
        tmp5 = questDockWrapperSpecs;
        tmp6 = windowDimensions;
        num = 8;
        obj = questDockWrapperSpecs(windowDimensions[8]);
        num2 = 13;
        runOnJSResult = obj.runOnJS(questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback);
        tmp7Result = runOnJSResult(questDockWrapperSpecs(windowDimensions[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
      return;
    }
  }
  obj = { QuestDockMode, runOnJS: questDockWrapperSpecs(windowDimensions[8]).runOnJS, triggerHapticFeedback: questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback, HapticFeedbackTypes: questDockWrapperSpecs(windowDimensions[13]).HapticFeedbackTypes };
  F.__closure = obj;
  F.__workletHash = 17417080823410;
  F.__initData = closure_23;
  const animatedReaction = questDockWrapperSpecs(windowDimensions[8]).useAnimatedReaction(V, F);
  return memo;
}
({ QUEST_DOCK_COLLAPSED_HEIGHT: closure_5, QUEST_DOCK_CLOSED_HEIGHT: closure_6, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_7, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: closure_8, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: closure_9, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: closure_10, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: closure_11, QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: closure_13, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16 } = QUEST_DOCK_COLLAPSED_HEIGHT);
let closure_18 = { code: "function QuestDockGestureDetectorTsx1(event){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}runOnJS(setRestingQuestDockMode)(resultingDockMode);}" };
let closure_19 = { code: "function QuestDockGestureDetectorTsx2(event){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange,0):newChange),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}" };
let closure_20 = { code: "function QuestDockGestureDetectorTsx3(event){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}" };
let closure_21 = { code: "function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}" };
let closure_22 = { code: "function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}" };
let closure_23 = { code: "function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
const memoResult = importAllResult.memo(function QuestDockGestureDetector(children) {
  const tmp = useQuestDockSwipeGesture();
  return jsx(require(5217) /* Directions */.GestureDetector, { gesture: useQuestDockSwipeGesture(), children: children.children });
});
let result = require("QUEST_DOCK_COLLAPSED_HEIGHT").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default memoResult;
export { useQuestDockSwipeGesture };
