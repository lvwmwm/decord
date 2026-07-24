// Module ID: 15750
// Function ID: 121414
// Name: MorphablePanelModes
// Dependencies: [31, 10048, 1450, 1557, 3991, 5217, 10051, 15748, 15751, 4099, 2]
// Exports: default

// Module 15750 (MorphablePanelModes)
import result from "result";
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE";

let MorphablePanelModes;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ IS_IOS: closure_4, MIN_PAN_GESTURE_MOVE: closure_5, MorphablePanelModes } = MIN_PAN_GESTURE_MOVE);
({ PANEL_TAP_GESTURE_MAX_DISTANCE: closure_7, PIP_POP_HEIGHT: closure_8, POP_RESISTANCE: closure_9 } = MIN_PAN_GESTURE_MOVE);
let closure_10 = { code: "function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}" };
let closure_11 = { code: "function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}" };
let closure_12 = { code: "function useMorphablePanelGestureTsx3(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}" };
let closure_13 = { code: "function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}" };
let closure_14 = { code: "function useMorphablePanelGestureTsx5(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_15 = { code: "function useMorphablePanelGestureTsx6(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}" };
let closure_16 = { code: "function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}" };
let result = require("useWindowDimensions").fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

export default function useMorphablePanelGesture(mode) {
  mode = mode.mode;
  const onPanMinimizeGestureEnd = mode.onPanMinimizeGestureEnd;
  const onTapGestureStart = mode.onTapGestureStart;
  let flag = mode.panGestureEnabled;
  if (flag === undefined) {
    flag = false;
  }
  const pipState = mode.pipState;
  let flag2 = mode.swipeRequiresPop;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const wrapperOffset = mode.wrapperOffset;
  let flag3 = mode.disableHorizontalSafeAreas;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let c8;
  let c9;
  let sharedValue;
  const tmp = onPanMinimizeGestureEnd(onTapGestureStart[2])();
  c8 = tmp;
  const tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[3])();
  c9 = tmp2;
  sharedValue = mode(onTapGestureStart[4]).useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, active: false, gestureInBottomSafeArea: false, cancel: false, requiresPop: false });
  const items = [sharedValue, mode, flag2, onPanMinimizeGestureEnd, onTapGestureStart, flag, tmp2, tmp, pipState, wrapperOffset, flag3];
  return flag.useMemo(() => {
    const Gesture = mode(onTapGestureStart[5]).Gesture;
    const Gesture2 = mode(onTapGestureStart[5]).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(null != onTapGestureStart);
    const fn = function x() {
      if (null != outer1_2) {
        outer1_2();
      }
    };
    fn.__closure = { onTapGestureStart };
    fn.__workletHash = 9880530558215;
    fn.__initData = sharedValue;
    const maxDistanceResult = Gesture2.Tap().enabled(null != onTapGestureStart).maxDistance(flag3);
    const Gesture3 = mode(onTapGestureStart[5]).Gesture;
    const onStartResult = Gesture2.Tap().enabled(null != onTapGestureStart).maxDistance(flag3).onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(flag);
    const manualActivationResult = Gesture3.Pan().enabled(flag).manualActivation(true);
    let result = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    class V {
      constructor(arg0) {
        tmp = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_6, { x: 0, y: 0 });
        obj = { absoluteXStart: arg0.absoluteX, absoluteYStart: arg0.absoluteY, active: false, cancel: arg0.absoluteY > outer1_8.height - 2 * outer1_9.bottom, gestureInBottomSafeArea: arg0.absoluteY > outer1_8.height - outer1_9.bottom, requiresPop: outer1_5 };
        result = outer1_10.set(obj);
        return;
      }
    }
    let obj = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, initialGestureOffset: sharedValue, windowDimensions: c8, safeArea: c9, swipeRequiresPop: flag2 };
    V.__closure = obj;
    V.__workletHash = 14796057583737;
    V.__initData = outer1_16;
    const maxPointersResult = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1);
    class C {
      constructor(arg0, arg1) {
        if (pipState) {
          tmp = outer1_10;
          if (outer1_10.get().gestureInBottomSafeArea) {
            activateResult = arg1.activate();
          }
          return;
        }
        if (outer1_10.get().cancel) {
          failResult = arg1.fail();
        } else {
          tmp2 = mode;
          tmp3 = onTapGestureStart;
          num = 5;
          if (arg0.state === mode(onTapGestureStart[5]).State.BEGAN) {
            tmp32 = outer1_10;
            if (!outer1_10.get().active) {
              tmp4 = mode;
              tmp5 = onTapGestureStart;
              num2 = 7;
              obj = mode(onTapGestureStart[7]);
              tmp6 = outer1_10;
              calculateXYDiffResult = obj.calculateXYDiff(arg0, outer1_10);
              tmp11 = outer1_0;
              tmp12 = wrapperOffset;
              ({ absoluteX, absoluteY } = calculateXYDiffResult);
              if (outer1_0 === wrapperOffset.PANEL) {
                num5 = 0;
                flag = true;
                if (tmp10 >= 0) {
                  flag = false;
                  if (tmp9) {
                    failResult1 = arg1.fail();
                    flag = false;
                  }
                }
              } else {
                tmp13 = outer1_0;
                tmp14 = wrapperOffset;
                tmp15 = outer1_0 === wrapperOffset.PIP;
                if (tmp15) {
                  tmp16 = c5;
                  tmp15 = tmp8 > c5;
                }
                flag = false;
                if (tmp15) {
                  tmp17 = mode;
                  tmp18 = onTapGestureStart;
                  num3 = 4;
                  obj2 = mode(onTapGestureStart[4]);
                  tmp19 = onPanMinimizeGestureEnd;
                  num4 = 8;
                  tmp20 = obj2.runOnJS(onPanMinimizeGestureEnd(onTapGestureStart[8]))();
                  flag = true;
                }
              }
              if (flag) {
                tmp22 = onPanMinimizeGestureEnd;
                tmp23 = onTapGestureStart;
                num6 = 6;
                tmp24 = outer1_6;
                tmp25 = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_6, { x: 0, y: 0, gestureActive: true });
                tmp26 = outer1_10;
                obj = { absoluteXStart: null, absoluteYStart: null, active: true, cancel: false, gestureInBottomSafeArea: false };
                obj.absoluteXStart = absoluteX;
                obj.absoluteYStart = absoluteY;
                tmp27 = outer1_10;
                obj.requiresPop = outer1_10.get().requiresPop;
                result = outer1_10.set(obj);
                activateResult1 = arg1.activate();
              }
            }
          }
        }
        return;
      }
    }
    obj = { IS_IOS: pipState, initialGestureOffset: sharedValue, State: mode(onTapGestureStart[5]).State, calculateXYDiff: mode(onTapGestureStart[7]).calculateXYDiff, mode, MorphablePanelModes: wrapperOffset, MIN_PAN_GESTURE_MOVE: flag2, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerIOSHaptic: onPanMinimizeGestureEnd(onTapGestureStart[8]), updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    C.__closure = obj;
    C.__workletHash = 12545486163726;
    C.__initData = outer1_15;
    const onBeginResult = result.onBegin(V);
    class H {
      constructor(arg0) {
        if (outer1_0 !== wrapperOffset.PIP) {
          tmp8 = outer1_9;
          tmp9 = outer1_10;
          num3 = -1;
          result = -1 * (outer1_10.get().absoluteYStart - arg0.absoluteY);
          tmp11 = outer1_10;
          tmp12 = !outer1_10.get().requiresPop && result <= outer1_9.top;
          if (tmp12) {
            tmp13 = outer1_10;
            obj = {};
            tmp14 = outer1_10;
            tmp15 = obj;
            merged = Object.assign(outer1_10.get());
            flag = true;
            str = "requiresPop";
            obj["requiresPop"] = true;
            result1 = outer1_10.set(obj);
          }
          tmp18 = outer1_10;
          diff = result;
          if (!outer1_10.get().requiresPop) {
            tmp24 = onPanMinimizeGestureEnd;
            tmp25 = onTapGestureStart;
            num5 = 6;
            tmp26 = outer1_6;
            obj1 = {};
            obj1.y = diff;
            num6 = 0;
            obj1.x = 0;
            tmp27 = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_6, obj1);
          } else {
            tmp20 = globalThis;
            _Math = Math;
            num4 = 0;
            bound = Math.max(result, 0);
            tmp22 = c8;
            if (bound > c8) {
              tmp28 = outer1_10;
              obj2 = {};
              tmp29 = outer1_10;
              tmp30 = obj2;
              merged1 = Object.assign(outer1_10.get());
              flag2 = false;
              str2 = "requiresPop";
              obj2["requiresPop"] = false;
              result2 = outer1_10.set(obj2);
              tmp33 = mode;
              tmp34 = onTapGestureStart;
              num7 = 4;
              obj5 = mode(onTapGestureStart[4]);
              num8 = 9;
              runOnJSResult = obj5.runOnJS(mode(onTapGestureStart[9]).triggerHapticFeedback);
              tmp35Result = runOnJSResult(mode(onTapGestureStart[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
              diff = result;
            }
          }
          tmp23 = c9;
          diff = bound - bound * c9;
        } else {
          tmp = onPanMinimizeGestureEnd;
          tmp2 = onTapGestureStart;
          num = 6;
          tmp4 = outer1_6;
          obj = {};
          tmp5 = outer1_10;
          tmp3 = onPanMinimizeGestureEnd(onTapGestureStart[6]);
          num2 = -1;
          obj.x = -1 * (outer1_10.get().absoluteXStart - arg0.absoluteX);
          tmp6 = outer1_10;
          obj.y = -1 * (outer1_10.get().absoluteYStart - arg0.absoluteY);
          tmp3Result = tmp3(outer1_6, obj);
          return;
        }
        return;
      }
    }
    const onTouchesMoveResult = result.onBegin(V).onTouchesMove(C);
    H.__closure = { mode, MorphablePanelModes: wrapperOffset, safeArea: c9, initialGestureOffset: sharedValue, POP_RESISTANCE: c9, PIP_POP_HEIGHT: c8, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerHapticFeedback: mode(onTapGestureStart[9]).triggerHapticFeedback, HapticFeedbackTypes: mode(onTapGestureStart[9]).HapticFeedbackTypes, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    H.__workletHash = 6076208535373;
    H.__initData = outer1_14;
    let obj1 = { mode, MorphablePanelModes: wrapperOffset, safeArea: c9, initialGestureOffset: sharedValue, POP_RESISTANCE: c9, PIP_POP_HEIGHT: c8, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerHapticFeedback: mode(onTapGestureStart[9]).triggerHapticFeedback, HapticFeedbackTypes: mode(onTapGestureStart[9]).HapticFeedbackTypes, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    class D {
      constructor() {
        tmp = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_10, { active: false });
        tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_6, { gestureActive: false });
        return;
      }
    }
    const onChangeResult = onTouchesMoveResult.onChange(H);
    D.__closure = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue, wrapperOffset };
    D.__workletHash = 14566382353702;
    D.__initData = outer1_13;
    let obj2 = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue, wrapperOffset };
    class X {
      constructor(arg0) {
        if (!outer1_10.get().cancel) {
          velocityY = arg0.velocityY;
          tmp4 = outer1_0;
          tmp5 = wrapperOffset;
          if (outer1_0 === wrapperOffset.PIP) {
            tmp15 = mode;
            tmp16 = onTapGestureStart;
            num2 = 7;
            obj2 = mode(onTapGestureStart[7]);
            obj = {};
            obj.velocityX = tmp;
            obj.velocityY = velocityY;
            obj.absoluteX = tmp2;
            obj.absoluteY = tmp3;
            tmp17 = outer1_8;
            obj.windowDimensions = outer1_8;
            tmp18 = outer1_9;
            obj.safeArea = outer1_9;
            tmp19 = outer1_7;
            obj.disableHorizontalSafeAreas = outer1_7;
            result = obj2.calculatePIPPositionFromVelocity(obj);
            tmp21 = onPanMinimizeGestureEnd;
            num3 = 6;
            ({ pipX, pipY } = result);
            tmp22 = outer1_6;
            obj1 = {};
            flag = false;
            obj1.gestureActive = false;
            tmp23 = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_6, obj1);
            tmp24 = outer1_4;
            obj2 = {};
            obj2.x = pipX;
            obj2.y = pipY;
            tmp25 = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_4, obj2);
          } else {
            tmp30 = outer1_0;
            tmp31 = wrapperOffset;
            if (outer1_0 === wrapperOffset.PANEL) {
              num5 = 0;
              if (velocityY > 0) {
                tmp32 = outer1_10;
                if (!outer1_10.get().requiresPop) {
                  tmp6 = onPanMinimizeGestureEnd;
                  tmp7 = onTapGestureStart;
                  num = 6;
                  tmp8 = outer1_6;
                  obj = {};
                  obj.x = 0;
                  tmp9 = outer1_8;
                  obj.y = outer1_8.height;
                  tmp10 = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_6, obj);
                  tmp11 = outer1_1;
                  tmp12 = null;
                  if (null != outer1_1) {
                    tmp13 = outer1_1;
                    tmp14 = outer1_1();
                  }
                  return;
                }
              }
            }
          }
          tmp26 = onPanMinimizeGestureEnd;
          tmp27 = onTapGestureStart;
          num4 = 6;
          tmp28 = outer1_6;
          tmp29 = onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_6, { x: 0, y: 0, gestureActive: false });
        }
        return;
      }
    }
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(D);
    X.__closure = { initialGestureOffset: sharedValue, mode, MorphablePanelModes: wrapperOffset, calculatePIPPositionFromVelocity: mode(onTapGestureStart[7]).calculatePIPPositionFromVelocity, windowDimensions: c8, safeArea: c9, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, pipState, onPanMinimizeGestureEnd };
    X.__workletHash = 2406462688275;
    X.__initData = outer1_12;
    const obj3 = { initialGestureOffset: sharedValue, mode, MorphablePanelModes: wrapperOffset, calculatePIPPositionFromVelocity: mode(onTapGestureStart[7]).calculatePIPPositionFromVelocity, windowDimensions: c8, safeArea: c9, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, pipState, onPanMinimizeGestureEnd };
    const fn2 = function t() {
      onPanMinimizeGestureEnd(onTapGestureStart[6])(outer1_10, { active: false, cancel: false });
    };
    const onEndResult = onTouchesCancelledResult.onEnd(X);
    fn2.__closure = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue };
    fn2.__workletHash = 11153815903321;
    fn2.__initData = outer1_11;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn2));
  }, items);
};
export { MorphablePanelModes };
