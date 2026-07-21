// Module ID: 10618
// Function ID: 82815
// Name: FocusedControlsHeader
// Dependencies: []

// Module 10618 (FocusedControlsHeader)
function FocusedControlsHeader(reveal) {
  let header;
  let isTouchingLeftScreenEdge;
  reveal = reveal.reveal;
  const arg1 = reveal;
  ({ header, isTouchingLeftScreenEdge } = reveal);
  let obj = arg1(dependencyMap[6]);
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
  const importDefault = derivedValue;
  const tmp = callback3();
  let obj1 = arg1(dependencyMap[6]);
  const fn2 = function c() {
    let obj = {};
    obj = { translateY: reveal(closure_2[8]).withTiming(derivedValue.get(), closure_10) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[8]).withTiming, offsetY: derivedValue, TIMING_CONFIG: obj };
  fn2.__closure = obj;
  fn2.__workletHash = 12710345257882;
  fn2.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn2);
  obj = { style: animatedStyle };
  obj1 = { top: !importDefault(dependencyMap[7])(), left: isTouchingLeftScreenEdge, right: true, children: callback(closure_5, { style: tmp.headerContainer, children: header }) };
  obj.children = callback(arg1(dependencyMap[9]).SafeAreaPaddingView, obj1);
  return callback(importDefault(dependencyMap[6]).View, obj);
}
function FocusedControlsHeaderGradient() {
  const width = importDefault(dependencyMap[10])().width;
  let obj = { style: items };
  const items = [callback3().backgroundGradient, { width }];
  obj = { height: "100%", width };
  obj = {};
  const obj1 = {};
  const items1 = [callback(arg1(dependencyMap[11]).Stop, { <string:3813802319>: "/assets/design/components/Icon/native/redesign/generated/images", <string:1629385330>: 24, <string:2053329160>: 24 }), callback(arg1(dependencyMap[11]).Stop, {}), callback(arg1(dependencyMap[11]).Stop, {})];
  obj1.children = items1;
  obj.children = callback2(arg1(dependencyMap[11]).LinearGradient, obj1);
  const items2 = [callback(arg1(dependencyMap[11]).Defs, obj), callback(arg1(dependencyMap[11]).Rect, { width })];
  obj.children = items2;
  obj.children = callback2(arg1(dependencyMap[11]).Svg, obj);
  return callback(closure_5, obj);
}
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ backgroundGradient: { Icon: true, name: true, style: true, options: true, keys: true }, headerContainer: {} });
const obj = { easing: arg1(dependencyMap[5]).STANDARD_EASING, duration: 250 };
let closure_11 = { code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}" };
let closure_12 = { code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}" };
let closure_13 = { code: "function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}" };
let closure_14 = { code: "function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}" };
let closure_15 = { code: "function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}" };
const obj2 = arg1(dependencyMap[4]);
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
  ({ expandedControls, actionBar, forceReveal } = disableGradient);
  ({ header, children } = disableGradient);
  if (forceReveal === undefined) {
    forceReveal = false;
  }
  let flag = disableGradient.disableGradient;
  if (flag === undefined) {
    flag = false;
  }
  ({ containerStyle, channel: closure_0 } = disableGradient);
  let importDefault;
  let dependencyMap;
  let importAllResult;
  let derivedValue;
  let derivedValue1;
  let AnalyticEvents;
  let callback;
  ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
  let obj = arg1(dependencyMap[12]);
  const globalStatusIndicatorState = obj.useGlobalStatusIndicatorState();
  let obj1 = arg1(dependencyMap[13]);
  const globalStatusIndicatorHeightSharedValue = obj1.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  importDefault = globalStatusIndicatorHeightSharedValue;
  const tmp3 = importDefault(dependencyMap[7])();
  dependencyMap = tmp3;
  let reveal = importAllResult.useContext(arg1(dependencyMap[14]).RevealContext).reveal;
  let obj2 = arg1(dependencyMap[15]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  importAllResult = reveal;
  let obj3 = arg1(dependencyMap[6]);
  class D {
    constructor() {
      num = 0;
      if (closure_2) {
        tmp = closure_1;
        num = closure_1.get();
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
  derivedValue1 = arg1(dependencyMap[6]).useDerivedValue(F);
  const obj5 = arg1(dependencyMap[6]);
  const fn = function y() {
    const obj = { top: lib(tmp3[8]).withTiming(derivedValue.get(), closure_10) };
    const obj2 = lib(tmp3[8]);
    obj.opacity = lib(tmp3[8]).withTiming(derivedValue1.get(), closure_10);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[8]).withTiming, top: derivedValue, TIMING_CONFIG: obj, revealOpacity: derivedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 8532538341439;
  fn.__initData = closure_15;
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(fn);
  const obj7 = arg1(dependencyMap[6]);
  AnalyticEvents = importDefault(dependencyMap[16])(importDefault(dependencyMap[17]).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  callback = importDefault(dependencyMap[18])();
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
              let obj = globalStatusIndicatorHeightSharedValue(tmp3[20]);
              obj = { channel_id: lib.id, guild_id: lib.guild_id };
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
      tmp14 = callback(importDefault(dependencyMap[19]), obj3);
    }
  }
  items1[2] = tmp14;
  obj1.children = items1;
  return closure_8(importDefault(dependencyMap[6]).View, obj1);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default memoResult;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
