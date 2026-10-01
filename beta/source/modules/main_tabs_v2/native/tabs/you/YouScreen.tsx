// Module ID: 16602
// Function ID: 16603
// Name: YouScreen
// Dependencies: [32, 19, 17, 7035, 2112, 14249, 7050, 1372, 16007, 1074, 1076, 2042, 6629, 21, 4566, 7691, 4836, 1365, 576, 672, 4693, 563, 1115, 5435, 16040, 7676, 8230, 1249, 7631, 1613, 7673, 4767, 7689, 4695, 1479, 2021, 1486, 16603, 1397, 7693, 6364, 16604, 7635, 5438, 7646, 7658, 6603, 7670, 2029, 6806, 5899, 16612, 11449, 6577, 16615, 16616, 4540, 16617, 7666, 7652, 7683, 1092, 10114, 8264, 16619, 11375, 7632, 8238, 6800, 6961, 10575, 6895, 2]
// Exports: default

// Module 16602 (YouScreen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import intl4 from "intl" /* 1115 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import Constants2 from "Constants" /* 6629 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 7691 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16040 */;
import YouBannerDecorations from "YouBannerDecorations" /* 16604 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14249 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import UserStore from "UserStore" /* 1372 */;
import YouConstants from "YouConstants" /* 16007 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, nativeID, navigation, scrollEventThrottle;

let ScrollView;
let closure_12;
let closure_14;
let closure_15;
let closure_20;
let closure_21;
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
  const tmp = closure_24();
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = tmp2(1115).intl;
    const obj2 = { mentionCount: stateFromStores };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.vxFYaM, obj2);
  } else {
    const intl = tmp2(1115).intl;
    formatToPlainStringResult = intl.string(tmp2(1115).t["13/7kX"]);
  }
  const obj3 = { style: items1, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: handleBackButtonPress, children: closure_20(BackIconWithBadge.CloseIconWithBadgeOnSide, { count: stateFromStores }) };
  items1 = [tmp.backButton, { top: paddingTop }];
  const PressableOpacity = tmp2(5435).PressableOpacity;
  return closure_20(PressableOpacity, obj3);
}
function UnconnectedYouScreen(arg0) {
  let UserProfileAnalyticsProvider;
  let _undefined;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let c2;
  let closure_14;
  let closure_15;
  let contentAnimatedStyle;
  let contentContainerStyle;
  let dimensionStyle;
  let fetchEndedAt;
  let fetchStartedAt;
  let initialTab;
  let intl2;
  let intl3;
  let isLoaded;
  let items1;
  let items10;
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
  let items9;
  let navigateToCustomStatus;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let navigateToSettings;
  let navigateToShop;
  let obj18;
  let obj19;
  let primaryColor;
  let secondaryColor;
  let showBlur;
  let theme;
  let tmp12Result25;
  let tmp3;
  let tmp5Result10;
  let user;
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let rect;
  let sharedValue;
  let bound;
  let first;
  let closure_8;
  let num2;
  let closure_10;
  let closure_11;
  let youSettingsCoachmark;
  let closure_13;
  nativeID = undefined;
  scrollEventThrottle = undefined;
  let closure_16;
  let obj = rect;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  let tmp = _slicedToArray;
  let tmp2 = _slicedToArray(rect.useState(0), 2);
  [tmp3, c2] = tmp2;
  const callback = rect.useCallback((nativeEvent) => {
    c2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp8;
  const tmp7 = navigateToShop(7676);
  if (tmp3 > 0) {
    tmp8 = tmp3;
  }
  const tmp7Result = tmp7(tmp8);
  _slicedToArray = tmp7Result;
  const tmp10 = closure_23(tmp7Result);
  let obj2 = { type: navigateToSettings(1249).ImpressionTypes.VIEW, name: navigateToSettings(1249).ImpressionNames.USER_YOU_SCREEN };
  const tmp5Result = navigateToShop(8230);
  tmp5Result(obj2);
  const obj3 = navigateToShop(7631)(user.id);
  rect = tmp5(1613)();
  ({ theme, primaryColor, secondaryColor } = navigateToShop(7673)({ user, displayProfile: obj3 }));
  navigateToShop(7673)({ user, displayProfile: obj3 });
  const tmp15 = navigateToShop(4767)();
  const ref = obj.useRef(null);
  let obj4 = navigateToSettings(4566);
  sharedValue = obj4.useSharedValue(0);
  const obj5 = navigateToSettings(4566);
  class N {
    constructor(contentOffset) {
      const result = sharedValue.set(contentOffset.contentOffset.y);
    }
  }
  N.__closure = { scrollPosition: sharedValue };
  N.__workletHash = 952837799380;
  N.__initData = __initData;
  const animatedScrollHandler = obj5.useAnimatedScrollHandler(N);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = navigateToShop(7689)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  navigateToShop(7689)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
  const isChatBesideChannelList = tmp5(4695)().isChatBesideChannelList;
  size = tmp5(1479)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (tmp3 > 0) {
    const _Math = Math;
    bound = Math.min(diff1, tmp3);
  }
  const tmpResult = tmp(obj.useState(false), 2);
  first = tmpResult[0];
  closure_8 = tmpResult[1];
  const GifAutoPlay = tmp12(2021).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  const tmp12Result = navigateToSettings(1486);
  const isFocused = tmp12Result.useIsFocused();
  const tmp12Result14 = navigateToSettings(16603);
  const tmp28 = !isFocused && !tmp12Result14.useIsProfileModalTransitioning();
  const ref1 = obj.useRef(Date.now());
  const ref2 = obj.useRef(undefined);
  const ref3 = obj.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let bannerURL;
    if (obj3 != null) {
      const obj6 = { canAnimate: setting || first, size: bound };
      bannerURL = obj3.getBannerURL(obj6);
    }
    let source = null;
    if (null != bannerURL) {
      const tmp12Result15 = navigateToSettings(1397);
      source = tmp12Result15.makeSource(bannerURL);
    }
    const tmp12Result16 = navigateToSettings(1397);
    const isAnimatedImageURLResult = tmp12Result16.isAnimatedImageURL(bannerURL);
    let intl = tmp12(1115).intl;
    const obj7 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(navigateToSettings(1115).t.gVn4uJ, obj7);
    let tmp38 = null == obj3;
    const obj8 = { user, displayProfile: obj3 };
    const tmp12Result17 = navigateToSettings(7693);
    const userProfileBannerBackgroundColor = tmp12Result17.useUserProfileBannerBackgroundColor(obj8);
    if (!tmp38) {
      tmp38 = !obj3.isLoaded;
    }
    let items = [tmp7Result, bound, rect.bottom];
    const tmp39 = navigateToShop(6364)();
    const memo = obj.useMemo(() => {
      let floatingNavBottomMargin;
      let obj2;
      const obj = { dimensionStyle: size, contentContainerStyle: obj2 };
      size = { width: bound, height };
      obj2 = { paddingBottom: floatingNavBottomMargin + nativeDefault.space.PX_64 };
      const obj4 = YouBannerDecorations;
      floatingNavBottomMargin = obj4.getFloatingNavBottomMargin(rect.bottom);
      return obj;
    }, items);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const obj9 = { layout: "YOU_SCREEN", userId: user.id };
    const tmp12Result18 = navigateToSettings(7635);
    const createUserProfileAnalyticsContext = tmp12Result18.useCreateUserProfileAnalyticsContext(obj9);
    const tmp12Result19 = navigateToSettings(5438);
    const isScreenLandscape = tmp12Result19.useIsScreenLandscape();
    let tmp44;
    const tmp5Result7 = navigateToShop(7646);
    if (!isScreenLandscape) {
      let skuId;
      if (obj3 != null) {
        const profileFrame = obj3.profileFrame;
        if (profileFrame != null) {
          skuId = profileFrame.skuId;
        }
      }
      tmp44 = skuId;
    }
    const tmp5Result1Result = tmp5Result7(tmp44);
    let tmp48;
    const tmp5Result8 = navigateToShop(7658);
    if (!isScreenLandscape) {
      let skuId1;
      if (obj3 != null) {
        const profileFrame2 = obj3.profileFrame;
        if (profileFrame2 != null) {
          skuId1 = profileFrame2.skuId;
        }
      }
      tmp48 = skuId1;
    }
    const obj10 = { skuId: tmp48, openedAt: ref2.current, analyticsLocations: items1, context: createUserProfileAnalyticsContext };
    items1 = [tmp5(6603).YOU_SCREEN];
    tmp5Result8(obj10);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = tmp5(7670)(tmp5Result1Result, bound).overflowTop;
    }
    const items2 = [num2];
    if (!tmp39) {
      let bound1;
      const tmp12Result20 = navigateToSettings(1365);
      if (!tmp12Result20.isIOS()) {
        const _Math2 = Math;
        bound1 = Math.max(rect.top - num2, youSettingsCoachmark);
      }
      let skuId2;
      if (obj3 != null) {
        const profileEffect = obj3.profileEffect;
        if (profileEffect != null) {
          skuId2 = profileEffect.skuId;
        }
      }
      let tmp90Result2 = null != skuId2;
      const memo1 = obj.useMemo(() => {
        const items = [navigateToSettings(c2[48]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      const tmp12Result21 = navigateToSettings(6806);
      const tmpResult4 = tmp(tmp12Result21.useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp59;
      const items3 = [null != tmpResult4[0]];
      const memo2 = obj.useMemo(() => {
        let intl;
        let intl2;
        let tmp = null;
        if (closure_10) {
          const obj = {
            title: intl.string(intl4.t.epBu6F),
            description: intl2.string(intl4.t["o8+3AX"]),
            avatarSrc: {},
            decorationAsset: "",
            renderImgComponent() {
                return closure_1_20(navigateToShop(_undefined[50]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: { width: 80, height: 80 } });
              }
          };
          intl = intl4.intl;
          intl2 = intl4.intl;
          tmp = obj;
        }
        return tmp;
      }, items3);
      const ref4 = obj.useRef(null);
      const ref5 = obj.useRef(null);
      closure_11 = tmp58;
      const items4 = [tmpResult4[1], navigateToShop];
      const callback1 = obj.useCallback(() => {
        navigateToShop();
        closure_11(ContentDismissActionType.TAKE_ACTION);
      }, items4);
      let tmp64 = null != memo2;
      const obj11 = { disabled: tmp64 };
      const tmp12Result22 = navigateToSettings(16612);
      youSettingsCoachmark = tmp12Result22.useYouSettingsCoachmark(obj11);
      let tmp66 = null != youSettingsCoachmark;
      const tmp12Result23 = navigateToSettings(11449);
      const customTypingIndicatorConfig = tmp12Result23.useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj3) {
            if (!tmp64) {
              let items5;
              if (!tmp66) {
                items5 = [navigateToSettings(2029).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK];
              }
              const tmp12Result24 = navigateToSettings(6806);
              const tmpResult5 = tmp(tmp12Result24.useSelectedDismissibleContent(items5), 2);
              closure_13 = tmp69;
              const tmp70 = tmpResult5[0] === navigateToSettings(2029).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              nativeID = tmp70;
              scrollEventThrottle = tmp71;
              closure_16 = tmp(obj.useState(false), 2)[1];
              let tmp75Result = null;
              tmp(obj.useState(false), 2);
              if (tmp64 || tmp66 || tmp70) {
                tmp75Result = null;
                if (tmp73) {
                  const LayerScope = tmp12(6577).LayerScope;
                  const tmp75 = closure_21;
                  if (tmp64) {
                    const obj12 = { buttonRef: ref4, markAsDismissed: tmpResult4[1], visible: null != tmpResult4[0], title: null, description: null, avatarSrc: null, decorationAsset: null, renderImgComponent: null, navigateToShop: callback1 };
                    ({ title: obj24.title, description: obj24.description, avatarSrc: obj24.avatarSrc, decorationAsset: obj24.decorationAsset, renderImgComponent: obj24.renderImgComponent } = memo2);
                    tmp64 = closure_20(tmp5(16615), obj12);
                  }
                  const items6 = [tmp64, , ];
                  if (tmp66) {
                    const obj13 = { buttonRef: ref5 };
                    const tmp5Result9 = navigateToShop(16612);
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp66 = closure_20(tmp5Result9, obj13);
                  }
                  items6[1] = tmp66;
                  let tmp81 = tmp70;
                  if (tmp81) {
                    const obj14 = { targetRef: ref5, visible: tmp70, markAsDismissed: tmpResult5[1], position: "top" };
                    tmp81 = closure_20(tmp5(16616), obj14);
                  }
                  const obj15 = { zIndex: 1, children: items6 };
                  items6[2] = tmp81;
                  tmp75Result = tmp75(LayerScope, obj15);
                }
              }
              const items7 = [tmp64 || tmp66 || tmp70];
              const effect = obj.useEffect(() => {
                let closure_0;
                if (closure_15) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => closure_1_16(true), 500);
                  return () => clearTimeout(closure_0);
                }
              }, items7);
              const items8 = [navigateToSettings, youSettingsCoachmark, tmp70, tmpResult5[1]];
              const callback2 = obj.useCallback(() => {
                const tmp = youSettingsCoachmark;
                if (youSettingsCoachmark != null) {
                  const trackSettingsPress = tmp.trackSettingsPress;
                  if (trackSettingsPress != null) {
                    trackSettingsPress();
                  }
                }
                const tmp3 = closure_14;
                if (tmp3) {
                  closure_13(ContentDismissActionType.TAKE_ACTION);
                }
                navigateToSettings();
              }, items8);
              const obj16 = { isLoading: tmp38, navigateToPremium, navigateToSettings: callback2, navigateToShop: callback1, shopButtonRef: ref4, settingsButtonRef: ref5, paddingBottom: rect.bottom };
              const tmp86 = closure_20(navigateToShop(16604), obj16);
              const LayerScope2 = tmp12(6577).LayerScope;
              const obj17 = { theme, primaryColor, secondaryColor, children: closure_20(UserProfileAnalyticsProvider, obj18) };
              const ThemeContextProvider = tmp12(4540).ThemeContextProvider;
              obj18 = { value: createUserProfileAnalyticsContext, openedAt: ref1.current, fetchStartedAt, fetchEndedAt, isLoaded, children: closure_21(tmp5Result10, obj19) };
              fetchStartedAt = undefined;
              UserProfileAnalyticsProvider = tmp12(7635).UserProfileAnalyticsProvider;
              if (obj3 != null) {
                fetchStartedAt = obj3.fetchStartedAt;
              }
              fetchEndedAt = undefined;
              if (obj3 != null) {
                fetchEndedAt = obj3.fetchEndedAt;
              }
              isLoaded = undefined;
              if (obj3 != null) {
                isLoaded = obj3.isLoaded;
              }
              obj19 = { style: items9, nativeID, children: items10 };
              items9 = [tmp10.container, tmp51];
              let tmp85Result = null != tmp5Result1Result;
              tmp5Result10 = navigateToShop(16617);
              if (tmp85Result) {
                const obj20 = { frame: tmp5Result1Result, profileThemeType: UserProfileThemeTypes.YOU_SCREEN, frameOrder: navigateToSettings(7652).ProfileFrameLayerOrder.BACK, containerWidth: bound };
                const tmp5Result11 = navigateToShop(7666);
                tmp85Result = tmp85(tmp5Result11, obj20);
              }
              items10 = [tmp85Result, , , , , ];
              const obj21 = { gradientHeight: height, bannerHeight: null, style: tmp10.background };
              class N {
                constructor(contentOffset) {
                  const result = sharedValue.set(contentOffset.contentOffset.y);
                }
              }
              items10[1] = closure_20(navigateToShop(7683), obj21);
              const obj23 = { style: items11, children: items12 };
              items11 = [tmp10.banner, bannerAnimatedStyle];
              let tmp85Result5 = !tmp90Result2;
              const obj22 = { contentContainerStyle, ref, onScroll: animatedScrollHandler, onLayout: callback, scrollEventThrottle, style: tmp10.scrollView, children: items18 };
              const View = tmp5(4566).View;
              const tmp96 = closure_25;
              if (!tmp90Result2) {
                const obj25 = { paddingTop: bound1 };
                tmp85Result5 = tmp85(BackButton, obj25);
              }
              items12 = [tmp85Result5, ];
              const obj26 = { style: items13, children: items15 };
              items13 = [dimensionStyle, bannerImageAnimatedStyle];
              const obj27 = { style: items14 };
              items14 = [sharedValue.absoluteFill, ];
              const obj28 = { backgroundColor: tmp12Result25.int2hex(userProfileBannerBackgroundColor) };
              const View2 = tmp5(4566).View;
              items14[1] = obj28;
              tmp12Result25 = navigateToSettings(1092);
              items15 = [closure_20(bound, obj27), , ];
              let tmp102 = null != source;
              const tmp101 = sharedValue;
              if (tmp102) {
                let tmp85Result7;
                if (isAnimatedImageURLResult) {
                  const obj29 = {
                    onPress() {
                                      return closure_8(!first);
                                    },
                    accessibilityRole: "image",
                    accessibilityLabel: intl2.string(navigateToSettings(1115).t["3fzj/l"]),
                    children: items16
                  };
                  const PressableOpacity = tmp12(5435).PressableOpacity;
                  intl2 = tmp12(1115).intl;
                  const obj30 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp28 };
                  items16 = [closure_20(tmp5(5899), obj30), ];
                  let tmp85Result6 = !tmp32;
                  if (tmp85Result6) {
                    const obj31 = { label: intl3.string(navigateToSettings(1115).t.I5gL2H), style: items17, textStyle: tmp10.gifTagText };
                    const Caption = tmp12(10114).Caption;
                    intl3 = tmp12(1115).intl;
                    items17 = [tmp10.gifTag, ];
                    const obj32 = { top: bound1 };
                    items17[1] = obj32;
                    tmp85Result6 = tmp85(Caption, obj31);
                  }
                  items16[1] = tmp85Result6;
                  tmp85Result7 = tmp90(PressableOpacity, obj29);
                } else {
                  const obj33 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp28 };
                  tmp85Result7 = tmp85(tmp5(5899), obj33);
                }
                tmp102 = tmp85Result7;
              }
              items15[1] = tmp102;
              const tmp12Result26 = navigateToSettings(1365);
              let tmp85Result8 = tmp12Result26.isIOS() && showBlur;
              if (tmp85Result8) {
                const obj34 = { animatedProps: blurAnimatedProps, style: tmp101.absoluteFillObject };
                tmp85Result8 = tmp85(VisualEffectViewThemed, obj34);
              }
              items15[2] = tmp85Result8;
              items12[1] = closure_21(View2, obj26);
              items18 = [closure_21(View, obj23), , , ];
              if (tmp90Result2) {
                const obj35 = { pointerEvents: "box-none", style: items19, children: items20 };
                items19 = [tmp10.profileEffectLayer, , ];
                const size1 = { width: bound, height };
                items19[1] = size1;
                items19[2] = bannerAnimatedStyle;
                const View3 = tmp5(4566).View;
                const obj36 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp28 };
                items20 = [closure_20(tmp5(8264), obj36), ];
                const obj37 = { paddingTop: bound1 };
                items20[1] = closure_20(BackButton, obj37);
                tmp90Result2 = tmp90(View3, obj35);
              }
              items18[1] = tmp90Result2;
              const obj38 = { user, userTheme: tmp15, scrollViewRef: ref, scrollPosition: sharedValue, style: items21, navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, navigateToPremium, navigateToShop, initialTab, animateAvatar: !tmp28 };
              items21 = [tmp10.content, contentAnimatedStyle];
              items18[2] = closure_20(navigateToShop(16619), obj38);
              items18[3] = closure_20(navigateToSettings(11375).TTIFirstContentfulPaint, { label: "you_screen" });
              items10[2] = closure_21(tmp96, obj22);
              let tmp85Result9 = null != tmp5Result1Result;
              if (tmp85Result9) {
                const obj39 = { frame: tmp5Result1Result, profileThemeType: UserProfileThemeTypes.YOU_SCREEN, frameOrder: navigateToSettings(7652).ProfileFrameLayerOrder.FRONT, containerWidth: bound };
                const tmp5Result12 = navigateToShop(7666);
                tmp85Result9 = tmp85(tmp5Result12, obj39);
              }
              items10[3] = tmp85Result9;
              items10[4] = tmp86;
              items10[5] = tmp75Result;
              const obj40 = { children: closure_20(ThemeContextProvider, obj17) };
              return closure_20(LayerScope2, obj40);
            }
          }
        }
      }
      items5 = [];
    }
    bound1 = youSettingsCoachmark;
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire, ScrollView } = react_native);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: map1, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = YouConstants);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_17 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = createStyles_mod;
let closure_23 = createStyles.createStyles((minHeight) => {
  let alphaResult;
  let obj4;
  let obj5;
  let obj6;
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
  const obj3 = { container: obj4, background: obj5, scrollView: obj6, profileEffectLayer: { position: "absolute", top: 0, zIndex: 1 }, banner: { minHeight, position: "absolute", top: 0, maxWidth: "100%" }, gifTag: rect, gifTagText: { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 }, content: { marginTop: minHeight, flex: 1, flexGrow: 1 } };
  obj4 = { flex: 1, flexGrow: 1, position: "relative" };
  const merged = Object.assign(obj2);
  obj5 = { overflow: "hidden" };
  const merged1 = Object.assign(obj2);
  obj6 = { flex: 1 };
  const merged2 = Object.assign(obj2);
  rect = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8, backgroundColor: alphaResult.css() };
  const tmp10 = _modDef672;
  const tmp10Result = tmp10(nativeDefault.unsafe_rawColors.WHITE);
  alphaResult = tmp10Result.alpha(0.9);
  ({ color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 });
  return obj3;
});
createStyles = createStyles_mod;
let closure_24 = createStyles.createStyles(() => {
  const obj = { backButton: { position: "absolute", marginTop: nativeDefault.space.PX_4, left: nativeDefault.space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" } };
  ({ position: "absolute", marginTop: nativeDefault.space.PX_4, left: nativeDefault.space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" });
  return obj;
});
ReanimatedRexport = ReanimatedRexport_mod;
let closure_25 = ReanimatedRexport.createAnimatedComponent(ScrollView);
const __initData = { code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let constants2;
  let currentUser;
  let locale;
  let state;
  let stateFromStores;
  let memo;
  let navigateToSettings;
  let tmp = stateFromStores;
  let tmp2 = memo;
  initialTab = initialTab.initialTab;
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
  const tmpResult3 = tmp(tmp2[67]);
  const fetchWishlist = tmpResult3.useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  navigateToSettings = react.useCallback(() => {
    state.setState({ query: "", isActive: false });
    const obj = stateFromStores(memo[68]);
    obj.openUserSettings();
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = stateFromStores(memo[68]);
    const obj2 = { screen: constants.PREMIUM };
    obj.openUserSettings(obj2);
  }, []);
  const callback2 = react.useCallback(() => {
    let items;
    const tmp = stateFromStores(memo[69]);
    const openCollectiblesShopMobile = tmp.openCollectiblesShopMobile;
    const obj = { analyticsSource: id(memo[46]).YOU_SCREEN, analyticsLocations: items, screen: constants2.FEATURED_PAGE };
    items = [id(memo[46]).YOU_SCREEN];
    const result = openCollectiblesShopMobile(obj);
  }, []);
  const callback3 = react.useCallback((autoFocusElement) => {
    let obj3;
    const obj2 = { screen: constants.PROFILE_CUSTOMIZATION, params: obj3 };
    obj3 = { autoFocusElement };
    const obj = stateFromStores(memo[68]);
    obj.openUserSettings(obj2);
  }, []);
  const callback4 = react.useCallback(() => {
    let items;
    const obj = { analyticsLocations: items };
    const openEditCustomStatusModal = stateFromStores(memo[70]).openEditCustomStatusModal;
    items = [];
    stateFromStores(memo[70]);
    items[0] = id(memo[46]).YOU_SCREEN;
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
    const obj = stateFromStores(memo[71]);
    return obj.trackAppUIViewed();
  }, []);
  let obj3 = {
    scrollToTop() {
      callback();
    }
  };
  const tmpResult4 = tmp(tmp2[36]);
  const scrollToTop = tmpResult4.useScrollToTop(react.useRef(obj3));
  let tmp18 = null;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, navigateToSettings, navigateToPremium: callback1, navigateToProfileCustomization: callback3, navigateToCustomStatus: callback4, navigateToFriends: callback5, navigateToShop: callback2, initialTab };
    tmp18 = closure_20(UnconnectedYouScreen, obj4);
  }
  return tmp18;
};
