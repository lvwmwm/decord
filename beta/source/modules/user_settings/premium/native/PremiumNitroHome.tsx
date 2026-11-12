// Module ID: 15593
// Function ID: 15594
// Name: PremiumNitroHome
// Dependencies: [32, 19, 17, 5171, 2176, 15594, 1072, 5016, 1387, 21, 671, 575, 5170, 1499, 7076, 7101, 5783, 1113, 15595, 8628, 15596, 15617, 10762, 15618, 15619, 15620, 15625, 15630, 1252, 15653, 15654, 15656, 15657, 7671, 1627, 15658, 9102, 504, 7686, 8637, 15659, 9092, 5452, 1652, 5793, 5177, 15660, 5202, 5003, 8627, 5004, 5874, 15661, 15662, 14464, 9327, 5747, 1377, 5759, 2]
// Exports: default

// Module 15593 (PremiumNitroHome)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import useNavigation from "useNavigation" /* 1499 */;
import _mod1652 from "module_1652" /* 1652 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 5004 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5202 */;
import spring_spring from "spring/spring" /* 5793 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 7101 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8627 */;
import PremiumNitroNavigationStore2 from "PremiumNitroNavigationStore" /* 15594 */;
import PremiumReferralTrialPill from "PremiumReferralTrialPill" /* 15595 */;
import PremiumPerkCardDefault from "PremiumPerkCard" /* 15596 */;
import reactDefault from "react" /* 15618 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 15619 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 15620 */;
import PremiumPerkCarouselDefault from "PremiumPerkCarousel" /* 15653 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import module_671 from "module_671" /* 671 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumNitroNavigationStore = PremiumNitroNavigationStore2;
let _require, dependencyMap, importDefault, navigation, set;

let closure_12;
let closure_16;
let closure_17;
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
  ({ subscription, onClose } = arg0);
  const tmp = closure_23();
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation, onClose];
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
  let tmp10Result = hasActiveTrial;
  const obj2 = { style: tmp.contentContainer, children: items2 };
  const obj3 = { style: tmp.headerContainer, children: items1 };
  const obj4 = { style: tmp.backButtonWrapper, onPress: callback, children: authStore4(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md", color: "white" }) };
  const PressableOpacity = tmp2(7076).PressableOpacity;
  items1 = [authStore4(PressableOpacity, obj4), , ];
  const obj5 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: intl.string(intl5.t["BnquQ/"]) };
  const Text = tmp2(5783).Text;
  intl = tmp2(1113).intl;
  items1[1] = authStore4(Text, obj5);
  const obj6 = { style: tmp.backButtonWrapper };
  items1[2] = authStore4(hasOwnProperty, obj6);
  items2 = [closure_17(hasOwnProperty, obj3), ];
  const tmp8 = closure_17;
  if (tmp10Result) {
    const obj7 = { style: tmp.pillParent, children: authStore4(PremiumReferralTrialPill.PremiumReferralTrialPill, { hasExtraMargin: true }) };
    tmp10Result = tmp10(tmp9, obj7);
  }
  items2[1] = tmp10Result;
  return tmp8(hasOwnProperty, obj2);
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
  const tmp = closure_25();
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
  const tmp10 = closure_17;
  const tmp11 = closure_6;
  if (tmp12) {
    tmp12 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp12) {
    const obj6 = { style: obj7, cardStyle: tmp.marketingBannerCard, bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner, analyticsPage: "Nitro Home Banner Tile", componentId: null, promotionId: null };
    obj7 = { width: require("PremiumPerkCard").PERK_CARD_SIZES[require("PremiumPerkCard").PerkCardVariant.WIDE].width };
    ({ id: obj5.componentId, promotionId: obj5.promotionId } = promotionMarketingComponent);
    const tmp8Result = MarketingPageBannerTileDefault;
    tmp12 = closure_16(tmp8Result, obj6);
  }
  items1 = [tmp12, closure_16(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    const obj8 = { onLayout: createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_16(require("ReferralProgramPerkCard").ReferralProgramPerkCard, {}) };
    tmp15Result = tmp15(closure_5, obj8);
  }
  items1[2] = tmp15Result;
  const obj9 = {};
  const tmp8Result5 = PremiumPerkCardDefault;
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = closure_16(tmp8Result5, obj9);
  const obj10 = {};
  const tmp8Result6 = PremiumPerkCardDefault;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = closure_16(tmp8Result6, obj10);
  const obj11 = {};
  const tmp8Result7 = PremiumPerkCardDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = closure_16(tmp8Result7, obj11);
  const obj19 = {};
  const tmp8Result8 = PremiumPerkCardDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = closure_16(tmp8Result8, obj19);
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
  const tmp = closure_27();
  let obj = require("PremiumPerkCard");
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = react.useCallback((section_name) => {
    const obj = hasTrackedScrolledToBottom(dependencyMap[28]);
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
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_1, arg0);
    }
  };
  const tmp10 = PremiumPerkCarouselDefault;
  intl = require("intl").intl;
  const tmp11 = FractionalPremiumStates;
  const tmp6 = closure_17;
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
  items4 = [closure_16(tmp10, obj3), , , ];
  const obj4 = {
    title: intl2.string(require("intl").t["+vt7w9"]),
    perks: items7,
    onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_2, arg0);
    }
  };
  const tmp9Result = PremiumPerkCarouselDefault;
  intl2 = tmp2(1113).intl;
  const tmp2Result = require("AppIconUtils");
  if (tmp2Result.isAppIconsSupported()) {
    const items5 = [premiumPerkCard.customAppIcons];
    items6 = items5;
  } else {
    items6 = [];
  }
  items7 = [...items6, premiumPerkCard.emoji, premiumPerkCard.customSounds, premiumPerkCard.sticker];
  items4[1] = closure_16(tmp9Result, obj4);
  const obj5 = {
    title: intl3.string(require("intl").t.LgHbnL),
    perks: items8,
    onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_3, arg0);
    }
  };
  const tmp9Result3 = PremiumPerkCarouselDefault;
  intl3 = tmp2(1113).intl;
  items8 = [, , , , ];
  ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
  items4[2] = closure_16(tmp9Result3, obj5);
  const obj6 = {
    title: intl4.string(require("intl").t.LTaxu9),
    perks: items11,
    onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_4, arg0);
    }
  };
  const tmp9Result4 = PremiumPerkCarouselDefault;
  intl4 = tmp2(1113).intl;
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
  items4[3] = closure_16(tmp9Result4, obj6);
  return tmp6(tmp7, obj2);
}
let react = react_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const NitroHomeSectionId = PremiumNitroNavigationStore2.NitroHomeSectionId;
({ AnalyticEvents: unpackModuleId, HorizontalGradient: closure_12, ThemeTypes: map1 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
const NewTab_str = "NewTab";
const PerksTab_str = "PerksTab";
const importDefaultResultResult = module_671(nativeDefault.unsafe_rawColors.PLUM_24);
const alphaResult = importDefaultResultResult.alpha(0.6);
let closure_20 = alphaResult.hex();
let closure_21 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let createStyles = createStyles_mod;
let obj = { container: size, background: { position: "absolute", width: "100%" }, tabContent: { flex: 1 }, featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" }, segmentedControlActual: { zIndex: 3, paddingHorizontal: 16 }, segmentedControlVirtual: rect, androidSegmentedControlBackground: obj2, backSwipeSensor: { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" } };
size = { display: "flex", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: nativeDefault.radii.lg };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_22 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: size1, headerText: { textAlign: "center", width: "80%", lineHeight: 28 }, pillParent: { display: "flex", flexDirection: "column", alignItems: "center" } };
size1 = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_23 = createStyles.createStyles(obj3);
createStyles = createStyles_mod;
let obj4 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: obj5 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let closure_25 = createStyles.createStyles(obj4);
createStyles = createStyles_mod;
let closure_27 = createStyles.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
let closure_29 = { code: "(function PremiumNitroHomeTsx1(){let[floatTabBottomOffset]=this.__closure;return{bottom:floatTabBottomOffset.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let _undefined;
  let _undefined2;
  let c2;
  let c4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items3;
  let items9;
  let obj10;
  let obj8;
  let onLayout;
  let premiumTypeSubscription;
  let ref;
  let tmp12;
  let tmp16;
  let tmp25Result4;
  let tmp25Result6;
  let tmp30;
  let tmp31;
  let tmp49;
  let bottom;
  navigation = undefined;
  dependencyMap = undefined;
  let stateFromStores;
  react = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  let tmp = bottom;
  const tmp2 = dependencyMap;
  onClose = onClose.onClose;
  let obj = bottom(15656);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(15657).OpenNitroTriggerPoint);
  let obj2 = bottom(7671);
  const giftCardMobileConsumptionHalfsheet = obj2.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_22();
  bottom = navigation(1627)().bottom;
  let obj3 = bottom(15658);
  const youBarSettingsCustomHeaderPaddingTop = obj3.useYouBarSettingsCustomHeaderPaddingTop();
  let obj4 = bottom(1499);
  navigation = obj4.useNavigation();
  const items = [navigation];
  const layoutEffect = react.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  const tmp10 = navigation(9102)();
  const width = tmp10.width;
  let num = 0;
  ({ ref, onLayout } = tmp10);
  if (undefined !== width) {
    num = width;
  }
  [tmp12, c2] = stateFromStores(obj5.useState(0), 2);
  const tmp11 = stateFromStores(obj5.useState(0), 2);
  const callback = obj5.useCallback((nativeEvent) => {
    c2(nativeEvent.nativeEvent.layout.height);
  }, []);
  let tmpResult = tmp(504);
  const items1 = [promotionMarketingComponent];
  stateFromStores = tmpResult.useStateFromStores(items1, () => promotionMarketingComponent.useReducedMotion);
  [tmp16, c4] = stateFromStores(react.useState(true), 2);
  stateFromStores(react.useState(true), 2);
  const items2 = [SubscriptionStore];
  const tmpResult12 = tmp(504);
  const stateFromStores1 = tmpResult12.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const callback1 = obj5.useCallback((arg0) => {
    if (0 === arg0) {
      const obj2 = { target: NewTab_str };
      const obj = AnalyticsUtilsDefault;
      obj.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj2);
      _undefined2(true);
    } else if (1 === arg0) {
      const obj4 = { target: PerksTab_str };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj4);
      _undefined2(false);
    }
  }, []);
  const tmp19 = navigation(7686)();
  const tmpResult13 = tmp(8637);
  const isInReverseTrial = tmpResult13.useIsInReverseTrial();
  const tmpResult14 = tmp(15659);
  const maybeFetchTieredTenureBadgeData = tmpResult14.useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = obj5.useEffect(() => () => {
    closure_1_9.resetState();
  }, []);
  const obj6 = { items: items3, pageWidth: num, onPageChange: callback1 };
  const obj7 = { label: intl.string(tmp(1113).t.tahjbP), id: intl2.string(tmp(1113).t.tahjbP), page: closure_16(NewTab, obj8) };
  const useSegmentedControlState = tmp(9092).useSegmentedControlState;
  tmp(9092);
  intl = tmp(1113).intl;
  intl2 = tmp(1113).intl;
  items3 = [obj7, ];
  obj8 = { extraBottomHeight: tmp12 + 16, scrollToSectionId: field };
  const obj9 = { label: intl3.string(tmp(1113).t.w3RBdW), id: intl4.string(tmp(1113).t.w3RBdW), page: closure_16(PerksTab, obj10) };
  intl3 = tmp(1113).intl;
  intl4 = tmp(1113).intl;
  obj10 = { extraBottomHeight: tmp12 + 16, fractionalState: tmp19.fractionalState, isInReverseTrial };
  items3[1] = obj9;
  const segmentedControlState = useSegmentedControlState(obj6);
  const memo = obj5.useMemo(() => {
    const Gesture = bottom(c2[42]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  let num2 = -32;
  const useSharedValue = tmp(1652).useSharedValue;
  tmp(1652);
  if (stateFromStores) {
    num2 = bottom + 8;
  }
  sharedValue = useSharedValue(num2);
  const items4 = [closure_29, sharedValue];
  let c0;
  [tmp30, tmp31] = items4;
  const tmpResult17 = tmp(1652);
  class PremiumNitroHomeTsx1 {
    constructor() {
      const obj = { bottom: _undefined.get() };
      return obj;
    }
  }
  const items5 = [tmp31];
  PremiumNitroHomeTsx1.__closure = items5;
  PremiumNitroHomeTsx1.__workletHash = 8299776735080;
  PremiumNitroHomeTsx1.__initData = tmp30;
  const items6 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = tmpResult17.useAnimatedStyle(PremiumNitroHomeTsx1);
  const effect1 = obj5.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      set = sharedValue.set;
      const withDelay = _mod1652.withDelay;
      _mod1652;
      const obj = spring_spring;
      const result = set(withDelay(500, obj.withSpring(bottom + 8, { duration: 1333, dampingRatio: 0.4 })));
    }
  }, items6);
  const tmpResult18 = tmp(5177);
  const theme = tmpResult18.useThemeContext().theme;
  const tmpResult19 = tmp(5177);
  const isThemeDarkResult = tmpResult19.isThemeDark(theme);
  const ONYX = constants2.ONYX;
  const tmp6Result = navigation(15660);
  const tmp6ResultResult = tmp6Result(tmp19.endsAt, tmp(15660).CountDownMessageTypes.ENDS_IN);
  const tmpResult20 = tmp(8628);
  isEligibleSenderForReferralProgram = tmpResult20.useIsEligibleSenderForReferralProgram();
  const items7 = [isEligibleSenderForReferralProgram];
  const effect2 = obj5.useEffect(() => {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult = DismissibleContentUnsafeUtils;
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(5003).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE, obj2);
    }
    const tmpResult4 = DismissibleContentUnsafeUtils;
    if (!tmpResult4.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const obj3 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult5 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult5.UNSAFE_markDismissibleContentAsDismissed(tmp(5003).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE, obj3);
    }
    const tmp7 = isEligibleSenderForReferralProgram;
    if (tmp7) {
      const tmpResult6 = ReferralProgramUtils;
      const result2 = tmpResult6.markReferralProgramEntrypointBadgeAcknowledged();
    }
  }, items7);
  const effect3 = obj5.useEffect(() => {
    const obj = bottom(c2[47]);
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(c2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const tmpResult = bottom(c2[47]);
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
    }
  }, []);
  const tmpResult21 = tmp(15617);
  promotionMarketingComponent = tmpResult21.usePromotionMarketingComponent(tmp(10762).MarketingComponentType.PREMIUM_TAB);
  const items8 = [promotionMarketingComponent];
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
  }, items8);
  const obj11 = { style: items9, children: items10 };
  items9 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  const obj12 = { style: tmp5.background, source: navigation(15661) };
  const tmp6Result3 = navigation(5874);
  items10 = [closure_16(tmp6Result3, obj12), closure_16(NitroHomeHeader, { onClose, subscription: stateFromStores1 }), , , ];
  let tmp25Result = tmp19.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp25Result) {
    const obj13 = { countdownText: tmp6ResultResult };
    tmp25Result = tmp25(tmp6(15662), obj13);
  }
  items10[2] = tmp25Result;
  const obj14 = { style: tmp5.tabContent, children: items11 };
  items11 = [closure_16(tmp(14464).SegmentedControlPages, { state: segmentedControlState, nativeGesture: memo }), ];
  if (tmp25Result4) {
    const obj15 = { style: tmp5.backSwipeSensor };
    tmp25Result4 = closure_16(sharedValue, obj15);
  }
  items11[1] = tmp25Result4;
  items10[3] = closure_17(sharedValue, obj14);
  const obj16 = { style: animatedStyle, onLayout: callback, children: items12 };
  const obj17 = { style: tmp5.segmentedControlActual, ref, onLayout, children: closure_16(tmp(9327).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  const View = tmp6(1652).View;
  items12 = [closure_16(sharedValue, obj17), , ];
  let tmp25Result5 = !isThemeDarkResult;
  if (tmp25Result5) {
    const obj18 = { start: null, end: null, colors: ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"], style: items13 };
    ({ START: obj27.start, END: obj27.end } = closure_12);
    items13 = [tmp5.segmentedControlVirtual, ];
    const obj19 = { height: tmp12, zIndex: 2 };
    items13[1] = obj19;
    tmp25Result5 = tmp25(tmp6(5747), obj18);
  }
  items12[1] = tmp25Result5;
  const tmpResult22 = tmp(1377);
  if (tmpResult22.isAndroid()) {
    const obj20 = { style: items14 };
    items14 = [, , ];
    ({ segmentedControlVirtual: arr16[0], androidSegmentedControlBackground: arr16[1] } = tmp5);
    const obj21 = { height: tmp12, zIndex: 1, overflow: "hidden" };
    items14[2] = obj21;
    tmp25Result6 = tmp25(tmp43, obj20);
  } else {
    let num4 = 0.5;
    const tmp6Result4 = navigation(5759);
    if (isThemeDarkResult) {
      num4 = 0.2;
    }
    const obj22 = { blurAmount: num4, style: items15, blurTheme: theme, tintColor: tmp49 };
    items15 = [tmp5.segmentedControlVirtual, ];
    const obj23 = { height: tmp12, zIndex: 1, overflow: "hidden" };
    items15[1] = obj23;
    tmp49 = undefined;
    if (theme === ONYX) {
      tmp49 = closure_20;
    }
    tmp25Result6 = tmp25(tmp6Result4, obj22);
  }
  items12[2] = tmp25Result6;
  items10[4] = closure_17(View, obj16);
  return closure_17(sharedValue, obj11);
};
export const BACK_BUTTON_SIZE = 24;
