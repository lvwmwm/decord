// Module ID: 15526
// Function ID: 118514
// Name: SimpleGuildContainer
// Dependencies: []
// Exports: SimpleGuildContainer, SimpleGuildContainerAnimated

// Module 15526 (SimpleGuildContainer)
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = { "Null": "accessibilityRole", "Null": "ip", "Null": "now", "Null": "x", "Null": "height" };
const tmp3 = arg1(dependencyMap[2]);
let closure_10 = arg1(dependencyMap[3]).createStyles({ badgeWrapper: { 314033: null, 315680: null, 314067: null } });
let closure_11 = importAllResult.memo((backgroundColor) => {
  let badge;
  let unread;
  ({ badge, unread } = backgroundColor);
  if (badge > 0) {
    let obj = { style: tmp.badgeWrapper };
    obj = { value: badge, unread, backgroundColor: backgroundColor.backgroundColor };
    obj.children = callback(importDefault(dependencyMap[4]), obj);
    let tmp2 = callback(closure_5, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
});
let closure_12 = importAllResult.memo((arg0) => {
  let activityIndicatorState;
  let backgroundColor;
  let guildId;
  ({ guildId, activityIndicatorState, backgroundColor } = arg0);
  let source;
  if (null != activityIndicatorState) {
    source = activityIndicatorState.source;
  }
  if (null != source) {
    let obj = {};
    obj = { backgroundColor };
    obj.style = obj;
    ({ source: obj3.source, IconComponent: obj3.IconComponent, isCurrentUserConnected: obj3.isCurrentUserConnected } = activityIndicatorState);
    let tmp2 = callback(arg1(dependencyMap[5]).GuildsBarActivityIndicatorBase, obj);
  } else {
    tmp2 = null;
    if (null != guildId) {
      obj = { guildId };
      const obj1 = { backgroundColor };
      obj.style = obj1;
      tmp2 = callback(importDefault(dependencyMap[5]), obj);
    }
  }
  return tmp2;
});
let closure_13 = { code: "function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}" };
let closure_14 = { code: "function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}" };
let closure_15 = { code: "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}" };
let closure_16 = { code: "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}" };
let closure_17 = { code: "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}" };
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/launchpad/native/shared/SimpleGuildContainer.tsx");

export const SimpleGuildContainer = function SimpleGuildContainer(selected) {
  let accessibilityLabel;
  let children;
  let guildIconRef;
  let guildId;
  let onAccessibilityAction;
  let onLayout;
  let style;
  selected = selected.selected;
  const arg1 = selected;
  let num = selected.size;
  ({ guildIconRef, guildId, style, children } = selected);
  if (num === undefined) {
    num = 48;
  }
  const importDefault = num;
  let borderRadius = selected.borderRadius;
  if (borderRadius === undefined) {
    let num2 = 24;
    if (selected) {
      num2 = importDefault(dependencyMap[6]).radii.lg;
    }
    borderRadius = num2;
  }
  const dependencyMap = borderRadius;
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
  let iconStroke;
  let closure_9;
  ({ accessibilityLabel, onAccessibilityAction, onLayout } = selected);
  const tmp3 = importDefault(dependencyMap[7])();
  iconStroke = tmp3.iconStroke;
  let obj = arg1(dependencyMap[8]);
  const token = obj.useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND);
  closure_9 = token;
  const items = [selected, flag2, , , , , , , ];
  let source;
  if (null != activityIndicatorState) {
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
  const memo = importAllResult.useMemo(() => {
    let tmp = null;
    if (!selected) {
      return null;
    } else if (flag2) {
      let obj = { "Null": 1045814270250125000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 14395982178675285000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000184613633857, "Null": "center", 1376614150: "row", 1807699459: "center", -27990175: 8, style: {} };
      let source;
      if (tmp != activityIndicatorState) {
        source = activityIndicatorState.source;
      }
      let num5 = 0;
      if (tmp != source) {
        num5 = 13;
      }
      obj.cutoutTopRightSize = num5;
      let num6 = 13;
      if (badge <= 0) {
        let num7 = 0;
        if (unread) {
          num7 = 11;
        }
        num6 = num7;
      }
      obj.cutoutBottomRightSize = num6;
      obj.imageSize = num + 4;
      obj.imageBackgroundColor = token;
      tmp = borderRadius;
      obj.imageBorderRadius = borderRadius + 2;
      obj.clipInnerAmount = num;
      let tmp12Result = flag2(num(borderRadius[9]), obj);
      const tmp12 = flag2;
      const tmp15 = num(borderRadius[9]);
    } else {
      obj = {};
      obj = {};
      const obj1 = { "Null": null, "Null": "\u{1F482}", "Null": true, "Null": 6, "Null": 85, "Null": null, borderRadius: borderRadius + 2, borderColor: token, width: 2 + 4, height: 2 + 4 };
      obj.style = obj1;
      const items = [flag2(backgroundColor, obj), ];
      const obj2 = {};
      const obj3 = { borderRadius, borderColor: backgroundColor, width: 2, height: 2 };
      obj2.style = obj3;
      items[1] = flag2(backgroundColor, obj2);
      obj.children = items;
      tmp12Result = iconStroke(activityIndicatorState, obj);
    }
  }, items);
  obj = { style, accessible: true, accessibilityState: { selected }, accessibilityRole: "button", accessibilityLabel, accessibilityActions: items2, onAccessibilityAction };
  const items2 = [{ name: "activate" }];
  obj = { ref: guildIconRef, onLayout };
  const obj1 = { borderRadius, overflow: "hidden" };
  let str = "transparent";
  const memo1 = importAllResult.useMemo(() => {
    let tmp = null;
    if (!flag2) {
      let obj = {};
      obj = { call_count: "Masterpass tokenization is already in progress.", paidURL: null, borderColor: iconStroke.color, borderRadius, width: num, height: num };
      obj.style = obj;
      tmp = flag2(backgroundColor, obj);
    }
    return tmp;
  }, items1);
  if (!flag2) {
    let color = backgroundColor;
    if (!flag) {
      color = tmp3.iconBackground.color;
    }
    str = color;
  }
  obj1.backgroundColor = str;
  obj.style = obj1;
  obj.children = children;
  const items3 = [flag2(backgroundColor, obj), memo1, memo, flag2(closure_12, { backgroundColor, guildId, activityIndicatorState }), flag2(closure_11, { backgroundColor, badge, unread })];
  obj.children = items3;
  return iconStroke(backgroundColor, obj);
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
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let selected;
  let size;
  let style;
  let unread;
  let usingCutout;
  ({ style, selected } = arg0);
  const arg1 = selected;
  ({ size, borderRadius, backgroundColor } = arg0);
  const importDefault = backgroundColor;
  ({ folder, usingCutout, onPress } = arg0);
  let derivedValue;
  let derivedValue1;
  let BRAND_500;
  ({ guildIconRef, guildId, children, badge, unread, activityIndicatorState, accessibilityLabel, onAccessibilityAction, onLayout, onLongPress } = arg0);
  const iconBackground = importDefault(dependencyMap[7])().iconBackground;
  const dependencyMap = iconBackground;
  if (selected) {
    let num = importDefault(dependencyMap[6]).radii.lg;
  } else {
    num = 24;
    if (null != borderRadius) {
      num = borderRadius;
    }
  }
  let obj = arg1(dependencyMap[10]);
  class V {
    constructor() {
      return closure_3;
    }
  }
  obj = { targetRadius: num };
  V.__closure = obj;
  V.__workletHash = 5259600477627;
  V.__initData = closure_13;
  derivedValue = obj.useDerivedValue(V);
  let obj2 = arg1(dependencyMap[10]);
  const fn = function z() {
    let num = 0;
    if (selected) {
      num = 1;
    }
    return num;
  };
  fn.__closure = { selected };
  fn.__workletHash = 12318204664732;
  fn.__initData = closure_14;
  derivedValue1 = obj2.useDerivedValue(fn);
  let obj3 = arg1(dependencyMap[10]);
  class H {
    constructor() {
      obj = { <string:2924587579>: null, <string:4221592217>: 0.6, <string:1627731025>: 85, <string:3312210390>: "85px" };
      obj2 = selected(iconBackground[11]);
      obj.borderRadius = obj2.withSpring(closure_4.get(), closure_9);
      obj.backgroundColor = iconBackground.color;
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[11]).withSpring, toRadius: derivedValue, springConfig: closure_9, GUILD_SIZE: 48, iconBackground };
  H.__closure = obj;
  H.__workletHash = 11339684212259;
  H.__initData = closure_15;
  const animatedStyle = obj3.useAnimatedStyle(H);
  BRAND_500 = importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_500;
  let obj5 = arg1(dependencyMap[10]);
  const fn2 = function j() {
    const obj = { borderRadius: selected(iconBackground[11]).withSpring(derivedValue.get() + 2, closure_9) };
    const obj2 = selected(iconBackground[11]);
    const obj3 = selected(iconBackground[11]);
    obj.borderWidth = obj3.withSpring(selected(iconBackground[10]).interpolate(derivedValue1.get(), ["Text", "lc"], []), closure_9);
    obj.borderColor = BRAND_500;
    return obj;
  };
  fn2.__closure = { withSpring: arg1(dependencyMap[11]).withSpring, toRadius: derivedValue, springConfig: closure_9, interpolate: arg1(dependencyMap[10]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: 48 };
  fn2.__workletHash = 1481885125958;
  fn2.__initData = closure_16;
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const obj1 = { withSpring: arg1(dependencyMap[11]).withSpring, toRadius: derivedValue, springConfig: closure_9, interpolate: arg1(dependencyMap[10]).interpolate, toStrokeWidth: derivedValue1, borderColor: BRAND_500, GUILD_SIZE: 48 };
  class M {
    constructor() {
      obj = { alignItems: "r", flexDirection: "isArray", gap: "isArray", position: "state", padding: "Array", bottom: "isArray", left: "constructor", shrink: "isArray" };
      obj2 = selected(iconBackground[11]);
      obj.borderRadius = obj2.withSpring(closure_4.get(), closure_9);
      obj3 = selected(iconBackground[11]);
      obj4 = selected(iconBackground[10]);
      obj.borderWidth = obj3.withSpring(obj4.interpolate(closure_5.get(), ["Text", "lc"], ["START_THREAD", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001717915509062969]), closure_9);
      obj.borderColor = backgroundColor;
      return obj;
    }
  }
  obj2 = { withSpring: arg1(dependencyMap[11]).withSpring, toRadius: derivedValue, springConfig: closure_9, interpolate: arg1(dependencyMap[10]).interpolate, toStrokeWidth: derivedValue1, backgroundColor, GUILD_SIZE: 48 };
  M.__closure = obj2;
  M.__workletHash = 11592745547551;
  M.__initData = closure_17;
  obj3 = {};
  const animatedStyle2 = arg1(dependencyMap[10]).useAnimatedStyle(M);
  const items = [BRAND_500(importDefault(dependencyMap[10]).View, { style: animatedStyle, children }), BRAND_500(importDefault(dependencyMap[10]).View, { style: animatedStyle2 }), BRAND_500(importDefault(dependencyMap[10]).View, { style: animatedStyle1 }), BRAND_500(closure_12, { backgroundColor, guildId, activityIndicatorState }), BRAND_500(closure_11, { backgroundColor, badge, unread })];
  obj3.children = items;
  const tmp9 = callback2(closure_7, obj3);
  if (null != onPress) {
    const obj4 = { ref: guildIconRef, style, onPress, onLongPress, accessibilityRole: "button", accessible: true, accessibilityLabel };
    obj5 = { selected };
    obj4.accessibilityState = obj5;
    obj4.onAccessibilityAction = onAccessibilityAction;
    obj4.onLayout = onLayout;
    obj4.children = tmp9;
    let tmp12 = BRAND_500(derivedValue, obj4);
  } else {
    const obj6 = { style, children: tmp9 };
    tmp12 = BRAND_500(derivedValue1, obj6);
  }
  return tmp12;
};
