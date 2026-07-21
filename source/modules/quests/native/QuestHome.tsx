// Module ID: 13781
// Function ID: 104129
// Name: EmptyStateNoQuestsAvailable
// Dependencies: []

// Module 13781 (EmptyStateNoQuestsAvailable)
function EmptyStateNoQuestsAvailable() {
  let obj = arg1(dependencyMap[13]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const callback = importAllResult.useCallback(() => navigation.goBack(), items);
  obj = {};
  obj = { variant: "secondary" };
  const intl = arg1(dependencyMap[20]).intl;
  obj.text = intl.string(arg1(dependencyMap[20]).t./g10LC);
  obj.onPress = callback;
  obj.action = callback2(arg1(dependencyMap[19]).Button, obj);
  return callback2(importDefault(dependencyMap[18]), obj);
}
function EmptyStateFiltered(onClearFilters) {
  let obj = {};
  obj = { variant: "secondary" };
  const intl = arg1(dependencyMap[20]).intl;
  obj.text = intl.string(arg1(dependencyMap[20]).t.urZl31);
  obj.onPress = onClearFilters.onClearFilters;
  obj.action = callback2(arg1(dependencyMap[19]).Button, obj);
  const intl2 = arg1(dependencyMap[20]).intl;
  obj.title = intl2.string(arg1(dependencyMap[20]).t.PBfFnx);
  const intl3 = arg1(dependencyMap[20]).intl;
  obj.subtitle = intl3.string(arg1(dependencyMap[20]).t.nwdKFC);
  return callback2(importDefault(dependencyMap[18]), obj);
}
function HeaderPreviewButton() {
  const callback = importAllResult.useCallback(() => {
    let obj = callback2(closure_2[21]);
    obj.popAll();
    obj = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    callback(closure_2[22]).openUserSettings(obj);
  }, []);
  let obj = arg1(dependencyMap[23]);
  let tmp3 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    obj = { style: tmp.previewButton };
    obj = { onPress: callback };
    const intl = arg1(dependencyMap[20]).intl;
    obj.text = intl.string(arg1(dependencyMap[20]).t.tx5Ax5);
    obj.children = callback2(arg1(dependencyMap[19]).Button, obj);
    tmp3 = callback2(closure_5, obj);
  }
  return tmp3;
}
function HeaderWithBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = arg0);
  const tmp = callback4();
  let obj = arg1(dependencyMap[24]);
  const verticalScrollEnabled = obj.useBountiesExperience(QuestsExperimentLocations.QUEST_HOME_MOBILE).verticalScrollEnabled;
  obj = {};
  const items = [callback2(HeaderPreviewButton, {}), , , ];
  let tmp4 = !verticalScrollEnabled;
  if (tmp4) {
    obj = {};
    const items1 = [, ];
    ({ sectionHeader: arr2[0], sectionHeaderRow: arr2[1] } = tmp);
    obj.style = items1;
    const obj1 = {};
    const intl = arg1(dependencyMap[20]).intl;
    obj1.children = intl.string(arg1(dependencyMap[20]).t.qetVDw);
    const items2 = [callback2(arg1(dependencyMap[25]).Text, obj1), ];
    const obj2 = { onPress: importDefault(dependencyMap[27]), hitSlop: 14 };
    const intl2 = arg1(dependencyMap[20]).intl;
    obj2.aria-label = intl2.string(arg1(dependencyMap[20]).t.hvVgAZ);
    obj2.accessibilityRole = "button";
    const obj3 = { size: "xs", color: importDefault(dependencyMap[11]).colors.ICON_SUBTLE };
    obj2.children = callback2(arg1(dependencyMap[28]).CircleInformationIcon, obj3);
    items2[1] = callback2(arg1(dependencyMap[26]).PressableOpacity, obj2);
    obj.children = items2;
    tmp4 = callback3(closure_5, obj);
  }
  items[1] = tmp4;
  items[2] = callback2(importDefault(dependencyMap[29]), { verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  const obj4 = { style: items3 };
  const items3 = [, ];
  ({ sectionHeader: arr4[0], sectionHeaderWithTag: arr4[1] } = tmp);
  const obj5 = {};
  const intl3 = arg1(dependencyMap[20]).intl;
  obj5.children = intl3.string(arg1(dependencyMap[20]).t.JALI2K);
  obj4.children = callback2(arg1(dependencyMap[25]).Text, obj5);
  items[3] = callback2(closure_5, obj4);
  obj.children = items;
  return callback3(closure_16, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ View: closure_5, ActivityIndicator: closure_6 } = tmp2);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const QuestsExperimentLocations = arg1(dependencyMap[7]).QuestsExperimentLocations;
({ AnalyticEvents: closure_12, UserSettingsSections: closure_13 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = { container: { flex: 1 } };
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["justifyContent"] = "center";
obj["alignItems"] = "center";
obj.loadingContainer = obj;
obj1 = { marginBottom: importDefault(dependencyMap[11]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16 };
obj.sectionHeader = obj1;
const tmp4 = arg1(dependencyMap[9]);
obj.sectionHeaderRow = { gap: importDefault(dependencyMap[11]).space.PX_4 };
const obj2 = { gap: importDefault(dependencyMap[11]).space.PX_4 };
obj.previewButton = { marginBottom: importDefault(dependencyMap[11]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, backgroundColor: "transparent" };
const obj3 = { marginBottom: importDefault(dependencyMap[11]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, backgroundColor: "transparent" };
obj.sectionHeaderWithTag = { gap: importDefault(dependencyMap[11]).space.PX_4 };
let closure_17 = obj1.createStyles(obj);
let closure_18 = importAllResult.memo((onLayout) => {
  let obj = { onLayout: onLayout.onLayout };
  if (onLayout.shouldShowBounties) {
    obj = { orbShopProducts: tmp, obtainableOrbRewards: tmp2, showOrbShopPlaceholderCarousel: tmp3 };
    let tmp6Result = tmp6(HeaderWithBounties, obj);
  } else {
    tmp6Result = tmp6(HeaderPreviewButton, {});
  }
  obj.children = tmp6Result;
  return closure_14(closure_5, obj);
});
const obj4 = { gap: importDefault(dependencyMap[11]).space.PX_4 };
const memoResult = importAllResult.memo(function QuestHome(filters) {
  let containerStyle;
  let handleListLayout;
  let handleListLoad;
  let handleListScroll;
  let isNavigationComplete;
  let onClearFilters;
  let scrollToQuestId;
  ({ containerStyle, scrollToQuestId } = filters);
  const arg1 = scrollToQuestId;
  filters = filters.filters;
  const importDefault = filters;
  const sortMethod = filters.sortMethod;
  const dependencyMap = sortMethod;
  let previewAdCreativeIds;
  let videoModalPlacementEnabled;
  let callback4;
  let closure_18;
  let EmptyStateNoQuestsAvailable;
  let EmptyStateFiltered;
  let HeaderPreviewButton;
  let HeaderWithBounties;
  let tmp29;
  let closure_24;
  ({ isNavigationComplete, onClearFilters } = filters);
  let obj = arg1(dependencyMap[30]);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  let closure_3 = isEligibleForQuests;
  let tmp2 = callback4();
  let obj1 = arg1(dependencyMap[23]);
  const items = [filters, sortMethod];
  const filteredQuests = obj1.useFilteredQuests(arg1(dependencyMap[23]).QuestTabs.ALL, importAllResult.useMemo(() => ({ filters, sortMethod }), items));
  const quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let closure_7 = hasFetched;
  let obj2 = arg1(dependencyMap[12]);
  const items1 = [closure_9];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const quests = ref.quests;
    const found = Array.from(quests.values()).filter((value) => !callback(closure_2[32]).isQuestExpired(value));
    const mapped = found.map((id) => id.id);
    return mapped.sort();
  }, []);
  let closure_8 = stateFromStoresArray;
  const items2 = [stateFromStoresArray];
  const effect = importAllResult.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      scrollToQuestId(sortMethod[33]).markAdContentSeen(scrollToQuestId(sortMethod[34]).AdCreativeType.QUEST, stateFromStoresArray);
      const obj = scrollToQuestId(sortMethod[33]);
    }
  }, items2);
  closure_9 = importAllResult.useRef(null);
  const items3 = [scrollToQuestId, quests, excludedQuests];
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const memo = importAllResult.useMemo(() => {
    if (null == scrollToQuestId) {
      return null;
    } else {
      const result = scrollToQuestId(sortMethod[32]).findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      const scrollToQuestId = result;
      let findIndexResult = null;
      if (null != result) {
        findIndexResult = quests.findIndex((id) => id.id === result.id);
      }
      return findIndexResult;
    }
  }, items3);
  const effect1 = importAllResult.useEffect(() => {
    let tmp = null != scrollToQuestId;
    if (tmp) {
      tmp = "" !== scrollToQuestId;
    }
    if (tmp) {
      tmp = hasFetched;
    }
    if (tmp) {
      tmp = !isFetchingCurrentQuests;
    }
    if (tmp) {
      let obj = scrollToQuestId(sortMethod[32]);
      let tmp9 = null == obj.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      if (tmp9) {
        tmp9 = ref.current !== scrollToQuestId;
      }
      if (tmp9) {
        obj = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND" };
        const intl = scrollToQuestId(sortMethod[20]).intl;
        obj.content = intl.string(scrollToQuestId(sortMethod[20]).t.sIyHuY);
        obj.icon = filters(sortMethod[36]);
        obj.toastDurationMs = 5000;
        filters(sortMethod[35]).open(obj);
        const obj2 = filters(sortMethod[35]);
        obj = { quest_id: scrollToQuestId };
        filters(sortMethod[37]).track(handleHeaderLayout.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj);
        ref.current = scrollToQuestId;
        const obj4 = filters(sortMethod[37]);
      }
    }
  }, items4);
  const tmp8 = function useScrollAndLayoutCallbacks(scrollToIndex) {
    scrollToIndex = scrollToIndex.scrollToIndex;
    const scrollToQuestId = scrollToIndex;
    const items = [hasFetched];
    const stateFromStores = scrollToQuestId(sortMethod[12]).useStateFromStores(items, () => callback5.useReducedMotion);
    const filters = stateFromStores;
    const scrollViewRef = quests.useRef(null);
    const sortMethod = scrollViewRef;
    const visibilityRef = quests.useRef({ parent: { scrollY: 0 }, children: {} });
    const isEligibleForQuests = visibilityRef;
    const callback = quests.useCallback((arg0) => {
      const keys = Object.keys(visibilityRef.current.children);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = null != arg0 && tmp !== arg0;
        if (!tmp2) {
          let tmp3 = visibilityRef;
          let tmp4 = visibilityRef.current.children[tmp];
          tmp2 = null == tmp4;
          let obj = tmp4;
        }
        if (!tmp2) {
          tmp2 = null == obj.calculateVisibility;
        }
        if (!tmp2) {
          let calculateVisibilityResult = obj.calculateVisibility();
        }
      }
    }, []);
    const quests = callback;
    const items1 = [callback];
    const items2 = [callback];
    const handleListScroll = quests.useCallback((nativeEvent) => {
      visibilityRef.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
      callback();
    }, items1);
    const handleListLayout = quests.useCallback((nativeEvent) => {
      visibilityRef.current.parent.layout = nativeEvent.nativeEvent.layout;
      callback();
    }, items2);
    const tmp7 = isEligibleForQuests(quests.useState(false), 2);
    const first = tmp7[0];
    const excludedQuests = first;
    let closure_6 = tmp7[1];
    const items3 = [callback];
    const handleListLoad = quests.useCallback(() => {
      callback(true);
    }, []);
    const items4 = [stateFromStores];
    const handleQuestCardLayout = quests.useCallback((nativeEvent) => {
      const obj = {};
      const merged = Object.assign(visibilityRef.current.children[arg1]);
      obj["layout"] = nativeEvent.nativeEvent.layout;
      visibilityRef.current.children[arg1] = obj;
      callback(arg1);
    }, items3);
    const callback5 = quests.useCallback((index) => {
      if (null != scrollViewRef.current) {
        const current = scrollViewRef.current;
        const obj = { index, animated: !stateFromStores, viewOffset: stateFromStores(scrollViewRef[11]).space.PX_8 };
        current.scrollToIndex(obj);
      }
    }, items4);
    const hasFetched = callback5;
    const items5 = [callback];
    const items6 = [first, stateFromStores, scrollToIndex, callback5];
    const handleHeaderLayout = quests.useCallback((nativeEvent) => {
      visibilityRef.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
      callback();
    }, items5);
    const effect = quests.useEffect(() => {
      let tmp = null != scrollToIndex;
      if (tmp) {
        tmp = -1 !== scrollToIndex;
      }
      if (tmp) {
        tmp = first;
      }
      if (tmp) {
        callback5(scrollToIndex);
        const obj = { scrollToQuestId: null };
        state.setState(obj);
      }
    }, items6);
    return { scrollViewRef, handleListScroll, handleListLayout, handleListLoad, handleQuestCardLayout, handleHeaderLayout, visibilityRef };
  }({ scrollToIndex: memo });
  const scrollViewRef = tmp8.scrollViewRef;
  let callback = scrollViewRef;
  const handleQuestCardLayout = tmp8.handleQuestCardLayout;
  const QuestsExperimentLocations = handleQuestCardLayout;
  const handleHeaderLayout = tmp8.handleHeaderLayout;
  const visibilityRef = tmp8.visibilityRef;
  ({ handleListScroll, handleListLayout, handleListLoad } = tmp8);
  const tmp9 = callback((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  obj = { name: arg1(dependencyMap[39]).ImpressionNames.QUEST_HOME, type: arg1(dependencyMap[39]).ImpressionTypes.VIEW };
  obj = { utm_source_current: tmp9.utmSourceCurrent, utm_medium_current: tmp9.utmMediumCurrent, utm_campaign_current: tmp9.utmCampaignCurrent, utm_content_current: tmp9.utmContentCurrent, tab: arg1(dependencyMap[23]).QuestTabs.ALL };
  obj.properties = obj;
  importDefault(dependencyMap[38])(obj);
  const items5 = [isEligibleForQuests];
  const effect2 = importAllResult.useEffect(() => {
    if (isEligibleForQuests) {
      const QuestHomeOpenTriggerPoint = scrollToQuestId(sortMethod[40]).QuestHomeOpenTriggerPoint;
      QuestHomeOpenTriggerPoint.trigger();
    }
  }, items5);
  const items6 = [filters, sortMethod, hasFetched, scrollViewRef];
  const effect3 = importAllResult.useEffect(() => {
    if (tmp) {
      const current = scrollViewRef.current;
      current.scrollToOffset({ -437125116: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002488040065571517, -435748860: -823154013994709700000000000000000000000000000000000000000000000 });
    }
  }, items6);
  let obj5 = arg1(dependencyMap[23]);
  obj1 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj5.useQuestHomeSortingFilteringAnalytics(obj1);
  let obj7 = arg1(dependencyMap[41]);
  let showBounties = obj7.useVirtualCurrencyMobileEnabled().enabled;
  let obj8 = arg1(dependencyMap[24]);
  const bountiesExperience = obj8.useBountiesExperience(QuestsExperimentLocations.QUEST_HOME_MOBILE);
  const verticalScrollEnabled = bountiesExperience.verticalScrollEnabled;
  const OrbsHoldoutExperiment = arg1(dependencyMap[42]).OrbsHoldoutExperiment;
  obj2 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  let obj10 = arg1(dependencyMap[43]);
  const params = obj10.useRoute().params;
  previewAdCreativeIds = undefined;
  if (null != params) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  let obj11 = arg1(dependencyMap[44]);
  videoModalPlacementEnabled = obj11.useVideoModalPlacementEnabled("quest_home_preview_auto_open");
  const tmp10 = importDefault(dependencyMap[38]);
  const obj3 = { previewAdCreativeIds };
  const fetchQuestHomeBounties = arg1(dependencyMap[23]).useFetchQuestHomeBounties(obj3);
  const isLoading = fetchQuestHomeBounties.isLoading;
  callback4 = isLoading;
  const questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  closure_18 = questHomeBounties;
  const items7 = [previewAdCreativeIds, verticalScrollEnabled, videoModalPlacementEnabled, isLoading, questHomeBounties];
  const effect4 = importAllResult.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (verticalScrollEnabled) {
          if (!isLoading) {
            const found = questHomeBounties.find((id) => closure_15.includes(id.id));
            if (null != found) {
              let showModalResult = filters(sortMethod[14]);
              showModalResult = { bountyId: found.id };
              const QuestContent = scrollToQuestId(sortMethod[45]).QuestContent;
              showModalResult.sourceQuestContent = videoModalPlacementEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
              showModalResult = showModalResult.showModal(showModalResult);
            }
          }
        }
      }
    }
  }, items7);
  if (showBounties) {
    showBounties = bountiesExperience.showBounties;
  }
  if (showBounties) {
    showBounties = !OrbsHoldoutExperiment.useConfig(obj2).enabled;
  }
  if (showBounties) {
    showBounties = arg1(dependencyMap[46]).shouldShowBountiesGivenFilters(filters);
    const obj15 = arg1(dependencyMap[46]);
  }
  EmptyStateNoQuestsAvailable = showBounties;
  const BountiesShopCarouselExperiment = arg1(dependencyMap[47]).BountiesShopCarouselExperiment;
  const config = BountiesShopCarouselExperiment.useConfig({ location: QuestsExperimentLocations.QUEST_HOME_MOBILE });
  let enabled = config.enabled;
  const obj13 = arg1(dependencyMap[23]);
  const obj4 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  obj5 = {};
  if (enabled) {
    enabled = showBounties;
  }
  obj5.enabled = enabled;
  obj5.variation = config.variation;
  const questHomeOrbShopCarouselData = arg1(dependencyMap[48]).useQuestHomeOrbShopCarouselData(obj5);
  const products = questHomeOrbShopCarouselData.products;
  EmptyStateFiltered = products;
  const obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  HeaderPreviewButton = obtainableOrbRewards;
  const showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  HeaderWithBounties = showPlaceholderCarousel;
  const obj6 = {};
  let tmp24 = showBounties;
  if (showBounties) {
    tmp24 = !isLoading;
  }
  if (tmp24) {
    tmp24 = questHomeBounties.length > 0;
  }
  obj6.bountiesAvailable = tmp24;
  function useSurveyActions(bountiesAvailable) {
    bountiesAvailable = bountiesAvailable.bountiesAvailable;
    const scrollToQuestId = bountiesAvailable;
    const navigation = scrollToQuestId(closure_2[13]).useNavigation();
    const filters = navigation;
    closure_2 = React.useRef(false);
    let closure_3 = React.useRef(false);
    const React = React.useRef(false);
    const items = [bountiesAvailable];
    const effect = React.useEffect(() => {
      if (bountiesAvailable) {
        closure_2.current = true;
      }
    }, items);
    const effect1 = React.useEffect(() => {
      function handleBountiesModalPush(key) {
        if (key.key === handleBountiesModalPush(closure_2[14]).BOUNTIES_MODAL_KEY) {
          closure_3.current = true;
        }
      }
      const bountiesAvailable = handleBountiesModalPush;
      const subscription = navigation(closure_2[15]).subscribe("MODAL_PUSH", handleBountiesModalPush);
      return () => {
        callback(closure_2[15]).unsubscribe("MODAL_PUSH", handleBountiesModalPush);
      };
    }, []);
    const effect2 = React.useEffect(() => {
      function handleClaimSuccess() {
        closure_4.current = true;
      }
      const bountiesAvailable = handleClaimSuccess;
      const subscription = navigation(closure_2[15]).subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      return () => {
        callback(closure_2[15]).unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      };
    }, []);
    const items1 = [navigation];
    const effect3 = React.useEffect(() => navigation.addListener("beforeRemove", () => {
      if (ref.current) {
        if (ref3.current) {
          callback(ref[16]).fireSurveyAction(callback(ref[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
          const obj = callback(ref[16]);
        } else {
          const fireSurveyAction = callback(ref[16]).fireSurveyAction;
          const SurveyActionTypes = callback(ref[17]).SurveyActionTypes;
          if (ref2.current) {
            fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
          } else {
            fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
          }
          const tmp5 = callback(ref[16]);
        }
      }
    }), items1);
  }(obj6);
  const items8 = [showBounties, handleHeaderLayout, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items9 = [visibilityRef];
  callback = importAllResult.useCallback(() => verticalScrollEnabled(questHomeBounties, { shouldShowBounties: showBounties, onLayout: handleHeaderLayout, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel }), items8);
  const items10 = [quests, handleQuestCardLayout];
  const callback1 = importAllResult.useCallback((item) => {
    item = item.item;
    const scrollToQuestId = item;
    const index = item.index;
    const filters = index;
    const obj = {
      questOrQuests: item,
      questContent: scrollToQuestId(sortMethod[45]).QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef,
      skipRemountKey: true,
      sourceQuestContent: scrollToQuestId(sortMethod[45]).QuestContent.QUEST_HOME_MOBILE,
      children() {
        const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: item(closure_2[45]).QuestContent.QUEST_HOME_MOBILE };
        return callback(item(closure_2[50]).QuestCard, obj);
      }
    };
    return verticalScrollEnabled(scrollToQuestId(sortMethod[49]).QuestContentImpressionTrackerNative, obj);
  }, items9);
  tmp29 = !isNavigationComplete;
  const callback2 = importAllResult.useCallback((arg0) => {
    const scrollToQuestId = arg0;
    const obj = {};
    const merged = Object.assign(arg0);
    obj["onLayout"] = function onLayout(arg0) {
      if (null != closure_4[closure_0.index]) {
        callback(arg0, tmp.id);
      }
      arg0.onLayout(arg0);
    };
    return verticalScrollEnabled(excludedQuests, obj);
  }, items10);
  if (!tmp29) {
    let tmp30 = showBounties;
    if (showBounties) {
      tmp30 = isLoading;
    }
    tmp29 = tmp30;
  }
  if (!tmp29) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp29 = isFetchingCurrentQuests;
  }
  closure_24 = importAllResult.useRef(showBounties);
  const items11 = [showBounties];
  const effect5 = importAllResult.useEffect(() => {
    closure_24.current = showBounties;
  }, items11);
  const items12 = [isEligibleForQuests];
  const effect6 = importAllResult.useEffect(() => {
    if (isEligibleForQuests) {
      let obj = filters(sortMethod[51]);
      obj = { includesBounties: ref2.current };
      obj.startTracking(obj);
      return () => {
        callback(closure_2[51]).clearTracking();
      };
    }
  }, items12);
  const items13 = [isEligibleForQuests, tmp29];
  const effect7 = importAllResult.useEffect(() => {
    let tmp = isEligibleForQuests;
    if (isEligibleForQuests) {
      tmp = !tmp29;
    }
    if (tmp) {
      let obj = filters(sortMethod[51]);
      obj = { includesBounties: ref2.current };
      obj.stopTracking(obj);
    }
  }, items13);
  arg1(dependencyMap[23]);
  if (!isEligibleForQuests) {
    return null;
  } else if (tmp29) {
    obj7 = {};
    const items14 = [tmp2.loadingContainer, containerStyle];
    obj7.style = items14;
    containerStyle = verticalScrollEnabled;
    tmp2 = isFetchingCurrentQuests;
    obj8 = { animating: true };
    obj7.children = verticalScrollEnabled(isFetchingCurrentQuests, obj8);
    let tmp50Result = verticalScrollEnabled(excludedQuests, obj7);
  } else if (0 === quests.length) {
    if (0 === filters.length) {
      let tmp43 = verticalScrollEnabled(EmptyStateNoQuestsAvailable, {});
    } else {
      const obj9 = { onClearFilters };
      tmp43 = verticalScrollEnabled(EmptyStateFiltered, obj9);
    }
  } else {
    obj10 = { ref: scrollViewRef };
    obj11 = {};
    if (!verticalScrollEnabled) {
      let num5 = importDefault(dependencyMap[11]).space.PX_16;
    } else {
      num5 = 0;
    }
    obj11.paddingTop = num5;
    obj11.paddingBottom = importDefault(dependencyMap[31])().bottom;
    obj10.contentContainerStyle = obj11;
    const items15 = [tmp2.container, containerStyle];
    obj10.style = items15;
    const intl = arg1(dependencyMap[20]).intl;
    obj10.accessibilityLabel = intl.string(arg1(dependencyMap[20]).t.JALI2K);
    obj10.data = quests;
    obj10.renderItem = callback1;
    obj10.showsHorizontalScrollIndicator = false;
    obj10.ListHeaderComponent = callback;
    obj10.CellRendererComponent = callback2;
    obj10.onLayout = handleListLayout;
    obj10.onScroll = handleListScroll;
    obj10.onLoad = handleListLoad;
    obj10.scrollEventThrottle = 16;
    tmp50Result = verticalScrollEnabled(arg1(dependencyMap[52]).FlashList, obj10);
    const tmp50 = verticalScrollEnabled;
  }
});
const result = arg1(dependencyMap[53]).fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;
