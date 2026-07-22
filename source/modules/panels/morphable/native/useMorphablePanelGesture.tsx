// Module ID: 15586
// Function ID: 118919
// Name: MorphablePanelModes
// Dependencies: []
// Exports: default

// Module 15586 (MorphablePanelModes)
let MorphablePanelModes;
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ IS_IOS: closure_4, MIN_PAN_GESTURE_MOVE: closure_5, MorphablePanelModes } = tmp2);
({ PANEL_TAP_GESTURE_MAX_DISTANCE: closure_7, PIP_POP_HEIGHT: closure_8, POP_RESISTANCE: closure_9 } = tmp2);
let closure_10 = { code: "function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}" };
let closure_11 = { code: "function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}" };
let closure_12 = { code: "function useMorphablePanelGestureTsx3(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}" };
let closure_13 = { code: "function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}" };
let closure_14 = { code: "function useMorphablePanelGestureTsx5(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_15 = { code: "function useMorphablePanelGestureTsx6(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}" };
let closure_16 = { code: "function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}" };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

export default function useMorphablePanelGesture(mode) {
  mode = mode.mode;
  const arg1 = mode;
  const onPanMinimizeGestureEnd = mode.onPanMinimizeGestureEnd;
  const importDefault = onPanMinimizeGestureEnd;
  const onTapGestureStart = mode.onTapGestureStart;
  const dependencyMap = onTapGestureStart;
  let flag = mode.panGestureEnabled;
  if (flag === undefined) {
    flag = false;
  }
  const React = flag;
  const pipState = mode.pipState;
  let flag2 = mode.swipeRequiresPop;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const wrapperOffset = mode.wrapperOffset;
  const MorphablePanelModes = wrapperOffset;
  let flag3 = mode.disableHorizontalSafeAreas;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let tmp;
  let tmp2;
  let closure_10;
  tmp = importDefault(dependencyMap[2])();
  tmp2 = importDefault(dependencyMap[3])();
  const sharedValue = arg1(dependencyMap[4]).useSharedValue({ 1627713636: 4, -1244900377: 8, -1590293822: "text-subtle", 141540436: "text-sm/normal", 756774337: "text-brand", 1579111068: "text-sm/normal" });
  closure_10 = sharedValue;
  const items = [sharedValue, mode, flag2, onPanMinimizeGestureEnd, onTapGestureStart, flag, tmp2, tmp, pipState, wrapperOffset, flag3];
  return React.useMemo(() => {
    const Gesture = mode(onTapGestureStart[5]).Gesture;
    const Gesture2 = mode(onTapGestureStart[5]).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(null != onTapGestureStart);
    const fn = function x() {
      if (null != callback3) {
        callback3();
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
    const result = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    class V {
      constructor(arg0) {
        tmp = closure_1(closure_2[6])(closure_6, { 0: "%FunctionPrototype%", 0: "paddingStart" });
        obj = { absoluteXStart: arg0.absoluteX, absoluteYStart: arg0.absoluteY, active: false, cancel: arg0.absoluteY > closure_8.height - 2 * closure_9.bottom, gestureInBottomSafeArea: arg0.absoluteY > closure_8.height - closure_9.bottom, requiresPop: closure_5 };
        result = closure_10.set(obj);
        return;
      }
    }
    let obj = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, initialGestureOffset: sharedValue, windowDimensions: tmp, safeArea: tmp2, swipeRequiresPop: flag2 };
    V.__closure = obj;
    V.__workletHash = 14796057583737;
    V.__initData = closure_16;
    const maxPointersResult = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1);
    class C {
      constructor(arg0, arg1) {
        if (closure_4) {
          tmp = closure_10;
          if (closure_10.get().gestureInBottomSafeArea) {
            activateResult = arg1.activate();
          }
          return;
        }
        if (closure_10.get().cancel) {
          failResult = arg1.fail();
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          num = 5;
          if (arg0.state === closure_0(closure_2[5]).State.BEGAN) {
            tmp32 = closure_10;
            if (!closure_10.get().active) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              num2 = 7;
              obj = closure_0(closure_2[7]);
              tmp6 = closure_10;
              calculateXYDiffResult = obj.calculateXYDiff(arg0, closure_10);
              tmp11 = closure_0;
              tmp12 = closure_6;
              ({ absoluteX, absoluteY } = calculateXYDiffResult);
              if (closure_0 === closure_6.PANEL) {
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
                tmp13 = closure_0;
                tmp14 = closure_6;
                tmp15 = closure_0 === closure_6.PIP;
                if (tmp15) {
                  tmp16 = closure_5;
                  tmp15 = tmp8 > closure_5;
                }
                flag = false;
                if (tmp15) {
                  tmp17 = closure_0;
                  tmp18 = closure_2;
                  num3 = 4;
                  obj2 = closure_0(closure_2[4]);
                  tmp19 = closure_1;
                  num4 = 8;
                  tmp20 = obj2.runOnJS(closure_1(closure_2[8]))();
                  flag = true;
                }
              }
              if (flag) {
                tmp22 = closure_1;
                tmp23 = closure_2;
                num6 = 6;
                tmp24 = closure_6;
                tmp25 = closure_1(closure_2[6])(closure_6, {});
                tmp26 = closure_10;
                obj = { flex: null, alignItems: "de0c5291417ca85ca49b63cd365d8403", paddingTop: "en-GB.messages.de0c5291417ca85ca49b63cd365d8403.compiled.messages", paddingBottom: "jsona", flexDirection: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC" };
                obj.absoluteXStart = absoluteX;
                obj.absoluteYStart = absoluteY;
                tmp27 = closure_10;
                obj.requiresPop = closure_10.get().requiresPop;
                result = closure_10.set(obj);
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
    C.__initData = closure_15;
    const onBeginResult = result.onBegin(V);
    class H {
      constructor(arg0) {
        if (closure_0 !== closure_6.PIP) {
          tmp8 = closure_9;
          tmp9 = closure_10;
          num3 = -1;
          result = -1 * (closure_10.get().absoluteYStart - arg0.absoluteY);
          tmp11 = closure_10;
          tmp12 = !closure_10.get().requiresPop && result <= closure_9.top;
          if (tmp12) {
            tmp13 = closure_10;
            obj = {};
            tmp14 = closure_10;
            tmp15 = obj;
            merged = Object.assign(closure_10.get());
            flag = true;
            str = "requiresPop";
            obj["requiresPop"] = true;
            result1 = closure_10.set(obj);
          }
          tmp18 = closure_10;
          diff = result;
          if (!closure_10.get().requiresPop) {
            tmp24 = closure_1;
            tmp25 = closure_2;
            num5 = 6;
            tmp26 = closure_6;
            obj1 = {};
            obj1.y = diff;
            num6 = 0;
            obj1.x = 0;
            tmp27 = closure_1(closure_2[6])(closure_6, obj1);
          } else {
            tmp20 = globalThis;
            _Math = Math;
            num4 = 0;
            bound = Math.max(result, 0);
            tmp22 = closure_8;
            if (bound > closure_8) {
              tmp28 = closure_10;
              obj2 = {};
              tmp29 = closure_10;
              tmp30 = obj2;
              merged1 = Object.assign(closure_10.get());
              flag2 = false;
              str2 = "requiresPop";
              obj2["requiresPop"] = false;
              result2 = closure_10.set(obj2);
              tmp33 = closure_0;
              tmp34 = closure_2;
              num7 = 4;
              obj5 = closure_0(closure_2[4]);
              num8 = 9;
              runOnJSResult = obj5.runOnJS(closure_0(closure_2[9]).triggerHapticFeedback);
              tmp35Result = runOnJSResult(closure_0(closure_2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
              diff = result;
            }
          }
          tmp23 = closure_9;
          diff = bound - bound * closure_9;
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 6;
          tmp4 = closure_6;
          obj = {};
          tmp5 = closure_10;
          tmp3 = closure_1(closure_2[6]);
          num2 = -1;
          obj.x = -1 * (closure_10.get().absoluteXStart - arg0.absoluteX);
          tmp6 = closure_10;
          obj.y = -1 * (closure_10.get().absoluteYStart - arg0.absoluteY);
          tmp3Result = tmp3(closure_6, obj);
          return;
        }
        return;
      }
    }
    const onTouchesMoveResult = result.onBegin(V).onTouchesMove(C);
    H.__closure = { mode, MorphablePanelModes: wrapperOffset, safeArea: tmp2, initialGestureOffset: sharedValue, POP_RESISTANCE: tmp2, PIP_POP_HEIGHT: tmp, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerHapticFeedback: mode(onTapGestureStart[9]).triggerHapticFeedback, HapticFeedbackTypes: mode(onTapGestureStart[9]).HapticFeedbackTypes, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    H.__workletHash = 6076208535373;
    H.__initData = closure_14;
    const obj1 = { mode, MorphablePanelModes: wrapperOffset, safeArea: tmp2, initialGestureOffset: sharedValue, POP_RESISTANCE: tmp2, PIP_POP_HEIGHT: tmp, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerHapticFeedback: mode(onTapGestureStart[9]).triggerHapticFeedback, HapticFeedbackTypes: mode(onTapGestureStart[9]).HapticFeedbackTypes, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    class D {
      constructor() {
        tmp = closure_1(closure_2[6])(closure_10, { active: false });
        tmp2 = closure_1(closure_2[6])(closure_6, { gestureActive: false });
        return;
      }
    }
    const onChangeResult = onTouchesMoveResult.onChange(H);
    D.__closure = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue, wrapperOffset };
    D.__workletHash = 14566382353702;
    D.__initData = closure_13;
    const obj2 = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue, wrapperOffset };
    class X {
      constructor(arg0) {
        if (!closure_10.get().cancel) {
          velocityY = arg0.velocityY;
          tmp4 = closure_0;
          tmp5 = closure_6;
          if (closure_0 === closure_6.PIP) {
            tmp15 = closure_0;
            tmp16 = closure_2;
            num2 = 7;
            obj2 = closure_0(closure_2[7]);
            obj = {};
            obj.velocityX = tmp;
            obj.velocityY = velocityY;
            obj.absoluteX = tmp2;
            obj.absoluteY = tmp3;
            tmp17 = closure_8;
            obj.windowDimensions = closure_8;
            tmp18 = closure_9;
            obj.safeArea = closure_9;
            tmp19 = closure_7;
            obj.disableHorizontalSafeAreas = closure_7;
            result = obj2.calculatePIPPositionFromVelocity(obj);
            tmp21 = closure_1;
            num3 = 6;
            ({ pipX, pipY } = result);
            tmp22 = closure_6;
            obj1 = {};
            flag = false;
            obj1.gestureActive = false;
            tmp23 = closure_1(closure_2[6])(closure_6, obj1);
            tmp24 = closure_4;
            obj2 = {};
            obj2.x = pipX;
            obj2.y = pipY;
            tmp25 = closure_1(closure_2[6])(closure_4, obj2);
          } else {
            tmp30 = closure_0;
            tmp31 = closure_6;
            if (closure_0 === closure_6.PANEL) {
              num5 = 0;
              if (velocityY > 0) {
                tmp32 = closure_10;
                if (!closure_10.get().requiresPop) {
                  tmp6 = closure_1;
                  tmp7 = closure_2;
                  num = 6;
                  tmp8 = closure_6;
                  obj = {};
                  obj.x = 0;
                  tmp9 = closure_8;
                  obj.y = closure_8.height;
                  tmp10 = closure_1(closure_2[6])(closure_6, obj);
                  tmp11 = closure_1;
                  tmp12 = null;
                  if (null != closure_1) {
                    tmp13 = closure_1;
                    tmp14 = closure_1();
                  }
                  return;
                }
              }
            }
          }
          tmp26 = closure_1;
          tmp27 = closure_2;
          num4 = 6;
          tmp28 = closure_6;
          tmp29 = closure_1(closure_2[6])(closure_6, {});
        }
        return;
      }
    }
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(D);
    X.__closure = { initialGestureOffset: sharedValue, mode, MorphablePanelModes: wrapperOffset, calculatePIPPositionFromVelocity: mode(onTapGestureStart[7]).calculatePIPPositionFromVelocity, windowDimensions: tmp, safeArea: tmp2, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, pipState, onPanMinimizeGestureEnd };
    X.__workletHash = 2406462688275;
    X.__initData = closure_12;
    const obj3 = { initialGestureOffset: sharedValue, mode, MorphablePanelModes: wrapperOffset, calculatePIPPositionFromVelocity: mode(onTapGestureStart[7]).calculatePIPPositionFromVelocity, windowDimensions: tmp, safeArea: tmp2, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, pipState, onPanMinimizeGestureEnd };
    const fn2 = function t() {
      callback2(closure_2[6])(closure_10, { "Bool(true)": true, "Bool(true)": true });
    };
    const onEndResult = onTouchesCancelledResult.onEnd(X);
    fn2.__closure = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue };
    fn2.__workletHash = 11153815903321;
    fn2.__initData = closure_11;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn2));
  }, items);
};
export { MorphablePanelModes };
