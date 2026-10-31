// Module ID: 18178
// Function ID: 18179
// Name: RedesignGuildHeader
// Dependencies: [19, 17, 5015, 5259, 11046, 1072, 21, 9822, 5253, 5021, 5642, 18179, 4888, 18149, 11047, 5596, 575, 5640, 12271, 5014, 5095, 5096, 10736, 18180, 1491, 504, 1498, 5637, 5638, 15730, 1409, 1113, 5717, 18224, 2]
// Exports: useRedesignGuildHeaderHeight

// Module 18178 (RedesignGuildHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import FavoritesUtils from "FavoritesUtils" /* 4888 */;
import shared from "shared" /* 5021 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5096 */;
import useToken from "useToken" /* 5596 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import useFontScale from "useFontScale" /* 5642 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9822 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11047 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12271 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 15730 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 18149 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 18179 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 18180 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ActionSheetStore from "ActionSheetStore" /* 5259 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11046 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let unpackModuleId;
function GuildInfoHeader(bannerHeight) {
  let guild;
  let items;
  let items1;
  let obj7;
  let scrollPosition;
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  const tmp = closure_17();
  let obj = ReanimatedRexport;
  const fn = function o() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: Math.max(0, scrollPosition.get() - bannerHeight) }];
    ({ translateY: Math.max(0, scrollPosition.get() - bannerHeight) });
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = ReanimatedRexport;
  const fn2 = function u() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: Math.min(0, scrollPosition.get() - bannerHeight) }];
    ({ translateY: Math.min(0, scrollPosition.get() - bannerHeight) });
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj2.useAnimatedStyle(fn2);
  const obj3 = FavoritesUtils;
  const isFavoritesGuildIdResult = obj3.isFavoritesGuildId(guild.id);
  const obj4 = { style: items, children: items1 };
  items = [animatedStyle, { overflow: "hidden" }];
  const obj5 = { style: animatedStyle1, children: map1(ThemedGradientDefault, { absolute: true, tall: true }) };
  const tmp5 = REAWorkaroundViewDefault;
  const tmp6 = REAWorkaroundViewDefault;
  items1 = [map1(tmp6, obj5), ];
  const obj6 = { style: tmp.headerWrapper, children: map1(ChannelListStickyHeaderDefault, obj7) };
  obj7 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items1[1] = map1(hasOwnProperty, obj6);
  return authStore3(tmp5, obj4);
}
function ReanimatedGuildBanner(guild) {
  let actionSheetOpen;
  let intl;
  let items5;
  let items6;
  let items7;
  let key;
  let useReducedMotion;
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  let bannerHeight;
  let sharedValue;
  const tmp = scrollPosition;
  let tmp2 = bannerHeight;
  const tmp3 = closure_16(scrollPosition(bannerHeight[24])({ ignoreKeyboard: true }).height);
  const guildBanner = tmp3;
  let obj = guild(bannerHeight[25]);
  let items = [ActionSheetStore, sharedValue];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { actionSheetOpen: null != key.getKey(), useReducedMotion: sharedValue.useReducedMotion };
    return obj;
  });
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp20Result = scrollPosition(bannerHeight[13])(guild.id);
  let obj2 = guild(bannerHeight[26]);
  const isFocused = obj2.useIsFocused();
  const obj3 = guild(bannerHeight[20]);
  sharedValue = obj3.useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = bannerWidth.useCallback(() => {
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(1, springPresets.springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = bannerWidth.useCallback(() => {
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(0, springPresets.springStandard, "animate-always"));
  }, items2);
  const callback2 = bannerWidth.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    openGuildActionSheetDefault(guild);
  }, items3);
  const fn = function p() {
    let interpolateResult;
    let items;
    let items3;
    let obj2;
    const value = scrollPosition.get();
    const obj = { opacity: obj2.interpolate(value, items, [1, 0], "clamp"), transform: items3 };
    items = [0, bannerHeight];
    obj2 = ReanimatedRexport;
    if (value >= 0) {
      const items1 = [0, bannerHeight];
      const items2 = [0, -bannerHeight];
      const tmp2Result = ReanimatedRexport;
      interpolateResult = tmp2Result.interpolate(-value, items1, items2, "clamp");
    } else {
      interpolateResult = value / 2;
    }
    items3 = [{ translateY: interpolateResult }, ];
    let num2 = 1;
    if (value < 0) {
      num2 = (bannerHeight - value) / bannerHeight;
    }
    items3[1] = { scale: num2 };
    return obj;
  };
  const obj4 = guild(bannerHeight[20]);
  fn.__closure = { scrollPosition, interpolate: guild(bannerHeight[20]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  fn.__workletHash = 16532496584630;
  fn.__initData = __initData3;
  ({ scrollPosition, interpolate: guild(bannerHeight[20]).interpolate, maxScrollPosition: bannerHeight, bannerHeight });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const fn2 = function b() {
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 0.3]) };
    obj2 = ReanimatedRexport;
    return obj;
  };
  const obj6 = guild(bannerHeight[20]);
  fn2.__closure = { interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue };
  fn2.__workletHash = 13777976622560;
  fn2.__initData = __initData4;
  const items4 = [tmp3, bannerWidth, bannerHeight];
  ({ interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue });
  const animatedStyle1 = obj6.useAnimatedStyle(fn2);
  if (null == guild.banner) {
    return null;
  } else {
    let hasItem = !useReducedMotion && !actionSheetOpen && isFocused;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    }
    const tmpResult = tmp(tmp2[30]);
    const animatableSourceWithFallback = tmpResult.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = AvatarUtilsDefault;
      const obj2 = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj2, hasItem);
    });
    const obj8 = { style: animatedStyle, children: items7 };
    const obj9 = { style: tmp3.bannerWrapper, accessibilityRole: "button", accessibilityLabel: guild.name, accessibilityHint: intl.string(guild(tmp2[31]).t["Gpyp/e"]), onPress: callback2, onPressIn: callback, onPressOut: callback1, children: items5 };
    const View = tmp(tmp2[20]).View;
    intl = tmp4(tmp2[31]).intl;
    const obj10 = { style: tmp14, source: animatableSourceWithFallback };
    items5 = [closure_13(tmp(tmp2[32]), obj10), ];
    const obj11 = { style: items6 };
    items6 = [tmp3.bannerOverlay, animatedStyle1];
    items5[1] = closure_13(tmp(tmp2[20]).View, obj11);
    items7 = [closure_14(bannerHeight, obj9), ];
    const tmp18 = closure_14;
    const tmp20 = closure_13;
    if (tmp20Result) {
      tmp20Result = tmp20(tmp(tmp2[33]), {});
    }
    items7[1] = tmp20Result;
    return tmp18(View, obj8);
  }
}
({ StyleSheet: closure_4, View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ STICKY_BANNER_ASPECT_RATIO: c9, BANNER_MAX_HEIGHT_PERCENTAGE: c10, SEARCH_BAR_MARGIN_BOTTOM: unpackModuleId } = RedesignChannelListConstants);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let closure_15 = createStyles.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles((arg0) => {
  let obj2;
  let obj3;
  const obj = { bannerWrapper: obj2, guildBanner: { left: "50%", top: "50%" }, bannerOverlay: obj3 };
  obj2 = { width: "100%", maxHeight: arg0 * authStore, aspectRatio, overflow: "hidden" };
  obj3 = { backgroundColor: nativeDefault.colors.BLACK };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
createStyles = createStyles_mod;
let result = createStyles.experimental_createToken((gradient) => {
  let PANEL_BG;
  if (null != gradient.gradient) {
    PANEL_BG = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = nativeDefault.colors.PANEL_BG;
  }
  return PANEL_BG;
});
createStyles = createStyles_mod;
let obj = { headerWrapper: { backgroundColor: result } };
let closure_17 = createStyles.createStyles(obj);
const __initData = { code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData2 = { code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData3 = { code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
const __initData4 = { code: "function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
const memoResult = react.memo(function RedesignGuildHeader(bannerWidth) {
  let bannerHeight;
  let guild;
  let items;
  let num;
  let scrollPosition;
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  bannerWidth = bannerWidth.bannerWidth;
  const obj = { style: closure_15().guildHeaderWrapper, preventClipping: true, children: items };
  items = [map1(ReanimatedGuildBanner, { guild, scrollPosition, bannerHeight, bannerWidth }), ];
  const obj2 = { guild, scrollPosition, bannerHeight: num };
  num = 0;
  const tmp = authStore3;
  const tmp2 = hasOwnProperty;
  const tmp3 = map1;
  const tmp4 = GuildInfoHeader;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  items[1] = tmp3(tmp4, obj2);
  return tmp(tmp2, obj);
});
let size = size_mod;
const result1 = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default memoResult;
export function useRedesignGuildHeaderHeight(id) {
  let isThemeDarkResult = useIsUsingClientThemeDefault();
  useIsUsingClientThemeDefault();
  if (!isThemeDarkResult) {
    const obj = shared;
    isThemeDarkResult = obj.isThemeDark(tmp4);
  }
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  const tmp9 = null != useStickyServerHeaderSubtitleDefault(id);
  const obj3 = FavoritesUtils;
  const isFavoritesGuildIdResult = obj3.isFavoritesGuildId(id.id);
  const tmp11 = useIsGameCommunityServerPreviewDefault(id.id);
  const obj4 = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj4.scaleTextLineHeight("redesign/heading-18/bold", fontScale);
  let num = 0;
  if (isThemeDarkResult) {
    num = 1;
  }
  let num2 = 0;
  const tmp7Result = useToken;
  const token = tmp7Result.useToken(tmp(575).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = tmp7(5640).SMALL_BUTTON_HEIGHT + unpackModuleId;
  }
  let num3 = 0;
  if (tmp11) {
    num3 = 8 + tmp7(5640).MEDIUM_BUTTON_HEIGHT + 8;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp9) {
    const tmp7Result2 = useScaledTextLineHeight;
    num6 = tmp7Result2.scaleTextLineHeight(token, fontScale);
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, tmp7(5640).SMALL_BUTTON_HEIGHT);
  }
  return roundToNearestPixelDefault(16 + bound + num6 + num2 + num3 + num5 + num);
}
