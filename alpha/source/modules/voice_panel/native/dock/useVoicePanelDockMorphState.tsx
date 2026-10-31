// Module ID: 19185
// Function ID: 19186
// Name: useVoicePanelDockMorphState
// Dependencies: [19, 11223, 11241, 5095, 5637, 11249, 5254, 2]
// Exports: default

// Module 19185 (useVoicePanelDockMorphState)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import react from "react" /* 19 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11241 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let closure_4;
let hasOwnProperty;
let tmp;
const VoicePanelSheetMorph = tmp(11249);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ DOCK_PRESS_PHYSICS: closure_4, getVoicePanelDockHeight: hasOwnProperty } = VoicePanelDockConstants);
let closure_6 = { code: "function useVoicePanelDockMorphStateTsx1(){const{isDockEnabled,getVoicePanelDockHeight,safeArea}=this.__closure;return isDockEnabled?getVoicePanelDockHeight(safeArea.get().bottom):0;}" };
let closure_7 = { code: "function useVoicePanelDockMorphStateTsx2(){const{mode}=this.__closure;return mode.get();}" };
let closure_8 = { code: "function useVoicePanelDockMorphStateTsx3(current,previous){const{committedMode}=this.__closure;if(current!==previous&&committedMode.get()!=null){committedMode.set(null);}}" };
let closure_9 = { code: "function useVoicePanelDockMorphStateTsx4(){const{mode}=this.__closure;return mode.get();}" };
let closure_10 = { code: "function useVoicePanelDockMorphStateTsx5(current,previous){const{VoicePanelModes,dismissedFromDock}=this.__closure;if(current===VoicePanelModes.DISMISSED&&previous!=null){dismissedFromDock.set(previous===VoicePanelModes.PIP);}}" };
let closure_11 = { code: "function useVoicePanelDockMorphStateTsx6(){const{connected,mode}=this.__closure;return{isConnected:connected.get(),currentMode:mode.get()};}" };
let closure_12 = { code: "function useVoicePanelDockMorphStateTsx7({isConnected:isConnected,currentMode:currentMode}){const{VoicePanelModes,wasDockConnected}=this.__closure;if(currentMode!==VoicePanelModes.DISMISSED){wasDockConnected.set(isConnected||currentMode===VoicePanelModes.PIP);}}" };
let closure_13 = { code: "function useVoicePanelDockMorphStateTsx8(){const{isDockEnabled,mode,VoicePanelModes,wasDockConnected,connected}=this.__closure;if(!isDockEnabled)return false;return mode.get()===VoicePanelModes.DISMISSED?wasDockConnected.get():connected.get()||mode.get()===VoicePanelModes.PIP;}" };
let closure_14 = { code: "function useVoicePanelDockMorphStateTsx9(){const{mode,VoicePanelModes,dismissedFromDock,committedMode}=this.__closure;var _committedMode$get;if(mode.get()===VoicePanelModes.DISMISSED){return dismissedFromDock.get()?1:0;}return((_committedMode$get=committedMode.get())!==null&&_committedMode$get!==void 0?_committedMode$get:mode.get())===VoicePanelModes.PIP?1:0;}" };
let closure_15 = { code: "function useVoicePanelDockMorphStateTsx10(){const{dockShapeTarget}=this.__closure;return dockShapeTarget.get()===0;}" };
let closure_16 = { code: "function useVoicePanelDockMorphStateTsx11(){const{dockPressed,wrapperOffset,mode,VoicePanelModes}=this.__closure;return dockPressed.get()||wrapperOffset.get().gestureActive&&mode.get()===VoicePanelModes.PIP;}" };
let closure_17 = { code: "function useVoicePanelDockMorphStateTsx12(){const{withSpring,isDockHeld,DOCK_PRESS_PHYSICS}=this.__closure;return withSpring(isDockHeld.get()?1:0,DOCK_PRESS_PHYSICS);}" };
let closure_18 = { code: "function useVoicePanelDockMorphStateTsx13(){const{withSpring,mode,VoicePanelModes,isDockConnected,DOCK_SPACE_SPRING_CONFIG}=this.__closure;return withSpring(mode.get()===VoicePanelModes.DISMISSED&&isDockConnected.get()?1:0,DOCK_SPACE_SPRING_CONFIG);}" };
const __initData = { code: "function useVoicePanelDockMorphStateTsx14(){const{isDockConnected,wrapperOffset,mode,VoicePanelModes,wrapperDimensions,dockHeight,clamp,dockShapeTarget,morphSkipsEntryAnimation,withSpring,SHEET_MORPH_PHYSICS}=this.__closure;if(!isDockConnected.get())return 0;const offset=wrapperOffset.get();if(offset.gestureActive&&mode.get()!==VoicePanelModes.DISMISSED){const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();if(travel<=0)return 0;return clamp(offset.y/travel,0,1);}const target=dockShapeTarget.get();if(morphSkipsEntryAnimation.get()){return target;}return withSpring(target,SHEET_MORPH_PHYSICS);}" };
const __initData2 = { code: "function useVoicePanelDockMorphStateTsx15(){const{morphSkipsEntryAnimation,dockMinimizeProgress,dockShapeTarget}=this.__closure;return morphSkipsEntryAnimation.get()&&dockMinimizeProgress.get()===dockShapeTarget.get();}" };
const __initData3 = { code: "function useVoicePanelDockMorphStateTsx16(settled){const{morphSkipsEntryAnimation}=this.__closure;if(settled){morphSkipsEntryAnimation.set(false);}}" };
const __initData4 = { code: "function useVoicePanelDockMorphStateTsx17(){const{dockJoinMorphOrigin,connected,dockMinimizeProgress,SHEET_MORPH_PHYSICS,wrapperOffset,mode,VoicePanelModes}=this.__closure;return dockJoinMorphOrigin.get()!=null&&connected.get()&&(dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold||wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.DISMISSED);}" };
const __initData5 = { code: "function useVoicePanelDockMorphStateTsx18(done){const{dockJoinMorphOrigin}=this.__closure;if(done){dockJoinMorphOrigin.set(null);}}" };
const __initData6 = { code: "function useVoicePanelDockMorphStateTsx19(){const{wrapperOffset,mode,VoicePanelModes,isDockExpanding,dockMinimizeProgress,SHEET_MORPH_PHYSICS}=this.__closure;const{gestureActive:gestureActive}=wrapperOffset.get();return mode.get()===VoicePanelModes.DISMISSED||gestureActive&&mode.get()===VoicePanelModes.PANEL||!gestureActive&&(!isDockExpanding.get()||dockMinimizeProgress.get()<=SHEET_MORPH_PHYSICS.restDisplacementThreshold);}" };
const __initData7 = { code: "function useVoicePanelDockMorphStateTsx20(released){const{dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING}=this.__closure;if(released&&dockContentSwap.get()!==0){dockContentSwap.set(withTiming(0,DOCK_CONTENT_SWAP_TIMING));}}" };
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockMorphState.tsx");

export default function useVoicePanelDockMorphState(isDockEnabled) {
  let mountsMinimized;
  let wrapperOffset;
  isDockEnabled = isDockEnabled.isDockEnabled;
  const mode = isDockEnabled.mode;
  const connected = isDockEnabled.connected;
  const safeArea = isDockEnabled.safeArea;
  const wrapperDimensions = isDockEnabled.wrapperDimensions;
  let dockHeight;
  let committedMode;
  let sharedValue2;
  let sharedValue3;
  let isDockConnected;
  let derivedValue2;
  let isDockExpanding;
  let dockPressed;
  let derivedValue4;
  let sharedValue6;
  let dockMinimizeProgress;
  let dockJoinMorphOrigin;
  let dockContentSwap;
  let tmp = isDockEnabled;
  let tmp2 = mode;
  ({ mountsMinimized, wrapperOffset } = isDockEnabled);
  let obj = isDockEnabled(mode[3]);
  let sharedValue = obj.useSharedValue({ gestureActive: false, x: 0, y: 0 });
  if (isDockEnabled) {
    sharedValue = wrapperOffset;
  }
  const tmpResult = tmp(tmp2[3]);
  class G {
    constructor() {
      let num = 0;
      if (isDockEnabled) {
        num = hasOwnProperty(safeArea.get().bottom);
      }
      return num;
    }
  }
  let obj2 = { isDockEnabled, getVoicePanelDockHeight: sharedValue, safeArea };
  G.__closure = obj2;
  G.__workletHash = 11599676161970;
  G.__initData = dockHeight;
  dockHeight = tmpResult.useDerivedValue(G);
  const tmpResult22 = tmp(tmp2[3]);
  committedMode = tmpResult22.useSharedValue(null);
  const tmpResult23 = tmp(tmp2[3]);
  class K {
    constructor() {
      return mode.get();
    }
  }
  K.__closure = { mode };
  K.__workletHash = 4611544497028;
  K.__initData = committedMode;
  class Y {
    constructor(arg0, arg1) {
      const tmp = arg0 !== arg1 && null != committedMode.get();
      if (tmp) {
        const result = committedMode.set(null);
      }
    }
  }
  Y.__closure = { committedMode };
  Y.__workletHash = 17280219380028;
  Y.__initData = sharedValue2;
  const animatedReaction = tmpResult23.useAnimatedReaction(K, Y);
  const tmpResult24 = tmp(tmp2[3]);
  sharedValue2 = tmpResult24.useSharedValue(false);
  const fn = function $() {
    return mode.get();
  };
  fn.__closure = { mode };
  fn.__workletHash = 14684098011330;
  fn.__initData = sharedValue3;
  const tmpResult25 = tmp(tmp2[3]);
  class W {
    constructor(arg0, arg1) {
      let tmp2 = arg0 === VoicePanelModes.DISMISSED;
      const tmp = VoicePanelModes;
      if (tmp2) {
        tmp2 = null != arg1;
      }
      if (tmp2) {
        const result = sharedValue2.set(arg1 === tmp.PIP);
      }
    }
  }
  const obj3 = { VoicePanelModes: safeArea, dismissedFromDock: sharedValue2 };
  W.__closure = obj3;
  W.__workletHash = 6804996750753;
  W.__initData = isDockConnected;
  const animatedReaction1 = tmpResult25.useAnimatedReaction(fn, W);
  const tmpResult26 = tmp(tmp2[3]);
  sharedValue3 = tmpResult26.useSharedValue(false);
  const tmpResult27 = tmp(tmp2[3]);
  class B {
    constructor() {
      const obj = { isConnected: connected.get(), currentMode: mode.get() };
      return obj;
    }
  }
  B.__closure = { connected, mode };
  B.__workletHash = 13158810064144;
  B.__initData = derivedValue2;
  const fn2 = function q(arg0) {
    let currentMode;
    let isConnected;
    ({ isConnected, currentMode } = arg0);
    if (currentMode !== VoicePanelModes.DISMISSED) {
      set = sharedValue3.set;
      if (!isConnected) {
        isConnected = currentMode === tmp.PIP;
      }
      const result = set(isConnected);
    }
  };
  fn2.__closure = { VoicePanelModes: safeArea, wasDockConnected: sharedValue3 };
  fn2.__workletHash = 17408928003338;
  fn2.__initData = isDockExpanding;
  const animatedReaction2 = tmpResult27.useAnimatedReaction(B, fn2);
  const tmpResult28 = tmp(tmp2[3]);
  class U {
    constructor() {
      let tmp = isDockEnabled;
      if (tmp) {
        let value;
        const obj = mode;
        if (mode.get() === VoicePanelModes.DISMISSED) {
          value = sharedValue3.get();
        } else {
          value = connected.get() || obj.get() === tmp2.PIP;
        }
        tmp = value;
      }
      return tmp;
    }
  }
  U.__closure = { isDockEnabled, mode, VoicePanelModes: safeArea, wasDockConnected: sharedValue3, connected };
  U.__workletHash = 10160859525680;
  U.__initData = dockPressed;
  isDockConnected = tmpResult28.useDerivedValue(U);
  const tmpResult29 = tmp(tmp2[3]);
  class X {
    constructor() {
      let num;
      const obj = mode;
      if (mode.get() === VoicePanelModes.DISMISSED) {
        let num2 = 0;
        if (sharedValue2.get()) {
          num2 = 1;
        }
        num = num2;
      } else {
        let value = committedMode.get();
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
  }
  X.__closure = { mode, VoicePanelModes: safeArea, dismissedFromDock: sharedValue2, committedMode };
  X.__workletHash = 4580477793979;
  X.__initData = derivedValue4;
  derivedValue2 = tmpResult29.useDerivedValue(X);
  const tmpResult30 = tmp(tmp2[3]);
  class Z {
    constructor() {
      return 0 === derivedValue2.get();
    }
  }
  Z.__closure = { dockShapeTarget: derivedValue2 };
  Z.__workletHash = 16095307145434;
  Z.__initData = sharedValue6;
  isDockExpanding = tmpResult30.useDerivedValue(Z);
  const tmpResult31 = tmp(tmp2[3]);
  const dockEntryProgress = tmpResult31.useSharedValue(1);
  dependencyMap = connected.useRef(false);
  let closure_2 = connected.useRef(false);
  const items = [dockEntryProgress];
  const items1 = [dockEntryProgress];
  const beginDockEntry = connected.useCallback(() => {
    const result = dockEntryProgress.set(0);
    const tmp = dockEntryProgress;
    if (ref.current) {
      set = tmp.set;
      const obj = isDockEnabled(mode[4]);
      const result1 = set(obj.withSpring(1, isDockEnabled(mode[5]).DOCK_SPACE_SPRING_CONFIG));
    } else {
      ref2.current = true;
    }
  }, items);
  const handleDockSheetLayout = connected.useCallback(() => {
    ref.current = true;
    if (ref2.current) {
      tmp.current = false;
      set = dockEntryProgress.set;
      const obj = isDockEnabled(mode[4]);
      const result = set(obj.withSpring(1, isDockEnabled(mode[5]).DOCK_SPACE_SPRING_CONFIG));
    }
  }, items1);
  const tmpResult32 = tmp(tmp2[3]);
  dockPressed = tmpResult32.useSharedValue(false);
  function ee() {
    let value = dockPressed.get();
    if (!value) {
      const gestureActive = sharedValue.get().gestureActive && mode.get() === VoicePanelModes.PIP;
      value = gestureActive;
    }
    return value;
  }
  ee.__closure = { dockPressed, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea };
  ee.__workletHash = 4131610632229;
  ee.__initData = dockMinimizeProgress;
  const tmpResult33 = tmp(tmp2[3]);
  derivedValue4 = tmpResult33.useDerivedValue(ee);
  function te() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (derivedValue4.get()) {
      num = 1;
    }
    return withSpring(num, React3);
  }
  const tmpResult34 = tmp(tmp2[3]);
  te.__closure = { withSpring: tmp(tmp2[4]).withSpring, isDockHeld: derivedValue4, DOCK_PRESS_PHYSICS: wrapperDimensions };
  te.__workletHash = 11374894455644;
  te.__initData = dockJoinMorphOrigin;
  ({ withSpring: tmp(tmp2[4]).withSpring, isDockHeld: derivedValue4, DOCK_PRESS_PHYSICS: wrapperDimensions });
  const dockPressProgress = tmpResult34.useDerivedValue(te);
  function oe() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (mode.get() === VoicePanelModes.DISMISSED) {
      num = 0;
      if (isDockConnected.get()) {
        num = 1;
      }
    }
    return withSpring(num, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG);
  }
  const tmpResult35 = tmp(tmp2[3]);
  oe.__closure = { withSpring: tmp(tmp2[4]).withSpring, mode, VoicePanelModes: safeArea, isDockConnected, DOCK_SPACE_SPRING_CONFIG: tmp(tmp2[5]).DOCK_SPACE_SPRING_CONFIG };
  oe.__workletHash = 862139017068;
  oe.__initData = dockContentSwap;
  ({ withSpring: tmp(tmp2[4]).withSpring, mode, VoicePanelModes: safeArea, isDockConnected, DOCK_SPACE_SPRING_CONFIG: tmp(tmp2[5]).DOCK_SPACE_SPRING_CONFIG });
  const sheetExitProgress = tmpResult35.useDerivedValue(oe);
  const tmpResult36 = tmp(tmp2[3]);
  sharedValue6 = tmpResult36.useSharedValue(mountsMinimized);
  function ne() {
    if (isDockConnected.get()) {
      const value = sharedValue.get();
      if (value.gestureActive) {
        if (mode.get() !== VoicePanelModes.DISMISSED) {
          const diff = wrapperDimensions.get().drawerHeight - dockHeight.get();
          let num3 = 0;
          if (diff > 0) {
            const obj2 = ReanimatedRexport;
            num3 = obj2.clamp(value.y / diff, 0, 1);
          }
          return num3;
        }
      }
      const value2 = derivedValue2.get();
      let withSpringResult = value2;
      if (!sharedValue6.get()) {
        const obj = spring;
        withSpringResult = obj.withSpring(value2, VoicePanelSheetMorph.SHEET_MORPH_PHYSICS);
      }
      return withSpringResult;
    } else {
      return 0;
    }
  }
  const tmpResult37 = tmp(tmp2[3]);
  ne.__closure = { isDockConnected, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, wrapperDimensions, dockHeight, clamp: tmp(tmp2[3]).clamp, dockShapeTarget: derivedValue2, morphSkipsEntryAnimation: sharedValue6, withSpring: tmp(tmp2[4]).withSpring, SHEET_MORPH_PHYSICS: tmp(tmp2[5]).SHEET_MORPH_PHYSICS };
  ne.__workletHash = 9895057299659;
  ne.__initData = __initData;
  ({ isDockConnected, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, wrapperDimensions, dockHeight, clamp: tmp(tmp2[3]).clamp, dockShapeTarget: derivedValue2, morphSkipsEntryAnimation: sharedValue6, withSpring: tmp(tmp2[4]).withSpring, SHEET_MORPH_PHYSICS: tmp(tmp2[5]).SHEET_MORPH_PHYSICS });
  dockMinimizeProgress = tmpResult37.useDerivedValue(ne);
  function ce() {
    let value = sharedValue6.get();
    if (value) {
      const value2 = dockMinimizeProgress.get();
      value = value2 === derivedValue2.get();
    }
    return value;
  }
  ce.__closure = { morphSkipsEntryAnimation: sharedValue6, dockMinimizeProgress, dockShapeTarget: derivedValue2 };
  ce.__workletHash = 14873809000559;
  ce.__initData = __initData2;
  function ie(arg0) {
    const tmp = arg0;
    if (tmp) {
      const result = sharedValue6.set(false);
    }
  }
  ie.__closure = { morphSkipsEntryAnimation: sharedValue6 };
  ie.__workletHash = 8612909128122;
  ie.__initData = __initData3;
  const tmpResult38 = tmp(tmp2[3]);
  const animatedReaction3 = tmpResult38.useAnimatedReaction(ce, ie);
  const tmpResult39 = tmp(tmp2[3]);
  dockJoinMorphOrigin = tmpResult39.useSharedValue(null);
  const tmpResult40 = tmp(tmp2[3]);
  class Me {
    constructor() {
      let value = null != dockJoinMorphOrigin.get() && connected.get();
      if (value) {
        const value2 = dockMinimizeProgress.get();
        const gestureActive = value2 >= 1 - VoicePanelSheetMorph.SHEET_MORPH_PHYSICS.restDisplacementThreshold || sharedValue.get().gestureActive || mode.get() === VoicePanelModes.DISMISSED;
        value = gestureActive;
      }
      return value;
    }
  }
  Me.__closure = { dockJoinMorphOrigin, connected, dockMinimizeProgress, SHEET_MORPH_PHYSICS: tmp(tmp2[5]).SHEET_MORPH_PHYSICS, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea };
  Me.__workletHash = 16793844025178;
  Me.__initData = __initData4;
  function pe(arg0) {
    const tmp = arg0;
    if (tmp) {
      const result = dockJoinMorphOrigin.set(null);
    }
  }
  pe.__closure = { dockJoinMorphOrigin };
  pe.__workletHash = 1489918984530;
  pe.__initData = __initData5;
  ({ dockJoinMorphOrigin, connected, dockMinimizeProgress, SHEET_MORPH_PHYSICS: tmp(tmp2[5]).SHEET_MORPH_PHYSICS, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea });
  const animatedReaction4 = tmpResult40.useAnimatedReaction(Me, pe);
  const tmpResult41 = tmp(tmp2[3]);
  dockContentSwap = tmpResult41.useSharedValue(0);
  const tmpResult42 = tmp(tmp2[3]);
  class Ee {
    constructor() {
      const gestureActive = sharedValue.get().gestureActive;
      let tmp2 = mode.get() === VoicePanelModes.DISMISSED;
      if (!tmp2) {
        tmp2 = gestureActive && obj.get() === tmp.PANEL;
        gestureActive && mode.get() === tmp.PANEL;
      }
      if (!tmp2) {
        let tmp4 = !gestureActive;
        if (tmp4) {
          const value = isDockExpanding.get();
          let tmp7 = !value;
          if (value) {
            const value2 = dockMinimizeProgress.get();
            tmp7 = value2 <= VoicePanelSheetMorph.SHEET_MORPH_PHYSICS.restDisplacementThreshold;
          }
          tmp4 = tmp7;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  }
  const useAnimatedReaction = tmpResult42.useAnimatedReaction;
  Ee.__closure = { wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, isDockExpanding, dockMinimizeProgress, SHEET_MORPH_PHYSICS: tmp(tmp2[5]).SHEET_MORPH_PHYSICS };
  Ee.__workletHash = 17390712868429;
  Ee.__initData = __initData6;
  function fe(arg0) {
    const tmp = arg0 && 0 !== dockContentSwap.get();
    if (tmp) {
      set = dockContentSwap.set;
      const obj = timing;
      const result = set(obj.withTiming(0, VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING));
    }
  }
  ({ wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, isDockExpanding, dockMinimizeProgress, SHEET_MORPH_PHYSICS: tmp(tmp2[5]).SHEET_MORPH_PHYSICS });
  fe.__closure = { dockContentSwap, withTiming: tmp(tmp2[6]).withTiming, DOCK_CONTENT_SWAP_TIMING: tmp(tmp2[5]).DOCK_CONTENT_SWAP_TIMING };
  fe.__workletHash = 1315911263720;
  fe.__initData = __initData7;
  ({ dockContentSwap, withTiming: tmp(tmp2[6]).withTiming, DOCK_CONTENT_SWAP_TIMING: tmp(tmp2[5]).DOCK_CONTENT_SWAP_TIMING });
  const animatedReaction5 = useAnimatedReaction(Ee, fe);
  return { beginDockEntry, committedMode, dockContentSwap, dockEntryProgress, dockHeight, dockJoinMorphOrigin, dockMinimizeProgress, dockPressProgress, dockPressed, handleDockSheetLayout, isDockConnected, isDockExpanding, sheetExitProgress };
};
