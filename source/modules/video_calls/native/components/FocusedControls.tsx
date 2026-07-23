// Module ID: 10629
// Function ID: 82889
// Name: FocusedControlsHeader
// Dependencies: [31, 27, 653, 33, 4130, 1273, 3991, 10630, 4131, 5121, 1450, 8018, 10631, 10635, 10530, 4528, 5464, 5484, 10599, 10641, 675, 2]

// Module 10629 (FocusedControlsHeader)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function FocusedControlsHeader(reveal) {
  let header;
  let isTouchingLeftScreenEdge;
  reveal = reveal.reveal;
  ({ header, isTouchingLeftScreenEdge } = reveal);
  let obj = reveal(3991);
  const fn = function l() {
    let num = -54;
    if (reveal) {
      num = 0;
    }
    return num;
  };
  fn.__closure = { reveal, FOCUSED_CONTROLS_HEADER_HEIGHT: 54 };
  fn.__workletHash = 15509217225804;
  fn.__initData = closure_11;
  const derivedValue = obj.useDerivedValue(fn);
  const tmp = callback3();
  let obj1 = reveal(3991);
  const fn2 = function c() {
    let obj = {};
    obj = { translateY: reveal(outer1_2[8]).withTiming(derivedValue.get(), outer1_10) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: reveal(4131).withTiming, offsetY: derivedValue, TIMING_CONFIG: obj };
  fn2.__closure = obj;
  fn2.__workletHash = 12710345257882;
  fn2.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn2);
  obj = { style: animatedStyle };
  obj1 = { top: !derivedValue(10630)(), left: isTouchingLeftScreenEdge, right: true, children: callback(closure_5, { style: tmp.headerContainer, children: header }) };
  obj.children = callback(reveal(5121).SafeAreaPaddingView, obj1);
  return callback(derivedValue(3991).View, obj);
}
function FocusedControlsHeaderGradient() {
  const width = importDefault(1450)().width;
  let obj = { style: items };
  items = [callback3().backgroundGradient, { width }];
  obj = { height: "100%", width };
  obj = {};
  const obj1 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%" };
  const items1 = [callback(require(8018) /* inlineStyles */.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }), callback(require(8018) /* inlineStyles */.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }), callback(require(8018) /* inlineStyles */.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" })];
  obj1.children = items1;
  obj.children = callback2(require(8018) /* inlineStyles */.LinearGradient, obj1);
  const items2 = [callback(require(8018) /* inlineStyles */.Defs, obj), ];
  const obj2 = { height: "100%", width, fill: "url(#grad)" };
  items2[1] = callback(require(8018) /* inlineStyles */.Rect, obj2);
  obj.children = items2;
  obj.children = callback2(require(8018) /* inlineStyles */.Svg, obj);
  return callback(closure_5, obj);
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 }, headerContainer: { position: "relative", height: 54 } });
let obj = { easing: require("Button").STANDARD_EASING, duration: 250 };
let closure_11 = { code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}" };
let closure_12 = { code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}" };
let closure_13 = { code: "function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}" };
let closure_14 = { code: "function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}" };
let closure_15 = { code: "function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}" };
const memoResult = importAllResult.memo((disableGradient) => {
  let actionBar;
  let bottomHeader;
  let children;
  let containerStyle;
  let expandedControls;
  let forceReveal;
  let header;
  let isTouchingLeftScreenEdge;
  let omitPTT;
  let onDrawerClose;
  let require;
  ({ expandedControls, actionBar, forceReveal } = disableGradient);
  ({ header, children } = disableGradient);
  if (forceReveal === undefined) {
    forceReveal = false;
  }
  let flag = disableGradient.disableGradient;
  if (flag === undefined) {
    flag = false;
  }
  ({ containerStyle, channel: require } = disableGradient);
  let globalStatusIndicatorHeightSharedValue;
  let dependencyMap;
  let reveal;
  let derivedValue;
  let derivedValue1;
  let analyticsLocations;
  let callback;
  ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
  let obj = require(10631) /* useGlobalStatusIndicatorState */;
  const globalStatusIndicatorState = obj.useGlobalStatusIndicatorState();
  let obj1 = require(10635) /* nativeEventEmitter */;
  globalStatusIndicatorHeightSharedValue = obj1.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp3 = globalStatusIndicatorHeightSharedValue(10630)();
  dependencyMap = tmp3;
  reveal = reveal.useContext(require(10530) /* useRevealProviderValue */.RevealContext).reveal;
  let obj2 = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  let obj3 = require(3991);
  class D {
    constructor() {
      num = 0;
      if (c2) {
        tmp = c1;
        num = c1.get();
      }
      return num;
    }
  }
  D.__closure = { isInvitedToSpeak: tmp3, statusIndicatorHeight: globalStatusIndicatorHeightSharedValue };
  D.__workletHash = 14833624951450;
  D.__initData = closure_13;
  derivedValue = obj3.useDerivedValue(D);
  class F {
    constructor() {
      num = 0;
      if (reveal) {
        num = 1;
      }
      return num;
    }
  }
  obj = { reveal };
  F.__closure = obj;
  F.__workletHash = 15022275245977;
  F.__initData = closure_14;
  derivedValue1 = require(3991).useDerivedValue(F);
  const obj5 = require(3991);
  const fn = function y() {
    const obj = { top: outer1_0(_undefined[8]).withTiming(derivedValue.get(), outer1_10) };
    const obj2 = outer1_0(_undefined[8]);
    obj.opacity = outer1_0(_undefined[8]).withTiming(derivedValue1.get(), outer1_10);
    return obj;
  };
  obj = { withTiming: require(4131) /* withTiming */.withTiming, top: derivedValue, TIMING_CONFIG: obj, revealOpacity: derivedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 8532538341439;
  fn.__initData = closure_15;
  const animatedStyle = require(3991).useAnimatedStyle(fn);
  const obj7 = require(3991);
  analyticsLocations = globalStatusIndicatorHeightSharedValue(5464)(globalStatusIndicatorHeightSharedValue(5484).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  callback = globalStatusIndicatorHeightSharedValue(10599)();
  obj1 = {};
  if (null == containerStyle) {
    containerStyle = derivedValue.absoluteFill;
  }
  const items = [containerStyle, animatedStyle];
  obj1.style = items;
  let str = "none";
  if (reveal) {
    str = "box-none";
  }
  obj1.pointerEvents = str;
  let tmp11 = null;
  if (!flag) {
    tmp11 = callback(FocusedControlsHeaderGradient, {});
  }
  const items1 = [tmp11, , ];
  obj2 = { header, reveal, isTouchingLeftScreenEdge };
  items1[1] = callback(FocusedControlsHeader, obj2);
  let tmp14 = null;
  if (null != actionBar) {
    tmp14 = null;
    if (null != expandedControls) {
      obj3 = {
        onDrawerOpen() {
              let obj = globalStatusIndicatorHeightSharedValue(_undefined[20]);
              obj = { channel_id: closure_0.id, guild_id: closure_0.guild_id };
              let applicationId;
              if (null != closure_7) {
                applicationId = closure_7.applicationId;
              }
              obj.application_id = applicationId;
              let compositeInstanceId;
              if (null != closure_7) {
                compositeInstanceId = closure_7.compositeInstanceId;
              }
              obj.activity_session_id = compositeInstanceId;
              obj.location_stack = analyticsLocations;
              obj.track(analyticsLocations.VOICE_BOTTOM_SHEET_EXPANDED, obj);
            },
        omitPTT,
        actionBar,
        expandedControls,
        header: bottomHeader,
        onDrawerClose,
        reveal,
        children
      };
      tmp14 = callback(globalStatusIndicatorHeightSharedValue(10641), obj3);
    }
  }
  items1[2] = tmp14;
  obj1.children = items1;
  return closure_8(globalStatusIndicatorHeightSharedValue(3991).View, obj1);
});
const result = require("ME").fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default memoResult;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
