// Module ID: 18513
// Function ID: 18514
// Name: RedesignGuildHeader
// Dependencies: [19, 17, 5141, 5375, 5882, 1072, 21, 9912, 5369, 5147, 5766, 18514, 5014, 18486, 5883, 5724, 575, 5764, 12614, 5140, 1652, 10855, 18515, 1493, 504, 1500, 5761, 5762, 16033, 1411, 1113, 5842, 18556, 2]
// Exports: useRedesignGuildHeaderHeight

// Module 18513 (RedesignGuildHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _mod1652 from "module_1652" /* 1652 */;
import FavoritesUtils from "FavoritesUtils" /* 5014 */;
import shared from "shared" /* 5147 */;
import useToken from "useToken" /* 5724 */;
import spring_spring from "spring/spring" /* 5761 */;
import springPresets from "springPresets" /* 5762 */;
import useFontScale from "useFontScale" /* 5766 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 5883 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9912 */;
import ThemedGradientDefault from "ThemedGradient" /* 10855 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12614 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 16033 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 18486 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 18514 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 18515 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import ActionSheetStore from "ActionSheetStore" /* 5375 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5882 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let obj1, set;

let c10;
let c9;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let unpackModuleId;
function GuildInfoHeader(arg0) {
  let bannerHeight;
  let guild;
  let items4;
  let items5;
  let obj5;
  let scrollPosition;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  ({ guild, scrollPosition, bannerHeight } = arg0);
  const tmp = closure_17();
  let obj = _mod1652;
  let items = [closure_18, scrollPosition, bannerHeight];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  class RedesignGuildHeaderTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: Math.max(0, closure_0.get() - closure_1) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6];
  RedesignGuildHeaderTsx1.__closure = items1;
  RedesignGuildHeaderTsx1.__workletHash = 13966142429483;
  RedesignGuildHeaderTsx1.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(RedesignGuildHeaderTsx1);
  const items2 = [closure_19, scrollPosition, bannerHeight];
  c0 = undefined;
  c1 = undefined;
  [tmp8, tmp9, tmp10] = items2;
  const tmp2Result = _mod1652;
  class RedesignGuildHeaderTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: Math.min(0, closure_0.get() - closure_1) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp9, tmp10];
  RedesignGuildHeaderTsx2.__closure = items3;
  RedesignGuildHeaderTsx2.__workletHash = 1812402588726;
  RedesignGuildHeaderTsx2.__initData = tmp8;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(RedesignGuildHeaderTsx2);
  const tmp2Result2 = FavoritesUtils;
  const isFavoritesGuildIdResult = tmp2Result2.isFavoritesGuildId(guild.id);
  const obj2 = { style: items4, children: items5 };
  items4 = [animatedStyle, { overflow: "hidden" }];
  const View = _modDef1652.View;
  const obj3 = { style: animatedStyle1, children: map1(ThemedGradientDefault, { absolute: true, tall: true }) };
  const View2 = _modDef1652.View;
  items5 = [map1(View2, obj3), ];
  const obj4 = { style: tmp.headerWrapper, children: map1(ChannelListStickyHeaderDefault, obj5) };
  obj5 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items5[1] = map1(hasOwnProperty, obj4);
  return authStore3(View, obj2);
}
function ReanimatedGuildBanner(guild) {
  let actionSheetOpen;
  let intl;
  let items10;
  let items11;
  let items9;
  let key;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let useReducedMotion;
  guild = guild.guild;
  const bannerHeight = guild.bannerHeight;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  const tmp = bannerHeight;
  let tmp2 = bannerWidth;
  const scrollPosition = guild.scrollPosition;
  const tmp3 = closure_16(bannerHeight(bannerWidth[23])({ ignoreKeyboard: true }).height);
  const guildBanner = tmp3;
  let obj = guild(bannerWidth[24]);
  let items = [ActionSheetStore, AccessibilityStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { actionSheetOpen: null != key.getKey(), useReducedMotion: useReducedMotion.useReducedMotion };
    return obj;
  });
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp30Result = bannerHeight(bannerWidth[13])(guild.id);
  let obj2 = guild(bannerWidth[25]);
  const isFocused = obj2.useIsFocused();
  const obj3 = guild(bannerWidth[20]);
  const sharedValue = obj3.useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = onPress.useCallback(() => {
    set = sharedValue.set;
    const obj = spring_spring;
    const result = set(obj.withSpring(1, springPresets.springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = onPress.useCallback(() => {
    set = sharedValue.set;
    const obj = spring_spring;
    const result = set(obj.withSpring(0, springPresets.springStandard, "animate-always"));
  }, items2);
  const callback2 = onPress.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    openGuildActionSheetDefault(guild);
  }, items3);
  const items4 = [closure_21, scrollPosition, , , ];
  const useAnimatedStyle = guild(bannerWidth[20]).useAnimatedStyle;
  guild(bannerWidth[20]);
  items4[2] = guild(bannerWidth[20]).interpolate;
  items4[3] = bannerHeight;
  items4[4] = bannerHeight;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items4;
  class RedesignGuildHeaderTsx3 {
    constructor() {
      let items;
      let items3;
      let result;
      const value = _undefined.get();
      const obj = { opacity: _undefined2(value, items, [1, 0], "clamp"), transform: items3 };
      items = [0, c2];
      const tmp2 = _undefined2;
      if (value >= 0) {
        const items1 = [0, c3];
        const items2 = [0, -c3];
        result = tmp2(-value, items1, items2, "clamp");
      } else {
        result = value / 2;
      }
      items3 = [{ translateY: result }, ];
      let num2 = 1;
      if (value < 0) {
        num2 = (c3 - value) / c3;
      }
      items3[1] = { scale: num2 };
      return obj;
    }
  }
  const items5 = [tmp14, tmp15, tmp16, tmp17];
  RedesignGuildHeaderTsx3.__closure = items5;
  RedesignGuildHeaderTsx3.__workletHash = 15340906770479;
  RedesignGuildHeaderTsx3.__initData = tmp13;
  const animatedStyle = useAnimatedStyle(RedesignGuildHeaderTsx3);
  const items6 = [closure_22, , ];
  const useAnimatedStyle2 = tmp4(tmp2[20]).useAnimatedStyle;
  guild(tmp2[20]);
  items6[1] = guild(tmp2[20]).interpolate;
  items6[2] = sharedValue;
  c0 = undefined;
  c1 = undefined;
  [tmp20, tmp21, tmp22] = items6;
  class RedesignGuildHeaderTsx4 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0, 0.3]) };
      return obj;
    }
  }
  const items7 = [tmp21, tmp22];
  RedesignGuildHeaderTsx4.__closure = items7;
  RedesignGuildHeaderTsx4.__workletHash = 5027618291385;
  RedesignGuildHeaderTsx4.__initData = tmp20;
  const items8 = [tmp3, bannerWidth, bannerHeight];
  const animatedStyle2 = useAnimatedStyle2(RedesignGuildHeaderTsx4);
  if (null == guild.banner) {
    return null;
  } else {
    let hasItem = !useReducedMotion && !actionSheetOpen && isFocused;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    }
    const tmpResult = tmp(tmp2[29]);
    const animatableSourceWithFallback = tmpResult.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = AvatarUtilsDefault;
      const obj2 = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj2, hasItem);
    });
    const obj4 = { style: animatedStyle, children: items11 };
    const obj5 = { style: tmp3.bannerWrapper, accessibilityRole: "button", accessibilityLabel: guild.name, accessibilityHint: intl.string(guild(tmp2[30]).t["Gpyp/e"]), onPress: callback2, onPressIn: callback, onPressOut: callback1, children: items9 };
    const View = tmp(tmp2[20]).View;
    intl = tmp4(tmp2[30]).intl;
    const obj6 = { style: tmp24, source: animatableSourceWithFallback };
    items9 = [closure_13(tmp(tmp2[31]), obj6), ];
    const obj7 = { style: items10 };
    items10 = [tmp3.bannerOverlay, animatedStyle2];
    items9[1] = closure_13(tmp(tmp2[20]).View, obj7);
    items11 = [closure_14(closure_6, obj5), ];
    const tmp28 = closure_14;
    const tmp30 = closure_13;
    if (tmp30Result) {
      tmp30Result = tmp30(tmp(tmp2[32]), {});
    }
    items11[1] = tmp30Result;
    return tmp28(View, obj4);
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
let closure_18 = { code: "(function RedesignGuildHeaderTsx1(){let[scrollPosition,bannerHeight]=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};})" };
let closure_19 = { code: "(function RedesignGuildHeaderTsx2(){let[scrollPosition,bannerHeight]=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};})" };
let closure_21 = { code: "(function RedesignGuildHeaderTsx3(){let[scrollPosition,interpolate,maxScrollPosition,bannerHeight]=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};})" };
let closure_22 = { code: "(function RedesignGuildHeaderTsx4(){let[interpolate,pressed]=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};})" };
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
  const scaleTextLineHeightResult = obj4.scaleTextLineHeight("heading-md/semibold", fontScale);
  let num = 0;
  if (isThemeDarkResult) {
    num = 1;
  }
  let num2 = 0;
  const tmp7Result = useToken;
  const token = tmp7Result.useToken(tmp(575).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = tmp7(5764).SMALL_BUTTON_HEIGHT + unpackModuleId;
  }
  let num3 = 0;
  if (tmp11) {
    num3 = 8 + tmp7(5764).MEDIUM_BUTTON_HEIGHT + 8;
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
    bound = Math.max(scaleTextLineHeightResult, tmp7(5764).SMALL_BUTTON_HEIGHT);
  }
  return roundToNearestPixelDefault(16 + bound + num6 + num2 + num3 + num5 + num);
}
