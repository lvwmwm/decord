// Module ID: 10641
// Function ID: 83040
// Name: FocusedControlsExpanded
// Dependencies: [57, 31, 27, 10210, 10211, 653, 33, 477, 4130, 689, 5052, 1273, 1557, 3991, 10642, 668, 1212, 5446, 3946, 1334, 4131, 5217, 9585, 1450, 10550, 1207, 3842, 4533, 3976, 10384, 2]
// Exports: default

// Module 10641 (FocusedControlsExpanded)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "getIOSBlurEffect";
import resetFocusTimer from "resetFocusTimer";
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function FocusedControlsExpanded(children) {
  const availableHeight = children.availableHeight;
  const positionY = children.positionY;
  bottom = positionY(bottom[12])().bottom;
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  const items = [availableHeight, bottom, first];
  const callback = React.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      callback(tmp);
    }
  }, items);
  let obj = availableHeight(bottom[13]);
  const fn = function _() {
    const bound = Math.min(-1 * positionY.get() / outer1_15, 1);
    const obj = { opacity: bound };
    let str = "auto";
    if (0 === bound) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  obj = { positionY, EXPANDED_DRAWER_SHOW_POSITION: c15 };
  fn.__closure = obj;
  fn.__workletHash = 10567472250823;
  fn.__initData = closure_21;
  obj = { style: { height: availableHeight } };
  const obj1 = { scrollEnabled: first };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items1 = [_createForOfIteratorHelperLoose().expandedControlsContainer, animatedStyle];
  obj1.children = callback2(positionY(bottom[13]).View, { style: items1, onLayout: callback, children: children.expandedControls });
  obj.children = callback2(closure_7, obj1);
  return callback2(closure_5, obj);
}
function FocusedControlsBottomDrawerTooltip(positionY) {
  positionY = positionY.positionY;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = positionY(10642);
  const canShowTooltip = obj.useCanShowTooltip(positionY(668).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  positionY(3991);
  const fn = function o() {
    return { opacity: 1 - Math.min(-1 * positionY.get() / outer1_15, 1) };
  };
  obj = { positionY, EXPANDED_DRAWER_SHOW_POSITION: c15 };
  fn.__closure = obj;
  fn.__workletHash = 4429631762525;
  fn.__initData = closure_22;
  let tmp5 = null;
  if (canShowTooltip) {
    obj = { style: tmp4 };
    const obj1 = { style: tmp.tooltipStyle, arrowPosition: positionY(1273).TooltipArrowPositions.CENTER, arrowDirection: positionY(1273).TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4 };
    ({ containerStyle: obj4.containerStyle, labelStyle: obj4.labelStyle } = tmp);
    const intl = positionY(1212).intl;
    obj1.label = intl.string(positionY(1212).t.zYzy2i);
    obj.children = callback2(positionY(1273).Tooltip, obj1);
    tmp5 = callback2(importDefault(3991).View, obj);
  }
  return tmp5;
}
function FocusedControlsAboveActionBarView(positionY) {
  let isExpanded;
  let onPressHeader;
  positionY = positionY.positionY;
  const offsetY = positionY.offsetY;
  const aboveActionBar = positionY.aboveActionBar;
  ({ onPressHeader, isExpanded } = positionY);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = positionY(3991);
  const fn = function _() {
    return { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - outer1_15), 0) };
  };
  obj = { offsetY, EXPANDED_DRAWER_SHOW_POSITION: c15, positionY };
  fn.__closure = obj;
  fn.__workletHash = 5042367101380;
  fn.__initData = closure_23;
  obj = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: { expanded: isExpanded } };
  const obj1 = { style: tmp.aboveActionBarContainer };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [callback2(FocusedControlsBottomDrawerTooltip, { positionY }), callback2(positionY(5446).ActionSheetHeaderBar, {}), ];
  let tmp7 = null != aboveActionBar;
  if (tmp7) {
    const obj2 = {};
    const items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    obj2.style = items1;
    obj2.children = aboveActionBar;
    tmp7 = callback2(offsetY(3991).View, obj2);
  }
  items[2] = tmp7;
  obj1.children = items;
  obj.children = closure_14(closure_5, obj1);
  return callback2(closure_6, obj);
}
class FocusedControlsBottomDrawer {
  constructor(arg0) {
    ({ actionBarControlsHeight, reveal } = global);
    onDrawerClose = global.onDrawerClose;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    Math = undefined;
    c9 = undefined;
    ({ children, expandedControls, aboveActionBar, onDrawerOpen } = global);
    tmp = c18();
    tmp2 = require("useSafeAreaInsets")();
    ({ bottom, right } = tmp2);
    top = tmp2.top;
    size = require("useWindowDimensions")();
    height = size.height;
    tmp3 = size.width > BOX_MODE_THRESHOLD_WIDTH;
    c3 = tmp3;
    tmp4 = require("useBottomVoiceControlsSheetWidth")();
    result = tmp4;
    bound = height;
    if (tmp3) {
      tmp6 = globalThis;
      _Math = Math;
      tmp7 = c11;
      bound = Math.min(c11, height);
    }
    c5 = bound;
    sum = actionBarControlsHeight;
    if (!tmp3) {
      sum = actionBarControlsHeight + bottom;
    }
    c6 = sum;
    diff = bound - sum;
    c7 = diff;
    diff1 = bound - sum;
    if (tmp3) {
      tmp13 = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
      diff2 = diff1 - EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(top);
    } else {
      tmp11 = EXTENDED_CONTROLS_OFFSET_Y;
      diff2 = diff1 - EXTENDED_CONTROLS_OFFSET_Y(top);
    }
    obj = {
      controlMaxHeight: diff,
      isLandscapeMode: tmp3,
      portraitOffsetY: EXTENDED_CONTROLS_OFFSET_Y(top) + bottom,
      landscapeOffsetY: EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(top),
      onClose() {
            let tmp;
            if (null != onDrawerClose) {
              tmp = onDrawerClose();
            }
            return tmp;
          },
      onOpen: onDrawerOpen
    };
    tmp14 = c3((function useDrawerGesture(controlMaxHeight) {
      let bound;
      let result;
      controlMaxHeight = controlMaxHeight.controlMaxHeight;
      const isLandscapeMode = controlMaxHeight.isLandscapeMode;
      const portraitOffsetY = controlMaxHeight.portraitOffsetY;
      const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
      ({ onClose: result, onOpen: bound } = controlMaxHeight);
      let first;
      let closure_7;
      let callback;
      function handleOpen() {
        if (!first) {
          if (null != callback2) {
            callback2();
          }
          callback3(true);
        }
      }
      function handleClose() {
        if (first) {
          if (null != callback) {
            callback();
          }
          callback3(false);
          callback();
        }
      }
      let tmp = tmp3(tmp4.useState(false), 2);
      first = tmp[0];
      closure_7 = tmp[1];
      let obj = reveal(right[13]);
      const sharedValue = obj.useSharedValue(0);
      class O {
        constructor() {
          tmp = controlMaxHeight;
          if (isLandscapeMode) {
            tmp4 = landscapeOffsetY;
            diff = tmp - landscapeOffsetY;
          } else {
            tmp2 = portraitOffsetY;
            diff = tmp - portraitOffsetY;
          }
          return diff;
        }
      }
      O.__closure = { isLandscapeMode, controlMaxHeight, landscapeOffsetY, portraitOffsetY };
      O.__workletHash = 13346503100323;
      O.__initData = outer1_24;
      const derivedValue = reveal(right[13]).useDerivedValue(O);
      let obj2 = reveal(right[13]);
      const sharedValue1 = reveal(right[13]).useSharedValue(0);
      let obj3 = reveal(right[13]);
      const sharedValue2 = reveal(right[13]).useSharedValue(false);
      const obj4 = reveal(right[13]);
      const sharedValue3 = reveal(right[13]).useSharedValue(0);
      callback = tmp4.useCallback(() => {
        const result = reveal(right[18]).UNSAFE_markDismissibleContentAsDismissed(reveal(right[19]).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
      }, []);
      const items = [sharedValue, derivedValue, callback];
      const callback1 = tmp4.useCallback(() => {
        let num = 0;
        const tmp = 0 !== sharedValue.get();
        if (!tmp) {
          num = -derivedValue.get();
        }
        const result = sharedValue.set(reveal(right[20]).withTiming(num, outer2_19));
        if (tmp) {
          derivedValue();
          callback();
        } else {
          first();
        }
        callback3(!tmp);
      }, items);
      const Gesture = reveal(right[21]).Gesture;
      const obj5 = reveal(right[13]);
      class M {
        constructor() {
          obj = reveal(right[13]);
          tmp = obj.runOnJS(Math)();
          result = controlMaxHeight.set(0 !== closure_8.get());
          result1 = portraitOffsetY.set(0);
          value = null != closure_8.get();
          if (value) {
            tmp5 = controlMaxHeight;
            value = controlMaxHeight.get();
          }
          if (!value) {
            tmp6 = c10;
            result2 = c10.set(0);
          }
          return;
        }
      }
      obj = { runOnJS: reveal(right[13]).runOnJS, clearFocusTimer: first, drawerOpen: sharedValue2, positionY: sharedValue, CLOSE_DRAWER_POSITION: 0, velocity: sharedValue3, startY: sharedValue1 };
      M.__closure = obj;
      M.__workletHash = 9674965708496;
      M.__initData = outer1_27;
      const PanResult = Gesture.Pan();
      class N {
        constructor(arg0) {
          result = portraitOffsetY.set(controlMaxHeight.velocityY);
          result1 = -1 * closure_8.get();
          if (result1 <= landscapeOffsetY.get() + 16) {
            tmp4 = c10;
            tmp3 = closure_8;
            value = c10.get();
            tmp6 = null;
            num = 0;
            if (null != value) {
              num = value;
            }
            result2 = closure_8.set(num + controlMaxHeight.translationY);
          }
          return;
        }
      }
      N.__closure = { velocity: sharedValue3, positionY: sharedValue, maxHeight: derivedValue, startY: sharedValue1 };
      N.__workletHash = 16755118181071;
      N.__initData = outer1_26;
      const onStartResult = Gesture.Pan().onStart(M);
      class H {
        constructor() {
          openDrawer = function openDrawer() {
            reveal(right[13]).runOnJS(outer1_14)();
            const result = outer1_10.set(-outer1_9.get());
            const obj = reveal(right[13]);
            const result1 = outer1_8.set(reveal(right[20]).withTiming(outer1_10.get(), outer3_19));
            const result2 = outer1_11.set(true);
            const obj2 = reveal(right[20]);
            const obj3 = reveal(right[13]);
            reveal(right[13]).runOnJS(onDrawerClose(right[22]).acknowledgeTooltip)(reveal(right[15]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
          };
          closeDrawer = function closeDrawer() {
            const result = outer1_10.set(0);
            const result1 = outer1_8.set(reveal(right[20]).withTiming(0, outer3_20));
            const result2 = outer1_11.set(false);
            const obj = reveal(right[20]);
            reveal(right[13]).runOnJS(c9)();
            const obj2 = reveal(right[13]);
            reveal(right[13]).runOnJS(outer1_15)();
          };
          value = controlMaxHeight.get();
          result = -1 * closure_8.get();
          tmp3 = result >= landscapeOffsetY.get() / 2;
          value1 = portraitOffsetY.get();
          num = 0;
          if (null != value1) {
            num = value1;
          }
          result1 = -1 * num;
          value2 = portraitOffsetY.get();
          num2 = 0;
          if (null != value2) {
            num2 = value2;
          }
          tmp7 = num2 >= 500;
          if (result1 < 500) {
            if (tmp3) {
              return;
            }
            if (!tmp8) {
              if (tmp7) {
              }
              if (tmp3) {
                openDrawerResult = openDrawer();
              } else {
                closeDrawerResult = closeDrawer();
              }
            }
            closeDrawerResult1 = closeDrawer();
          }
          openDrawerResult1 = openDrawer();
          return;
        }
      }
      obj = { drawerOpen: sharedValue2, positionY: sharedValue, maxHeight: derivedValue, velocity: sharedValue3, MIN_GESTURE_TRIGGER_VELOCITY: 500, CLOSE_DRAWER_POSITION: 0, runOnJS: reveal(right[13]).runOnJS, handleOpen, startY: sharedValue1, withTiming: reveal(right[20]).withTiming, TIMING_CONFIG: outer1_19, TooltipActionCreators: onDrawerClose(right[22]), TooltipNames: reveal(right[15]).TooltipNames, TIMING_CONFIG_EXIT: outer1_20, resetFocusTimer: c9, handleClose };
      H.__closure = obj;
      H.__workletHash = 6790759206787;
      H.__initData = outer1_25;
      const items1 = [sharedValue, Gesture.Pan().onStart(M).onUpdate(N).onEnd(H), callback1, first];
      return items1;
    })(obj), 4);
    first = tmp14[0];
    Math = first;
    tmp16 = tmp14[2];
    c9 = tmp16;
    obj2 = require("module_3991");
    fn = function f() {
      let num = 0;
      if (!reveal) {
        num = c6;
      }
      let obj = { position: "absolute", height: bound, overflow: "hidden" };
      let num2 = 0;
      if (_slicedToArray) {
        num2 = 16;
      }
      obj.bottom = num2;
      let num3 = 0;
      if (_slicedToArray) {
        num3 = 16 + right;
      }
      obj.right = num3;
      let num5 = 0;
      if (_slicedToArray) {
        num5 = 8;
      }
      obj.borderRadius = num5;
      obj.width = result;
      obj = { translateY: reveal(right[20]).withTiming(num, outer1_19) };
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { reveal };
    obj.controlHeightWithOffset = sum;
    obj.sheetHeight = bound;
    obj.isLandscapeMode = tmp3;
    obj.safeAreaRight = right;
    obj.sheetWidth = tmp4;
    obj.withTiming = require("withTiming").withTiming;
    obj.TIMING_CONFIG = c19;
    fn.__closure = obj;
    fn.__workletHash = 608185354082;
    fn.__initData = c28;
    items = [, ];
    items[0] = tmp3;
    items[1] = first;
    animatedStyle = obj2.useAnimatedStyle(fn);
    effect = result.useEffect(() => {
      const result = first.set(reveal(right[20]).withTiming(0, outer1_20));
    }, items);
    items1 = [, ];
    items1[0] = reveal;
    items1[1] = first;
    effect1 = result.useEffect(() => {
      if (reveal) {
        const result = first.set(0);
      }
    }, items1);
    items2 = [];
    items2[0] = first;
    effect2 = result.useEffect(() => {
      function handleSelectActivity() {
        const result = outer1_8.set(reveal(right[20]).withTiming(0, outer2_20));
      }
      let ComponentDispatch = reveal(right[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(outer1_12.SELECT_ACTIVITY, handleSelectActivity);
      return () => {
        const ComponentDispatch = reveal(right[25]).ComponentDispatch;
        ComponentDispatch.unsubscribe(outer2_12.SELECT_ACTIVITY, handleSelectActivity);
      };
    }, items2);
    obj4 = require("module_3991");
    class Z {
      constructor() {
        obj = { height: c5 };
        obj = { translateY: c7 + Math.get() };
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    obj1 = {};
    obj1.sheetHeight = bound;
    obj1.offsetY = diff;
    obj1.positionY = first;
    Z.__closure = obj1;
    Z.__workletHash = 4471821639301;
    Z.__initData = c29;
    items3 = [];
    items3[0] = tmp16;
    animatedStyle1 = obj4.useAnimatedStyle(Z);
    effect3 = result.useEffect(() => {
      let ComponentDispatch = reveal(right[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(outer1_12.TOGGLE_CALL_CONTROL_DRAWER, c9);
      return () => {
        const ComponentDispatch = reveal(right[25]).ComponentDispatch;
        ComponentDispatch.unsubscribe(outer2_12.TOGGLE_CALL_CONTROL_DRAWER, outer1_9);
      };
    }, items3);
    obj6 = require("ManaContext");
    theme = obj6.useThemeContext().theme;
    tmp23 = jsx;
    obj2 = { style: animatedStyle, pointerEvents: "box-none" };
    tmp24 = jsx;
    obj3 = { gesture: tmp14[1] };
    tmp25 = jsxs;
    obj4 = { style: items4 };
    items4 = [, ];
    items4[0] = tmp.bottomDrawerContainer;
    items4[1] = animatedStyle1;
    tmp26 = jsx;
    obj5 = { blurTheme: theme };
    items5 = [, ];
    items5[0] = tmp.visualEffectView;
    tmp27 = require("getIOSBlurEffect");
    obj11 = require("AccessibilityAnnouncer");
    prop = null;
    if (obj11.isThemeLight(theme)) {
      prop = tmp.visualEffectViewBackground;
    }
    items5[1] = prop;
    obj5.style = items5;
    items6 = [, , , ];
    items6[0] = tmp26(tmp27, obj5);
    items6[1] = jsx(FocusedControlsAboveActionBarView, { onPressHeader: tmp16, aboveActionBar, positionY: first, offsetY: diff, isExpanded: tmp14[3] });
    items6[2] = children;
    obj6 = { expandedControls };
    obj6.availableHeight = diff2;
    obj6.positionY = first;
    items6[3] = jsx(FocusedControlsExpanded, obj6);
    obj4.children = items6;
    obj3.children = tmp25(require("module_3991").View, obj4);
    obj2.children = tmp24(require("Directions").GestureDetector, obj3);
    return tmp23(require("module_3991").View, obj2);
  }
}
({ View: closure_5, TouchableWithoutFeedback: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ clearFocusTimer: closure_8, resetFocusTimer: closure_9 } = resetFocusTimer);
({ BOX_MODE_THRESHOLD_WIDTH: closure_10, BOX_MODE_ACTIONSHEET_HEIGHT: closure_11 } = BOX_MODE_ACTIONSHEET_WIDTH);
const ComponentActions = ME.ComponentActions;
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let c15 = 20;
function EXTENDED_CONTROLS_OFFSET_Y(top) {
  const sum = top + 54;
  let num = 16;
  if (obj.isIOS()) {
    num = 48;
  }
  return sum + num;
}
function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(top) {
  return top + 54 + 12;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", left: 0, right: 0, bottom: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.bottomDrawerContainer = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj1["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.sm;
obj1["overflow"] = "hidden";
_createForOfIteratorHelperLoose.visualEffectView = obj1;
_createForOfIteratorHelperLoose.visualEffectViewBackground = { backgroundColor: "rgba(0, 0, 0, .15)" };
_createForOfIteratorHelperLoose.expandedControlsContainer = { marginHorizontal: 16 };
_createForOfIteratorHelperLoose.aboveActionBarContainer = { position: "absolute", left: 0, right: 0, top: -32, paddingTop: 4, paddingBottom: 8 };
_createForOfIteratorHelperLoose.aboveActionBarChildrenContainer = { position: "absolute", left: 16, right: 16, top: -64 };
_createForOfIteratorHelperLoose.ptbButton = { margin: 0, marginHorizontal: 16, marginBottom: 8 };
_createForOfIteratorHelperLoose.tooltipStyle = { alignSelf: "center", position: "absolute", top: -28 };
_createForOfIteratorHelperLoose.containerStyle = { paddingHorizontal: 8, paddingVertical: 4 };
const merged1 = Object.assign(require("createTextStyle")(ME.Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 12, { uppercase: true }));
_createForOfIteratorHelperLoose.labelStyle = {};
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { easing: require("Button").STANDARD_EASING, duration: 250 };
let obj5 = { easing: require("Button").STANDARD_EASING, duration: 400 };
let closure_21 = { code: "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}" };
let closure_22 = { code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}" };
let closure_23 = { code: "function FocusedControlsBottomControlsTsx3(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}" };
let closure_24 = { code: "function FocusedControlsBottomControlsTsx4(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}" };
let closure_25 = { code: "function FocusedControlsBottomControlsTsx5(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}" };
let closure_26 = { code: "function FocusedControlsBottomControlsTsx6(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}" };
let closure_27 = { code: "function FocusedControlsBottomControlsTsx7(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}" };
let closure_28 = { code: "function FocusedControlsBottomControlsTsx8(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}" };
let closure_29 = { code: "function FocusedControlsBottomControlsTsx9(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}" };
let obj2 = {};
let obj3 = { uppercase: true };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default function FocusedControlsBottomControls(omitPTT) {
  let actionBar;
  let children;
  let expandedControls;
  let header;
  let onDrawerClose;
  let reveal;
  let flag = omitPTT.omitPTT;
  ({ children, actionBar, expandedControls, reveal, header, onDrawerClose } = omitPTT);
  if (flag === undefined) {
    flag = false;
  }
  let _require;
  const tmp2 = callback(React.useState(0), 2);
  _require = tmp2[1];
  let obj = { aboveActionBar: children, actionBarControlsHeight: tmp2[0], expandedControls, reveal, onDrawerClose, onDrawerOpen: omitPTT.onDrawerOpen };
  obj = {
    onLayout: React.useCallback((nativeEvent) => {
      callback(nativeEvent.nativeEvent.layout.height);
    }, [])
  };
  const items = [header, actionBar, ];
  let tmp7 = null;
  if (!flag) {
    obj = { look: _require(10384).CallPTTButtonLooks.BLUR, style: tmp.ptbButton, sendCallback: closure_8, stopCallback: closure_9 };
    tmp7 = callback2(importDefault(10384), obj);
    const tmp11 = importDefault(10384);
  }
  items[2] = tmp7;
  obj.children = items;
  obj.children = closure_14(closure_5, obj);
  return callback2(FocusedControlsBottomDrawer, obj);
};
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export { FocusedControlsBottomDrawer };
