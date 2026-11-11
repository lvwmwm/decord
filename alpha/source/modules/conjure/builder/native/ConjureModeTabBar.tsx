// Module ID: 13243
// Function ID: 13244
// Name: ConjureModeTabBar
// Dependencies: [19, 17, 21, 5243, 575, 5839, 1652, 5876, 1377, 11192, 1113, 5866, 2]
// Exports: default

// Module 13243 (ConjureModeTabBar)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 11192 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let id;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
const intl2 = tmp2(1113);
const PlatformUtils = tmp2(1377);
const _mod1652 = tmp2(1652);
const Text_Text = tmp2(5866);
const spring_spring = tmp2(5876);
function ConjureModeTab(index) {
  let activeIndex;
  let closure_129_2;
  let extras;
  let formatToPlainStringResult;
  let inactive;
  let itemCount;
  let itemStyle;
  let items4;
  let items5;
  let label;
  let labelStyle;
  let labelTextStyle;
  let obj5;
  let prefixStyle;
  let pressed;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp23;
  let tmp24;
  let tmp9;
  index = index.index;
  ({ activeIndex, pressed } = index);
  ({ extras, onSelect: closure_129_2 } = index);
  let onShowMenu;
  let menuLabel;
  ({ label, itemCount, itemStyle, labelStyle, labelTextStyle, prefixStyle } = index);
  let tmp = closure_12();
  let tmp2 = require;
  const tmp3 = dependencyMap;
  let obj = useStateFromSharedValue;
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => Math.round(arg0) === index);
  const obj2 = useStateFromSharedValue;
  const derivedStateFromSharedValue1 = obj2.useDerivedStateFromSharedValue(pressed, (arg0) => arg0 === index);
  useStateFromSharedValue;
  if (derivedStateFromSharedValue1) {
    inactive = tmp.active;
  } else {
    inactive = tmp.inactive;
  }
  let tmp2Result = _mod1652;
  let items = [closure_17, pressed, tmp, index, activeIndex, , ];
  const useAnimatedStyle = tmp2Result.useAnimatedStyle;
  items[5] = spring_spring.withSpring;
  items[6] = closure_10;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class ConjureModeTabBarTsx5 {
    constructor() {
      const value = _undefined.get();
      let active = _undefined2.inactive;
      let tmp4 = value === c2;
      const tmp2 = _undefined2;
      if (!tmp4) {
        let tmp5 = value < 0;
        if (tmp5) {
          const _Math = Math;
          tmp5 = Math.round(_undefined3.get()) === tmp3;
        }
        tmp4 = tmp5;
      }
      if (tmp4) {
        active = tmp2.active;
      }
      const obj = { color: _undefined4(active, c5, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  ConjureModeTabBarTsx5.__closure = items1;
  ConjureModeTabBarTsx5.__workletHash = 1750569862445;
  ConjureModeTabBarTsx5.__initData = tmp9;
  onShowMenu = undefined;
  const animatedStyle = useAnimatedStyle(ConjureModeTabBarTsx5);
  if (extras != null) {
    onShowMenu = extras.onShowMenu;
  }
  menuLabel = undefined;
  if (extras != null) {
    menuLabel = extras.menuLabel;
  }
  const items2 = [menuLabel, onShowMenu];
  const items3 = [onShowMenu];
  const memo = react.useMemo(() => {
    let tmp;
    if (null != onShowMenu) {
      if (null != menuLabel) {
        const items = [{ name: "longpress", label: tmp2 }];
        tmp = items;
        const obj = { name: "longpress", label: tmp2 };
      }
    }
    return tmp;
  }, items2);
  const obj3 = {
    style: itemStyle,
    onPress() {
      const tmp = derivedStateFromSharedValue;
      if (tmp) {
        let tmp2Result;
        if (null != onShowMenu) {
          tmp2Result = tmp2();
        }
        return tmp2Result;
      }
      tmp2Result = closure_1_2(index);
    },
    onLongPress: onShowMenu,
    onPressIn() {
      return pressed.set(index);
    },
    onPressOut() {
      return pressed.set(-1);
    },
    accessibilityRole: "tab",
    accessibilityState: { selected: derivedStateFromSharedValue },
    accessibilityActions: memo,
    onAccessibilityAction: react.useCallback((nativeEvent) => {
      if ("longpress" === nativeEvent.nativeEvent.actionName) {
        if (onShowMenu != null) {
          tmp();
        }
      }
    }, items3),
    accessibilityHint: formatToPlainStringResult,
    children: tmp23(tmp24, obj5)
  };
  formatToPlainStringResult = undefined;
  const tmp21 = React3;
  const tmp2Result2 = PlatformUtils;
  if (tmp2Result2.isAndroid()) {
    const intl = intl2.intl;
    const obj4 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(intl2.t["4EsQA1"], obj4);
  }
  let prefix;
  obj5 = { style: labelStyle, children: items4 };
  tmp23 = metroImportAll;
  tmp24 = metroRequire;
  if (extras != null) {
    prefix = extras.prefix;
  }
  let tmp20Result = null;
  if (null != prefix) {
    const obj6 = { variant: "body-sm/medium", color: "text-muted", style: prefixStyle, children: extras.prefix };
    tmp20Result = tmp20(Text_Text.Text, obj6);
  }
  items4 = [tmp20Result, , ];
  const obj7 = { animated: true, variant: "body-sm/semibold", style: items5, lineClamp: 1, children: label };
  items5 = [labelTextStyle, animatedStyle];
  items4[1] = metroImportDefault(Text_Text.Text, obj7);
  let renderTrailingIconResult;
  if (extras != null) {
    const renderTrailingIcon = extras.renderTrailingIcon;
    if (renderTrailingIcon != null) {
      renderTrailingIconResult = renderTrailingIcon(inactive);
    }
  }
  items4[2] = renderTrailingIconResult;
  return metroImportDefault(tmp21, obj3);
}
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = { mass: 0.3, damping: 13, stiffness: 100, overshootClamping: true };
let closure_10 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = createStyles_mod;
let closure_11 = createStyles.createStyles((borderRadius, arg1) => {
  const obj = { scrollContentContainer: { flexGrow: 1 }, controlsContainer: { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + 4, paddingVertical: 4, flexDirection: "row", alignItems: "center" }, indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" }, indicator: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius }, indicatorHidden: { opacity: 0 }, item: { width: `${1 / arg1 * 100}%`, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center" }, itemFirst: { marginStart: 4, marginEnd: -4 }, itemLast: { marginStart: -4, marginEnd: 4 }, label: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%" }, labelText: { flexShrink: 1 }, prefix: { flexShrink: 0 } };
  ({ backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + 4, paddingVertical: 4, flexDirection: "row", alignItems: "center" });
  ({ flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius });
  ({ width: `${1 / arg1 * 100}%`, borderRadius: nativeDefault.radii.lg, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center" });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%" });
  return obj;
});
createStyles = createStyles_mod;
let obj = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_12 = createStyles.createStyleProperties(obj);
let closure_13 = { code: "(function ConjureModeTabBarTsx1(){let[indicatorWidth]=this.__closure;return indicatorWidth.get();})" };
let closure_14 = { code: "(function ConjureModeTabBarTsx2(_,previous){let[previousIndicatorWidth]=this.__closure;if(previous!=null)previousIndicatorWidth.set(previous);})" };
let closure_15 = { code: "(function ConjureModeTabBarTsx3(){let[activeIndex,itemCount]=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);})" };
let closure_16 = { code: "(function ConjureModeTabBarTsx4(){let[clampedActiveIndex,defaultActiveIndex,indicatorWidth,pressedIndex,PRESSED_TRANSLATE_AMOUNT,SEGMENT_SPACING,itemCount,previousIndicatorWidth,withSpring,INDICATOR_SPRING]=this.__closure;let translateX=(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();let scaleX=1;if(pressedIndex.get()>=0&&pressedIndex.get()!==clampedActiveIndex.get()){const direction=pressedIndex.get()<clampedActiveIndex.get()?-1:1;scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=direction*indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}if(clampedActiveIndex.get()===0)translateX+=SEGMENT_SPACING;else if(clampedActiveIndex.get()===itemCount-1)translateX-=SEGMENT_SPACING;const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated)previousIndicatorWidth.set(indicatorWidth.get());return{transform:[{translateX:animated?withSpring(translateX,INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,INDICATOR_SPRING)}]};})" };
let closure_17 = { code: "(function ConjureModeTabBarTsx5(){let[pressed,colors,index,activeIndex,withSpring,TEXT_SPRING]=this.__closure;const pressedIndex=pressed.get();let color=colors.inactive;if(pressedIndex===index)color=colors.active;else if(pressedIndex<0&&Math.round(activeIndex.get())===index)color=colors.active;return{color:withSpring(color,TEXT_SPRING,'animate-always')};})" };
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureModeTabBar.tsx");

export default function ConjureModeTabBar(arg0) {
  let items;
  let items10;
  let obj6;
  let pressedIndex;
  let require;
  let state;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp32;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ state, extras: require } = arg0);
  pressedIndex = undefined;
  let closure_7;
  let sharedValue2;
  closure_9 = undefined;
  const activeIndex = state.activeIndex;
  ({ items, pressedIndex } = state);
  const setActiveIndex = state.setActiveIndex;
  let tmp = require;
  let tmp2 = pressedIndex;
  let obj = require("useToken");
  const length = items.length;
  let tmp3 = closure_11(obj.useToken(activeIndex(pressedIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), length);
  let closure_5 = tmp3;
  const obj2 = require("module_1652");
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = require("module_1652");
  const sharedValue1 = obj3.useSharedValue(0);
  let obj4 = require("module_1652");
  const items1 = [closure_13, sharedValue];
  let c0;
  [tmp6, tmp7] = items1;
  class ConjureModeTabBarTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp7];
  ConjureModeTabBarTsx1.__closure = items2;
  ConjureModeTabBarTsx1.__workletHash = 4356434098862;
  ConjureModeTabBarTsx1.__initData = tmp6;
  const items3 = [closure_14, sharedValue1];
  c0 = undefined;
  [tmp8, tmp9] = items3;
  class ConjureModeTabBarTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        const result = _undefined.set(arg1);
      }
    }
  }
  const items4 = [tmp9];
  ConjureModeTabBarTsx2.__closure = items4;
  ConjureModeTabBarTsx2.__workletHash = 12016602073272;
  ConjureModeTabBarTsx2.__initData = tmp8;
  const animatedReaction = obj4.useAnimatedReaction(ConjureModeTabBarTsx1, ConjureModeTabBarTsx2);
  const items5 = [sharedValue];
  closure_7 = setActiveIndex.useCallback((nativeEvent) => sharedValue.set(nativeEvent.nativeEvent.layout.width), items5);
  const tmpResult = tmp(tmp2[6]);
  sharedValue2 = tmpResult.useSharedValue(activeIndex.get());
  const items6 = [closure_15, activeIndex, length];
  c0 = undefined;
  let c1;
  [tmp12, tmp13, tmp14] = items6;
  const tmpResult5 = tmp(tmp2[6]);
  class ConjureModeTabBarTsx3 {
    constructor() {
      return Math.min(Math.max(_undefined.get(), 0), c1 - 1);
    }
  }
  const items7 = [tmp13, tmp14];
  ConjureModeTabBarTsx3.__closure = items7;
  ConjureModeTabBarTsx3.__workletHash = 12987911031538;
  ConjureModeTabBarTsx3.__initData = tmp12;
  const derivedValue = tmpResult5.useDerivedValue(ConjureModeTabBarTsx3);
  const items8 = [closure_16, derivedValue, sharedValue2, sharedValue, pressedIndex, 0.04, 4, length, sharedValue1, , ];
  const useAnimatedStyle = tmp(tmp2[6]).useAnimatedStyle;
  tmp(tmp2[6]);
  items8[9] = tmp(tmp2[7]).withSpring;
  items8[10] = closure_9;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items8;
  class ConjureModeTabBarTsx4 {
    constructor() {
      let items;
      let sum1;
      const value = _undefined.get();
      const diff = value - _undefined2.get();
      const result = diff * _undefined3.get();
      let num = 1;
      let sum = result;
      if (_undefined4.get() >= 0) {
        const value4 = obj3.get();
        num = 1;
        sum = result;
        if (value4 !== _undefined.get()) {
          const value5 = obj3.get();
          let num2 = 1;
          if (value5 < _undefined.get()) {
            num2 = -1;
          }
          num = 1 + c4;
          sum = result + num2 * obj2.get() * (c4 / 2);
        }
      }
      if (0 === _undefined.get()) {
        sum1 = sum + c5;
      } else {
        sum1 = sum;
        if (_undefined.get() === c6 - 1) {
          sum1 = sum - c5;
        }
      }
      const value6 = obj2.get();
      const tmp13 = value6 === _undefined5.get();
      const obj4 = _undefined5;
      if (!tmp13) {
        const result1 = obj4.set(obj2.get());
      }
      let tmp15 = sum1;
      if (tmp13) {
        tmp15 = _undefined6(sum1, c9);
      }
      const obj5 = { transform: items };
      items = [{ translateX: tmp15 }, { scaleX: _undefined6(num, c9) }];
      ({ scaleX: _undefined6(num, c9) });
      return obj5;
    }
  }
  const items9 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  ConjureModeTabBarTsx4.__closure = items9;
  ConjureModeTabBarTsx4.__workletHash = 680934149064;
  ConjureModeTabBarTsx4.__initData = tmp17;
  closure_9 = useAnimatedStyle(ConjureModeTabBarTsx4);
  const mapped = items.map((id, index) => {
    let items;
    id = id.id;
    const tmp = sharedValue2.get() === index;
    let tmp3;
    const View = _modDef1652.View;
    const tmp2 = metroImportDefault;
    if (tmp) {
      tmp3 = metroImportDefault;
    }
    const obj = { onLayout: tmp3, style: items };
    items = [closure_5.indicator, tmp ? closure_9 : closure_5.indicatorHidden];
    return tmp2(View, obj, id);
  });
  const mapped1 = items.map((id, index) => {
    let itemLast;
    let items;
    let tmp6;
    id = id.id;
    const label = id.label;
    if (0 === index) {
      itemLast = closure_5.itemFirst;
    } else if (index === length - 1) {
      itemLast = closure_5.itemLast;
    }
    const obj = { label, index, itemCount: length, activeIndex, pressed: pressedIndex, extras: tmp6, onSelect: setActiveIndex, itemStyle: items, labelStyle: null, labelTextStyle: null, prefixStyle: null };
    tmp6 = undefined;
    const tmp4 = metroImportDefault;
    const tmp5 = ConjureModeTab;
    if (_require != null) {
      tmp6 = _require[id];
    }
    items = [closure_5.item, itemLast];
    ({ label: obj.labelStyle, labelText: obj.labelTextStyle, prefix: obj.prefixStyle } = closure_5);
    return tmp4(tmp5, obj, id);
  });
  let str;
  const tmp31 = closure_5;
  const tmpResult7 = tmp(tmp2[8]);
  if (tmpResult7.isIOS()) {
    str = "tabbar";
  }
  let obj5 = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, contentContainerStyle: tmp3.scrollContentContainer, children: tmp32(sharedValue, obj6, items.length) };
  let str2;
  tmp32 = sharedValue2;
  const tmpResult8 = tmp(tmp2[8]);
  if (tmpResult8.isAndroid()) {
    str2 = "tablist";
  }
  obj6 = { accessibilityRole: str2, style: tmp3.controlsContainer, children: items10 };
  items10 = [, ];
  const obj7 = { accessible: false, style: tmp3.indicatorContainer, children: mapped };
  items10[0] = closure_7(sharedValue, obj7);
  items10[1] = mapped1;
  return closure_7(tmp31, obj5);
};
