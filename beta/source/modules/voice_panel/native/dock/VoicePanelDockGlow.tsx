// Module ID: 19611
// Function ID: 19612
// Name: VoicePanelDockGlow
// Dependencies: [19, 17, 11381, 21, 11362, 1652, 5370, 5724, 575, 19602, 8101, 8915, 1493, 14236, 14235, 14237, 5137, 11389, 5715, 2]
// Exports: VoicePanelDockBottomLine, VoicePanelDockGlow

// Module 19611 (VoicePanelDockGlow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import ColorUtils from "ColorUtils" /* 5137 */;
import timing_timing from "timing/timing" /* 5370 */;
import inlineStyles from "inlineStyles" /* 8101 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8915 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11381 */;
import VoicePanelDockRimLight from "VoicePanelDockRimLight" /* 14235 */;
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps" /* 14236 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 14237 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let _require, num, num3, set, tmp2Result, tmp4, tmp5;

let metroImportDefault;
let metroRequire;
let tmp;
const _modDef1652 = tmp(1652);
const LinearGradientDefault = tmp(5715);
const StyleSheet = react_native.StyleSheet;
const getDockInset = VoicePanelDockConstants.getDockInset;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let items = [[0, 1], [0.18, 0.89], [0.36, 0.63], [0.52, 0.4], [0.66, 0.23], [0.78, 0.12], [0.88, 0.05], [0.95, 0.02], [1, 0]];
let closure_9 = { duration: 200 };
let closure_10 = { duration: 90 };
const styles = StyleSheet.create({ layer: { position: "absolute", top: 0, left: 0, right: 0 }, bottomLine: { position: "absolute", bottom: 0, height: 2 } });
let closure_12 = { code: "(function VoicePanelDockGlowTsx1(){let[dockPressed]=this.__closure;return dockPressed.get();})" };
let closure_13 = { code: "(function VoicePanelDockGlowTsx2(isPressed,wasPressed){let[pressGate,withTiming,GLOW_SETTLE_IN_TIMING]=this.__closure;if(isPressed===wasPressed){return;}pressGate.set(isPressed?0:withTiming(1,GLOW_SETTLE_IN_TIMING));})" };
let closure_14 = { code: "(function VoicePanelDockGlowTsx3(){let[isDockConnected,wrapperOffset,dockMinimizeProgress,dockPressProgress]=this.__closure;const settledProgress=0.15;const pressCleared=0.01;return isDockConnected.get()&&!wrapperOffset.get().gestureActive&&1-dockMinimizeProgress.get()<=settledProgress&&dockPressProgress.get()<=pressCleared;})" };
let closure_15 = { code: "(function VoicePanelDockGlowTsx4(isSettled,wasSettled){let[settledGate,withTiming,GLOW_SETTLE_IN_TIMING,GLOW_SETTLE_OUT_TIMING]=this.__closure;if(isSettled===wasSettled){return;}settledGate.set(isSettled?withTiming(1,GLOW_SETTLE_IN_TIMING):withTiming(0,GLOW_SETTLE_OUT_TIMING));})" };
let closure_16 = react.memo(function DockGlowGradient(arg0) {
  let RadialGradient;
  let dockHeight;
  let obj4;
  let stopColor;
  let width;
  ({ width, dockHeight } = arg0);
  _require = undefined;
  let obj = require("useToken");
  _require = obj.useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  const obj2 = require("useMeasureDockGlowOffset");
  const point = obj2.getDockGlowHotSpot({ width, height: dockHeight });
  size = { width, height: dockHeight, style: StyleSheet.absoluteFill, children: items };
  const tmp = inlineStylesDefault;
  const obj3 = { children: closure_6(RadialGradient, obj4) };
  const Defs = require("inlineStyles").Defs;
  obj4 = {
    id: "dockGlow",
    cx: `${point.x / width * 100}%`,
    cy: "" + Math.round(point.y / dockHeight * 100) + "%",
    rx: "80%",
    ry: "110.00000000000001%",
    children: items.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const obj = { offset: tmp, stopColor, stopOpacity: Math.min(tmp2 * (1 + 0.3500000000000001 * tmp2) * 0.1337 * 1.8, 1) };
      const Stop = inlineStyles.Stop;
      return metroRequire(Stop, obj, tmp);
    })
  };
  RadialGradient = require("inlineStyles").RadialGradient;
  items = [closure_6(Defs, obj3), closure_6(require("inlineStyles").Rect, { x: 0, y: 0, width, height: dockHeight, fill: "url(#dockGlow)" })];
  return closure_7(tmp, size);
});
let closure_17 = { code: "(function VoicePanelDockGlowTsx5(){let[settledGate,pressGate,micLive]=this.__closure;return{opacity:settledGate.get()*pressGate.get()*micLive.get()};})" };
let closure_18 = { code: "(function VoicePanelDockGlowTsx6(){let[settledGate,pressGate,micLive]=this.__closure;return settledGate.get()*pressGate.get()*micLive.get();})" };
let closure_19 = { code: "(function VoicePanelDockGlowTsx7(value){let[voicePanelDockRimOpacity]=this.__closure;voicePanelDockRimOpacity.set(value);})" };
let closure_20 = { code: "(function VoicePanelDockGlowTsx8(){let[getDockInset,dockPressProgress,isDockConnected,wrapperDimensions,getDockRowOpacity,dockMinimizeProgress,isDockExpanding,dockContentSwap,sheetExitProgress,micLive]=this.__closure;const inset=getDockInset(dockPressProgress.get());const isDockShowing=isDockConnected.get()&&wrapperDimensions.get().drawerHeight>0;const rowOpacity=getDockRowOpacity(1-dockMinimizeProgress.get(),isDockExpanding.get(),dockContentSwap.get());return{left:inset,right:inset,opacity:isDockShowing?rowOpacity*(1-sheetExitProgress.get())*micLive.get():0};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockGlow.tsx");

export function VoicePanelDockGlow(micLive) {
  let dockMinimizeProgress;
  let dockPressProgress;
  let dockPressed;
  let isDockConnected;
  let items14;
  let obj4;
  let obj5;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp8;
  let tmp9;
  let tmpResult;
  let wrapperOffset;
  micLive = micLive.micLive;
  const tmp2 = dependencyMap;
  const tmp3 = useStateFromSharedValueDefault(react.useContext(VoicePanelStateContextDefault).dockHeight);
  const width = useWindowDimensionsDefault().width;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ dockMinimizeProgress, dockPressProgress, dockPressed, isDockConnected, wrapperOffset } = context);
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(1);
  items = [closure_12, dockPressed];
  let c0;
  [tmp8, tmp9] = items;
  const tmp7 = _mod1652;
  class VoicePanelDockGlowTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp9];
  VoicePanelDockGlowTsx1.__closure = items1;
  VoicePanelDockGlowTsx1.__workletHash = 104815698833;
  VoicePanelDockGlowTsx1.__initData = tmp8;
  const items2 = [closure_13, sharedValue, , ];
  const useAnimatedReaction = tmp7.useAnimatedReaction;
  items2[2] = timing_timing.withTiming;
  items2[3] = closure_9;
  c0 = undefined;
  let c1;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelDockGlowTsx2 {
    constructor(arg0, arg1) {
      if (micLive !== arg1) {
        num = 0;
        tmp = closure_0;
        set = closure_0.set;
        if (!micLive) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          num2 = 1;
          num = closure_1(1, closure_2);
        }
        result = set(num);
      }
      return;
    }
  }
  const items3 = [tmp12, tmp13, tmp14];
  VoicePanelDockGlowTsx2.__closure = items3;
  VoicePanelDockGlowTsx2.__workletHash = 16677252752401;
  VoicePanelDockGlowTsx2.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(VoicePanelDockGlowTsx1, VoicePanelDockGlowTsx2);
  const tmp5Result = _mod1652;
  const sharedValue1 = tmp5Result.useSharedValue(0);
  const items4 = [closure_14, isDockConnected, wrapperOffset, dockMinimizeProgress, dockPressProgress];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  [tmp18, tmp19, tmp20, tmp21, tmp22] = items4;
  const tmp10 = closure_9;
  const tmp5Result5 = _mod1652;
  class VoicePanelDockGlowTsx3 {
    constructor() {
      value = closure_0.get();
      if (value) {
        tmp2 = closure_1;
        value = !closure_1.get().gestureActive;
      }
      if (value) {
        tmp3 = closure_2;
        num = 1;
        num2 = 0.15;
        value = 1 - closure_2.get() <= 0.15;
      }
      if (value) {
        tmp4 = closure_3;
        num3 = 0.01;
        value = closure_3.get() <= 0.01;
      }
      return value;
    }
  }
  const items5 = [tmp19, tmp20, tmp21, tmp22];
  VoicePanelDockGlowTsx3.__closure = items5;
  VoicePanelDockGlowTsx3.__workletHash = 3258060662491;
  VoicePanelDockGlowTsx3.__initData = tmp18;
  const items6 = [closure_15, sharedValue1, , , ];
  const useAnimatedReaction2 = tmp5Result5.useAnimatedReaction;
  items6[2] = timing_timing.withTiming;
  items6[3] = tmp10;
  items6[4] = closure_10;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items6;
  class VoicePanelDockGlowTsx4 {
    constructor(arg0, arg1) {
      if (micLive !== arg1) {
        tmp2 = closure_1;
        tmp = closure_0;
        set = closure_0.set;
        if (micLive) {
          tmp5 = closure_2;
          num2 = 1;
          tmp2Result = tmp2(1, closure_2);
        } else {
          tmp3 = closure_3;
          num = 0;
          tmp2Result = tmp2(0, closure_3);
        }
        result = set(tmp2Result);
      }
      return;
    }
  }
  const items7 = [tmp24, tmp25, tmp26, tmp27];
  VoicePanelDockGlowTsx4.__closure = items7;
  VoicePanelDockGlowTsx4.__workletHash = 9180121447929;
  VoicePanelDockGlowTsx4.__initData = tmp23;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelDockGlowTsx3, VoicePanelDockGlowTsx4);
  const tmp5Result6 = useVoicePanelDockLevelProps;
  const voicePanelDockGlowLevelProps = tmp5Result6.useVoicePanelDockGlowLevelProps();
  const items8 = [closure_17, sharedValue1, sharedValue, micLive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp30, tmp31, tmp32, tmp33] = items8;
  const tmp5Result7 = _mod1652;
  class VoicePanelDockGlowTsx5 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      result = value * closure_1.get();
      obj.opacity = result * closure_2.get();
      return obj;
    }
  }
  const items9 = [tmp31, tmp32, tmp33];
  VoicePanelDockGlowTsx5.__closure = items9;
  VoicePanelDockGlowTsx5.__workletHash = 6231699429968;
  VoicePanelDockGlowTsx5.__initData = tmp30;
  const animatedStyle = tmp5Result7.useAnimatedStyle(VoicePanelDockGlowTsx5);
  const items10 = [closure_18, sharedValue1, sharedValue, micLive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp36, tmp37, tmp38, tmp39] = items10;
  const tmp5Result8 = _mod1652;
  class VoicePanelDockGlowTsx6 {
    constructor() {
      value = closure_0.get();
      result = value * closure_1.get();
      return result * closure_2.get();
    }
  }
  const items11 = [tmp37, tmp38, tmp39];
  VoicePanelDockGlowTsx6.__closure = items11;
  VoicePanelDockGlowTsx6.__workletHash = 17088839538486;
  VoicePanelDockGlowTsx6.__initData = tmp36;
  const items12 = [closure_19, ];
  const useAnimatedReaction3 = tmp5Result8.useAnimatedReaction;
  items12[1] = VoicePanelDockRimLight.voicePanelDockRimOpacity;
  c0 = undefined;
  [tmp40, tmp41] = items12;
  class VoicePanelDockGlowTsx7 {
    constructor(arg0) {
      result = closure_0.set(micLive);
      return;
    }
  }
  const items13 = [tmp41];
  VoicePanelDockGlowTsx7.__closure = items13;
  VoicePanelDockGlowTsx7.__workletHash = 12895478017097;
  VoicePanelDockGlowTsx7.__initData = tmp40;
  const animatedReaction3 = useAnimatedReaction3(VoicePanelDockGlowTsx6, VoicePanelDockGlowTsx7);
  let tmp43 = null;
  if (tmp3 > 0) {
    const obj2 = { style: items14, pointerEvents: "none", children: metroRequire(tmpResult, obj4) };
    items14 = [closure_11.layer, , ];
    const obj3 = { height: tmp3 };
    items14[1] = obj3;
    items14[2] = animatedStyle;
    const View = tmp(1652).View;
    obj4 = { style: StyleSheet.absoluteFill, minOpacity: VoicePanelDockRimLight.DOCK_GLOW_REST_OPACITY, maxOpacity: 1, children: metroRequire(closure_16, obj5) };
    tmpResult = LiveVoiceLevelViewDefault;
    const merged = Object.assign(voicePanelDockGlowLevelProps);
    obj5 = { width, dockHeight: tmp3 };
    tmp43 = metroRequire(View, obj2);
  }
  return tmp43;
}
export function VoicePanelDockBottomLine(micLive) {
  let dockContentSwap;
  let dockMinimizeProgress;
  let dockPressProgress;
  let isDockConnected;
  let isDockExpanding;
  let items3;
  let obj4;
  let obj5;
  let sheetExitProgress;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp8;
  let tmp9;
  let tmpResult;
  let wrapperDimensions;
  let token;
  let tmp = importDefault;
  micLive = micLive.micLive;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ dockContentSwap, dockMinimizeProgress, dockPressProgress, isDockConnected, isDockExpanding, sheetExitProgress, wrapperDimensions } = context);
  let obj = token(5724);
  token = obj.useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  items = [token];
  const memo = react.useMemo(() => {
    items = [, , ];
    const obj = ColorUtils;
    items[0] = obj.hexWithOpacity(token, 0);
    items[1] = token;
    const obj2 = ColorUtils;
    items[2] = obj2.hexWithOpacity(token, 0);
    return items;
  }, items);
  let obj2 = token(14236);
  const voicePanelDockGlowLevelProps = obj2.useVoicePanelDockGlowLevelProps();
  const items1 = [closure_20, getDockInset, dockPressProgress, isDockConnected, wrapperDimensions, , , , , , ];
  const useAnimatedStyle = token(1652).useAnimatedStyle;
  const tmp7 = token(1652);
  items1[5] = token(11389).getDockRowOpacity;
  items1[6] = dockMinimizeProgress;
  items1[7] = isDockExpanding;
  items1[8] = dockContentSwap;
  items1[9] = sheetExitProgress;
  items1[10] = micLive;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class VoicePanelDockGlowTsx8 {
    constructor() {
      let num2;
      const tmp = _undefined(_undefined2.get());
      const value = _undefined3.get() && _undefined4.get().drawerHeight > 0;
      const diff = 1 - _undefined5.get();
      const value2 = _undefined6.get();
      const rect = { left: tmp, right: tmp, opacity: num2 };
      num2 = 0;
      if (value) {
        const result = tmp6 * (1 - _undefined7.get());
        num2 = result * _undefined8.get();
      }
      return rect;
    }
  }
  const items2 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoicePanelDockGlowTsx8.__closure = items2;
  VoicePanelDockGlowTsx8.__workletHash = 791728825001;
  VoicePanelDockGlowTsx8.__initData = tmp8;
  const animatedStyle = useAnimatedStyle(VoicePanelDockGlowTsx8);
  const obj3 = { style: items3, pointerEvents: "none", children: closure_6(tmpResult, obj4) };
  items3 = [closure_11.bottomLine, animatedStyle];
  const View = _modDef1652.View;
  obj4 = { style: StyleSheet.absoluteFill, minOpacity: 0.1, maxOpacity: 0.3, children: closure_6(LinearGradientDefault, obj5) };
  tmpResult = LiveVoiceLevelViewDefault;
  const merged = Object.assign(voicePanelDockGlowLevelProps);
  obj5 = { style: StyleSheet.absoluteFill, colors: memo, locations: [0, 0.5, 1], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } };
  return closure_6(View, obj3);
}
