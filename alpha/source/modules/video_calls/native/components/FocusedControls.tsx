// Module ID: 12052
// Function ID: 12053
// Name: FocusedControls
// Dependencies: [19, 17, 1072, 21, 5141, 1187, 1652, 12053, 5378, 7428, 1493, 8171, 12054, 12059, 11897, 5398, 7462, 7487, 11985, 12062, 1252, 2]

// Module 12052 (FocusedControls)
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5398 */;
import inlineStyles from "inlineStyles" /* 8171 */;
import RevealProvider from "RevealProvider" /* 11897 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 12053 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 12054 */;
import GlobalStatusIndicator from "GlobalStatusIndicator" /* 12059 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, obj1;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let tmp8;
const _modDef1652 = tmp8(1652);
function FocusedControlsHeader(arg0) {
  let SafeAreaPaddingView;
  let header;
  let isTouchingLeftScreenEdge;
  let obj3;
  let rect;
  let reveal;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp6;
  ({ header, reveal, isTouchingLeftScreenEdge } = arg0);
  const tmp = closure_9();
  obj = _mod1652;
  let items = [closure_11, reveal, 54];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  class FocusedControlsTsx1 {
    constructor() {
      num = 0;
      if (!closure_0) {
        tmp = closure_1;
        num = -closure_1;
      }
      return num;
    }
  }
  const items1 = [tmp5, tmp6];
  FocusedControlsTsx1.__closure = items1;
  FocusedControlsTsx1.__workletHash = 15848124233205;
  FocusedControlsTsx1.__initData = tmp4;
  const derivedValue = obj.useDerivedValue(FocusedControlsTsx1);
  const items2 = [closure_12, , , ];
  const tmp9 = useIsInvitedToSpeakDefault();
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  _mod1652;
  items2[1] = timing_timing.withTiming;
  items2[2] = derivedValue;
  items2[3] = obj;
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items2;
  class FocusedControlsTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: closure_0(closure_1.get(), closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp12, tmp13, tmp14];
  FocusedControlsTsx2.__closure = items3;
  FocusedControlsTsx2.__workletHash = 5859274917667;
  FocusedControlsTsx2.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(FocusedControlsTsx2);
  const obj2 = { style: animatedStyle, children: metroImportDefault(SafeAreaPaddingView, rect) };
  const View = _modDef1652.View;
  rect = { top: !tmp9, left: isTouchingLeftScreenEdge, right: true, children: metroImportDefault(hasOwnProperty, obj3) };
  obj3 = { style: tmp.headerContainer, children: header };
  SafeAreaPaddingView = tmp2(7428).SafeAreaPaddingView;
  return metroImportDefault(View, obj2);
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
  obj = { style: items, children: metroImportAll(Svg, size) };
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
let obj = { easing: native.STANDARD_EASING, duration: 250 };
let closure_11 = { code: "(function FocusedControlsTsx1(){let[reveal,FOCUSED_CONTROLS_HEADER_HEIGHT]=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;})" };
let closure_12 = { code: "(function FocusedControlsTsx2(){let[withTiming,offsetY,TIMING_CONFIG]=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};})" };
let closure_15 = { code: "(function FocusedControlsTsx3(){let[isInvitedToSpeak,statusIndicatorHeight]=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;})" };
let closure_16 = { code: "(function FocusedControlsTsx4(){let[reveal]=this.__closure;return reveal?1:0;})" };
let closure_17 = { code: "(function FocusedControlsTsx5(){let[withTiming,top,TIMING_CONFIG,revealOpacity]=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};})" };
const memoResult = react.memo(function FocusedControlsRevamped(disableGradient) {
  let actionBar;
  let bottomHeader;
  let children;
  let closure_2;
  let containerStyle;
  let expandedControls;
  let forceReveal;
  let header;
  let isTouchingLeftScreenEdge;
  let items6;
  let items7;
  let omitPTT;
  let onDrawerClose;
  let require;
  let str;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp8;
  let tmp9;
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
  let analyticsLocations;
  dependencyMap = undefined;
  const tmp2 = dependencyMap;
  ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
  obj = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = obj.useGlobalStatusIndicatorState();
  const obj2 = GlobalStatusIndicator;
  const globalStatusIndicatorHeightSharedValue = obj2.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp6 = analyticsLocations(12053)();
  let reveal = react.useContext(RevealProvider.RevealContext).reveal;
  const obj3 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  const items = [closure_15, tmp6, globalStatusIndicatorHeightSharedValue];
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items;
  const tmpResult = _mod1652;
  class FocusedControlsTsx3 {
    constructor() {
      let num = 0;
      if (c0) {
        num = _undefined.get();
      }
      return num;
    }
  }
  const items1 = [tmp9, tmp10];
  FocusedControlsTsx3.__closure = items1;
  FocusedControlsTsx3.__workletHash = 15152715120003;
  FocusedControlsTsx3.__initData = tmp8;
  const derivedValue = tmpResult.useDerivedValue(FocusedControlsTsx3);
  const items2 = [closure_16, reveal];
  c0 = undefined;
  [tmp12, tmp13] = items2;
  const tmpResult3 = _mod1652;
  class FocusedControlsTsx4 {
    constructor() {
      let num = 0;
      if (c0) {
        num = 1;
      }
      return num;
    }
  }
  const items3 = [tmp13];
  FocusedControlsTsx4.__closure = items3;
  FocusedControlsTsx4.__workletHash = 3205365180320;
  FocusedControlsTsx4.__initData = tmp12;
  const derivedValue1 = tmpResult3.useDerivedValue(FocusedControlsTsx4);
  const items4 = [closure_17, , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[1] = timing_timing.withTiming;
  items4[2] = derivedValue;
  items4[3] = obj;
  items4[4] = derivedValue1;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp16, tmp17, tmp18, tmp19, tmp20] = items4;
  class FocusedControlsTsx5 {
    constructor() {
      obj = { top: _undefined(_undefined2.get(), c2), opacity: _undefined(_undefined3.get(), c2) };
      return obj;
    }
  }
  const items5 = [tmp17, tmp18, tmp19, tmp20];
  FocusedControlsTsx5.__closure = items5;
  FocusedControlsTsx5.__workletHash = 13660104452358;
  FocusedControlsTsx5.__initData = tmp16;
  const animatedStyle = useAnimatedStyle(FocusedControlsTsx5);
  const tmp5Result = analyticsLocations(7462);
  analyticsLocations = tmp5Result(tmp5(7487).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  dependencyMap = tmp5(11985)();
  const View = tmp5(1652).View;
  const tmp23 = closure_8;
  if (containerStyle == null) {
    containerStyle = absoluteFill.absoluteFill;
  }
  const obj4 = { style: items6, pointerEvents: str, children: items7 };
  items6 = [containerStyle, animatedStyle];
  str = "none";
  if (reveal) {
    str = "box-none";
  }
  let tmp25 = null;
  if (!flag) {
    tmp25 = closure_7(FocusedControlsHeaderGradient, {});
  }
  items7 = [tmp25, closure_7(FocusedControlsHeader, { header, reveal, isTouchingLeftScreenEdge }), ];
  let tmp28Result = null;
  const tmp28 = closure_7;
  if (null != actionBar) {
    tmp28Result = null;
    if (null != expandedControls) {
      const obj5 = {
        onDrawerOpen: function handleOpenDrawer() {
              let applicationId;
              let compositeInstanceId;
              obj = { channel_id: _require.id, guild_id: _require.guild_id, application_id: applicationId, activity_session_id: compositeInstanceId, location_stack: analyticsLocations };
              applicationId = undefined;
              const track = AnalyticsUtilsDefault.track;
              const VOICE_BOTTOM_SHEET_EXPANDED = AnalyticEvents.VOICE_BOTTOM_SHEET_EXPANDED;
              AnalyticsUtilsDefault;
              if (closure_2 != null) {
                applicationId = tmp2.applicationId;
              }
              compositeInstanceId = undefined;
              if (closure_2 != null) {
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
      tmp28Result = tmp28(tmp5(12062), obj5);
    }
  }
  items7[2] = tmp28Result;
  return tmp23(View, obj4);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default memoResult;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
