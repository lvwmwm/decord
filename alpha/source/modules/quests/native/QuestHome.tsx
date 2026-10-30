// Module ID: 16851
// Function ID: 16852
// Name: QuestHome
// Dependencies: [32, 19, 17, 5010, 9659, 7839, 7860, 6775, 1072, 21, 5009, 575, 504, 1498, 16852, 572, 7920, 7927, 16910, 5629, 1114, 6738, 7557, 9661, 16912, 5619, 16935, 16953, 9653, 1626, 7845, 9662, 6782, 7835, 5707, 1253, 6023, 1261, 16994, 14716, 14638, 16995, 16959, 1499, 6778, 16854, 7859, 16927, 16932, 14647, 16996, 17073, 5038, 7288, 2]

// Module 16851 (QuestHome)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import useNavigation from "useNavigation" /* 1498 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import QuestDataUtils from "QuestDataUtils" /* 7835 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9661 */;
import QuestActionCreators from "QuestActionCreators" /* 9662 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14647 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 16852 */;
import BountiesModalTypes from "BountiesModalTypes" /* 16854 */;
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState" /* 16910 */;
import QuestHomeBountiesDefault from "QuestHomeBounties" /* 16912 */;
import HexagonCampaignQuestHomeHeaderDefault from "HexagonCampaignQuestHomeHeader" /* 16935 */;
import QuestHomeOpenTriggerPoint2 from "QuestHomeOpenTriggerPoint" /* 16994 */;
import QuestHomeRoundtripTrackerDefault from "QuestHomeRoundtripTracker" /* 17073 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 9659 */;
import QuestStore from "QuestStore" /* 7839 */;
import QuestUtmStore from "QuestUtmStore" /* 7860 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let item, navigation;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp4;
const OrbsArcadeQuestHomeSectionDefault = tmp4(16953);
function EmptyStateNoQuestsAvailable(hasContentAbove) {
  let Button;
  let intl;
  let obj3;
  hasContentAbove = hasContentAbove.hasContentAbove;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = react.useCallback(() => navigation.goBack(), items);
  const obj2 = { hasContentAbove, action: authStore3(Button, obj3) };
  obj3 = { variant: "secondary", text: intl.string(intl4.t["/g10LC"]), onPress: callback };
  const tmp3 = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  return authStore3(tmp3, obj2);
}
function EmptyStateFiltered(arg0) {
  let Button;
  let hasContentAbove;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let onClearFilters;
  ({ onClearFilters, hasContentAbove } = arg0);
  const obj = { hasContentAbove, action: authStore3(Button, obj2), title: intl2.string(intl4.t.PBfFnx), subtitle: intl3.string(intl4.t.nwdKFC) };
  obj2 = { variant: "secondary", text: intl.string(intl4.t.urZl31), onPress: onClearFilters };
  const tmp = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return authStore3(tmp, obj);
}
function HeaderPreviewButton() {
  let Button;
  let QUEST_PREVIEW_TOOL_2;
  let intl;
  let obj3;
  const tmp = closure_16();
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
    let obj2 = { style: tmp.previewButton, children: authStore3(Button, obj3) };
    obj3 = { grow: true, onPress: callback, variant: "primary", text: intl.string(intl4.t.tx5Ax5) };
    Button = tmp3(5629).Button;
    intl = tmp3(1114).intl;
    tmp5 = authStore3(hasOwnProperty, obj2);
  }
  return tmp5;
}
function HeaderWithBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let shopCarouselConfig;
  let showOrbShopPlaceholderCarousel;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  return authStore3(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
}
function QuestsSectionHeader() {
  let Text;
  let intl;
  let items;
  let obj2;
  const obj = { style: items, children: authStore3(Text, obj2) };
  items = [, ];
  ({ sectionHeader: arr[0], sectionHeaderWithTag: arr[1] } = closure_16());
  obj2 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl4.t.JALI2K) };
  closure_16();
  Text = Text_Text.Text;
  intl = intl4.intl;
  return authStore3(hasOwnProperty, obj);
}
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, loadingContainer: obj2, sectionHeader: obj3, previewButton: obj4, sectionHeaderWithTag: obj5 };
obj2 = { justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles(obj);
let closure_22 = react.memo(function MeasuredHeader(onLayout) {
  let items;
  let obtainableOrbRewards;
  let orbShopProducts;
  let shopCarouselConfig;
  let shouldShowBounties;
  let shouldShowOrbsArcade;
  let showOrbShopPlaceholderCarousel;
  const obj = { onLayout: onLayout.onLayout, children: items };
  ({ shouldShowBounties, shouldShowOrbsArcade, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = onLayout);
  items = [authStore3(HeaderPreviewButton, {}), authStore3(HexagonCampaignQuestHomeHeaderDefault, {}), , , ];
  let tmp3Result = null;
  const tmp = closure_15;
  const tmp2 = hasOwnProperty;
  if (shouldShowBounties) {
    const obj2 = { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
    tmp3Result = tmp3(HeaderWithBounties, obj2);
  }
  items[2] = tmp3Result;
  let tmp3Result2 = null;
  if (shouldShowOrbsArcade) {
    const obj3 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
    tmp3Result2 = tmp3(OrbsArcadeQuestHomeSectionDefault, obj3);
  }
  items[3] = tmp3Result2;
  items[4] = authStore3(QuestsSectionHeader, {});
  return tmp(tmp2, obj);
});
const memoResult = react.memo(function QuestHome(filters) {
  let _undefined;
  let containerStyle;
  let isNavigationComplete;
  let items23;
  let items24;
  let items25;
  let scrollToQuestId;
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  filters = filters.filters;
  const sortMethod = filters.sortMethod;
  let quests;
  let ref;
  let isLoading;
  let questHomeBounties;
  let c17;
  let config;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  let ref2;
  let tmp = scrollToQuestId;
  let tmp2 = sortMethod;
  const onClearFilters = filters.onClearFilters;
  let obj = scrollToQuestId(sortMethod[28]);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  let tmp4 = questHomeBounties();
  let tmp5 = filters;
  const bottom = filters(sortMethod[29])().bottom;
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
      const obj = scrollToQuestId(sortMethod[30]);
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
        const obj2 = { text: intl.string(intl4.t.sIyHuY), variant: "critical", duration: 5000 };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp4(1114).intl;
        open("QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", obj2);
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
      const obj = { index, animated: !stateFromStores, viewOffset: -filters(sortMethod[11]).space.PX_8 };
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
  const obj5 = { name: scrollToQuestId(sortMethod[37]).ImpressionNames.QUEST_HOME, type: scrollToQuestId(sortMethod[37]).ImpressionTypes.VIEW, properties: { utm_source_current: tmp25.utmSourceCurrent, utm_medium_current: tmp25.utmMediumCurrent, utm_campaign_current: tmp25.utmCampaignCurrent, utm_content_current: tmp25.utmContentCurrent, tab: scrollToQuestId(sortMethod[23]).QuestTabs.ALL } };
  const tmp26 = filters(sortMethod[36]);
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
  const obj9 = scrollToQuestId(sortMethod[39]);
  const enabled = obj9.useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(sortMethod[40]).QuestHomeBountiesFeatureGateExperiment;
  const obj10 = { location: callback4.QUEST_HOME_MOBILE };
  const enabled2 = QuestHomeBountiesFeatureGateExperiment.useConfig(obj10).enabled;
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[41]).OrbsHoldoutExperiment;
  const obj11 = { location: callback4.QUEST_HOME_MOBILE };
  const enabled3 = OrbsHoldoutExperiment.useConfig(obj11).enabled;
  const OrbsArcadeExperiment = scrollToQuestId(sortMethod[42]).OrbsArcadeExperiment;
  const obj12 = { location: callback4.QUEST_HOME_MOBILE };
  let enabled4 = OrbsArcadeExperiment.useConfig(obj12).enabled;
  const obj13 = scrollToQuestId(sortMethod[43]);
  const params = obj13.useRoute().params;
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
  let result = enabled && enabled2 && !enabled3;
  if (result) {
    const tmpResult6 = tmp(tmp2[46]);
    result = tmpResult6.shouldShowBountiesGivenFilters(filters);
  }
  c17 = result;
  const BountiesShopCarouselExperiment = tmp(tmp2[47]).BountiesShopCarouselExperiment;
  const obj14 = { location: tmp31.QUEST_HOME_MOBILE };
  config = BountiesShopCarouselExperiment.useConfig(obj14);
  let tmp38 = result;
  const useQuestHomeOrbShopCarouselData = tmp(tmp2[48]).useQuestHomeOrbShopCarouselData;
  tmp(tmp2[48]);
  if (result) {
    tmp38 = "none" !== config.placement;
  }
  const obj15 = { enabled: tmp38, sortType: config.sortType };
  const questHomeOrbShopCarouselData = useQuestHomeOrbShopCarouselData(obj15);
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  if (enabled4) {
    enabled4 = enabled;
  }
  if (enabled4) {
    enabled4 = !enabled3;
  }
  if (enabled4) {
    enabled4 = 0 === filters.length;
  }
  let closure_0 = tmp40;
  const tmpResult8 = tmp(tmp2[13]);
  navigation = tmpResult8.useNavigation();
  let closure_2 = obj2.useRef(false);
  let closure_3 = obj2.useRef(false);
  let closure_4 = obj2.useRef(false);
  const items15 = [tmp40];
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
  const items17 = [result, enabled4, callback6, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items18 = [ref1];
  const callback7 = obj2.useCallback(() => {
    const obj = { shouldShowBounties: _undefined, shouldShowOrbsArcade: enabled4, onLayout: callback6, shopCarouselConfig: config, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel };
    return authStore3(closure_22, obj);
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
        const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(sortMethod[44]).QuestContent.QUEST_HOME_MOBILE };
        const QuestCard = scrollToQuestId(sortMethod[50]).QuestCard;
        return previewAdCreativeIds(QuestCard, obj);
      }
    };
    const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
    return authStore3(QuestContentImpressionTrackerNative, obj);
  }, items18);
  let tmp49 = !isNavigationComplete;
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
    tmp49 = result && isLoading;
  }
  if (!tmp49) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp49 = isFetchingCurrentQuests;
  }
  isFetchingCurrentQuests = tmp49;
  ref2 = obj2.useRef(result);
  const items20 = [result];
  const effect10 = obj2.useEffect(() => {
    ref2.current = _undefined;
  }, items20);
  const items21 = [isEligibleForQuests];
  const effect11 = obj2.useEffect(() => {
    if (isEligibleForQuests) {
      let obj = QuestHomeRoundtripTrackerDefault;
      const obj2 = { includesBounties: ref2.current };
      obj.startTracking(obj2);
      return () => {
        const obj = filters(sortMethod[51]);
        obj.clearTracking();
      };
    }
  }, items21);
  const items22 = [isEligibleForQuests, tmp49];
  const effect12 = obj2.useEffect(() => {
    const tmp = isEligibleForQuests && !isFetchingCurrentQuests;
    if (tmp) {
      const obj2 = { includesBounties: ref2.current };
      const obj = QuestHomeRoundtripTrackerDefault;
      obj.stopTracking(obj2);
    }
  }, items22);
  const tmpResult9 = tmp(tmp2[23]);
  const shouldShowPreviewToolTab = tmpResult9.useShouldShowPreviewToolTab();
  const tmpResult10 = tmp(tmp2[52]);
  const isHexagonCampaignQuestHomeHeaderEnabled = tmpResult10.useIsHexagonCampaignQuestHomeHeaderEnabled("QuestHome");
  let tmp56 = null;
  if (isEligibleForQuests) {
    let tmp67Result;
    if (tmp49) {
      const obj16 = { style: items23, children: previewAdCreativeIds(isFetchingCurrentQuests, { animating: true }) };
      items23 = [tmp4.loadingContainer, containerStyle];
      tmp67Result = previewAdCreativeIds(excludedQuests, obj16);
    } else if (0 === quests.length) {
      let tmp60Result;
      const obj17 = { style: items24, children: items25 };
      items24 = [tmp4.container, containerStyle];
      items25 = [previewAdCreativeIds(tmp5(tmp2[26]), {}), ];
      const tmp58 = isLoading;
      const tmp59 = excludedQuests;
      if (0 === filters.length) {
        const obj18 = { hasContentAbove: isHexagonCampaignQuestHomeHeaderEnabled };
        tmp60Result = tmp60(c17, obj18);
      } else {
        const obj19 = { onClearFilters, hasContentAbove: isHexagonCampaignQuestHomeHeaderEnabled };
        tmp60Result = tmp60(config, obj19);
      }
      items25[1] = tmp60Result;
      tmp67Result = tmp58(tmp59, obj17);
    } else {
      const obj20 = { ref, contentContainerStyle: null, style: null, accessibilityLabel: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, CellRendererComponent: null, onLayout: null, onScroll: null, onLoad: null, scrollEventThrottle: 16 };
      const tmp67 = previewAdCreativeIds;
      if (result) {
        let num5 = 0;
        const obj21 = { paddingTop: num5, paddingBottom: bottom };
        obj20.contentContainerStyle = obj21;
        const items26 = [tmp4.container, containerStyle];
        obj20.style = items26;
        let intl = tmp(tmp2[20]).intl;
        obj20.accessibilityLabel = intl.string(tmp(tmp2[20]).t.JALI2K);
        obj20.data = quests;
        obj20.renderItem = callback8;
        obj20.ListHeaderComponent = callback7;
        obj20.CellRendererComponent = callback9;
        obj20.onLayout = callback2;
        obj20.onScroll = callback1;
        obj20.onLoad = callback3;
        tmp67Result = tmp67(tmp68, obj20);
      }
      num5 = tmp5(tmp2[11]).space.PX_16;
    }
    tmp56 = tmp67Result;
  }
  return tmp56;
});
let result = size.fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;
