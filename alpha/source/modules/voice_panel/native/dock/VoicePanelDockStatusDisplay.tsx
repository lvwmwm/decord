// Module ID: 18009
// Function ID: 18010
// Name: VoicePanelDockStatusDisplay
// Dependencies: [32, 19, 17, 6627, 4762, 5561, 18010, 11768, 21, 5504, 4913, 1653, 1112, 3376, 5123, 5514, 18011, 4974, 1706, 11749, 504, 2]

// Module 18009 (VoicePanelDockStatusDisplay)
import _mod1653 from "module_1653" /* 1653 */;
import timing_timing from "timing/timing" /* 5123 */;
import Text_Text from "Text/Text" /* 5504 */;
import spring_spring from "spring/spring" /* 5514 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CallStore from "CallStore" /* 6627 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import VoiceStateStore from "VoiceStateStore" /* 5561 */;
import VoicePanelDockStatusStore from "VoicePanelDockStatusStore" /* 18010 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11768 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, map, set, set2, set3;

let DOCK_GAP;
let DOCK_TILE_SIZE;
let Easing;
let StyleSheet;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let obj2;
let unpackModuleId;
function StatusText(status) {
  let Text;
  let closure_0;
  let items7;
  let items8;
  let obj6;
  let ringing;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp56Result;
  let tmp59;
  status = status.status;
  _require = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  const kind = status.kind;
  let stringResult = null;
  const tmp = closure_16();
  if ("channel" !== kind) {
    stringResult = null;
    if ("speaker" !== kind) {
      if ("joined" === kind) {
        const intl3 = require("intl").intl;
        stringResult = intl3.string(sharedValue(sharedValue1[13]).f9Cdb5);
      } else if ("left" === kind) {
        const intl2 = require("intl").intl;
        stringResult = intl2.string(sharedValue(sharedValue1[13]).aZoM2c);
      } else if ("streaming" === kind) {
        const intl = require("intl").intl;
        stringResult = intl.string(sharedValue(sharedValue1[13]).syN59i);
      }
    }
  }
  _require = tmp12;
  let obj = react;
  const tmp13 = sharedValue2(react.useState(status.kind), 2);
  let kind2 = tmp13[0];
  let tmp15 = tmp12;
  const tmp14 = tmp13[1];
  if (null != stringResult) {
    tmp15 = status.kind !== kind2;
  }
  if (tmp15) {
    tmp14(status.kind);
  }
  if (null != stringResult) {
    kind2 = status.kind;
  }
  let stringResult1 = null;
  if ("channel" !== kind2) {
    stringResult1 = null;
    if ("speaker" !== kind2) {
      if ("joined" === kind2) {
        const intl6 = require("intl").intl;
        stringResult1 = intl6.string(sharedValue(sharedValue1[13]).f9Cdb5);
      } else if ("left" === kind2) {
        const intl5 = require("intl").intl;
        stringResult1 = intl5.string(sharedValue(sharedValue1[13]).aZoM2c);
      } else if ("streaming" === kind2) {
        const intl4 = require("intl").intl;
        stringResult1 = intl4.string(sharedValue(sharedValue1[13]).syN59i);
      }
    }
  }
  let num = 0;
  const useSharedValue = require("module_1653").useSharedValue;
  require("module_1653");
  if (null != stringResult) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [sharedValue, null != stringResult];
  const effect = obj.useEffect(() => {
    let withDelayResult;
    set = sharedValue.set;
    if (closure_0) {
      const withDelay = _mod1653.withDelay;
      _mod1653;
      const obj2 = timing_timing;
      withDelayResult = withDelay(70, obj2.withTiming(1, { duration: 175 }));
    } else {
      const tmp2Result2 = spring_spring;
      withDelayResult = tmp2Result2.withSpring(0, spring);
    }
    const result = set(withDelayResult);
  }, items);
  const tmp27Result = require("module_1653");
  sharedValue1 = tmp27Result.useSharedValue(lineHeight);
  const tmp27Result4 = require("module_1653");
  sharedValue2 = tmp27Result4.useSharedValue(lineHeight);
  const items1 = [sharedValue1];
  const items2 = [sharedValue2];
  const callback = obj.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items1);
  const callback1 = obj.useCallback((nativeEvent) => sharedValue2.set(nativeEvent.nativeEvent.layout.height), items2);
  const items3 = [closure_18, 1, sharedValue1, lineHeight, sharedValue, sharedValue2];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items3;
  const tmp27Result5 = require("module_1653");
  const tmp32 = lineHeight;
  class VoicePanelDockStatusDisplayTsx1 {
    constructor() {
      let items;
      let result;
      let tmp2;
      const obj = { transform: items };
      const obj2 = { translateY: tmp2 * (_undefined3.get() + result) / 2 };
      result = c0 * _undefined.get() / c2;
      items = [obj2];
      tmp2 = -_undefined2.get();
      return obj;
    }
  }
  const items4 = [tmp38, tmp39, tmp40, tmp41, tmp42];
  VoicePanelDockStatusDisplayTsx1.__closure = items4;
  VoicePanelDockStatusDisplayTsx1.__workletHash = 4330268106479;
  VoicePanelDockStatusDisplayTsx1.__initData = tmp37;
  const animatedStyle = tmp27Result5.useAnimatedStyle(VoicePanelDockStatusDisplayTsx1);
  const items5 = [closure_19, sharedValue1, 1, tmp32, , , , ];
  const useAnimatedStyle = require("module_1653").useAnimatedStyle;
  require("module_1653");
  items5[4] = require("module_1653").interpolate;
  items5[5] = sharedValue;
  items5[6] = 0.5;
  items5[7] = require("module_1653").Extrapolation;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items5;
  class VoicePanelDockStatusDisplayTsx2 {
    constructor() {
      let items;
      const obj = { top: _undefined.get() * (1 + c1 / c2), opacity: _undefined2(_undefined3.get(), items, [0, 1], _undefined4.CLAMP) };
      items = [c5, 1];
      return obj;
    }
  }
  const items6 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52];
  VoicePanelDockStatusDisplayTsx2.__closure = items6;
  VoicePanelDockStatusDisplayTsx2.__workletHash = 5280168993712;
  VoicePanelDockStatusDisplayTsx2.__initData = tmp45;
  const animatedStyle1 = useAnimatedStyle(VoicePanelDockStatusDisplayTsx2);
  let obj2 = { style: animatedStyle, children: items7 };
  const obj3 = { onLayout: callback, children: tmp56Result };
  const View = sharedValue(tmp28[11]).View;
  const tmp54 = closure_12;
  const tmp55 = sharedValue;
  const tmp57 = closure_5;
  if (null != status.userId) {
    const obj4 = { userId: status.userId, dimmed: tmp59, ringing };
    tmp59 = "left" === status.kind;
    const DockUserTitle = tmp27(tmp28[16]).DockUserTitle;
    if (!tmp59) {
      const dm = status.dm;
      let alone;
      if (dm != null) {
        alone = dm.alone;
      }
      tmp59 = true === alone;
    }
    const dm2 = status.dm;
    ringing = undefined;
    if (dm2 != null) {
      ringing = dm2.ringing;
    }
    tmp56Result = tmp56(DockUserTitle, obj4);
  } else {
    tmp56Result = tmp56(tmp27(tmp28[16]).DockChannelTitle, {});
  }
  items7 = [closure_11(tmp57, obj3), ];
  let tmp56Result2 = null != stringResult1;
  if (tmp56Result2) {
    const obj5 = { style: items8, onLayout: callback1, children: closure_11(Text, obj6) };
    items8 = [tmp.subtext, animatedStyle1];
    const View2 = tmp55(tmp28[11]).View;
    let str4 = "text-voice-connected";
    Text = tmp27(tmp28[9]).Text;
    if ("left" === kind2) {
      str4 = "text-muted";
    }
    obj6 = { variant: "body-xs/medium", color: str4, lineClamp: 1, children: stringResult1 };
    tmp56Result2 = tmp56(View2, obj5);
  }
  items7[1] = tmp56Result2;
  return tmp54(View, obj2);
}
function StatusLayer(exit) {
  let enter;
  let items5;
  let items6;
  let items7;
  let status;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp42Result;
  let tmp45;
  ({ status, enter } = exit);
  exit = exit.exit;
  const state = exit.state;
  const cleanUp = exit.cleanUp;
  const onExited = exit.onExited;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  let sharedValue7;
  let closure_13;
  const tmp = closure_16();
  let str = status.userId;
  if (str == null) {
    str = "channel";
  }
  const tmp2 = enter;
  let tmp3 = state;
  let tmp4 = enter(state[11]);
  let num;
  const useSharedValue = tmp4.useSharedValue;
  if (enter != null) {
    num = enter.x;
  }
  if (num == null) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  let num2;
  const useSharedValue2 = tmp2(tmp3[11]).useSharedValue;
  tmp2(tmp3[11]);
  if (enter != null) {
    num2 = enter.x;
  }
  if (num2 == null) {
    num2 = 0;
  }
  sharedValue2 = useSharedValue2(num2);
  let num3;
  const useSharedValue3 = tmp2(tmp3[11]).useSharedValue;
  tmp2(tmp3[11]);
  if (enter != null) {
    num3 = enter.y;
  }
  if (num3 == null) {
    num3 = 0;
  }
  sharedValue3 = useSharedValue3(num3);
  let num4;
  const useSharedValue4 = tmp2(tmp3[11]).useSharedValue;
  tmp2(tmp3[11]);
  if (enter != null) {
    num4 = enter.y;
  }
  if (num4 == null) {
    num4 = 0;
  }
  sharedValue4 = useSharedValue4(num4);
  let num5 = 1;
  let num6 = 1;
  const useSharedValue5 = tmp2(tmp3[11]).useSharedValue;
  tmp2(tmp3[11]);
  if (null != enter) {
    num6 = 0;
  }
  sharedValue5 = useSharedValue5(num6);
  const useSharedValue6 = tmp2(tmp3[11]).useSharedValue;
  tmp2(tmp3[11]);
  if (null != enter) {
    num5 = 0;
  }
  sharedValue6 = useSharedValue6(num5);
  let tmp17 = enter;
  const useSharedValue7 = tmp2(tmp3[11]).useSharedValue;
  tmp2(tmp3[11]);
  if (enter == null) {
    tmp17 = point;
  }
  sharedValue7 = useSharedValue7(tmp17.fadeStartProgress);
  const tmp19 = cleanUp(onExited.useState(null == enter), 2);
  closure_13 = tmp19[1];
  let items = [cleanUp, enter, exit, sharedValue5, sharedValue, sharedValue3, sharedValue7, onExited, state, str, sharedValue6, sharedValue2, sharedValue4];
  const first = tmp19[0];
  const effect = onExited.useEffect(() => {
    let closure_0;
    let point2;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp4;
    const tmp3 = closure_2 === enter(state[17]).TransitionStates.YEETED;
    if (tmp3) {
      tmp4 = point2;
    } else {
      tmp4 = enter;
      if (enter == null) {
        tmp4 = closure_1_17;
      }
    }
    enter = tmp4;
    if (tmp3) {
      const point1 = { x: null, y: null, fade: 0 };
      ({ x: obj2.x, y: obj2.y } = point2);
      point2 = point1;
    } else {
      point2 = { x: 0, y: 0, fade: 1 };
    }
    const tmp7 = sharedValue;
    point = enter;
    let num;
    const value = sharedValue.get();
    if (enter != null) {
      num = point.x;
    }
    if (num == null) {
      num = 0;
    }
    let tmp9 = value === num;
    if (tmp9) {
      let num2;
      const value2 = sharedValue3.get();
      if (point != null) {
        num2 = point.y;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp9 = value2 === num2;
    }
    function animateView(sharedValue, sharedValue3, sharedValue5, faceLagMs, VoicePanelDockStatusDisplayTsx3) {
      let num = 0;
      if (closure_2) {
        num = closure_0.delayMs + faceLagMs;
      }
      let num2 = 0;
      if (closure_2) {
        num2 = num + closure_0.fadeDelayMs;
      }
      set = sharedValue.set;
      const withDelay = _mod1653.withDelay;
      _mod1653;
      const obj = spring_spring;
      const result = set(withDelay(num, obj.withSpring(point2.x, closure_0.spring)));
      set2 = sharedValue3.set;
      const withDelay2 = _mod1653.withDelay;
      _mod1653;
      const obj2 = spring_spring;
      set2(withDelay2(num, obj2.withSpring(point2.y, closure_0.spring)));
      set3 = sharedValue5.set;
      const withDelay3 = _mod1653.withDelay;
      _mod1653;
      const obj3 = timing_timing;
      set3(withDelay3(num2, obj3.withTiming(point2.fade, closure_3, "respect-motion-settings", VoicePanelDockStatusDisplayTsx3)));
    }
    closure_2 = tmp3 || tmp9;
    let closure_3 = { duration: tmp4.fadeMs, easing: tmp4.fadeEasing };
    let result = sharedValue7.set(tmp4.fadeStartProgress);
    if (tmp3) {
      const items = [
        closure_1_21,
        tmp(tmp2[18]).scheduleOnRN,
        function finishExit() {
            closure_3();
            onExited(str);
          }
      ];
      let c0;
      let c1;
      [tmp31, tmp32, tmp33] = items;
      class VoicePanelDockStatusDisplayTsx3 {
        constructor(arg0) {
          if (true === arg0) {
            _undefined(c1);
          }
        }
      }
      const items1 = [tmp32, tmp33];
      VoicePanelDockStatusDisplayTsx3.__closure = items1;
      VoicePanelDockStatusDisplayTsx3.__workletHash = 4840412944787;
      VoicePanelDockStatusDisplayTsx3.__initData = tmp31;
      const faceLagMs = tmp4.faceLagMs;
      let tmp37;
      if (tmp4.textLagMs < tmp4.faceLagMs) {
        tmp37 = VoicePanelDockStatusDisplayTsx3;
      }
      animateView(tmp7, sharedValue3, sharedValue5, faceLagMs, tmp37);
      const textLagMs = tmp4.textLagMs;
      let tmp47;
      if (tmp4.textLagMs >= tmp4.faceLagMs) {
        tmp47 = VoicePanelDockStatusDisplayTsx3;
      }
      animateView(sharedValue2, sharedValue4, sharedValue6, textLagMs, tmp47);
    } else {
      const items2 = [closure_1_22, tmp(tmp2[18]).scheduleOnRN, closure_13];
      c0 = undefined;
      c1 = undefined;
      class VoicePanelDockStatusDisplayTsx3 {
        constructor(arg0) {
          if (true === arg0) {
            _undefined(c1);
          }
        }
      }
      class VoicePanelDockStatusDisplayTsx4 {
        constructor(arg0) {
          if (true === arg0) {
            _undefined(c1, true);
          }
        }
      }
      const items3 = [tmp18, tmp19];
      VoicePanelDockStatusDisplayTsx4.__closure = items3;
      VoicePanelDockStatusDisplayTsx4.__workletHash = 16935496833998;
      VoicePanelDockStatusDisplayTsx4.__initData = tmp17;
      animateView(tmp7, sharedValue3, sharedValue5, tmp4.faceLagMs, VoicePanelDockStatusDisplayTsx4);
      animateView(sharedValue2, sharedValue4, sharedValue6, tmp4.textLagMs);
    }
  }, items);
  let items1 = [closure_23, , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[11]).useAnimatedStyle;
  tmp2(tmp3[11]);
  items1[1] = tmp2(tmp3[11]).interpolate;
  items1[2] = sharedValue5;
  items1[3] = sharedValue7;
  items1[4] = tmp2(tmp3[11]).Extrapolation;
  items1[5] = sharedValue;
  items1[6] = sharedValue3;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items1;
  class VoicePanelDockStatusDisplayTsx5 {
    constructor() {
      let items;
      let items1;
      let value;
      const obj = { opacity: _undefined(value, items, [0, 1], _undefined4.CLAMP), transform: items1 };
      value = _undefined2.get();
      items = [_undefined3.get(), 1];
      items1 = [{ translateX: _undefined5.get() }, ];
      ({ translateX: _undefined5.get() });
      items1[1] = { translateY: _undefined6.get() };
      ({ translateY: _undefined6.get() });
      return obj;
    }
  }
  let items2 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  VoicePanelDockStatusDisplayTsx5.__closure = items2;
  VoicePanelDockStatusDisplayTsx5.__workletHash = 7517298836265;
  VoicePanelDockStatusDisplayTsx5.__initData = tmp23;
  const animatedStyle = useAnimatedStyle(VoicePanelDockStatusDisplayTsx5);
  let items3 = [closure_24, , , , , , ];
  const useAnimatedStyle2 = tmp2(tmp3[11]).useAnimatedStyle;
  tmp2(tmp3[11]);
  items3[1] = tmp2(tmp3[11]).interpolate;
  items3[2] = sharedValue6;
  items3[3] = sharedValue7;
  items3[4] = tmp2(tmp3[11]).Extrapolation;
  items3[5] = sharedValue2;
  items3[6] = sharedValue4;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items3;
  class VoicePanelDockStatusDisplayTsx6 {
    constructor() {
      let items;
      let items1;
      let value;
      const obj = { opacity: _undefined(value, items, [0, 1], _undefined4.CLAMP), transform: items1 };
      value = _undefined2.get();
      items = [_undefined3.get(), 1];
      items1 = [{ translateX: _undefined5.get() }, ];
      ({ translateX: _undefined5.get() });
      items1[1] = { translateY: _undefined6.get() };
      ({ translateY: _undefined6.get() });
      return obj;
    }
  }
  const items4 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  VoicePanelDockStatusDisplayTsx6.__closure = items4;
  VoicePanelDockStatusDisplayTsx6.__workletHash = 17078561971370;
  VoicePanelDockStatusDisplayTsx6.__initData = tmp32;
  let obj = { style: tmp.layer, pointerEvents: "none", children: items6 };
  const animatedStyle2 = useAnimatedStyle2(VoicePanelDockStatusDisplayTsx6);
  let obj2 = { style: items5, children: tmp42Result };
  items5 = [tmp.tile, animatedStyle];
  const View = exit(tmp3[11]).View;
  const tmp40 = sharedValue7;
  const tmp41 = str;
  const tmp43 = exit;
  if (null != status.userId) {
    let obj3 = { userId: status.userId, dimmed: tmp45, entered: first };
    tmp45 = "left" === status.kind;
    const DockFace = tmp2(tmp3[16]).DockFace;
    if (tmp45) {
      tmp45 = null == status.dm;
    }
    tmp42Result = tmp42(DockFace, obj3);
  } else {
    const obj4 = { streaming: status.streaming };
    tmp42Result = tmp42(tmp2(tmp3[16]).DockChannelIcon, obj4);
  }
  items6 = [tmp42(View, obj2), ];
  const obj5 = { style: items7, children: sharedValue6(StatusText, { status }) };
  items7 = [tmp.textSlot, animatedStyle2];
  const View2 = tmp43(tmp3[11]).View;
  items6[1] = sharedValue6(View2, obj5);
  return tmp40(tmp41, obj);
}
function getStatusItemKey(status) {
  let str = status.status.userId;
  if (str == null) {
    str = "channel";
  }
  return str;
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ useDockHasStreamers: c9, useDockSubject: c10 } = VoicePanelDockStatusStore);
({ DOCK_TILE_SIZE, DOCK_GAP } = VoicePanelDockConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const spring = { mass: 0.6, stiffness: 560, damping: 24 };
const lineHeight = Text_Text.TextStyleSheet["body-xs/medium"].lineHeight;
let createStyles = createStyles_mod;
let obj = { display: { flexGrow: 1, flexShrink: 1, height: DOCK_TILE_SIZE }, layer: obj2, tile: { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, alignItems: "center", justifyContent: "center" }, textSlot: { flexGrow: 1, flexShrink: 1, alignSelf: "stretch", justifyContent: "center" }, subtext: { position: "absolute", left: 0, right: 0, justifyContent: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: DOCK_GAP };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_16 = createStyles(obj);
let point = { x: 0, y: 0, delayMs: 0, faceLagMs: 0, textLagMs: 0, fadeStartProgress: 0.5, fadeMs: 120, fadeDelayMs: 0, fadeEasing: Easing.inOut(_mod1653.Easing.quad), spring: { mass: 0.5, stiffness: 300, damping: 15 } };
Easing = _mod1653.Easing;
let closure_18 = { code: "(function VoicePanelDockStatusDisplayTsx1(){let[SUBTEXT_GAP,nameHeight,NAME_LINE_HEIGHT,progress,subtextHeight]=this.__closure;const gap=SUBTEXT_GAP*nameHeight.get()/NAME_LINE_HEIGHT;return{transform:[{translateY:-progress.get()*(subtextHeight.get()+gap)/2}]};})" };
let closure_19 = { code: "(function VoicePanelDockStatusDisplayTsx2(){let[nameHeight,SUBTEXT_GAP,NAME_LINE_HEIGHT,interpolate,progress,SUBTEXT_FADE_START,Extrapolation]=this.__closure;return{top:nameHeight.get()*(1+SUBTEXT_GAP/NAME_LINE_HEIGHT),opacity:interpolate(progress.get(),[SUBTEXT_FADE_START,1],[0,1],Extrapolation.CLAMP)};})" };
let closure_21 = { code: "(function VoicePanelDockStatusDisplayTsx3(finished){let[scheduleOnRN,finishExit]=this.__closure;if(finished===true){scheduleOnRN(finishExit);}})" };
let closure_22 = { code: "(function VoicePanelDockStatusDisplayTsx4(finished){let[scheduleOnRN,setFaceEntered]=this.__closure;if(finished===true){scheduleOnRN(setFaceEntered,true);}})" };
let closure_23 = { code: "(function VoicePanelDockStatusDisplayTsx5(){let[interpolate,faceFade,fadeStartProgress,Extrapolation,faceX,faceY]=this.__closure;return{opacity:interpolate(faceFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:faceX.get()},{translateY:faceY.get()}]};})" };
let closure_24 = { code: "(function VoicePanelDockStatusDisplayTsx6(){let[interpolate,textFade,fadeStartProgress,Extrapolation,textX,textY]=this.__closure;return{opacity:interpolate(textFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:textX.get()},{translateY:textY.get()}]};})" };
const memoResult = react.memo(function VoicePanelDockStatusDisplay() {
  let Easing;
  let arr7;
  let enter;
  let exit;
  let first;
  let first1;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj20;
  let obj21;
  let obj24;
  let obj5;
  let onExited;
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp17;
  let userId;
  const f113455 = () => {
    let items;
    if ("channel" === obj5.kind) {
      items = [];
    } else {
      let str = tmp.userId;
      if (str == null) {
        str = "channel";
      }
      items = [str];
    }
    return items;
  };
  let obj = first1;
  let tmp2 = closure_16();
  const channelId = first1.useContext(stateFromStores(obj5[19])).channelId;
  const tmp4 = closure_10(channelId);
  let items = [ChannelStore];
  const items1 = [channelId];
  const tmp5 = closure_9(channelId);
  const obj2 = channelId(obj5[20]);
  stateFromStores = obj2.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let recipientId = null;
    if (true === isDMResult) {
      recipientId = channel.getRecipientId();
    }
    return recipientId;
  }, items1);
  const items2 = [onExited];
  const items3 = [channelId, stateFromStores];
  const obj3 = channelId(obj5[20]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      const call = CallStore.getCall(channelId);
      let hasItem;
      if (call != null) {
        const ringing = call.ringing;
        hasItem = ringing.includes(tmp);
      }
      tmp2 = true === hasItem;
    }
    return tmp2;
  }, items3);
  const items4 = [VoiceStateStore];
  const items5 = [channelId, stateFromStores];
  const obj4 = channelId(obj5[20]);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    const isInChannelResult = null != stateFromStores && VoiceStateStore.isInChannel(channelId, tmp);
    return isInChannelResult;
  }, items5);
  let str;
  if (tmp4 != null) {
    str = tmp4.kind;
  }
  if (str == null) {
    str = "channel";
  }
  obj5 = { kind: str, userId, streaming: tmp5, dm: tmp11 };
  userId = undefined;
  if (tmp4 != null) {
    userId = tmp4.userId;
  }
  if (userId == null) {
    userId = stateFromStores;
  }
  tmp11 = null;
  if (null != stateFromStores) {
    const obj6 = { ringing: tmp12, alone: !stateFromStores1 && !stateFromStores2 };
    tmp11 = obj6;
    tmp12 = stateFromStores1 && !stateFromStores2;
  }
  const tmp13 = first(obj.useState(() => ({ status: obj5, enter: null })), 2);
  first = tmp13[0];
  [arr7, tmp17] = first(obj.useState(f113455), 2);
  first(obj.useState(f113455), 2);
  const tmp18 = first(obj.useState(() => {
    map = new Map();
    return map;
  }), 2);
  first1 = tmp18[0];
  let closure_5 = tmp20;
  onExited = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_5((arg0) => {
      map = new Map(arg0);
      map.delete(closure_0);
      return map;
    });
  }, []);
  const status = first.status;
  let tmp22 = status.kind === obj5.kind && status.userId === obj5.userId && status.streaming === obj5.streaming;
  if (tmp22) {
    const dm = status.dm;
    let ringing;
    if (dm != null) {
      ringing = dm.ringing;
    }
    const dm2 = obj5.dm;
    let ringing1;
    if (dm2 != null) {
      ringing1 = dm2.ringing;
    }
    tmp22 = ringing === ringing1;
  }
  if (tmp22) {
    const dm3 = status.dm;
    let alone;
    if (dm3 != null) {
      alone = dm3.alone;
    }
    const dm4 = obj5.dm;
    let alone1;
    if (dm4 != null) {
      alone1 = dm4.alone;
    }
    tmp22 = alone === alone1;
  }
  if (!tmp22) {
    let str2 = first.status.userId;
    if (str2 == null) {
      str2 = "channel";
    }
    let str3 = obj5.userId;
    if (str3 == null) {
      str3 = "channel";
    }
    if (str2 === str3) {
      const obj7 = { status: obj5 };
      const merged = Object.assign(first);
      tmp13[1](obj7);
    } else {
      let obj12;
      let obj19;
      const status3 = first.status;
      if ("channel" === obj5.kind) {
        obj12 = { recent: [], down: false };
        const obj8 = { recent: [], down: false };
      } else if ("joined" === obj5.kind) {
        const items6 = [];
        let str8 = obj5.userId;
        const arraySpreadResult = HermesBuiltin.arraySpread(items6, arr7.filter((item) => {
          let str = obj5.userId;
          if (str == null) {
            str = "channel";
          }
          return item !== str;
        }), 0);
        if (str8 == null) {
          str8 = "channel";
        }
        const obj9 = { recent: items6, down: true };
        items6[arraySpreadResult] = str8;
        obj12 = obj9;
      } else {
        let num = -1;
        if ("channel" !== status3.kind) {
          let str4 = status3.userId;
          const indexOf = arr7.indexOf;
          if (str4 == null) {
            str4 = "channel";
          }
          num = indexOf(str4);
        }
        let str5 = obj5.userId;
        const indexOf2 = arr7.indexOf;
        if (str5 == null) {
          str5 = "channel";
        }
        const indexOf2Result = indexOf2(str5);
        if (-1 === indexOf2Result) {
          let obj11;
          if ("left" === obj5.kind) {
            obj11 = { recent: arr7, down: "channel" === status3.kind };
            const obj10 = { recent: arr7, down: "channel" === status3.kind };
          } else {
            const items7 = [];
            let str7 = obj5.userId;
            const arraySpreadResult2 = HermesBuiltin.arraySpread(items7, arr7, 0);
            if (str7 == null) {
              str7 = "channel";
            }
            obj11 = { recent: items7, down: true };
            items7[arraySpreadResult2] = str7;
          }
          obj12 = obj11;
        } else {
          obj12 = { recent: arr7, down: indexOf2Result > num };
        }
      }
      let num4 = -12;
      const status2 = first.status;
      if (obj12.down) {
        num4 = 12;
      }
      if ("joined" === obj5.kind) {
        const obj13 = { enter: obj14, exit: obj15 };
        obj14 = { x: -24, delayMs: 100, faceLagMs: 80, fadeStartProgress: 0.3333333333333333, spring };
        const merged1 = Object.assign(point);
        obj15 = { y: -num4 };
        const merged2 = Object.assign(point);
        obj19 = obj13;
      } else if ("left" !== status2.kind) {
        const obj16 = { enter: obj17, exit: obj18 };
        obj17 = { y: num4, textLagMs: 40, fadeStartProgress: 0, fadeMs: 89.99999999999999, fadeDelayMs: 110.00000000000001 };
        const merged3 = Object.assign(point);
        obj18 = { y: -num4, textLagMs: 40, fadeStartProgress: 0, fadeMs: 90, fadeEasing: Easing.out(channelId(obj5[11]).Easing.quad) };
        const merged4 = Object.assign(point);
        Easing = tmp6(tmp3[11]).Easing;
        obj19 = obj16;
      } else {
        obj19 = { enter: obj20, exit: obj21 };
        obj20 = { y: num4, delayMs: 400 };
        const merged5 = Object.assign(point);
        obj21 = { x: -24, textLagMs: 100, spring: { mass: 0.5, damping: 16, stiffness: 200 } };
        const merged6 = Object.assign(point);
      }
      ({ enter, exit } = obj19);
      tmp17(obj12.recent);
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(first1);
      let str11 = first.status.userId;
      set = map.set;
      if (str11 == null) {
        str11 = "channel";
      }
      tmp18[1](set(str11, exit));
      const obj22 = { status: obj5, enter };
      tmp13[1](obj22);
    }
  }
  const items8 = [first];
  const items9 = [first1, onExited];
  const memo = obj.useMemo(() => {
    const items = [first];
    return items;
  }, items8);
  const obj23 = { style: tmp2.display, children: closure_11(channelId(obj5[17]).TransitionGroup, obj24) };
  const callback1 = obj.useCallback((arg0, status, state, cleanUp) => {
    let value;
    const obj = { status: status.status, enter: status.enter, exit: value, state, cleanUp, onExited };
    value = first1.get(arg0);
    const tmp = unpackModuleId;
    const tmp2 = StatusLayer;
    if (value == null) {
      value = point;
    }
    return tmp(tmp2, obj, arg0);
  }, items9);
  obj24 = { items: memo, renderItem: callback1, getItemKey: getStatusItemKey };
  return closure_11(closure_5, obj23);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusDisplay.tsx");

export default memoResult;
