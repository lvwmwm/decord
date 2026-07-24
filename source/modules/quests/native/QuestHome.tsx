// Module ID: 13955
// Function ID: 106664
// Name: EmptyStateNoQuestsAvailable
// Dependencies: [57, 31, 27, 4122, 10947, 6941, 6963, 4976, 653, 33, 4130, 689, 566, 1456, 13956, 686, 9312, 9319, 14011, 4543, 1212, 4337, 5796, 10493, 10868, 4126, 4660, 14013, 4086, 14015, 10494, 1557, 6939, 9480, 6969, 3831, 9212, 675, 8604, 480, 14037, 12241, 14038, 1457, 4979, 6962, 14019, 14030, 10956, 14039, 14114, 7527, 2]

// Module 13955 (EmptyStateNoQuestsAvailable)
import _slicedToArray from "_slicedToArray";
import importAllResult from "useSafeAreaInsets";
import get_ActivityIndicator from "openBountiesNuxPromoSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import closure_9 from "_isNativeReflectConstruct";
import keys from "keys";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import ME from "ME";
import jsxProd from "_manuallyStartConsoleQuest";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
const require = arg1;
function EmptyStateNoQuestsAvailable() {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => navigation.goBack(), items);
  obj = {};
  obj = { variant: "secondary" };
  const intl = navigation(1212).intl;
  obj.text = intl.string(navigation(1212).t["/g10LC"]);
  obj.onPress = callback;
  obj.action = callback(navigation(4543).Button, obj);
  return callback(importDefault(14011), obj);
}
function EmptyStateFiltered(onClearFilters) {
  let obj = {};
  obj = { variant: "secondary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.urZl31);
  obj.onPress = onClearFilters.onClearFilters;
  obj.action = callback(require(4543) /* Button */.Button, obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl2.string(require(1212) /* getSystemLocale */.t.PBfFnx);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.subtitle = intl3.string(require(1212) /* getSystemLocale */.t.nwdKFC);
  return callback(importDefault(14011), obj);
}
function HeaderPreviewButton() {
  const callback = importAllResult.useCallback(() => {
    let obj = outer1_1(outer1_2[21]);
    obj.popAll();
    obj = { screen: outer1_13.QUEST_PREVIEW_TOOL_2 };
    outer1_0(outer1_2[22]).openUserSettings(obj);
  }, []);
  let obj = require(10493) /* _createForOfIteratorHelperLoose */;
  let tmp3 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    obj = { style: tmp.previewButton };
    obj = { grow: true, onPress: callback, variant: "primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t.tx5Ax5);
    obj.children = callback(require(4543) /* Button */.Button, obj);
    tmp3 = callback(closure_5, obj);
  }
  return tmp3;
}
function HeaderWithBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = arg0);
  const tmp = callback3();
  let obj = require(10868) /* useBountiesExperience */;
  const verticalScrollEnabled = obj.useBountiesExperience(QuestsExperimentLocations.QUEST_HOME_MOBILE).verticalScrollEnabled;
  obj = {};
  const items = [callback(HeaderPreviewButton, {}), , , ];
  let tmp4 = !verticalScrollEnabled;
  if (tmp4) {
    obj = {};
    const items1 = [, ];
    ({ sectionHeader: arr2[0], sectionHeaderRow: arr2[1] } = tmp);
    obj.style = items1;
    const obj1 = { variant: "text-lg/semibold", color: "text-strong" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t.qetVDw);
    const items2 = [callback(require(4126) /* Text */.Text, obj1), ];
    const obj2 = { onPress: importDefault(14013), hitSlop: 14 };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2["aria-label"] = intl2.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
    obj2.accessibilityRole = "button";
    const obj3 = { size: "xs", color: importDefault(689).colors.ICON_SUBTLE };
    obj2.children = callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, obj3);
    items2[1] = callback(require(4660) /* PressableBase */.PressableOpacity, obj2);
    obj.children = items2;
    tmp4 = callback2(closure_5, obj);
  }
  items[1] = tmp4;
  items[2] = callback(importDefault(14015), { verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  const obj4 = { style: items3 };
  items3 = [, ];
  ({ sectionHeader: arr4[0], sectionHeaderWithTag: arr4[1] } = tmp);
  const obj5 = { variant: "text-lg/semibold", color: "text-strong" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl3.string(require(1212) /* getSystemLocale */.t.JALI2K);
  obj4.children = callback(require(4126) /* Text */.Text, obj5);
  items[3] = callback(closure_5, obj4);
  obj.children = items;
  return callback2(closure_16, obj);
}
({ View: closure_5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, UserSettingsSections: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = { container: { flex: 1 } };
obj = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["justifyContent"] = "center";
obj["alignItems"] = "center";
obj.loadingContainer = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.sectionHeader = _createForOfIteratorHelperLoose;
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.sectionHeaderRow = obj2;
obj.previewButton = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: "transparent" };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: "transparent" };
obj.sectionHeaderWithTag = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
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
let obj4 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const memoResult = importAllResult.memo(function QuestHome(filters) {
  let containerStyle;
  let handleListLayout;
  let handleListLoad;
  let handleListScroll;
  let isNavigationComplete;
  let onClearFilters;
  let scrollToQuestId;
  ({ containerStyle, scrollToQuestId } = filters);
  filters = filters.filters;
  const sortMethod = filters.sortMethod;
  let previewAdCreativeIds;
  let isLoading;
  let questHomeBounties;
  let showBounties;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  let c22;
  let closure_23;
  ({ isNavigationComplete, onClearFilters } = filters);
  let obj = scrollToQuestId(sortMethod[30]);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  let tmp2 = questHomeBounties();
  let obj1 = scrollToQuestId(sortMethod[23]);
  let items = [filters, sortMethod];
  const filteredQuests = obj1.useFilteredQuests(scrollToQuestId(sortMethod[23]).QuestTabs.ALL, quests.useMemo(() => ({ filters, sortMethod }), items));
  quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj2 = scrollToQuestId(sortMethod[12]);
  let items1 = [closure_9];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const quests = ref.quests;
    const found = Array.from(quests.values()).filter((value) => !scrollToQuestId(sortMethod[32]).isQuestExpired(value));
    const mapped = found.map((id) => id.id);
    return mapped.sort();
  }, []);
  let items2 = [stateFromStoresArray];
  let effect = quests.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      scrollToQuestId(sortMethod[33]).markAdContentSeen(scrollToQuestId(sortMethod[34]).AdCreativeType.QUEST, stateFromStoresArray);
      const obj = scrollToQuestId(sortMethod[33]);
    }
  }, items2);
  closure_9 = quests.useRef(null);
  let items3 = [scrollToQuestId, quests, excludedQuests];
  let items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const memo = quests.useMemo(() => {
    if (null == scrollToQuestId) {
      return null;
    } else {
      const result = scrollToQuestId(sortMethod[32]).findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      scrollToQuestId = result;
      let findIndexResult = null;
      if (null != result) {
        findIndexResult = quests.findIndex((id) => id.id === id.id);
      }
      return findIndexResult;
    }
  }, items3);
  let effect1 = quests.useEffect(() => {
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
  const tmp8 = (function useScrollAndLayoutCallbacks(scrollToIndex) {
    scrollToIndex = scrollToIndex.scrollToIndex;
    const items = [hasFetched];
    const stateFromStores = scrollToQuestId(sortMethod[12]).useStateFromStores(items, () => hasFetched.useReducedMotion);
    const scrollViewRef = quests.useRef(null);
    const visibilityRef = quests.useRef({ parent: { scrollY: 0 }, children: {} });
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
        const obj = { index, animated: !stateFromStores, viewOffset: filters(sortMethod[11]).space.PX_8 };
        current.scrollToIndex(obj);
      }
    }, items4);
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
        stateFromStoresArray.setState(obj);
      }
    }, items6);
    return { scrollViewRef, handleListScroll, handleListLayout, handleListLoad, handleQuestCardLayout, handleHeaderLayout, visibilityRef };
  })({ scrollToIndex: memo });
  let scrollViewRef = tmp8.scrollViewRef;
  let handleQuestCardLayout = tmp8.handleQuestCardLayout;
  let handleHeaderLayout = tmp8.handleHeaderLayout;
  let visibilityRef = tmp8.visibilityRef;
  ({ handleListScroll, handleListLayout, handleListLoad } = tmp8);
  let tmp9 = scrollViewRef((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  obj = { name: scrollToQuestId(sortMethod[39]).ImpressionNames.QUEST_HOME, type: scrollToQuestId(sortMethod[39]).ImpressionTypes.VIEW };
  obj = { utm_source_current: tmp9.utmSourceCurrent, utm_medium_current: tmp9.utmMediumCurrent, utm_campaign_current: tmp9.utmCampaignCurrent, utm_content_current: tmp9.utmContentCurrent, tab: scrollToQuestId(sortMethod[23]).QuestTabs.ALL };
  obj.properties = obj;
  filters(sortMethod[38])(obj);
  let items5 = [isEligibleForQuests];
  let effect2 = quests.useEffect(() => {
    if (isEligibleForQuests) {
      const QuestHomeOpenTriggerPoint = scrollToQuestId(sortMethod[40]).QuestHomeOpenTriggerPoint;
      QuestHomeOpenTriggerPoint.trigger();
    }
  }, items5);
  let items6 = [filters, sortMethod, hasFetched, scrollViewRef];
  let effect3 = quests.useEffect(() => {
    if (tmp) {
      const current = scrollViewRef.current;
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items6);
  let obj5 = scrollToQuestId(sortMethod[23]);
  obj1 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj5.useQuestHomeSortingFilteringAnalytics(obj1);
  let obj7 = scrollToQuestId(sortMethod[41]);
  showBounties = obj7.useVirtualCurrencyMobileEnabled().enabled;
  let obj8 = scrollToQuestId(sortMethod[24]);
  const bountiesExperience = obj8.useBountiesExperience(handleQuestCardLayout.QUEST_HOME_MOBILE);
  const verticalScrollEnabled = bountiesExperience.verticalScrollEnabled;
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[42]).OrbsHoldoutExperiment;
  obj2 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  let obj10 = scrollToQuestId(sortMethod[43]);
  const params = obj10.useRoute().params;
  previewAdCreativeIds = undefined;
  if (null != params) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  let obj11 = scrollToQuestId(sortMethod[23]);
  const obj3 = { previewAdCreativeIds };
  const fetchQuestHomeBounties = obj11.useFetchQuestHomeBounties(obj3);
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items7 = [previewAdCreativeIds, verticalScrollEnabled, isLoading, questHomeBounties];
  const effect4 = quests.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (verticalScrollEnabled) {
          if (!isLoading) {
            const found = questHomeBounties.find((id) => outer1_15.includes(id.id));
            if (null != found) {
              let obj = filters(sortMethod[14]);
              obj = { bountyId: found.id, sourceQuestContent: scrollToQuestId(sortMethod[44]).QuestContent.VIDEO_MODAL_MOBILE };
              obj.showModal(obj);
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
    showBounties = scrollToQuestId(sortMethod[45]).shouldShowBountiesGivenFilters(filters);
    const obj14 = scrollToQuestId(sortMethod[45]);
  }
  const BountiesShopCarouselExperiment = scrollToQuestId(sortMethod[46]).BountiesShopCarouselExperiment;
  const config = BountiesShopCarouselExperiment.useConfig({ location: handleQuestCardLayout.QUEST_HOME_MOBILE });
  let enabled = config.enabled;
  let obj4 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  const tmp10 = filters(sortMethod[38]);
  obj5 = {};
  if (enabled) {
    enabled = showBounties;
  }
  obj5.enabled = enabled;
  obj5.variation = config.variation;
  const questHomeOrbShopCarouselData = scrollToQuestId(sortMethod[47]).useQuestHomeOrbShopCarouselData(obj5);
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  const obj6 = {};
  let tmp23 = showBounties;
  if (showBounties) {
    tmp23 = !isLoading;
  }
  if (tmp23) {
    tmp23 = questHomeBounties.length > 0;
  }
  obj6.bountiesAvailable = tmp23;
  (function useSurveyActions(bountiesAvailable) {
    bountiesAvailable = bountiesAvailable.bountiesAvailable;
    const navigation = scrollToQuestId(sortMethod[13]).useNavigation();
    let closure_2 = quests.useRef(false);
    let _slicedToArray = quests.useRef(false);
    let closure_4 = quests.useRef(false);
    const items = [bountiesAvailable];
    const effect = quests.useEffect(() => {
      if (bountiesAvailable) {
        closure_2.current = true;
      }
    }, items);
    const effect1 = quests.useEffect(() => {
      function handleBountiesModalPush(key) {
        if (key.key === scrollToQuestId(sortMethod[14]).BOUNTIES_MODAL_KEY) {
          outer1_3.current = true;
        }
      }
      const subscription = filters(sortMethod[15]).subscribe("MODAL_PUSH", handleBountiesModalPush);
      return () => {
        filters(sortMethod[15]).unsubscribe("MODAL_PUSH", handleBountiesModalPush);
      };
    }, []);
    const effect2 = quests.useEffect(() => {
      function handleClaimSuccess() {
        outer1_4.current = true;
      }
      const subscription = filters(sortMethod[15]).subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      return () => {
        filters(sortMethod[15]).unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      };
    }, []);
    const items1 = [navigation];
    const effect3 = quests.useEffect(() => navigation.addListener("beforeRemove", () => {
      if (outer1_2.current) {
        if (outer1_4.current) {
          scrollToQuestId(sortMethod[16]).fireSurveyAction(scrollToQuestId(sortMethod[17]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
          const obj = scrollToQuestId(sortMethod[16]);
        } else {
          const fireSurveyAction = scrollToQuestId(sortMethod[16]).fireSurveyAction;
          const SurveyActionTypes = scrollToQuestId(sortMethod[17]).SurveyActionTypes;
          if (outer1_3.current) {
            fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
          } else {
            fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
          }
          const tmp5 = scrollToQuestId(sortMethod[16]);
        }
      }
    }), items1);
  })(obj6);
  const items8 = [showBounties, handleHeaderLayout, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items9 = [visibilityRef];
  let callback = quests.useCallback(() => verticalScrollEnabled(showBounties, { shouldShowBounties: showBounties, onLayout: handleHeaderLayout, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel }), items8);
  const items10 = [quests, handleQuestCardLayout];
  const callback1 = quests.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = {
      questOrQuests: item,
      questContent: scrollToQuestId(sortMethod[44]).QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef,
      skipRemountKey: true,
      sourceQuestContent: scrollToQuestId(sortMethod[44]).QuestContent.QUEST_HOME_MOBILE,
      children() {
        const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(sortMethod[44]).QuestContent.QUEST_HOME_MOBILE };
        return verticalScrollEnabled(scrollToQuestId(sortMethod[49]).QuestCard, obj);
      }
    };
    return verticalScrollEnabled(scrollToQuestId(sortMethod[48]).QuestContentImpressionTrackerNative, obj);
  }, items9);
  let tmp28 = !isNavigationComplete;
  const callback2 = quests.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = {};
    const merged = Object.assign(arg0);
    obj["onLayout"] = function onLayout(arg0) {
      if (null != outer1_4[closure_0.index]) {
        outer1_11(arg0, tmp.id);
      }
      closure_0.onLayout(arg0);
    };
    return verticalScrollEnabled(excludedQuests, obj);
  }, items10);
  if (!tmp28) {
    let tmp29 = showBounties;
    if (showBounties) {
      tmp29 = isLoading;
    }
    tmp28 = tmp29;
  }
  if (!tmp28) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp28 = isFetchingCurrentQuests;
  }
  c22 = tmp28;
  closure_23 = quests.useRef(showBounties);
  const items11 = [showBounties];
  const effect5 = quests.useEffect(() => {
    closure_23.current = showBounties;
  }, items11);
  const items12 = [isEligibleForQuests];
  const effect6 = quests.useEffect(() => {
    if (isEligibleForQuests) {
      let obj = filters(sortMethod[50]);
      obj = { includesBounties: ref2.current };
      obj.startTracking(obj);
      return () => {
        filters(sortMethod[50]).clearTracking();
      };
    }
  }, items12);
  const items13 = [isEligibleForQuests, tmp28];
  const effect7 = quests.useEffect(() => {
    let tmp = isEligibleForQuests;
    if (isEligibleForQuests) {
      tmp = !c22;
    }
    if (tmp) {
      let obj = filters(sortMethod[50]);
      obj = { includesBounties: ref2.current };
      obj.stopTracking(obj);
    }
  }, items13);
  scrollToQuestId(sortMethod[23]);
  if (!isEligibleForQuests) {
    return null;
  } else if (tmp28) {
    obj7 = {};
    const items14 = [tmp2.loadingContainer, containerStyle];
    obj7.style = items14;
    containerStyle = verticalScrollEnabled;
    tmp2 = isFetchingCurrentQuests;
    obj8 = { animating: true };
    obj7.children = verticalScrollEnabled(isFetchingCurrentQuests, obj8);
    let tmp49Result = verticalScrollEnabled(excludedQuests, obj7);
  } else if (0 === quests.length) {
    if (0 === filters.length) {
      let tmp42 = verticalScrollEnabled(products, {});
    } else {
      const obj9 = { onClearFilters };
      tmp42 = verticalScrollEnabled(obtainableOrbRewards, obj9);
    }
  } else {
    obj10 = { ref: scrollViewRef };
    obj11 = {};
    if (!verticalScrollEnabled) {
      let num5 = filters(sortMethod[11]).space.PX_16;
    } else {
      num5 = 0;
    }
    obj11.paddingTop = num5;
    obj11.paddingBottom = filters(sortMethod[31])().bottom;
    obj10.contentContainerStyle = obj11;
    const items15 = [tmp2.container, containerStyle];
    obj10.style = items15;
    let intl = scrollToQuestId(sortMethod[20]).intl;
    obj10.accessibilityLabel = intl.string(scrollToQuestId(sortMethod[20]).t.JALI2K);
    obj10.data = quests;
    obj10.renderItem = callback1;
    obj10.showsHorizontalScrollIndicator = false;
    obj10.ListHeaderComponent = callback;
    obj10.CellRendererComponent = callback2;
    obj10.onLayout = handleListLayout;
    obj10.onScroll = handleListScroll;
    obj10.onLoad = handleListLoad;
    obj10.scrollEventThrottle = 16;
    tmp49Result = verticalScrollEnabled(scrollToQuestId(sortMethod[51]).FlashList, obj10);
    const tmp49 = verticalScrollEnabled;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;
