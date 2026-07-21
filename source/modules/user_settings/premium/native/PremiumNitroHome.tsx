// Module ID: 7413
// Function ID: 59567
// Name: NitroHomeHeader
// Dependencies: []
// Exports: default

// Module 7413 (NitroHomeHeader)
function NitroHomeHeader(arg0) {
  let onClose;
  let subscription;
  ({ subscription, onClose } = arg0);
  const arg1 = onClose;
  const tmp = callback5();
  let obj = arg1(dependencyMap[14]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[15]);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = obj1.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "NitroHomeHeader" });
  let tmp5 = null == subscription;
  const callback = React.useCallback(() => {
    if (undefined !== onClose) {
      onClose();
    } else {
      navigation.pop();
    }
  }, items);
  if (!tmp5) {
    tmp5 = !subscription.hasActiveTrial;
  }
  let tmp6 = !tmp5;
  obj = { style: tmp.contentContainer };
  obj = { style: tmp.headerContainer };
  obj1 = { style: tmp.backButtonWrapper, onPress: callback, children: callback3(arg1(dependencyMap[17]).ArrowLargeLeftIcon, { flex: "null", flexGrow: null }) };
  const items1 = [callback3(arg1(dependencyMap[16]).PressableOpacity, obj1), , ];
  const obj2 = { style: tmp.headerText };
  const intl = arg1(dependencyMap[19]).intl;
  obj2.children = intl.string(arg1(dependencyMap[19]).t.BnquQ/);
  items1[1] = callback3(arg1(dependencyMap[18]).Text, obj2);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj3 = { style: tmp.backButtonWrapper };
    let tmp11Result = tmp11(closure_5, obj3);
  } else {
    const obj4 = {
      style: tmp.backButtonWrapper,
      onPress() {
          let obj = navigation(closure_2[20]);
          obj = { current_component: constants3.YOUR_NITRO_HOME, next_component: constants3.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" };
          obj.track(constants.NITRO_HOME_NAVIGATION, obj);
          navigation.push(constants2.PREMIUM_MANAGE_PLAN);
        },
      children: callback3(arg1(dependencyMap[21]).SettingsIcon, { flex: "null", flexGrow: null })
    };
    tmp11Result = tmp11(arg1(dependencyMap[16]).PressableOpacity, obj4);
  }
  items1[2] = tmp11Result;
  obj.children = items1;
  const items2 = [closure_18(closure_5, obj), ];
  if (!tmp5) {
    const obj5 = { style: tmp.pillParent };
    const obj6 = { hasExtraMargin: true };
    obj5.children = callback3(arg1(dependencyMap[22]).PremiumReferralTrialPill, obj6);
    tmp6 = callback3(closure_5, obj5);
  }
  items2[1] = tmp6;
  obj.children = items2;
  return closure_18(closure_5, obj);
}
function NewTab(arg0) {
  let extraBottomHeight;
  let scrollToSectionId;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = callback6();
  let obj = callback(dependencyMap[23]);
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  let obj1 = callback(dependencyMap[24]);
  const premiumPerkCard = obj1.usePremiumPerkCard();
  let obj2 = callback(dependencyMap[25]);
  const promotionMarketingComponent = obj2.usePromotionMarketingComponent(callback(dependencyMap[26]).MarketingComponentType.MARKETING_PAGE_BANNER);
  let callback = React.useRef(false);
  const ref = React.useRef(null);
  callback = React.useCallback((nativeEvent) => {
    let obj = callback(closure_2[28]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: closure_19, hasTrackedScrolledToBottom: callback };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = { ref, contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0 };
  const items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  let tmp9 = null != promotionMarketingComponent;
  if (tmp9) {
    tmp9 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp9) {
    obj = {};
    obj1 = { width: callback(dependencyMap[24]).PERK_CARD_SIZES[closure_0(undefined, closure_2[24]).PerkCardVariant.WIDE].width };
    obj.style = obj1;
    obj.cardStyle = tmp.marketingBannerCard;
    obj.bannerFields = promotionMarketingComponent.properties.properties.marketingPageBanner;
    obj.analyticsPage = "Nitro Home Banner Tile";
    obj.componentId = promotionMarketingComponent.id;
    tmp9 = callback3(importDefault(dependencyMap[29]), obj);
    const tmp13 = importDefault(dependencyMap[29]);
  }
  const items1 = [tmp9, callback3(callback(dependencyMap[30]).TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15 = null;
  if (isEligibleSenderForReferralProgram) {
    obj2 = { onLayout: importDefault(dependencyMap[27])(ref, scrollToSectionId).createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: callback3(callback(dependencyMap[31]).ReferralProgramPerkCard, {}) };
    tmp15 = callback3(closure_5, obj2);
  }
  items1[2] = tmp15;
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = callback3(importDefault(dependencyMap[24]), {});
  const obj3 = {};
  const obj4 = {};
  const tmp22 = importDefault(dependencyMap[24]);
  const tmp7 = closure_18;
  const tmp8 = closure_6;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = callback3(importDefault(dependencyMap[24]), obj4);
  const obj5 = {};
  const tmp24 = importDefault(dependencyMap[24]);
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = callback3(importDefault(dependencyMap[24]), obj5);
  const obj6 = {};
  const tmp26 = importDefault(dependencyMap[24]);
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = callback3(importDefault(dependencyMap[24]), obj6);
  obj.children = items1;
  return tmp7(tmp8, obj);
}
function PerksTab(extraBottomHeight) {
  let fractionalState;
  let isInReverseTrial;
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  let obj = callback(dependencyMap[24]);
  const premiumPerkCard = obj.usePremiumPerkCard();
  let callback = React.useCallback((section_name) => {
    let obj = callback2(closure_2[20]);
    obj = { section_name };
    obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj);
  }, []);
  const importDefault = React.useRef(false);
  callback = React.useCallback((nativeEvent) => {
    let obj = callback(closure_2[28]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: closure_20, hasTrackedScrolledToBottom: closure_1 };
    const result = obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = { contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0 };
  const items = [callback7().featureCardsContainer, { paddingBottom: extraBottomHeight.extraBottomHeight }];
  obj = {};
  const tmp = callback7();
  const tmp4 = closure_18;
  const tmp5 = closure_6;
  const tmp6 = callback3;
  const intl = callback(dependencyMap[19]).intl;
  obj.title = intl.string(callback(dependencyMap[19]).t.DOb6x0);
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let clientThemes = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      const items1 = [clientThemes, ];
      clientThemes = premiumPerkCard.clientThemes;
      items1[1] = clientThemes;
      let items2 = items1;
    } else {
      items2 = [clientThemes, , ];
      ({ clientThemes: arr3[1], greyServerBoosts: arr3[2] } = premiumPerkCard);
    }
  } else {
    const items3 = [, , ];
    ({ customProfile: arr2[0], clientThemes: arr2[1], serverBoosts: arr2[2] } = premiumPerkCard);
    obj.perks = items3;
    obj.onItemChange = function onItemChange(arg0) {
      return callback(closure_22.CAROUSEL_SECTION_NAME_1, arg0);
    };
    const items4 = [tmp6(tmp7, obj), , , ];
    const obj1 = {};
    const intl2 = callback(dependencyMap[19]).intl;
    obj1.title = intl2.string(callback(dependencyMap[19]).t.+vt7w9);
    const tmp12 = importDefault(dependencyMap[32]);
    const tmp9 = callback3;
    if (obj5.isAppIconsSupported()) {
      const items5 = [premiumPerkCard.customAppIcons];
      let items6 = items5;
    } else {
      items6 = [];
    }
    const items7 = [, , ];
    const arraySpreadResult = HermesBuiltin.arraySpread(items6, 0);
    items7[arraySpreadResult] = premiumPerkCard.emoji;
    const sum = arraySpreadResult + 1;
    ({ customSounds: arr8[tmp17], sticker: arr8[tmp17 + 1] } = premiumPerkCard);
    obj1.perks = items7;
    obj1.onItemChange = function onItemChange(arg0) {
      return callback(closure_22.CAROUSEL_SECTION_NAME_2, arg0);
    };
    items4[1] = tmp9(tmp12, obj1);
    const obj2 = {};
    const obj5 = callback(dependencyMap[33]);
    const intl3 = callback(dependencyMap[19]).intl;
    obj2.title = intl3.string(callback(dependencyMap[19]).t.LgHbnL);
    const items8 = [, , , , ];
    ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
    obj2.perks = items8;
    obj2.onItemChange = function onItemChange(arg0) {
      return callback(closure_22.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = callback3(importDefault(dependencyMap[32]), obj2);
    const obj3 = {};
    const tmp21 = importDefault(dependencyMap[32]);
    const tmp23 = callback3;
    const intl4 = callback(dependencyMap[19]).intl;
    obj3.title = intl4.string(callback(dependencyMap[19]).t.LTaxu9);
    if (fractionalState === FractionalPremiumStates.FP_ONLY) {
      const entranceSounds = premiumPerkCard.entranceSounds;
      if (isInReverseTrial) {
        const items9 = [entranceSounds];
        let items10 = items9;
      } else {
        items10 = [entranceSounds, premiumPerkCard.greyBadge];
      }
    } else {
      const items11 = [, ];
      ({ entranceSounds: arr10[0], badge: arr10[1] } = premiumPerkCard);
      obj3.perks = items11;
      obj3.onItemChange = function onItemChange(arg0) {
        return callback(closure_22.CAROUSEL_SECTION_NAME_4, arg0);
      };
      items4[3] = tmp23(tmp24, obj3);
      obj.children = items4;
      return tmp4(tmp5, obj);
    }
    const tmp24 = importDefault(dependencyMap[32]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const NitroHomeSectionId = arg1(dependencyMap[5]).NitroHomeSectionId;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_11, HorizontalGradient: closure_12, ThemeTypes: closure_13, UserSettingsSections: closure_14 } = arg1(dependencyMap[6]));
const ContentDismissActionType = arg1(dependencyMap[7]).ContentDismissActionType;
const FractionalPremiumStates = arg1(dependencyMap[8]).FractionalPremiumStates;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[9]));
let closure_19 = "NewTab";
let closure_20 = "PerksTab";
let obj = arg1(dependencyMap[10]);
const tmp4 = arg1(dependencyMap[9]);
const importDefaultResult = importDefault(dependencyMap[11]);
const importDefaultResultResult = importDefault(dependencyMap[11])(importDefault(dependencyMap[12]).unsafe_rawColors.PLUM_24);
let closure_21 = obj.hexToRgbaString(importDefault(dependencyMap[11])(importDefault(dependencyMap[12]).unsafe_rawColors.PLUM_24).alpha(0.6).hex());
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let obj3 = arg1(dependencyMap[13]);
obj = {};
obj = { setEmojiId: null, selectedAvatarDecoration: "space-between", genContentSubtitle: "center", backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.background = {};
obj.tabContent = { flex: 1 };
obj.featureCardsContainer = { "Bool(true)": 1, "Bool(true)": "center", "Bool(true)": "center", "Bool(true)": 24 };
obj.segmentedControlActual = {};
const alphaResult = importDefault(dependencyMap[11])(importDefault(dependencyMap[12]).unsafe_rawColors.PLUM_24).alpha(0.6);
obj.segmentedControlVirtual = { borderRadius: importDefault(dependencyMap[12]).radii.lg };
const obj1 = { borderRadius: importDefault(dependencyMap[12]).radii.lg };
obj.androidSegmentedControlBackground = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH };
obj.backSwipeSensor = { 9223372036854775807: 3375103, 0: -8192, 9223372036854775807: 4320799, 0: -1147150336, 0: 4320958 };
let closure_24 = obj3.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH };
obj3 = { headerContainer: {}, contentContainer: {} };
const obj9 = arg1(dependencyMap[13]);
obj3.backButtonWrapper = { borderRadius: importDefault(dependencyMap[12]).radii.lg };
obj3.headerText = { "Null": "message", "Null": 2, "Null": null };
obj3.pillParent = {};
let closure_25 = obj9.createStyles(obj3);
const obj4 = { borderRadius: importDefault(dependencyMap[12]).radii.lg };
const obj5 = { featureCardsContainer: { "Bool(true)": 1, "Bool(true)": "center", "Bool(true)": "center", "Bool(true)": 24, "Bool(true)": "recent_games_enabled" } };
const obj12 = arg1(dependencyMap[13]);
obj5.marketingBannerCard = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[12]).radii.sm };
let closure_26 = obj12.createStyles(obj5);
const obj6 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[12]).radii.sm };
let closure_27 = arg1(dependencyMap[13]).createStyles({ featureCardsContainer: { TransitionStates: 720895, GappedList: 1090584576, EouHwv: 179448, _resetProfilerInfo: -1136484511 } });
let closure_28 = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
const obj15 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[60]).fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let tmp10;
  let tmp14;
  let sharedValue;
  let closure_7;
  let closure_8;
  let obj = arg1(closure_2[34]);
  const commonTriggerPoint = obj.useCommonTriggerPoint(arg1(closure_2[35]).OpenNitroTriggerPoint);
  let obj1 = arg1(closure_2[36]);
  const giftCardMobileConsumptionHalfsheet = obj1.useGiftCardMobileConsumptionHalfsheet();
  const tmp3 = callback4();
  const bottom = importDefault(closure_2[37])().bottom;
  const arg1 = bottom;
  let obj2 = arg1(closure_2[38]);
  const youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = arg1(closure_2[14]);
  const navigation = obj3.useNavigation();
  const importDefault = navigation;
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  const tmp7 = callback2(React.useState(0), 2);
  closure_2 = tmp7[1];
  const callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  [tmp10, closure_3] = callback2(React.useState(0), 2);
  const callback1 = React.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj4 = arg1(closure_2[39]);
  const items1 = [closure_7];
  const stateFromStores = obj4.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  const React = stateFromStores;
  const tmp9 = callback2(React.useState(0), 2);
  [tmp14, closure_5] = callback2(React.useState(true), 2);
  let obj5 = arg1(closure_2[39]);
  const items2 = [closure_8];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => promotionMarketingComponent.getPremiumTypeSubscription());
  const callback2 = React.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = navigation(closure_2[20]);
      obj = { target: closure_19 };
      obj.track(constants.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      callback3(true);
    } else if (1 === arg0) {
      obj = { target: closure_20 };
      navigation(closure_2[20]).track(constants.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      callback3(false);
      const obj3 = navigation(closure_2[20]);
    }
  }, []);
  const tmp17 = importDefault(closure_2[40])();
  let obj6 = arg1(closure_2[41]);
  const isInReverseTrial = obj6.useIsInReverseTrial();
  let obj7 = arg1(closure_2[42]);
  const maybeFetchTieredTenureBadgeData = obj7.useMaybeFetchTieredTenureBadgeData();
  const field = closure_9.useField("scrollToSectionId");
  const effect = React.useEffect(() => () => {
    closure_9.resetState();
  }, []);
  let obj8 = arg1(closure_2[43]);
  obj = {};
  obj = {};
  const intl = arg1(closure_2[19]).intl;
  obj.label = intl.string(arg1(closure_2[19]).t.tahjbP);
  const intl2 = arg1(closure_2[19]).intl;
  obj.id = intl2.string(arg1(closure_2[19]).t.tahjbP);
  obj1 = { extraBottomHeight: tmp10 + 16, scrollToSectionId: field };
  obj.page = callback3(NewTab, obj1);
  const items3 = [obj, ];
  obj2 = {};
  const intl3 = arg1(closure_2[19]).intl;
  obj2.label = intl3.string(arg1(closure_2[19]).t.w3RBdW);
  const intl4 = arg1(closure_2[19]).intl;
  obj2.id = intl4.string(arg1(closure_2[19]).t.w3RBdW);
  obj3 = { extraBottomHeight: tmp10 + 16, fractionalState: tmp17.fractionalState, isInReverseTrial };
  obj2.page = callback3(PerksTab, obj3);
  items3[1] = obj2;
  obj.items = items3;
  obj.pageWidth = tmp7[0];
  obj.onPageChange = callback2;
  const segmentedControlState = obj8.useSegmentedControlState(obj);
  let obj14 = arg1(closure_2[44]);
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = obj14.useSharedValue(num);
  let obj15 = arg1(closure_2[44]);
  class Q {
    constructor() {
      obj = { bottom: closure_6.get() };
      return obj;
    }
  }
  Q.__closure = { floatTabBottomOffset: sharedValue };
  Q.__workletHash = 15088278002673;
  Q.__initData = closure_28;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = obj15.useAnimatedStyle(Q);
  const effect1 = React.useEffect(() => {
    if (!stateFromStores) {
      const obj = bottom(closure_2[44]);
      const result = sharedValue.set(obj.withDelay(500, bottom(closure_2[45]).withSpring(bottom + 8, { <string:2210751406>: "isArray", <string:3433102185>: "ranges", <string:3973600938>: "Array" })));
      const obj2 = bottom(closure_2[45]);
    }
  }, items4);
  let obj16 = arg1(closure_2[46]);
  const theme = obj16.useThemeContext().theme;
  const tmp13 = callback2(React.useState(true), 2);
  const isThemeDarkResult = arg1(closure_2[46]).isThemeDark(theme);
  const obj18 = arg1(closure_2[46]);
  const tmp27 = importDefault(closure_2[47]);
  const tmp27Result = importDefault(closure_2[47])(tmp17.endsAt, arg1(closure_2[47]).CountDownMessageTypes.ENDS_IN);
  const isEligibleSenderForReferralProgram = arg1(closure_2[23]).useIsEligibleSenderForReferralProgram();
  closure_7 = isEligibleSenderForReferralProgram;
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = React.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(closure_2[49]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const result = bottom(closure_2[48]).UNSAFE_markDismissibleContentAsDismissed(bottom(closure_2[49]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
      const obj2 = bottom(closure_2[48]);
    }
    const obj = bottom(closure_2[48]);
    if (!obj3.UNSAFE_isDismissibleContentDismissed(bottom(closure_2[49]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const result1 = bottom(closure_2[48]).UNSAFE_markDismissibleContentAsDismissed(bottom(closure_2[49]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE);
      const obj4 = bottom(closure_2[48]);
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = bottom(closure_2[50]).markReferralProgramEntrypointBadgeAcknowledged();
      const obj5 = bottom(closure_2[50]);
    }
  }, items5);
  const effect3 = React.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(closure_2[49]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const result = bottom(closure_2[48]).UNSAFE_markDismissibleContentAsDismissed(bottom(closure_2[49]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
      const obj2 = bottom(closure_2[48]);
    }
  }, []);
  const obj19 = arg1(closure_2[23]);
  const promotionMarketingComponent = arg1(closure_2[25]).usePromotionMarketingComponent(arg1(closure_2[26]).MarketingComponentType.PREMIUM_TAB);
  closure_8 = promotionMarketingComponent;
  const items6 = [promotionMarketingComponent];
  const effect4 = React.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = bottom(closure_2[48]);
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(bottom(closure_2[49]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: constants2.AUTO_DISMISS };
      const result = bottom(closure_2[51]).markSnowflakeBoundDismissibleContentAsDismissed(bottom(closure_2[49]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
      const obj2 = bottom(closure_2[51]);
    }
  }, items6);
  obj4 = { style: items7 };
  const items7 = [tmp3.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj5 = { style: tmp3.background };
  const obj20 = arg1(closure_2[25]);
  const tmp34 = closure_18;
  const tmp35 = closure_5;
  obj5.source = importDefault(closure_2[53]);
  const items8 = [callback3(importDefault(closure_2[52]), obj5), callback3(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }), , , ];
  let tmp37 = tmp17.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp37) {
    obj6 = { countdownText: tmp27Result };
    tmp37 = callback3(importDefault(closure_2[54]), obj6);
  }
  items8[2] = tmp37;
  obj7 = { style: tmp3.tabContent };
  const items9 = [callback3(arg1(closure_2[55]).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp14) {
    obj8 = {};
    const items10 = [tmp3.backSwipeSensor];
    obj8.style = items10;
    tmp14 = callback3(closure_5, obj8);
  }
  items9[1] = tmp14;
  obj7.children = items9;
  items8[3] = closure_18(closure_5, obj7);
  const obj9 = { style: animatedStyle, onLayout: callback1 };
  const obj10 = { style: tmp3.segmentedControlActual, onLayout: callback, children: callback3(arg1(closure_2[56]).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  const items11 = [callback3(closure_5, obj10), , ];
  let tmp46 = !isThemeDarkResult;
  if (tmp46) {
    const obj11 = {};
    ({ START: obj28.start, END: obj28.end } = closure_12);
    obj11.colors = [-0.00000025418756745504954, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007282700382719388];
    const items12 = [tmp3.segmentedControlVirtual, ];
    const obj12 = { height: tmp10, zIndex: 2 };
    items12[1] = obj12;
    obj11.style = items12;
    tmp46 = callback3(importDefault(closure_2[57]), obj11);
  }
  items11[1] = tmp46;
  const tmp36 = importDefault(closure_2[52]);
  const tmp41 = closure_18;
  const tmp42 = closure_5;
  const tmp45 = closure_18;
  if (obj30.isAndroid()) {
    const obj13 = {};
    const items13 = [, , ];
    ({ segmentedControlVirtual: arr15[0], androidSegmentedControlBackground: arr15[1] } = tmp3);
    obj14 = { "Bool(false)": true, "Bool(false)": 10, "Bool(false)": 10, height: tmp10 };
    items13[2] = obj14;
    obj13.style = items13;
    let tmp51Result = tmp51(closure_5, obj13);
  } else {
    obj15 = {};
    let num6 = 0.5;
    if (isThemeDarkResult) {
      num6 = 0.2;
    }
    obj15.blurAmount = num6;
    const items14 = [tmp3.segmentedControlVirtual, ];
    obj16 = { "Bool(false)": true, "Bool(false)": 10, "Bool(false)": 10, height: tmp10 };
    items14[1] = obj16;
    obj15.style = items14;
    obj15.blurTheme = theme;
    let tmp55;
    if (theme === constants.MIDNIGHT) {
      tmp55 = closure_21;
    }
    obj15.blurTintRgba = tmp55;
    tmp51Result = tmp51(importDefault(closure_2[59]), obj15);
    const tmp54 = importDefault(closure_2[59]);
  }
  items11[2] = tmp51Result;
  obj9.children = items11;
  items8[4] = tmp45(importDefault(closure_2[44]).View, obj9);
  obj4.children = items8;
  return tmp34(tmp35, obj4);
};
export const BACK_BUTTON_SIZE = 24;
