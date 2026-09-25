// Module ID: 16569
// Function ID: 16570
// Name: YouScreen
// Dependencies: [32, 19, 17, 7030, 2111, 14225, 7045, 1372, 15983, 1074, 1076, 2041, 6624, 21, 4563, 7683, 4829, 1365, 576, 672, 4689, 563, 1115, 5428, 16016, 7668, 8222, 1249, 7624, 1612, 7665, 4763, 7681, 4691, 1478, 2020, 1485, 16570, 1397, 7685, 6359, 16571, 7628, 5431, 7639, 7651, 6598, 7662, 2028, 6801, 5894, 16579, 11435, 6572, 16582, 16583, 4537, 16584, 7659, 7645, 7675, 1092, 10103, 8256, 16586, 11361, 7625, 8230, 6795, 6956, 10564, 6890, 2]
// Exports: default

// Module 16569 (YouScreen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import util from "util" /* 1115 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import Pressables from "Pressables" /* 5428 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7625 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 7683 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16016 */;
import YouBannerDecorations from "YouBannerDecorations" /* 16571 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7030 */;
import LocaleStore from "LocaleStore" /* 2111 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14225 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7045 */;
import UserStore from "UserStore" /* 1372 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4563 */;

require = fn;
function handleBackButtonPress() {
  const navigation = RootNavigationRef.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function BackButton(paddingTop) {
  const tmp = closure_24();
  const items = [GuildReadStateStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = tmp2(1115).intl;
    const obj2 = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.vxFYaM, obj2);
  } else {
    const intl = tmp2(1115).intl;
    formatToPlainStringResult = intl.string(tmp2(1115).t["13/7kX"]);
  }
  const obj3 = { style: null, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: handleBackButtonPress, children: closure_1_20(BackIconWithBadge.CloseIconWithBadgeOnSide, { count: stateFromStores }) };
  const items1 = [tmp.backButton, { top: paddingTop.paddingTop }];
  obj3.style = items1;
  return closure_1_20(Pressables.PressableOpacity, obj3);
}
function UnconnectedYouScreen(arg0) {
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let rect;
  let sharedValue;
  let bound;
  first = undefined;
  closure_8 = undefined;
  let num2;
  closure_10 = undefined;
  closure_11 = undefined;
  let youSettingsCoachmark;
  closure_13 = undefined;
  nativeID = undefined;
  scrollEventThrottle = undefined;
  closure_16 = undefined;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  [tmp3, c2] = rect.useState(0);
  const callback = rect.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp8;
  let tmp2 = _slicedToArray(rect.useState(0), 2);
  if (tmp3 > 0) {
    tmp8 = tmp3;
  }
  const tmp7Result = navigateToShop(7668)(tmp8);
  _slicedToArray = tmp7Result;
  const tmp10 = closure_23(tmp7Result);
  let obj2 = { type: null, name: null };
  const tmp7 = navigateToShop(7668);
  obj2.type = navigateToSettings(1249).ImpressionTypes.VIEW;
  obj2.name = navigateToSettings(1249).ImpressionNames.USER_YOU_SCREEN;
  navigateToShop(8222)(obj2);
  const obj3 = navigateToShop(7624)(user.id);
  rect = tmp5(1612)();
  const tmp5Result = navigateToShop(8222);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(7665)({ user, displayProfile: obj3 }));
  const tmp14 = navigateToShop(7665)({ user, displayProfile: obj3 });
  const ref = rect.useRef(null);
  const tmp15 = navigateToShop(4763)();
  sharedValue = navigateToSettings(4563).useSharedValue(0);
  const obj4 = navigateToSettings(4563);
  class N {
    constructor(arg0) {
      result = closure_5.set(arg0.contentOffset.y);
      return;
    }
  }
  N.__closure = { scrollPosition: sharedValue };
  N.__workletHash = 952837799380;
  N.__initData = __initData;
  const obj5 = navigateToSettings(4563);
  const animatedScrollHandler = navigateToSettings(4563).useAnimatedScrollHandler(N);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = navigateToShop(7681)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  let size = tmp5(1478)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(4691)().isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (tmp3 > 0) {
    const _Math = Math;
    bound = Math.min(diff1, tmp3);
  }
  [first, closure_8] = rect.useState(false);
  const GifAutoPlay = tmp12(2020).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  const tmp19 = navigateToShop(7681)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
  const isFocused = navigateToSettings(1485).useIsFocused();
  const tmp12Result = navigateToSettings(1485);
  let tmp28 = !isFocused;
  if (!isFocused) {
    tmp28 = !tmp12Result14.useIsProfileModalTransitioning();
  }
  tmp12Result14 = navigateToSettings(16570);
  const ref2 = rect.useRef(undefined);
  const ref3 = rect.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let obj37 = setting;
    if (!setting) {
      obj37 = first;
    }
    let bannerURL;
    if (obj3 != null) {
      const obj6 = { canAnimate: obj37, size: bound };
      bannerURL = obj3.getBannerURL(obj6);
    }
    let source = null;
    if (null != bannerURL) {
      source = tmp12(1397).makeSource(bannerURL);
      const tmp12Result15 = tmp12(1397);
    }
    const tmp12Result16 = tmp12(1397);
    let intl = tmp12(1115).intl;
    const obj7 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(tmp12(1115).t.gVn4uJ, obj7);
    const isAnimatedImageURLResult = tmp12(1397).isAnimatedImageURL(bannerURL);
    const obj8 = { user, displayProfile: obj3 };
    let tmp37 = null == obj3;
    const userProfileBannerBackgroundColor = tmp12(7685).useUserProfileBannerBackgroundColor(obj8);
    if (!tmp37) {
      tmp37 = !obj3.isLoaded;
    }
    let items = [tmp7Result, bound, rect.bottom];
    const tmp12Result17 = tmp12(7685);
    const memo = obj.useMemo(() => {
      const obj = { dimensionStyle: null, contentContainerStyle: null };
      const size = { width: bound, height };
      obj.dimensionStyle = size;
      const obj2 = { paddingBottom: null };
      const floatingNavBottomMargin = YouBannerDecorations.getFloatingNavBottomMargin(rect.bottom);
      obj2.paddingBottom = floatingNavBottomMargin + nativeDefault.space.PX_64;
      obj.contentContainerStyle = obj2;
      return obj;
    }, items);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const tmp38 = tmp5(6359)();
    const obj9 = { layout: "YOU_SCREEN", userId: user.id };
    const createUserProfileAnalyticsContext = tmp12(7628).useCreateUserProfileAnalyticsContext(obj9);
    const tmp12Result18 = tmp12(7628);
    const isScreenLandscape = tmp12(5431).useIsScreenLandscape();
    let tmp43;
    const tmp12Result19 = tmp12(5431);
    if (!isScreenLandscape) {
      let skuId;
      if (obj3 != null) {
        const profileFrame = obj3.profileFrame;
        if (profileFrame != null) {
          skuId = profileFrame.skuId;
        }
      }
      tmp43 = skuId;
    }
    const tmp5Result1Result = tmp5(7639)(tmp43);
    let tmp47;
    const tmp5Result7 = tmp5(7639);
    if (!isScreenLandscape) {
      let skuId1;
      if (obj3 != null) {
        const profileFrame2 = obj3.profileFrame;
        if (profileFrame2 != null) {
          skuId1 = profileFrame2.skuId;
        }
      }
      tmp47 = skuId1;
    }
    const obj10 = { skuId: tmp47, openedAt: ref2.current, analyticsLocations: null, context: null };
    const items1 = [tmp5(6598).YOU_SCREEN];
    obj10.analyticsLocations = items1;
    obj10.context = createUserProfileAnalyticsContext;
    tmp5(7651)(obj10);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = tmp5(7662)(tmp5Result1Result, bound).overflowTop;
    }
    const items2 = [num2];
    if (!tmp38) {
      if (!tmp12Result20.isIOS()) {
        const _Math2 = Math;
        let bound1 = Math.max(rect.top - num2, youSettingsCoachmark);
      }
      let skuId2;
      if (obj3 != null) {
        const profileEffect = obj3.profileEffect;
        if (profileEffect != null) {
          skuId2 = profileEffect.skuId;
        }
      }
      let tmp89Result = null != skuId2;
      const memo1 = obj.useMemo(() => {
        const items = [navigateToSettings(_undefined[48]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      tmp12Result20 = tmp12(1365);
      const tmpResult4 = tmp(tmp12(6801).useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp58;
      const items3 = [null != tmpResult4[0]];
      const memo2 = obj.useMemo(() => {
        let tmp = null;
        if (closure_10) {
          const obj = { title: null, description: null, avatarSrc: null, decorationAsset: "", renderImgComponent: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.epBu6F);
          const intl2 = util.intl;
          obj.description = intl2.string(util.t["o8+3AX"]);
          obj.avatarSrc = {};
          obj.renderImgComponent = function renderImgComponent() {
            return closure_1_20(navigateToShop(_undefined[50]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: { width: 80, height: 80 } });
          };
          tmp = obj;
        }
        return tmp;
      }, items3);
      const ref4 = obj.useRef(null);
      const ref5 = obj.useRef(null);
      closure_11 = tmp57;
      const items4 = [tmpResult4[1], navigateToShop];
      const callback1 = obj.useCallback(() => {
        navigateToShop();
        closure_11(ContentDismissActionType.TAKE_ACTION);
      }, items4);
      let tmp63 = null != memo2;
      const tmp12Result21 = tmp12(6801);
      const obj11 = { disabled: tmp63 };
      youSettingsCoachmark = tmp12(16579).useYouSettingsCoachmark(obj11);
      let tmp65 = null != youSettingsCoachmark;
      const tmp12Result22 = tmp12(16579);
      const customTypingIndicatorConfig = tmp12(11435).useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj3) {
            if (!tmp63) {
              if (!tmp65) {
                let items5 = [tmp12(2028).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK];
              }
              const tmpResult5 = tmp(tmp12(6801).useSelectedDismissibleContent(items5), 2);
              closure_13 = tmp68;
              const tmp69 = tmpResult5[0] === tmp12(2028).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              nativeID = tmp69;
              let tmp70 = tmp63;
              if (!tmp63) {
                tmp70 = tmp65;
              }
              if (!tmp70) {
                tmp70 = tmp69;
              }
              scrollEventThrottle = tmp70;
              const tmp12Result24 = tmp12(6801);
              closure_16 = tmp(obj.useState(false), 2)[1];
              let tmp74Result = null;
              if (tmp70) {
                tmp74Result = null;
                if (tmp72) {
                  if (tmp63) {
                    const obj12 = { buttonRef: ref4, markAsDismissed: tmp57, visible: tmp58, title: null, description: null, avatarSrc: null, decorationAsset: null, renderImgComponent: null, navigateToShop: null };
                    ({ title: obj25.title, description: obj25.description, avatarSrc: obj25.avatarSrc, decorationAsset: obj25.decorationAsset, renderImgComponent: obj25.renderImgComponent } = memo2);
                    obj12.navigateToShop = callback1;
                    tmp63 = closure_20(tmp5(16582), obj12);
                  }
                  const items6 = [tmp63, , ];
                  if (tmp65) {
                    const obj13 = { buttonRef: ref5 };
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp65 = closure_20(tmp5(16579), obj13);
                    const tmp5Result9 = tmp5(16579);
                  }
                  items6[1] = tmp65;
                  let tmp80 = tmp69;
                  if (tmp69) {
                    const obj14 = { targetRef: ref5, visible: tmp69, markAsDismissed: tmp68, position: "top" };
                    tmp80 = closure_20(tmp5(16583), obj14);
                  }
                  const obj15 = { zIndex: 1, children: null };
                  items6[2] = tmp80;
                  obj15.children = items6;
                  tmp74Result = closure_21(tmp12(6572).LayerScope, obj15);
                }
              }
              const items7 = [tmp70];
              const effect = obj.useEffect(() => {
                if (closure_15) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => closure_1_16(true), 500);
                  return () => clearTimeout(closure_0);
                }
              }, items7);
              const items8 = [navigateToSettings, youSettingsCoachmark, tmp69, tmpResult5[1]];
              const callback2 = obj.useCallback(() => {
                if (youSettingsCoachmark != null) {
                  const trackSettingsPress = youSettingsCoachmark.trackSettingsPress;
                  if (trackSettingsPress != null) {
                    trackSettingsPress();
                  }
                }
                if (closure_14) {
                  closure_13(ContentDismissActionType.TAKE_ACTION);
                }
                navigateToSettings();
              }, items8);
              const obj16 = { isLoading: tmp37, navigateToPremium, navigateToSettings: callback2, navigateToShop: callback1, shopButtonRef: ref4, settingsButtonRef: ref5, paddingBottom: rect.bottom };
              const tmpResult6 = tmp(obj.useState(false), 2);
              const obj17 = { theme, primaryColor, secondaryColor, children: null };
              const obj18 = { value: createUserProfileAnalyticsContext, openedAt: ref1.current, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
              let fetchStartedAt;
              if (obj3 != null) {
                fetchStartedAt = obj3.fetchStartedAt;
              }
              obj18.fetchStartedAt = fetchStartedAt;
              let fetchEndedAt;
              if (obj3 != null) {
                fetchEndedAt = obj3.fetchEndedAt;
              }
              obj18.fetchEndedAt = fetchEndedAt;
              let isLoaded;
              if (obj3 != null) {
                isLoaded = obj3.isLoaded;
              }
              obj18.isLoaded = isLoaded;
              const obj19 = { style: null, nativeID: null, children: null };
              const items9 = [tmp10.container, tmp50];
              obj19.style = items9;
              obj19.nativeID = nativeID;
              let tmp84Result = null != tmp5Result1Result;
              const tmp85 = closure_20(tmp5(16571), obj16);
              if (tmp84Result) {
                const obj20 = { frame: tmp5Result1Result, profileThemeType: UserProfileThemeTypes.YOU_SCREEN, frameOrder: tmp12(7645).ProfileFrameLayerOrder.BACK, containerWidth: bound };
                tmp84Result = tmp84(tmp5(7659), obj20);
                const tmp5Result11 = tmp5(7659);
              }
              const items10 = [tmp84Result, , , , , ];
              class N {
                constructor(arg0) {
                  result = closure_5.set(arg0.contentOffset.y);
                  return;
                }
              }
              tmp95[0] = height;
              tmp95[1] = tmp7Result;
              tmp95[2] = tmp10.background;
              items10[1] = closure_20(tmp5(7675), tmp95);
              const obj21 = { contentContainerStyle, ref, onScroll: animatedScrollHandler, onLayout: callback, scrollEventThrottle, style: tmp10.scrollView, children: null };
              const obj22 = { style: null, children: null };
              const items11 = [tmp10.banner, bannerAnimatedStyle];
              obj22.style = items11;
              let tmp84Result5 = !tmp89Result;
              if (!tmp89Result) {
                const obj23 = { paddingTop: bound1 };
                tmp84Result5 = tmp84(BackButton, obj23);
              }
              const items12 = [tmp84Result5, ];
              const obj24 = { style: null, children: null };
              const items13 = [dimensionStyle, bannerImageAnimatedStyle];
              obj24.style = items13;
              const obj26 = { style: null };
              const items14 = [sharedValue.absoluteFill, ];
              const obj27 = { backgroundColor: null };
              const tmp101 = sharedValue;
              const tmp5Result10 = tmp5(16584);
              const tmp96 = closure_25;
              obj27.backgroundColor = tmp12(1092).int2hex(userProfileBannerBackgroundColor);
              items14[1] = obj27;
              obj26.style = items14;
              const items15 = [closure_20(bound, obj26), , ];
              if (null == source) {
                items15[1] = tmp102;
                let tmp84Result6 = tmp12(1365).isIOS() && showBlur;
                if (tmp84Result6) {
                  const obj28 = { animatedProps: blurAnimatedProps, style: tmp101.absoluteFillObject };
                  tmp84Result6 = tmp84(VisualEffectViewThemed, obj28);
                }
                items15[2] = tmp84Result6;
                obj24.children = items15;
                items12[1] = tmp89(tmp5(4563).View, obj24);
                obj22.children = items12;
                const items16 = [tmp89(tmp5(4563).View, obj22), , , ];
                if (tmp89Result) {
                  const obj29 = { pointerEvents: "box-none", style: null, children: null };
                  const items17 = [tmp10.profileEffectLayer, , ];
                  const size1 = { width: bound, height };
                  items17[1] = size1;
                  items17[2] = bannerAnimatedStyle;
                  obj29.style = items17;
                  const obj30 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp28 };
                  const items18 = [tmp84(tmp5(8256), obj30), ];
                  const obj31 = { paddingTop: bound1 };
                  items18[1] = tmp84(BackButton, obj31);
                  obj29.children = items18;
                  tmp89Result = tmp89(tmp5(4563).View, obj29);
                }
                items16[1] = tmp89Result;
                const obj32 = { user, userTheme: tmp15, scrollViewRef: ref, scrollPosition: sharedValue, style: null, navigateToProfileCustomization: null, navigateToCustomStatus: null, navigateToFriends: null, navigateToPremium: null, navigateToShop: null, initialTab: null, animateAvatar: null };
                const items19 = [tmp10.content, contentAnimatedStyle];
                obj32.style = items19;
                obj32.navigateToProfileCustomization = navigateToProfileCustomization;
                obj32.navigateToCustomStatus = navigateToCustomStatus;
                obj32.navigateToFriends = navigateToFriends;
                obj32.navigateToPremium = navigateToPremium;
                obj32.navigateToShop = navigateToShop;
                obj32.initialTab = initialTab;
                obj32.animateAvatar = !tmp28;
                items16[2] = tmp84(tmp5(16586), obj32);
                items16[3] = tmp84(tmp12(11361).TTIFirstContentfulPaint, { label: "you_screen" });
                obj21.children = items16;
                items10[2] = tmp89(tmp96, obj21);
                let tmp84Result7 = null != tmp5Result1Result;
                if (tmp84Result7) {
                  const obj33 = { frame: tmp5Result1Result, profileThemeType: UserProfileThemeTypes.YOU_SCREEN, frameOrder: tmp12(7645).ProfileFrameLayerOrder.FRONT, containerWidth: bound };
                  tmp84Result7 = tmp84(tmp5(7659), obj33);
                  const tmp5Result12 = tmp5(7659);
                }
                const obj34 = { children: null };
                items10[3] = tmp84Result7;
                items10[4] = tmp85;
                items10[5] = tmp74Result;
                obj19.children = items10;
                obj18.children = tmp89(tmp5Result10, obj19);
                obj17.children = tmp84(tmp12(7628).UserProfileAnalyticsProvider, obj18);
                obj34.children = tmp84(tmp12(4537).ThemeContextProvider, obj17);
                return tmp84(tmp12(6572).LayerScope, obj34);
              } else if (isAnimatedImageURLResult) {
                const obj35 = {
                  onPress() {
                                  return closure_8(!first);
                                },
                  accessibilityRole: "image",
                  accessibilityLabel: null,
                  children: null
                };
                let intl2 = tmp12(1115).intl;
                obj35.accessibilityLabel = intl2.string(tmp12(1115).t["3fzj/l"]);
                const obj36 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp28 };
                const items20 = [tmp84(tmp5(5894), obj36), ];
                let tmp84Result8 = !obj37;
                if (!obj37) {
                  obj37 = { label: null, style: null, textStyle: null };
                  const intl3 = tmp12(1115).intl;
                  obj37.label = intl3.string(tmp12(1115).t.I5gL2H);
                  const items21 = [tmp10.gifTag, ];
                  dimensionStyle = { top: bound1 };
                  items21[1] = dimensionStyle;
                  obj37.style = items21;
                  obj37.textStyle = tmp10.gifTagText;
                  tmp84Result8 = tmp84(tmp12(10103).Caption, obj37);
                }
                items20[1] = tmp84Result8;
                obj35.children = items20;
                let tmp89Result2 = tmp89(tmp12(5428).PressableOpacity, obj35);
              } else {
                const obj38 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp28 };
                tmp89Result2 = tmp84(tmp5(5894), obj38);
              }
              const tmp12Result25 = tmp12(1092);
            }
          }
        }
      }
      items5 = [];
      const tmp12Result23 = tmp12(11435);
    }
    bound1 = youSettingsCoachmark;
    const tmp5Result8 = tmp5(7651);
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire, ScrollView } = get_ActivityIndicator);
const YouConstants = fn(15983);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: map1, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = YouConstants);
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_17 = fn(1076).CollectiblesMobileShopScreen;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const UserProfileThemeTypes = fn(6624).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = fn(4829);
let closure_23 = createStyles.createStyles((minHeight) => {
  let xl;
  if (obj.isIOS()) {
    xl = nativeDefault.radii.xl;
  }
  const obj2 = { borderTopLeftRadius: xl, borderTopRightRadius: null };
  obj = utils_PlatformUtils;
  let xl1;
  if (tmpResult.isIOS()) {
    xl1 = nativeDefault.radii.xl;
  }
  obj2.borderTopRightRadius = xl1;
  const obj3 = { container: null, background: null, scrollView: null, profileEffectLayer: null, banner: null, gifTag: null, gifTagText: null, content: null };
  const merged = Object.assign(obj2);
  obj3.container = { flex: 1, flexGrow: 1, position: "relative" };
  const merged1 = Object.assign(obj2);
  obj3.background = { overflow: "hidden" };
  const merged2 = Object.assign(obj2);
  obj3.scrollView = { flex: 1 };
  obj3.profileEffectLayer = { position: "absolute", top: 0, zIndex: 1 };
  obj3.banner = { minHeight, position: "absolute", top: 0, maxWidth: "100%" };
  const rect = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8, backgroundColor: null };
  const obj4 = { flex: 1, flexGrow: 1, position: "relative" };
  const obj5 = { overflow: "hidden" };
  const obj6 = { flex: 1 };
  tmpResult = utils_PlatformUtils;
  const tmp10Result = _modDef672(nativeDefault.unsafe_rawColors.WHITE);
  rect.backgroundColor = _modDef672(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
  obj3.gifTag = rect;
  const alphaResult = _modDef672(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9);
  obj3.gifTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj3.content = { marginTop: minHeight, flex: 1, flexGrow: 1 };
  return obj3;
});
createStyles = fn(4829);
let closure_24 = createStyles.createStyles(() => {
  const obj = { backButton: { position: "absolute", marginTop: nativeDefault.space.PX_4, left: nativeDefault.space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" } };
  return obj;
});
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_25 = ReanimatedRexport.createAnimatedComponent(ScrollView);
const __initData = { code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let stateFromStores;
  let memo;
  let navigateToSettings;
  let items = [UserStore];
  stateFromStores = stateFromStores(memo[21]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = stateFromStores(memo[21]);
  const items1 = [LocaleStore];
  let id;
  const stateFromStores1 = stateFromStores(memo[21]).useStateFromStores(items1, () => locale.locale);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items2 = [stateFromStores];
  memo = noop.useMemo(() => {
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(null, map1);
    }
    return avatarURL;
  }, items2);
  const items3 = [id, memo, stateFromStores1];
  const layoutEffect = noop.useLayoutEffect(() => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != memo;
    }
    if (tmp2) {
      maybeFetchUserProfileDefault(id, memo, { type: "you_screen" });
    }
  }, items3);
  let obj2 = stateFromStores(memo[21]);
  const items4 = [UserProfileStore];
  const stateFromStores2 = stateFromStores(memo[21]).useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    return firstWishlistId;
  });
  const tmpResult = stateFromStores(memo[21]);
  const fetchWishlist = stateFromStores(memo[67]).useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  navigateToSettings = noop.useCallback(() => {
    state.setState({ query: "", isActive: false });
    stateFromStores(memo[68]).openUserSettings();
  }, []);
  const callback1 = noop.useCallback(() => {
    stateFromStores(memo[68]).openUserSettings({ screen: constants.PREMIUM });
  }, []);
  const callback2 = noop.useCallback(() => {
    const obj2 = { analyticsSource: id(memo[46]).YOU_SCREEN, analyticsLocations: null, screen: null };
    const items = [id(memo[46]).YOU_SCREEN];
    obj2.analyticsLocations = items;
    obj2.screen = constants2.FEATURED_PAGE;
    const result = stateFromStores(memo[69]).openCollectiblesShopMobile(obj2);
  }, []);
  const callback3 = noop.useCallback((autoFocusElement) => {
    const obj2 = { screen: constants.PROFILE_CUSTOMIZATION, params: { autoFocusElement } };
    stateFromStores(memo[68]).openUserSettings(obj2);
  }, []);
  const callback4 = noop.useCallback(() => {
    const obj2 = { analyticsLocations: null };
    const items = [id(memo[46]).YOU_SCREEN];
    obj2.analyticsLocations = items;
    const result = stateFromStores(memo[70]).openEditCustomStatusModal(obj2);
  }, []);
  const callback5 = noop.useCallback(() => {
    const rootNavigationRef = stateFromStores(memo[20]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        rootNavigationRef.navigate("friends");
      }
    }
    return false;
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => stateFromStores(memo[71]).trackAppUIViewed(), []);
  const tmpResult3 = stateFromStores(memo[67]);
  const scrollToTop = stateFromStores(memo[36]).useScrollToTop(noop.useRef({
    scrollToTop() {
      callback();
    }
  }));
  let tmp18 = null;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, navigateToSettings, navigateToPremium: callback1, navigateToProfileCustomization: callback3, navigateToCustomStatus: callback4, navigateToFriends: callback5, navigateToShop: callback2, initialTab: initialTab.initialTab };
    tmp18 = closure_20(UnconnectedYouScreen, obj4);
  }
  return tmp18;
};
