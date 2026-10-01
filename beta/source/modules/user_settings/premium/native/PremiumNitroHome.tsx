// Module ID: 12934
// Function ID: 12935
// Name: PremiumNitroHome
// Dependencies: [32, 19, 17, 4825, 4494, 12935, 1074, 2042, 1374, 21, 672, 576, 4836, 1485, 12936, 5435, 5940, 4832, 1115, 1241, 6798, 12937, 7500, 12938, 12959, 10203, 12963, 12964, 12965, 12970, 12974, 12994, 12995, 12997, 12998, 6803, 1613, 12999, 504, 6813, 7509, 13000, 9083, 4566, 5280, 4685, 13001, 4654, 2029, 7499, 2031, 5899, 13002, 13003, 12113, 9084, 5293, 1364, 5268, 2]
// Exports: default

// Module 12934 (PremiumNitroHome)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import spring from "spring" /* 5280 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 7499 */;
import PremiumNitroNavigationStore2 from "PremiumNitroNavigationStore" /* 12935 */;
import PremiumPerkCardDefault from "PremiumPerkCard" /* 12938 */;
import reactDefault from "react" /* 12963 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 12964 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 12965 */;
import PremiumPerkCarouselDefault from "PremiumPerkCarousel" /* 12994 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import module_672 from "module_672" /* 672 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumNitroNavigationStore = PremiumNitroNavigationStore2;
let _require, dependencyMap, importDefault, navigation, set;

let closure_12;
let closure_14;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj5;
let rect;
let size;
let size1;
let unpackModuleId;
function NitroHomeHeader(arg0) {
  let intl;
  let items1;
  let items2;
  let onClose;
  let subscription;
  let tmp11Result;
  ({ subscription, onClose } = arg0);
  const tmp = closure_25();
  let obj = onClose(1485);
  navigation = obj.useNavigation();
  let obj2 = onClose(12936);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "NitroHomeHeader" });
  let hasActiveTrial;
  const callback = react.useCallback(() => {
    if (undefined !== onClose) {
      onClose();
    } else {
      navigation.pop();
    }
  }, items);
  if (subscription != null) {
    hasActiveTrial = subscription.hasActiveTrial;
  }
  const obj3 = { style: tmp.contentContainer, children: items2 };
  const obj4 = { style: tmp.headerContainer, children: items1 };
  const obj5 = { style: tmp.backButtonWrapper, onPress: callback, children: closure_17(onClose(5940).ArrowLargeLeftIcon, { size: "md", color: "white" }) };
  const tmp8 = !hasActiveTrial;
  const PressableOpacity = tmp2(5435).PressableOpacity;
  items1 = [closure_17(PressableOpacity, obj5), , ];
  const obj6 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: intl.string(onClose(1115).t["BnquQ/"]) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items1[1] = closure_17(Text, obj6);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj7 = { style: tmp.backButtonWrapper };
    tmp11Result = tmp11(tmp10, obj7);
  } else {
    const obj8 = {
      style: tmp.backButtonWrapper,
      onPress() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { current_component: unpackModuleId.YOUR_NITRO_HOME, next_component: unpackModuleId.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" };
          obj.track(unpackModuleId.NITRO_HOME_NAVIGATION, obj2);
          navigation.push(constants.PREMIUM_MANAGE_PLAN);
        },
      children: closure_17(onClose(6798).SettingsIcon, { size: "md", color: "white" })
    };
    const PressableOpacity2 = tmp2(5435).PressableOpacity;
    tmp11Result = tmp11(PressableOpacity2, obj8);
  }
  let tmp11Result2 = !tmp8;
  items1[2] = tmp11Result;
  items2 = [closure_18(closure_5, obj4), ];
  if (tmp11Result2) {
    const obj9 = { style: tmp.pillParent, children: closure_17(onClose(12937).PremiumReferralTrialPill, { hasExtraMargin: true }) };
    tmp11Result2 = tmp11(tmp10, obj9);
  }
  items2[1] = tmp11Result2;
  return closure_18(closure_5, obj3);
}
function NewTab(arg0) {
  let extraBottomHeight;
  let hasTrackedScrolledToBottom;
  let items;
  let items1;
  let obj7;
  let scrollToSectionId;
  _require = undefined;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = closure_27();
  let obj = require("useIsEligibleSenderForReferralProgram");
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  let obj2 = require("PremiumPerkCard");
  const premiumPerkCard = obj2.usePremiumPerkCard();
  const obj3 = require("usePromotionMarketingComponent");
  const promotionMarketingComponent = obj3.usePromotionMarketingComponent(require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = react.useRef(false);
  const ref = react.useRef(null);
  const createSectionLayoutHandler = reactDefault(ref, scrollToSectionId).createSectionLayoutHandler;
  const callback = react.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: NewTab_str, hasTrackedScrolledToBottom };
    return obj.trackIfScrolledToBottom(obj2);
  }, []);
  const obj4 = { ref, contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items1 };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  let tmp12 = null != promotionMarketingComponent;
  const tmp10 = closure_18;
  const tmp11 = closure_6;
  if (tmp12) {
    tmp12 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp12) {
    const obj6 = { style: obj7, cardStyle: tmp.marketingBannerCard, bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner, analyticsPage: "Nitro Home Banner Tile", componentId: null, promotionId: null };
    obj7 = { width: require("PremiumPerkCard").PERK_CARD_SIZES[require("PremiumPerkCard").PerkCardVariant.WIDE].width };
    ({ id: obj5.componentId, promotionId: obj5.promotionId } = promotionMarketingComponent);
    const tmp8Result = MarketingPageBannerTileDefault;
    tmp12 = closure_17(tmp8Result, obj6);
  }
  items1 = [tmp12, closure_17(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    const obj8 = { onLayout: createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_17(require("ReferralProgramPerkCard").ReferralProgramPerkCard, {}) };
    tmp15Result = tmp15(closure_5, obj8);
  }
  items1[2] = tmp15Result;
  const obj9 = {};
  const tmp8Result5 = PremiumPerkCardDefault;
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = closure_17(tmp8Result5, obj9);
  const obj10 = {};
  const tmp8Result6 = PremiumPerkCardDefault;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = closure_17(tmp8Result6, obj10);
  const obj11 = {};
  const tmp8Result7 = PremiumPerkCardDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = closure_17(tmp8Result7, obj11);
  const obj19 = {};
  const tmp8Result8 = PremiumPerkCardDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = closure_17(tmp8Result8, obj19);
  return tmp10(tmp11, obj4);
}
function PerksTab(extraBottomHeight) {
  let closure_0;
  let fractionalState;
  let hasTrackedScrolledToBottom;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isInReverseTrial;
  let items;
  let items11;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  _require = undefined;
  extraBottomHeight = extraBottomHeight.extraBottomHeight;
  const tmp = closure_29();
  let obj = require("PremiumPerkCard");
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = react.useCallback((section_name) => {
    const obj = hasTrackedScrolledToBottom(dependencyMap[19]);
    const obj2 = { section_name };
    obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj2);
  }, []);
  importDefault = react.useRef(false);
  const callback = react.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab_str, hasTrackedScrolledToBottom };
    const result = obj.trackIfScrolledToBottom(obj2);
  }, []);
  let obj2 = { contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items4 };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  const obj3 = {
    title: intl.string(require("intl").t.DOb6x0),
    perks: items3,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_1, arg0);
    }
  };
  const tmp10 = PremiumPerkCarouselDefault;
  intl = require("intl").intl;
  const tmp11 = FractionalPremiumStates;
  const tmp6 = closure_18;
  const tmp7 = closure_6;
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let items2;
    const customProfile = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      const items1 = [customProfile, premiumPerkCard.clientThemes];
      items2 = items1;
    } else {
      items2 = [customProfile, , ];
      ({ clientThemes: arr3[1], greyServerBoosts: arr3[2] } = premiumPerkCard);
    }
    items3 = items2;
  } else {
    items3 = [, , ];
    ({ customProfile: arr2[0], clientThemes: arr2[1], serverBoosts: arr2[2] } = premiumPerkCard);
  }
  items4 = [closure_17(tmp10, obj3), , , ];
  const obj4 = {
    title: intl2.string(require("intl").t["+vt7w9"]),
    perks: items7,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_2, arg0);
    }
  };
  const tmp9Result = PremiumPerkCarouselDefault;
  intl2 = tmp2(1115).intl;
  const tmp2Result = require("AppIconUtils");
  if (tmp2Result.isAppIconsSupported()) {
    const items5 = [premiumPerkCard.customAppIcons];
    items6 = items5;
  } else {
    items6 = [];
  }
  items7 = [...items6, premiumPerkCard.emoji, premiumPerkCard.customSounds, premiumPerkCard.sticker];
  items4[1] = closure_17(tmp9Result, obj4);
  const obj5 = {
    title: intl3.string(require("intl").t.LgHbnL),
    perks: items8,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_3, arg0);
    }
  };
  const tmp9Result3 = PremiumPerkCarouselDefault;
  intl3 = tmp2(1115).intl;
  items8 = [, , , , ];
  ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
  items4[2] = closure_17(tmp9Result3, obj5);
  const obj6 = {
    title: intl4.string(require("intl").t.LTaxu9),
    perks: items11,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_4, arg0);
    }
  };
  const tmp9Result4 = PremiumPerkCarouselDefault;
  intl4 = tmp2(1115).intl;
  if (fractionalState === tmp11.FP_ONLY) {
    let items10;
    const entranceSounds = premiumPerkCard.entranceSounds;
    if (isInReverseTrial) {
      const items9 = [entranceSounds];
      items10 = items9;
    } else {
      items10 = [entranceSounds, premiumPerkCard.greyBadge];
    }
    items11 = items10;
  } else {
    items11 = [, ];
    ({ entranceSounds: arr10[0], badge: arr10[1] } = premiumPerkCard);
  }
  items4[3] = closure_17(tmp9Result4, obj6);
  return tmp6(tmp7, obj2);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const NitroHomeSectionId = PremiumNitroNavigationStore2.NitroHomeSectionId;
({ AnalyticEvents: unpackModuleId, HorizontalGradient: closure_12, ThemeTypes: map1, UserSettingsSections: closure_14 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
const NewTab_str = "NewTab";
const PerksTab_str = "PerksTab";
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.PLUM_24);
const alphaResult = importDefaultResultResult.alpha(0.6);
let closure_21 = alphaResult.hex();
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let createStyles = createStyles_mod;
let obj = { container: size, background: { position: "absolute", width: "100%" }, tabContent: { flex: 1 }, featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" }, segmentedControlActual: { zIndex: 3, paddingHorizontal: 16 }, segmentedControlVirtual: rect, androidSegmentedControlBackground: obj2, backSwipeSensor: { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" } };
size = { display: "flex", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: nativeDefault.radii.lg };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_24 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: size1, headerText: { textAlign: "center", width: "80%", lineHeight: 28 }, pillParent: { display: "flex", flexDirection: "column", alignItems: "center" } };
size1 = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_25 = createStyles.createStyles(obj3);
createStyles = createStyles_mod;
let obj4 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: obj5 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let closure_27 = createStyles.createStyles(obj4);
createStyles = createStyles_mod;
let closure_29 = createStyles.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
const __initData = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c2;
  let c3;
  let c5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items3;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let tmp11;
  let tmp14;
  let tmp18;
  let tmp27Result4;
  let tmp27Result6;
  let tmp48;
  let bottom;
  navigation = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  c5 = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  let tmp = bottom;
  const tmp2 = dependencyMap;
  onClose = onClose.onClose;
  let obj = bottom(12997);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(12998).OpenNitroTriggerPoint);
  let obj2 = bottom(6803);
  const giftCardMobileConsumptionHalfsheet = obj2.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_24();
  bottom = navigation(1613)().bottom;
  let obj3 = bottom(12999);
  const youBarSettingsCustomHeaderPaddingTop = obj3.useYouBarSettingsCustomHeaderPaddingTop();
  let obj4 = bottom(1485);
  navigation = obj4.useNavigation();
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  [tmp11, c2] = _slicedToArray(stateFromStores.useState(0), 2);
  const tmp10 = _slicedToArray(stateFromStores.useState(0), 2);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    c2(nativeEvent.nativeEvent.layout.width);
  }, []);
  [tmp14, c3] = _slicedToArray(stateFromStores.useState(0), 2);
  const tmp13 = _slicedToArray(stateFromStores.useState(0), 2);
  const callback1 = stateFromStores.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [isEligibleSenderForReferralProgram];
  const obj6 = bottom(504);
  stateFromStores = obj6.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  [tmp18, c5] = stateFromStores.useState(true);
  _slicedToArray(stateFromStores.useState(true), 2);
  const items2 = [promotionMarketingComponent];
  const obj7 = bottom(504);
  const stateFromStores1 = obj7.useStateFromStores(items2, () => promotionMarketingComponent.getPremiumTypeSubscription());
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      const obj2 = { target: NewTab_str };
      const obj = AnalyticsUtilsDefault;
      obj.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj2);
      _undefined3(true);
    } else if (1 === arg0) {
      const obj4 = { target: PerksTab_str };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj4);
      _undefined3(false);
    }
  }, []);
  const tmp21 = navigation(6813)();
  const obj8 = bottom(7509);
  const isInReverseTrial = obj8.useIsInReverseTrial();
  const obj9 = bottom(13000);
  const maybeFetchTieredTenureBadgeData = obj9.useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    closure_1_9.resetState();
  }, []);
  const obj10 = { items: items3, pageWidth: tmp11, onPageChange: callback2 };
  const obj11 = { label: intl.string(bottom(1115).t.tahjbP), id: intl2.string(bottom(1115).t.tahjbP), page: closure_17(NewTab, obj12) };
  const useSegmentedControlState = bottom(9083).useSegmentedControlState;
  bottom(9083);
  intl = bottom(1115).intl;
  intl2 = bottom(1115).intl;
  items3 = [obj11, ];
  obj12 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  const obj13 = { label: intl3.string(bottom(1115).t.w3RBdW), id: intl4.string(bottom(1115).t.w3RBdW), page: closure_17(PerksTab, obj14) };
  intl3 = bottom(1115).intl;
  intl4 = bottom(1115).intl;
  obj14 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  items3[1] = obj13;
  const segmentedControlState = useSegmentedControlState(obj10);
  let num = -32;
  const useSharedValue = bottom(4566).useSharedValue;
  bottom(4566);
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = useSharedValue(num);
  let tmpResult = tmp(4566);
  class Q {
    constructor() {
      const obj = { bottom: sharedValue.get() };
      return obj;
    }
  }
  Q.__closure = { floatTabBottomOffset: sharedValue };
  Q.__workletHash = 15088278002673;
  Q.__initData = __initData;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = tmpResult.useAnimatedStyle(Q);
  const effect1 = obj5.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = spring;
      const result = set(withDelay(500, obj.withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })));
    }
  }, items4);
  let tmpResult6 = tmp(4685);
  const theme = tmpResult6.useThemeContext().theme;
  const tmpResult7 = tmp(4685);
  const isThemeDarkResult = tmpResult7.isThemeDark(theme);
  const ONYX = constants2.ONYX;
  const tmp6Result = navigation(13001);
  const tmp6ResultResult = tmp6Result(tmp21.endsAt, tmp(13001).CountDownMessageTypes.ENDS_IN);
  const tmpResult8 = tmp(7500);
  isEligibleSenderForReferralProgram = tmpResult8.useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj5.useEffect(() => {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult = DismissibleContentUnsafeUtils;
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(2029).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE, obj2);
    }
    const tmpResult4 = DismissibleContentUnsafeUtils;
    if (!tmpResult4.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const obj3 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult5 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult5.UNSAFE_markDismissibleContentAsDismissed(tmp(2029).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE, obj3);
    }
    const tmp7 = isEligibleSenderForReferralProgram;
    if (tmp7) {
      const tmpResult6 = ReferralProgramUtils;
      const result2 = tmpResult6.markReferralProgramEntrypointBadgeAcknowledged();
    }
  }, items5);
  const effect3 = obj5.useEffect(() => {
    const obj = bottom(c2[47]);
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(c2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const tmpResult = bottom(c2[47]);
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
    }
  }, []);
  const tmpResult9 = tmp(12959);
  promotionMarketingComponent = tmpResult9.usePromotionMarketingComponent(tmp(10203).MarketingComponentType.PREMIUM_TAB);
  const items6 = [promotionMarketingComponent];
  const effect4 = obj5.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent || "premiumTab" !== tmp.properties.properties.oneofKind;
    if (!isDismissed) {
      const obj = DismissibleContentUnsafeUtils;
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const obj2 = DismissibleContentUtils;
      const result = obj2.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId, obj3);
    }
  }, items6);
  const obj15 = { style: items7, children: items8 };
  items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  const obj16 = { style: tmp5.background, source: navigation(13002) };
  const tmp6Result3 = navigation(5899);
  items8 = [closure_17(tmp6Result3, obj16), closure_17(NitroHomeHeader, { onClose, subscription: stateFromStores1 }), , , ];
  let tmp27Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp27Result) {
    const obj17 = { countdownText: tmp6ResultResult };
    tmp27Result = tmp27(tmp6(13003), obj17);
  }
  items8[2] = tmp27Result;
  const obj18 = { style: tmp5.tabContent, children: items9 };
  items9 = [closure_17(tmp(12113).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp27Result4) {
    const obj19 = { style: items10 };
    items10 = [tmp5.backSwipeSensor];
    tmp27Result4 = closure_17(c5, obj19);
  }
  items9[1] = tmp27Result4;
  items8[3] = closure_18(c5, obj18);
  const obj20 = { style: animatedStyle, onLayout: callback1, children: items11 };
  const obj21 = { style: tmp5.segmentedControlActual, onLayout: callback, children: closure_17(tmp(9084).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  const View = tmp6(4566).View;
  items11 = [closure_17(c5, obj21), , ];
  let tmp27Result5 = !isThemeDarkResult;
  if (tmp27Result5) {
    const obj22 = { start: null, end: null, colors: ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"], style: items12 };
    ({ START: obj27.start, END: obj27.end } = closure_12);
    items12 = [tmp5.segmentedControlVirtual, ];
    const obj23 = { height: tmp14, zIndex: 2 };
    items12[1] = obj23;
    tmp27Result5 = tmp27(tmp6(5293), obj22);
  }
  items11[1] = tmp27Result5;
  const tmpResult10 = tmp(1364);
  if (tmpResult10.isAndroid()) {
    const obj24 = { style: items13 };
    items13 = [, , ];
    ({ segmentedControlVirtual: arr15[0], androidSegmentedControlBackground: arr15[1] } = tmp5);
    const obj25 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items13[2] = obj25;
    tmp27Result6 = tmp27(tmp42, obj24);
  } else {
    let num3 = 0.5;
    const tmp6Result4 = navigation(5268);
    if (isThemeDarkResult) {
      num3 = 0.2;
    }
    const obj26 = { blurAmount: num3, style: items14, blurTheme: theme, tintColor: tmp48 };
    items14 = [tmp5.segmentedControlVirtual, ];
    const obj28 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items14[1] = obj28;
    tmp48 = undefined;
    if (theme === ONYX) {
      tmp48 = closure_21;
    }
    tmp27Result6 = tmp27(tmp6Result4, obj26);
  }
  items11[2] = tmp27Result6;
  items8[4] = closure_18(View, obj20);
  return closure_18(c5, obj15);
};
export const BACK_BUTTON_SIZE = 24;
