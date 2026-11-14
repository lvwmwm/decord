// Module ID: 19930
// Function ID: 19931
// Name: useMorphablePanelGesture
// Dependencies: [19, 11986, 1496, 1630, 1655, 5598, 11989, 19928, 1708, 19931, 5554, 2]
// Exports: default

// Module 19930 (useMorphablePanelGesture)
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11989 */;
import react from "react" /* 19 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11986 */;
import size from "module_2" /* 2 */;

let set, set2;

let MorphablePanelModes;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let tmp;
let tmp7;
const _mod1708 = tmp(1708);
const HapticUtils = tmp(5554);
const MorphablePanelUtils = tmp(19928);
const triggerIOSHapticDefault = tmp7(19931);
({ IS_IOS: closure_4, MIN_PAN_GESTURE_MOVE: hasOwnProperty, MorphablePanelModes } = MorphablePanelConstants);
({ PANEL_TAP_GESTURE_MAX_DISTANCE: metroImportDefault, PIP_POP_HEIGHT: metroImportAll, POP_RESISTANCE: c9 } = MorphablePanelConstants);
let closure_10 = { code: "(function useMorphablePanelGestureTsx1(){let[onTapGestureStart]=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();})" };
let closure_11 = { code: "(function useMorphablePanelGestureTsx2(event){let[updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop]=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});})" };
let closure_12 = { code: "(function useMorphablePanelGestureTsx3(event,manager){let[IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,scheduleOnRN,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;scheduleOnRN(triggerIOSHaptic);}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}})" };
let closure_13 = { code: "(function useMorphablePanelGestureTsx4(event){let[mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}})" };
let closure_14 = { code: "(function useMorphablePanelGestureTsx5(_e){let[updateSharedValueIfChanged,initialGestureOffset,wrapperOffset]=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});})" };
let closure_15 = { code: "(function useMorphablePanelGestureTsx6(event){let[initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd]=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});})" };
let closure_16 = { code: "(function useMorphablePanelGestureTsx7(){let[updateSharedValueIfChanged,initialGestureOffset]=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});})" };
let result = size.fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

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
  let tmp = onPanMinimizeGestureEnd(onTapGestureStart[2])();
  let closure_8 = tmp;
  let tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[3])();
  let closure_9 = tmp2;
  let obj = mode(onTapGestureStart[4]);
  const sharedValue = obj.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, active: false, gestureInBottomSafeArea: false, cancel: false, requiresPop: false });
  let items = [sharedValue, mode, flag2, onPanMinimizeGestureEnd, onTapGestureStart, flag, tmp2, tmp, pipState, wrapperOffset, flag3];
  return flag.useMemo(() => {
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp3;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp35;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp4;
    let tmp40;
    let tmp41;
    let tmp42;
    let tmp43;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp48;
    let tmp49;
    let tmp50;
    let tmp51;
    let tmp53;
    let tmp54;
    let tmp55;
    let tmp56;
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp60;
    let tmp61;
    let tmp62;
    let tmp63;
    let tmp64;
    let tmp66;
    let tmp67;
    let tmp68;
    let tmp = require;
    const tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const Race = Gesture.Race;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const items = [closure_10, onTapGestureStart];
    [tmp3, tmp4] = items;
    function useMorphablePanelGestureTsx1() {
      if (c0 != null) {
        tmp();
      }
    }
    const items1 = [tmp4];
    useMorphablePanelGestureTsx1.__closure = items1;
    useMorphablePanelGestureTsx1.__workletHash = 2366314421886;
    useMorphablePanelGestureTsx1.__initData = tmp3;
    const enabledResult = TapResult.enabled(null != onTapGestureStart);
    const maxDistanceResult = enabledResult.maxDistance(metroImportDefault);
    const onStartResult = maxDistanceResult.onStart(useMorphablePanelGestureTsx1);
    const Gesture3 = LegacyBaseButton.Gesture;
    const PanResult = Gesture3.Pan();
    const enabledResult1 = PanResult.enabled(flag);
    const manualActivationResult = enabledResult1.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    let result = maxPointersResult.shouldCancelWhenOutside(false);
    const items2 = [closure_11, , , , , , ];
    let tmp7 = importDefault;
    const onBegin = result.onBegin;
    items2[1] = updateSharedValueIfChangedDefault;
    const tmp8 = wrapperOffset;
    items2[2] = wrapperOffset;
    const tmp9 = sharedValue;
    items2[3] = sharedValue;
    items2[4] = metroImportAll;
    const tmp11 = closure_9;
    items2[5] = closure_9;
    items2[6] = flag2;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    function useMorphablePanelGestureTsx2(absoluteX) {
      _undefined(c1, { x: 0, y: 0 });
      const obj = { absoluteXStart: absoluteX.absoluteX, absoluteYStart: absoluteX.absoluteY, active: false, cancel: absoluteX.absoluteY > _undefined3.height - 2 * _undefined4.bottom, gestureInBottomSafeArea: absoluteX.absoluteY > _undefined3.height - _undefined4.bottom, requiresPop };
      const result = _undefined2.set(obj);
    }
    const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
    useMorphablePanelGestureTsx2.__closure = items3;
    useMorphablePanelGestureTsx2.__workletHash = 17191883845;
    useMorphablePanelGestureTsx2.__initData = tmp12;
    const tmp10 = metroImportAll;
    const items4 = [closure_12, React3, tmp9, , , , , , , , , ];
    const onTouchesMove = onBegin(useMorphablePanelGestureTsx2).onTouchesMove;
    onBegin(useMorphablePanelGestureTsx2);
    items4[3] = LegacyBaseButton.State;
    items4[4] = MorphablePanelUtils.calculateXYDiff;
    items4[5] = mode;
    items4[6] = MorphablePanelModes;
    items4[7] = hasOwnProperty;
    items4[8] = _mod1708.scheduleOnRN;
    items4[9] = triggerIOSHapticDefault;
    items4[10] = updateSharedValueIfChangedDefault;
    items4[11] = tmp8;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items4;
    function useMorphablePanelGestureTsx3(state, activate) {
      let absoluteX;
      let absoluteY;
      const tmp = c0;
      if (tmp) {
        if (_undefined.get().gestureInBottomSafeArea) {
          activate.activate();
        }
      }
      if (_undefined.get().cancel) {
        activate.fail();
      } else if (state.state === _undefined2.BEGAN) {
        if (!_undefined.get().active) {
          ({ absoluteX, absoluteY } = _undefined3(state, _undefined));
          _undefined3(state, _undefined);
          if (c4 === _undefined4.PANEL) {
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
            const tmp12 = tmp10 === tmp11.PIP && tmp7 > c6;
            if (tmp12) {
              _undefined5(c8);
              flag = true;
            }
          }
          if (flag) {
            _undefined6(c10, { x: 0, y: 0, gestureActive: true });
            const obj2 = { absoluteXStart: absoluteX, absoluteYStart: absoluteY, active: true, cancel: false, gestureInBottomSafeArea: false, requiresPop: _undefined.get().requiresPop };
            set = _undefined.set;
            const result = set(obj2);
            activate.activate();
          }
        }
      }
    }
    const items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
    useMorphablePanelGestureTsx3.__closure = items5;
    useMorphablePanelGestureTsx3.__workletHash = 362604412627;
    useMorphablePanelGestureTsx3.__initData = tmp22;
    const items6 = [closure_13, tmp20, tmp21, tmp11, tmp9, React4, metroImportAll, , , , , ];
    const onChange = onTouchesMove(useMorphablePanelGestureTsx3).onChange;
    onTouchesMove(useMorphablePanelGestureTsx3);
    items6[7] = _mod1708.scheduleOnRN;
    items6[8] = HapticUtils.triggerHapticFeedback;
    items6[9] = HapticUtils.HapticFeedbackTypes;
    items6[10] = updateSharedValueIfChangedDefault;
    items6[11] = tmp8;
    [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items6;
    function useMorphablePanelGestureTsx4(absoluteY) {
      if (c0 !== _undefined.PIP) {
        const top = _undefined2.top;
        const result = -1 * (_undefined3.get().absoluteYStart - absoluteY.absoluteY);
        const tmp7 = !_undefined3.get().requiresPop && result <= top;
        if (tmp7) {
          const obj = { requiresPop: true };
          set = _undefined3.set;
          const merged = Object.assign(obj2.get());
          const result1 = set(obj);
        }
        let diff = result;
        if (_undefined3.get().requiresPop) {
          const _Math = Math;
          const bound = Math.max(result, 0);
          if (bound <= c5) {
            diff = bound - bound * c4;
          } else {
            const obj3 = { requiresPop: false };
            set2 = _undefined3.set;
            const merged1 = Object.assign(obj2.get());
            set2(obj3);
            _undefined4(c7, _undefined5.IMPACT_MEDIUM);
            diff = result;
          }
        }
        const point = { y: diff, x: 0 };
        _undefined6(c10, point);
      } else {
        const point1 = { x: -1 * (_undefined3.get().absoluteXStart - absoluteY.absoluteX), y: -1 * (_undefined3.get().absoluteYStart - absoluteY.absoluteY) };
        _undefined6(c10, point1);
      }
    }
    const items7 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46];
    useMorphablePanelGestureTsx4.__closure = items7;
    useMorphablePanelGestureTsx4.__workletHash = 6798218307000;
    useMorphablePanelGestureTsx4.__initData = tmp35;
    const items8 = [closure_14, , , ];
    const onTouchesCancelled = onChange(useMorphablePanelGestureTsx4).onTouchesCancelled;
    onChange(useMorphablePanelGestureTsx4);
    items8[1] = updateSharedValueIfChangedDefault;
    items8[2] = tmp9;
    items8[3] = tmp8;
    [tmp48, tmp49, tmp50, tmp51] = items8;
    function useMorphablePanelGestureTsx5() {
      _undefined(c1, { active: false });
      _undefined(c2, { gestureActive: false });
    }
    const items9 = [tmp49, tmp50, tmp51];
    useMorphablePanelGestureTsx5.__closure = items9;
    useMorphablePanelGestureTsx5.__workletHash = 1347432191838;
    useMorphablePanelGestureTsx5.__initData = tmp48;
    const items10 = [closure_15, tmp9, tmp20, tmp21, , , , , , , , ];
    const onEnd = onTouchesCancelled(useMorphablePanelGestureTsx5).onEnd;
    onTouchesCancelled(useMorphablePanelGestureTsx5);
    items10[4] = MorphablePanelUtils.calculatePIPPositionFromVelocity;
    items10[5] = tmp10;
    items10[6] = tmp11;
    items10[7] = flag3;
    items10[8] = updateSharedValueIfChangedDefault;
    items10[9] = tmp8;
    items10[10] = pipState;
    items10[11] = onPanMinimizeGestureEnd;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let c10;
    [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64] = items10;
    function useMorphablePanelGestureTsx6(velocityY) {
      let pipX;
      let pipY;
      const obj = _undefined;
      if (!_undefined.get().cancel) {
        velocityY = velocityY.velocityY;
        if (c1 === _undefined2.PIP) {
          const obj2 = { velocityX: tmp2, velocityY, absoluteX: tmp3, absoluteY: tmp4, windowDimensions, safeArea, disableHorizontalSafeAreas };
          ({ pipX, pipY } = _undefined3(obj2));
          _undefined3(obj2);
          _undefined4(c8, { gestureActive: false });
          const point = { x: pipX, y: pipY };
          _undefined4(c9, point);
        } else if (tmp5 === tmp6.PANEL) {
          if (velocityY > 0) {
            if (!obj.get().requiresPop) {
              const point1 = { x: 0, y: windowDimensions.height };
              _undefined4(c8, point1);
              if (_undefined5 != null) {
                _undefined5();
              }
            }
          }
        }
        _undefined4(c8, { x: 0, y: 0, gestureActive: false });
      }
    }
    const items11 = [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64];
    useMorphablePanelGestureTsx6.__closure = items11;
    useMorphablePanelGestureTsx6.__workletHash = 3887269879503;
    useMorphablePanelGestureTsx6.__initData = tmp53;
    const items12 = [closure_16, , ];
    const onFinalize = onEnd(useMorphablePanelGestureTsx6).onFinalize;
    onEnd(useMorphablePanelGestureTsx6);
    items12[1] = updateSharedValueIfChangedDefault;
    items12[2] = tmp9;
    let c0;
    let c1;
    [tmp66, tmp67, tmp68] = items12;
    function useMorphablePanelGestureTsx7() {
      _undefined(c1, { active: false, cancel: false });
    }
    const items13 = [tmp67, tmp68];
    useMorphablePanelGestureTsx7.__closure = items13;
    useMorphablePanelGestureTsx7.__workletHash = 4993346673509;
    useMorphablePanelGestureTsx7.__initData = tmp66;
    return Race(onStartResult, onFinalize(useMorphablePanelGestureTsx7));
  }, items);
};
export { MorphablePanelModes };
