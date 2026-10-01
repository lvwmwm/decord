// Module ID: 16845
// Function ID: 16846
// Name: useMorphablePanelGesture
// Dependencies: [19, 11756, 1479, 1613, 4566, 6073, 10896, 16843, 16846, 4801, 2]
// Exports: default

// Module 16845 (useMorphablePanelGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import MorphablePanelUtils from "MorphablePanelUtils" /* 16843 */;
import triggerIOSHapticDefault from "triggerIOSHaptic" /* 16846 */;
import react from "react" /* 19 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import size from "module_2" /* 2 */;

let set, set2;

let MorphablePanelModes;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ IS_IOS: closure_4, MIN_PAN_GESTURE_MOVE: hasOwnProperty, MorphablePanelModes } = MorphablePanelConstants);
({ PANEL_TAP_GESTURE_MAX_DISTANCE: metroImportDefault, PIP_POP_HEIGHT: metroImportAll, POP_RESISTANCE: c9 } = MorphablePanelConstants);
let closure_10 = { code: "function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}" };
let closure_11 = { code: "function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}" };
let closure_12 = { code: "function useMorphablePanelGestureTsx3(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}" };
let closure_13 = { code: "function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}" };
let closure_14 = { code: "function useMorphablePanelGestureTsx5(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_15 = { code: "function useMorphablePanelGestureTsx6(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}" };
let closure_16 = { code: "function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}" };
let result = size.fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

export default function useMorphablePanelGesture(mode) {
  let __initData7;
  let disableHorizontalSafeAreas;
  let requiresPop;
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
  let tmp = onPanMinimizeGestureEnd(onTapGestureStart[2])();
  const windowDimensions = tmp;
  const tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[3])();
  const safeArea = tmp2;
  let obj = mode(onTapGestureStart[4]);
  const sharedValue = obj.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, active: false, gestureInBottomSafeArea: false, cancel: false, requiresPop: false });
  const items = [sharedValue, mode, flag2, onPanMinimizeGestureEnd, onTapGestureStart, flag, tmp2, tmp, pipState, wrapperOffset, flag3];
  return flag.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Race = Gesture.Race;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function x() {
      if (onTapGestureStart != null) {
        tmp();
      }
    };
    fn.__closure = { onTapGestureStart };
    fn.__workletHash = 9880530558215;
    fn.__initData = __initData;
    const enabledResult = TapResult.enabled(null != onTapGestureStart);
    const maxDistanceResult = enabledResult.maxDistance(metroImportDefault);
    const onStartResult = maxDistanceResult.onStart(fn);
    const Gesture3 = LegacyBaseButton.Gesture;
    const PanResult = Gesture3.Pan();
    const enabledResult1 = PanResult.enabled(flag);
    const manualActivationResult = enabledResult1.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    let result = maxPointersResult.shouldCancelWhenOutside(false);
    class V {
      constructor(absoluteX) {
        onPanMinimizeGestureEnd(onTapGestureStart[6])(wrapperOffset, { x: 0, y: 0 });
        const obj = { absoluteXStart: absoluteX.absoluteX, absoluteYStart: absoluteX.absoluteY, active: false, cancel: absoluteX.absoluteY > windowDimensions.height - 2 * safeArea.bottom, gestureInBottomSafeArea: absoluteX.absoluteY > windowDimensions.height - safeArea.bottom, requiresPop };
        const result = __initData.set(obj);
      }
    }
    let obj = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, initialGestureOffset: sharedValue, windowDimensions, safeArea, swipeRequiresPop: flag2 };
    V.__closure = obj;
    V.__workletHash = 14796057583737;
    V.__initData = __initData7;
    const onBeginResult = result.onBegin(V);
    class C {
      constructor(state, activate) {
        let absoluteX;
        let absoluteY;
        const tmp = pipState;
        if (tmp) {
          if (__initData.get().gestureInBottomSafeArea) {
            activate.activate();
          }
        }
        if (__initData.get().cancel) {
          activate.fail();
        } else if (state.state === mode(onTapGestureStart[5]).State.BEGAN) {
          if (!__initData.get().active) {
            const tmp4Result = mode(onTapGestureStart[7]);
            ({ absoluteX, absoluteY } = tmp4Result.calculateXYDiff(state, __initData));
            tmp4Result.calculateXYDiff(state, __initData);
            if (closure_1_0 === wrapperOffset.PANEL) {
              flag = true;
              if (tmp9 >= 0) {
                flag = false;
                if (tmp8) {
                  activate.fail();
                  flag = false;
                }
              }
            } else {
              flag = false;
              const tmp12 = tmp10 === tmp11.PIP && tmp7 > flag2;
              if (tmp12) {
                const tmp4Result2 = mode(onTapGestureStart[4]);
                tmp4Result2.runOnJS(onPanMinimizeGestureEnd(onTapGestureStart[8]))();
                flag = true;
              }
            }
            if (flag) {
              onPanMinimizeGestureEnd(onTapGestureStart[6])(closure_1_6, { x: 0, y: 0, gestureActive: true });
              const obj2 = { absoluteXStart: absoluteX, absoluteYStart: absoluteY, active: true, cancel: false, gestureInBottomSafeArea: false, requiresPop: __initData.get().requiresPop };
              set = __initData.set;
              const result = set(obj2);
              activate.activate();
            }
          }
        }
      }
    }
    let obj2 = { IS_IOS, initialGestureOffset: sharedValue, State: LegacyBaseButton.State, calculateXYDiff: MorphablePanelUtils.calculateXYDiff, mode, MorphablePanelModes, MIN_PAN_GESTURE_MOVE: hasOwnProperty, runOnJS: ReanimatedRexport.runOnJS, triggerIOSHaptic: triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    C.__closure = obj2;
    C.__workletHash = 12545486163726;
    C.__initData = __initData6;
    const onTouchesMoveResult = onBeginResult.onTouchesMove(C);
    class H {
      constructor(absoluteY) {
        if (closure_1_0 !== wrapperOffset.PIP) {
          const top = safeArea.top;
          const result = -1 * (__initData.get().absoluteYStart - absoluteY.absoluteY);
          const tmp9 = !__initData.get().requiresPop && result <= top;
          if (tmp9) {
            const obj = { requiresPop: true };
            set = __initData.set;
            const merged = Object.assign(obj2.get());
            const result1 = set(obj);
          }
          let diff = result;
          if (__initData.get().requiresPop) {
            const _Math = Math;
            const bound = Math.max(result, 0);
            if (bound <= windowDimensions) {
              diff = bound - bound * closure_9;
            } else {
              const obj3 = { requiresPop: false };
              set2 = __initData.set;
              const merged1 = Object.assign(obj2.get());
              set2(obj3);
              const obj5 = mode(onTapGestureStart[4]);
              const runOnJSResult = obj5.runOnJS(mode(onTapGestureStart[9]).triggerHapticFeedback);
              runOnJSResult(mode(onTapGestureStart[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
              diff = result;
            }
          }
          const point = { y: diff, x: 0 };
          onPanMinimizeGestureEnd(onTapGestureStart[6])(closure_1_6, point);
        } else {
          const point1 = { x: -1 * (__initData.get().absoluteXStart - absoluteY.absoluteX), y: -1 * (__initData.get().absoluteYStart - absoluteY.absoluteY) };
          const tmp3 = onPanMinimizeGestureEnd(onTapGestureStart[6]);
          tmp3(closure_1_6, point1);
        }
      }
    }
    let obj3 = { mode, MorphablePanelModes, safeArea, initialGestureOffset: sharedValue, POP_RESISTANCE: safeArea, PIP_POP_HEIGHT: metroImportAll, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    H.__closure = obj3;
    H.__workletHash = 6076208535373;
    H.__initData = __initData5;
    const onChangeResult = onTouchesMoveResult.onChange(H);
    class D {
      constructor() {
        onPanMinimizeGestureEnd(onTapGestureStart[6])(__initData, { active: false });
        onPanMinimizeGestureEnd(onTapGestureStart[6])(wrapperOffset, { gestureActive: false });
      }
    }
    D.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue, wrapperOffset };
    D.__workletHash = 14566382353702;
    D.__initData = __initData4;
    ({ updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue, wrapperOffset });
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(D);
    class X {
      constructor(velocityY) {
        let pipX;
        let pipY;
        const obj = __initData;
        if (!__initData.get().cancel) {
          velocityY = velocityY.velocityY;
          if (closure_1_0 === wrapperOffset.PIP) {
            const obj2 = { velocityX: tmp2, velocityY, absoluteX: tmp3, absoluteY: tmp4, windowDimensions, safeArea, disableHorizontalSafeAreas };
            const obj3 = mode(onTapGestureStart[7]);
            const result = obj3.calculatePIPPositionFromVelocity(obj2);
            ({ pipX, pipY } = result);
            onPanMinimizeGestureEnd(onTapGestureStart[6])(closure_1_6, { gestureActive: false });
            const point = { x: pipX, y: pipY };
            onPanMinimizeGestureEnd(onTapGestureStart[6])(pipState, point);
          } else if (tmp5 === tmp6.PANEL) {
            if (velocityY > 0) {
              if (!obj.get().requiresPop) {
                const point1 = { x: 0, y: windowDimensions.height };
                onPanMinimizeGestureEnd(onTapGestureStart[6])(closure_1_6, point1);
                if (closure_1_1 != null) {
                  closure_1_1();
                }
              }
            }
          }
          onPanMinimizeGestureEnd(onTapGestureStart[6])(closure_1_6, { x: 0, y: 0, gestureActive: false });
        }
      }
    }
    let obj5 = { initialGestureOffset: sharedValue, mode, MorphablePanelModes, calculatePIPPositionFromVelocity: MorphablePanelUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, pipState, onPanMinimizeGestureEnd };
    X.__closure = obj5;
    X.__workletHash = 2406462688275;
    X.__initData = __initData3;
    const fn2 = function t() {
      onPanMinimizeGestureEnd(onTapGestureStart[6])(__initData, { active: false, cancel: false });
    };
    const onEndResult = onTouchesCancelledResult.onEnd(X);
    fn2.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue };
    fn2.__workletHash = 11153815903321;
    fn2.__initData = __initData2;
    ({ updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue });
    return Race(onStartResult, onEndResult.onFinalize(fn2));
  }, items);
};
export { MorphablePanelModes };
