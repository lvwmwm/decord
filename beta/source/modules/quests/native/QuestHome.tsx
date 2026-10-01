// Module ID: 14538
// Function ID: 14539
// Name: QuestHome
// Dependencies: [32, 19, 17, 4825, 10679, 7116, 7136, 5756, 1074, 21, 4836, 576, 504, 1485, 14539, 573, 5026, 5034, 14594, 5281, 1115, 5039, 6800, 10681, 14596, 4832, 10682, 1613, 7112, 10683, 5763, 4528, 5909, 1241, 8230, 1249, 14617, 12501, 10743, 14618, 1486, 5759, 14541, 7135, 14610, 14614, 10753, 14619, 14698, 8179, 2]

// Module 14538 (QuestHome)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useNavigation from "useNavigation" /* 1485 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import AssetRegistryDefault from "AssetRegistry" /* 5909 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import QuestDataUtils from "QuestDataUtils" /* 7112 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10681 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10753 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14539 */;
import BountiesModalTypes from "BountiesModalTypes" /* 14541 */;
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState" /* 14594 */;
import QuestHomeBountiesDefault from "QuestHomeBounties" /* 14596 */;
import QuestHomeOpenTriggerPoint2 from "QuestHomeOpenTriggerPoint" /* 14617 */;
import QuestHomeRoundtripTrackerDefault from "QuestHomeRoundtripTracker" /* 14698 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 10679 */;
import QuestStore from "QuestStore" /* 7116 */;
import QuestUtmStore from "QuestUtmStore" /* 7136 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let item, navigation;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function EmptyStateNoQuestsAvailable() {
  let Button;
  let intl;
  let obj3;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = react.useCallback(() => navigation.goBack(), items);
  const obj2 = { action: authStore2(Button, obj3) };
  obj3 = { variant: "secondary", text: intl.string(intl4.t["/g10LC"]), onPress: callback };
  const tmp3 = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  return authStore2(tmp3, obj2);
}
function EmptyStateFiltered(onClearFilters) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  onClearFilters = onClearFilters.onClearFilters;
  const obj = { action: authStore2(Button, obj2), title: intl2.string(intl4.t.PBfFnx), subtitle: intl3.string(intl4.t.nwdKFC) };
  obj2 = { variant: "secondary", text: intl.string(intl4.t.urZl31), onPress: onClearFilters };
  const tmp = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return authStore2(tmp, obj);
}
function HeaderPreviewButton() {
  let Button;
  let QUEST_PREVIEW_TOOL_2;
  let intl;
  let obj3;
  const tmp = closure_17();
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popAll();
    const obj2 = openUserSettings;
    const obj3 = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    obj2.openUserSettings(obj3);
  }, []);
  let obj = hooks_QuestHooks;
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    let obj2 = { style: tmp.previewButton, children: authStore2(Button, obj3) };
    obj3 = { grow: true, onPress: callback, variant: "primary", text: intl.string(intl4.t.tx5Ax5) };
    Button = tmp3(5281).Button;
    intl = tmp3(1115).intl;
    tmp5 = authStore2(hasOwnProperty, obj2);
  }
  return tmp5;
}
function HeaderWithBounties(arg0) {
  let Text;
  let intl;
  let items;
  let items1;
  let obj3;
  let obtainableOrbRewards;
  let orbShopProducts;
  let shopCarouselConfig;
  let showOrbShopPlaceholderCarousel;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const obj = { children: items };
  items = [, , ];
  const tmp = closure_17();
  items[0] = authStore2(HeaderPreviewButton, {});
  items[1] = authStore2(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  const obj2 = { style: items1, children: authStore2(Text, obj3) };
  items1 = [, ];
  ({ sectionHeader: arr2[0], sectionHeaderWithTag: arr2[1] } = tmp);
  obj3 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl4.t.JALI2K) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  items[2] = authStore2(hasOwnProperty, obj2);
  return authStore3(closure_15, obj);
}
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, loadingContainer: obj2, sectionHeader: obj3, previewButton: obj4, sectionHeaderWithTag: obj5 };
obj2 = { justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles(obj);
let closure_22 = react.memo((onLayout) => {
  let tmp5Result;
  const obj = { onLayout: onLayout.onLayout, children: tmp5Result };
  const tmp6 = hasOwnProperty;
  if (onLayout.shouldShowBounties) {
    const obj2 = { shopCarouselConfig: tmp4, orbShopProducts: tmp, obtainableOrbRewards: tmp2, showOrbShopPlaceholderCarousel: tmp3 };
    tmp5Result = tmp5(HeaderWithBounties, obj2);
  } else {
    tmp5Result = tmp5(HeaderPreviewButton, {});
  }
  return authStore2(tmp6, obj);
});
const memoResult = react.memo(function QuestHome(filters) {
  let containerStyle;
  let intl;
  let isNavigationComplete;
  let items23;
  let items24;
  let obj18;
  let scrollToQuestId;
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  filters = filters.filters;
  const sortMethod = filters.sortMethod;
  let quests;
  let ref;
  let isLoading;
  let questHomeBounties;
  let enabled;
  let config;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  let ref2;
  let tmp = scrollToQuestId;
  let tmp2 = sortMethod;
  const onClearFilters = filters.onClearFilters;
  let obj = scrollToQuestId(sortMethod[26]);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  let tmp4 = enabled();
  let tmp5 = filters;
  const bottom = filters(sortMethod[27])().bottom;
  let tmp6 = scrollToQuestId(sortMethod[23]);
  const useFilteredQuests = tmp6.useFilteredQuests;
  let obj2 = quests;
  const items = [filters, sortMethod];
  const filteredQuests = useFilteredQuests(scrollToQuestId(sortMethod[23]).QuestTabs.ALL, quests.useMemo(() => ({ filters, sortMethod }), items));
  quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj3 = scrollToQuestId(sortMethod[12]);
  const items1 = [ref];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    quests = ref.quests;
    const arr = Array.from(quests.values());
    const found = arr.filter((item) => {
      const obj = scrollToQuestId(sortMethod[28]);
      return !obj.isQuestExpired(item);
    });
    const mapped = found.map((id) => id.id);
    return mapped.sort();
  }, []);
  const items2 = [stateFromStoresArray];
  const effect = quests.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const obj = QuestActionCreators;
      obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
    }
  }, items2);
  quests.useRef(null);
  const items3 = [scrollToQuestId, quests, excludedQuests];
  const memo = quests.useMemo(() => {
    if (null == scrollToQuestId) {
      return null;
    } else {
      const obj = QuestDataUtils;
      const result = obj.findQuestOrReplacement(tmp, quests, excludedQuests);
      let findIndexResult = null;
      const obj2 = quests;
      if (null != result) {
        findIndexResult = obj2.findIndex((id) => id.id === result.id);
      }
      return findIndexResult;
    }
  }, items3);
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const effect1 = quests.useEffect(() => {
    let intl;
    const tmp2 = null != scrollToQuestId && "" !== tmp && hasFetched && !isFetchingCurrentQuests;
    if (tmp2) {
      const obj = QuestDataUtils;
      const tmp8 = null == obj.findQuestOrReplacement(tmp, quests, excludedQuests) && ref.current !== tmp;
      if (tmp8) {
        const obj2 = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: intl.string(intl4.t.sIyHuY), icon: AssetRegistryDefault, toastDurationMs: 5000 };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp4(1115).intl;
        open(obj2);
        const obj4 = { quest_id: scrollToQuestId };
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(callback6.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj4);
        ref.current = scrollToQuestId;
      }
    }
  }, items4);
  let obj4 = scrollToQuestId(sortMethod[12]);
  const items5 = [hasFetched];
  const stateFromStores = obj4.useStateFromStores(items5, () => hasFetched.useReducedMotion);
  ref = quests.useRef(null);
  const ref1 = quests.useRef({ parent: { scrollY: 0 }, children: {} });
  const callback = quests.useCallback((arg0) => {
    const keys = Object.keys(ref1.current.children);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = null != arg0;
      if (tmp4) {
        tmp4 = tmp3 !== arg0;
      }
      if (!tmp4) {
        let tmp8 = ref1.current.children[tmp3];
        if (tmp8 != null) {
          let calculateVisibility = tmp8.calculateVisibility;
          if (calculateVisibility != null) {
            let calculateVisibilityResult = calculateVisibility();
          }
        }
      }
      continue;
    }
  }, []);
  const items6 = [callback];
  const items7 = [callback];
  const callback1 = quests.useCallback((nativeEvent) => {
    ref1.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
    callback();
  }, items6);
  const callback2 = quests.useCallback((nativeEvent) => {
    ref1.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback();
  }, items7);
  const tmp18 = isEligibleForQuests(quests.useState(false), 2);
  const first = tmp18[0];
  let closure_6 = tmp18[1];
  const items8 = [callback];
  const callback3 = quests.useCallback(() => {
    closure_6(true);
  }, []);
  const callback4 = quests.useCallback((nativeEvent, arg1) => {
    const children = ref1.current.children;
    const obj = { layout: nativeEvent.nativeEvent.layout };
    const merged = Object.assign(ref1.current.children[arg1]);
    children[arg1] = obj;
    callback(arg1);
  }, items8);
  const items9 = [stateFromStores];
  const callback5 = quests.useCallback((index) => {
    if (null != ref.current) {
      const current = tmp.current;
      const scrollToIndex = current.scrollToIndex;
      const obj = { index, animated: !stateFromStores, viewOffset: filters(sortMethod[11]).space.PX_8 };
      scrollToIndex(obj);
    }
  }, items9);
  const items10 = [callback];
  const callback6 = quests.useCallback((nativeEvent) => {
    ref1.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
    callback();
  }, items10);
  const items11 = [first, stateFromStores, memo, callback5];
  const effect2 = quests.useEffect(() => {
    const tmp2 = null != memo && -1 !== tmp && first;
    if (tmp2) {
      callback5(memo);
      stateFromStoresArray.setState({ scrollToQuestId: null });
    }
  }, items11);
  const tmp25 = ref((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  const obj5 = { name: scrollToQuestId(sortMethod[35]).ImpressionNames.QUEST_HOME, type: scrollToQuestId(sortMethod[35]).ImpressionTypes.VIEW, properties: { utm_source_current: tmp25.utmSourceCurrent, utm_medium_current: tmp25.utmMediumCurrent, utm_campaign_current: tmp25.utmCampaignCurrent, utm_content_current: tmp25.utmContentCurrent, tab: scrollToQuestId(sortMethod[23]).QuestTabs.ALL } };
  const tmp26 = filters(sortMethod[34]);
  ({ utm_source_current: tmp25.utmSourceCurrent, utm_medium_current: tmp25.utmMediumCurrent, utm_campaign_current: tmp25.utmCampaignCurrent, utm_content_current: tmp25.utmContentCurrent, tab: scrollToQuestId(sortMethod[23]).QuestTabs.ALL });
  tmp26(obj5);
  const items12 = [isEligibleForQuests];
  const effect3 = quests.useEffect(() => {
    const tmp = isEligibleForQuests;
    if (tmp) {
      const QuestHomeOpenTriggerPoint = QuestHomeOpenTriggerPoint2.QuestHomeOpenTriggerPoint;
      QuestHomeOpenTriggerPoint.trigger();
    }
  }, items12);
  const items13 = [filters, sortMethod, hasFetched, ref];
  const effect4 = quests.useEffect(() => {
    let tmp2 = null != ref.current;
    const tmp = ref;
    if (tmp2) {
      tmp2 = hasFetched;
    }
    if (tmp2) {
      const current = tmp.current;
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items13);
  const obj7 = scrollToQuestId(sortMethod[23]);
  const obj8 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj7.useQuestHomeSortingFilteringAnalytics(obj8);
  const obj9 = scrollToQuestId(sortMethod[37]);
  enabled = obj9.useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(sortMethod[38]).QuestHomeBountiesFeatureGateExperiment;
  const obj10 = { location: callback4.QUEST_HOME_MOBILE };
  const enabled2 = QuestHomeBountiesFeatureGateExperiment.useConfig(obj10).enabled;
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[39]).OrbsHoldoutExperiment;
  const obj11 = { location: callback4.QUEST_HOME_MOBILE };
  const enabled3 = OrbsHoldoutExperiment.useConfig(obj11).enabled;
  const obj12 = scrollToQuestId(sortMethod[40]);
  const params = obj12.useRoute().params;
  let previewAdCreativeIds;
  const tmp31 = callback4;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  const tmpResult = tmp(tmp2[23]);
  const fetchQuestHomeBounties = tmpResult.useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items14 = [previewAdCreativeIds, isLoading, questHomeBounties];
  const effect5 = obj2.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        const tmp8 = isLoading;
        if (!tmp8) {
          const found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
          if (null != found) {
            const obj = { bountyId: found.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
            const showModal = BountiesModalActionCreatorsDefault.showModal;
            BountiesModalActionCreatorsDefault;
            showModal(obj);
          }
        }
      }
    }
  }, items14);
  if (enabled) {
    enabled = enabled2;
  }
  if (enabled) {
    enabled = !enabled3;
  }
  if (enabled) {
    const tmpResult5 = tmp(tmp2[43]);
    enabled = tmpResult5.shouldShowBountiesGivenFilters(filters);
  }
  const BountiesShopCarouselExperiment = tmp(tmp2[44]).BountiesShopCarouselExperiment;
  const obj13 = { location: tmp31.QUEST_HOME_MOBILE };
  config = BountiesShopCarouselExperiment.useConfig(obj13);
  let tmp37 = enabled;
  const useQuestHomeOrbShopCarouselData = tmp(tmp2[45]).useQuestHomeOrbShopCarouselData;
  tmp(tmp2[45]);
  if (enabled) {
    tmp37 = "none" !== config.placement;
  }
  const obj14 = { enabled: tmp37, sortType: config.sortType };
  const questHomeOrbShopCarouselData = useQuestHomeOrbShopCarouselData(obj14);
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  let tmp39 = enabled && !isLoading;
  if (tmp39) {
    tmp39 = questHomeBounties.length > 0;
  }
  let closure_0 = tmp39;
  const tmpResult7 = tmp(tmp2[13]);
  navigation = tmpResult7.useNavigation();
  let closure_2 = obj2.useRef(false);
  let closure_3 = obj2.useRef(false);
  let closure_4 = obj2.useRef(false);
  const items15 = [tmp39];
  const effect6 = obj2.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      closure_2.current = true;
    }
  }, items15);
  const effect7 = obj2.useEffect(() => {
    function handleBountiesModalPush(key) {
      if (key.key === handleBountiesModalPush(closure_2[14]).BOUNTIES_MODAL_KEY) {
        closure_1_3.current = true;
      }
    }
    let obj = navigation(closure_2[15]);
    const subscription = obj.subscribe("MODAL_PUSH", handleBountiesModalPush);
    return () => {
      const obj = filters(sortMethod[15]);
      obj.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
    };
  }, []);
  const effect8 = obj2.useEffect(() => {
    function handleClaimSuccess() {
      closure_1_4.current = true;
    }
    let obj = navigation(closure_2[15]);
    const subscription = obj.subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    return () => {
      const obj = filters(sortMethod[15]);
      obj.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    };
  }, []);
  const items16 = [navigation];
  const effect9 = obj2.useEffect(() => {
    let ref3;
    return navigation.addListener("beforeRemove", () => {
      if (ref.current) {
        if (ref3.current) {
          const obj = closure_0(ref[16]);
          obj.fireSurveyAction(closure_0(ref[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
        } else {
          const current = ref2.current;
          const fireSurveyAction = closure_0(ref[16]).fireSurveyAction;
          closure_0(ref[16]);
          const SurveyActionTypes = closure_0(ref[17]).SurveyActionTypes;
          if (current) {
            fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
          } else {
            fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
          }
        }
      }
    });
  }, items16);
  const items17 = [enabled, callback6, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items18 = [ref1];
  const callback7 = obj2.useCallback(() => {
    const obj = { shouldShowBounties: enabled, onLayout: callback6, shopCarouselConfig: config, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel };
    return authStore2(closure_22, obj);
  }, items17);
  const items19 = [quests, callback4];
  const callback8 = obj2.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = {
      questOrQuests: item,
      questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef: ref1,
      skipRemountKey: true,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      children() {
        const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(sortMethod[41]).QuestContent.QUEST_HOME_MOBILE };
        const QuestCard = scrollToQuestId(sortMethod[47]).QuestCard;
        return previewAdCreativeIds(QuestCard, obj);
      }
    };
    const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
    return authStore2(QuestContentImpressionTrackerNative, obj);
  }, items18);
  let tmp48 = !isNavigationComplete;
  const callback9 = obj2.useCallback((arg0) => {
    const index = arg0;
    let obj = {
      onLayout(arg0) {
        const obj = index;
        if (null != quests[index.index]) {
          callback4(arg0, quests[index.index].id);
        }
        obj.onLayout(arg0);
      }
    };
    const merged = Object.assign(arg0);
    return previewAdCreativeIds(excludedQuests, obj);
  }, items19);
  if (isNavigationComplete) {
    tmp48 = enabled && isLoading;
  }
  if (!tmp48) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp48 = isFetchingCurrentQuests;
  }
  isFetchingCurrentQuests = tmp48;
  ref2 = obj2.useRef(enabled);
  const items20 = [enabled];
  const effect10 = obj2.useEffect(() => {
    ref2.current = enabled;
  }, items20);
  const items21 = [isEligibleForQuests];
  const effect11 = obj2.useEffect(() => {
    if (isEligibleForQuests) {
      let obj = QuestHomeRoundtripTrackerDefault;
      const obj2 = { includesBounties: ref2.current };
      obj.startTracking(obj2);
      return () => {
        const obj = filters(sortMethod[48]);
        obj.clearTracking();
      };
    }
  }, items21);
  const items22 = [isEligibleForQuests, tmp48];
  const effect12 = obj2.useEffect(() => {
    const tmp = isEligibleForQuests && !isFetchingCurrentQuests;
    if (tmp) {
      const obj2 = { includesBounties: ref2.current };
      const obj = QuestHomeRoundtripTrackerDefault;
      obj.stopTracking(obj2);
    }
  }, items22);
  tmp(tmp2[23]);
  let tmp55 = null;
  if (isEligibleForQuests) {
    let tmp65Result;
    if (tmp48) {
      const obj15 = { style: items23, children: previewAdCreativeIds(isFetchingCurrentQuests, { animating: true }) };
      items23 = [tmp4.loadingContainer, containerStyle];
      tmp65Result = previewAdCreativeIds(excludedQuests, obj15);
    } else if (0 === quests.length) {
      let tmp59;
      if (0 === filters.length) {
        tmp59 = previewAdCreativeIds(config, {});
      } else {
        const obj16 = { onClearFilters };
        tmp59 = previewAdCreativeIds(products, obj16);
      }
      tmp65Result = tmp59;
    } else {
      let num4 = 0;
      const obj17 = { ref, contentContainerStyle: obj18, style: items24, accessibilityLabel: intl.string(tmp(tmp2[20]).t.JALI2K), data: quests, renderItem: callback8, showsHorizontalScrollIndicator: false, ListHeaderComponent: callback7, CellRendererComponent: callback9, onLayout: callback2, onScroll: callback1, onLoad: callback3, scrollEventThrottle: 16 };
      const FlashList = tmp(tmp2[49]).FlashList;
      const tmp65 = previewAdCreativeIds;
      if (tmp54) {
        num4 = tmp5(tmp2[11]).space.PX_16;
      }
      items24 = [tmp4.container, containerStyle];
      obj18 = { paddingTop: num4, paddingBottom: bottom };
      intl = tmp(tmp2[20]).intl;
      tmp65Result = tmp65(FlashList, obj17);
    }
    tmp55 = tmp65Result;
  }
  return tmp55;
});
let result = size.fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;
