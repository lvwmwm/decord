// Module ID: 15471
// Function ID: 119093
// Name: handleBackButtonPress
// Dependencies: [57, 31, 27, 6856, 1921, 13552, 6879, 1849, 15101, 653, 655, 1345, 5512, 33, 3991, 8511, 4130, 478, 689, 666, 3982, 624, 1212, 4660, 15130, 8500, 8559, 480, 7887, 1557, 8236, 4066, 8509, 3984, 1450, 3803, 1457, 15472, 1392, 7883, 8133, 15473, 8266, 4663, 8241, 8499, 5484, 8255, 1334, 5802, 5085, 15474, 5449, 15477, 15478, 3842, 15486, 8256, 8247, 8506, 665, 8262, 8218, 15488, 10025, 7888, 8676, 5796, 6773, 11899, 6707, 2]
// Exports: default

// Module 15471 (handleBackButtonPress)
import ProfileFrameLayer from "ProfileFrameLayer";
import useTheme from "useTheme";
import get_ActivityIndicator from "isThrottled";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import YOU_SCREEN_ID from "YOU_SCREEN_ID";
import { UserSettingsSections } from "ME";
import { CollectiblesMobileShopScreen as closure_17 } from "items";
import { ContentDismissActionType } from "ContentDismissActionType";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "useChatLayout";
import module_8511 from "module_8511";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";
import importDefaultResult1 from "module_3991";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_20;
let closure_21;
let closure_5;
let closure_6;
const require = arg1;
function handleBackButtonPress() {
  const navigation = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function BackButton(paddingTop) {
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.vxFYaM, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  }
  obj = { style: items1, accessibilityRole: "button" };
  items1 = [callback4().backButton, { top: paddingTop.paddingTop }];
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.onPress = handleBackButtonPress;
  obj.children = callback2(require(15130) /* IconWithBadge */.CloseIconWithBadgeOnSide, { count: stateFromStores });
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
}
function UnconnectedYouScreen(arg0) {
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let contentAnimatedStyle;
  let initialTab;
  let navigateToCustomStatus;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let navigateToSettings;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let showBlur;
  let theme;
  let user;
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  let callback;
  let rect;
  let sharedValue;
  let bound;
  let first1;
  let closure_8;
  let num12;
  let c10;
  let c11;
  let youSettingsCoachmark;
  let c13;
  let closure_14;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  let merged = callback(rect.useState(0), 2);
  const first = 57;
  const dependencyMap = 31;
  callback = rect.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp5;
  if (first > 0) {
    tmp5 = first;
  }
  const tmp4Result = navigateToShop(8500)(tmp5);
  callback = tmp4Result;
  const tmp7 = callback3(tmp4Result);
  let obj = {};
  const tmp4 = navigateToShop(8500);
  obj.type = navigateToSettings(480).ImpressionTypes.VIEW;
  obj.name = navigateToSettings(480).ImpressionNames.USER_YOU_SCREEN;
  navigateToShop(8559)(obj);
  let obj1 = navigateToShop(7887)(user.id);
  rect = navigateToShop(1557)();
  const tmp8 = navigateToShop(8559);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(8236)({ user, displayProfile: obj1 }));
  const tmp10 = navigateToShop(8236)({ user, displayProfile: obj1 });
  const ref = rect.useRef(null);
  let obj2 = navigateToSettings(3991);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = navigateToSettings(3991);
  class M {
    constructor(arg0) {
      result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
      return;
    }
  }
  M.__closure = { scrollPosition: sharedValue };
  M.__workletHash = 952837799380;
  M.__initData = closure_26;
  const tmp11 = navigateToShop(4066)();
  const tmp15 = navigateToShop(8509)({ scrollPosition: sharedValue, bannerHeight: tmp4Result });
  const bannerAnimatedStyle = tmp15.bannerAnimatedStyle;
  ({ bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp15);
  const size = navigateToShop(1450)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(3984)().isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (first > 0) {
    const _Math = Math;
    bound = Math.min(diff1, first);
  }
  const tmp20 = callback(rect.useState(false), 2);
  first1 = tmp20[0];
  closure_8 = tmp20[1];
  const GifAutoPlay = navigateToSettings(3803).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  let obj4 = navigateToSettings(1457);
  const isFocused = obj4.useIsFocused();
  let obj5 = navigateToSettings(15472);
  const tmp24 = !isFocused && !obj5.useIsProfileModalTransitioning();
  const animatedScrollHandler = obj3.useAnimatedScrollHandler(M);
  const ref2 = rect.useRef(undefined);
  const ref3 = rect.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let tmp28 = setting;
    if (!setting) {
      tmp28 = first1;
    }
    let bannerURL;
    if (null != obj1) {
      obj = { canAnimate: tmp28, size: bound };
      bannerURL = obj1.getBannerURL(obj);
    }
    let source = null;
    if (null != bannerURL) {
      let obj7 = navigateToSettings(1392);
      source = obj7.makeSource(bannerURL);
    }
    let obj8 = navigateToSettings(1392);
    let intl = navigateToSettings(1212).intl;
    obj = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(navigateToSettings(1212).t.gVn4uJ, obj);
    let obj10 = navigateToSettings(7883);
    obj1 = { user };
    obj1.displayProfile = obj1;
    let tmp38 = null == obj1;
    const userProfileBannerBackgroundColor = obj10.useUserProfileBannerBackgroundColor(obj1);
    if (!tmp38) {
      tmp38 = !obj1.isLoaded;
    }
    let items = [tmp4Result, bound, rect.bottom];
    const isAnimatedImageURLResult = obj8.isAnimatedImageURL(bannerURL);
    const memo = rect.useMemo(() => {
      obj = { dimensionStyle: obj };
      obj = { width: bound, height: c3 };
      obj = {};
      let num = 0;
      if (obj4.isYouNavFloating()) {
        num = navigateToShop(689).space.PX_64;
      }
      obj.paddingBottom = rect.bottom + num;
      obj.contentContainerStyle = obj;
      return obj;
    }, items);
    let intl2 = memo.dimensionStyle;
    let obj12 = navigateToSettings(8266);
    obj2 = { layout: "YOU_SCREEN", userId: user.id };
    const createUserProfileAnalyticsContext = obj12.useCreateUserProfileAnalyticsContext(obj2);
    let obj14 = navigateToSettings(4663);
    const isScreenLandscape = obj14.useIsScreenLandscape();
    let skuId;
    const tmp41 = navigateToShop(8133)();
    if (!isScreenLandscape) {
      if (null != obj1) {
        const profileFrame = obj1.profileFrame;
        if (null != profileFrame) {
          skuId = profileFrame.skuId;
        }
      }
    }
    const tmp47Result = navigateToShop(8241)(skuId, "YouScreen");
    obj3 = {};
    let skuId1;
    const tmp47 = navigateToShop(8241);
    if (!isScreenLandscape) {
      if (null != obj1) {
        const profileFrame2 = obj1.profileFrame;
        if (null != profileFrame2) {
          skuId1 = profileFrame2.skuId;
        }
      }
    }
    obj3.skuId = skuId1;
    obj3.openedAt = ref2.current;
    const items1 = [navigateToShop(5484).YOU_SCREEN];
    obj3.analyticsLocations = items1;
    obj3.context = createUserProfileAnalyticsContext;
    navigateToShop(8499)(obj3);
    num12 = 0;
    if (null != tmp47Result) {
      num12 = navigateToShop(8255)(tmp47Result, bound).overflowTop;
    }
    const items2 = [];
    class M {
      constructor(arg0) {
        result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
        return;
      }
    }
    if (!tmp41) {
      let obj16 = navigateToSettings(478);
      if (!obj16.isIOS()) {
        const _Math2 = Math;
        let bound1 = Math.max(rect.top - num12, youSettingsCoachmark);
      }
      let skuId2;
      if (null != obj1) {
        const profileEffect = obj1.profileEffect;
        if (null != profileEffect) {
          skuId2 = profileEffect.skuId;
        }
      }
      let mergedResult = null != skuId2;
      const memo1 = rect.useMemo(() => {
        const items = [navigateToSettings(1334).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      let obj17 = navigateToSettings(5802);
      const tmp72 = callback(obj17.useSelectedDismissibleContent(memo1), 2);
      c10 = tmp74;
      const items3 = [null != tmp72[0]];
      const memo2 = rect.useMemo(() => {
        let tmp = null;
        if (c10) {
          const obj = {};
          const intl = navigateToSettings(1212).intl;
          obj.title = intl.string(navigateToSettings(1212).t.epBu6F);
          const intl2 = navigateToSettings(1212).intl;
          obj.description = intl2.string(navigateToSettings(1212).t["o8+3AX"]);
          obj.avatarSrc = {};
          obj.decorationAsset = "";
          obj.renderImgComponent = function renderImgComponent() {
            return outer2_20(navigateToShop(table[50]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: { width: 80, height: 80 } });
          };
          tmp = obj;
        }
        return tmp;
      }, items3);
      const ref4 = rect.useRef(null);
      const ref5 = rect.useRef(null);
      c11 = tmp73;
      const items4 = [tmp72[1], navigateToShop];
      const callback1 = rect.useCallback(() => {
        navigateToShop();
        _undefined(outer1_18.TAKE_ACTION);
      }, items4);
      let tmp83 = null != memo2;
      let obj18 = navigateToSettings(15474);
      obj4 = { disabled: tmp83 };
      youSettingsCoachmark = obj18.useYouSettingsCoachmark(obj4);
      let tmp85 = null != youSettingsCoachmark;
      let tmp86 = tmp83;
      if (!tmp83) {
        tmp86 = tmp85;
      }
      c13 = tmp86;
      let obj20 = navigateToSettings(15473);
      closure_14 = callback(rect.useState(!obj20.isYouNavFloating()), 2)[1];
      let tmp94Result = null;
      if (tmp86) {
        tmp94Result = null;
        if (tmp92) {
          obj5 = { zIndex: 1 };
          if (tmp83) {
            const obj6 = { buttonRef: ref4, markAsDismissed: tmp73, visible: tmp74 };
            ({ title: obj23.title, description: obj23.description, avatarSrc: obj23.avatarSrc, decorationAsset: obj23.decorationAsset, renderImgComponent: obj23.renderImgComponent } = memo2);
            obj6.navigateToShop = callback1;
            tmp83 = callback2(navigateToShop(15477), obj6);
          }
          const items5 = [tmp83, ];
          if (tmp85) {
            merged = callback2;
            merged = navigateToShop;
            merged = dependencyMap;
            obj7 = { buttonRef: ref5 };
            merged = obj7;
            merged = navigateToShop(15474);
            merged = Object.assign(youSettingsCoachmark.props);
            tmp85 = callback2(merged, obj7);
          }
          items5[1] = tmp85;
          obj5.children = items5;
          tmp94Result = closure_21(navigateToSettings(5449).LayerScope, obj5);
          const tmp94 = closure_21;
        }
      }
      merged = rect;
      const items6 = [tmp86];
      merged = rect.useEffect(() => {
        if (c13) {
          if (obj.isYouNavFloating()) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => outer1_14(true), 500);
            return () => clearTimeout(closure_0);
          }
          obj = navigateToSettings(15473);
        }
      }, items6);
      merged = rect;
      const items7 = [navigateToSettings, youSettingsCoachmark];
      merged = navigateToShop;
      merged = dependencyMap;
      merged = rect.useCallback(() => {
        let tmp = null == youSettingsCoachmark;
        if (!tmp) {
          tmp = null == youSettingsCoachmark.trackSettingsPress;
        }
        if (!tmp) {
          youSettingsCoachmark.trackSettingsPress();
        }
        navigateToSettings();
      }, items7);
      merged = callback2;
      obj8 = { isLoading: tmp38, navigateToPremium, navigateToSettings: merged, navigateToShop: callback1, shopButtonRef: ref4, settingsButtonRef: ref5, paddingTop: bound1 };
      merged = navigateToSettings;
      class M {
        constructor(arg0) {
          result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
          return;
        }
      }
      let obj25 = navigateToSettings(15473);
      merged = undefined;
      if (obj25.isYouNavFloating()) {
        merged = rect.bottom;
      }
      obj8.paddingBottom = merged;
      merged = callback2;
      merged = BackButton;
      const obj9 = { paddingTop: bound1 };
      obj8.backButton = callback2(BackButton, obj9);
      merged = merged(merged, obj8);
      merged = navigateToSettings;
      merged = dependencyMap;
      merged = callback2;
      obj10 = {};
      merged = callback2;
      const obj11 = { theme, primaryColor, secondaryColor };
      merged = callback2;
      obj12 = { value: createUserProfileAnalyticsContext, openedAt: ref1.current };
      merged = undefined;
      if (null != obj1) {
        merged = obj1.fetchStartedAt;
      }
      obj12.fetchStartedAt = merged;
      merged = undefined;
      if (null != obj1) {
        merged = obj1.fetchEndedAt;
      }
      obj12.fetchEndedAt = merged;
      merged = undefined;
      if (null != obj1) {
        merged = obj1.isLoaded;
      }
      obj12.isLoaded = merged;
      merged = navigateToShop;
      merged = dependencyMap;
      merged = closure_21;
      const obj13 = {};
      const items8 = [tmp7.container, tmp60];
      obj13.style = items8;
      merged = closure_14;
      obj13.nativeID = closure_14;
      merged = null != tmp47Result;
      merged = navigateToShop(15486);
      if (merged) {
        merged = callback2;
        merged = navigateToShop;
        merged = dependencyMap;
        obj14 = { frame: tmp47Result };
        merged = UserProfileThemeTypes;
        obj14.profileThemeType = UserProfileThemeTypes.YOU_SCREEN;
        merged = navigateToSettings;
        merged = navigateToShop(8256);
        obj14.frameOrder = navigateToSettings(8247).ProfileFrameLayerOrder.BACK;
        obj14.containerWidth = bound;
        merged = callback2(merged, obj14);
      }
      const items9 = [merged, , , , , , ];
      merged = callback2;
      merged = navigateToShop;
      merged = dependencyMap;
      const obj15 = { gradientHeight: height, bannerHeight: tmp4Result, style: tmp7.background };
      items9[1] = callback2(navigateToShop(8506), obj15);
      merged = navigateToSettings;
      let obj33 = navigateToSettings(15473);
      merged = !obj33.isYouNavFloating() && tmp94Result;
      items9[2] = merged;
      obj16 = { contentContainerStyle: memo.contentContainerStyle, ref, onScroll: animatedScrollHandler, onLayout: callback };
      merged = closure_15;
      obj16.scrollEventThrottle = closure_15;
      obj16.style = tmp7.scrollView;
      merged = navigateToShop;
      merged = dependencyMap;
      merged = closure_21;
      merged = closure_25;
      merged = closure_21;
      obj17 = {};
      const items10 = [tmp7.banner, bannerAnimatedStyle];
      obj17.style = items10;
      merged = !mergedResult;
      if (!mergedResult) {
        merged = navigateToSettings;
        merged = dependencyMap;
        if (obj37.isYouNavFloating()) {
          merged = callback2;
          merged = BackButton;
          obj18 = { paddingTop: bound1 };
          merged = callback2(BackButton, obj18);
        }
        obj37 = navigateToSettings(15473);
      }
      const items11 = [merged, ];
      merged = navigateToShop;
      merged = dependencyMap;
      merged = closure_21;
      const obj19 = {};
      const items12 = [intl2, bannerImageAnimatedStyle];
      obj19.style = items12;
      merged = callback2;
      merged = bound;
      obj20 = {};
      merged = sharedValue;
      const items13 = [sharedValue.absoluteFill, ];
      const obj21 = {};
      merged = navigateToSettings;
      const tmp91 = callback(rect.useState(!obj20.isYouNavFloating()), 2);
      obj21.backgroundColor = navigateToSettings(665).int2hex(userProfileBannerBackgroundColor);
      items13[1] = obj21;
      obj20.style = items13;
      const items14 = [callback2(bound, obj20), , ];
      merged = null != source;
      if (!merged) {
        items14[1] = merged;
        merged = navigateToSettings;
        merged = dependencyMap;
        merged = navigateToSettings(478).isIOS() && showBlur;
        if (merged) {
          merged = callback2;
          merged = module_8511;
          const obj22 = { animatedProps: blurAnimatedProps };
          merged = sharedValue;
          obj22.style = sharedValue.absoluteFillObject;
          merged = callback2(module_8511, obj22);
        }
        items14[2] = merged;
        obj19.children = items14;
        items11[1] = merged(navigateToShop(3991).View, obj19);
        obj17.children = items11;
        const items15 = [merged(navigateToShop(3991).View, obj17), , , ];
        if (mergedResult) {
          merged = navigateToShop;
          merged = dependencyMap;
          merged = closure_21;
          const obj23 = { pointerEvents: "box-none" };
          const items16 = [tmp7.profileEffectLayer, , ];
          const obj24 = { width: bound, height };
          items16[1] = obj24;
          items16[2] = bannerAnimatedStyle;
          obj23.style = items16;
          merged = callback2;
          obj25 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp24 };
          const items17 = [callback2(navigateToShop(8218), obj25), ];
          merged = navigateToSettings;
          if (obj53.isYouNavFloating()) {
            merged = callback2;
            merged = BackButton;
            const obj26 = { paddingTop: bound1 };
            merged = callback2(BackButton, obj26);
          }
          items17[1] = merged;
          obj23.children = items17;
          mergedResult = merged(navigateToShop(3991).View, obj23);
          obj53 = navigateToSettings(15473);
        }
        items15[1] = mergedResult;
        merged = callback2;
        merged = navigateToShop;
        merged = dependencyMap;
        const obj27 = { user, userTheme: tmp11, scrollViewRef: ref };
        const items18 = [tmp7.content, contentAnimatedStyle];
        obj27.style = items18;
        obj27.navigateToProfileCustomization = navigateToProfileCustomization;
        obj27.navigateToCustomStatus = navigateToCustomStatus;
        obj27.navigateToFriends = navigateToFriends;
        obj27.navigateToPremium = navigateToPremium;
        obj27.navigateToShop = navigateToShop;
        obj27.initialTab = initialTab;
        obj27.animateAvatar = !tmp24;
        items15[2] = callback2(navigateToShop(15488), obj27);
        merged = callback2;
        merged = navigateToSettings;
        const obj28 = { label: "you_screen" };
        items15[3] = callback2(navigateToSettings(10025).TTIFirstContentfulPaint, obj28);
        obj16.children = items15;
        items9[3] = merged(merged, obj16);
        merged = null != tmp47Result;
        if (merged) {
          merged = callback2;
          merged = navigateToShop;
          merged = dependencyMap;
          const obj29 = { frame: tmp47Result };
          merged = UserProfileThemeTypes;
          obj29.profileThemeType = UserProfileThemeTypes.YOU_SCREEN;
          merged = navigateToSettings;
          merged = navigateToShop(8256);
          obj29.frameOrder = navigateToSettings(8247).ProfileFrameLayerOrder.FRONT;
          obj29.containerWidth = bound;
          merged = callback2(merged, obj29);
        }
        items9[4] = merged;
        merged = navigateToSettings;
        merged = dependencyMap;
        const obj48 = navigateToSettings(478);
        merged = navigateToSettings(15473).isYouNavFloating() && merged;
        items9[5] = merged;
        merged = navigateToSettings;
        merged = dependencyMap;
        const obj58 = navigateToSettings(15473);
        merged = navigateToSettings(15473).isYouNavFloating() && tmp94Result;
        items9[6] = merged;
        obj13.children = items9;
        obj12.children = merged(merged, obj13);
        obj11.children = merged(navigateToSettings(8266).UserProfileAnalyticsProvider, obj12);
        obj10.children = merged(navigateToSettings(3842).ThemeContextProvider, obj11);
        return merged(navigateToSettings(5449).LayerScope, obj10);
      } else if (isAnimatedImageURLResult) {
        merged = navigateToSettings;
        merged = dependencyMap;
        merged = closure_21;
        const obj30 = {
          onPress() {
                  return callback(!first1);
                },
          accessibilityRole: "image"
        };
        const intl3 = navigateToSettings(1212).intl;
        obj30.accessibilityLabel = intl3.string(navigateToSettings(1212).t["3fzj/l"]);
        merged = callback2;
        merged = navigateToShop;
        const obj31 = { style: intl2, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp24 };
        const items19 = [callback2(navigateToShop(5085), obj31), ];
        tmp28 = !tmp28;
        if (tmp28) {
          source = callback2;
          merged = navigateToSettings;
          merged = dependencyMap;
          const obj32 = {};
          intl2 = navigateToSettings(1212).intl;
          obj32.label = intl2.string(navigateToSettings(1212).t.I5gL2H);
          const items20 = [tmp7.gifTag, ];
          obj33 = { top: bound1 };
          items20[1] = obj33;
          obj32.style = items20;
          obj32.textStyle = tmp7.gifTagText;
          tmp28 = callback2(navigateToSettings(8262).Caption, obj32);
        }
        items19[1] = tmp28;
        obj30.children = items19;
        merged = merged(navigateToSettings(4660).PressableOpacity, obj30);
      } else {
        merged = callback2;
        merged = navigateToShop;
        merged = dependencyMap;
        const obj34 = { style: intl2, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp24 };
        merged = callback2(navigateToShop(5085), obj34);
      }
      const obj42 = navigateToSettings(665);
    }
    bound1 = youSettingsCoachmark;
    const tmp52 = navigateToShop(8499);
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: closure_13, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = YOU_SCREEN_ID);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let closure_23 = _createForOfIteratorHelperLoose.createStyles((minHeight) => {
  let obj = {};
  let obj1 = require(478) /* isWindows */;
  let xl;
  if (obj1.isIOS()) {
    xl = importDefault(689).radii.xl;
  }
  obj.borderTopLeftRadius = xl;
  let obj2 = require(478) /* isWindows */;
  let xl1;
  if (obj2.isIOS()) {
    xl1 = importDefault(689).radii.xl;
  }
  obj.borderTopRightRadius = xl1;
  obj = {};
  obj = { flex: 1, flexGrow: 1, position: "relative" };
  const merged = Object.assign(obj);
  obj.container = obj;
  obj1 = { overflow: "hidden" };
  const merged1 = Object.assign(obj);
  obj.background = obj1;
  obj2 = { flex: 1 };
  const merged2 = Object.assign(obj);
  obj.scrollView = obj2;
  obj.profileEffectLayer = { position: "absolute", top: 0, zIndex: 1 };
  const obj3 = { minHeight, position: "absolute", top: 0, maxWidth: "100%" };
  obj.banner = obj3;
  const obj4 = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8 };
  const tmp10 = importDefault(666);
  const tmp10Result = importDefault(666)(importDefault(689).unsafe_rawColors.WHITE);
  obj4.backgroundColor = importDefault(666)(importDefault(689).unsafe_rawColors.WHITE).alpha(0.9).css();
  obj.gifTag = obj4;
  const alphaResult = importDefault(666)(importDefault(689).unsafe_rawColors.WHITE).alpha(0.9);
  obj.gifTagText = { color: importDefault(689).unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  const obj6 = { marginTop: minHeight, flex: 1, flexGrow: 1 };
  obj.content = obj6;
  return obj;
});
let closure_24 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { position: "absolute", marginTop: importDefault(689).space.PX_4, left: importDefault(689).space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" };
  obj.backButton = obj;
  return obj;
});
let closure_25 = require("module_3991").createAnimatedComponent(get_ActivityIndicator.ScrollView);
let closure_26 = { code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let id;
  let memo;
  let callback;
  let obj = stateFromStores(memo[21]);
  let items = [closure_11];
  stateFromStores = obj.useStateFromStores(items, () => outer1_11.getCurrentUser());
  let obj1 = stateFromStores(memo[21]);
  const items1 = [closure_8];
  id = undefined;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_8.locale);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const items2 = [stateFromStores];
  memo = React.useMemo(() => {
    let avatarURL;
    if (null != stateFromStores) {
      avatarURL = stateFromStores.getAvatarURL(null, outer1_13);
    }
    return avatarURL;
  }, items2);
  const items3 = [id, memo, stateFromStores1];
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp = null != id;
    if (tmp) {
      tmp = null != memo;
    }
    if (tmp) {
      const obj = { type: "you_screen" };
      id(memo[65])(id, memo, obj);
    }
  }, items3);
  const items4 = [_isNativeReflectConstruct];
  const stateFromStores2 = stateFromStores(memo[21]).useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = outer1_7.getFirstWishlistId(id);
    }
    return firstWishlistId;
  });
  const obj3 = stateFromStores(memo[21]);
  obj = { wishlistId: stateFromStores2, userId: id };
  const fetchWishlist = stateFromStores(memo[66]).useFetchWishlist(obj);
  callback = React.useCallback(() => {
    outer1_9.setState({ query: "", isActive: false });
    stateFromStores(memo[67]).openUserSettings();
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo[67]);
    obj = { screen: outer1_16.PREMIUM };
    obj.openUserSettings(obj);
  }, []);
  const callback2 = React.useCallback(() => {
    let obj = stateFromStores(memo[68]);
    obj = { analyticsSource: id(memo[46]).YOU_SCREEN };
    const items = [id(memo[46]).YOU_SCREEN];
    obj.analyticsLocations = items;
    obj.screen = outer1_17.FEATURED_PAGE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  const callback3 = React.useCallback((autoFocusElement) => {
    let obj = stateFromStores(memo[67]);
    obj = { screen: outer1_16.PROFILE_CUSTOMIZATION, params: obj };
    obj = { autoFocusElement };
    obj.openUserSettings(obj);
  }, []);
  const callback4 = React.useCallback(() => {
    let obj = stateFromStores(memo[69]);
    obj = {};
    const items = [id(memo[46]).YOU_SCREEN];
    obj.analyticsLocations = items;
    const result = obj.openEditCustomStatusModal(obj);
  }, []);
  const callback5 = React.useCallback(() => {
    const rootNavigationRef = stateFromStores(memo[20]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        rootNavigationRef.navigate("friends");
      }
    }
    return false;
  }, []);
  const layoutEffect1 = React.useLayoutEffect(() => stateFromStores(memo[70]).trackAppUIViewed(), []);
  const obj4 = stateFromStores(memo[66]);
  obj = {
    scrollToTop() {
      callback();
    }
  };
  const scrollToTop = stateFromStores(memo[36]).useScrollToTop(React.useRef(obj));
  let tmp16 = null;
  if (null != stateFromStores) {
    obj1 = { user: stateFromStores, navigateToSettings: callback, navigateToPremium: callback1, navigateToProfileCustomization: callback3, navigateToCustomStatus: callback4, navigateToFriends: callback5, navigateToShop: callback2, initialTab: initialTab.initialTab };
    tmp16 = callback2(UnconnectedYouScreen, obj1);
  }
  return tmp16;
};
