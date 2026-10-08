// Module ID: 10824
// Function ID: 10825
// Name: FocusedControlsBottomControls
// Dependencies: [32, 19, 17, 10333, 10334, 1085, 21, 1381, 5090, 587, 5902, 1200, 558, 576, 1630, 4810, 10825, 1105, 1126, 6833, 5091, 6326, 9694, 1496, 10686, 1121, 4787, 4929, 5363, 10827, 2]

// Module 10824 (FocusedControlsBottomControls)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import native from "native" /* 1200 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import CallPTTButtonDefault from "CallPTTButton" /* 10827 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelCallStore from "ChannelCallStore" /* 10333 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10334 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import TextStyles from "TextStyles" /* 5902 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let flag2, height, openDrawerResult, openDrawerResult1, set, set2, set2Result, tmp29, tmp30, tmp31, tmp32, width;

let Fonts;
let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let tmp;
let unpackModuleId;
const CallPTTButton = tmp(10827);
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, TouchableWithoutFeedback: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ clearFocusTimer: metroImportAll, resetFocusTimer: c9 } = ChannelCallStore);
({ BOX_MODE_THRESHOLD_WIDTH: c10, BOX_MODE_ACTIONSHEET_HEIGHT: unpackModuleId } = ChannelCallConstants);
({ ComponentActions: closure_12, Fonts } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let c15 = 500;
let c16 = 20;
function EXTENDED_CONTROLS_OFFSET_Y(arg0) {

}
function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(arg0) {

}
let createStyles = createStyles_mod;
let obj = { bottomDrawerContainer: rect, visualEffectView: obj2, visualEffectViewBackground: { backgroundColor: "rgba(0, 0, 0, .15)" }, expandedControlsContainer: { marginHorizontal: 16 }, aboveActionBarContainer: { position: "absolute", left: 0, right: 0, top: -32, paddingTop: 4, paddingBottom: 8 }, aboveActionBarChildrenContainer: { position: "absolute", left: 16, right: 16, top: -64 }, ptbButton: { margin: 0, marginHorizontal: 16, marginBottom: 8 }, tooltipStyle: { alignSelf: "center", position: "absolute", top: -28 }, containerStyle: { paddingHorizontal: 8, paddingVertical: 4 }, labelStyle: obj3 };
rect = { position: "absolute", left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
const merged1 = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
let closure_19 = createStyles(obj);
let obj4 = { easing: native.STANDARD_EASING, duration: 250 };
let obj5 = { easing: native.STANDARD_EASING, duration: 400 };
const __initData = { code: "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?\"none\":\"auto\"};}" };
const __initData2 = { code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedControlsExpanded(positionY) {
  let availableHeight;
  let bottom;
  let closure_4;
  let expandedControls;
  let scrollEnabled;
  let obj = availableHeight(bottom[13]);
  const cResult = obj.c(19);
  const tmp = availableHeight;
  ({ expandedControls, availableHeight } = positionY);
  positionY = positionY.positionY;
  const tmp4 = closure_19();
  bottom = positionY(bottom[14])().bottom;
  const tmp6 = scrollEnabled(width.useState(false), 2);
  scrollEnabled = tmp6[0];
  width = tmp6[1];
  const tmp5 = positionY;
  if (cResult[0] === availableHeight) {
    if (cResult[1] === bottom) {
      let tmp8;
      let tmp12;
      if (cResult[2] === scrollEnabled) {
        tmp8 = cResult[3];
      }
      const fn2 = function w() {
        let str;
        const bound = Math.min(-1 * positionY.get() / c16, 1);
        const obj = { opacity: bound, pointerEvents: str };
        str = "auto";
        if (0 === bound) {
          str = "none";
        }
        return obj;
      };
      const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
      fn2.__closure = obj2;
      fn2.__workletHash = 5181322553799;
      fn2.__initData = __initData;
      const tmpResult = tmp(bottom[15]);
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[4] !== availableHeight) {
        const obj3 = { height: availableHeight };
        cResult[4] = availableHeight;
        cResult[5] = obj3;
        tmp12 = obj3;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        let tmp13;
        if (cResult[7] === tmp4.expandedControlsContainer) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === expandedControls) {
          if (cResult[10] === tmp8) {
            let tmp14;
            if (cResult[11] === tmp13) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === scrollEnabled) {
              let tmp17;
              if (cResult[14] === tmp14) {
                tmp17 = cResult[15];
              }
              if (cResult[16] === tmp12) {
                let tmp21;
                if (cResult[17] === tmp17) {
                  tmp21 = cResult[18];
                }
                return tmp21;
              }
              obj4 = { style: tmp12, children: tmp17 };
              const tmp24 = closure_13(closure_5, obj4);
              cResult[16] = tmp12;
              cResult[17] = tmp17;
              cResult[18] = tmp24;
              tmp21 = tmp24;
            }
            obj5 = { scrollEnabled, children: tmp14 };
            const tmp20 = closure_13(closure_7, obj5);
            cResult[13] = scrollEnabled;
            cResult[14] = tmp14;
            cResult[15] = tmp20;
            tmp17 = tmp20;
          }
        }
        const obj6 = { style: tmp13, onLayout: tmp8, children: expandedControls };
        const tmp16 = closure_13(tmp5(bottom[15]).View, obj6);
        cResult[9] = expandedControls;
        cResult[10] = tmp8;
        cResult[11] = tmp13;
        cResult[12] = tmp16;
        tmp14 = tmp16;
      }
      const items = [tmp4.expandedControlsContainer, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.expandedControlsContainer;
      cResult[8] = items;
      tmp13 = items;
    }
  }
  const fn = function l(nativeEvent) {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      closure_4(nativeEvent.nativeEvent.layout.height > availableHeight - bottom);
    }
  };
  cResult[0] = availableHeight;
  cResult[1] = bottom;
  cResult[2] = scrollEnabled;
  cResult[3] = fn;
  tmp8 = fn;
}) : (function FocusedControlsExpanded(availableHeight) {
  let closure_4;
  let items1;
  availableHeight = availableHeight.availableHeight;
  const positionY = availableHeight.positionY;
  let bottom;
  let scrollEnabled;
  width = undefined;
  const expandedControls = availableHeight.expandedControls;
  const tmp = closure_19();
  bottom = positionY(bottom[14])().bottom;
  const tmp2 = scrollEnabled(width.useState(false), 2);
  scrollEnabled = tmp2[0];
  width = tmp2[1];
  const items = [availableHeight, bottom, scrollEnabled];
  const callback = width.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      closure_4(nativeEvent.nativeEvent.layout.height > availableHeight - bottom);
    }
  }, items);
  let obj = availableHeight(bottom[15]);
  const fn = function h() {
    let str;
    const bound = Math.min(-1 * positionY.get() / c16, 1);
    const obj = { opacity: bound, pointerEvents: str };
    str = "auto";
    if (0 === bound) {
      str = "none";
    }
    return obj;
  };
  const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
  fn.__closure = obj2;
  fn.__workletHash = 7351861170276;
  fn.__initData = __initData2;
  const obj3 = { style: { height: availableHeight }, children: closure_13(closure_7, obj4) };
  obj4 = { scrollEnabled, children: closure_13(positionY(bottom[15]).View, obj5) };
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj5 = { style: items1, onLayout: callback, children: expandedControls };
  items1 = [tmp.expandedControlsContainer, animatedStyle];
  return closure_13(closure_5, obj3);
});
const __initData3 = { code: "function FocusedControlsBottomControlsTsx3(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}" };
const __initData4 = { code: "function FocusedControlsBottomControlsTsx4(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedControlsBottomDrawerTooltip(positionY) {
  let containerStyle;
  let labelStyle;
  let tooltipStyle;
  let obj = positionY(576);
  const cResult = obj.c(8);
  positionY = positionY.positionY;
  const tmp4 = closure_19();
  const obj2 = positionY(10825);
  const canShowTooltip = obj2.useCanShowTooltip(positionY(1105).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  const fn = function o() {
    const obj = { opacity: 1 - Math.min(-1 * positionY.get() / c16, 1) };
    return obj;
  };
  obj4 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
  fn.__closure = obj4;
  fn.__workletHash = 15386908151356;
  fn.__initData = __initData3;
  const obj3 = positionY(4810);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (canShowTooltip) {
    let first;
    const _Symbol = Symbol;
    ({ tooltipStyle, containerStyle, labelStyle } = tmp4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(positionY(1126).t.zYzy2i);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === tmp4.containerStyle) {
      if (cResult[2] === tmp4.labelStyle) {
        let tmp11;
        if (cResult[3] === tmp4.tooltipStyle) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === animatedStyle) {
          let tmp14;
          if (cResult[6] === tmp11) {
            tmp14 = cResult[7];
          }
          return tmp14;
        }
        obj5 = { style: animatedStyle, children: tmp11 };
        const tmp17 = closure_13(ReanimatedRexportDefault.View, obj5);
        cResult[5] = animatedStyle;
        cResult[6] = tmp11;
        cResult[7] = tmp17;
        tmp14 = tmp17;
      }
    }
    const obj6 = { style: tooltipStyle, arrowPosition: positionY(1200).TooltipArrowPositions.CENTER, arrowDirection: positionY(1200).TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4, containerStyle, labelStyle, label: first };
    const Tooltip = tmp(1200).Tooltip;
    const tmp13 = closure_13(Tooltip, obj6);
    cResult[1] = tmp4.containerStyle;
    cResult[2] = tmp4.labelStyle;
    cResult[3] = tmp4.tooltipStyle;
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    return null;
  }
}) : (function FocusedControlsBottomDrawerTooltip(positionY) {
  let Tooltip;
  let intl;
  let obj7;
  positionY = positionY.positionY;
  const tmp = closure_19();
  let obj = positionY(10825);
  const canShowTooltip = obj.useCanShowTooltip(positionY(1105).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  positionY(4810);
  const fn = function o() {
    const obj = { opacity: 1 - Math.min(-1 * positionY.get() / c16, 1) };
    return obj;
  };
  const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
  fn.__closure = obj2;
  fn.__workletHash = 13795512875803;
  fn.__initData = __initData4;
  let tmp7 = null;
  if (canShowTooltip) {
    const obj3 = { style: tmp6, children: closure_13(Tooltip, obj7) };
    const View = ReanimatedRexportDefault.View;
    obj7 = { style: tmp.tooltipStyle, arrowPosition: positionY(1200).TooltipArrowPositions.CENTER, arrowDirection: positionY(1200).TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4, containerStyle: null, labelStyle: null, label: intl.string(positionY(1126).t.zYzy2i) };
    Tooltip = tmp2(1200).Tooltip;
    ({ containerStyle: obj4.containerStyle, labelStyle: obj4.labelStyle } = tmp);
    intl = tmp2(1126).intl;
    tmp7 = closure_13(View, obj3);
  }
  return tmp7;
});
const __initData5 = { code: "function FocusedControlsBottomControlsTsx5(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}" };
const __initData6 = { code: "function FocusedControlsBottomControlsTsx6(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedControlsAboveActionBarView(positionY) {
  let aboveActionBar;
  let isExpanded;
  let items;
  let items1;
  let onPressHeader;
  let tmp11;
  let tmp6;
  let tmp7;
  let obj = positionY(576);
  const cResult = obj.c(17);
  const tmp = positionY;
  positionY = positionY.positionY;
  const offsetY = positionY.offsetY;
  ({ aboveActionBar, onPressHeader, isExpanded } = positionY);
  const tmp4 = closure_19();
  const fn = function o() {
    const obj = { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c16), 0) };
    return obj;
  };
  const obj3 = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
  fn.__closure = obj3;
  fn.__workletHash = 16821998405506;
  fn.__initData = __initData5;
  const obj2 = positionY(4810);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] !== isExpanded) {
    obj4 = { expanded: isExpanded };
    cResult[0] = isExpanded;
    cResult[1] = obj4;
    tmp6 = obj4;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== positionY) {
    obj5 = { positionY };
    const tmp10 = closure_13(closure_27, obj5);
    cResult[2] = positionY;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_13(tmp(6833).ActionSheetHeaderBar, {});
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === aboveActionBar) {
    if (cResult[6] === animatedStyle) {
      let tmp14;
      if (cResult[7] === tmp4.aboveActionBarChildrenContainer) {
        tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4.aboveActionBarContainer) {
        if (cResult[10] === tmp7) {
          let tmp18;
          if (cResult[11] === tmp14) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === onPressHeader) {
            if (cResult[14] === tmp6) {
              let tmp22;
              if (cResult[15] === tmp18) {
                tmp22 = cResult[16];
              }
              return tmp22;
            }
          }
          const obj6 = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: tmp6, children: tmp18 };
          const tmp25 = closure_13(closure_6, obj6);
          cResult[13] = onPressHeader;
          cResult[14] = tmp6;
          cResult[15] = tmp18;
          cResult[16] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj7 = { style: tmp4.aboveActionBarContainer, children: items };
      items = [tmp7, tmp11, tmp14];
      const tmp21 = closure_14(closure_5, obj7);
      cResult[9] = tmp4.aboveActionBarContainer;
      cResult[10] = tmp7;
      cResult[11] = tmp14;
      cResult[12] = tmp21;
      tmp18 = tmp21;
    }
  }
  let tmp15 = null != aboveActionBar;
  if (tmp15) {
    const obj8 = { style: items1, children: aboveActionBar };
    items1 = [tmp4.aboveActionBarChildrenContainer, animatedStyle];
    tmp15 = closure_13(offsetY(4810).View, obj8);
  }
  cResult[5] = aboveActionBar;
  cResult[6] = animatedStyle;
  cResult[7] = tmp4.aboveActionBarChildrenContainer;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function FocusedControlsAboveActionBarView(positionY) {
  let isExpanded;
  let items;
  let items1;
  let onPressHeader;
  let tmp6;
  let tmp7;
  positionY = positionY.positionY;
  const offsetY = positionY.offsetY;
  const aboveActionBar = positionY.aboveActionBar;
  ({ onPressHeader, isExpanded } = positionY);
  const tmp = closure_19();
  let obj = positionY(4810);
  const fn = function h() {
    const obj = { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c16), 0) };
    return obj;
  };
  const obj2 = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
  fn.__closure = obj2;
  fn.__workletHash = 15125248924641;
  fn.__initData = __initData6;
  const obj3 = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: { expanded: isExpanded }, children: tmp6(tmp7, obj4) };
  obj4 = { style: tmp.aboveActionBarContainer, children: items };
  const animatedStyle = obj.useAnimatedStyle(fn);
  items = [closure_13(closure_27, { positionY }), closure_13(positionY(6833).ActionSheetHeaderBar, {}), ];
  let tmp4Result = null != aboveActionBar;
  const tmp5 = closure_6;
  tmp6 = closure_14;
  tmp7 = closure_5;
  if (tmp4Result) {
    obj5 = { style: items1, children: aboveActionBar };
    items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    tmp4Result = tmp4(offsetY(4810).View, obj5);
  }
  items[2] = tmp4Result;
  return closure_13(tmp5, obj3);
});
const __initData7 = { code: "function FocusedControlsBottomControlsTsx7(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}" };
const __initData8 = { code: "function FocusedControlsBottomControlsTsx8(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;const openDrawer=function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);};const closeDrawer=function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();};if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else{if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else{if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}}}" };
const __initData9 = { code: "function FocusedControlsBottomControlsTsx9(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}" };
const __initData10 = { code: "function FocusedControlsBottomControlsTsx10(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}" };
const __initData11 = { code: "function FocusedControlsBottomControlsTsx11(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}" };
const __initData12 = { code: "function FocusedControlsBottomControlsTsx12(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}" };
const __initData13 = { code: "function FocusedControlsBottomControlsTsx13(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}" };
const __initData14 = { code: "function FocusedControlsBottomControlsTsx14(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDrawerGesture(controlMaxHeight) {
  let portraitOffsetY;
  let tmp = controlMaxHeight;
  let tmp2 = portraitOffsetY;
  let obj = controlMaxHeight(portraitOffsetY[13]);
  const cResult = obj.c(14);
  controlMaxHeight = controlMaxHeight.controlMaxHeight;
  const isLandscapeMode = controlMaxHeight.isLandscapeMode;
  portraitOffsetY = controlMaxHeight.portraitOffsetY;
  const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
  const onClose = controlMaxHeight.onClose;
  const onOpen = controlMaxHeight.onOpen;
  let tmp4 = landscapeOffsetY(onClose.useState(false), 2);
  const first = tmp4[0];
  let closure_7 = tmp4[1];
  let obj2 = controlMaxHeight(portraitOffsetY[15]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = controlMaxHeight(portraitOffsetY[15]);
  const fn = function s() {
    let diff;
    if (isLandscapeMode) {
      diff = tmp - landscapeOffsetY;
    } else {
      diff = tmp - portraitOffsetY;
    }
    return diff;
  };
  fn.__closure = { isLandscapeMode, controlMaxHeight, landscapeOffsetY, portraitOffsetY };
  fn.__workletHash = 16220091635392;
  fn.__initData = __initData7;
  const derivedValue = obj3.useDerivedValue(fn);
  obj4 = controlMaxHeight(portraitOffsetY[15]);
  const sharedValue1 = obj4.useSharedValue(0);
  obj5 = controlMaxHeight(portraitOffsetY[15]);
  const sharedValue2 = obj5.useSharedValue(false);
  let obj6 = controlMaxHeight(portraitOffsetY[15]);
  const sharedValue3 = obj6.useSharedValue(0);
  if (cResult[0] === derivedValue) {
    let tmp11;
    if (cResult[1] === sharedValue) {
      tmp11 = cResult[2];
    }
    if (cResult[3] === first) {
      let tmp12;
      if (cResult[4] === onOpen) {
        tmp12 = cResult[5];
      }
      let closure_13 = tmp12;
      if (cResult[6] === first) {
        let tmp13;
        if (cResult[7] === onClose) {
          tmp13 = cResult[8];
        }
        let closure_14 = tmp13;
        const Gesture = tmp(tmp2[21]).Gesture;
        const PanResult = Gesture.Pan();
        class W {
          constructor() {
            const obj = ReanimatedRexport;
            obj.runOnJS(metroImportAll)();
            const result = sharedValue2.set(0 !== sharedValue.get());
            const result1 = sharedValue3.set(0);
            const tmp4 = null != sharedValue.get() && sharedValue2.get();
            if (!tmp4) {
              const result2 = sharedValue1.set(0);
            }
          }
        }
        let obj7 = { runOnJS: tmp(tmp2[15]).runOnJS, clearFocusTimer: sharedValue, drawerOpen: sharedValue2, positionY: sharedValue, CLOSE_DRAWER_POSITION: 0, velocity: sharedValue3, startY: sharedValue1 };
        const onStart = PanResult.onStart;
        W.__closure = obj7;
        W.__workletHash = 3178907529318;
        W.__initData = __initData10;
        const onStartResult = onStart(W);
        class G {
          constructor(velocityY) {
            const result = sharedValue3.set(velocityY.velocityY);
            const result1 = -1 * sharedValue.get();
            const tmp2 = sharedValue;
            if (result1 <= derivedValue.get() + 16) {
              set = tmp2.set;
              let num = sharedValue1.get();
              if (num == null) {
                num = 0;
              }
              const result2 = set(num + velocityY.translationY);
            }
          }
        }
        let obj8 = { velocity: sharedValue3, positionY: sharedValue, maxHeight: derivedValue, startY: sharedValue1 };
        G.__closure = obj8;
        G.__workletHash = 8306201926624;
        G.__initData = __initData9;
        const onUpdateResult = onStartResult.onUpdate(G);
        class M {
          constructor() {
            obj = closure_11;
            value = closure_11.get();
            tmp2 = closure_8;
            result = -1 * closure_8.get();
            result1 = closure_9.get() / 2;
            obj2 = closure_12;
            num = closure_12.get();
            if (num == null) {
              num = 0;
            }
            tmp6 = c15;
            result2 = -1 * num;
            num2 = obj2.get();
            if (num2 == null) {
              num2 = 0;
            }
            tmp7 = num2 >= tmp6;
            openDrawer = function openDrawer() {
              const obj = controlMaxHeight(portraitOffsetY[15]);
              obj.runOnJS(closure_1_13)();
              const result = sharedValue1.set(-derivedValue.get());
              const obj2 = controlMaxHeight(portraitOffsetY[20]);
              const result1 = set(obj2.withTiming(sharedValue1.get(), obj4));
              const result2 = sharedValue2.set(true);
              const obj3 = controlMaxHeight(portraitOffsetY[15]);
              const runOnJSResult = obj3.runOnJS(isLandscapeMode(portraitOffsetY[22]).acknowledgeTooltip);
              runOnJSResult(controlMaxHeight(portraitOffsetY[17]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
            };
            if (result2 < tmp6) {
              if (result1 <= result) {
                return;
              }
              if (!tmp8) {
                if (tmp7) {
                }
                if (result1 <= result) {
                  openDrawerResult = openDrawer();
                } else {
                  tmp22 = closure_10;
                  result3 = closure_10.set(0);
                  tmp24 = closure_0;
                  tmp25 = closure_2;
                  set2 = tmp2.set;
                  obj6 = closure_0(closure_2[20]);
                  tmp26 = closure_21;
                  set2Result = set2(obj6.withTiming(0, closure_21));
                  flag2 = false;
                  result4 = obj.set(false);
                  obj7 = closure_0(closure_2[15]);
                  tmp29 = resetFocusTimer;
                  tmp30 = obj7.runOnJS(resetFocusTimer)();
                  obj8 = closure_0(closure_2[15]);
                  tmp31 = closure_14;
                  tmp32 = obj8.runOnJS(closure_14)();
                }
              }
              tmp11 = closure_10;
              result5 = closure_10.set(0);
              tmp13 = closure_0;
              tmp14 = closure_2;
              set = tmp2.set;
              obj3 = closure_0(closure_2[20]);
              tmp15 = closure_21;
              result6 = set(obj3.withTiming(0, closure_21));
              flag = false;
              result7 = obj.set(false);
              obj4 = closure_0(closure_2[15]);
              tmp18 = resetFocusTimer;
              tmp19 = obj4.runOnJS(resetFocusTimer)();
              obj5 = closure_0(closure_2[15]);
              tmp20 = closure_14;
              tmp21 = obj5.runOnJS(closure_14)();
            }
            openDrawerResult1 = openDrawer();
            return;
          }
        }
        const onEnd = onUpdateResult.onEnd;
        M.__closure = { drawerOpen: sharedValue2, positionY: sharedValue, maxHeight: derivedValue, velocity: sharedValue3, MIN_GESTURE_TRIGGER_VELOCITY, CLOSE_DRAWER_POSITION: 0, runOnJS: tmp(tmp2[15]).runOnJS, handleOpen: tmp12, startY: sharedValue1, withTiming: tmp(tmp2[20]).withTiming, TIMING_CONFIG: obj4, TooltipActionCreators: isLandscapeMode(tmp2[22]), TooltipNames: tmp(tmp2[17]).TooltipNames, TIMING_CONFIG_EXIT: obj5, resetFocusTimer: derivedValue, handleClose: tmp13 };
        M.__workletHash = 15112485511884;
        M.__initData = __initData8;
        const obj9 = { drawerOpen: sharedValue2, positionY: sharedValue, maxHeight: derivedValue, velocity: sharedValue3, MIN_GESTURE_TRIGGER_VELOCITY, CLOSE_DRAWER_POSITION: 0, runOnJS: tmp(tmp2[15]).runOnJS, handleOpen: tmp12, startY: sharedValue1, withTiming: tmp(tmp2[20]).withTiming, TIMING_CONFIG: obj4, TooltipActionCreators: isLandscapeMode(tmp2[22]), TooltipNames: tmp(tmp2[17]).TooltipNames, TIMING_CONFIG_EXIT: obj5, resetFocusTimer: derivedValue, handleClose: tmp13 };
        const onEndResult = onEnd(M);
        if (cResult[9] === onEndResult) {
          if (cResult[10] === first) {
            if (cResult[11] === sharedValue) {
              let tmp26;
              if (cResult[12] === tmp11) {
                tmp26 = cResult[13];
              }
              return tmp26;
            }
          }
        }
        const items = [sharedValue, onEndResult, tmp11, first];
        cResult[9] = onEndResult;
        cResult[10] = first;
        cResult[11] = sharedValue;
        cResult[12] = tmp11;
        cResult[13] = items;
        tmp26 = items;
      }
      function handleClose() {
        const tmp = first;
        if (tmp) {
          if (onClose != null) {
            tmp2();
          }
          closure_7(false);
        }
      }
      cResult[6] = first;
      cResult[7] = onClose;
      cResult[8] = handleClose;
      tmp13 = handleClose;
    }
    function handleOpen() {
      const tmp = first;
      if (!tmp) {
        if (onOpen != null) {
          tmp2();
        }
        closure_7(true);
      }
    }
    let num = 3;
    let num2 = 4;
    cResult[4] = onOpen;
    cResult[5] = handleOpen;
    tmp12 = handleOpen;
  }
  const fn2 = function l() {
    let num = 0;
    const tmp2 = 0 !== sharedValue.get();
    const tmp = sharedValue;
    if (!tmp2) {
      num = -derivedValue.get();
    }
    set = tmp.set;
    const obj = timing;
    const result = set(obj.withTiming(num, obj4));
    if (tmp2) {
      derivedValue();
    } else {
      metroImportAll();
    }
    closure_7(!tmp2);
  };
  cResult[0] = derivedValue;
  cResult[1] = sharedValue;
  cResult[2] = fn2;
  tmp11 = fn2;
}) : (function useDrawerGesture(controlMaxHeight) {
  let closure_5;
  let react;
  controlMaxHeight = controlMaxHeight.controlMaxHeight;
  const isLandscapeMode = controlMaxHeight.isLandscapeMode;
  const portraitOffsetY = controlMaxHeight.portraitOffsetY;
  const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
  ({ onClose: react, onOpen: closure_5 } = controlMaxHeight);
  let derivedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  function handleOpen() {
    const tmp = first;
    if (!tmp) {
      if (height != null) {
        tmp2();
      }
      closure_7(true);
    }
  }
  function handleClose() {
    const tmp = first;
    if (tmp) {
      if (width != null) {
        tmp2();
      }
      closure_7(false);
    }
  }
  let tmp = landscapeOffsetY(react.useState(false), 2);
  const first = tmp[0];
  let closure_7 = tmp[1];
  let obj = controlMaxHeight(portraitOffsetY[15]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = controlMaxHeight(portraitOffsetY[15]);
  class O {
    constructor() {
      let diff;
      if (isLandscapeMode) {
        diff = tmp - landscapeOffsetY;
      } else {
        diff = tmp - portraitOffsetY;
      }
      return diff;
    }
  }
  O.__closure = { isLandscapeMode, controlMaxHeight, landscapeOffsetY, portraitOffsetY };
  O.__workletHash = 9835520937079;
  O.__initData = __initData11;
  derivedValue = obj2.useDerivedValue(O);
  let obj3 = controlMaxHeight(portraitOffsetY[15]);
  sharedValue1 = obj3.useSharedValue(0);
  obj4 = controlMaxHeight(portraitOffsetY[15]);
  sharedValue2 = obj4.useSharedValue(false);
  obj5 = controlMaxHeight(portraitOffsetY[15]);
  sharedValue3 = obj5.useSharedValue(0);
  const items = [sharedValue, derivedValue];
  const callback = react.useCallback(() => {
    let num = 0;
    const tmp2 = 0 !== sharedValue.get();
    const tmp = sharedValue;
    if (!tmp2) {
      num = -derivedValue.get();
    }
    set = tmp.set;
    const obj = timing;
    const result = set(obj.withTiming(num, obj4));
    if (tmp2) {
      derivedValue();
    } else {
      metroImportAll();
    }
    closure_7(!tmp2);
  }, items);
  const Gesture = controlMaxHeight(portraitOffsetY[21]).Gesture;
  const PanResult = Gesture.Pan();
  class N {
    constructor() {
      const obj = ReanimatedRexport;
      obj.runOnJS(metroImportAll)();
      const result = sharedValue2.set(0 !== sharedValue.get());
      const result1 = sharedValue3.set(0);
      const tmp4 = null != sharedValue.get() && sharedValue2.get();
      if (!tmp4) {
        const result2 = sharedValue1.set(0);
      }
    }
  }
  let obj6 = { runOnJS: controlMaxHeight(portraitOffsetY[15]).runOnJS, clearFocusTimer: sharedValue, drawerOpen: sharedValue2, positionY: sharedValue, CLOSE_DRAWER_POSITION: 0, velocity: sharedValue3, startY: sharedValue1 };
  N.__closure = obj6;
  N.__workletHash = 535397777506;
  N.__initData = __initData14;
  const onStartResult = PanResult.onStart(N);
  class H {
    constructor(velocityY) {
      const result = sharedValue3.set(velocityY.velocityY);
      const result1 = -1 * sharedValue.get();
      const tmp2 = sharedValue;
      if (result1 <= derivedValue.get() + 16) {
        set = tmp2.set;
        let num = sharedValue1.get();
        if (num == null) {
          num = 0;
        }
        const result2 = set(num + velocityY.translationY);
      }
    }
  }
  H.__closure = { velocity: sharedValue3, positionY: sharedValue, maxHeight: derivedValue, startY: sharedValue1 };
  H.__workletHash = 2475240610523;
  H.__initData = __initData13;
  const fn = function b() {
    let obj = sharedValue2;
    const value = sharedValue2.get();
    let result = -1 * sharedValue.get();
    let result1 = derivedValue.get() / 2;
    let obj2 = sharedValue3;
    let num = sharedValue3.get();
    if (num == null) {
      num = 0;
    }
    let result2 = -1 * num;
    let num2 = obj2.get();
    if (num2 == null) {
      num2 = 0;
    }
    function openDrawer() {
      const obj = controlMaxHeight(portraitOffsetY[15]);
      obj.runOnJS(handleOpen)();
      const result = sharedValue1.set(-derivedValue.get());
      const obj2 = controlMaxHeight(portraitOffsetY[20]);
      const result1 = set(obj2.withTiming(sharedValue1.get(), obj4));
      const result2 = sharedValue2.set(true);
      const obj3 = controlMaxHeight(portraitOffsetY[15]);
      const runOnJSResult = obj3.runOnJS(isLandscapeMode(portraitOffsetY[22]).acknowledgeTooltip);
      runOnJSResult(controlMaxHeight(portraitOffsetY[17]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
    }
    if (result2 < c15) {
      if (!tmp8) {
        if (result1 <= result) {
          openDrawer();
        } else {
          const result3 = sharedValue1.set(0);
          set2 = sharedValue.set;
          const obj6 = timing;
          set2(obj6.withTiming(0, obj5));
          const result4 = obj.set(false);
          const obj7 = ReanimatedRexport;
          obj7.runOnJS(c9)();
          const obj8 = ReanimatedRexport;
          obj8.runOnJS(handleClose)();
        }
      }
      const result5 = sharedValue1.set(0);
      set = tmp2.set;
      let obj3 = timing;
      const result6 = set(obj3.withTiming(0, obj5));
      const result7 = obj.set(false);
      obj4 = ReanimatedRexport;
      obj4.runOnJS(c9)();
      obj5 = ReanimatedRexport;
      obj5.runOnJS(handleClose)();
    }
    openDrawer();
  };
  const onUpdateResult = onStartResult.onUpdate(H);
  let obj7 = { drawerOpen: sharedValue2, positionY: sharedValue, maxHeight: derivedValue, velocity: sharedValue3, MIN_GESTURE_TRIGGER_VELOCITY, CLOSE_DRAWER_POSITION: 0, runOnJS: controlMaxHeight(portraitOffsetY[15]).runOnJS, handleOpen, startY: sharedValue1, withTiming: controlMaxHeight(portraitOffsetY[20]).withTiming, TIMING_CONFIG: obj4, TooltipActionCreators: isLandscapeMode(portraitOffsetY[22]), TooltipNames: controlMaxHeight(portraitOffsetY[17]).TooltipNames, TIMING_CONFIG_EXIT: obj5, resetFocusTimer: derivedValue, handleClose };
  fn.__closure = obj7;
  fn.__workletHash = 14860505928213;
  fn.__initData = __initData12;
  const items1 = [sharedValue, onUpdateResult.onEnd(fn), callback, first];
  return items1;
});
const __initData15 = { code: "function FocusedControlsBottomControlsTsx15(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:\"absolute\",height:sheetHeight,overflow:\"hidden\",bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}" };
const __initData16 = { code: "function FocusedControlsBottomControlsTsx16(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}" };
const __initData17 = { code: "function FocusedControlsBottomControlsTsx17(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}" };
const __initData18 = { code: "function FocusedControlsBottomControlsTsx18(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedControlsBottomDrawer(onDrawerOpen) {
  let aboveActionBar;
  let actionBarControlsHeight;
  let bottom;
  let children;
  let closure_3;
  let diff2;
  let expandedControls;
  let items2;
  let onDrawerClose;
  let reveal;
  let right;
  let tmp = reveal;
  let obj = reveal(right[13]);
  const cResult = obj.c(60);
  ({ children, expandedControls, actionBarControlsHeight, reveal } = onDrawerOpen);
  ({ aboveActionBar, onDrawerClose } = onDrawerOpen);
  onDrawerOpen = onDrawerOpen.onDrawerOpen;
  const tmp4 = closure_19();
  const tmp6 = onDrawerClose(right[14])();
  ({ bottom, right } = tmp6);
  const top = tmp6.top;
  size = onDrawerClose(right[23])();
  height = size.height;
  _slicedToArray = tmp7;
  const tmp8 = onDrawerClose(right[24])();
  width = tmp8;
  let bound = height;
  if (size.width > closure_10) {
    const _Math = Math;
    bound = Math.min(closure_11, height);
  }
  let sum = actionBarControlsHeight;
  if (size.width <= closure_10) {
    sum = actionBarControlsHeight + bottom;
  }
  let closure_6 = sum;
  const diff = bound - sum;
  let closure_7 = diff;
  const diff1 = bound - sum;
  if (size.width > closure_10) {
    if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
      let num3 = 54;
      diff2 = diff1 - (top + 54 + 12);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
    let num = 54;
    const sum1 = top + 54;
    let num2 = 16;
    const tmpResult = tmp(right[7]);
    if (tmpResult.isIOS()) {
      num2 = 48;
    }
    diff2 = diff1 - (sum1 + num2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
    let tmp21;
    let tmp24;
    let num5 = 54;
    const sum2 = top + 54;
    let num7 = 16;
    const tmpResult5 = tmp(right[7]);
    if (tmpResult5.isIOS()) {
      num7 = 48;
    }
    const sum3 = sum2 + num7 + bottom;
    if (cResult[0] !== top) {
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
        const sum4 = top + 54 + 12;
        cResult[0] = top;
        cResult[1] = sum4;
        tmp21 = sum4;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      tmp21 = cResult[1];
    }
    if (cResult[2] !== onDrawerClose) {
      const fn = function l() {
        let tmp;
        if (onDrawerClose != null) {
          tmp = onDrawerClose();
        }
        return tmp;
      };
      cResult[2] = onDrawerClose;
      cResult[3] = fn;
      tmp24 = fn;
    } else {
      tmp24 = cResult[3];
    }
    if (cResult[4] === size.width > closure_10) {
      if (cResult[5] === diff) {
        if (cResult[6] === onDrawerOpen) {
          if (cResult[7] === sum3) {
            if (cResult[8] === tmp21) {
              let tmp25;
              let tmp37;
              if (cResult[9] === tmp24) {
                tmp25 = cResult[10];
              }
              const tmp28 = _slicedToArray(closure_39(tmp25), 4);
              const positionY = tmp28[0];
              let closure_9 = tmp31;
              const tmpResult6 = tmp(right[15]);
              class X {
                constructor() {
                  let items;
                  let num2;
                  let num3;
                  let num5;
                  let obj3;
                  let num = 0;
                  if (!reveal) {
                    num = closure_6;
                  }
                  size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                  num2 = 0;
                  if (closure_3) {
                    num2 = 16;
                  }
                  num3 = 0;
                  if (closure_3) {
                    num3 = 16 + right;
                  }
                  num5 = 0;
                  if (closure_3) {
                    num5 = 8;
                  }
                  const obj = { translateY: obj3.withTiming(num, obj4) };
                  items = [obj];
                  obj3 = timing;
                  return size;
                }
              }
              const obj2 = { reveal, controlHeightWithOffset: sum, sheetHeight: bound, isLandscapeMode: size.width > closure_10, safeAreaRight: right, sheetWidth: tmp8, withTiming: tmp(tmp2[20]).withTiming, TIMING_CONFIG: obj4 };
              const useAnimatedStyle = tmpResult6.useAnimatedStyle;
              X.__closure = obj2;
              X.__workletHash = 1100882862174;
              X.__initData = __initData15;
              const animatedStyle = useAnimatedStyle(X);
              if (cResult[11] !== positionY) {
                const fn2 = function $() {
                  set = first.set;
                  const obj = timing;
                  const result = set(obj.withTiming(0, obj5));
                };
                cResult[11] = positionY;
                cResult[12] = fn2;
                tmp37 = fn2;
              } else {
                tmp37 = cResult[12];
              }
              if (cResult[13] === size.width > closure_10) {
                let tmp38;
                if (cResult[14] === positionY) {
                  tmp38 = cResult[15];
                }
                const effect = width.useEffect(tmp37, tmp38);
                if (cResult[16] === positionY) {
                  let tmp40;
                  let tmp41;
                  let tmp44;
                  let tmp43;
                  let tmp49;
                  let tmp48;
                  if (cResult[17] === reveal) {
                    tmp40 = cResult[18];
                    tmp41 = cResult[19];
                  }
                  const effect1 = obj6.useEffect(tmp40, tmp41);
                  if (cResult[20] !== positionY) {
                    function ee() {
                      function handleSelectActivity() {
                        const obj = reveal(right[20]);
                        const result = set(obj.withTiming(0, obj5));
                      }
                      let ComponentDispatch = reveal(right[25]).ComponentDispatch;
                      const subscription = ComponentDispatch.subscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
                      return () => {
                        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
                      };
                    }
                    let items = [positionY];
                    class K {
                      constructor() {
                        const tmp = reveal;
                        if (tmp) {
                          const result = first.set(0);
                        }
                      }
                    }
                    cResult[21] = items;
                    cResult[22] = ee;
                    tmp44 = ee;
                    tmp43 = items;
                  } else {
                    tmp43 = cResult[21];
                    tmp44 = cResult[22];
                  }
                  const effect2 = obj6.useEffect(tmp44, tmp43);
                  class K {
                    constructor() {
                      const tmp = reveal;
                      if (tmp) {
                        const result = first.set(0);
                      }
                    }
                  }
                  function le() {
                    let items;
                    const obj = { height: bound, transform: items };
                    items = [{ translateY: closure_7 + first.get() }];
                    ({ translateY: closure_7 + first.get() });
                    return obj;
                  }
                  let obj3 = { sheetHeight: bound, offsetY: diff, positionY };
                  le.__closure = obj3;
                  class X {
                    constructor() {
                      let items;
                      let num2;
                      let num3;
                      let num5;
                      let obj3;
                      let num = 0;
                      if (!reveal) {
                        num = closure_6;
                      }
                      size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                      num2 = 0;
                      if (closure_3) {
                        num2 = 16;
                      }
                      num3 = 0;
                      if (closure_3) {
                        num3 = 16 + right;
                      }
                      num5 = 0;
                      if (closure_3) {
                        num5 = 8;
                      }
                      const obj = { translateY: obj3.withTiming(num, obj4) };
                      items = [obj];
                      obj3 = timing;
                      return size;
                    }
                  }
                  le.__initData = __initData16;
                  const animatedStyle1 = obj7.useAnimatedStyle(le);
                  if (cResult[23] !== tmp28[2]) {
                    function ce() {
                      let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                      const subscription = ComponentDispatch.subscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
                      return () => {
                        const ComponentDispatch = reveal(right[25]).ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
                      };
                    }
                    const items1 = [tmp28[2]];
                    class K {
                      constructor() {
                        const tmp = reveal;
                        if (tmp) {
                          const result = first.set(0);
                        }
                      }
                    }
                    cResult[24] = ce;
                    cResult[25] = items1;
                    tmp49 = items1;
                    tmp48 = ce;
                  } else {
                    tmp48 = cResult[24];
                    tmp49 = cResult[25];
                  }
                  const effect3 = obj6.useEffect(tmp48, tmp49);
                  const tmpResult7 = tmp(right[26]);
                  const theme = tmpResult7.useThemeContext().theme;
                  if (cResult[26] === animatedStyle1) {
                    let tmp51;
                    if (cResult[27] === tmp4.bottomDrawerContainer) {
                      tmp51 = cResult[28];
                    }
                    if (cResult[29] === tmp4.visualEffectViewBackground) {
                      let tmp52;
                      if (cResult[30] === theme) {
                        tmp52 = cResult[31];
                      }
                      if (cResult[32] === tmp4.visualEffectView) {
                        let tmp55;
                        if (cResult[33] === tmp52) {
                          tmp55 = cResult[34];
                        }
                        if (cResult[35] === tmp55) {
                          let tmp56;
                          if (cResult[36] === theme) {
                            tmp56 = cResult[37];
                          }
                          if (cResult[38] === aboveActionBar) {
                            if (cResult[39] === tmp28[3]) {
                              if (cResult[40] === diff) {
                                if (cResult[41] === positionY) {
                                  let tmp59;
                                  if (cResult[42] === tmp28[2]) {
                                    tmp59 = cResult[43];
                                  }
                                  if (cResult[44] === diff2) {
                                    if (cResult[45] === expandedControls) {
                                      let tmp64;
                                      if (cResult[46] === positionY) {
                                        tmp64 = cResult[47];
                                      }
                                      if (cResult[48] === children) {
                                        if (cResult[49] === tmp51) {
                                          if (cResult[50] === tmp56) {
                                            if (cResult[51] === tmp59) {
                                              let tmp69;
                                              if (cResult[52] === tmp64) {
                                                tmp69 = cResult[53];
                                              }
                                              if (cResult[54] === tmp28[1]) {
                                                if (cResult[57] === animatedStyle) {
                                                  let tmp75;
                                                  if (cResult[58] === tmp72) {
                                                    tmp75 = cResult[59];
                                                  }
                                                  return tmp75;
                                                }
                                                obj4 = { style: null, pointerEvents: "box-none", children: tmp72 };
                                                class K {
                                                  constructor() {
                                                    const tmp = reveal;
                                                    if (tmp) {
                                                      const result = first.set(0);
                                                    }
                                                  }
                                                }
                                                cResult[57] = animatedStyle;
                                                cResult[58] = tmp72;
                                                const tmp77 = closure_13(onDrawerClose(right[15]).View, obj4);
                                                class X {
                                                  constructor() {
                                                    let items;
                                                    let num2;
                                                    let num3;
                                                    let num5;
                                                    let obj3;
                                                    let num = 0;
                                                    if (!reveal) {
                                                      num = closure_6;
                                                    }
                                                    size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                                                    num2 = 0;
                                                    if (closure_3) {
                                                      num2 = 16;
                                                    }
                                                    num3 = 0;
                                                    if (closure_3) {
                                                      num3 = 16 + right;
                                                    }
                                                    num5 = 0;
                                                    if (closure_3) {
                                                      num5 = 8;
                                                    }
                                                    const obj = { translateY: obj3.withTiming(num, obj4) };
                                                    items = [obj];
                                                    obj3 = timing;
                                                    return size;
                                                  }
                                                }
                                                tmp75 = tmp77;
                                              }
                                              obj5 = { gesture: null, children: tmp69 };
                                              class K {
                                                constructor() {
                                                  const tmp = reveal;
                                                  if (tmp) {
                                                    const result = first.set(0);
                                                  }
                                                }
                                              }
                                              cResult[54] = tmp28[1];
                                              cResult[55] = tmp69;
                                              cResult[56] = closure_13(tmp(right[21]).GestureDetector, obj5);
                                              closure_13(tmp(right[21]).GestureDetector, obj5);
                                              class X {
                                                constructor() {
                                                  let items;
                                                  let num2;
                                                  let num3;
                                                  let num5;
                                                  let obj3;
                                                  let num = 0;
                                                  if (!reveal) {
                                                    num = closure_6;
                                                  }
                                                  size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                                                  num2 = 0;
                                                  if (closure_3) {
                                                    num2 = 16;
                                                  }
                                                  num3 = 0;
                                                  if (closure_3) {
                                                    num3 = 16 + right;
                                                  }
                                                  num5 = 0;
                                                  if (closure_3) {
                                                    num5 = 8;
                                                  }
                                                  const obj = { translateY: obj3.withTiming(num, obj4) };
                                                  items = [obj];
                                                  obj3 = timing;
                                                  return size;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj8 = { style: null, children: items2 };
                                      class K {
                                        constructor() {
                                          const tmp = reveal;
                                          if (tmp) {
                                            const result = first.set(0);
                                          }
                                        }
                                      }
                                      items2 = [tmp56, tmp59, children, tmp64];
                                      const tmp71 = closure_14(onDrawerClose(right[15]).View, obj8);
                                      class X {
                                        constructor() {
                                          let items;
                                          let num2;
                                          let num3;
                                          let num5;
                                          let obj3;
                                          let num = 0;
                                          if (!reveal) {
                                            num = closure_6;
                                          }
                                          size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                                          num2 = 0;
                                          if (closure_3) {
                                            num2 = 16;
                                          }
                                          num3 = 0;
                                          if (closure_3) {
                                            num3 = 16 + right;
                                          }
                                          num5 = 0;
                                          if (closure_3) {
                                            num5 = 8;
                                          }
                                          const obj = { translateY: obj3.withTiming(num, obj4) };
                                          items = [obj];
                                          obj3 = timing;
                                          return size;
                                        }
                                      }
                                      cResult[48] = children;
                                      cResult[49] = tmp51;
                                      cResult[50] = tmp56;
                                      cResult[51] = tmp59;
                                      cResult[52] = tmp64;
                                      cResult[53] = tmp71;
                                      tmp69 = tmp71;
                                    }
                                  }
                                  class K {
                                    constructor() {
                                      const tmp = reveal;
                                      if (tmp) {
                                        const result = first.set(0);
                                      }
                                    }
                                  }
                                  tmp67[0] = expandedControls;
                                  tmp67[1] = diff2;
                                  tmp67[2] = positionY;
                                  const tmp68 = closure_13(closure_24, tmp67);
                                  cResult[44] = diff2;
                                  class X {
                                    constructor() {
                                      let items;
                                      let num2;
                                      let num3;
                                      let num5;
                                      let obj3;
                                      let num = 0;
                                      if (!reveal) {
                                        num = closure_6;
                                      }
                                      size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                                      num2 = 0;
                                      if (closure_3) {
                                        num2 = 16;
                                      }
                                      num3 = 0;
                                      if (closure_3) {
                                        num3 = 16 + right;
                                      }
                                      num5 = 0;
                                      if (closure_3) {
                                        num5 = 8;
                                      }
                                      const obj = { translateY: obj3.withTiming(num, obj4) };
                                      items = [obj];
                                      obj3 = timing;
                                      return size;
                                    }
                                  }
                                  cResult[46] = positionY;
                                  cResult[47] = tmp68;
                                  tmp64 = tmp68;
                                }
                              }
                            }
                          }
                          class K {
                            constructor() {
                              const tmp = reveal;
                              if (tmp) {
                                const result = first.set(0);
                              }
                            }
                          }
                          tmp62[0] = tmp28[2];
                          tmp62[1] = aboveActionBar;
                          tmp62[2] = positionY;
                          tmp62[3] = diff;
                          tmp62[4] = tmp28[3];
                          const tmp63 = closure_13(closure_30, tmp62);
                          class X {
                            constructor() {
                              let items;
                              let num2;
                              let num3;
                              let num5;
                              let obj3;
                              let num = 0;
                              if (!reveal) {
                                num = closure_6;
                              }
                              size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                              num2 = 0;
                              if (closure_3) {
                                num2 = 16;
                              }
                              num3 = 0;
                              if (closure_3) {
                                num3 = 16 + right;
                              }
                              num5 = 0;
                              if (closure_3) {
                                num5 = 8;
                              }
                              const obj = { translateY: obj3.withTiming(num, obj4) };
                              items = [obj];
                              obj3 = timing;
                              return size;
                            }
                          }
                          cResult[39] = tmp28[3];
                          cResult[40] = diff;
                          cResult[41] = positionY;
                          cResult[42] = tmp28[2];
                          cResult[43] = tmp63;
                          tmp59 = tmp63;
                        }
                        const obj9 = { blurTheme: null, style: tmp55 };
                        class K {
                          constructor() {
                            const tmp = reveal;
                            if (tmp) {
                              const result = first.set(0);
                            }
                          }
                        }
                        cResult[35] = tmp55;
                        cResult[36] = theme;
                        const tmp58 = closure_13(onDrawerClose(right[28]), obj9);
                        class X {
                          constructor() {
                            let items;
                            let num2;
                            let num3;
                            let num5;
                            let obj3;
                            let num = 0;
                            if (!reveal) {
                              num = closure_6;
                            }
                            size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                            num2 = 0;
                            if (closure_3) {
                              num2 = 16;
                            }
                            num3 = 0;
                            if (closure_3) {
                              num3 = 16 + right;
                            }
                            num5 = 0;
                            if (closure_3) {
                              num5 = 8;
                            }
                            const obj = { translateY: obj3.withTiming(num, obj4) };
                            items = [obj];
                            obj3 = timing;
                            return size;
                          }
                        }
                        tmp56 = tmp58;
                      }
                      const items3 = [tmp4.visualEffectView, ];
                      class K {
                        constructor() {
                          const tmp = reveal;
                          if (tmp) {
                            const result = first.set(0);
                          }
                        }
                      }
                      cResult[32] = tmp4.visualEffectView;
                      cResult[33] = tmp52;
                      cResult[34] = items3;
                      tmp55 = items3;
                    }
                    tmp(right[27]);
                    class K {
                      constructor() {
                        const tmp = reveal;
                        if (tmp) {
                          const result = first.set(0);
                        }
                      }
                    }
                    cResult[29] = tmp4.visualEffectViewBackground;
                    cResult[30] = theme;
                    cResult[31] = null;
                    tmp52 = tmp54;
                  }
                  const items4 = [tmp4.bottomDrawerContainer, animatedStyle1];
                  cResult[26] = animatedStyle1;
                  cResult[27] = tmp4.bottomDrawerContainer;
                  cResult[28] = items4;
                  tmp51 = items4;
                }
                class K {
                  constructor() {
                    const tmp = reveal;
                    if (tmp) {
                      const result = first.set(0);
                    }
                  }
                }
                const items5 = [reveal, positionY];
                cResult[16] = positionY;
                cResult[17] = reveal;
                class X {
                  constructor() {
                    let items;
                    let num2;
                    let num3;
                    let num5;
                    let obj3;
                    let num = 0;
                    if (!reveal) {
                      num = closure_6;
                    }
                    size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
                    num2 = 0;
                    if (closure_3) {
                      num2 = 16;
                    }
                    num3 = 0;
                    if (closure_3) {
                      num3 = 16 + right;
                    }
                    num5 = 0;
                    if (closure_3) {
                      num5 = 8;
                    }
                    const obj = { translateY: obj3.withTiming(num, obj4) };
                    items = [obj];
                    obj3 = timing;
                    return size;
                  }
                }
                cResult[19] = items5;
                tmp41 = items5;
                tmp40 = K;
              }
              const items6 = [size.width > closure_10, positionY];
              cResult[13] = size.width > closure_10;
              cResult[14] = positionY;
              cResult[15] = items6;
              tmp38 = items6;
            }
          }
        }
      }
    }
    const obj10 = { controlMaxHeight: diff, isLandscapeMode: null, portraitOffsetY: sum3, landscapeOffsetY: tmp21, onClose: tmp24, onOpen: onDrawerOpen };
    cResult[4] = size.width > closure_10;
    cResult[5] = diff;
    cResult[6] = onDrawerOpen;
    cResult[7] = sum3;
    cResult[8] = tmp21;
    cResult[9] = tmp24;
    cResult[10] = obj10;
    tmp25 = obj10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function FocusedControlsBottomDrawer(onDrawerClose) {
  let GestureDetector;
  let View2;
  let aboveActionBar;
  let actionBarControlsHeight;
  let bottom;
  let children;
  let closure_3;
  let diff2;
  let expandedControls;
  let items4;
  let items5;
  let items6;
  let obj7;
  let obj8;
  let onDrawerOpen;
  let reveal;
  let right;
  let tmp40;
  ({ actionBarControlsHeight, reveal } = onDrawerClose);
  onDrawerClose = onDrawerClose.onDrawerClose;
  right = undefined;
  let c6;
  let c7;
  let positionY;
  let closure_9;
  ({ children, expandedControls, aboveActionBar, onDrawerOpen } = onDrawerClose);
  let tmp = closure_19();
  const tmp4 = onDrawerClose(right[14])();
  ({ bottom, right } = tmp4);
  const top = tmp4.top;
  size = onDrawerClose(right[23])();
  height = size.height;
  _slicedToArray = tmp5;
  const tmp6 = onDrawerClose(right[24])();
  width = tmp6;
  let bound = height;
  if (size.width > closure_10) {
    const _Math = Math;
    bound = Math.min(closure_11, height);
  }
  let sum = actionBarControlsHeight;
  if (size.width <= closure_10) {
    sum = actionBarControlsHeight + bottom;
  }
  c6 = sum;
  const diff = bound - sum;
  c7 = diff;
  const diff1 = bound - sum;
  if (size.width > closure_10) {
    if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
      let num3 = 54;
      diff2 = diff1 - (top + 54 + 12);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
    let num = 54;
    const sum1 = top + 54;
    let obj = reveal(tmp3[7]);
    let num2 = 16;
    if (obj.isIOS()) {
      num2 = 48;
    }
    diff2 = diff1 - (sum1 + num2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const obj2 = { controlMaxHeight: diff, isLandscapeMode: tmp5, portraitOffsetY: null, landscapeOffsetY: null, onClose: null, onOpen: null };
  if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
    let num5 = 54;
    const sum2 = top + 54;
    let obj3 = reveal(tmp3[7]);
    let num6 = 16;
    if (obj3.isIOS()) {
      num6 = 48;
    }
    obj2.portraitOffsetY = sum2 + num6 + bottom;
    if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
      obj2.landscapeOffsetY = top + 54 + 12;
      obj2.onClose = function onClose() {
        let tmp;
        if (onDrawerClose != null) {
          tmp = onDrawerClose();
        }
        return tmp;
      };
      obj2.onOpen = onDrawerOpen;
      const tmp23 = _slicedToArray(tmp18(obj2), 4);
      positionY = tmp23[0];
      closure_9 = tmp26;
      const fn = function p() {
        let items;
        let num2;
        let num3;
        let num5;
        let obj3;
        let num = 0;
        if (!reveal) {
          num = c6;
        }
        size = { position: "absolute", height: bound, overflow: "hidden", bottom: num2, right: num3, borderRadius: num5, width, transform: items };
        num2 = 0;
        if (closure_3) {
          num2 = 16;
        }
        num3 = 0;
        if (closure_3) {
          num3 = 16 + right;
        }
        num5 = 0;
        if (closure_3) {
          num5 = 8;
        }
        const obj = { translateY: obj3.withTiming(num, obj4) };
        items = [obj];
        obj3 = timing;
        return size;
      };
      const tmp25 = tmp23[1];
      const tmp27 = tmp23[3];
      obj4 = { reveal, controlHeightWithOffset: sum, sheetHeight: bound, isLandscapeMode: size.width > closure_10, safeAreaRight: right, sheetWidth: tmp6, withTiming: reveal(right[20]).withTiming, TIMING_CONFIG: obj4 };
      const useAnimatedStyle = reveal(right[15]).useAnimatedStyle;
      reveal(right[15]);
      fn.__closure = obj4;
      fn.__workletHash = 15679717820444;
      fn.__initData = __initData17;
      let items = [size.width > closure_10, positionY];
      const animatedStyle = useAnimatedStyle(fn);
      const effect = width.useEffect(() => {
        set = first.set;
        const obj = timing;
        const result = set(obj.withTiming(0, obj5));
      }, items);
      const items1 = [reveal, positionY];
      const effect1 = width.useEffect(() => {
        const tmp = reveal;
        if (tmp) {
          const result = first.set(0);
        }
      }, items1);
      const items2 = [positionY];
      const effect2 = width.useEffect(() => {
        function handleSelectActivity() {
          const obj = reveal(right[20]);
          const result = set(obj.withTiming(0, obj5));
        }
        let ComponentDispatch = reveal(right[25]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
        return () => {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
        };
      }, items2);
      const tmp20Result4 = reveal(right[15]);
      class U {
        constructor() {
          let items;
          const obj = { height: bound, transform: items };
          items = [{ translateY: c7 + first.get() }];
          ({ translateY: c7 + first.get() });
          return obj;
        }
      }
      obj5 = { sheetHeight: bound, offsetY: diff, positionY };
      U.__closure = obj5;
      U.__workletHash = 12567422561237;
      U.__initData = __initData18;
      const items3 = [tmp23[2]];
      const animatedStyle1 = tmp20Result4.useAnimatedStyle(U);
      const effect3 = width.useEffect(() => {
        let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
        return () => {
          const ComponentDispatch = reveal(right[25]).ComponentDispatch;
          ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
        };
      }, items3);
      const tmp20Result5 = reveal(right[26]);
      const theme = tmp20Result5.useThemeContext().theme;
      const obj6 = { style: animatedStyle, pointerEvents: "box-none", children: closure_13(GestureDetector, obj7) };
      const View = tmp2(tmp3[15]).View;
      obj7 = { gesture: tmp25, children: tmp40(View2, obj8) };
      GestureDetector = tmp20(tmp3[21]).GestureDetector;
      obj8 = { style: items4, children: items6 };
      items4 = [tmp.bottomDrawerContainer, animatedStyle1];
      View2 = tmp2(tmp3[15]).View;
      const obj9 = { blurTheme: theme, style: items5 };
      items5 = [tmp.visualEffectView, ];
      let prop = null;
      const tmp2Result = onDrawerClose(right[28]);
      const tmp20Result6 = reveal(right[27]);
      tmp40 = closure_14;
      if (tmp20Result6.isThemeLight(theme)) {
        prop = tmp.visualEffectViewBackground;
      }
      items5[1] = prop;
      items6 = [closure_13(tmp2Result, obj9), , , ];
      const obj10 = { onPressHeader: tmp23[2], aboveActionBar, positionY, offsetY: diff, isExpanded: tmp27 };
      items6[1] = closure_13(closure_30, obj10);
      items6[2] = children;
      const obj11 = { expandedControls, availableHeight: diff2, positionY };
      items6[3] = closure_13(closure_24, obj11);
      return closure_13(View, obj6);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_44 = tmp11;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedControlsBottomControls(arg0) {
  let actionBar;
  let children;
  let closure_129_0;
  let expandedControls;
  let first;
  let header;
  let items;
  let omitPTT;
  let onDrawerClose;
  let onDrawerOpen;
  let reveal;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(16);
  ({ children, actionBar, expandedControls, reveal, header, onDrawerClose, omitPTT, onDrawerOpen } = arg0);
  const tmp5 = closure_19();
  [tmp7, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== omitPTT && omitPTT)) {
    let tmp9;
    if (cResult[2] === tmp5) {
      tmp9 = cResult[3];
    }
    if (cResult[4] === actionBar) {
      if (cResult[5] === header) {
        let tmp16;
        if (cResult[6] === tmp9) {
          tmp16 = cResult[7];
        }
        if (cResult[8] === tmp7) {
          if (cResult[9] === children) {
            if (cResult[10] === expandedControls) {
              if (cResult[11] === onDrawerClose) {
                if (cResult[12] === onDrawerOpen) {
                  if (cResult[13] === reveal) {
                    let tmp20;
                    if (cResult[14] === tmp16) {
                      tmp20 = cResult[15];
                    }
                    return tmp20;
                  }
                }
              }
            }
          }
        }
        const obj2 = { aboveActionBar: children, actionBarControlsHeight: tmp7, expandedControls, reveal, onDrawerClose, onDrawerOpen, children: tmp16 };
        const tmp23 = map1(closure_44, obj2);
        cResult[8] = tmp7;
        cResult[9] = children;
        cResult[10] = expandedControls;
        cResult[11] = onDrawerClose;
        cResult[12] = onDrawerOpen;
        cResult[13] = reveal;
        cResult[14] = tmp16;
        cResult[15] = tmp23;
        tmp20 = tmp23;
      }
    }
    const obj3 = { onLayout: first, children: items };
    items = [header, actionBar, tmp9];
    const tmp19 = authStore2(hasOwnProperty, obj3);
    cResult[4] = actionBar;
    cResult[5] = header;
    cResult[6] = tmp9;
    cResult[7] = tmp19;
    tmp16 = tmp19;
  }
  let tmp10 = null;
  if (!(undefined !== omitPTT && omitPTT)) {
    obj4 = { look: CallPTTButton.CallPTTButtonLooks.BLUR, style: tmp5.ptbButton, sendCallback: metroImportAll, stopCallback };
    const tmp13 = CallPTTButtonDefault;
    tmp10 = map1(tmp13, obj4);
  }
  cResult[1] = undefined !== omitPTT && omitPTT;
  cResult[2] = tmp5;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : (function FocusedControlsBottomControls(omitPTT) {
  let actionBar;
  let c0;
  let children;
  let expandedControls;
  let header;
  let items;
  let obj2;
  let onDrawerClose;
  let reveal;
  let tmp3;
  let tmp6;
  let tmp7;
  let flag = omitPTT.omitPTT;
  ({ children, actionBar, expandedControls, reveal, header, onDrawerClose } = omitPTT);
  if (flag === undefined) {
    flag = false;
  }
  c0 = undefined;
  const onDrawerOpen = omitPTT.onDrawerOpen;
  const tmp = closure_19();
  [tmp3, c0] = react.useState(0);
  const obj = { aboveActionBar: children, actionBarControlsHeight: tmp3, expandedControls, reveal, onDrawerClose, onDrawerOpen, children: tmp6(tmp7, obj2) };
  _slicedToArray(react.useState(0), 2);
  obj2 = {
    onLayout: react.useCallback((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.height);
    }, []),
    children: items
  };
  items = [header, actionBar, ];
  let tmp4Result = null;
  const tmp5 = closure_44;
  tmp6 = authStore2;
  tmp7 = hasOwnProperty;
  if (!flag) {
    const obj3 = { look: CallPTTButton.CallPTTButtonLooks.BLUR, style: tmp.ptbButton, sendCallback: metroImportAll, stopCallback };
    const tmp11 = CallPTTButtonDefault;
    tmp4Result = tmp4(tmp11, obj3);
  }
  items[2] = tmp4Result;
  return map1(tmp5, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default tmp12;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export const FocusedControlsBottomDrawer = tmp11;
