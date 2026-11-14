// Module ID: 19964
// Function ID: 19965
// Name: useVoicePanelDockMorphState
// Dependencies: [19, 11985, 12009, 1655, 5939, 12017, 19965, 5548, 1496, 2]
// Exports: default

// Module 19964 (useVoicePanelDockMorphState)
import spring_spring from "spring/spring" /* 5939 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 12017 */;
import useIsDockCoveredByActivityDefault from "useIsDockCoveredByActivity" /* 19965 */;
import react from "react" /* 19 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 12009 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, set;

let hasOwnProperty;
let metroRequire;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ DOCK_PRESS_PHYSICS: hasOwnProperty, getVoicePanelDockHeight: metroRequire } = VoicePanelDockConstants);
let closure_7 = { code: "(function useVoicePanelDockMorphStateTsx1(){let[isDockEnabled,getVoicePanelDockHeight,safeArea]=this.__closure;return isDockEnabled?getVoicePanelDockHeight(safeArea.get().bottom):0;})" };
let closure_8 = { code: "(function useVoicePanelDockMorphStateTsx2(){let[mode]=this.__closure;return mode.get();})" };
let closure_9 = { code: "(function useVoicePanelDockMorphStateTsx3(current,previous){let[committedMode]=this.__closure;if(current!==previous&&committedMode.get()!=null){committedMode.set(null);}})" };
let closure_10 = { code: "(function useVoicePanelDockMorphStateTsx4(){let[mode]=this.__closure;return mode.get();})" };
let closure_11 = { code: "(function useVoicePanelDockMorphStateTsx5(current,previous){let[VoicePanelModes,dismissedFromDock]=this.__closure;if(current===VoicePanelModes.DISMISSED&&previous!=null){dismissedFromDock.set(previous===VoicePanelModes.PIP);}})" };
let closure_12 = { code: "(function useVoicePanelDockMorphStateTsx6(){let[connected,mode]=this.__closure;return{isConnected:connected.get(),currentMode:mode.get()};})" };
let closure_13 = { code: "(function useVoicePanelDockMorphStateTsx7({isConnected:isConnected,currentMode:currentMode}){let[VoicePanelModes,wasDockConnected]=this.__closure;if(currentMode!==VoicePanelModes.DISMISSED){wasDockConnected.set(isConnected||currentMode===VoicePanelModes.PIP);}})" };
let closure_14 = { code: "(function useVoicePanelDockMorphStateTsx8(){let[isDockEnabled,mode,VoicePanelModes,wasDockConnected,connected]=this.__closure;if(!isDockEnabled)return false;return mode.get()===VoicePanelModes.DISMISSED?wasDockConnected.get():connected.get()||mode.get()===VoicePanelModes.PIP;})" };
let closure_15 = { code: "(function useVoicePanelDockMorphStateTsx9(){let[mode,VoicePanelModes,dismissedFromDock,committedMode]=this.__closure;var _committedMode$get;if(mode.get()===VoicePanelModes.DISMISSED){return dismissedFromDock.get()?1:0;}return((_committedMode$get=committedMode.get())!==null&&_committedMode$get!==void 0?_committedMode$get:mode.get())===VoicePanelModes.PIP?1:0;})" };
let closure_16 = { code: "(function useVoicePanelDockMorphStateTsx10(){let[dockShapeTarget]=this.__closure;return dockShapeTarget.get()===0;})" };
let closure_17 = { code: "(function useVoicePanelDockMorphStateTsx11(){let[dockPressed,wrapperOffset,mode,VoicePanelModes]=this.__closure;return dockPressed.get()||wrapperOffset.get().gestureActive&&mode.get()===VoicePanelModes.PIP;})" };
let closure_18 = { code: "(function useVoicePanelDockMorphStateTsx12(){let[withSpring,isDockHeld,DOCK_PRESS_PHYSICS]=this.__closure;return withSpring(isDockHeld.get()?1:0,DOCK_PRESS_PHYSICS);})" };
let closure_19 = { code: "(function useVoicePanelDockMorphStateTsx13(){let[withSpring,mode,VoicePanelModes,isDockConnected,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(mode.get()===VoicePanelModes.DISMISSED&&isDockConnected.get()?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_20 = { code: "(function useVoicePanelDockMorphStateTsx14(){let[withSpring,isCoveredByActivity,dockShapeTarget,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(isCoveredByActivity&&dockShapeTarget.get()===1?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_21 = { code: "(function useVoicePanelDockMorphStateTsx15(){let[isDockConnected,wrapperOffset,mode,VoicePanelModes,wrapperDimensions,dockHeight,clamp,dockShapeTarget,morphSkipsEntryAnimation,withSpring,SHEET_MORPH_PHYSICS]=this.__closure;if(!isDockConnected.get())return 0;const offset=wrapperOffset.get();if(offset.gestureActive&&mode.get()!==VoicePanelModes.DISMISSED){const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();if(travel<=0)return 0;return clamp(offset.y/travel,0,1);}const target=dockShapeTarget.get();if(morphSkipsEntryAnimation.get()){return target;}return withSpring(target,SHEET_MORPH_PHYSICS);})" };
let closure_22 = { code: "(function useVoicePanelDockMorphStateTsx16(){let[morphSkipsEntryAnimation,dockMinimizeProgress,dockShapeTarget]=this.__closure;return morphSkipsEntryAnimation.get()&&dockMinimizeProgress.get()===dockShapeTarget.get();})" };
let closure_23 = { code: "(function useVoicePanelDockMorphStateTsx17(settled){let[morphSkipsEntryAnimation]=this.__closure;if(settled){morphSkipsEntryAnimation.set(false);}})" };
let closure_24 = { code: "(function useVoicePanelDockMorphStateTsx18(){let[dockJoinMorphOrigin,connected,dockMinimizeProgress,SHEET_MORPH_PHYSICS,wrapperOffset,mode,VoicePanelModes]=this.__closure;return dockJoinMorphOrigin.get()!=null&&connected.get()&&(dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold||wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.DISMISSED);})" };
let closure_25 = { code: "(function useVoicePanelDockMorphStateTsx19(done){let[dockJoinMorphOrigin]=this.__closure;if(done){dockJoinMorphOrigin.set(null);}})" };
let closure_26 = { code: "(function useVoicePanelDockMorphStateTsx20(){let[wrapperOffset,mode,VoicePanelModes,isDockExpanding,dockMinimizeProgress,SHEET_MORPH_PHYSICS]=this.__closure;const{gestureActive:gestureActive}=wrapperOffset.get();return mode.get()===VoicePanelModes.DISMISSED||gestureActive&&mode.get()===VoicePanelModes.PANEL||!gestureActive&&(!isDockExpanding.get()||dockMinimizeProgress.get()<=SHEET_MORPH_PHYSICS.restDisplacementThreshold);})" };
let closure_27 = { code: "(function useVoicePanelDockMorphStateTsx21(released){let[dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING]=this.__closure;if(released&&dockContentSwap.get()!==0){dockContentSwap.set(withTiming(0,DOCK_CONTENT_SWAP_TIMING));}})" };
let closure_28 = { code: "(function useVoicePanelDockMorphStateTsx22(){let[isDockConnected,dockTouched,wrapperOffset,isDockSlotEmpty,dockShapeTarget,SHEET_MORPH_PHYSICS,dockMinimizeProgress,dockPressProgress,dockContentSwap,dockJoinMorphOrigin]=this.__closure;if(!isDockConnected.get()||dockTouched.get()||wrapperOffset.get().gestureActive)return false;if(isDockSlotEmpty.get())return false;if(dockShapeTarget.get()!==1)return false;const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return dockMinimizeProgress.get()>=1-restThreshold&&dockPressProgress.get()<=restThreshold&&dockContentSwap.get()===0&&dockJoinMorphOrigin.get()==null;})" };
let closure_29 = { code: "(function useVoicePanelDockMorphStateTsx23(){let[isDockEnabled,wrapperDimensions,dockRestWidth,dockShapeTarget,dockContentSwap,dockJoinMorphOrigin]=this.__closure;if(!isDockEnabled)return null;const fullWidth=wrapperDimensions.get().drawerWidth;const restWidth=dockRestWidth.get();const isWide=restWidth<=0||restWidth>=fullWidth||dockShapeTarget.get()===0||dockContentSwap.get()>0||dockJoinMorphOrigin.get()!=null;return{width:isWide?fullWidth:restWidth,isWide:isWide,isMeasured:restWidth>0};})" };
let closure_30 = { code: "(function useVoicePanelDockMorphStateTsx24(current,previous){let[dockSheetWidth,withSpring,SHEET_MORPH_PHYSICS]=this.__closure;if(current==null)return;if(previous!=null&&current.width===previous.width&&current.isWide===previous.isWide)return;const animates=previous!=null&&previous.isMeasured&&current.isWide!==previous.isWide;dockSheetWidth.set(animates?withSpring(current.width,SHEET_MORPH_PHYSICS):current.width);})" };
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockMorphState.tsx");

export default function useVoicePanelDockMorphState(arg0) {
  let connected;
  let dockEntryProgress;
  let isDockEnabled;
  let mode;
  let mountsMinimized;
  let ref;
  let ref2;
  let safeArea;
  let tmp10;
  let tmp103;
  let tmp104;
  let tmp105;
  let tmp106;
  let tmp107;
  let tmp108;
  let tmp109;
  let tmp11;
  let tmp110;
  let tmp111;
  let tmp112;
  let tmp116;
  let tmp117;
  let tmp118;
  let tmp119;
  let tmp12;
  let tmp120;
  let tmp121;
  let tmp122;
  let tmp123;
  let tmp124;
  let tmp125;
  let tmp126;
  let tmp13;
  let tmp131;
  let tmp132;
  let tmp133;
  let tmp134;
  let tmp135;
  let tmp136;
  let tmp137;
  let tmp138;
  let tmp139;
  let tmp140;
  let tmp141;
  let tmp147;
  let tmp148;
  let tmp149;
  let tmp150;
  let tmp151;
  let tmp152;
  let tmp153;
  let tmp154;
  let tmp155;
  let tmp156;
  let tmp157;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp38;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp44;
  let tmp45;
  let tmp5;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp58;
  let tmp59;
  let tmp6;
  let tmp60;
  let tmp61;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp7;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let wrapperDimensions;
  let wrapperOffset;
  ({ isDockEnabled, mode, connected, wrapperDimensions } = arg0);
  let tmp = dockEntryProgress;
  let tmp2 = dependencyMap;
  ({ mountsMinimized, safeArea, wrapperOffset } = arg0);
  let obj = dockEntryProgress(1655);
  let sharedValue = obj.useSharedValue({ gestureActive: false, x: 0, y: 0 });
  if (isDockEnabled) {
    sharedValue = wrapperOffset;
  }
  const items = [closure_7, isDockEnabled, closure_6, safeArea];
  [tmp4, tmp5, tmp6, tmp7] = items;
  function useVoicePanelDockMorphStateTsx1() {
    let num = 0;
    if (c0) {
      num = _undefined(_undefined2.get().bottom);
    }
    return num;
  }
  const items1 = [tmp5, tmp6, tmp7];
  useVoicePanelDockMorphStateTsx1.__closure = items1;
  useVoicePanelDockMorphStateTsx1.__workletHash = 16574063931371;
  useVoicePanelDockMorphStateTsx1.__initData = tmp4;
  const tmpResult = tmp(1655);
  const dockHeight = tmpResult.useDerivedValue(useVoicePanelDockMorphStateTsx1);
  const tmpResult30 = tmp(1655);
  const committedMode = tmpResult30.useSharedValue(null);
  const items2 = [closure_8, mode];
  [tmp10, tmp11] = items2;
  function useVoicePanelDockMorphStateTsx2() {
    return _undefined.get();
  }
  const items3 = [tmp11];
  useVoicePanelDockMorphStateTsx2.__closure = items3;
  useVoicePanelDockMorphStateTsx2.__workletHash = 1130154786589;
  useVoicePanelDockMorphStateTsx2.__initData = tmp10;
  const items4 = [closure_9, committedMode];
  [tmp12, tmp13] = items4;
  function useVoicePanelDockMorphStateTsx3(arg0, arg1) {
    const tmp = arg0 !== arg1 && null != _undefined.get();
    if (tmp) {
      const result = _undefined.set(null);
    }
  }
  const items5 = [tmp13];
  useVoicePanelDockMorphStateTsx3.__closure = items5;
  useVoicePanelDockMorphStateTsx3.__workletHash = 11294143921957;
  useVoicePanelDockMorphStateTsx3.__initData = tmp12;
  const tmpResult31 = tmp(1655);
  const animatedReaction = tmpResult31.useAnimatedReaction(useVoicePanelDockMorphStateTsx2, useVoicePanelDockMorphStateTsx3);
  const tmpResult32 = tmp(1655);
  const sharedValue2 = tmpResult32.useSharedValue(false);
  const items6 = [closure_10, mode];
  [tmp16, tmp17] = items6;
  function useVoicePanelDockMorphStateTsx4() {
    return _undefined.get();
  }
  const items7 = [tmp17];
  useVoicePanelDockMorphStateTsx4.__closure = items7;
  useVoicePanelDockMorphStateTsx4.__workletHash = 6511286054171;
  useVoicePanelDockMorphStateTsx4.__initData = tmp16;
  const items8 = [closure_11, VoicePanelModes, sharedValue2];
  [tmp19, tmp20, tmp21] = items8;
  function useVoicePanelDockMorphStateTsx5(arg0, arg1) {
    let tmp2 = arg0 === _undefined.DISMISSED;
    const tmp = _undefined;
    if (tmp2) {
      tmp2 = null != arg1;
    }
    if (tmp2) {
      const result = _undefined2.set(arg1 === tmp.PIP);
    }
  }
  const items9 = [tmp20, tmp21];
  useVoicePanelDockMorphStateTsx5.__closure = items9;
  useVoicePanelDockMorphStateTsx5.__workletHash = 16449264979544;
  useVoicePanelDockMorphStateTsx5.__initData = tmp19;
  const tmpResult33 = tmp(1655);
  const animatedReaction1 = tmpResult33.useAnimatedReaction(useVoicePanelDockMorphStateTsx4, useVoicePanelDockMorphStateTsx5);
  const tmpResult34 = tmp(1655);
  const sharedValue3 = tmpResult34.useSharedValue(false);
  const items10 = [closure_12, connected, mode];
  [tmp24, tmp25, tmp26] = items10;
  function useVoicePanelDockMorphStateTsx6() {
    const obj = { isConnected: _undefined.get(), currentMode: _undefined2.get() };
    return obj;
  }
  const items11 = [tmp25, tmp26];
  useVoicePanelDockMorphStateTsx6.__closure = items11;
  useVoicePanelDockMorphStateTsx6.__workletHash = 9395341436969;
  useVoicePanelDockMorphStateTsx6.__initData = tmp24;
  const items12 = [closure_13, VoicePanelModes, sharedValue3];
  [tmp27, tmp28, tmp29] = items12;
  function useVoicePanelDockMorphStateTsx7(arg0) {
    let currentMode;
    let isConnected;
    ({ isConnected, currentMode } = arg0);
    if (currentMode !== _undefined.DISMISSED) {
      set = _undefined2.set;
      if (!isConnected) {
        isConnected = currentMode === tmp.PIP;
      }
      const result = set(isConnected);
    }
  }
  const items13 = [tmp28, tmp29];
  useVoicePanelDockMorphStateTsx7.__closure = items13;
  useVoicePanelDockMorphStateTsx7.__workletHash = 10331916200307;
  useVoicePanelDockMorphStateTsx7.__initData = tmp27;
  const tmpResult35 = tmp(1655);
  const animatedReaction2 = tmpResult35.useAnimatedReaction(useVoicePanelDockMorphStateTsx6, useVoicePanelDockMorphStateTsx7);
  const items14 = [closure_14, isDockEnabled, mode, VoicePanelModes, sharedValue3, connected];
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items14;
  function useVoicePanelDockMorphStateTsx8() {
    let tmp = c0;
    if (tmp) {
      let value;
      const obj = _undefined;
      if (_undefined.get() === _undefined2.DISMISSED) {
        value = _undefined3.get();
      } else {
        value = _undefined4.get() || obj.get() === tmp2.PIP;
      }
      tmp = value;
    }
    return tmp;
  }
  const items15 = [tmp32, tmp33, tmp34, tmp35, tmp36];
  useVoicePanelDockMorphStateTsx8.__closure = items15;
  useVoicePanelDockMorphStateTsx8.__workletHash = 484957089417;
  useVoicePanelDockMorphStateTsx8.__initData = tmp31;
  const tmpResult36 = tmp(1655);
  const isDockConnected = tmpResult36.useDerivedValue(useVoicePanelDockMorphStateTsx8);
  const items16 = [closure_15, mode, VoicePanelModes, sharedValue2, committedMode];
  [tmp38, tmp39, tmp40, tmp41, tmp42] = items16;
  function useVoicePanelDockMorphStateTsx9() {
    let num;
    const obj = _undefined;
    if (_undefined.get() === _undefined2.DISMISSED) {
      let num2 = 0;
      if (_undefined3.get()) {
        num2 = 1;
      }
      num = num2;
    } else {
      let value = _undefined4.get();
      if (value == null) {
        value = obj.get();
      }
      num = 0;
      if (value === tmp.PIP) {
        num = 1;
      }
    }
    return num;
  }
  const items17 = [tmp39, tmp40, tmp41, tmp42];
  useVoicePanelDockMorphStateTsx9.__closure = items17;
  useVoicePanelDockMorphStateTsx9.__workletHash = 11998655504610;
  useVoicePanelDockMorphStateTsx9.__initData = tmp38;
  const tmpResult37 = tmp(1655);
  const derivedValue2 = tmpResult37.useDerivedValue(useVoicePanelDockMorphStateTsx9);
  const items18 = [closure_16, derivedValue2];
  [tmp44, tmp45] = items18;
  function useVoicePanelDockMorphStateTsx10() {
    return 0 === _undefined.get();
  }
  const items19 = [tmp45];
  useVoicePanelDockMorphStateTsx10.__closure = items19;
  useVoicePanelDockMorphStateTsx10.__workletHash = 9313360300259;
  useVoicePanelDockMorphStateTsx10.__initData = tmp44;
  const tmpResult38 = tmp(1655);
  const isDockExpanding = tmpResult38.useDerivedValue(useVoicePanelDockMorphStateTsx10);
  const tmpResult39 = tmp(1655);
  dockEntryProgress = tmpResult39.useSharedValue(1);
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(false);
  const items20 = [dockEntryProgress];
  const items21 = [dockEntryProgress];
  const beginDockEntry = react.useCallback(() => {
    const result = dockEntryProgress.set(0);
    const tmp = dockEntryProgress;
    if (ref.current) {
      set = tmp.set;
      const obj = spring_spring;
      const result1 = set(obj.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    } else {
      ref2.current = true;
    }
  }, items20);
  const handleDockSheetLayout = react.useCallback(() => {
    ref.current = true;
    if (ref2.current) {
      tmp.current = false;
      set = dockEntryProgress.set;
      const obj = spring_spring;
      const result = set(obj.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    }
  }, items21);
  const tmpResult40 = tmp(1655);
  const dockPressed = tmpResult40.useSharedValue(false);
  const items22 = [closure_17, dockPressed, sharedValue, mode, VoicePanelModes];
  [tmp51, tmp52, tmp53, tmp54, tmp55] = items22;
  function useVoicePanelDockMorphStateTsx11() {
    let value = _undefined.get();
    if (!value) {
      const gestureActive = _undefined2.get().gestureActive && _undefined3.get() === _undefined4.PIP;
      value = gestureActive;
    }
    return value;
  }
  const items23 = [tmp52, tmp53, tmp54, tmp55];
  useVoicePanelDockMorphStateTsx11.__closure = items23;
  useVoicePanelDockMorphStateTsx11.__workletHash = 2842369107004;
  useVoicePanelDockMorphStateTsx11.__initData = tmp51;
  const tmpResult41 = tmp(1655);
  const derivedValue4 = tmpResult41.useDerivedValue(useVoicePanelDockMorphStateTsx11);
  const items24 = [closure_18, , , ];
  const useDerivedValue = tmp(1655).useDerivedValue;
  tmp(1655);
  items24[1] = tmp(5939).withSpring;
  items24[2] = derivedValue4;
  items24[3] = closure_5;
  [tmp58, tmp59, tmp60, tmp61] = items24;
  function useVoicePanelDockMorphStateTsx12() {
    let num = 0;
    const tmp = c0;
    if (_undefined.get()) {
      num = 1;
    }
    return tmp(num, c2);
  }
  const items25 = [tmp59, tmp60, tmp61];
  useVoicePanelDockMorphStateTsx12.__closure = items25;
  useVoicePanelDockMorphStateTsx12.__workletHash = 4055713938309;
  useVoicePanelDockMorphStateTsx12.__initData = tmp58;
  const dockPressProgress = useDerivedValue(useVoicePanelDockMorphStateTsx12);
  const items26 = [closure_19, , , , , ];
  const useDerivedValue2 = tmp(1655).useDerivedValue;
  tmp(1655);
  items26[1] = tmp(5939).withSpring;
  items26[2] = mode;
  items26[3] = VoicePanelModes;
  items26[4] = isDockConnected;
  items26[5] = tmp(12017).DOCK_SPACE_SPRING_CONFIG;
  [tmp64, tmp65, tmp66, tmp67, tmp68, tmp69] = items26;
  function useVoicePanelDockMorphStateTsx13() {
    let num = 0;
    const tmp = c0;
    if (_undefined.get() === _undefined2.DISMISSED) {
      num = 0;
      if (_undefined3.get()) {
        num = 1;
      }
    }
    return tmp(num, c4);
  }
  const items27 = [tmp65, tmp66, tmp67, tmp68, tmp69];
  useVoicePanelDockMorphStateTsx13.__closure = items27;
  useVoicePanelDockMorphStateTsx13.__workletHash = 11884228837973;
  useVoicePanelDockMorphStateTsx13.__initData = tmp64;
  const sheetExitProgress = useDerivedValue2(useVoicePanelDockMorphStateTsx13);
  const items28 = [closure_20, , , , ];
  const tmp71 = useIsDockCoveredByActivityDefault();
  const useDerivedValue3 = tmp(1655).useDerivedValue;
  tmp(1655);
  items28[1] = tmp(5939).withSpring;
  items28[2] = tmp71;
  items28[3] = derivedValue2;
  items28[4] = tmp(12017).DOCK_SPACE_SPRING_CONFIG;
  [tmp73, tmp74, tmp75, tmp76, tmp77] = items28;
  function useVoicePanelDockMorphStateTsx14() {
    let num = 0;
    const tmp = c0;
    if (c1) {
      num = 0;
      if (1 === _undefined.get()) {
        num = 1;
      }
    }
    return tmp(num, c3);
  }
  const items29 = [tmp74, tmp75, tmp76, tmp77];
  useVoicePanelDockMorphStateTsx14.__closure = items29;
  useVoicePanelDockMorphStateTsx14.__workletHash = 15444941422787;
  useVoicePanelDockMorphStateTsx14.__initData = tmp73;
  const dockActivityHideProgress = useDerivedValue3(useVoicePanelDockMorphStateTsx14);
  const tmpResult45 = tmp(1655);
  const sharedValue6 = tmpResult45.useSharedValue(mountsMinimized);
  const items30 = [closure_21, isDockConnected, sharedValue, mode, VoicePanelModes, wrapperDimensions, dockHeight, , , , , ];
  const useDerivedValue4 = tmp(1655).useDerivedValue;
  tmp(1655);
  items30[7] = tmp(1655).clamp;
  items30[8] = derivedValue2;
  items30[9] = sharedValue6;
  items30[10] = tmp(5939).withSpring;
  items30[11] = tmp(12017).SHEET_MORPH_PHYSICS;
  let c10;
  [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92] = items30;
  function useVoicePanelDockMorphStateTsx15() {
    if (_undefined.get()) {
      const value = _undefined2.get();
      if (value.gestureActive) {
        if (_undefined3.get() !== _undefined4.DISMISSED) {
          const diff = _undefined5.get().drawerHeight - _undefined6.get();
          let num3 = 0;
          if (diff > 0) {
            num3 = _undefined7(value.y / diff, 0, 1);
          }
          return num3;
        }
      }
      const value2 = _undefined8.get();
      let tmp8 = value2;
      if (!_undefined9.get()) {
        tmp8 = _undefined10(value2, c10);
      }
      return tmp8;
    } else {
      return 0;
    }
  }
  const items31 = [tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92];
  useVoicePanelDockMorphStateTsx15.__closure = items31;
  useVoicePanelDockMorphStateTsx15.__workletHash = 16670830062611;
  useVoicePanelDockMorphStateTsx15.__initData = tmp81;
  const dockMinimizeProgress = useDerivedValue4(useVoicePanelDockMorphStateTsx15);
  const items32 = [closure_22, sharedValue6, dockMinimizeProgress, derivedValue2];
  [tmp94, tmp95, tmp96, tmp97] = items32;
  function useVoicePanelDockMorphStateTsx16() {
    let value = _undefined.get();
    if (value) {
      const value2 = _undefined2.get();
      value = value2 === _undefined3.get();
    }
    return value;
  }
  const items33 = [tmp95, tmp96, tmp97];
  useVoicePanelDockMorphStateTsx16.__closure = items33;
  useVoicePanelDockMorphStateTsx16.__workletHash = 14318216426357;
  useVoicePanelDockMorphStateTsx16.__initData = tmp94;
  const items34 = [closure_23, sharedValue6];
  [tmp98, tmp99] = items34;
  function useVoicePanelDockMorphStateTsx17(arg0) {
    const tmp = arg0;
    if (tmp) {
      const result = _undefined.set(false);
    }
  }
  const items35 = [tmp99];
  useVoicePanelDockMorphStateTsx17.__closure = items35;
  useVoicePanelDockMorphStateTsx17.__workletHash = 14577082908322;
  useVoicePanelDockMorphStateTsx17.__initData = tmp98;
  const tmpResult47 = tmp(1655);
  const animatedReaction3 = tmpResult47.useAnimatedReaction(useVoicePanelDockMorphStateTsx16, useVoicePanelDockMorphStateTsx17);
  const tmpResult48 = tmp(1655);
  const dockJoinMorphOrigin = tmpResult48.useSharedValue(null);
  const items36 = [closure_24, dockJoinMorphOrigin, connected, dockMinimizeProgress, , , , ];
  const useAnimatedReaction = tmp(1655).useAnimatedReaction;
  tmp(1655);
  items36[4] = tmp(12017).SHEET_MORPH_PHYSICS;
  items36[5] = sharedValue;
  items36[6] = mode;
  items36[7] = VoicePanelModes;
  [tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110] = items36;
  function useVoicePanelDockMorphStateTsx18() {
    let value = null != _undefined.get() && _undefined2.get();
    if (value) {
      const gestureActive = _undefined3.get() >= 1 - _undefined4.restDisplacementThreshold || _undefined5.get().gestureActive || _undefined6.get() === _undefined7.DISMISSED;
      value = gestureActive;
    }
    return value;
  }
  const items37 = [tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110];
  useVoicePanelDockMorphStateTsx18.__closure = items37;
  useVoicePanelDockMorphStateTsx18.__workletHash = 7049638413356;
  useVoicePanelDockMorphStateTsx18.__initData = tmp103;
  const items38 = [closure_25, dockJoinMorphOrigin];
  [tmp111, tmp112] = items38;
  function useVoicePanelDockMorphStateTsx19(arg0) {
    const tmp = arg0;
    if (tmp) {
      const result = _undefined.set(null);
    }
  }
  const items39 = [tmp112];
  useVoicePanelDockMorphStateTsx19.__closure = items39;
  useVoicePanelDockMorphStateTsx19.__workletHash = 11308110243690;
  useVoicePanelDockMorphStateTsx19.__initData = tmp111;
  const animatedReaction4 = useAnimatedReaction(useVoicePanelDockMorphStateTsx18, useVoicePanelDockMorphStateTsx19);
  const tmpResult50 = tmp(1655);
  const dockContentSwap = tmpResult50.useSharedValue(0);
  const items40 = [closure_26, sharedValue, mode, VoicePanelModes, isDockExpanding, dockMinimizeProgress, ];
  const useAnimatedReaction2 = tmp(1655).useAnimatedReaction;
  tmp(1655);
  items40[6] = tmp(12017).SHEET_MORPH_PHYSICS;
  [tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122] = items40;
  function useVoicePanelDockMorphStateTsx20() {
    const gestureActive = _undefined.get().gestureActive;
    let tmp2 = _undefined2.get() === _undefined3.DISMISSED;
    if (!tmp2) {
      tmp2 = gestureActive && obj.get() === tmp.PANEL;
      gestureActive && _undefined2.get() === tmp.PANEL;
    }
    if (!tmp2) {
      let tmp4 = !gestureActive;
      if (tmp4) {
        const value = _undefined4.get();
        let tmp7 = !value;
        if (value) {
          tmp7 = _undefined5.get() <= _undefined6.restDisplacementThreshold;
        }
        tmp4 = tmp7;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
  const items41 = [tmp117, tmp118, tmp119, tmp120, tmp121, tmp122];
  useVoicePanelDockMorphStateTsx20.__closure = items41;
  useVoicePanelDockMorphStateTsx20.__workletHash = 9267373332542;
  useVoicePanelDockMorphStateTsx20.__initData = tmp116;
  const items42 = [closure_27, dockContentSwap, tmp(5548).withTiming, tmp(12017).DOCK_CONTENT_SWAP_TIMING];
  [tmp123, tmp124, tmp125, tmp126] = items42;
  function useVoicePanelDockMorphStateTsx21(arg0) {
    const tmp = arg0 && 0 !== _undefined.get();
    if (tmp) {
      const result = _undefined.set(_undefined2(0, c2));
    }
  }
  const items43 = [tmp124, tmp125, tmp126];
  useVoicePanelDockMorphStateTsx21.__closure = items43;
  useVoicePanelDockMorphStateTsx21.__workletHash = 9767573494832;
  useVoicePanelDockMorphStateTsx21.__initData = tmp123;
  const animatedReaction21 = useAnimatedReaction2(useVoicePanelDockMorphStateTsx20, useVoicePanelDockMorphStateTsx21);
  const tmpResult52 = tmp(1655);
  const dockTouched = tmpResult52.useSharedValue(false);
  const tmpResult53 = tmp(1655);
  const isDockSlotEmpty = tmpResult53.useSharedValue(false);
  const items44 = [closure_28, isDockConnected, dockTouched, sharedValue, isDockSlotEmpty, derivedValue2, , , , , ];
  const useDerivedValue5 = tmp(1655).useDerivedValue;
  tmp(1655);
  items44[6] = tmp(12017).SHEET_MORPH_PHYSICS;
  items44[7] = dockMinimizeProgress;
  items44[8] = dockPressProgress;
  items44[9] = dockContentSwap;
  items44[10] = dockJoinMorphOrigin;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141] = items44;
  function useVoicePanelDockMorphStateTsx22() {
    if (_undefined.get()) {
      if (!_undefined2.get()) {
        if (!_undefined3.get().gestureActive) {
          if (_undefined4.get()) {
            return false;
          } else if (1 !== _undefined5.get()) {
            return false;
          } else {
            const restDisplacementThreshold = _undefined6.restDisplacementThreshold;
            const tmp7 = _undefined7.get() >= 1 - restDisplacementThreshold && _undefined8.get() <= restDisplacementThreshold && 0 === _undefined9.get() && null == _undefined10.get();
            return tmp7;
          }
        }
      }
    }
    return false;
  }
  const items45 = [tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141];
  useVoicePanelDockMorphStateTsx22.__closure = items45;
  useVoicePanelDockMorphStateTsx22.__workletHash = 14048220308711;
  useVoicePanelDockMorphStateTsx22.__initData = tmp131;
  const isDockInLayout = useDerivedValue5(useVoicePanelDockMorphStateTsx22);
  const tmpResult55 = tmp(1655);
  const dockRestWidth = tmpResult55.useSharedValue(0);
  const useSharedValue = tmp(1655).useSharedValue;
  tmp(1655);
  const tmpResult57 = tmp(1496);
  const dockSheetWidth = useSharedValue(tmpResult57.getWindowDimensions().width);
  const items46 = [closure_29, isDockEnabled, wrapperDimensions, dockRestWidth, derivedValue2, dockContentSwap, dockJoinMorphOrigin];
  let c3;
  let c4;
  let c5;
  [tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153] = items46;
  function useVoicePanelDockMorphStateTsx23() {
    const tmp = c0;
    if (tmp) {
      const drawerWidth = _undefined.get().drawerWidth;
      const value = _undefined2.get();
      const tmp6 = value <= 0 || value >= drawerWidth || 0 === _undefined3.get() || _undefined4.get() > 0 || null != _undefined5.get();
      let tmp11 = value;
      if (tmp6) {
        tmp11 = drawerWidth;
      }
      return { width: tmp11, isWide: tmp6, isMeasured: value > 0 };
    } else {
      return null;
    }
  }
  const items47 = [tmp148, tmp149, tmp150, tmp151, tmp152, tmp153];
  useVoicePanelDockMorphStateTsx23.__closure = items47;
  useVoicePanelDockMorphStateTsx23.__workletHash = 10495728454393;
  useVoicePanelDockMorphStateTsx23.__initData = tmp147;
  const items48 = [closure_30, dockSheetWidth, , ];
  const useAnimatedReaction3 = tmp(1655).useAnimatedReaction;
  tmp(1655);
  items48[2] = tmp(5939).withSpring;
  items48[3] = tmp(12017).SHEET_MORPH_PHYSICS;
  let c0;
  let c1;
  let c2;
  [tmp154, tmp155, tmp156, tmp157] = items48;
  function useVoicePanelDockMorphStateTsx24(width, width2) {
    if (null != width) {
      set = _undefined.set;
      const tmp2 = null != width2 && width2.isMeasured && width.isWide !== width2.isWide;
      if (tmp2) {
        width = _undefined2(width.width, c2);
      } else {
        width = width.width;
      }
      const result = set(width);
    }
  }
  const items49 = [tmp155, tmp156, tmp157];
  useVoicePanelDockMorphStateTsx24.__closure = items49;
  useVoicePanelDockMorphStateTsx24.__workletHash = 5393014188634;
  useVoicePanelDockMorphStateTsx24.__initData = tmp154;
  const animatedReaction31 = useAnimatedReaction3(useVoicePanelDockMorphStateTsx23, useVoicePanelDockMorphStateTsx24);
  return { beginDockEntry, committedMode, dockContentSwap, dockEntryProgress, dockHeight, dockJoinMorphOrigin, dockMinimizeProgress, dockPressProgress, dockPressed, dockRestWidth, dockSheetWidth, dockTouched, isDockInLayout, isDockSlotEmpty, handleDockSheetLayout, dockActivityHideProgress, isDockConnected, isDockExpanding, sheetExitProgress };
};
