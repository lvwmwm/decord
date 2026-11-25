// Module ID: 19045
// Function ID: 19046
// Name: YouScreen
// Dependencies: [32, 19, 17, 6132, 2188, 16141, 6945, 1386, 18103, 1071, 1073, 4858, 7526, 21, 1653, 10436, 5012, 1358, 575, 671, 5189, 563, 1112, 6121, 15991, 8444, 14797, 6085, 1263, 6131, 1628, 9443, 5221, 14803, 5191, 1494, 4837, 1501, 19046, 1412, 9469, 7278, 14208, 6350, 10000, 9448, 14794, 6349, 9462, 4969, 4845, 9519, 5699, 19047, 12912, 5590, 19055, 19056, 5073, 19057, 9463, 9454, 14800, 1089, 11057, 9428, 19059, 12522, 6278, 11069, 8067, 6279, 9487, 8207, 2]
// Exports: default

// Module 19045 (YouScreen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants2 from "Constants" /* 1071 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import intl4 from "intl" /* 1112 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4858 */;
import RootNavigationRef from "RootNavigationRef" /* 5189 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 6278 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 10436 */;
import YouBannerDecorations from "YouBannerDecorations" /* 14208 */;
import BackIconWithBadge from "BackIconWithBadge" /* 15991 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileStore from "UserProfileStore" /* 6132 */;
import LocaleStore from "LocaleStore" /* 2188 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16141 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6945 */;
import UserStore from "UserStore" /* 1386 */;
import YouConstants from "YouConstants" /* 18103 */;
import Constants from "Constants" /* 7526 */;
import Fragment from "Fragment" /* 21 */;
import module_1653_mod from "module_1653" /* 1653 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let ScrollView;
let closure_12;
let closure_14;
let closure_15;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let hasOwnProperty;
let map1;
let metroRequire;
function handleBackButtonPress() {
  const obj = RootNavigationRef;
  navigation = obj.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function BackButton(paddingTop) {
  let formatToPlainStringResult;
  let items1;
  let totalMentionCount;
  paddingTop = paddingTop.paddingTop;
  const items = [GuildReadStateStore];
  const tmp = closure_25();
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = tmp2(1112).intl;
    const obj2 = { mentionCount: stateFromStores };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1112).t.vxFYaM, obj2);
  } else {
    const intl = tmp2(1112).intl;
    formatToPlainStringResult = intl.string(tmp2(1112).t["13/7kX"]);
  }
  const obj3 = { style: items1, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: handleBackButtonPress, children: closure_21(BackIconWithBadge.CloseIconWithBadgeOnSide, { count: stateFromStores }) };
  items1 = [tmp.backButton, { top: paddingTop }];
  const PressableOpacity = tmp2(6121).PressableOpacity;
  return closure_21(PressableOpacity, obj3);
}
function UnconnectedYouScreen(isCard) {
  let UserProfileAnalyticsProvider;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let closure_4;
  let contentAnimatedStyle;
  let contentContainerStyle;
  let dimensionStyle;
  let fetchEndedAt;
  let fetchStartedAt;
  let initialTab;
  let intl2;
  let intl3;
  let isLoaded;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items3;
  let navigateToCustomStatus;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let navigateToSettings;
  let navigateToShop;
  let obj18;
  let obj19;
  let primaryColor;
  let ref;
  let secondaryColor;
  let showBlur;
  let theme;
  let tmp14;
  let tmp15;
  let tmp9Result26;
  let tmpResult13;
  let user;
  let width;
  ({ user, navigateToSettings } = isCard);
  ({ navigateToPremium, navigateToShop } = isCard);
  let flag = isCard.isCard;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = isCard);
  if (flag === undefined) {
    flag = false;
  }
  let rect;
  let first;
  react = undefined;
  let num3;
  let closure_6;
  let closure_7;
  let youSettingsCoachmark;
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  let tmp = navigateToShop;
  let tmp2 = rect;
  let tmp3 = navigateToShop(rect[25])();
  ({ ref, width } = tmp3);
  let num = 0;
  const onLayout = tmp3.onLayout;
  if (undefined !== width) {
    num = width;
  }
  let tmp5;
  const tmpResult = tmp(tmp2[26]);
  if (num > 0) {
    tmp5 = num;
  }
  const tmpResultResult = tmpResult(tmp5);
  const tmp7 = closure_24();
  let obj = { type: navigateToSettings(tmp2[28]).ImpressionTypes.VIEW, name: navigateToSettings(tmp2[28]).ImpressionNames.USER_YOU_SCREEN };
  const tmpResult9 = tmp(tmp2[27]);
  tmpResult9(obj);
  let obj2 = tmp(tmp2[29])(user.id);
  rect = tmp(tmp2[30])();
  ({ theme, primaryColor, secondaryColor } = tmp(tmp2[31])({ user, displayProfile: obj2 }));
  tmp(tmp2[31])({ user, displayProfile: obj2 });
  const tmp12 = tmp(tmp2[32])();
  let obj3 = navigateToSettings(tmp2[14]);
  const sharedValue = obj3.useSharedValue(0);
  let items = [closure_29, sharedValue];
  let c0;
  [tmp14, tmp15] = items;
  const obj4 = navigateToSettings(tmp2[14]);
  class YouScreenTsx1 {
    constructor(contentOffset) {
      const result = _undefined.set(contentOffset.contentOffset.y);
    }
  }
  const items1 = [tmp15];
  YouScreenTsx1.__closure = items1;
  YouScreenTsx1.__workletHash = 11467832296045;
  YouScreenTsx1.__initData = tmp14;
  const animatedScrollHandler = obj4.useAnimatedScrollHandler(YouScreenTsx1);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp(tmp2[33])({ scrollPosition: sharedValue, bannerHeight: tmpResultResult }));
  tmp(tmp2[33])({ scrollPosition: sharedValue, bannerHeight: tmpResultResult });
  const isChatBesideChannelList = tmp(tmp2[34])().isChatBesideChannelList;
  size = tmp(tmp2[35])();
  const height = size.height;
  let num2 = 0;
  const diff = size.width - rect.right - rect.left;
  if (isChatBesideChannelList) {
    num2 = 16;
  }
  const diff1 = diff - num2;
  let bound = diff1;
  if (num > 0) {
    const _Math = Math;
    bound = Math.min(diff1, num);
  }
  const tmp23 = first(react.useState(false), 2);
  first = tmp23[0];
  react = tmp23[1];
  const GifAutoPlay = tmp9(tmp2[36]).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  const tmp9Result = navigateToSettings(tmp2[37]);
  const isFocused = tmp9Result.useIsFocused();
  const tmp9Result15 = navigateToSettings(tmp2[38]);
  const tmp27 = !isFocused && !tmp9Result15.useIsProfileModalTransitioning();
  const ref1 = react.useRef(Date.now());
  const ref2 = react.useRef(undefined);
  const ref3 = react.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let bannerURL;
    if (obj2 != null) {
      const obj6 = { canAnimate: setting || first, size: bound };
      bannerURL = obj2.getBannerURL(obj6);
    }
    let source = null;
    if (null != bannerURL) {
      const tmp9Result16 = navigateToSettings(tmp2[39]);
      source = tmp9Result16.makeSource(bannerURL);
    }
    const tmp9Result17 = navigateToSettings(tmp2[39]);
    const isAnimatedImageURLResult = tmp9Result17.isAnimatedImageURL(bannerURL);
    let intl = tmp9(tmp2[22]).intl;
    const obj7 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(navigateToSettings(tmp2[22]).t.gVn4uJ, obj7);
    const obj8 = { user, displayProfile: obj2 };
    const tmp9Result18 = navigateToSettings(tmp2[40]);
    const userProfileBannerBackgroundColor = tmp9Result18.useUserProfileBannerBackgroundColor(obj8);
    const items2 = [rect.bottom];
    const tmp38 = tmp(tmp2[41])();
    const memo = obj5.useMemo(() => {
      let floatingNavBottomMargin;
      let obj2;
      const obj = { dimensionStyle: hasOwnProperty.absoluteFill, contentContainerStyle: obj2 };
      obj2 = { paddingBottom: floatingNavBottomMargin + nativeDefault.space.PX_64 };
      const obj3 = YouBannerDecorations;
      floatingNavBottomMargin = obj3.getFloatingNavBottomMargin(rect.bottom);
      return obj;
    }, items2);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const obj9 = { layout: "YOU_SCREEN", userId: user.id };
    const tmp9Result19 = navigateToSettings(tmp2[43]);
    const createUserProfileAnalyticsContext = tmp9Result19.useCreateUserProfileAnalyticsContext(obj9);
    const tmp9Result20 = navigateToSettings(tmp2[44]);
    const isScreenLandscape = tmp9Result20.useIsScreenLandscape();
    let tmp43;
    const tmpResult10 = tmp(tmp2[45]);
    if (!isScreenLandscape) {
      let skuId;
      if (obj2 != null) {
        const profileFrame = obj2.profileFrame;
        if (profileFrame != null) {
          skuId = profileFrame.skuId;
        }
      }
      tmp43 = skuId;
    }
    const tmpResult2Result = tmpResult10(tmp43);
    let tmp47;
    const tmpResult11 = tmp(tmp2[46]);
    if (!isScreenLandscape) {
      let skuId1;
      if (obj2 != null) {
        const profileFrame2 = obj2.profileFrame;
        if (profileFrame2 != null) {
          skuId1 = profileFrame2.skuId;
        }
      }
      tmp47 = skuId1;
    }
    const obj10 = { skuId: tmp47, openedAt: ref2.current, analyticsLocations: items3, context: createUserProfileAnalyticsContext };
    items3 = [tmp(tmp2[47]).YOU_SCREEN];
    tmpResult11(obj10);
    num3 = 0;
    if (null != tmpResult2Result) {
      num3 = tmp(tmp2[48])(tmpResult2Result, bound).overflowTop;
    }
    const items4 = [num3];
    if (tmp38) {
      let bound1;
      const tmp9Result21 = navigateToSettings(tmp2[49]);
      if (!tmp9Result21.isDuo()) {
        bound1 = closure_12;
      }
      let skuId2;
      if (obj2 != null) {
        const profileEffect = obj2.profileEffect;
        if (profileEffect != null) {
          skuId2 = profileEffect.skuId;
        }
      }
      let tmp89Result2 = null != skuId2;
      const memo1 = obj5.useMemo(() => {
        const items = [navigateToSettings(rect[50]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      const tmp9Result22 = navigateToSettings(tmp2[51]);
      const tmp22Result = first(tmp9Result22.useSelectedDismissibleContent(memo1), 2);
      closure_6 = tmp58;
      const items5 = [null != tmp22Result[0]];
      const memo2 = obj5.useMemo(() => {
        let intl;
        let intl2;
        let tmp = null;
        if (closure_6) {
          const obj = {
            title: intl.string(intl4.t.epBu6F),
            description: intl2.string(intl4.t["o8+3AX"]),
            avatarSrc: {},
            decorationAsset: "",
            renderImgComponent() {
                return closure_1_21(navigateToShop(rect[52]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: { width: 80, height: 80 } });
              }
          };
          intl = intl4.intl;
          intl2 = intl4.intl;
          tmp = obj;
        }
        return tmp;
      }, items5);
      const ref4 = react.useRef(null);
      const ref5 = react.useRef(null);
      closure_7 = tmp57;
      const items6 = [tmp22Result[1], navigateToShop];
      const callback = obj5.useCallback(() => {
        navigateToShop();
        closure_7(ContentDismissActionType.TAKE_ACTION);
      }, items6);
      let tmp63 = null != memo2;
      const obj11 = { disabled: tmp63 };
      const tmp9Result23 = navigateToSettings(tmp2[53]);
      youSettingsCoachmark = tmp9Result23.useYouSettingsCoachmark(obj11);
      let tmp65 = null != youSettingsCoachmark;
      const tmp9Result24 = navigateToSettings(tmp2[54]);
      const customTypingIndicatorConfig = tmp9Result24.useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj2) {
            if (!tmp63) {
              let items7;
              if (!tmp65) {
                items7 = [navigateToSettings(tmp2[50]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK];
              }
              const tmp9Result25 = navigateToSettings(tmp2[51]);
              const tmp22Result3 = first(tmp9Result25.useSelectedDismissibleContent(items7), 2);
              closure_9 = tmp68;
              const tmp69 = tmp22Result3[0] === navigateToSettings(tmp2[50]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              closure_10 = tmp69;
              closure_11 = tmp70;
              closure_12 = first(react.useState(false), 2)[1];
              let tmp74Result = null;
              first(react.useState(false), 2);
              if (tmp63 || tmp65 || tmp69) {
                tmp74Result = null;
                if (tmp72) {
                  const LayerScope = tmp9(tmp2[55]).LayerScope;
                  const tmp74 = closure_22;
                  if (tmp63) {
                    const obj12 = { buttonRef: ref4, markAsDismissed: tmp22Result[1], visible: null != tmp22Result[0], title: null, description: null, avatarSrc: null, decorationAsset: null, renderImgComponent: null, navigateToShop: callback };
                    ({ title: obj25.title, description: obj25.description, avatarSrc: obj25.avatarSrc, decorationAsset: obj25.decorationAsset, renderImgComponent: obj25.renderImgComponent } = memo2);
                    tmp63 = closure_21(tmp(tmp2[56]), obj12);
                  }
                  const items8 = [tmp63, , ];
                  if (tmp65) {
                    const obj13 = { buttonRef: ref5 };
                    const tmpResult12 = tmp(tmp2[53]);
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp65 = closure_21(tmpResult12, obj13);
                  }
                  items8[1] = tmp65;
                  let tmp80 = tmp69;
                  if (tmp80) {
                    const obj14 = { targetRef: ref5, visible: tmp69, markAsDismissed: tmp22Result3[1], position: "top" };
                    tmp80 = closure_21(tmp(tmp2[57]), obj14);
                  }
                  const obj15 = { zIndex: 1, children: items8 };
                  items8[2] = tmp80;
                  tmp74Result = tmp74(LayerScope, obj15);
                }
              }
              const items9 = [tmp63 || tmp65 || tmp69];
              const effect = obj5.useEffect(() => {
                let closure_0;
                if (closure_11) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => closure_1_12(true), 500);
                  return () => clearTimeout(closure_0);
                }
              }, items9);
              const items10 = [navigateToSettings, youSettingsCoachmark, tmp69, tmp22Result3[1]];
              const callback1 = obj5.useCallback(() => {
                const tmp = youSettingsCoachmark;
                if (youSettingsCoachmark != null) {
                  const trackSettingsPress = tmp.trackSettingsPress;
                  if (trackSettingsPress != null) {
                    trackSettingsPress();
                  }
                }
                const tmp3 = closure_10;
                if (tmp3) {
                  closure_9(ContentDismissActionType.TAKE_ACTION);
                }
                navigateToSettings();
              }, items10);
              const obj16 = { navigateToPremium, navigateToSettings: callback1, navigateToShop: callback, shopButtonRef: ref4, settingsButtonRef: ref5, paddingBottom: rect.bottom };
              const tmp85 = closure_21(tmp(tmp2[42]), obj16);
              const LayerScope2 = tmp9(tmp2[55]).LayerScope;
              const obj17 = { theme, primaryColor, secondaryColor, children: closure_21(UserProfileAnalyticsProvider, obj18) };
              const ThemeContextProvider = tmp9(tmp2[58]).ThemeContextProvider;
              obj18 = { value: createUserProfileAnalyticsContext, openedAt: ref1.current, fetchStartedAt, fetchEndedAt, isLoaded, children: closure_22(tmpResult13, obj19) };
              fetchStartedAt = undefined;
              UserProfileAnalyticsProvider = tmp9(tmp2[43]).UserProfileAnalyticsProvider;
              if (obj2 != null) {
                fetchStartedAt = obj2.fetchStartedAt;
              }
              fetchEndedAt = undefined;
              if (obj2 != null) {
                fetchEndedAt = obj2.fetchEndedAt;
              }
              isLoaded = undefined;
              if (obj2 != null) {
                isLoaded = obj2.isLoaded;
              }
              obj19 = { style: items11, nativeID, children: items12 };
              items11 = [tmp7.container, tmp50];
              let tmp84Result = null != tmpResult2Result;
              tmpResult13 = tmp(tmp2[59]);
              if (tmp84Result) {
                const obj20 = { frame: tmpResult2Result, profileThemeType: constants.YOU_SCREEN, frameOrder: navigateToSettings(tmp2[61]).ProfileFrameLayerOrder.BACK, containerWidth: bound };
                const tmpResult14 = tmp(tmp2[60]);
                tmp84Result = tmp84(tmpResult14, obj20);
              }
              items12 = [tmp84Result, , , , , ];
              const obj21 = { gradientHeight: height, bannerHeight: tmpResultResult, style: tmp96 };
              class YouScreenTsx1 {
                constructor(contentOffset) {
                  const result = _undefined.set(contentOffset.contentOffset.y);
                }
              }
              tmp96[0] = tmp7.background;
              let card = flag;
              const tmpResult15 = tmp(tmp2[62]);
              if (flag) {
                card = tmp7.card;
              }
              tmp96[1] = card;
              items12[1] = closure_21(tmpResult15, obj21);
              const obj22 = { contentContainerStyle, ref, onScroll: animatedScrollHandler, onLayout, scrollEventThrottle, style: items13, children: items21 };
              items13 = [tmp7.scrollView, ];
              let card2 = flag;
              const tmp97 = closure_26;
              if (flag) {
                card2 = tmp7.card;
              }
              items13[1] = card2;
              const obj23 = { style: items14, children: items15 };
              items14 = [tmp7.banner, bannerAnimatedStyle];
              let tmp84Result6 = !tmp89Result2;
              const View = tmp(tmp2[14]).View;
              if (!tmp89Result2) {
                const obj24 = { paddingTop: bound1 };
                tmp84Result6 = tmp84(BackButton, obj24);
              }
              items15 = [tmp84Result6, ];
              const obj26 = { style: items16, children: items18 };
              items16 = [dimensionStyle, bannerImageAnimatedStyle];
              const obj27 = { style: items17 };
              items17 = [num3.absoluteFill, ];
              const obj28 = { backgroundColor: tmp9Result26.int2hex(userProfileBannerBackgroundColor) };
              const View2 = tmp(tmp2[14]).View;
              items17[1] = obj28;
              tmp9Result26 = navigateToSettings(tmp2[63]);
              items18 = [closure_21(closure_6, obj27), , ];
              let tmp103 = null != source;
              const tmp101 = closure_6;
              const tmp102 = num3;
              if (tmp103) {
                let tmp84Result8;
                if (isAnimatedImageURLResult) {
                  const obj29 = {
                    style: dimensionStyle,
                    onPress() {
                                      return closure_4(!first);
                                    },
                    accessibilityRole: "image",
                    accessibilityLabel: intl2.string(navigateToSettings(tmp2[22]).t["3fzj/l"]),
                    children: items19
                  };
                  const PressableOpacity = tmp9(tmp2[23]).PressableOpacity;
                  intl2 = tmp9(tmp2[22]).intl;
                  const obj30 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp27 };
                  items19 = [closure_21(tmp(tmp2[52]), obj30), ];
                  let tmp84Result7 = !tmp31;
                  if (tmp84Result7) {
                    const obj31 = { label: intl3.string(navigateToSettings(tmp2[22]).t.I5gL2H), style: items20, textStyle: tmp7.gifTagText };
                    const Caption = tmp9(tmp2[64]).Caption;
                    intl3 = tmp9(tmp2[22]).intl;
                    items20 = [tmp7.gifTag, ];
                    const obj32 = { top: bound1 };
                    items20[1] = obj32;
                    tmp84Result7 = tmp84(Caption, obj31);
                  }
                  items19[1] = tmp84Result7;
                  tmp84Result8 = tmp89(PressableOpacity, obj29);
                } else {
                  const obj33 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp27 };
                  tmp84Result8 = tmp84(tmp(tmp2[52]), obj33);
                }
                tmp103 = tmp84Result8;
              }
              items18[1] = tmp103;
              const tmp9Result27 = navigateToSettings(tmp2[17]);
              let tmp84Result9 = tmp9Result27.isIOS() && showBlur;
              if (tmp84Result9) {
                const obj34 = { animatedProps: blurAnimatedProps, style: tmp102.absoluteFillObject };
                tmp84Result9 = tmp84(VisualEffectViewThemed, obj34);
              }
              items18[2] = tmp84Result9;
              items15[1] = closure_22(View2, obj26);
              items21 = [closure_22(View, obj23), , , ];
              if (tmp89Result2) {
                const obj35 = { pointerEvents: "box-none", style: items22, children: items23 };
                items22 = [tmp7.profileEffectLayer, , ];
                const size1 = { width: "100%", height };
                items22[1] = size1;
                items22[2] = bannerAnimatedStyle;
                const View3 = tmp(tmp2[14]).View;
                const obj36 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp27 };
                items23 = [closure_21(tmp(tmp2[65]), obj36), ];
                const obj37 = { paddingTop: bound1 };
                items23[1] = closure_21(BackButton, obj37);
                tmp89Result2 = tmp89(View3, obj35);
              }
              items21[1] = tmp89Result2;
              const obj38 = { user, userTheme: tmp12, scrollViewRef: ref, scrollPosition: sharedValue, style: items24, navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, navigateToPremium, navigateToShop, initialTab, animateAvatar: !tmp27 };
              items24 = [tmp7.content, contentAnimatedStyle];
              items21[2] = closure_21(tmp(tmp2[66]), obj38);
              items21[3] = closure_21(navigateToSettings(tmp2[67]).TTIFirstContentfulPaint, { label: "you_screen" });
              items12[2] = closure_22(tmp97, obj22);
              let tmp84Result10 = null != tmpResult2Result;
              if (tmp84Result10) {
                const obj39 = { frame: tmpResult2Result, profileThemeType: constants.YOU_SCREEN, frameOrder: navigateToSettings(tmp2[61]).ProfileFrameLayerOrder.FRONT, containerWidth: bound };
                const tmpResult16 = tmp(tmp2[60]);
                tmp84Result10 = tmp84(tmpResult16, obj39);
              }
              items12[3] = tmp84Result10;
              let tmp84Result11 = tmp85;
              if (flag) {
                const obj40 = { style: tmp7.cardDecorations, pointerEvents: "box-none", children: tmp85 };
                tmp84Result11 = tmp84(tmp101, obj40);
              }
              items12[4] = tmp84Result11;
              items12[5] = tmp74Result;
              const obj41 = { children: closure_21(ThemeContextProvider, obj17) };
              return closure_21(LayerScope2, obj41);
            }
          }
        }
      }
      items7 = [];
    } else {
      navigateToSettings(tmp2[17]);
    }
    const _Math2 = Math;
    bound1 = Math.max(rect.top - num3, closure_12);
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire, ScrollView } = react_native);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: map1, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = YouConstants);
const UserSettingsSections = Constants2.UserSettingsSections;
let closure_17 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ BANNER_ASPECT_RATIO: closure_19, UserProfileThemeTypes: closure_20 } = Constants);
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let module_1653 = module_1653_mod;
const VisualEffectViewThemed = module_1653.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = createStyles_mod;
let closure_24 = createStyles.createStyles(() => {
  let alphaResult;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let rect;
  let xl1;
  let xl;
  const obj = utils_PlatformUtils;
  if (obj.isIOS()) {
    xl = nativeDefault.radii.xl;
  }
  const obj2 = { borderTopLeftRadius: xl, borderTopRightRadius: xl1 };
  xl1 = undefined;
  const tmpResult = utils_PlatformUtils;
  if (tmpResult.isIOS()) {
    xl1 = nativeDefault.radii.xl;
  }
  const obj3 = { container: obj4, background: obj5, scrollView: obj6, profileEffectLayer: { position: "absolute", top: 0, zIndex: 1 }, banner: obj7, gifTag: rect, gifTagText: { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 }, content: { flex: 1, flexGrow: 1 }, card: { borderRadius: nativeDefault.radii.xl }, cardDecorations: obj10 };
  obj4 = { flex: 1, flexGrow: 1, position: "relative" };
  const merged = Object.assign(obj2);
  obj5 = { overflow: "hidden" };
  const merged1 = Object.assign(obj2);
  obj6 = { flex: 1 };
  const merged2 = Object.assign(obj2);
  obj7 = { width: "100%", aspectRatio };
  rect = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8, backgroundColor: alphaResult.css() };
  const tmp10 = _modDef671;
  const tmp10Result = tmp10(nativeDefault.unsafe_rawColors.WHITE);
  alphaResult = tmp10Result.alpha(0.9);
  ({ color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 });
  obj10 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
  ({ borderRadius: nativeDefault.radii.xl });
  const merged3 = Object.assign(hasOwnProperty.absoluteFillObject);
  return obj3;
});
createStyles = createStyles_mod;
let closure_25 = createStyles.createStyles(() => {
  const obj = { backButton: { position: "absolute", marginTop: nativeDefault.space.PX_4, left: nativeDefault.space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" } };
  ({ position: "absolute", marginTop: nativeDefault.space.PX_4, left: nativeDefault.space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" });
  return obj;
});
module_1653 = module_1653_mod;
let closure_26 = module_1653.createAnimatedComponent(ScrollView);
let closure_29 = { code: "(function YouScreenTsx1(e){let[scrollPosition]=this.__closure;scrollPosition.set(e.contentOffset.y);})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(arg0) {
  let constants2;
  let currentUser;
  let initialTab;
  let isCard;
  let locale;
  let state;
  let stateFromStores;
  let memo;
  let navigateToSettings;
  let tmp = stateFromStores;
  let tmp2 = memo;
  ({ initialTab, isCard } = arg0);
  let obj = stateFromStores(memo[21]);
  let items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(memo[21]);
  const items1 = [LocaleStore];
  let id;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items2 = [stateFromStores];
  memo = react.useMemo(() => {
    let avatarURL;
    const obj = stateFromStores;
    if (stateFromStores != null) {
      avatarURL = obj.getAvatarURL(null, map1);
    }
    return avatarURL;
  }, items2);
  const items3 = [id, memo, stateFromStores1];
  const layoutEffect = react.useLayoutEffect(() => {
    let tmp2 = null != id;
    const tmp = id;
    if (tmp2) {
      tmp2 = null != memo;
    }
    if (tmp2) {
      maybeFetchUserProfileDefault(tmp, memo, { type: "you_screen" });
    }
  }, items3);
  const items4 = [UserProfileStore];
  const tmpResult = tmp(tmp2[21]);
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    return firstWishlistId;
  });
  const tmpResult3 = tmp(tmp2[69]);
  const fetchWishlist = tmpResult3.useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  navigateToSettings = react.useCallback(() => {
    state.setState({ query: "", isActive: false });
    const obj = stateFromStores(memo[70]);
    obj.openUserSettings();
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = stateFromStores(memo[70]);
    const obj2 = { screen: constants.PREMIUM };
    obj.openUserSettings(obj2);
  }, []);
  const callback2 = react.useCallback(() => {
    let items;
    const tmp = stateFromStores(memo[71]);
    const openCollectiblesShopMobile = tmp.openCollectiblesShopMobile;
    const obj = { analyticsSource: id(memo[47]).YOU_SCREEN, analyticsLocations: items, screen: constants2.FEATURED_PAGE };
    items = [id(memo[47]).YOU_SCREEN];
    const result = openCollectiblesShopMobile(obj);
  }, []);
  const callback3 = react.useCallback((params) => {
    const obj = stateFromStores(memo[70]);
    const obj2 = { screen: constants.PROFILE_CUSTOMIZATION, params };
    obj.openUserSettings(obj2);
  }, []);
  const callback4 = react.useCallback(() => {
    let items;
    const obj = { analyticsLocations: items };
    const openEditCustomStatusModal = stateFromStores(memo[72]).openEditCustomStatusModal;
    items = [];
    stateFromStores(memo[72]);
    items[0] = id(memo[47]).YOU_SCREEN;
    const result = openEditCustomStatusModal(obj);
  }, []);
  const callback5 = react.useCallback(() => {
    const obj = stateFromStores(memo[20]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        rootNavigationRef.navigate("friends");
      }
    }
    return false;
  }, []);
  const layoutEffect1 = react.useLayoutEffect(() => {
    const obj = stateFromStores(memo[73]);
    return obj.trackAppUIViewed();
  }, []);
  const obj3 = {
    scrollToTop() {
      callback();
    }
  };
  const tmpResult4 = tmp(tmp2[37]);
  const scrollToTop = tmpResult4.useScrollToTop(react.useRef(obj3));
  let tmp18 = null;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, navigateToSettings, navigateToPremium: callback1, navigateToProfileCustomization: callback3, navigateToCustomStatus: callback4, navigateToFriends: callback5, navigateToShop: callback2, initialTab, isCard };
    tmp18 = closure_21(UnconnectedYouScreen, obj4);
  }
  return tmp18;
};
