// Module ID: 15346
// Function ID: 116876
// Name: handleBackButtonPress
// Dependencies: []
// Exports: default

// Module 15346 (handleBackButtonPress)
function handleBackButtonPress() {
  const navigation = arg1(dependencyMap[20]).getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function BackButton(paddingTop) {
  let obj = arg1(dependencyMap[21]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = arg1(dependencyMap[22]).intl;
    obj = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[22]).t.vxFYaM, obj);
  } else {
    const intl = arg1(dependencyMap[22]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[22]).t.13/7kX);
  }
  obj = { style: items1, accessibilityRole: "button" };
  const items1 = [callback4().backButton, { top: paddingTop.paddingTop }];
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.onPress = handleBackButtonPress;
  obj.children = callback2(arg1(dependencyMap[24]).CloseIconWithBadgeOnSide, { count: stateFromStores });
  return callback2(arg1(dependencyMap[23]).PressableOpacity, obj);
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
  const arg1 = navigateToSettings;
  ({ navigateToPremium, navigateToShop } = arg0);
  const importDefault = navigateToShop;
  let callback;
  let React;
  let sharedValue;
  let bound;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let youSettingsCoachmark;
  let tmp86;
  let closure_14;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  let merged = callback(React.useState(0), 2);
  const first = merged[0];
  let closure_2 = merged[1];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp5;
  if (first > 0) {
    tmp5 = first;
  }
  const tmp4Result = importDefault(closure_2[25])(tmp5);
  callback = tmp4Result;
  const tmp7 = callback3(tmp4Result);
  let obj = {};
  const tmp4 = importDefault(closure_2[25]);
  obj.type = arg1(closure_2[27]).ImpressionTypes.VIEW;
  obj.name = arg1(closure_2[27]).ImpressionNames.USER_YOU_SCREEN;
  importDefault(closure_2[26])(obj);
  let obj1 = importDefault(closure_2[28])(user.id);
  const rect = importDefault(closure_2[29])();
  React = rect;
  const tmp8 = importDefault(closure_2[26]);
  ({ theme, primaryColor, secondaryColor } = importDefault(closure_2[30])({ user, displayProfile: obj1 }));
  const tmp10 = importDefault(closure_2[30])({ user, displayProfile: obj1 });
  const ref = React.useRef(null);
  let obj2 = arg1(closure_2[14]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = arg1(closure_2[14]);
  class M {
    constructor(arg0) {
      result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
      return;
    }
  }
  M.__closure = { scrollPosition: sharedValue };
  M.__workletHash = 952837799380;
  M.__initData = closure_26;
  const tmp11 = importDefault(closure_2[31])();
  const tmp15 = importDefault(closure_2[32])({ scrollPosition: sharedValue, bannerHeight: tmp4Result });
  const bannerAnimatedStyle = tmp15.bannerAnimatedStyle;
  ({ bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp15);
  const size = importDefault(closure_2[34])();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (importDefault(closure_2[33])().isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (first > 0) {
    const _Math = Math;
    bound = Math.min(diff1, first);
  }
  const tmp20 = callback(React.useState(false), 2);
  const first1 = tmp20[0];
  closure_7 = first1;
  closure_8 = tmp20[1];
  const GifAutoPlay = arg1(closure_2[35]).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  let obj4 = arg1(closure_2[36]);
  const isFocused = obj4.useIsFocused();
  let obj5 = arg1(closure_2[37]);
  const tmp24 = !isFocused && !obj5.useIsProfileModalTransitioning();
  const animatedScrollHandler = obj3.useAnimatedScrollHandler(M);
  const ref2 = React.useRef(undefined);
  const ref3 = React.useRef(false);
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
      let obj7 = arg1(closure_2[38]);
      source = obj7.makeSource(bannerURL);
    }
    let obj8 = arg1(closure_2[38]);
    const intl = arg1(closure_2[22]).intl;
    obj = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(arg1(closure_2[22]).t.gVn4uJ, obj);
    let obj10 = arg1(closure_2[39]);
    obj1 = { user };
    obj1.displayProfile = obj1;
    let tmp38 = null == obj1;
    const userProfileBannerBackgroundColor = obj10.useUserProfileBannerBackgroundColor(obj1);
    if (!tmp38) {
      tmp38 = !obj1.isLoaded;
    }
    const items = [tmp4Result, bound, rect.bottom];
    const isAnimatedImageURLResult = obj8.isAnimatedImageURL(bannerURL);
    const memo = React.useMemo(() => {
      let obj = { dimensionStyle: obj };
      obj = { width: bound, height: tmp4Result };
      obj = {};
      let num = 0;
      if (obj4.isYouNavFloating()) {
        num = navigateToShop(closure_2[18]).space.PX_64;
      }
      obj.paddingBottom = rect.bottom + num;
      obj.contentContainerStyle = obj;
      return obj;
    }, items);
    let intl2 = memo.dimensionStyle;
    let obj12 = arg1(closure_2[42]);
    obj2 = { layout: "YOU_SCREEN", userId: user.id };
    const createUserProfileAnalyticsContext = obj12.useCreateUserProfileAnalyticsContext(obj2);
    let obj14 = arg1(closure_2[43]);
    const isScreenLandscape = obj14.useIsScreenLandscape();
    let skuId;
    const tmp41 = importDefault(closure_2[40])();
    if (!isScreenLandscape) {
      if (null != obj1) {
        const profileFrame = obj1.profileFrame;
        if (null != profileFrame) {
          skuId = profileFrame.skuId;
        }
      }
    }
    const tmp47Result = importDefault(closure_2[44])(skuId, "YouScreen");
    obj3 = {};
    let skuId1;
    const tmp47 = importDefault(closure_2[44]);
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
    const items1 = [importDefault(closure_2[46]).YOU_SCREEN];
    obj3.analyticsLocations = items1;
    obj3.context = createUserProfileAnalyticsContext;
    importDefault(closure_2[45])(obj3);
    let num12 = 0;
    if (null != tmp47Result) {
      num12 = importDefault(closure_2[47])(tmp47Result, bound).overflowTop;
    }
    closure_9 = num12;
    const items2 = [];
    class M {
      constructor(arg0) {
        result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
        return;
      }
    }
    if (!tmp41) {
      let obj16 = arg1(closure_2[17]);
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
      const memo1 = React.useMemo(() => {
        const items = [navigateToSettings(closure_2[48]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      let obj17 = arg1(closure_2[49]);
      const tmp72 = callback(obj17.useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp74;
      const items3 = [null != tmp72[0]];
      const memo2 = React.useMemo(() => {
        let tmp = null;
        if (tmp74) {
          const obj = {};
          const intl = navigateToSettings(closure_2[22]).intl;
          obj.title = intl.string(navigateToSettings(closure_2[22]).t.epBu6F);
          const intl2 = navigateToSettings(closure_2[22]).intl;
          obj.description = intl2.string(navigateToSettings(closure_2[22]).t.o8+3AX);
          obj.avatarSrc = {};
          obj.decorationAsset = "";
          obj.renderImgComponent = function renderImgComponent() {
            return callback2(callback(closure_2[50]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: {} });
          };
          tmp = obj;
        }
        return tmp;
      }, items3);
      const ref4 = React.useRef(null);
      const ref5 = React.useRef(null);
      closure_11 = tmp73;
      const items4 = [tmp72[1], navigateToShop];
      const callback1 = React.useCallback(() => {
        navigateToShop();
        tmp73(constants.TAKE_ACTION);
      }, items4);
      let tmp83 = null != memo2;
      let obj18 = arg1(closure_2[51]);
      obj4 = { disabled: tmp83 };
      youSettingsCoachmark = obj18.useYouSettingsCoachmark(obj4);
      let tmp85 = null != youSettingsCoachmark;
      tmp86 = tmp83;
      if (!tmp83) {
        tmp86 = tmp85;
      }
      let obj20 = arg1(closure_2[41]);
      closure_14 = callback(React.useState(!obj20.isYouNavFloating()), 2)[1];
      let tmp94Result = null;
      if (tmp86) {
        tmp94Result = null;
        if (tmp92) {
          obj5 = { zIndex: 1 };
          if (tmp83) {
            const obj6 = { buttonRef: ref4, markAsDismissed: tmp73, visible: tmp74 };
            ({ title: obj23.title, description: obj23.description, avatarSrc: obj23.avatarSrc, decorationAsset: obj23.decorationAsset, renderImgComponent: obj23.renderImgComponent } = memo2);
            obj6.navigateToShop = callback1;
            tmp83 = callback2(importDefault(closure_2[53]), obj6);
          }
          const items5 = [tmp83, ];
          if (tmp85) {
            merged = callback2;
            merged = importDefault;
            merged = closure_2;
            obj7 = { buttonRef: ref5 };
            merged = obj7;
            merged = importDefault(closure_2[51]);
            merged = Object.assign(youSettingsCoachmark.props);
            tmp85 = callback2(merged, obj7);
          }
          items5[1] = tmp85;
          obj5.children = items5;
          tmp94Result = closure_21(arg1(closure_2[52]).LayerScope, obj5);
          const tmp94 = closure_21;
        }
      }
      merged = React;
      const items6 = [tmp86];
      merged = React.useEffect(() => {
        if (tmp86) {
          if (obj.isYouNavFloating()) {
            const _setTimeout = setTimeout;
            const navigateToSettings = setTimeout(() => callback(true), 500);
            return () => clearTimeout(closure_0);
          }
          const obj = navigateToSettings(closure_2[41]);
        }
      }, items6);
      merged = React;
      const items7 = [navigateToSettings, youSettingsCoachmark];
      merged = importDefault;
      merged = closure_2;
      merged = React.useCallback(() => {
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
      merged = arg1;
      class M {
        constructor(arg0) {
          result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
          return;
        }
      }
      let obj25 = arg1(closure_2[41]);
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
      merged = arg1;
      merged = closure_2;
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
      merged = importDefault;
      merged = closure_2;
      merged = closure_21;
      const obj13 = {};
      const items8 = [tmp7.container, tmp60];
      obj13.style = items8;
      merged = closure_14;
      obj13.nativeID = closure_14;
      merged = null != tmp47Result;
      merged = importDefault(closure_2[56]);
      if (merged) {
        merged = callback2;
        merged = importDefault;
        merged = closure_2;
        obj14 = { frame: tmp47Result };
        merged = UserProfileThemeTypes;
        obj14.profileThemeType = UserProfileThemeTypes.YOU_SCREEN;
        merged = arg1;
        merged = importDefault(closure_2[57]);
        obj14.frameOrder = arg1(closure_2[58]).ProfileFrameLayerOrder.BACK;
        obj14.containerWidth = bound;
        merged = callback2(merged, obj14);
      }
      const items9 = [merged, , , , , , ];
      merged = callback2;
      merged = importDefault;
      merged = closure_2;
      const obj15 = { gradientHeight: height, bannerHeight: tmp4Result, style: tmp7.background };
      items9[1] = callback2(importDefault(closure_2[59]), obj15);
      merged = arg1;
      let obj33 = arg1(closure_2[41]);
      merged = !obj33.isYouNavFloating() && tmp94Result;
      items9[2] = merged;
      obj16 = { contentContainerStyle: memo.contentContainerStyle, ref, onScroll: animatedScrollHandler, onLayout: callback };
      merged = closure_15;
      obj16.scrollEventThrottle = closure_15;
      obj16.style = tmp7.scrollView;
      merged = importDefault;
      merged = closure_2;
      merged = closure_21;
      merged = closure_25;
      merged = closure_21;
      obj17 = {};
      const items10 = [tmp7.banner, bannerAnimatedStyle];
      obj17.style = items10;
      merged = !mergedResult;
      if (!mergedResult) {
        merged = arg1;
        merged = closure_2;
        if (obj37.isYouNavFloating()) {
          merged = callback2;
          merged = BackButton;
          obj18 = { paddingTop: bound1 };
          merged = callback2(BackButton, obj18);
        }
        const obj37 = arg1(closure_2[41]);
      }
      const items11 = [merged, ];
      merged = importDefault;
      merged = closure_2;
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
      merged = arg1;
      const tmp91 = callback(React.useState(!obj20.isYouNavFloating()), 2);
      obj21.backgroundColor = arg1(closure_2[60]).int2hex(userProfileBannerBackgroundColor);
      items13[1] = obj21;
      obj20.style = items13;
      const items14 = [callback2(bound, obj20), , ];
      merged = null != source;
      if (!merged) {
        items14[1] = merged;
        merged = arg1;
        merged = closure_2;
        merged = arg1(closure_2[17]).isIOS() && showBlur;
        if (merged) {
          merged = callback2;
          merged = closure_22;
          const obj22 = { animatedProps: blurAnimatedProps };
          merged = sharedValue;
          obj22.style = sharedValue.absoluteFillObject;
          merged = callback2(closure_22, obj22);
        }
        items14[2] = merged;
        obj19.children = items14;
        items11[1] = merged(importDefault(closure_2[14]).View, obj19);
        obj17.children = items11;
        const items15 = [merged(importDefault(closure_2[14]).View, obj17), , , ];
        if (mergedResult) {
          merged = importDefault;
          merged = closure_2;
          merged = closure_21;
          const obj23 = { pointerEvents: "box-none" };
          const items16 = [tmp7.profileEffectLayer, , ];
          const obj24 = { width: bound, height };
          items16[1] = obj24;
          items16[2] = bannerAnimatedStyle;
          obj23.style = items16;
          merged = callback2;
          obj25 = { skuId: skuId2, unicodeVersion: "info", skuId: "/", paused: tmp24 };
          const items17 = [callback2(importDefault(closure_2[62]), obj25), ];
          merged = arg1;
          if (obj53.isYouNavFloating()) {
            merged = callback2;
            merged = BackButton;
            const obj26 = { paddingTop: bound1 };
            merged = callback2(BackButton, obj26);
          }
          items17[1] = merged;
          obj23.children = items17;
          mergedResult = merged(importDefault(closure_2[14]).View, obj23);
          const obj53 = arg1(closure_2[41]);
        }
        items15[1] = mergedResult;
        merged = callback2;
        merged = importDefault;
        merged = closure_2;
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
        items15[2] = callback2(importDefault(closure_2[63]), obj27);
        merged = callback2;
        merged = arg1;
        const obj28 = { label: "you_screen" };
        items15[3] = callback2(arg1(closure_2[64]).TTIFirstContentfulPaint, obj28);
        obj16.children = items15;
        items9[3] = merged(merged, obj16);
        merged = null != tmp47Result;
        if (merged) {
          merged = callback2;
          merged = importDefault;
          merged = closure_2;
          const obj29 = { frame: tmp47Result };
          merged = UserProfileThemeTypes;
          obj29.profileThemeType = UserProfileThemeTypes.YOU_SCREEN;
          merged = arg1;
          merged = importDefault(closure_2[57]);
          obj29.frameOrder = arg1(closure_2[58]).ProfileFrameLayerOrder.FRONT;
          obj29.containerWidth = bound;
          merged = callback2(merged, obj29);
        }
        items9[4] = merged;
        merged = arg1;
        merged = closure_2;
        const obj48 = arg1(closure_2[17]);
        merged = arg1(closure_2[41]).isYouNavFloating() && merged;
        items9[5] = merged;
        merged = arg1;
        merged = closure_2;
        const obj58 = arg1(closure_2[41]);
        merged = arg1(closure_2[41]).isYouNavFloating() && tmp94Result;
        items9[6] = merged;
        obj13.children = items9;
        obj12.children = merged(merged, obj13);
        obj11.children = merged(arg1(closure_2[42]).UserProfileAnalyticsProvider, obj12);
        obj10.children = merged(arg1(closure_2[55]).ThemeContextProvider, obj11);
        return merged(arg1(closure_2[52]).LayerScope, obj10);
      } else if (isAnimatedImageURLResult) {
        merged = arg1;
        merged = closure_2;
        merged = closure_21;
        const obj30 = {
          onPress() {
                  return callback2(!first1);
                },
          accessibilityRole: "image"
        };
        const intl3 = arg1(closure_2[22]).intl;
        obj30.accessibilityLabel = intl3.string(arg1(closure_2[22]).t.3fzj/l);
        merged = callback2;
        merged = importDefault;
        const obj31 = { style: intl2, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp24 };
        const items19 = [callback2(importDefault(closure_2[50]), obj31), ];
        tmp28 = !tmp28;
        if (tmp28) {
          source = callback2;
          merged = arg1;
          merged = closure_2;
          const obj32 = {};
          intl2 = arg1(closure_2[22]).intl;
          obj32.label = intl2.string(arg1(closure_2[22]).t.I5gL2H);
          const items20 = [tmp7.gifTag, ];
          obj33 = { top: bound1 };
          items20[1] = obj33;
          obj32.style = items20;
          obj32.textStyle = tmp7.gifTagText;
          tmp28 = callback2(arg1(closure_2[61]).Caption, obj32);
        }
        items19[1] = tmp28;
        obj30.children = items19;
        merged = merged(arg1(closure_2[23]).PressableOpacity, obj30);
      } else {
        merged = callback2;
        merged = importDefault;
        merged = closure_2;
        const obj34 = { style: intl2, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp24 };
        merged = callback2(importDefault(closure_2[50]), obj34);
      }
      const obj42 = arg1(closure_2[60]);
    }
    bound1 = youSettingsCoachmark;
    const tmp52 = importDefault(closure_2[45]);
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ StyleSheet: closure_5, View: closure_6 } = tmp2);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: closure_13, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = arg1(dependencyMap[8]));
const UserSettingsSections = arg1(dependencyMap[9]).UserSettingsSections;
let closure_17 = arg1(dependencyMap[10]).CollectiblesMobileShopScreen;
const ContentDismissActionType = arg1(dependencyMap[11]).ContentDismissActionType;
const UserProfileThemeTypes = arg1(dependencyMap[12]).UserProfileThemeTypes;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_20, jsxs: closure_21 } = arg1(dependencyMap[13]));
const tmp4 = arg1(dependencyMap[13]);
let closure_22 = importDefault(dependencyMap[14]).createAnimatedComponent(importDefault(dependencyMap[15]));
const importDefaultResult = importDefault(dependencyMap[14]);
let closure_23 = arg1(dependencyMap[16]).createStyles((marginTop) => {
  let obj = {};
  let obj1 = arg1(dependencyMap[17]);
  let xl;
  if (obj1.isIOS()) {
    xl = importDefault(dependencyMap[18]).radii.xl;
  }
  obj.borderTopLeftRadius = xl;
  let obj2 = arg1(dependencyMap[17]);
  let xl1;
  if (obj2.isIOS()) {
    xl1 = importDefault(dependencyMap[18]).radii.xl;
  }
  obj.borderTopRightRadius = xl1;
  obj = {};
  obj = {};
  const merged = Object.assign(obj);
  obj.container = obj;
  obj1 = { overflow: "hidden" };
  const merged1 = Object.assign(obj);
  obj.background = obj1;
  obj2 = { flex: 1 };
  const merged2 = Object.assign(obj);
  obj.scrollView = obj2;
  obj.profileEffectLayer = {};
  const obj3 = { getScaledChannelRowHeight: "Array", isConfigured: "isArray", GameDepthTier8SmallBadge: "max", shouldShowEmojiRow: "names", minHeight: marginTop };
  obj.banner = obj3;
  const obj4 = { 9223372036854775807: true, -9223372036854775808: true, 0: true, 9223372036854775807: true, 0: true };
  const tmp10 = importDefault(dependencyMap[19]);
  const tmp10Result = importDefault(dependencyMap[19])(importDefault(dependencyMap[18]).unsafe_rawColors.WHITE);
  obj4.backgroundColor = importDefault(dependencyMap[19])(importDefault(dependencyMap[18]).unsafe_rawColors.WHITE).alpha(0.9).css();
  obj.gifTag = obj4;
  const alphaResult = importDefault(dependencyMap[19])(importDefault(dependencyMap[18]).unsafe_rawColors.WHITE).alpha(0.9);
  obj.gifTagText = { color: importDefault(dependencyMap[18]).unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj.content = { marginTop };
  return obj;
});
const obj2 = arg1(dependencyMap[16]);
let closure_24 = arg1(dependencyMap[16]).createStyles(() => {
  let obj = {};
  obj = { scale: 2, offset: "center", minimized: "center", active: 161294633293869400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, initialLaunchPadPosition: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005071684980005663, initialPullTabPosition: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004450147719115555, marginTop: importDefault(dependencyMap[18]).space.PX_4, left: importDefault(dependencyMap[18]).space.PX_16 };
  obj.backButton = obj;
  return obj;
});
const obj3 = arg1(dependencyMap[16]);
let closure_25 = importDefault(dependencyMap[14]).createAnimatedComponent(tmp2.ScrollView);
let closure_26 = { code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}" };
const importDefaultResult1 = importDefault(dependencyMap[14]);
const result = arg1(dependencyMap[71]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let importDefault;
  let dependencyMap;
  let closure_3;
  let obj = arg1(dependencyMap[21]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const arg1 = stateFromStores;
  let obj1 = arg1(dependencyMap[21]);
  const items1 = [closure_8];
  let id;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => locale.locale);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  importDefault = id;
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => {
    let avatarURL;
    if (null != stateFromStores) {
      avatarURL = stateFromStores.getAvatarURL(null, closure_13);
    }
    return avatarURL;
  }, items2);
  dependencyMap = memo;
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
  const items4 = [closure_7];
  const stateFromStores2 = arg1(dependencyMap[21]).useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = firstWishlistId.getFirstWishlistId(id);
    }
    return firstWishlistId;
  });
  const obj3 = arg1(dependencyMap[21]);
  obj = { wishlistId: stateFromStores2, userId: id };
  const fetchWishlist = arg1(dependencyMap[66]).useFetchWishlist(obj);
  const callback = React.useCallback(() => {
    state.setState({});
    stateFromStores(memo[67]).openUserSettings();
  }, []);
  closure_3 = callback;
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo[67]);
    obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj);
  }, []);
  const callback2 = React.useCallback(() => {
    let obj = stateFromStores(memo[68]);
    obj = { analyticsSource: id(memo[46]).YOU_SCREEN };
    const items = [id(memo[46]).YOU_SCREEN];
    obj.analyticsLocations = items;
    obj.screen = constants2.FEATURED_PAGE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  const callback3 = React.useCallback((autoFocusElement) => {
    let obj = stateFromStores(memo[67]);
    obj = { screen: constants.PROFILE_CUSTOMIZATION, params: obj };
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
  const obj4 = arg1(dependencyMap[66]);
  obj = {
    scrollToTop() {
      callback();
    }
  };
  const scrollToTop = arg1(dependencyMap[36]).useScrollToTop(React.useRef(obj));
  let tmp16 = null;
  if (null != stateFromStores) {
    obj1 = { user: stateFromStores, navigateToSettings: callback, navigateToPremium: callback1, navigateToProfileCustomization: callback3, navigateToCustomStatus: callback4, navigateToFriends: callback5, navigateToShop: callback2, initialTab: initialTab.initialTab };
    tmp16 = callback2(UnconnectedYouScreen, obj1);
  }
  return tmp16;
};
