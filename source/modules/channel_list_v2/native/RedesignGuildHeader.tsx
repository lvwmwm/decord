// Module ID: 14850
// Function ID: 111906
// Name: GuildInfoHeader
// Dependencies: []
// Exports: useRedesignGuildHeaderHeight

// Module 14850 (GuildInfoHeader)
function GuildInfoHeader(bannerHeight) {
  let guild;
  let scrollPosition;
  ({ guild, scrollPosition } = bannerHeight);
  const arg1 = scrollPosition;
  bannerHeight = bannerHeight.bannerHeight;
  const importDefault = bannerHeight;
  let obj = arg1(dependencyMap[20]);
  const fn = function o() {
    let obj = {};
    obj = { translateY: Math.max(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = closure_19;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj1 = arg1(dependencyMap[20]);
  const fn2 = function u() {
    let obj = {};
    obj = { translateY: Math.min(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = closure_20;
  const animatedStyle1 = obj1.useAnimatedStyle(fn2);
  let obj2 = arg1(dependencyMap[13]);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  obj = { style: items };
  const items = [animatedStyle, { overflow: "hidden" }];
  const tmp = callback5();
  obj = { style: animatedStyle1 };
  const tmp5 = importDefault(dependencyMap[21]);
  obj.children = callback(importDefault(dependencyMap[22]), { <string:1398956458>: null, <string:2898161814>: null });
  const items1 = [callback(importDefault(dependencyMap[21]), obj), ];
  obj1 = { style: tmp.headerWrapper, children: callback(importDefault(dependencyMap[23]), obj2) };
  obj2 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items1[1] = callback(closure_5, obj1);
  obj.children = items1;
  return callback2(tmp5, obj);
}
function ReanimatedGuildBanner(guild) {
  let actionSheetOpen;
  let useReducedMotion;
  guild = guild.guild;
  const arg1 = guild;
  const scrollPosition = guild.scrollPosition;
  const importDefault = scrollPosition;
  const bannerHeight = guild.bannerHeight;
  const dependencyMap = bannerHeight;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  const tmp = callback4(importDefault(dependencyMap[24])().height);
  let obj = arg1(dependencyMap[25]);
  const items = [closure_8, closure_7, closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ actionSheetOpen: null != key.getKey(), useReducedMotion: sharedValue.useReducedMotion, isLurking: lurking.isLurking(guild.id) }));
  let enabled = stateFromStoresObject.isLurking;
  ({ actionSheetOpen, useReducedMotion } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[26]);
  let obj2 = arg1(dependencyMap[27]);
  const isFocused = obj2.useIsFocused();
  let obj3 = arg1(dependencyMap[20]);
  const sharedValue = obj3.useSharedValue(0);
  closure_7 = sharedValue;
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = importAllResult.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[28]).withSpring(1, guild(bannerHeight[29]).springStandard, "animate-always"));
  }, items1);
  const items3 = [guild, onPress];
  const callback1 = importAllResult.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[28]).withSpring(0, guild(bannerHeight[29]).springStandard, "animate-always"));
  }, items2);
  const callback2 = importAllResult.useCallback(() => {
    if (null != onPress) {
      onPress();
    }
    scrollPosition(bannerHeight[30])(guild);
  }, items3);
  let obj4 = arg1(dependencyMap[20]);
  const fn = function b() {
    const value = scrollPosition.get();
    let obj = {};
    const items = [0.229, bannerHeight];
    obj.opacity = guild(bannerHeight[20]).interpolate(value, items, ["getViewManagerConfig", "hasViewManagerConfig"], "clamp");
    obj = {};
    if (value >= 0) {
      const obj4 = guild(bannerHeight[20]);
      const items1 = [0.229, bannerHeight];
      const items2 = [0.229, -bannerHeight];
      let interpolateResult = obj4.interpolate(-value, items1, items2, "clamp");
    } else {
      interpolateResult = value / 2;
    }
    obj.translateY = interpolateResult;
    const items3 = [obj, ];
    obj = {};
    let num2 = 1;
    if (value < 0) {
      num2 = (bannerHeight - value) / bannerHeight;
    }
    obj.scale = num2;
    items3[1] = obj;
    obj.transform = items3;
    return obj;
  };
  obj = { scrollPosition, interpolate: arg1(dependencyMap[20]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  fn.__closure = obj;
  fn.__workletHash = 16532496584630;
  fn.__initData = closure_21;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  class H {
    constructor() {
      obj = {};
      obj2 = guild(bannerHeight[20]);
      obj.opacity = obj2.interpolate(closure_7.get(), [null, null], [-520405018, 1431658495]);
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[20]).interpolate, pressed: sharedValue };
  H.__closure = obj;
  H.__workletHash = 13777976622560;
  H.__initData = closure_22;
  const items4 = [tmp, bannerWidth, bannerHeight];
  const animatedStyle1 = arg1(dependencyMap[20]).useAnimatedStyle(H);
  if (null == guild.banner) {
    return null;
  } else {
    let hasItem = !useReducedMotion && !actionSheetOpen && isFocused;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    }
    const animatableSourceWithFallback = importDefault(dependencyMap[31]).getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = scrollPosition(bannerHeight[31]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
    obj1 = { style: animatedStyle };
    obj2 = { style: tmp.bannerWrapper, onPress: callback2, onPressIn: callback, onPressOut: callback1 };
    obj3 = { style: tmp10, source: animatableSourceWithFallback };
    const items5 = [callback(importDefault(dependencyMap[32]), obj3), , ];
    obj4 = {};
    const items6 = [tmp.bannerOverlay, animatedStyle1];
    obj4.style = items6;
    items5[1] = callback(importDefault(dependencyMap[20]).View, obj4);
    if (enabled) {
      enabled = obj1.useMobileLurkerServerPreview("RedesignGuildHeader").enabled;
    }
    if (enabled) {
      enabled = callback(importDefault(dependencyMap[33]), {});
    }
    items5[2] = enabled;
    obj2.children = items5;
    obj1.children = closure_15(bannerHeight, obj2);
    return callback(importDefault(dependencyMap[20]).View, obj1);
  }
  const obj7 = arg1(dependencyMap[20]);
}
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[1]);
({ STICKY_BANNER_ASPECT_RATIO: closure_10, BANNER_MAX_HEIGHT_PERCENTAGE: closure_11, SEARCH_BAR_MARGIN_BOTTOM: closure_12 } = arg1(dependencyMap[5]));
const GuildFeatures = arg1(dependencyMap[6]).GuildFeatures;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
let closure_16 = arg1(dependencyMap[19]).createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
const obj2 = arg1(dependencyMap[19]);
let closure_17 = arg1(dependencyMap[19]).createStyles((arg0) => {
  let obj = { bannerWrapper: obj, guildBanner: {} };
  obj = { width: "100%", maxHeight: arg0 * closure_11, aspectRatio: closure_10, overflow: "hidden" };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["backgroundColor"] = importDefault(dependencyMap[16]).colors.BLACK;
  obj.bannerOverlay = obj;
  return obj;
});
const obj3 = arg1(dependencyMap[19]);
const result = arg1(dependencyMap[19]).experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = importDefault(dependencyMap[16]).colors.PANEL_BG;
  }
  return PANEL_BG;
});
const obj4 = arg1(dependencyMap[19]);
let closure_18 = arg1(dependencyMap[19]).createStyles({ headerWrapper: { backgroundColor: result } });
let closure_19 = { code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_20 = { code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_21 = { code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
let closure_22 = { code: "function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
const obj5 = arg1(dependencyMap[19]);
const memoResult = importAllResult.memo(function RedesignGuildHeader(bannerWidth) {
  let bannerHeight;
  let guild;
  let scrollPosition;
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  let obj = { style: callback3().guildHeaderWrapper, preventClipping: true };
  const items = [callback(ReanimatedGuildBanner, { guild, scrollPosition, bannerHeight, bannerWidth: bannerWidth.bannerWidth }), ];
  obj = { guild, scrollPosition };
  let num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  obj.bannerHeight = num;
  items[1] = callback(GuildInfoHeader, obj);
  obj.children = items;
  return closure_15(closure_5, obj);
});
const result1 = arg1(dependencyMap[34]).fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default memoResult;
export const useRedesignGuildHeaderHeight = function useRedesignGuildHeaderHeight(id) {
  let isThemeDarkResult = importDefault(dependencyMap[8])();
  if (!isThemeDarkResult) {
    isThemeDarkResult = arg1(dependencyMap[10]).isThemeDark(tmp2);
    const obj = arg1(dependencyMap[10]);
  }
  const fontScale = arg1(dependencyMap[11]).useFontScale();
  const obj2 = arg1(dependencyMap[11]);
  const tmp6 = null != importDefault(dependencyMap[12])(id);
  const isFavoritesGuildIdResult = arg1(dependencyMap[13]).isFavoritesGuildId(id.id);
  const obj3 = arg1(dependencyMap[13]);
  let num2 = 0;
  const obj4 = arg1(dependencyMap[14]);
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const scaleTextLineHeightResult = arg1(dependencyMap[14]).scaleTextLineHeight("redesign/heading-18/bold", fontScale);
  let num3 = 0;
  const token = arg1(dependencyMap[15]).useToken(importDefault(dependencyMap[16]).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num3 = arg1(dependencyMap[17]).SMALL_BUTTON_HEIGHT + closure_12;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp6) {
    num6 = arg1(dependencyMap[14]).scaleTextLineHeight(token, fontScale);
    const obj6 = arg1(dependencyMap[14]);
  }
  return importDefault(dependencyMap[18])(16 + scaleTextLineHeightResult + num6 + num3 + num5 + num2);
};
