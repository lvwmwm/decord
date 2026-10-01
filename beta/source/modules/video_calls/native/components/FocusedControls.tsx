// Module ID: 8958
// Function ID: 8959
// Name: FocusedControls
// Dependencies: [19, 17, 1074, 21, 4836, 1177, 4566, 8959, 4837, 6544, 1479, 7909, 8960, 8965, 8837, 5266, 6583, 6603, 8913, 8969, 1241, 2]

// Module 8958 (FocusedControls)
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import RevealProvider from "RevealProvider" /* 8837 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 8960 */;
import GlobalStatusIndicator from "GlobalStatusIndicator" /* 8965 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let tmp;
const ReanimatedRexport = tmp(4566);
const timing = tmp(4837);
function FocusedControlsHeader(reveal) {
  let SafeAreaPaddingView;
  let header;
  let isTouchingLeftScreenEdge;
  let obj5;
  let rect;
  reveal = reveal.reveal;
  ({ header, isTouchingLeftScreenEdge } = reveal);
  const tmp = closure_9();
  TIMING_CONFIG = reveal(4566);
  const fn = function l() {
    let num = -54;
    if (reveal) {
      num = 0;
    }
    return num;
  };
  fn.__closure = { reveal, FOCUSED_CONTROLS_HEADER_HEIGHT: 54 };
  fn.__workletHash = 15509217225804;
  fn.__initData = __initData;
  const derivedValue = TIMING_CONFIG.useDerivedValue(fn);
  const tmp3 = derivedValue(8959)();
  let obj2 = reveal(4566);
  const fn2 = function c() {
    let items;
    let obj3;
    const obj = { transform: items };
    const obj2 = { translateY: obj3.withTiming(derivedValue.get(), obj) };
    items = [obj2];
    obj3 = timing;
    return obj;
  };
  let obj3 = { withTiming: reveal(4837).withTiming, offsetY: derivedValue, TIMING_CONFIG };
  fn2.__closure = obj3;
  fn2.__workletHash = 12710345257882;
  fn2.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn2);
  const obj4 = { style: animatedStyle, children: closure_7(SafeAreaPaddingView, rect) };
  const View = derivedValue(4566).View;
  rect = { top: !tmp3, left: isTouchingLeftScreenEdge, right: true, children: closure_7(closure_5, obj5) };
  obj5 = { style: tmp.headerContainer, children: header };
  SafeAreaPaddingView = reveal(6544).SafeAreaPaddingView;
  return closure_7(View, obj4);
}
function FocusedControlsHeaderGradient() {
  let LinearGradient;
  let Svg;
  let items;
  let items1;
  let items2;
  let obj3;
  const tmp = closure_9();
  const width = useWindowDimensionsDefault().width;
  const obj = { style: items, children: metroImportAll(Svg, size) };
  items = [tmp.backgroundGradient, { width }];
  size = { height: "100%", width, children: items2 };
  Svg = inlineStyles.Svg;
  const obj2 = { children: metroImportAll(LinearGradient, obj3) };
  const Defs = inlineStyles.Defs;
  obj3 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: items1 };
  LinearGradient = inlineStyles.LinearGradient;
  items1 = [metroImportDefault(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }), metroImportDefault(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }), metroImportDefault(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" })];
  items2 = [metroImportDefault(Defs, obj2), metroImportDefault(inlineStyles.Rect, { height: "100%", width, fill: "url(#grad)" })];
  return metroImportDefault(hasOwnProperty, obj);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 }, headerContainer: { position: "relative", height: 54 } });
let TIMING_CONFIG = { easing: native.STANDARD_EASING, duration: 250 };
const __initData = { code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}" };
const __initData2 = { code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}" };
const __initData3 = { code: "function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}" };
const __initData4 = { code: "function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}" };
const __initData5 = { code: "function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}" };
const memoResult = react.memo((disableGradient) => {
  let actionBar;
  let bottomHeader;
  let children;
  let closure_2;
  let containerStyle;
  let expandedControls;
  let forceReveal;
  let header;
  let isTouchingLeftScreenEdge;
  let items;
  let items1;
  let omitPTT;
  let onDrawerClose;
  let str;
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
  dependencyMap = undefined;
  let reveal;
  let derivedValue;
  let derivedValue1;
  let analyticsLocations;
  let closure_7;
  const tmp2 = dependencyMap;
  ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
  TIMING_CONFIG = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = TIMING_CONFIG.useGlobalStatusIndicatorState();
  let obj2 = GlobalStatusIndicator;
  const globalStatusIndicatorHeightSharedValue = obj2.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp6 = globalStatusIndicatorHeightSharedValue(8959)();
  dependencyMap = tmp6;
  reveal = reveal.useContext(RevealProvider.RevealContext).reveal;
  let obj3 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  const tmpResult = ReanimatedRexport;
  class D {
    constructor() {
      let num = 0;
      if (closure_2) {
        num = globalStatusIndicatorHeightSharedValue.get();
      }
      return num;
    }
  }
  D.__closure = { isInvitedToSpeak: tmp6, statusIndicatorHeight: globalStatusIndicatorHeightSharedValue };
  D.__workletHash = 14833624951450;
  D.__initData = __initData3;
  derivedValue = tmpResult.useDerivedValue(D);
  const tmpResult3 = ReanimatedRexport;
  class F {
    constructor() {
      let num = 0;
      if (reveal) {
        num = 1;
      }
      return num;
    }
  }
  F.__closure = { reveal };
  F.__workletHash = 15022275245977;
  F.__initData = __initData4;
  derivedValue1 = tmpResult3.useDerivedValue(F);
  const fn = function y() {
    let obj;
    let obj2;
    let obj3;
    obj = { top: obj2.withTiming(derivedValue.get(), obj), opacity: obj3.withTiming(derivedValue1.get(), obj) };
    obj2 = timing;
    obj3 = timing;
    return obj;
  };
  const tmpResult4 = ReanimatedRexport;
  fn.__closure = { withTiming: timing.withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 };
  fn.__workletHash = 8532538341439;
  fn.__initData = __initData5;
  ({ withTiming: timing.withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 });
  const animatedStyle = tmpResult4.useAnimatedStyle(fn);
  const tmp5Result = globalStatusIndicatorHeightSharedValue(6583);
  analyticsLocations = tmp5Result(tmp5(6603).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  closure_7 = tmp5(8913)();
  const View = tmp5(4566).View;
  const tmp12 = closure_8;
  if (containerStyle == null) {
    containerStyle = derivedValue.absoluteFill;
  }
  const obj5 = { style: items, pointerEvents: str, children: items1 };
  items = [containerStyle, animatedStyle];
  str = "none";
  if (reveal) {
    str = "box-none";
  }
  let tmp14 = null;
  if (!flag) {
    tmp14 = closure_7(FocusedControlsHeaderGradient, {});
  }
  items1 = [tmp14, closure_7(FocusedControlsHeader, { header, reveal, isTouchingLeftScreenEdge }), ];
  let tmp17Result = null;
  const tmp17 = closure_7;
  if (null != actionBar) {
    tmp17Result = null;
    if (null != expandedControls) {
      const obj6 = {
        onDrawerOpen() {
              let applicationId;
              let compositeInstanceId;
              const obj = { channel_id: require.id, guild_id: require.guild_id, application_id: applicationId, activity_session_id: compositeInstanceId, location_stack: analyticsLocations };
              applicationId = undefined;
              const track = AnalyticsUtilsDefault.track;
              const VOICE_BOTTOM_SHEET_EXPANDED = AnalyticEvents.VOICE_BOTTOM_SHEET_EXPANDED;
              AnalyticsUtilsDefault;
              if (closure_7 != null) {
                applicationId = tmp2.applicationId;
              }
              compositeInstanceId = undefined;
              if (closure_7 != null) {
                compositeInstanceId = tmp2.compositeInstanceId;
              }
              track(VOICE_BOTTOM_SHEET_EXPANDED, obj);
            },
        omitPTT,
        actionBar,
        expandedControls,
        header: bottomHeader,
        onDrawerClose,
        reveal,
        children
      };
      tmp17Result = tmp17(tmp5(8969), obj6);
    }
  }
  items1[2] = tmp17Result;
  return tmp12(View, obj5);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default memoResult;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
