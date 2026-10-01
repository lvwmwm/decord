// Module ID: 8969
// Function ID: 8970
// Name: FocusedControlsBottomControls
// Dependencies: [32, 19, 17, 8829, 8830, 1074, 21, 1364, 4836, 576, 5836, 1177, 1613, 4566, 8970, 1094, 1115, 6575, 4837, 6073, 8972, 1479, 8856, 1110, 4540, 5269, 4685, 8973, 2]
// Exports: default

// Module 8969 (FocusedControlsBottomControls)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import CallPTTButton from "CallPTTButton" /* 8973 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8830 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
const CallPTTButtonDefault = CallPTTButton;
let height, set, set2, width;

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
let unpackModuleId;
function FocusedControlsExpanded(availableHeight) {
  let closure_4;
  let items1;
  availableHeight = availableHeight.availableHeight;
  const positionY = availableHeight.positionY;
  let bottom;
  let scrollEnabled;
  width = undefined;
  const expandedControls = availableHeight.expandedControls;
  const tmp = closure_18();
  bottom = positionY(bottom[12])().bottom;
  const tmp2 = scrollEnabled(width.useState(false), 2);
  scrollEnabled = tmp2[0];
  width = tmp2[1];
  const items = [availableHeight, bottom, scrollEnabled];
  const callback = width.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      closure_4(nativeEvent.nativeEvent.layout.height > availableHeight - bottom);
    }
  }, items);
  let obj = availableHeight(bottom[13]);
  const fn = function _() {
    let str;
    const bound = Math.min(-1 * positionY.get() / c15, 1);
    const obj = { opacity: bound, pointerEvents: str };
    str = "auto";
    if (0 === bound) {
      str = "none";
    }
    return obj;
  };
  const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
  fn.__closure = obj2;
  fn.__workletHash = 10567472250823;
  fn.__initData = __initData;
  const obj3 = { style: { height: availableHeight }, children: closure_13(closure_7, obj4) };
  obj4 = { scrollEnabled, children: closure_13(positionY(bottom[13]).View, obj5) };
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj5 = { style: items1, onLayout: callback, children: expandedControls };
  items1 = [tmp.expandedControlsContainer, animatedStyle];
  return closure_13(closure_5, obj3);
}
function FocusedControlsBottomDrawerTooltip(positionY) {
  let Tooltip;
  let intl;
  let obj7;
  positionY = positionY.positionY;
  const tmp = closure_18();
  let obj = positionY(8970);
  const canShowTooltip = obj.useCanShowTooltip(positionY(1094).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  positionY(4566);
  const fn = function o() {
    const obj = { opacity: 1 - Math.min(-1 * positionY.get() / c15, 1) };
    return obj;
  };
  const obj2 = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
  fn.__closure = obj2;
  fn.__workletHash = 4429631762525;
  fn.__initData = __initData2;
  let tmp7 = null;
  if (canShowTooltip) {
    const obj3 = { style: tmp6, children: closure_13(Tooltip, obj7) };
    const View = ReanimatedRexportDefault.View;
    obj7 = { style: tmp.tooltipStyle, arrowPosition: positionY(1177).TooltipArrowPositions.CENTER, arrowDirection: positionY(1177).TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4, containerStyle: null, labelStyle: null, label: intl.string(positionY(1115).t.zYzy2i) };
    Tooltip = tmp2(1177).Tooltip;
    ({ containerStyle: obj4.containerStyle, labelStyle: obj4.labelStyle } = tmp);
    intl = tmp2(1115).intl;
    tmp7 = closure_13(View, obj3);
  }
  return tmp7;
}
function FocusedControlsAboveActionBarView(positionY) {
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
  const tmp = closure_18();
  let obj = positionY(4566);
  const fn = function _() {
    const obj = { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c15), 0) };
    return obj;
  };
  const obj2 = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
  fn.__closure = obj2;
  fn.__workletHash = 5042367101380;
  fn.__initData = __initData3;
  const obj3 = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: { expanded: isExpanded }, children: tmp6(tmp7, obj4) };
  obj4 = { style: tmp.aboveActionBarContainer, children: items };
  const animatedStyle = obj.useAnimatedStyle(fn);
  items = [closure_13(FocusedControlsBottomDrawerTooltip, { positionY }), closure_13(positionY(6575).ActionSheetHeaderBar, {}), ];
  let tmp4Result = null != aboveActionBar;
  const tmp5 = closure_6;
  tmp6 = closure_14;
  tmp7 = closure_5;
  if (tmp4Result) {
    obj5 = { style: items1, children: aboveActionBar };
    items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    tmp4Result = tmp4(offsetY(4566).View, obj5);
  }
  items[2] = tmp4Result;
  return closure_13(tmp5, obj3);
}
class FocusedControlsBottomDrawer {
  constructor(onDrawerClose) {
    let GestureDetector;
    let View2;
    let aboveActionBar;
    let actionBarControlsHeight;
    let bottom;
    let children;
    let closure_3;
    let closure_7;
    let closure_9;
    let diff2;
    let expandedControls;
    let first;
    let items6;
    let items7;
    let items8;
    let obj10;
    let obj11;
    let onDrawerOpen;
    let reveal;
    let right;
    let tmp58;
    ({ actionBarControlsHeight, reveal } = onDrawerClose);
    onDrawerClose = onDrawerClose.onDrawerClose;
    right = undefined;
    let c6;
    let c7;
    let first1;
    let resetFocusTimer;
    ({ children, expandedControls, aboveActionBar, onDrawerOpen } = onDrawerClose);
    let tmp = closure_18();
    let tmp2 = onDrawerClose;
    let tmp4 = onDrawerClose(right[12])();
    ({ bottom, right } = tmp4);
    const top = tmp4.top;
    size = onDrawerClose(right[21])();
    height = size.height;
    _slicedToArray = tmp5;
    const tmp6 = onDrawerClose(right[22])();
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
    let diff = bound - sum;
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
    if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
      let num5 = 54;
      const sum2 = top + 54;
      let obj2 = reveal(tmp3[7]);
      let num6 = 16;
      if (obj2.isIOS()) {
        num6 = 48;
      }
      const sum3 = sum2 + num6 + bottom;
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
        const sum4 = top + 54 + 12;
        let closure_1 = tmp5;
        function onClose() {
          let tmp;
          if (closure_1 != null) {
            tmp = closure_1();
          }
          return tmp;
        }
        first = undefined;
        closure_7 = undefined;
        let derivedValue;
        let sharedValue1;
        let sharedValue2;
        let sharedValue3;
        function handleOpen() {
          const tmp = first;
          if (!tmp) {
            if (onDrawerOpen != null) {
              tmp2();
            }
            closure_7(true);
          }
        }
        function handleClose() {
          const tmp = first;
          if (tmp) {
            if (onDrawerClose != null) {
              tmp2();
            }
            closure_7(false);
          }
        }
        [first, closure_7] = width.useState(false);
        const tmp19Result = reveal(right[13]);
        const sharedValue = tmp19Result.useSharedValue(0);
        const tmp19Result9 = reveal(right[13]);
        class O {
          constructor() {
            if (closure_1) {
              diff = tmp - sum4;
            } else {
              diff = tmp - sum3;
            }
            return diff;
          }
        }
        let obj3 = { isLandscapeMode: tmp5, controlMaxHeight: diff, landscapeOffsetY: sum4, portraitOffsetY: sum3 };
        O.__closure = obj3;
        O.__workletHash = 13346503100323;
        O.__initData = __initData4;
        derivedValue = tmp19Result9.useDerivedValue(O);
        const tmp19Result10 = reveal(right[13]);
        sharedValue1 = tmp19Result10.useSharedValue(0);
        const tmp19Result11 = reveal(right[13]);
        sharedValue2 = tmp19Result11.useSharedValue(false);
        const tmp19Result12 = reveal(right[13]);
        sharedValue3 = tmp19Result12.useSharedValue(0);
        let items = [sharedValue, derivedValue];
        const callback = width.useCallback(() => {
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
            React4();
          } else {
            metroImportAll();
          }
          closure_7(!tmp2);
        }, items);
        const Gesture = tmp19(tmp3[19]).Gesture;
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
        obj4 = { runOnJS: tmp19(tmp3[13]).runOnJS, clearFocusTimer: first1, drawerOpen: sharedValue2, positionY: sharedValue, CLOSE_DRAWER_POSITION: 0, velocity: sharedValue3, startY: sharedValue1 };
        const onStart = PanResult.onStart;
        N.__closure = obj4;
        N.__workletHash = 9674965708496;
        N.__initData = __initData7;
        const onStartResult = onStart(N);
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
        obj5 = { velocity: sharedValue3, positionY: sharedValue, maxHeight: derivedValue, startY: sharedValue1 };
        H.__closure = obj5;
        H.__workletHash = 16755118181071;
        H.__initData = __initData6;
        const onUpdateResult = onStartResult.onUpdate(H);
        class R {
          constructor() {
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
              const obj = reveal(right[13]);
              obj.runOnJS(handleOpen)();
              const result = sharedValue1.set(-derivedValue.get());
              const obj2 = reveal(right[18]);
              const result1 = set(obj2.withTiming(sharedValue1.get(), obj4));
              const result2 = sharedValue2.set(true);
              const obj3 = reveal(right[13]);
              const runOnJSResult = obj3.runOnJS(onDrawerClose(right[20]).acknowledgeTooltip);
              runOnJSResult(reveal(right[15]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
            }
            if (500 > result2) {
              if (!tmp7) {
                if (result1 <= result) {
                  openDrawer();
                } else {
                  const result3 = sharedValue1.set(0);
                  set2 = sharedValue.set;
                  const obj6 = timing;
                  set2(obj6.withTiming(0, obj5));
                  const result4 = obj.set(false);
                  const obj7 = ReanimatedRexport;
                  obj7.runOnJS(React4)();
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
              obj4.runOnJS(React4)();
              obj5 = ReanimatedRexport;
              obj5.runOnJS(handleClose)();
            }
            openDrawer();
          }
        }
        let obj6 = { drawerOpen: sharedValue2, positionY: sharedValue, maxHeight: derivedValue, velocity: sharedValue3, MIN_GESTURE_TRIGGER_VELOCITY: 500, CLOSE_DRAWER_POSITION: 0, runOnJS: tmp19(tmp3[13]).runOnJS, handleOpen, startY: sharedValue1, withTiming: tmp19(tmp3[18]).withTiming, TIMING_CONFIG: obj4, TooltipActionCreators: tmp2(tmp3[20]), TooltipNames: tmp19(tmp3[15]).TooltipNames, TIMING_CONFIG_EXIT: obj5, resetFocusTimer, handleClose };
        const onEnd = onUpdateResult.onEnd;
        R.__closure = obj6;
        R.__workletHash = 6790759206787;
        R.__initData = __initData5;
        const items1 = [sharedValue, onEnd(R), callback, first];
        const tmp43 = _slicedToArray(items1, 4);
        first1 = tmp43[0];
        resetFocusTimer = tmp46;
        const tmp45 = tmp43[1];
        const tmp47 = tmp43[3];
        const tmp19Result13 = reveal(right[13]);
        class C {
          constructor() {
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
          }
        }
        let obj7 = { reveal, controlHeightWithOffset: sum, sheetHeight: bound, isLandscapeMode: tmp5, safeAreaRight: right, sheetWidth: tmp6, withTiming: tmp19(tmp3[18]).withTiming, TIMING_CONFIG: obj4 };
        const useAnimatedStyle = tmp19Result13.useAnimatedStyle;
        C.__closure = obj7;
        C.__workletHash = 608185354082;
        C.__initData = __initData8;
        const items2 = [tmp5, first1];
        const animatedStyle = useAnimatedStyle(C);
        const effect = width.useEffect(() => {
          set = first1.set;
          const obj = timing;
          const result = set(obj.withTiming(0, obj5));
        }, items2);
        const items3 = [reveal, first1];
        const effect1 = width.useEffect(() => {
          const tmp = reveal;
          if (tmp) {
            const result = first1.set(0);
          }
        }, items3);
        const items4 = [first1];
        const effect2 = width.useEffect(() => {
          function handleSelectActivity() {
            const obj = reveal(right[18]);
            const result = set(obj.withTiming(0, obj5));
          }
          let ComponentDispatch = reveal(right[23]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
          return () => {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
          };
        }, items4);
        const tmp19Result14 = reveal(right[13]);
        class Z {
          constructor() {
            let items;
            const obj = { height: bound, transform: items };
            items = [{ translateY: c7 + first1.get() }];
            ({ translateY: c7 + first1.get() });
            return obj;
          }
        }
        let obj8 = { sheetHeight: bound, offsetY: diff, positionY: first1 };
        Z.__closure = obj8;
        Z.__workletHash = 4471821639301;
        Z.__initData = __initData9;
        const items5 = [tmp43[2]];
        const animatedStyle1 = tmp19Result14.useAnimatedStyle(Z);
        const effect3 = width.useEffect(() => {
          let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
          return () => {
            const ComponentDispatch = reveal(right[23]).ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
          };
        }, items5);
        const tmp19Result15 = reveal(right[24]);
        const theme = tmp19Result15.useThemeContext().theme;
        const obj9 = { style: animatedStyle, pointerEvents: "box-none", children: closure_13(GestureDetector, obj10) };
        const View = tmp2(tmp3[13]).View;
        obj10 = { gesture: tmp45, children: tmp58(View2, obj11) };
        GestureDetector = tmp19(tmp3[19]).GestureDetector;
        obj11 = { style: items6, children: items8 };
        items6 = [tmp.bottomDrawerContainer, animatedStyle1];
        View2 = tmp2(tmp3[13]).View;
        const obj12 = { blurTheme: theme, style: items7 };
        items7 = [tmp.visualEffectView, ];
        let prop = null;
        const tmp2Result = tmp2(right[25]);
        const tmp19Result16 = reveal(right[26]);
        tmp58 = closure_14;
        if (tmp19Result16.isThemeLight(theme)) {
          prop = tmp.visualEffectViewBackground;
        }
        items7[1] = prop;
        items8 = [closure_13(tmp2Result, obj12), , , ];
        const obj13 = { onPressHeader: tmp43[2], aboveActionBar, positionY: first1, offsetY: diff, isExpanded: tmp47 };
        items8[1] = closure_13(FocusedControlsAboveActionBarView, obj13);
        items8[2] = children;
        const obj14 = { expandedControls, availableHeight: diff2, positionY: first1 };
        items8[3] = closure_13(FocusedControlsExpanded, obj14);
        return closure_13(View, obj9);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, TouchableWithoutFeedback: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ clearFocusTimer: metroImportAll, resetFocusTimer: c9 } = ChannelCallStore);
({ BOX_MODE_THRESHOLD_WIDTH: c10, BOX_MODE_ACTIONSHEET_HEIGHT: unpackModuleId } = ChannelCallConstants);
({ ComponentActions: closure_12, Fonts } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let c15 = 20;
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
const authStore4 = createStyles(obj);
let obj4 = { easing: native.STANDARD_EASING, duration: 250 };
let obj5 = { easing: native.STANDARD_EASING, duration: 400 };
let __initData = { code: "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}" };
let __initData2 = { code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}" };
let __initData3 = { code: "function FocusedControlsBottomControlsTsx3(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}" };
const __initData4 = { code: "function FocusedControlsBottomControlsTsx4(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}" };
__initData = { code: "function FocusedControlsBottomControlsTsx5(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}" };
const __initData6 = { code: "function FocusedControlsBottomControlsTsx6(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}" };
__initData2 = { code: "function FocusedControlsBottomControlsTsx7(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}" };
const __initData8 = { code: "function FocusedControlsBottomControlsTsx8(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}" };
__initData3 = { code: "function FocusedControlsBottomControlsTsx9(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default function FocusedControlsBottomControls(omitPTT) {
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
  const tmp = closure_18();
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
  const tmp5 = FocusedControlsBottomDrawer;
  tmp6 = authStore2;
  tmp7 = hasOwnProperty;
  if (!flag) {
    const obj3 = { look: CallPTTButton.CallPTTButtonLooks.BLUR, style: tmp.ptbButton, sendCallback: metroImportAll, stopCallback };
    const tmp11 = CallPTTButtonDefault;
    tmp4Result = tmp4(tmp11, obj3);
  }
  items[2] = tmp4Result;
  return map1(tmp5, obj);
};
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export { FocusedControlsBottomDrawer };
