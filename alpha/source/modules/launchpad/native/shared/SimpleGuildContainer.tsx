// Module ID: 19383
// Function ID: 19384
// Name: SimpleGuildContainer
// Dependencies: [19, 17, 21, 5143, 9972, 18689, 575, 19382, 5734, 19384, 1652, 5773, 2]
// Exports: SimpleGuildContainer, SimpleGuildContainerAnimated

// Module 19383 (SimpleGuildContainer)
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5773 */;
import MaskedBadgeDefault from "MaskedBadge" /* 9972 */;
import GuildsBarActivityIndicator from "GuildsBarActivityIndicator" /* 18689 */;
import useSimpleGuildDefaultColorsDefault from "useSimpleGuildDefaultColors" /* 19382 */;
import CutoutImageDefault from "CutoutImage" /* 19384 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
const GuildsBarActivityIndicatorDefault = GuildsBarActivityIndicator;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = { mass: 0.2, damping: 40, stiffness: 300, overshootClamping: true };
let closure_10 = createStyles.createStyles({ badgeWrapper: { position: "absolute", right: -4, bottom: 0 } });
let closure_11 = react.memo(function SimpleGuildContainerBadge(backgroundColor) {
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
let closure_12 = react.memo(function SimpleGuildActivityIndicator(arg0) {
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
let closure_13 = { code: "(function SimpleGuildContainerTsx1(){let[targetRadius]=this.__closure;return targetRadius;})" };
let closure_14 = { code: "(function SimpleGuildContainerTsx2(){let[selected]=this.__closure;return selected?1:0;})" };
let closure_15 = { code: "(function SimpleGuildContainerTsx3(){let[withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground]=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};})" };
let closure_16 = { code: "(function SimpleGuildContainerTsx4(){let[withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE]=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};})" };
let closure_17 = { code: "(function SimpleGuildContainerTsx5(){let[withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE]=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuildContainer.tsx");

export function SimpleGuildContainer(selected) {
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
  items3 = [tmp10(tmp9, obj4), memo1, memo, tmp10(closure_12, { backgroundColor, guildId, activityIndicatorState }), tmp10(closure_11, { backgroundColor, badge, unread })];
  return tmp8(backgroundColor, obj3);
}
export function SimpleGuildContainerAnimated(arg0) {
  let accessibilityLabel;
  let activityIndicatorState;
  let backgroundColor;
  let badge;
  let borderRadius;
  let children;
  let folder;
  let guildIconRef;
  let guildId;
  let items10;
  let obj4;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let selected;
  let style;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp40Result;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let unread;
  let usingCutout;
  ({ style, selected, size, borderRadius, backgroundColor, folder, usingCutout, onPress } = arg0);
  ({ guildIconRef, guildId, children, badge, unread, activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onLongPress } = arg0);
  const iconBackground = useSimpleGuildDefaultColorsDefault().iconBackground;
  if (selected) {
    borderRadius = tmp(575).radii.lg;
  } else if (borderRadius == null) {
    borderRadius = 24;
  }
  const items = [closure_13, borderRadius];
  let c0;
  [tmp5, tmp6] = items;
  const obj = _mod1652;
  class SimpleGuildContainerTsx1 {
    constructor() {
      return closure_0;
    }
  }
  const items1 = [tmp6];
  SimpleGuildContainerTsx1.__closure = items1;
  SimpleGuildContainerTsx1.__workletHash = 4420638679650;
  SimpleGuildContainerTsx1.__initData = tmp5;
  const derivedValue = obj.useDerivedValue(SimpleGuildContainerTsx1);
  const items2 = [closure_14, selected];
  c0 = undefined;
  [tmp8, tmp9] = items2;
  const tmp4Result = _mod1652;
  class SimpleGuildContainerTsx2 {
    constructor() {
      num = 0;
      if (closure_0) {
        num = 1;
      }
      return num;
    }
  }
  const items3 = [tmp9];
  SimpleGuildContainerTsx2.__closure = items3;
  SimpleGuildContainerTsx2.__workletHash = 17443294777509;
  SimpleGuildContainerTsx2.__initData = tmp8;
  const derivedValue1 = tmp4Result.useDerivedValue(SimpleGuildContainerTsx2);
  const items4 = [closure_15, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[1] = spring_spring.withSpring;
  items4[2] = derivedValue;
  items4[3] = closure_9;
  items4[4] = 48;
  items4[5] = iconBackground;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items4;
  class SimpleGuildContainerTsx3 {
    constructor() {
      size = { borderRadius: closure_0(closure_1.get(), closure_2), width: closure_3, height: closure_3, overflow: "hidden", backgroundColor: closure_4.color };
      return size;
    }
  }
  const items5 = [tmp14, tmp15, tmp16, tmp17, tmp18];
  SimpleGuildContainerTsx3.__closure = items5;
  SimpleGuildContainerTsx3.__workletHash = 1759111490266;
  SimpleGuildContainerTsx3.__initData = tmp13;
  const animatedStyle = useAnimatedStyle(SimpleGuildContainerTsx3);
  const BRAND_500 = tmp(575).unsafe_rawColors.BRAND_500;
  const items6 = [closure_16, , , , , , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items6[1] = spring_spring.withSpring;
  items6[2] = derivedValue;
  items6[3] = closure_9;
  items6[4] = _mod1652.interpolate;
  items6[5] = derivedValue1;
  items6[6] = BRAND_500;
  items6[7] = 48;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items6;
  class SimpleGuildContainerTsx4 {
    constructor() {
      size = { borderRadius: closure_0(closure_1.get() + 2, closure_2), borderWidth: closure_0(closure_3(closure_4.get(), [0, 1], [0, 2]), closure_2), borderColor: closure_5, position: "absolute", top: -2, left: -2, width: closure_6 + 4, height: closure_6 + 4 };
      return size;
    }
  }
  const items7 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  SimpleGuildContainerTsx4.__closure = items7;
  SimpleGuildContainerTsx4.__workletHash = 3131949958271;
  SimpleGuildContainerTsx4.__initData = tmp21;
  const animatedStyle2 = useAnimatedStyle2(SimpleGuildContainerTsx4);
  const items8 = [closure_17, , , , , , , ];
  const useAnimatedStyle3 = _mod1652.useAnimatedStyle;
  _mod1652;
  items8[1] = spring_spring.withSpring;
  items8[2] = derivedValue;
  items8[3] = closure_9;
  items8[4] = _mod1652.interpolate;
  items8[5] = derivedValue1;
  items8[6] = backgroundColor;
  items8[7] = 48;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items8;
  class SimpleGuildContainerTsx5 {
    constructor() {
      size = { borderRadius: closure_0(closure_1.get(), closure_2), borderWidth: closure_0(closure_3(closure_4.get(), [0, 1], [0, 3]), closure_2), borderColor: closure_5, position: "absolute", top: 0, left: 0, width: closure_6, height: closure_6 };
      return size;
    }
  }
  const items9 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  SimpleGuildContainerTsx5.__closure = items9;
  SimpleGuildContainerTsx5.__workletHash = 976976510918;
  SimpleGuildContainerTsx5.__initData = tmp31;
  const obj2 = { children: items10 };
  const animatedStyle3 = useAnimatedStyle3(SimpleGuildContainerTsx5);
  items10 = [metroRequire(_modDef1652.View, { style: animatedStyle, children }), metroRequire(_modDef1652.View, { style: animatedStyle3 }), metroRequire(_modDef1652.View, { style: animatedStyle2 }), metroRequire(closure_12, { backgroundColor, guildId, activityIndicatorState }), metroRequire(closure_11, { backgroundColor, badge, unread })];
  const tmp41 = metroImportAll(metroImportDefault, obj2);
  if (null != onPress) {
    const obj3 = { ref: guildIconRef, style, onPress, onLongPress, accessibilityRole: "button", accessible: true, accessibilityLabel, accessibilityState: obj4, onAccessibilityAction, onLayout, children: tmp41 };
    obj4 = { selected };
    tmp40Result = tmp40(React3, obj3);
  } else {
    const obj5 = { style, children: tmp41 };
    tmp40Result = tmp40(hasOwnProperty, obj5);
  }
  return tmp40Result;
}
