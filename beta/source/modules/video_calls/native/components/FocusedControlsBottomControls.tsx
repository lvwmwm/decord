// Module ID: 12028
// Function ID: 12029
// Name: FocusedControlsBottomControls
// Dependencies: [32, 19, 17, 11130, 11131, 1072, 21, 1377, 5140, 575, 6778, 1187, 1627, 1652, 12029, 1092, 1113, 5723, 5370, 5420, 1705, 10370, 1493, 11879, 1108, 5199, 5728, 5147, 11350, 2]
// Exports: default

// Module 12028 (FocusedControlsBottomControls)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import CallPTTButton from "CallPTTButton" /* 11350 */;
import useCanShowTooltip from "useCanShowTooltip" /* 12029 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelCallStore from "ChannelCallStore" /* 11130 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11131 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import TextStyles from "TextStyles" /* 6778 */;
import size_mod from "module_2" /* 2 */;

const CallPTTButtonDefault = CallPTTButton;
let height, set;

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
let tmp2;
let unpackModuleId;
const _modDef1652 = tmp2(1652);
const ActionSheetHeaderBar = tmp2(5723);
function FocusedControlsExpanded(availableHeight) {
  let closure_3;
  let expandedControls;
  let first;
  let items3;
  let obj3;
  let positionY;
  let tmp7;
  let tmp8;
  let tmp9;
  availableHeight = availableHeight.availableHeight;
  first = undefined;
  closure_3 = undefined;
  ({ expandedControls, positionY } = availableHeight);
  const tmp = closure_17();
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first, closure_3] = react.useState(false);
  const items = [availableHeight, bottom, first];
  const callback = react.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      closure_3(nativeEvent.nativeEvent.layout.height > availableHeight - bottom);
    }
  }, items);
  let obj = _mod1652;
  const items1 = [closure_20, positionY, 20];
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items1;
  class FocusedControlsBottomControlsTsx1 {
    constructor() {
      let str;
      const bound = Math.min(-1 * _undefined.get() / c1, 1);
      const obj = { opacity: bound, pointerEvents: str };
      str = "auto";
      if (0 === bound) {
        str = "none";
      }
      return obj;
    }
  }
  const items2 = [tmp8, tmp9];
  FocusedControlsBottomControlsTsx1.__closure = items2;
  FocusedControlsBottomControlsTsx1.__workletHash = 1609383098366;
  FocusedControlsBottomControlsTsx1.__initData = tmp7;
  const obj2 = { style: { height: availableHeight }, children: map1(metroImportDefault, obj3) };
  obj3 = { scrollEnabled: first, children: map1(_modDef1652.View, obj4) };
  const animatedStyle = obj.useAnimatedStyle(FocusedControlsBottomControlsTsx1);
  obj4 = { style: items3, onLayout: callback, children: expandedControls };
  items3 = [tmp.expandedControlsContainer, animatedStyle];
  return map1(hasOwnProperty, obj2);
}
function FocusedControlsBottomDrawerTooltip(positionY) {
  let Tooltip;
  let intl;
  let tmp6;
  let tmp7;
  let tmp8;
  positionY = positionY.positionY;
  const tmp = closure_17();
  let obj = useCanShowTooltip;
  const canShowTooltip = obj.useCanShowTooltip(ConstantsIOS.TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  _mod1652;
  const items = [closure_22, positionY, 20];
  let c0;
  let c1;
  [tmp6, tmp7, tmp8] = items;
  class FocusedControlsBottomControlsTsx2 {
    constructor() {
      obj = { opacity: 1 - Math.min(-1 * closure_0.get() / closure_1, 1) };
      return obj;
    }
  }
  const items1 = [tmp7, tmp8];
  FocusedControlsBottomControlsTsx2.__closure = items1;
  FocusedControlsBottomControlsTsx2.__workletHash = 9789816419236;
  FocusedControlsBottomControlsTsx2.__initData = tmp6;
  let tmp10 = null;
  if (canShowTooltip) {
    const obj2 = { style: tmp9, children: map1(Tooltip, obj5) };
    const View = _modDef1652.View;
    obj5 = { style: tmp.tooltipStyle, arrowPosition: native.TooltipArrowPositions.CENTER, arrowDirection: native.TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4, containerStyle: null, labelStyle: null, label: intl.string(intl2.t.zYzy2i) };
    Tooltip = tmp2(1187).Tooltip;
    ({ containerStyle: obj3.containerStyle, labelStyle: obj3.labelStyle } = tmp);
    intl = tmp2(1113).intl;
    tmp10 = map1(View, obj2);
  }
  return tmp10;
}
function FocusedControlsAboveActionBarView(arg0) {
  let aboveActionBar;
  let isExpanded;
  let items2;
  let items3;
  let obj3;
  let offsetY;
  let onPressHeader;
  let positionY;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  ({ positionY, aboveActionBar } = arg0);
  ({ offsetY, onPressHeader, isExpanded } = arg0);
  const tmp = closure_17();
  let obj = _mod1652;
  const items = [closure_24, offsetY, 20, positionY];
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class FocusedControlsBottomControlsTsx3 {
    constructor() {
      obj = { opacity: 2 - Math.max(Math.abs(closure_2.get()) / (closure_0 / 3 - closure_1), 0) };
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  FocusedControlsBottomControlsTsx3.__closure = items1;
  FocusedControlsBottomControlsTsx3.__workletHash = 14335129954941;
  FocusedControlsBottomControlsTsx3.__initData = tmp4;
  const obj2 = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: { expanded: isExpanded }, children: tmp11(tmp12, obj3) };
  obj3 = { style: tmp.aboveActionBarContainer, children: items2 };
  const animatedStyle = obj.useAnimatedStyle(FocusedControlsBottomControlsTsx3);
  items2 = [map1(FocusedControlsBottomDrawerTooltip, { positionY }), map1(ActionSheetHeaderBar.ActionSheetHeaderBar, {}), ];
  let tmp9Result = null != aboveActionBar;
  const tmp10 = metroRequire;
  tmp11 = authStore3;
  tmp12 = hasOwnProperty;
  if (tmp9Result) {
    obj4 = { style: items3, children: aboveActionBar };
    items3 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    tmp9Result = tmp9(_modDef1652.View, obj4);
  }
  items2[2] = tmp9Result;
  return map1(tmp10, obj2);
}
class FocusedControlsBottomDrawer {
  constructor(onDrawerClose) {
    let GestureDetector;
    let View2;
    let aboveActionBar;
    let actionBarControlsHeight;
    let bottom;
    let children;
    let diff2;
    let expandedControls;
    let items18;
    let items19;
    let items20;
    let obj6;
    let onDrawerOpen;
    let reveal;
    let right;
    let tmp104;
    let tmp105;
    let tmp106;
    let tmp107;
    let tmp111;
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp43;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp49;
    let tmp50;
    let tmp53;
    let tmp54;
    let tmp55;
    let tmp56;
    let tmp57;
    let tmp64;
    let tmp65;
    let tmp66;
    let tmp67;
    let tmp68;
    let tmp69;
    let tmp70;
    let tmp71;
    let tmp72;
    let tmp73;
    let tmp74;
    let tmp75;
    let tmp76;
    let tmp77;
    let tmp78;
    let tmp79;
    let tmp80;
    let tmp89;
    let tmp90;
    let tmp91;
    let tmp92;
    let tmp93;
    let tmp94;
    let tmp95;
    let tmp96;
    let tmp97;
    let top;
    ({ actionBarControlsHeight, reveal } = onDrawerClose);
    onDrawerClose = onDrawerClose.onDrawerClose;
    let first1;
    let closure_3;
    ({ children, expandedControls, aboveActionBar, onDrawerOpen } = onDrawerClose);
    let tmp = closure_17();
    let tmp2 = onDrawerClose;
    const tmp3 = first1;
    let tmp4 = onDrawerClose(first1[12])();
    ({ bottom, top, right } = tmp4);
    size = onDrawerClose(first1[22])();
    height = size.height;
    let tmp5 = size.width > closure_10;
    let bound = height;
    const tmp6 = onDrawerClose(first1[23])();
    if (tmp5) {
      const tmp8 = globalThis;
      const _Math = Math;
      bound = Math.min(closure_11, height);
    }
    let sum = actionBarControlsHeight;
    if (!tmp5) {
      sum = actionBarControlsHeight + bottom;
    }
    let diff = bound - sum;
    const diff1 = bound - sum;
    if (tmp5) {
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
        let num4 = 12;
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
      const obj2 = reveal(tmp3[7]);
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
        function onClose() {
          let tmp;
          if (onDrawerOpen != null) {
            tmp = onDrawerOpen();
          }
          return tmp;
        }
        closure_3 = undefined;
        let derivedValue;
        const obj3 = react;
        const sum3 = top + 54;
        const tmp24 = closure_3(react.useState(false), 2);
        const first = tmp24[0];
        const tmp23 = closure_3;
        closure_3 = tmp24[1];
        const tmp19Result = reveal(tmp3[13]);
        const sharedValue = tmp19Result.useSharedValue(0);
        let items = [closure_26, tmp5, diff, sum3 + 12, tmp20];
        let c0;
        let c1;
        let c2;
        let c3;
        [tmp29, tmp30, tmp31, tmp32, tmp33] = items;
        const tmp19Result9 = reveal(tmp3[13]);
        class FocusedControlsBottomControlsTsx4 {
          constructor() {
            let diff;
            if (c0) {
              diff = tmp - c2;
            } else {
              diff = tmp - c3;
            }
            return diff;
          }
        }
        const items1 = [tmp30, tmp31, tmp32, tmp33];
        FocusedControlsBottomControlsTsx4.__closure = items1;
        FocusedControlsBottomControlsTsx4.__workletHash = 1549735131258;
        FocusedControlsBottomControlsTsx4.__initData = tmp29;
        derivedValue = tmp19Result9.useDerivedValue(FocusedControlsBottomControlsTsx4);
        const tmp19Result10 = reveal(tmp3[13]);
        const sharedValue1 = tmp19Result10.useSharedValue(0);
        const tmp19Result11 = reveal(tmp3[13]);
        const sharedValue2 = tmp19Result11.useSharedValue(false);
        const tmp19Result12 = reveal(tmp3[13]);
        const sharedValue3 = tmp19Result12.useSharedValue(0);
        const items2 = [sharedValue, derivedValue];
        const callback = obj3.useCallback(() => {
          let num = 0;
          const tmp2 = 0 !== sharedValue.get();
          const tmp = sharedValue;
          if (!tmp2) {
            num = -derivedValue.get();
          }
          set = tmp.set;
          const obj = timing_timing;
          const result = set(obj.withTiming(num, obj4));
          if (tmp2) {
            c9();
          } else {
            metroImportAll();
          }
          closure_3(!tmp2);
        }, items2);
        const Gesture = tmp19(tmp3[19]).Gesture;
        const items3 = [closure_27, , , , , , , ];
        const onStart = Gesture.Pan().onStart;
        Gesture.Pan();
        items3[1] = reveal(tmp3[20]).scheduleOnRN;
        items3[2] = sendCallback;
        items3[3] = sharedValue2;
        items3[4] = sharedValue;
        items3[5] = 0;
        items3[6] = sharedValue3;
        items3[7] = sharedValue1;
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        let c4;
        let c5;
        let c6;
        [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50] = items3;
        class FocusedControlsBottomControlsTsx5 {
          constructor() {
            _undefined(c1);
            const result = _undefined2.set(_undefined3.get() !== c4);
            const result1 = _undefined4.set(0);
            const tmp4 = null != _undefined3.get() && _undefined2.get();
            if (!tmp4) {
              const result2 = _undefined5.set(0);
            }
          }
        }
        const items4 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50];
        FocusedControlsBottomControlsTsx5.__closure = items4;
        FocusedControlsBottomControlsTsx5.__workletHash = 927560176042;
        FocusedControlsBottomControlsTsx5.__initData = tmp43;
        const items5 = [closure_28, sharedValue3, sharedValue, derivedValue, sharedValue1];
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        [tmp53, tmp54, tmp55, tmp56, tmp57] = items5;
        const onStartResult = onStart(FocusedControlsBottomControlsTsx5);
        class FocusedControlsBottomControlsTsx6 {
          constructor(velocityY) {
            const result = _undefined.set(velocityY.velocityY);
            const result1 = -1 * _undefined2.get();
            const tmp2 = _undefined2;
            if (result1 <= _undefined3.get() + 16) {
              set = tmp2.set;
              let num = _undefined4.get();
              if (num == null) {
                num = 0;
              }
              const result2 = set(num + velocityY.translationY);
            }
          }
        }
        const items6 = [tmp54, tmp55, tmp56, tmp57];
        FocusedControlsBottomControlsTsx6.__closure = items6;
        FocusedControlsBottomControlsTsx6.__workletHash = 14749766068982;
        FocusedControlsBottomControlsTsx6.__initData = tmp53;
        const items7 = [closure_29, sharedValue2, sharedValue, derivedValue, sharedValue3, 500, 0, , , , , , , , , , ];
        const onEnd = onStartResult.onUpdate(FocusedControlsBottomControlsTsx6).onEnd;
        onStartResult.onUpdate(FocusedControlsBottomControlsTsx6);
        items7[7] = reveal(tmp3[20]).scheduleOnRN;
        items7[8] = function handleOpen() {
          const tmp = first;
          if (!tmp) {
            if (onDrawerOpen != null) {
              tmp2();
            }
            closure_3(true);
          }
        };
        items7[9] = sharedValue1;
        items7[10] = reveal(tmp3[18]).withTiming;
        items7[11] = obj4;
        items7[12] = tmp2(tmp3[21]);
        items7[13] = reveal(tmp3[15]).TooltipNames;
        items7[14] = obj5;
        items7[15] = stopCallback;
        items7[16] = function handleClose() {
          const tmp = first;
          if (tmp) {
            if (onDrawerClose != null) {
              tmp2();
            }
            closure_3(false);
          }
        };
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        c4 = undefined;
        c5 = undefined;
        c6 = undefined;
        let c7;
        let c8;
        let c9;
        let c10;
        let c11;
        let c12;
        let c13;
        let c14;
        let c15;
        [tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80] = items7;
        const tmp60 = obj4;
        class FocusedControlsBottomControlsTsx7 {
          constructor() {
            const value = _undefined.get();
            const result = -1 * _undefined2.get();
            const result1 = _undefined3.get() / 2;
            let num = _undefined4.get();
            obj4 = _undefined4;
            if (num == null) {
              num = 0;
            }
            const tmp5 = -1 * num >= c4;
            let num2 = obj4.get();
            if (num2 == null) {
              num2 = 0;
            }
            if (!tmp5) {
              if (!tmp8) {
                if (result1 <= result) {
                  _undefined5(c7);
                  const result2 = _undefined6.set(-obj3.get());
                  const result3 = obj2.set(_undefined7(_undefined6.get(), c10));
                  const result4 = obj.set(true);
                  _undefined5(_undefined8.acknowledgeTooltip, _undefined9.SCREENSHARE_SWIPE_UP_CONTROLS);
                } else {
                  const result5 = _undefined6.set(0);
                  const result6 = obj2.set(_undefined7(tmp7, c13));
                  const result7 = obj.set(false);
                  _undefined5(c14);
                  _undefined5(c15);
                }
              }
              const result8 = _undefined6.set(0);
              const result9 = obj2.set(_undefined7(tmp7, c13));
              const result10 = obj.set(false);
              _undefined5(c14);
              _undefined5(c15);
            }
            _undefined5(c7);
            const result11 = _undefined6.set(-obj3.get());
            const result12 = obj2.set(_undefined7(_undefined6.get(), c10));
            const result13 = obj.set(true);
            _undefined5(_undefined8.acknowledgeTooltip, _undefined9.SCREENSHARE_SWIPE_UP_CONTROLS);
          }
        }
        const items8 = [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80];
        FocusedControlsBottomControlsTsx7.__closure = items8;
        FocusedControlsBottomControlsTsx7.__workletHash = 17091420502877;
        FocusedControlsBottomControlsTsx7.__initData = tmp64;
        const items9 = [sharedValue, onEnd(FocusedControlsBottomControlsTsx7), callback, first];
        const tmp23Result = tmp23(items9, 4);
        first1 = tmp23Result[0];
        closure_3 = tmp84;
        const items10 = [closure_30, reveal, sum, bound, tmp5, right, tmp6, , ];
        const tmp83 = tmp23Result[1];
        const tmp85 = tmp23Result[3];
        const useAnimatedStyle = reveal(tmp3[13]).useAnimatedStyle;
        reveal(tmp3[13]);
        items10[7] = reveal(tmp3[18]).withTiming;
        items10[8] = tmp60;
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        c4 = undefined;
        c5 = undefined;
        c6 = undefined;
        c7 = undefined;
        [tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97] = items10;
        class FocusedControlsBottomControlsTsx8 {
          constructor() {
            let items;
            let num;
            let num2;
            let num4;
            size = { position: "absolute", height, overflow: "hidden", bottom: num, right: num2, borderRadius: num4, width, transform: items };
            num = 0;
            if (c3) {
              num = 16;
            }
            num2 = 0;
            if (c3) {
              num2 = 16 + c4;
            }
            num4 = 0;
            if (c3) {
              num4 = 8;
            }
            let num5 = 0;
            if (!c0) {
              num5 = c1;
            }
            items = [{ translateY: tmp3(num5, c7) }];
            ({ translateY: _undefined(num5, c7) });
            return size;
          }
        }
        const items11 = [tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97];
        FocusedControlsBottomControlsTsx8.__closure = items11;
        FocusedControlsBottomControlsTsx8.__workletHash = 4296419497467;
        FocusedControlsBottomControlsTsx8.__initData = tmp89;
        const items12 = [tmp5, first1];
        const animatedStyle = useAnimatedStyle(FocusedControlsBottomControlsTsx8);
        const effect = obj3.useEffect(() => {
          set = first1.set;
          const obj = timing_timing;
          const result = set(obj.withTiming(0, obj5));
        }, items12);
        const items13 = [reveal, first1];
        const effect1 = obj3.useEffect(() => {
          const tmp = reveal;
          if (tmp) {
            const result = first1.set(0);
          }
        }, items13);
        const items14 = [first1];
        const effect2 = obj3.useEffect(() => {
          function handleSelectActivity() {
            const obj = reveal(first1[18]);
            const result = set(obj.withTiming(0, obj5));
          }
          let ComponentDispatch = reveal(first1[24]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
          return () => {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
          };
        }, items14);
        const items15 = [closure_31, bound, diff, first1];
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        [tmp104, tmp105, tmp106, tmp107] = items15;
        const tmp19Result14 = reveal(tmp3[13]);
        class FocusedControlsBottomControlsTsx9 {
          constructor() {
            let items;
            const obj = { height, transform: items };
            items = [{ translateY: c1 + _undefined.get() }];
            ({ translateY: c1 + _undefined.get() });
            return obj;
          }
        }
        const items16 = [tmp105, tmp106, tmp107];
        FocusedControlsBottomControlsTsx9.__closure = items16;
        FocusedControlsBottomControlsTsx9.__workletHash = 5137539977884;
        FocusedControlsBottomControlsTsx9.__initData = tmp104;
        const items17 = [tmp23Result[2]];
        const animatedStyle1 = tmp19Result14.useAnimatedStyle(FocusedControlsBottomControlsTsx9);
        const effect3 = obj3.useEffect(() => {
          let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_3);
          return () => {
            const ComponentDispatch = reveal(first1[24]).ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, closure_1_3);
          };
        }, items17);
        const tmp19Result15 = reveal(tmp3[25]);
        const theme = tmp19Result15.useThemeContext().theme;
        obj4 = { style: animatedStyle, pointerEvents: "box-none", children: closure_13(GestureDetector, obj5) };
        const View = tmp2(tmp3[13]).View;
        obj5 = { gesture: tmp83, children: tmp111(View2, obj6) };
        GestureDetector = tmp19(tmp3[19]).GestureDetector;
        obj6 = { style: items18, children: items20 };
        items18 = [tmp.bottomDrawerContainer, animatedStyle1];
        View2 = tmp2(tmp3[13]).View;
        const obj7 = { blurTheme: theme, style: items19 };
        items19 = [tmp.visualEffectView, ];
        let prop = null;
        const tmp2Result = tmp2(tmp3[26]);
        tmp111 = closure_14;
        const tmp19Result16 = reveal(tmp3[27]);
        if (tmp19Result16.isThemeLight(theme)) {
          prop = tmp.visualEffectViewBackground;
        }
        items19[1] = prop;
        items20 = [closure_13(tmp2Result, obj7), , , ];
        const obj8 = { onPressHeader: tmp23Result[2], aboveActionBar, positionY: first1, offsetY: diff, isExpanded: tmp85 };
        items20[1] = closure_13(FocusedControlsAboveActionBarView, obj8);
        items20[2] = children;
        const obj9 = { expandedControls, availableHeight: diff2, positionY: first1 };
        items20[3] = closure_13(FocusedControlsExpanded, obj9);
        return closure_13(View, obj4);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
({ View: hasOwnProperty, TouchableWithoutFeedback: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ clearFocusTimer: metroImportAll, resetFocusTimer: c9 } = ChannelCallStore);
({ BOX_MODE_THRESHOLD_WIDTH: c10, BOX_MODE_ACTIONSHEET_HEIGHT: unpackModuleId } = ChannelCallConstants);
({ ComponentActions: closure_12, Fonts } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
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
let closure_17 = createStyles(obj);
let obj4 = { easing: native.STANDARD_EASING, duration: 250 };
let obj5 = { easing: native.STANDARD_EASING, duration: 400 };
let closure_20 = { code: "(function FocusedControlsBottomControlsTsx1(){let[positionY,EXPANDED_DRAWER_SHOW_POSITION]=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};})" };
let closure_22 = { code: "(function FocusedControlsBottomControlsTsx2(){let[positionY,EXPANDED_DRAWER_SHOW_POSITION]=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};})" };
let closure_24 = { code: "(function FocusedControlsBottomControlsTsx3(){let[offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY]=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};})" };
let closure_26 = { code: "(function FocusedControlsBottomControlsTsx4(){let[isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY]=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;})" };
let closure_27 = { code: "(function FocusedControlsBottomControlsTsx5(){let[scheduleOnRN,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY]=this.__closure;scheduleOnRN(clearFocusTimer);drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}})" };
let closure_28 = { code: "(function FocusedControlsBottomControlsTsx6(event){let[velocity,positionY,maxHeight,startY]=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);})" };
let closure_29 = { code: "(function FocusedControlsBottomControlsTsx7(){let[drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,scheduleOnRN,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose]=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){scheduleOnRN(handleOpen);startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);scheduleOnRN(TooltipActionCreators.acknowledgeTooltip,TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);scheduleOnRN(resetFocusTimer);scheduleOnRN(handleClose);}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}})" };
let closure_30 = { code: "(function FocusedControlsBottomControlsTsx8(){let[reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG]=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};})" };
let closure_31 = { code: "(function FocusedControlsBottomControlsTsx9(){let[sheetHeight,offsetY,positionY]=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};})" };
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
  const tmp = closure_17();
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
  tmp6 = authStore3;
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
