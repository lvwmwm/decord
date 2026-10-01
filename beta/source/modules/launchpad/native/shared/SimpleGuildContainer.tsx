// Module ID: 16802
// Function ID: 16803
// Name: SimpleGuildContainer
// Dependencies: [19, 17, 21, 4836, 7293, 15970, 576, 16801, 4531, 16803, 4566, 5280, 2]
// Exports: SimpleGuildContainer, SimpleGuildContainerAnimated

// Module 16802 (SimpleGuildContainer)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import MaskedBadgeDefault from "MaskedBadge" /* 7293 */;
import GuildsBarActivityIndicator from "GuildsBarActivityIndicator" /* 15970 */;
import CutoutImageDefault from "CutoutImage" /* 16803 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GuildsBarActivityIndicatorDefault = GuildsBarActivityIndicator;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 48;
const springConfig = { mass: 0.2, damping: 40, stiffness: 300, overshootClamping: true, restSpeedThreshold: 1 };
let closure_11 = createStyles.createStyles({ badgeWrapper: { position: "absolute", right: -4, bottom: 0 } });
let closure_12 = react.memo((backgroundColor) => {
  let badge;
  let obj2;
  let tmp2;
  let unread;
  ({ badge, unread } = backgroundColor);
  backgroundColor = backgroundColor.backgroundColor;
  if (badge > 0) {
    const obj = { style: tmp.badgeWrapper, children: metroRequire(MaskedBadgeDefault, obj2) };
    obj2 = { value: badge, unread, backgroundColor };
    tmp2 = metroRequire(hasOwnProperty, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
});
let closure_13 = react.memo((arg0) => {
  let activityIndicatorState;
  let backgroundColor;
  let guildId;
  let obj4;
  let obj7;
  let tmp2;
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    const obj2 = { style: obj4, source: null, IconComponent: null, isCurrentUserConnected: null };
    obj4 = { backgroundColor };
    ({ source: obj3.source, IconComponent: obj3.IconComponent, isCurrentUserConnected: obj3.isCurrentUserConnected } = activityIndicatorState);
    tmp2 = metroRequire(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, obj2);
  } else {
    tmp2 = null;
    if (null != guildId) {
      const obj = { guildId, style: obj7 };
      obj7 = { backgroundColor };
      tmp2 = metroRequire(GuildsBarActivityIndicatorDefault, obj);
    }
  }
  return tmp2;
});
const __initData = { code: "function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}" };
const __initData2 = { code: "function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}" };
const __initData3 = { code: "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}" };
const __initData4 = { code: "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}" };
const __initData5 = { code: "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuildContainer.tsx");

export const SimpleGuildContainer = function SimpleGuildContainer(selected) {
  let accessibilityLabel;
  let children;
  let guildIconRef;
  let guildId;
  let items2;
  let items3;
  let obj5;
  let onAccessibilityAction;
  let onLayout;
  let str;
  let style;
  selected = selected.selected;
  let num = selected.size;
  ({ guildIconRef, guildId, style, children } = selected);
  if (num === undefined) {
    num = 48;
  }
  let borderRadius = selected.borderRadius;
  if (borderRadius === undefined) {
    let num2 = 24;
    if (selected) {
      let tmp = num;
      let tmp2 = borderRadius;
      num2 = num(borderRadius[6]).radii.lg;
    }
    borderRadius = num2;
  }
  const badge = selected.badge;
  const unread = selected.unread;
  const backgroundColor = selected.backgroundColor;
  let flag = selected.folder;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selected.usingCutout;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const activityIndicatorState = selected.activityIndicatorState;
  ({ accessibilityLabel, onAccessibilityAction, onLayout } = selected);
  const tmp3 = num(borderRadius[7])();
  const iconStroke = tmp3.iconStroke;
  const iconBackground = tmp3.iconBackground;
  let obj = selected(borderRadius[8]);
  const token = obj.useToken(num(borderRadius[6]).colors.BACKGROUND_BRAND);
  let obj2 = badge;
  let items = [selected, flag2, , , , , , , ];
  let source;
  const useMemo = badge.useMemo;
  if (activityIndicatorState != null) {
    source = activityIndicatorState.source;
  }
  items[2] = source;
  items[3] = badge;
  items[4] = unread;
  items[5] = num;
  items[6] = token;
  items[7] = borderRadius;
  items[8] = backgroundColor;
  const items1 = [borderRadius, flag2, num, iconStroke];
  const memo = useMemo(() => {
    let items;
    let num4;
    let num5;
    let size1;
    let tmp = null;
    if (selected) {
      let tmp13Result;
      const tmp2 = flag2;
      if (tmp2) {
        let source;
        const obj2 = { style: { position: "absolute", top: -2, left: -2 }, cutoutTopRightSize: num4, cutoutTopRightInsetX: 8, cutoutTopRightInsetY: 8, cutoutBottomRightSize: num5, cutoutBottomRightInsetX: 6, cutoutBottomRightInsetY: 7, imageSize: num + 4, imageBackgroundColor: token, imageBorderRadius: borderRadius + 2, clipInnerAmount: num };
        const tmp13 = metroRequire;
        const tmp16 = CutoutImageDefault;
        if (activityIndicatorState != null) {
          source = activityIndicatorState.source;
        }
        num4 = 0;
        if (null != source) {
          num4 = 13;
        }
        num5 = 13;
        if (badge <= 0) {
          let num6 = 0;
          if (unread) {
            num6 = 11;
          }
          num5 = num6;
        }
        tmp13Result = tmp13(tmp16, obj2);
      } else {
        const obj3 = { style: size };
        size = { borderRadius: borderRadius + 2, borderWidth: 2, borderColor: token, position: "absolute", top: -2, left: -2, width: 2 + 4, height: 2 + 4 };
        const obj = { children: items };
        items = [metroRequire(hasOwnProperty, obj3), ];
        const obj4 = { style: size1 };
        size1 = { borderRadius, borderWidth: 3, borderColor: backgroundColor, position: "absolute", top: 0, left: 0, width: 2, height: 2 };
        items[1] = metroRequire(hasOwnProperty, obj4);
        tmp13Result = metroImportAll(metroImportDefault, obj);
      }
      tmp = tmp13Result;
    }
    return tmp;
  }, items);
  let obj3 = { style, accessible: true, accessibilityState: { selected }, accessibilityRole: "button", accessibilityLabel, accessibilityActions: items2, onAccessibilityAction, children: items3 };
  items2 = [{ name: "activate" }];
  let obj4 = { ref: guildIconRef, onLayout, style: obj5, children };
  obj5 = { borderRadius, overflow: "hidden", backgroundColor: str };
  str = "transparent";
  const memo1 = obj2.useMemo(() => {
    let tmp = null;
    if (!flag2) {
      const obj = { style: size };
      size = { position: "absolute", borderWidth: 1, borderColor: iconStroke.color, borderRadius, width: num, height: num };
      tmp = metroRequire(hasOwnProperty, obj);
    }
    return tmp;
  }, items1);
  const tmp8 = iconStroke;
  if (!flag2) {
    let color = backgroundColor;
    if (!flag) {
      color = iconBackground.color;
    }
    str = color;
  }
  items3 = [tmp10(tmp9, obj4), memo1, memo, tmp10(closure_13, { backgroundColor, guildId, activityIndicatorState }), tmp10(closure_12, { backgroundColor, badge, unread })];
  return tmp8(backgroundColor, obj3);
};
export const SimpleGuildContainerAnimated = function SimpleGuildContainerAnimated(arg0) {
  let accessibilityLabel;
  let activityIndicatorState;
  let backgroundColor;
  let badge;
  let borderRadius;
  let children;
  let folder;
  let guildIconRef;
  let guildId;
  let items;
  let obj11;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let selected;
  let style;
  let tmp9Result;
  let unread;
  let usingCutout;
  ({ style, selected } = arg0);
  ({ size, borderRadius, backgroundColor } = arg0);
  ({ folder, usingCutout, onPress } = arg0);
  let iconBackground;
  borderRadius = undefined;
  let derivedValue;
  let derivedValue1;
  let BRAND_500;
  const tmp = backgroundColor;
  ({ guildIconRef, guildId, children, badge, unread, activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onLongPress } = arg0);
  iconBackground = backgroundColor(iconBackground[7])().iconBackground;
  if (selected) {
    borderRadius = tmp(tmp2[6]).radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  const obj = selected(iconBackground[10]);
  class V {
    constructor() {
      return borderRadius;
    }
  }
  V.__closure = { targetRadius: borderRadius };
  V.__workletHash = 5259600477627;
  V.__initData = __initData;
  derivedValue = obj.useDerivedValue(V);
  let obj2 = selected(tmp2[10]);
  const fn = function z() {
    let num = 0;
    if (selected) {
      num = 1;
    }
    return num;
  };
  fn.__closure = { selected };
  fn.__workletHash = 12318204664732;
  fn.__initData = __initData2;
  derivedValue1 = obj2.useDerivedValue(fn);
  let obj3 = selected(tmp2[10]);
  class H {
    constructor() {
      let obj2;
      size = { borderRadius: obj2.withSpring(derivedValue.get(), springConfig), width: height, height, overflow: "hidden", backgroundColor: iconBackground.color };
      obj2 = spring;
      return size;
    }
  }
  H.__closure = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground };
  H.__workletHash = 11339684212259;
  H.__initData = __initData3;
  ({ withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, GUILD_SIZE: v48, iconBackground });
  const animatedStyle = obj3.useAnimatedStyle(H);
  BRAND_500 = tmp(tmp2[6]).unsafe_rawColors.BRAND_500;
  const fn2 = function j() {
    let obj2;
    let obj3;
    let withSpring;
    size = { borderRadius: obj2.withSpring(derivedValue.get() + 2, springConfig), borderWidth: withSpring(obj3.interpolate(derivedValue1.get(), [0, 1], [0, 2]), springConfig), borderColor: BRAND_500, position: "absolute", top: -2, left: -2, width: 52, height: 52 };
    obj2 = spring;
    withSpring = spring.withSpring;
    spring;
    obj3 = ReanimatedRexport;
    return size;
  };
  const obj5 = selected(iconBackground[10]);
  fn2.__closure = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[10]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 };
  fn2.__workletHash = 1481885125958;
  fn2.__initData = __initData4;
  ({ withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[10]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: v48 });
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const obj7 = selected(iconBackground[10]);
  class M {
    constructor() {
      let obj2;
      let obj3;
      let withSpring;
      size = { borderRadius: obj2.withSpring(derivedValue.get(), springConfig), borderWidth: withSpring(obj3.interpolate(derivedValue1.get(), [0, 1], [0, 3]), springConfig), borderColor: backgroundColor, position: "absolute", top: 0, left: 0, width: height, height };
      obj2 = spring;
      withSpring = spring.withSpring;
      spring;
      obj3 = ReanimatedRexport;
      return size;
    }
  }
  M.__closure = { withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[10]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 };
  M.__workletHash = 11592745547551;
  M.__initData = __initData5;
  const obj9 = { children: items };
  ({ withSpring: selected(iconBackground[11]).withSpring, toRadius: derivedValue, springConfig, interpolate: selected(iconBackground[10]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: v48 });
  const animatedStyle2 = obj7.useAnimatedStyle(M);
  items = [BRAND_500(tmp(iconBackground[10]).View, { style: animatedStyle, children }), BRAND_500(tmp(iconBackground[10]).View, { style: animatedStyle2 }), BRAND_500(tmp(iconBackground[10]).View, { style: animatedStyle1 }), BRAND_500(closure_13, { backgroundColor, guildId, activityIndicatorState }), BRAND_500(closure_12, { backgroundColor, badge, unread })];
  const tmp10 = closure_8(closure_7, obj9);
  if (null != onPress) {
    const obj10 = { ref: guildIconRef, style, onPress, onLongPress, accessibilityRole: "button", accessible: true, accessibilityLabel, accessibilityState: obj11, onAccessibilityAction, onLayout, children: tmp10 };
    obj11 = { selected };
    tmp9Result = tmp9(derivedValue, obj10);
  } else {
    const obj12 = { style, children: tmp10 };
    tmp9Result = tmp9(derivedValue1, obj12);
  }
  return tmp9Result;
};
