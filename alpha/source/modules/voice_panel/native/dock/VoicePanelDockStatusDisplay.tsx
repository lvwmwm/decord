// Module ID: 19632
// Function ID: 19633
// Name: VoicePanelDockStatusDisplay
// Dependencies: [32, 19, 17, 19630, 11390, 21, 5753, 5142, 1652, 1113, 3184, 5372, 5763, 19633, 5201, 1705, 11371, 2]

// Module 19632 (VoicePanelDockStatusDisplay)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5372 */;
import Text_Text from "Text/Text" /* 5753 */;
import spring_spring from "spring/spring" /* 5763 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelDockStatusStore from "VoicePanelDockStatusStore" /* 19630 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, map, set, set2, set3;

let DOCK_GAP;
let DOCK_TILE_SIZE;
let Easing;
let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function StatusText(status) {
  let Text;
  let closure_0;
  let items5;
  let items6;
  let kind2;
  let obj5;
  let tmp14;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp46;
  let tmp47;
  status = status.status;
  _require = undefined;
  let sharedValue;
  const kind = status.kind;
  let stringResult = null;
  const tmp = closure_12();
  if ("channel" !== kind) {
    stringResult = null;
    if ("speaker" !== kind) {
      if ("joined" === kind) {
        const intl3 = require("intl").intl;
        stringResult = intl3.string(sharedValue(3184).f9Cdb5);
      } else if ("left" === kind) {
        const intl2 = require("intl").intl;
        stringResult = intl2.string(sharedValue(3184).aZoM2c);
      } else if ("streaming" === kind) {
        const intl = require("intl").intl;
        stringResult = intl.string(sharedValue(3184).syN59i);
      }
    }
  }
  _require = tmp12;
  let obj = react;
  [kind2, tmp14] = react.useState(status.kind);
  let tmp15 = tmp12;
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
        stringResult1 = intl6.string(sharedValue(3184).f9Cdb5);
      } else if ("left" === kind2) {
        const intl5 = require("intl").intl;
        stringResult1 = intl5.string(sharedValue(3184).aZoM2c);
      } else if ("streaming" === kind2) {
        const intl4 = require("intl").intl;
        stringResult1 = intl4.string(sharedValue(3184).syN59i);
      }
    }
  }
  let num = 0;
  const useSharedValue = require("module_1652").useSharedValue;
  require("module_1652");
  if (null != stringResult) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [sharedValue, null != stringResult];
  const effect = obj.useEffect(() => {
    let withDelayResult;
    set = sharedValue.set;
    if (closure_0) {
      const withDelay = _mod1652.withDelay;
      _mod1652;
      const obj2 = timing_timing;
      withDelayResult = withDelay(70, obj2.withTiming(1, { duration: 175 }));
    } else {
      const tmp2Result2 = spring_spring;
      withDelayResult = tmp2Result2.withSpring(0, spring);
    }
    const result = set(withDelayResult);
  }, items);
  const items1 = [closure_14, sharedValue, closure_11];
  let c0;
  let c1;
  [tmp32, tmp33, tmp34] = items1;
  const tmp27Result = require("module_1652");
  class VoicePanelDockStatusDisplayTsx1 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateY: -_undefined.get() * c1 }];
      ({ translateY: -_undefined.get() * c1 });
      return obj;
    }
  }
  const items2 = [tmp33, tmp34];
  VoicePanelDockStatusDisplayTsx1.__closure = items2;
  VoicePanelDockStatusDisplayTsx1.__workletHash = 2314057210930;
  VoicePanelDockStatusDisplayTsx1.__initData = tmp32;
  const animatedStyle = tmp27Result.useAnimatedStyle(VoicePanelDockStatusDisplayTsx1);
  const items3 = [closure_15, , , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items3[1] = require("module_1652").interpolate;
  items3[2] = sharedValue;
  items3[3] = 0.5;
  items3[4] = require("module_1652").Extrapolation;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp37, tmp38, tmp39, tmp40, tmp41] = items3;
  class VoicePanelDockStatusDisplayTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), items, [0, 1], _undefined3.CLAMP) };
      items = [c2, 1];
      return obj;
    }
  }
  const items4 = [tmp38, tmp39, tmp40, tmp41];
  VoicePanelDockStatusDisplayTsx2.__closure = items4;
  VoicePanelDockStatusDisplayTsx2.__workletHash = 6670936502342;
  VoicePanelDockStatusDisplayTsx2.__initData = tmp37;
  const animatedStyle1 = useAnimatedStyle(VoicePanelDockStatusDisplayTsx2);
  let obj2 = { style: animatedStyle, children: items5 };
  const View = sharedValue(1652).View;
  const tmp43 = closure_9;
  const tmp44 = sharedValue;
  if (null != status.userId) {
    const obj3 = { userId: status.userId, dimmed: "left" === status.kind };
    tmp46 = closure_8(tmp27(19633).DockUserTitle, obj3);
    tmp47 = closure_8;
  } else {
    tmp46 = closure_8(tmp27(19633).DockChannelTitle, {});
    tmp47 = closure_8;
  }
  items5 = [tmp46, ];
  let tmp47Result = null != stringResult1;
  if (tmp47Result) {
    const obj4 = { style: items6, children: tmp47(Text, obj5) };
    items6 = [tmp.subtext, animatedStyle1];
    const View2 = tmp44(1652).View;
    let str4 = "text-voice-connected";
    Text = tmp27(5753).Text;
    if ("left" === kind2) {
      str4 = "text-muted";
    }
    obj5 = { variant: "body-xs/medium", color: str4, lineClamp: 1, children: stringResult1 };
    tmp47Result = tmp47(View2, obj4);
  }
  items5[1] = tmp47Result;
  return tmp43(View, obj2);
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
  const tmp = sharedValue7();
  let str = status.userId;
  if (str == null) {
    str = "channel";
  }
  const tmp2 = enter;
  let tmp3 = state;
  let tmp4 = enter(state[8]);
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
  const useSharedValue2 = tmp2(tmp3[8]).useSharedValue;
  tmp2(tmp3[8]);
  if (enter != null) {
    num2 = enter.x;
  }
  if (num2 == null) {
    num2 = 0;
  }
  sharedValue2 = useSharedValue2(num2);
  let num3;
  const useSharedValue3 = tmp2(tmp3[8]).useSharedValue;
  tmp2(tmp3[8]);
  if (enter != null) {
    num3 = enter.y;
  }
  if (num3 == null) {
    num3 = 0;
  }
  sharedValue3 = useSharedValue3(num3);
  let num4;
  const useSharedValue4 = tmp2(tmp3[8]).useSharedValue;
  tmp2(tmp3[8]);
  if (enter != null) {
    num4 = enter.y;
  }
  if (num4 == null) {
    num4 = 0;
  }
  sharedValue4 = useSharedValue4(num4);
  let num5 = 1;
  let num6 = 1;
  const useSharedValue5 = tmp2(tmp3[8]).useSharedValue;
  tmp2(tmp3[8]);
  if (null != enter) {
    num6 = 0;
  }
  sharedValue5 = useSharedValue5(num6);
  const useSharedValue6 = tmp2(tmp3[8]).useSharedValue;
  tmp2(tmp3[8]);
  if (null != enter) {
    num5 = 0;
  }
  sharedValue6 = useSharedValue6(num5);
  let tmp17 = enter;
  const useSharedValue7 = tmp2(tmp3[8]).useSharedValue;
  tmp2(tmp3[8]);
  if (enter == null) {
    tmp17 = closure_13;
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
    const tmp3 = closure_2 === enter(state[14]).TransitionStates.YEETED;
    if (tmp3) {
      tmp4 = point2;
    } else {
      tmp4 = enter;
      if (enter == null) {
        tmp4 = closure_13;
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
      const withDelay = _mod1652.withDelay;
      _mod1652;
      const obj = spring_spring;
      const result = set(withDelay(num, obj.withSpring(point2.x, closure_0.spring)));
      set2 = sharedValue3.set;
      const withDelay2 = _mod1652.withDelay;
      _mod1652;
      const obj2 = spring_spring;
      set2(withDelay2(num, obj2.withSpring(point2.y, closure_0.spring)));
      set3 = sharedValue5.set;
      const withDelay3 = _mod1652.withDelay;
      _mod1652;
      const obj3 = timing_timing;
      set3(withDelay3(num2, obj3.withTiming(point2.fade, closure_3, "respect-motion-settings", VoicePanelDockStatusDisplayTsx3)));
    }
    closure_2 = tmp3 || tmp9;
    let closure_3 = { duration: tmp4.fadeMs, easing: tmp4.fadeEasing };
    let result = sharedValue7.set(tmp4.fadeStartProgress);
    if (tmp3) {
      const items = [
        closure_1_17,
        tmp(tmp2[15]).scheduleOnRN,
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
      const items2 = [closure_1_18, tmp(tmp2[15]).scheduleOnRN, closure_13];
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
  let items1 = [closure_19, , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[8]).useAnimatedStyle;
  tmp2(tmp3[8]);
  items1[1] = tmp2(tmp3[8]).interpolate;
  items1[2] = sharedValue5;
  items1[3] = sharedValue7;
  items1[4] = tmp2(tmp3[8]).Extrapolation;
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
  let items3 = [closure_20, , , , , , ];
  const useAnimatedStyle2 = tmp2(tmp3[8]).useAnimatedStyle;
  tmp2(tmp3[8]);
  items3[1] = tmp2(tmp3[8]).interpolate;
  items3[2] = sharedValue6;
  items3[3] = sharedValue7;
  items3[4] = tmp2(tmp3[8]).Extrapolation;
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
  const View = exit(tmp3[8]).View;
  const tmp40 = sharedValue4;
  const tmp41 = str;
  const tmp43 = exit;
  if (null != status.userId) {
    let obj3 = { userId: status.userId, dimmed: "left" === status.kind, entered: first };
    tmp42Result = tmp42(tmp2(tmp3[13]).DockFace, obj3);
  } else {
    const obj4 = { streaming: status.streaming };
    tmp42Result = tmp42(tmp2(tmp3[13]).DockChannelIcon, obj4);
  }
  items6 = [tmp42(View, obj2), ];
  const obj5 = { style: items7, children: sharedValue3(StatusText, { status }) };
  items7 = [tmp.textSlot, animatedStyle2];
  const View2 = tmp43(tmp3[8]).View;
  items6[1] = sharedValue3(View2, obj5);
  return tmp40(tmp41, obj);
}
function getStatusItemKey(status) {
  let str = status.status.userId;
  if (str == null) {
    str = "channel";
  }
  return str;
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
({ useDockHasStreamers: metroRequire, useDockSubject: metroImportDefault } = VoicePanelDockStatusStore);
({ DOCK_TILE_SIZE, DOCK_GAP } = VoicePanelDockConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const spring = { mass: 0.6, stiffness: 560, damping: 24 };
const lineHeight = Text_Text.TextStyleSheet["body-md/medium"].lineHeight;
const lineHeight2 = Text_Text.TextStyleSheet["body-xs/medium"].lineHeight;
let closure_11 = (lineHeight2 + 1) / 2;
const sum = lineHeight + 1;
let createStyles = createStyles_mod;
let obj = { display: { flexGrow: 1, flexShrink: 1, height: DOCK_TILE_SIZE }, layer: obj2, tile: { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, alignItems: "center", justifyContent: "center" }, textSlot: { flexGrow: 1, flexShrink: 1, alignSelf: "stretch", justifyContent: "center" }, subtext: { position: "absolute", top: sum, left: 0, right: 0, height: lineHeight2, justifyContent: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: DOCK_GAP };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let point = { x: 0, y: 0, delayMs: 0, faceLagMs: 0, textLagMs: 0, fadeStartProgress: 0.5, fadeMs: 120, fadeDelayMs: 0, fadeEasing: Easing.inOut(_mod1652.Easing.quad), spring: { mass: 0.5, stiffness: 300, damping: 15 } };
Easing = _mod1652.Easing;
let closure_14 = { code: "(function VoicePanelDockStatusDisplayTsx1(){let[progress,SUBTEXT_SHIFT]=this.__closure;return{transform:[{translateY:-progress.get()*SUBTEXT_SHIFT}]};})" };
let closure_15 = { code: "(function VoicePanelDockStatusDisplayTsx2(){let[interpolate,progress,SUBTEXT_FADE_START,Extrapolation]=this.__closure;return{opacity:interpolate(progress.get(),[SUBTEXT_FADE_START,1],[0,1],Extrapolation.CLAMP)};})" };
let closure_17 = { code: "(function VoicePanelDockStatusDisplayTsx3(finished){let[scheduleOnRN,finishExit]=this.__closure;if(finished===true){scheduleOnRN(finishExit);}})" };
let closure_18 = { code: "(function VoicePanelDockStatusDisplayTsx4(finished){let[scheduleOnRN,setFaceEntered]=this.__closure;if(finished===true){scheduleOnRN(setFaceEntered,true);}})" };
let closure_19 = { code: "(function VoicePanelDockStatusDisplayTsx5(){let[interpolate,faceFade,fadeStartProgress,Extrapolation,faceX,faceY]=this.__closure;return{opacity:interpolate(faceFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:faceX.get()},{translateY:faceY.get()}]};})" };
let closure_20 = { code: "(function VoicePanelDockStatusDisplayTsx6(){let[interpolate,textFade,fadeStartProgress,Extrapolation,textX,textY]=this.__closure;return{opacity:interpolate(textFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:textX.get()},{translateY:textY.get()}]};})" };
const memoResult = react.memo(function VoicePanelDockStatusDisplay() {
  let Easing;
  let _slicedToArray;
  let arr;
  let closure_3;
  let enter;
  let exit;
  let first;
  let first1;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj20;
  let onExited;
  let tmp11;
  let userId;
  const f119101 = () => {
    let items;
    if ("channel" === obj2.kind) {
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
  let obj = onExited;
  let tmp2 = closure_12();
  const channelId = onExited.useContext(first(first1[16])).channelId;
  const tmp4 = closure_7(channelId);
  let str;
  const tmp5 = closure_6(channelId);
  if (tmp4 != null) {
    str = tmp4.kind;
  }
  if (str == null) {
    str = "channel";
  }
  const obj2 = { kind: str, userId, streaming: tmp5 };
  userId = undefined;
  if (tmp4 != null) {
    userId = tmp4.userId;
  }
  if (userId == null) {
    userId = null;
  }
  const tmp7 = _slicedToArray(obj.useState(() => ({ status: obj2, enter: null })), 2);
  first = tmp7[0];
  [arr, tmp11] = obj.useState(f119101);
  _slicedToArray(obj.useState(f119101), 2);
  const tmp12 = _slicedToArray(obj.useState(() => {
    map = new Map();
    return map;
  }), 2);
  first1 = tmp12[0];
  _slicedToArray = tmp14;
  onExited = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_3((arg0) => {
      map = new Map(arg0);
      map.delete(closure_0);
      return map;
    });
  }, []);
  const status = first.status;
  const tmp16 = status.kind === obj2.kind && status.userId === obj2.userId && status.streaming === obj2.streaming;
  if (!tmp16) {
    let str2 = first.status.userId;
    if (str2 == null) {
      str2 = "channel";
    }
    let str3 = obj2.userId;
    if (str3 == null) {
      str3 = "channel";
    }
    if (str2 === str3) {
      const obj3 = { status: obj2 };
      const merged = Object.assign(first);
      tmp7[1](obj3);
    } else {
      let obj8;
      let obj15;
      const status3 = first.status;
      if ("channel" === obj2.kind) {
        obj8 = { recent: [], down: false };
        const obj4 = { recent: [], down: false };
      } else if ("joined" === obj2.kind) {
        let items = [];
        let str8 = obj2.userId;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, arr.filter((item) => {
          let str = obj2.userId;
          if (str == null) {
            str = "channel";
          }
          return item !== str;
        }), 0);
        if (str8 == null) {
          str8 = "channel";
        }
        const obj5 = { recent: items, down: true };
        items[arraySpreadResult] = str8;
        obj8 = obj5;
      } else {
        let num = -1;
        if ("channel" !== status3.kind) {
          let str4 = status3.userId;
          const indexOf = arr.indexOf;
          if (str4 == null) {
            str4 = "channel";
          }
          num = indexOf(str4);
        }
        let str5 = obj2.userId;
        const indexOf2 = arr.indexOf;
        if (str5 == null) {
          str5 = "channel";
        }
        const indexOf2Result = indexOf2(str5);
        if (-1 === indexOf2Result) {
          let obj7;
          if ("left" === obj2.kind) {
            obj7 = { recent: arr, down: "channel" === status3.kind };
            const obj6 = { recent: arr, down: "channel" === status3.kind };
          } else {
            const items1 = [];
            let str7 = obj2.userId;
            const arraySpreadResult2 = HermesBuiltin.arraySpread(items1, arr, 0);
            if (str7 == null) {
              str7 = "channel";
            }
            obj7 = { recent: items1, down: true };
            items1[arraySpreadResult2] = str7;
          }
          obj8 = obj7;
        } else {
          obj8 = { recent: arr, down: indexOf2Result > num };
        }
      }
      let num4 = -12;
      const status2 = first.status;
      if (obj8.down) {
        num4 = 12;
      }
      if ("joined" === obj2.kind) {
        const obj9 = { enter: obj10, exit: obj11 };
        obj10 = { x: -24, delayMs: 100, faceLagMs: 80, fadeStartProgress: 0.3333333333333333, spring };
        const merged1 = Object.assign(point);
        obj11 = { y: -num4 };
        const merged2 = Object.assign(point);
        obj15 = obj9;
      } else if ("left" !== status2.kind) {
        const obj12 = { enter: obj13, exit: obj14 };
        obj13 = { y: num4, textLagMs: 40, fadeStartProgress: 0, fadeMs: 89.99999999999999, fadeDelayMs: 110.00000000000001 };
        const merged3 = Object.assign(point);
        obj14 = { y: -num4, textLagMs: 40, fadeStartProgress: 0, fadeMs: 90, fadeEasing: Easing.out(obj2(first1[8]).Easing.quad) };
        const merged4 = Object.assign(point);
        Easing = obj2(tmp3[8]).Easing;
        obj15 = obj12;
      } else {
        obj15 = { enter: obj16, exit: obj17 };
        obj16 = { y: num4, delayMs: 400 };
        const merged5 = Object.assign(point);
        obj17 = { x: -24, textLagMs: 100, spring: { mass: 0.5, damping: 16, stiffness: 200 } };
        const merged6 = Object.assign(point);
      }
      ({ enter, exit } = obj15);
      tmp11(obj8.recent);
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(first1);
      let str11 = first.status.userId;
      set = map.set;
      if (str11 == null) {
        str11 = "channel";
      }
      tmp12[1](set(str11, exit));
      const obj18 = { status: obj2, enter };
      tmp7[1](obj18);
    }
  }
  const items2 = [first];
  const items3 = [first1, onExited];
  const memo = obj.useMemo(() => {
    const items = [first];
    return items;
  }, items2);
  const obj19 = { style: tmp2.display, children: closure_8(obj2(first1[14]).TransitionGroup, obj20) };
  const callback1 = obj.useCallback((arg0, status, state, cleanUp) => {
    let value;
    const obj = { status: status.status, enter: status.enter, exit: value, state, cleanUp, onExited };
    value = first1.get(arg0);
    const tmp = metroImportAll;
    const tmp2 = StatusLayer;
    if (value == null) {
      value = point;
    }
    return tmp(tmp2, obj, arg0);
  }, items3);
  obj20 = { items: memo, renderItem: callback1, getItemKey: getStatusItemKey };
  return closure_8(closure_5, obj19);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusDisplay.tsx");

export default memoResult;
