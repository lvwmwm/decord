// Module ID: 13958
// Function ID: 106106
// Name: useQuestDockSwipeGesture
// Dependencies: [31, 27, 5246, 13873, 33, 4126, 13874, 13962, 3989, 2, 57, 31, 27, 33, 4126]

// Module 13958 (useQuestDockSwipeGesture)
import importAllResult from "module_31";
import { QuestDockMode } from "get ActivityIndicator";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { jsx } from "QUEST_DOCK_COLLAPSED_HEIGHT";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function useQuestDockSwipeGesture() {
  const context = importAllResult.useContext(arg1(dependencyMap[4]).QuestDockGestureContext);
  const arg1 = questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const importDefault = activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const dependencyMap = windowDimensions;
  const minExpandedContentHeight = context.minExpandedContentHeight;
  const tmp2 = importDefault(dependencyMap[5])();
  const QuestDockMode = tmp2;
  const context1 = importAllResult.useContext(arg1(dependencyMap[6]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const questDockOffset = context1.questDockOffset;
  const isVisibleToUser = importAllResult.useContext(importDefault(dependencyMap[7])).isVisibleToUser;
  let obj = arg1(dependencyMap[8]);
  obj = { 0: 29250003, 0: 16956481, 0: -615448320, 9223372036854775807: 29340, 0: 0, 9223372036854775807: 1895956480, 0: 1, isDrawer: restingQuestDockMode.get() === QuestDockMode.EXPANDED };
  const sharedValue = obj.useSharedValue(obj);
  const sharedValue1 = arg1(dependencyMap[8]).useSharedValue(0);
  const obj3 = arg1(dependencyMap[8]);
  const sharedValue2 = arg1(dependencyMap[8]).useSharedValue(isVisibleToUser);
  const obj4 = arg1(dependencyMap[8]);
  const youBarTotalHeight = arg1(dependencyMap[9]).useYouBarTotalHeight();
  const obj5 = arg1(dependencyMap[9]);
  const youBarHorizontalMargin = arg1(dependencyMap[10]).useYouBarHorizontalMargin();
  const items = [isVisibleToUser, sharedValue2];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue2.set(isVisibleToUser);
  }, items);
  const items1 = [restingQuestDockMode, sharedValue, tmp2, sharedValue1, windowDimensions, context.questDockWrapperSpecs, setRestingQuestDockMode, activeQuestDockMode, minExpandedContentHeight, youBarTotalHeight, youBarHorizontalMargin, questDockOffset];
  const memo = importAllResult.useMemo(() => {
    const Gesture = questDockWrapperSpecs(windowDimensions[11]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(false);
    const result = Gesture.Pan().manualActivation(false).maxPointers(1).shouldCancelWhenOutside(false);
    class I {
      constructor(arg0) {
        result = closure_10.set(0);
        obj = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_0.get().x, y: closure_0.get().y, height: closure_0.get().height, isDrawer: closure_5.get() === closure_4.EXPANDED, active: false };
        result1 = closure_9.set(obj);
        return;
      }
    }
    let obj = { touchMoveCount: sharedValue1, initialGestureOffset: sharedValue, questDockWrapperSpecs, restingQuestDockMode, QuestDockMode: tmp2 };
    I.__closure = obj;
    I.__workletHash = 15649211210155;
    I.__initData = closure_21;
    const maxPointersResult = Gesture.Pan().manualActivation(false).maxPointers(1);
    class A {
      constructor(arg0) {
        if (arg0.state === closure_0(closure_2[11]).State.BEGAN) {
          tmp40 = closure_9;
          if (!closure_9.get().active) {
            tmp = closure_10;
            num = 1;
            result = closure_10.set(closure_10.get() + 1);
            tmp3 = closure_13;
            num2 = 0;
            first = arg0.changedTouches[0];
            absoluteY = first.absoluteY;
            tmp6 = closure_9;
            tmp4 = closure_10.get() <= closure_13;
            diff = closure_9.get().absoluteY - absoluteY;
            tmp8 = globalThis;
            _Math = Math;
            absolute = Math.abs(diff);
            tmp10 = closure_5;
            tmp11 = closure_4;
            tmp12 = closure_5.get() === closure_4.EXPANDED && tmp4 && diff >= 0;
            if (!tmp12) {
              tmp13 = closure_5;
              tmp14 = closure_4;
              tmp15 = closure_5.get() === closure_4.COLLAPSED;
              if (tmp15) {
                tmp16 = closure_8;
                tmp15 = diff > closure_8;
              }
              if (!tmp15) {
                tmp17 = closure_5;
                tmp18 = closure_4;
                tmp19 = closure_5.get() === closure_4.EXPANDED;
                if (tmp19) {
                  tmp20 = closure_8;
                  tmp21 = diff < -closure_8;
                  if (!tmp21) {
                    tmp22 = closure_8;
                    tmp21 = diff > closure_8;
                  }
                  tmp19 = tmp21;
                }
                tmp15 = tmp19;
              }
              if (!tmp15) {
                tmp23 = closure_5;
                tmp24 = closure_4;
                tmp25 = closure_5.get() === closure_4.COLLAPSED && diff < 0;
                if (tmp25) {
                  tmp26 = closure_9;
                  tmp25 = absolute > closure_9;
                }
                tmp15 = tmp25;
              }
              if (!tmp15) {
                tmp27 = closure_5;
                tmp28 = closure_4;
                tmp29 = closure_5.get() === closure_4.CLOSED && diff > 0;
                if (tmp29) {
                  tmp30 = closure_9;
                  tmp29 = diff > closure_9;
                }
                tmp15 = tmp29;
              }
              if (!tmp15) {
                tmp31 = closure_5;
                tmp32 = closure_4;
                tmp33 = closure_5.get() === closure_4.CLOSED && diff < 0;
                if (tmp33) {
                  tmp34 = closure_9;
                  tmp33 = absolute > closure_9;
                }
                tmp15 = tmp33;
              }
              if (tmp15) {
                tmp35 = closure_9;
                obj = {};
                obj.absoluteX = first.absoluteX;
                obj.absoluteY = absoluteY;
                tmp36 = closure_0;
                obj.x = closure_0.get().x;
                obj.y = closure_0.get().y;
                obj.height = closure_0.get().height;
                tmp37 = closure_5;
                tmp38 = closure_4;
                obj.isDrawer = closure_5.get() === closure_4.EXPANDED;
                flag = true;
                obj.active = true;
                result1 = closure_9.set(obj);
              }
            }
          }
        }
        return;
      }
    }
    obj = { State: questDockWrapperSpecs(windowDimensions[11]).State, initialGestureOffset: sharedValue, touchMoveCount: sharedValue1, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: youBarHorizontalMargin, restingQuestDockMode, QuestDockMode: tmp2, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: isVisibleToUser, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: sharedValue, questDockWrapperSpecs };
    A.__closure = obj;
    A.__workletHash = 16451041821957;
    A.__initData = closure_20;
    const onTouchesDownResult = result.onTouchesDown(I);
    const fn = function o(absoluteY) {
      const diff = absoluteY.absoluteY - store7.get().absoluteY;
      const value = store4.get();
      const diff1 = store7.get().height - diff;
      let tmp4 = diff1 > value;
      if (tmp4) {
        tmp4 = store2.get() === store5.EXPANDED;
      }
      let sum = diff1;
      if (tmp4) {
        sum = value + (diff1 - value) * closure_16;
      }
      if (store4.get() > 0) {
        const _Math = Math;
        let bound = Math.min(store4.get(), closure_10);
      } else {
        bound = closure_10;
      }
      if (sum >= bound) {
        if (!store7.get().isDrawer) {
          let obj = {};
          const merged = Object.assign(store7.get());
          obj["isDrawer"] = true;
          const result = store7.set(obj);
        }
        obj = {};
        const merged1 = Object.assign(store.get());
        obj["x"] = 0;
        let num7 = 0;
        if (closure_12 > 0) {
          num7 = closure_12;
        }
        obj["y"] = num7;
        obj["width"] = store(store3[12]).getQuestDockExpandedWidth(store3.get().width, store5.get().left, store5.get().right);
        const _Math4 = Math;
        obj["height"] = Math.min(sum, store3.get().height);
        obj["prevDeltaY"] = diff;
        const result1 = store.set(obj);
        const result2 = store2.set(store5.EXPANDED);
        const obj8 = store(store3[12]);
      } else if (sum < closure_11) {
        if (store2.get() === store5.CLOSED) {
          const _Math5 = Math;
          const result3 = (1 - Math.min(sum, 0) / closure_6) * (closure_6 - sum);
          let obj1 = {};
          const merged2 = Object.assign(store.get());
          obj1["x"] = 0;
          let num5 = 0;
          if (result3 > 0) {
            num5 = result3 * closure_15;
          }
          obj1["y"] = num5;
          obj1["width"] = store(store3[12]).getQuestDockClosedWidth(store3.get().width, store5.get().left, store5.get().right);
          let tmp56 = sum;
          if (result3 > 0) {
            tmp56 = closure_6;
          }
          obj1["height"] = tmp56;
          obj1["prevDeltaY"] = diff;
          const result4 = store.set(obj1);
          const result5 = store2.set(store5.CLOSED);
          const obj5 = store(store3[12]);
        }
      } else {
        const result6 = -1 * (sum - closure_5) * (1 - sum / closure_10 / closure_14);
        let num = 0;
        if (closure_12 > 0) {
          const _Math2 = Math;
          num = -Math.min(result6, 0);
        }
        const result7 = closure_7.set(num);
        if (store7.get().isDrawer) {
          obj = {};
          const merged3 = Object.assign(store7.get());
          obj["isDrawer"] = false;
          const result8 = store7.set(obj);
        }
        let tmp22 = closure_5 !== store.get().height;
        if (tmp22) {
          tmp22 = store2.get() !== store5.EXPANDED;
        }
        if (tmp22) {
          obj1 = store(store3[8]);
          obj1.runOnJS(store(store3[13]).triggerHapticFeedback)(store(store3[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const runOnJSResult = obj1.runOnJS(store(store3[13]).triggerHapticFeedback);
        }
        const obj2 = {};
        const merged4 = Object.assign(store.get());
        obj2["x"] = 0;
        let bound1 = result6;
        const result9 = -1 * closure_7;
        if (closure_12 > 0) {
          const _Math3 = Math;
          bound1 = Math.min(result6, 0);
        }
        obj2["y"] = result9 + bound1;
        if (closure_12 > 0) {
          let left = closure_13;
        } else {
          left = store5.get().left;
        }
        if (closure_12 > 0) {
          let right = closure_13;
        } else {
          right = store5.get().right;
        }
        obj2["width"] = store(store3[12]).getQuestDockCollapsedWidth(store3.get().width, left, right);
        obj2["height"] = closure_5;
        obj2["prevDeltaY"] = diff;
        const result10 = store.set(obj2);
        const result11 = store2.set(store5.COLLAPSED);
        const obj4 = store(store3[12]);
      }
    };
    const onTouchesMoveResult = result.onTouchesDown(I).onTouchesMove(A);
    fn.__closure = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode: tmp2, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: sharedValue1, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockExpandedWidth, windowDimensions, safeArea: tmp2, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue2, QUEST_DOCK_CLOSED_HEIGHT: setRestingQuestDockMode, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, getQuestDockClosedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT: restingQuestDockMode, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, questDockOffset, runOnJS: questDockWrapperSpecs(windowDimensions[8]).runOnJS, triggerHapticFeedback: questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback, HapticFeedbackTypes: questDockWrapperSpecs(windowDimensions[13]).HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: questDockOffset, getQuestDockCollapsedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockCollapsedWidth, youBarHorizontalMargin };
    fn.__workletHash = 3375221025411;
    fn.__initData = closure_19;
    const obj1 = { initialGestureOffset: sharedValue, minExpandedContentHeight, activeQuestDockMode, QuestDockMode: tmp2, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: sharedValue1, questDockWrapperSpecs, youBarHeight: youBarTotalHeight, getQuestDockExpandedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockExpandedWidth, windowDimensions, safeArea: tmp2, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue2, QUEST_DOCK_CLOSED_HEIGHT: setRestingQuestDockMode, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, getQuestDockClosedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockClosedWidth, QUEST_DOCK_COLLAPSED_HEIGHT: restingQuestDockMode, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, questDockOffset, runOnJS: questDockWrapperSpecs(windowDimensions[8]).runOnJS, triggerHapticFeedback: questDockWrapperSpecs(windowDimensions[13]).triggerHapticFeedback, HapticFeedbackTypes: questDockWrapperSpecs(windowDimensions[13]).HapticFeedbackTypes, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: questDockOffset, getQuestDockCollapsedWidth: questDockWrapperSpecs(windowDimensions[12]).getQuestDockCollapsedWidth, youBarHorizontalMargin };
    const fn2 = function t(arg0) {
      let velocityY;
      let y;
      ({ velocityY, y } = arg0);
      const absolute = Math.abs(velocityY);
      if (absolute <= closure_12) {
        if (store6.get() !== store5.COLLAPSED) {
          if (velocityY <= closure_12) {
            if (store6.get() !== store5.COLLAPSED) {
              if (store6.get() !== store5.CLOSED) {
                let COLLAPSED = store5.COLLAPSED;
              }
            }
            COLLAPSED = store5.RESET_TO_PREVIOUS;
          }
          COLLAPSED = store5.COLLAPSED;
        } else {
          COLLAPSED = store5.SOFT_DISMISSED;
        }
        let tmp26 = store6.get() === store5.CLOSED;
        if (tmp26) {
          tmp26 = COLLAPSED !== store5.EXPANDED;
        }
        if (tmp26) {
          tmp26 = y < 0;
        }
        if (tmp26) {
          tmp26 = tmp2 > closure_11;
        }
        if (tmp26) {
          COLLAPSED = store5.COLLAPSED;
        }
        store(closure_2[8]).runOnJS(closure_6)(COLLAPSED);
      }
      if (store6.get() === store5.EXPANDED) {
        let EXPANDED = store5.RESET_TO_PREVIOUS;
      } else {
        EXPANDED = store5.EXPANDED;
      }
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn);
    fn2.__closure = { QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: youBarTotalHeight, restingQuestDockMode, QuestDockMode: tmp2, initialGestureOffset: sharedValue, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: sharedValue2, runOnJS: questDockWrapperSpecs(windowDimensions[8]).runOnJS, setRestingQuestDockMode };
    fn2.__workletHash = 10107537449160;
    fn2.__initData = closure_18;
    return onChangeResult.onEnd(fn2);
  }, items1);
  const obj6 = arg1(dependencyMap[10]);
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
        tmp2 = closure_4;
        isVisible = arg0.mode !== closure_4.CLOSED;
      }
      if (isVisible) {
        mode1 = undefined;
        if (null != arg1) {
          mode1 = arg1.mode;
        }
        tmp4 = closure_4;
        isVisible = mode1 !== closure_4.CLOSED;
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
  obj = { QuestDockMode, runOnJS: arg1(dependencyMap[8]).runOnJS, triggerHapticFeedback: arg1(dependencyMap[13]).triggerHapticFeedback, HapticFeedbackTypes: arg1(dependencyMap[13]).HapticFeedbackTypes };
  F.__closure = obj;
  F.__workletHash = 17417080823410;
  F.__initData = closure_23;
  const animatedReaction = arg1(dependencyMap[8]).useAnimatedReaction(V, F);
  return memo;
}
({ QUEST_DOCK_COLLAPSED_HEIGHT: closure_5, QUEST_DOCK_CLOSED_HEIGHT: closure_6, QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED: closure_7, QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM: closure_8, QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM: closure_9, QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT: closure_10, QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT: closure_11, QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY: closure_12, QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD: closure_13, QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR: closure_14, QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR: closure_15, QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR: closure_16 } = QuestsExperimentLocations);
let closure_18 = { code: "function QuestDockGestureDetectorTsx1(event){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}runOnJS(setRestingQuestDockMode)(resultingDockMode);}" };
let closure_19 = { code: "function QuestDockGestureDetectorTsx2(event){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,youBarHeight,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,questDockOffset,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth,youBarHorizontalMargin}=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:youBarHeight>0?youBarHeight:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);questDockOffset.set(youBarHeight>0?-Math.min(newChange,0):0);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+(youBarHeight>0?Math.min(newChange,0):newChange),width:getQuestDockCollapsedWidth(windowDimensions.get().width,youBarHeight>0?youBarHorizontalMargin:safeArea.get().left,youBarHeight>0?youBarHorizontalMargin:safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}" };
let closure_20 = { code: "function QuestDockGestureDetectorTsx3(event){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}" };
let closure_21 = { code: "function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}" };
let closure_22 = { code: "function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}" };
let closure_23 = { code: "function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockGestureDetector.tsx");

export default importAllResult.memo(function QuestDockGestureDetector(children) {
  const tmp = useQuestDockSwipeGesture();
  return jsx(arg1(dependencyMap[11]).GestureDetector, { gesture: useQuestDockSwipeGesture(), children: children.children });
});
export { useQuestDockSwipeGesture };
