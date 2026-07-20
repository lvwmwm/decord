// Module ID: 10624
// Function ID: 82943
// Name: FocusedControlsExpanded
// Dependencies: []
// Exports: default

// Module 10624 (FocusedControlsExpanded)
function FocusedControlsExpanded(children) {
  const availableHeight = children.availableHeight;
  const arg1 = availableHeight;
  const positionY = children.positionY;
  const importDefault = positionY;
  const bottom = importDefault(dependencyMap[12])().bottom;
  const dependencyMap = bottom;
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  const callback2 = first;
  const React = tmp2[1];
  const items = [availableHeight, bottom, first];
  const callback = React.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      callback(tmp);
    }
  }, items);
  let obj = arg1(dependencyMap[13]);
  const fn = function _() {
    const bound = Math.min(-1 * positionY.get() / closure_15, 1);
    const obj = { opacity: bound };
    let str = "auto";
    if (0 === bound) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  obj = { positionY, EXPANDED_DRAWER_SHOW_POSITION: closure_15 };
  fn.__closure = obj;
  fn.__workletHash = 10567472250823;
  fn.__initData = closure_21;
  obj = { style: { height: availableHeight } };
  const obj1 = { scrollEnabled: first };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items1 = [callback4().expandedControlsContainer, animatedStyle];
  obj1.children = callback3(importDefault(dependencyMap[13]).View, { style: items1, onLayout: callback, children: children.expandedControls });
  obj.children = callback3(closure_7, obj1);
  return callback3(closure_5, obj);
}
function FocusedControlsBottomDrawerTooltip(positionY) {
  positionY = positionY.positionY;
  const arg1 = positionY;
  const tmp = callback4();
  let obj = arg1(dependencyMap[14]);
  const canShowTooltip = obj.useCanShowTooltip(arg1(dependencyMap[15]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  arg1(dependencyMap[13]);
  const fn = function o() {
    return { opacity: 1 - Math.min(-1 * positionY.get() / closure_15, 1) };
  };
  obj = { positionY, EXPANDED_DRAWER_SHOW_POSITION: closure_15 };
  fn.__closure = obj;
  fn.__workletHash = 4429631762525;
  fn.__initData = closure_22;
  let tmp5 = null;
  if (canShowTooltip) {
    obj = { style: tmp4 };
    const obj1 = { style: tmp.tooltipStyle, arrowPosition: arg1(dependencyMap[11]).TooltipArrowPositions.CENTER, arrowDirection: arg1(dependencyMap[11]).TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4 };
    ({ containerStyle: obj4.containerStyle, labelStyle: obj4.labelStyle } = tmp);
    const intl = arg1(dependencyMap[16]).intl;
    obj1.label = intl.string(arg1(dependencyMap[16]).t.zYzy2i);
    obj.children = callback3(arg1(dependencyMap[11]).Tooltip, obj1);
    tmp5 = callback3(importDefault(dependencyMap[13]).View, obj);
  }
  return tmp5;
}
function FocusedControlsAboveActionBarView(positionY) {
  let isExpanded;
  let onPressHeader;
  positionY = positionY.positionY;
  const arg1 = positionY;
  const offsetY = positionY.offsetY;
  const importDefault = offsetY;
  const aboveActionBar = positionY.aboveActionBar;
  ({ onPressHeader, isExpanded } = positionY);
  const tmp = callback4();
  let obj = arg1(dependencyMap[13]);
  const fn = function _() {
    return { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - closure_15), 0) };
  };
  obj = { offsetY, EXPANDED_DRAWER_SHOW_POSITION: closure_15, positionY };
  fn.__closure = obj;
  fn.__workletHash = 5042367101380;
  fn.__initData = closure_23;
  obj = { onPress: onPressHeader, accessibilityState: { expanded: isExpanded } };
  const obj1 = { style: tmp.aboveActionBarContainer };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [callback3(FocusedControlsBottomDrawerTooltip, { positionY }), callback3(arg1(dependencyMap[17]).ActionSheetHeaderBar, {}), ];
  let tmp7 = null != aboveActionBar;
  if (tmp7) {
    const obj2 = {};
    const items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    obj2.style = items1;
    obj2.children = aboveActionBar;
    tmp7 = callback3(importDefault(dependencyMap[13]).View, obj2);
  }
  items[2] = tmp7;
  obj1.children = items;
  obj.children = closure_14(closure_5, obj1);
  return callback3(closure_6, obj);
}
class FocusedControlsBottomDrawer {
  constructor(arg0) {
    ({ actionBarControlsHeight, reveal } = global);
    arg1 = reveal;
    importDefault = global.onDrawerClose;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    clearFocusTimer = undefined;
    closure_9 = undefined;
    ({ children, expandedControls, aboveActionBar, onDrawerOpen } = global);
    tmp = closure_18();
    tmp2 = importDefault(dependencyMap[12])();
    ({ bottom, right } = tmp2);
    dependencyMap = right;
    top = tmp2.top;
    size = importDefault(dependencyMap[23])();
    height = size.height;
    tmp3 = size.width > BOX_MODE_THRESHOLD_WIDTH;
    closure_3 = tmp3;
    tmp4 = importDefault(dependencyMap[24])();
    importAll = tmp4;
    bound = height;
    if (tmp3) {
      tmp6 = globalThis;
      _Math = Math;
      tmp7 = closure_11;
      bound = Math.min(closure_11, height);
    }
    closure_5 = bound;
    sum = actionBarControlsHeight;
    if (!tmp3) {
      sum = actionBarControlsHeight + bottom;
    }
    closure_6 = sum;
    diff = bound - sum;
    closure_7 = diff;
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
    tmp14 = closure_3(function useDrawerGesture(controlMaxHeight) {
      controlMaxHeight = controlMaxHeight.controlMaxHeight;
      const reveal = controlMaxHeight;
      const isLandscapeMode = controlMaxHeight.isLandscapeMode;
      const onDrawerClose = isLandscapeMode;
      const portraitOffsetY = controlMaxHeight.portraitOffsetY;
      const right = portraitOffsetY;
      const landscapeOffsetY = controlMaxHeight.landscapeOffsetY;
      ({ onClose: closure_4, onOpen: closure_5 } = controlMaxHeight);
      let sum;
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
      const tmp = landscapeOffsetY(tmp4.useState(false), 2);
      let first = tmp[0];
      sum = first;
      closure_7 = tmp[1];
      let obj = reveal(right[13]);
      const sharedValue = obj.useSharedValue(0);
      first = sharedValue;
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
      O.__initData = closure_24;
      const derivedValue = reveal(right[13]).useDerivedValue(O);
      const obj2 = reveal(right[13]);
      const tmp16 = derivedValue;
      const tmp3 = landscapeOffsetY;
      const sharedValue1 = reveal(right[13]).useSharedValue(0);
      const obj3 = reveal(right[13]);
      const sharedValue2 = reveal(right[13]).useSharedValue(false);
      const obj4 = reveal(right[13]);
      const sharedValue3 = reveal(right[13]).useSharedValue(0);
      callback = tmp4.useCallback(() => {
        const result = controlMaxHeight(portraitOffsetY[18]).UNSAFE_markDismissibleContentAsDismissed(controlMaxHeight(portraitOffsetY[19]).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
      }, []);
      const items = [sharedValue, derivedValue, callback];
      const callback1 = tmp4.useCallback(() => {
        let num = 0;
        const tmp = 0 !== sharedValue.get();
        if (!tmp) {
          num = -derivedValue.get();
        }
        const result = sharedValue.set(controlMaxHeight(portraitOffsetY[20]).withTiming(num, closure_19));
        if (tmp) {
          derivedValue();
          callback();
        } else {
          sharedValue();
        }
        callback3(!tmp);
      }, items);
      const Gesture = reveal(right[21]).Gesture;
      const obj5 = reveal(right[13]);
      class M {
        constructor() {
          obj = controlMaxHeight(portraitOffsetY[13]);
          tmp = obj.runOnJS(closure_8)();
          result = controlMaxHeight.set(0 !== closure_8.get());
          result1 = portraitOffsetY.set(0);
          value = null != closure_8.get();
          if (value) {
            tmp5 = controlMaxHeight;
            value = controlMaxHeight.get();
          }
          if (!value) {
            tmp6 = closure_10;
            result2 = closure_10.set(0);
          }
          return;
        }
      }
      obj = { runOnJS: reveal(right[13]).runOnJS, clearFocusTimer: first, drawerOpen: sharedValue2, positionY: sharedValue, CLOSE_DRAWER_POSITION: 0, velocity: sharedValue3, startY: sharedValue1 };
      M.__closure = obj;
      M.__workletHash = 9674965708496;
      M.__initData = closure_27;
      const PanResult = Gesture.Pan();
      class N {
        constructor(arg0) {
          result = portraitOffsetY.set(controlMaxHeight.velocityY);
          result1 = -1 * closure_8.get();
          if (result1 <= landscapeOffsetY.get() + 16) {
            tmp4 = closure_10;
            tmp3 = closure_8;
            value = closure_10.get();
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
      N.__initData = closure_26;
      const onStartResult = Gesture.Pan().onStart(M);
      class H {
        constructor() {
          openDrawer = function openDrawer() {
            callback(closure_2[13]).runOnJS(closure_14)();
            const result = store2.set(-closure_9.get());
            const obj = callback(closure_2[13]);
            const result1 = store.set(callback(closure_2[20]).withTiming(store2.get(), closure_19));
            const result2 = store3.set(true);
            const obj2 = callback(closure_2[20]);
            const obj3 = callback(closure_2[13]);
            callback(closure_2[13]).runOnJS(callback2(closure_2[22]).acknowledgeTooltip)(callback(closure_2[15]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
          };
          closeDrawer = function closeDrawer() {
            const result = store2.set(0);
            const result1 = store.set(callback(closure_2[20]).withTiming(0, closure_20));
            const result2 = store3.set(false);
            const obj = callback(closure_2[20]);
            callback(closure_2[13]).runOnJS(closure_9)();
            const obj2 = callback(closure_2[13]);
            callback(closure_2[13]).runOnJS(closure_15)();
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
      obj = { drawerOpen: sharedValue2, positionY: sharedValue, maxHeight: derivedValue, velocity: sharedValue3, MIN_GESTURE_TRIGGER_VELOCITY: 500, CLOSE_DRAWER_POSITION: 0, runOnJS: reveal(right[13]).runOnJS, handleOpen, startY: sharedValue1, withTiming: reveal(right[20]).withTiming, TIMING_CONFIG: closure_19, TooltipActionCreators: onDrawerClose(right[22]), TooltipNames: reveal(right[15]).TooltipNames, TIMING_CONFIG_EXIT: closure_20, resetFocusTimer: tmp16, handleClose };
      H.__closure = obj;
      H.__workletHash = 6790759206787;
      H.__initData = closure_25;
      const items1 = [sharedValue, Gesture.Pan().onStart(M).onUpdate(N).onEnd(H), callback1, first];
      return items1;
    }(obj), 4);
    first = tmp14[0];
    clearFocusTimer = first;
    tmp16 = tmp14[2];
    closure_9 = tmp16;
    obj2 = arg1(dependencyMap[13]);
    fn = function f() {
      let num = 0;
      if (!reveal) {
        num = sum;
      }
      let obj = { 1661939810: -1659219612, 1370398947: 291073, 1602119085: 307298304, height: bound };
      let num2 = 0;
      if (tmp3) {
        num2 = 16;
      }
      obj.bottom = num2;
      let num3 = 0;
      if (tmp3) {
        num3 = 16 + right;
      }
      obj.right = num3;
      let num5 = 0;
      if (tmp3) {
        num5 = 8;
      }
      obj.borderRadius = num5;
      obj.width = tmp4;
      obj = { translateY: reveal(right[20]).withTiming(num, closure_19) };
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
    obj.withTiming = arg1(dependencyMap[20]).withTiming;
    obj.TIMING_CONFIG = closure_19;
    fn.__closure = obj;
    fn.__workletHash = 608185354082;
    fn.__initData = closure_28;
    items = [, ];
    items[0] = tmp3;
    items[1] = first;
    animatedStyle = obj2.useAnimatedStyle(fn);
    effect = importAll.useEffect(() => {
      const result = first.set(reveal(right[20]).withTiming(0, closure_20));
    }, items);
    items1 = [, ];
    items1[0] = reveal;
    items1[1] = first;
    effect1 = importAll.useEffect(() => {
      if (reveal) {
        const result = first.set(0);
      }
    }, items1);
    items2 = [];
    items2[0] = first;
    effect2 = importAll.useEffect(() => {
      function handleSelectActivity(arg0) {
        const result = closure_8.set(handleSelectActivity(closure_2[20]).withTiming(0, closure_20));
      }
      const reveal = handleSelectActivity;
      const ComponentDispatch = reveal(right[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
      return () => {
        const ComponentDispatch = handleSelectActivity(closure_2[25]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
      };
    }, items2);
    obj4 = arg1(dependencyMap[13]);
    class Z {
      constructor() {
        obj = { height: closure_5 };
        obj = { translateY: closure_7 + Math.get() };
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
    Z.__initData = closure_29;
    items3 = [];
    items3[0] = tmp16;
    animatedStyle1 = obj4.useAnimatedStyle(Z);
    effect3 = importAll.useEffect(() => {
      const ComponentDispatch = reveal(right[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, tmp16);
      return () => {
        const ComponentDispatch = callback(closure_2[25]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
      };
    }, items3);
    obj6 = arg1(dependencyMap[26]);
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
    tmp27 = importDefault(dependencyMap[27]);
    obj11 = arg1(dependencyMap[28]);
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
    obj3.children = tmp25(importDefault(dependencyMap[13]).View, obj4);
    obj2.children = tmp24(arg1(dependencyMap[21]).GestureDetector, obj3);
    return tmp23(importDefault(dependencyMap[13]).View, obj2);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ View: closure_5, TouchableWithoutFeedback: closure_6, ScrollView: closure_7 } = tmp2);
({ clearFocusTimer: closure_8, resetFocusTimer: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ BOX_MODE_THRESHOLD_WIDTH: closure_10, BOX_MODE_ACTIONSHEET_HEIGHT: closure_11 } = arg1(dependencyMap[4]));
const tmp5 = arg1(dependencyMap[5]);
const ComponentActions = tmp5.ComponentActions;
const tmp4 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[6]));
let closure_15 = 20;
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
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.bottomDrawerContainer = obj;
const obj1 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj1["borderRadius"] = importDefault(dependencyMap[9]).radii.sm;
obj1["overflow"] = "hidden";
obj.visualEffectView = obj1;
obj.visualEffectViewBackground = { backgroundColor: "rgba(0, 0, 0, .15)" };
obj.expandedControlsContainer = { marginHorizontal: 16 };
obj.aboveActionBarContainer = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
obj.aboveActionBarChildrenContainer = {};
obj.ptbButton = { GameDiversityTier6SmallBadge: "key", useApplicationIdentityLinkedRolesEnabled: "Text", paddingTop: "height" };
obj.tooltipStyle = { skuId: 10915829420510704000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, _desired: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007753314051984149, "Null": 563097861357615.4 };
obj.containerStyle = { color: 1, backgroundColor: "comp_0" };
const obj2 = {};
const tmp6 = arg1(dependencyMap[6]);
const merged1 = Object.assign(importDefault(dependencyMap[10])(tmp5.Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[9]).unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj.labelStyle = obj2;
let closure_18 = obj.createStyles(obj);
const obj4 = { easing: arg1(dependencyMap[11]).STANDARD_EASING, duration: 250 };
const obj5 = { easing: arg1(dependencyMap[11]).STANDARD_EASING, duration: 400 };
let closure_21 = { code: "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}" };
let closure_22 = { code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}" };
let closure_23 = { code: "function FocusedControlsBottomControlsTsx3(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}" };
let closure_24 = { code: "function FocusedControlsBottomControlsTsx4(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}" };
let closure_25 = { code: "function FocusedControlsBottomControlsTsx5(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}" };
let closure_26 = { code: "function FocusedControlsBottomControlsTsx6(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}" };
let closure_27 = { code: "function FocusedControlsBottomControlsTsx7(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}" };
let closure_28 = { code: "function FocusedControlsBottomControlsTsx8(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}" };
let closure_29 = { code: "function FocusedControlsBottomControlsTsx9(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}" };
const importDefaultResult = importDefault(dependencyMap[10]);
const obj3 = { uppercase: true };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

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
  let callback;
  const tmp2 = callback2(React.useState(0), 2);
  callback = tmp2[1];
  let obj = { aboveActionBar: children, actionBarControlsHeight: tmp2[0], expandedControls, reveal, onDrawerClose, onDrawerOpen: omitPTT.onDrawerOpen };
  obj = {
    onLayout: React.useCallback((nativeEvent) => {
      callback(nativeEvent.nativeEvent.layout.height);
    }, [])
  };
  const items = [header, actionBar, ];
  let tmp7 = null;
  if (!flag) {
    obj = { look: callback(dependencyMap[29]).CallPTTButtonLooks.BLUR, style: tmp.ptbButton, sendCallback: closure_8, stopCallback: closure_9 };
    tmp7 = callback3(importDefault(dependencyMap[29]), obj);
    const tmp11 = importDefault(dependencyMap[29]);
  }
  items[2] = tmp7;
  obj.children = items;
  obj.children = closure_14(closure_5, obj);
  return callback3(FocusedControlsBottomDrawer, obj);
};
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export { FocusedControlsBottomDrawer };
