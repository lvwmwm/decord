// Module ID: 14984
// Function ID: 114175
// Name: GuildInfoHeader
// Dependencies: [31, 27, 4122, 3823, 3759, 10260, 653, 33, 8830, 4066, 3976, 4549, 14985, 5077, 9889, 3834, 689, 4547, 9891, 4130, 3991, 3992, 4662, 14986, 1450, 566, 5698, 1457, 4542, 4546, 12914, 1392, 5085, 8584, 2]
// Exports: useRedesignGuildHeaderHeight

// Module 14984 (GuildInfoHeader)
import importAllResult from "getAvatarURL";
import get_ActivityIndicator from "Link";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import hairlineWidth from "hairlineWidth";
import { GuildFeatures } from "ME";
import jsxProd from "ServerPreviewPill";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function GuildInfoHeader(bannerHeight) {
  let guild;
  let scrollPosition;
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  let obj = scrollPosition(3991);
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
  let obj1 = scrollPosition(3991);
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
  let obj2 = scrollPosition(5077);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  obj = { style: items };
  items = [animatedStyle, { overflow: "hidden" }];
  const tmp = callback5();
  obj = { style: animatedStyle1 };
  const tmp5 = bannerHeight(3992);
  obj.children = callback(bannerHeight(4662), { absolute: true, tall: true });
  const items1 = [callback(bannerHeight(3992), obj), ];
  obj1 = { style: tmp.headerWrapper, children: callback(bannerHeight(14986), obj2) };
  obj2 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items1[1] = callback(closure_5, obj1);
  obj.children = items1;
  return callback2(tmp5, obj);
}
function ReanimatedGuildBanner(guild) {
  let actionSheetOpen;
  let useReducedMotion;
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  const bannerHeight = guild.bannerHeight;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  const tmp = callback4(scrollPosition(bannerHeight[24])().height);
  let closure_5 = tmp;
  let obj = guild(bannerHeight[25]);
  let items = [closure_8, sharedValue, closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ actionSheetOpen: null != outer1_8.getKey(), useReducedMotion: sharedValue.useReducedMotion, isLurking: outer1_9.isLurking(guild.id) }));
  let enabled = stateFromStoresObject.isLurking;
  ({ actionSheetOpen, useReducedMotion } = stateFromStoresObject);
  let obj1 = guild(bannerHeight[26]);
  let obj2 = guild(bannerHeight[27]);
  const isFocused = obj2.useIsFocused();
  let obj3 = guild(bannerHeight[20]);
  sharedValue = obj3.useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = bannerWidth.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[28]).withSpring(1, guild(bannerHeight[29]).springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = bannerWidth.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[28]).withSpring(0, guild(bannerHeight[29]).springStandard, "animate-always"));
  }, items2);
  const callback2 = bannerWidth.useCallback(() => {
    if (null != onPress) {
      onPress();
    }
    scrollPosition(bannerHeight[30])(guild);
  }, items3);
  let obj4 = guild(bannerHeight[20]);
  const fn = function b() {
    const value = scrollPosition.get();
    let obj = {};
    const items = [0, bannerHeight];
    obj.opacity = guild(bannerHeight[20]).interpolate(value, items, [1, 0], "clamp");
    obj = {};
    if (value >= 0) {
      const obj4 = guild(bannerHeight[20]);
      const items1 = [0, bannerHeight];
      const items2 = [0, -bannerHeight];
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
  obj = { scrollPosition, interpolate: guild(bannerHeight[20]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  fn.__closure = obj;
  fn.__workletHash = 16532496584630;
  fn.__initData = closure_21;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  class H {
    constructor() {
      obj = {};
      obj2 = guild(bannerHeight[20]);
      obj.opacity = obj2.interpolate(_isNativeReflectConstruct.get(), [0, 1], [0, 0.3]);
      return obj;
    }
  }
  obj = { interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue };
  H.__closure = obj;
  H.__workletHash = 13777976622560;
  H.__initData = closure_22;
  const items4 = [tmp, bannerWidth, bannerHeight];
  const animatedStyle1 = guild(bannerHeight[20]).useAnimatedStyle(H);
  if (null == guild.banner) {
    return null;
  } else {
    let hasItem = !useReducedMotion && !actionSheetOpen && isFocused;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    }
    const animatableSourceWithFallback = scrollPosition(bannerHeight[31]).getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = scrollPosition(bannerHeight[31]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
    obj1 = { style: animatedStyle };
    obj2 = { style: tmp.bannerWrapper, onPress: callback2, onPressIn: callback, onPressOut: callback1 };
    obj3 = { style: tmp10, source: animatableSourceWithFallback };
    const items5 = [callback(scrollPosition(bannerHeight[32]), obj3), , ];
    obj4 = {};
    const items6 = [tmp.bannerOverlay, animatedStyle1];
    obj4.style = items6;
    items5[1] = callback(scrollPosition(bannerHeight[20]).View, obj4);
    if (enabled) {
      enabled = obj1.useMobileLurkerServerPreview("RedesignGuildHeader").enabled;
    }
    if (enabled) {
      enabled = callback(scrollPosition(bannerHeight[33]), {});
    }
    items5[2] = enabled;
    obj2.children = items5;
    obj1.children = closure_15(bannerHeight, obj2);
    return callback(scrollPosition(bannerHeight[20]).View, obj1);
  }
  const obj7 = guild(bannerHeight[20]);
}
({ StyleSheet: closure_4, View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ STICKY_BANNER_ASPECT_RATIO: closure_10, BANNER_MAX_HEIGHT_PERCENTAGE: closure_11, SEARCH_BAR_MARGIN_BOTTOM: closure_12 } = hairlineWidth);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
let closure_17 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  obj = { bannerWrapper: obj, guildBanner: { left: "50%", top: "50%" } };
  obj = { width: "100%", maxHeight: arg0 * closure_11, aspectRatio: closure_10, overflow: "hidden" };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["backgroundColor"] = importDefault(689).colors.BLACK;
  obj.bannerOverlay = obj;
  return obj;
});
let result = _createForOfIteratorHelperLoose.experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = importDefault(689).colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = importDefault(689).colors.PANEL_BG;
  }
  return PANEL_BG;
});
let closure_18 = _createForOfIteratorHelperLoose.createStyles({ headerWrapper: { backgroundColor: result } });
let closure_19 = { code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_20 = { code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_21 = { code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
let closure_22 = { code: "function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
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
const result1 = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default memoResult;
export const useRedesignGuildHeaderHeight = function useRedesignGuildHeaderHeight(id) {
  let isThemeDarkResult = importDefault(8830)();
  if (!isThemeDarkResult) {
    isThemeDarkResult = require(3976) /* AccessibilityAnnouncer */.isThemeDark(tmp2);
    const obj = require(3976) /* AccessibilityAnnouncer */;
  }
  const fontScale = require(4549) /* getFontScale */.useFontScale();
  const obj2 = require(4549) /* getFontScale */;
  const tmp6 = null != importDefault(14985)(id);
  const isFavoritesGuildIdResult = require(5077) /* isFavoritesGuildId */.isFavoritesGuildId(id.id);
  const obj3 = require(5077) /* isFavoritesGuildId */;
  let num2 = 0;
  const obj4 = require(9889) /* scaleLineHeight */;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const scaleTextLineHeightResult = require(9889) /* scaleLineHeight */.scaleTextLineHeight("redesign/heading-18/bold", fontScale);
  let num3 = 0;
  const token = require(3834) /* map */.useToken(importDefault(689).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num3 = require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT + closure_12;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp6) {
    num6 = require(9889) /* scaleLineHeight */.scaleTextLineHeight(token, fontScale);
    const obj6 = require(9889) /* scaleLineHeight */;
  }
  return importDefault(9891)(16 + scaleTextLineHeightResult + num6 + num3 + num5 + num2);
};
