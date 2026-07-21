// Module ID: 13841
// Function ID: 104593
// Name: EmptyState
// Dependencies: []

// Module 13841 (EmptyState)
function EmptyState(reason) {
  reason = reason.reason;
  const tmp = callback4();
  let obj = arg1(dependencyMap[10]);
  const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(reason);
  if (reason === constants.COMPLETED) {
    const intl2 = arg1(dependencyMap[11]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[11]).t.O2hRaZ);
  } else {
    const intl = arg1(dependencyMap[11]).intl;
    stringResult = intl.string(arg1(dependencyMap[11]).t.TKuW8z);
  }
  if (reason === constants.COMPLETED) {
    let ReqPds = arg1(dependencyMap[11]).t.D/790X;
  } else {
    ReqPds = arg1(dependencyMap[11]).t.ReqPds;
  }
  obj = { style: tmp.emptyState };
  const items = [callback2(arg1(dependencyMap[12]).BountiesPosterIllocon, { size: 32 }), ];
  obj = { style: tmp.emptyStateText };
  const obj1 = { children: stringResult };
  const items1 = [callback2(arg1(dependencyMap[13]).Text, obj1), ];
  const obj2 = {};
  const intl3 = arg1(dependencyMap[11]).intl;
  obj2.children = intl3.format(ReqPds, {
    onClickLearnMore() {
      callback(closure_2[15])();
    }
  });
  items1[1] = callback2(arg1(dependencyMap[14]).TextWithIOSLinkWorkaround, obj2);
  obj.children = items1;
  items[1] = callback3(View, obj);
  obj.children = items;
  return callback3(View, obj);
}
function getSnapIndex(nativeEvent) {
  return Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_13);
}
function ItemSeparator() {
  const style = { width: PX_16 };
  return callback2(View, { style });
}
function keyExtractor(id) {
  return id.id;
}
function QuestHomeBountiesCarousel(bounties) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  bounties = bounties.bounties;
  const arg1 = bounties;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = bounties);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  let importDefault;
  let dependencyMap;
  let callback;
  let importAllResult;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let callback2;
  let closure_10;
  let PX_16;
  let closure_12;
  let closure_13;
  let callback4;
  let closure_15;
  let getSnapIndex;
  let ItemSeparator;
  let keyExtractor;
  const tmp = callback4();
  let tmp2 = obtainableOrbRewards > 0;
  if (tmp2) {
    tmp2 = orbShopProducts.length >= arg1(dependencyMap[19]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
    const tmp5 = orbShopProducts.length >= arg1(dependencyMap[19]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
  }
  let tmp6 = null;
  const ref = importAllResult.useRef(null);
  importDefault = ref;
  const tmp8 = callback(importAllResult.useState(0), 2);
  const first = tmp8[0];
  dependencyMap = first;
  callback = tmp8[1];
  const tmp10 = callback(importAllResult.useState(0), 2);
  const first1 = tmp10[0];
  importAllResult = first1;
  closure_5 = tmp10[1];
  const tmp12 = callback(importAllResult.useState(false), 2);
  const first2 = tmp12[0];
  closure_6 = first2;
  closure_7 = tmp12[1];
  closure_8 = importAllResult.useRef(null);
  callback2 = importAllResult.useRef(false);
  closure_10 = importAllResult.useRef({ parent: { scrollX: 0 }, children: {}, axis: "horizontal" });
  callback = importAllResult.useCallback((arg0) => {
    if (null != arg0) {
      const _Object2 = Object;
      if (Object.hasOwn(closure_10.current.children, arg0)) {
        if (!tmp8) {
          obj2.calculateVisibility();
        }
        const tmp8 = null == closure_10.current.children[arg0] || null == closure_10.current.children[arg0].calculateVisibility;
      }
    } else {
      const _Object = Object;
      const values = Object.values(closure_10.current.children);
      for (let num = 0; num < values.length; num = num + 1) {
        let obj = values[num];
        let tmp3 = null == obj || null == obj.calculateVisibility;
        if (!tmp3) {
          let calculateVisibilityResult1 = obj.calculateVisibility();
        }
      }
    }
  }, []);
  PX_16 = callback;
  const items = [callback];
  const items1 = [bounties.length];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
    closure_10.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback();
  }, items);
  const items2 = [first];
  const memo = importAllResult.useMemo(() => {
    const array = new Array(bounties.length);
    return array.fill(0).map((arg0, arg1) => arg1 * closure_13);
  }, items1);
  callback2 = importAllResult.useCallback(() => {
    let obj = {};
    obj = { width: Math.max(0, first - bounties(first[8]).CARD_WIDTH - callback) };
    obj.style = obj;
    return callback4(closure_5, obj);
  }, items2);
  closure_12 = importAllResult.useRef(first1);
  closure_13 = importAllResult.useRef(null);
  const items3 = [callback];
  const callback3 = importAllResult.useCallback((nativeEvent) => {
    const tmp = callback6(nativeEvent);
    if (tmp !== ref.current) {
      ref.current = tmp;
      const _Date = Date;
      const timestamp = Date.now();
      let tmp3 = null == ref2.current;
      if (!tmp3) {
        tmp3 = timestamp - ref2.current >= 50;
      }
      if (tmp3) {
        ref2.current = timestamp;
        const result = bounties(first[20]).triggerHapticFeedback(bounties(first[20]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = bounties(first[20]);
      }
    }
    closure_10.current.parent.scrollX = nativeEvent.nativeEvent.contentOffset.x;
    callback();
  }, items3);
  callback4 = importAllResult.useRef(false);
  closure_15 = importAllResult.useRef(null);
  const items4 = [first1];
  callback4 = importAllResult.useCallback(() => {
    closure_14.current = false;
    if (null != closure_15.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_15.current);
      closure_15.current = null;
    }
  }, []);
  const callback5 = importAllResult.useCallback((arg0) => {
    const tmp = callback6(arg0);
    closure_14.current = false;
    if (tmp !== first1) {
      let result = {};
      const BountyScrollingType = bounties(first[22]).BountyScrollingType;
      result.scrollingType = tmp2 ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL;
      if (tmp > first1) {
        let LEFT = bounties(first[22]).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = bounties(first[22]).HorizontalScrollingDirection.LEFT;
      }
      result.scrollingDirection = LEFT;
      result.carouselPosition = tmp;
      result.questContent = bounties(first[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      result = bounties(first[21]).trackBountyCarouselScroll(result);
      callback2(tmp);
      const obj2 = bounties(first[21]);
    }
  }, items4);
  const callback6 = importAllResult.useCallback((arg0) => {
    const bounties = arg0;
    if (null != closure_15.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_15.current);
      closure_15.current = null;
    }
    closure_15.current = setTimeout(() => {
      closure_14.current = true;
      const current = ref.current;
      if (null != current) {
        const obj = { offset: arg0 * closure_13, animated: true };
        current.scrollToOffset(obj);
      }
      closure_15.current = null;
    }, 350);
  }, []);
  getSnapIndex = callback6;
  const effect = importAllResult.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items5 = [bounties, first1, callback6];
  const effect1 = importAllResult.useEffect(() => {
    function handleModalClose(key) {
      if (key.key === handleModalClose(findIndexResult1[24]).BOUNTIES_MODAL_KEY) {
        callback2(false);
        const current = ref.current;
        const handleModalClose = current;
        ref.current = null;
        if (null != current) {
          let isBountyCompletedResult = bountyCompleted.isBountyCompleted(current);
          if (isBountyCompletedResult) {
            isBountyCompletedResult = !ref2.current;
          }
          ref2.current = false;
          const findIndexResult = handleModalClose.findIndex((id) => id.id === current);
          if (-1 !== findIndexResult) {
            const findIndexResult1 = handleModalClose.findIndex((id) => {
              let tmp = arg1 > closure_4;
              if (tmp) {
                tmp = arg1 > findIndexResult;
              }
              if (tmp) {
                tmp = !bountyCompleted.isBountyCompleted(id.id);
              }
              return tmp;
            });
            if (isBountyCompletedResult) {
              isBountyCompletedResult = -1 !== findIndexResult1;
            }
            if (isBountyCompletedResult) {
              isBountyCompletedResult = findIndexResult1 <= closure_4 + 3;
            }
            if (isBountyCompletedResult) {
              handleModalClose(findIndexResult1[25]).runAfterInteractions(() => {
                callback(findIndexResult1);
              });
              const obj = handleModalClose(findIndexResult1[25]);
            }
          }
        }
      }
    }
    const bounties = handleModalClose;
    const subscription = ref(first[18]).subscribe("MODAL_POP", handleModalClose);
    return () => {
      callback(closure_2[18]).unsubscribe("MODAL_POP", handleModalClose);
    };
  }, items5);
  const callback7 = importAllResult.useCallback((bountyId, questContentPosition) => {
    let obj = bounties(first[26]);
    if (obj.shouldMigrateToAdAnalyticsInterface(bounties(first[26]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_home_bounties")) {
      let tmpResult = tmp(tmp2[27]);
      obj = { type: tmp(tmp2[28]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[29]).AdCreativeType.BOUNTY, adCreativeId: bountyId.id, questContentCTA: tmp(tmp2[22]).QuestContentCTA.START_BOUNTY, surfaceId: tmp(tmp2[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, sourceQuestContent: tmp(tmp2[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, questContentPosition };
      tmpResult.captureAdUserAction(obj);
    } else {
      tmpResult = tmp(tmp2[21]);
      obj = { adContentId: bountyId.id, adCreativeType: tmp(tmp2[29]).AdCreativeType.BOUNTY, questContent: tmp(tmp2[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, questContentCTA: tmp(tmp2[22]).QuestContentCTA.START_BOUNTY, sourceQuestContent: tmp(tmp2[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, questContentPosition };
      const result = tmpResult.trackAdContentClicked(obj);
    }
    closure_8.current = bountyId.id;
    closure_9.current = first2.isBountyCompleted(bountyId.id);
    callback3(true);
    const obj6 = ref(first[24]);
    obj6.showModal({ bountyId: bountyId.id, sourceQuestContent: bounties(first[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL });
  }, []);
  ItemSeparator = callback7;
  const tmp25 = importDefault(dependencyMap[30])();
  const isInView = tmp25.isInView;
  keyExtractor = isInView;
  const items6 = [first1, callback7, isInView, first2];
  const items7 = [bounties, callback];
  const callback8 = importAllResult.useCallback((item) => {
    item = item.item;
    const bounties = item;
    const index = item.index;
    const obj = {
      adContentId: item.id,
      adCreativeType: bounties(first[29]).AdCreativeType.BOUNTY,
      questContent: bounties(first[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef: closure_10,
      sourceQuestContent: bounties(first[23]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
      overrideVisibility: !!isInView,
      children() {
        return callback(index(closure_2[8]), { bounty: item, index, isActive: index === closure_4, isModalVisible: closure_6, onPress: closure_17 });
      }
    };
    return closure_9(bounties(first[31]).QuestContentImpressionTrackerNative, obj, item.id);
  }, items6);
  const items8 = [isInView, first1, first2];
  const callback9 = importAllResult.useCallback((arg0) => {
    const bounties = arg0;
    const obj = {};
    const merged = Object.assign(arg0);
    obj["onLayout"] = function onLayout(nativeEvent) {
      if (null != nativeEvent[closure_0.index]) {
        const obj = {};
        const merged = Object.assign(ref.current.children[tmp.id]);
        obj["layout"] = nativeEvent.nativeEvent.layout;
        ref.current.children[tmp.id] = obj;
        callback(tmp.id);
      }
      nativeEvent.onLayout(nativeEvent);
    };
    return callback4(closure_5, obj);
  }, items7);
  let obj = { style: tmp.container };
  obj = { ref: tmp25.containerRef, onLayout: callback1 };
  const memo1 = importAllResult.useMemo(() => ({ isInView, activeIndex: first1, isModalVisible: first2 }), items8);
  obj = { ref, horizontal: true, data: bounties, renderItem: callback8, keyExtractor, contentContainerStyle: tmp.listContentContainer, snapToOffsets: memo, snapToEnd: false, decelerationRate: "fast", showsHorizontalScrollIndicator: false, ItemSeparatorComponent: ItemSeparator, ListFooterComponent: callback2, onScroll: callback3, onScrollBeginDrag: callback4, onMomentumScrollEnd: callback5, scrollEventThrottle: 16, extraData: memo1, CellRendererComponent: callback9 };
  obj.children = callback2(arg1(dependencyMap[32]).FlashList, obj);
  const items9 = [callback2(closure_5, obj), ];
  if (tmp2) {
    const obj1 = { orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
    tmp6 = callback2(importDefault(dependencyMap[33]), obj1);
  }
  items9[1] = tmp6;
  obj.children = items9;
  return closure_10(closure_5, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).BountyCarouselEmptyStateReason;
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let PX_16 = importDefault(dependencyMap[7]).space.PX_16;
PX_16 = importDefault(dependencyMap[7]).space.PX_16;
let closure_13 = arg1(dependencyMap[8]).CARD_WIDTH + PX_16;
const tmp2 = arg1(dependencyMap[6]);
let closure_14 = arg1(dependencyMap[9]).createStyles(() => {
  let obj = {};
  obj = { marginBottom: importDefault(dependencyMap[7]).space.PX_48 };
  obj.container = obj;
  obj = { paddingLeft: PX_16 };
  obj.listContentContainer = obj;
  obj.emptyState = { gap: importDefault(dependencyMap[7]).space.PX_12, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.lg, overflow: "hidden", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: 14, marginHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
  obj.emptyStateText = {};
  return obj;
});
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function QuestHomeBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  let verticalScrollEnabled;
  ({ verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = arg0);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  let obj = arg1(dependencyMap[34]);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const tmp = callback4();
  function useBountiesNux(arg0) {
    if (arg0) {
      const items = [first(closure_2[16]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
      let items1 = items;
    } else {
      items1 = [];
    }
    const tmp3 = callback(first(closure_2[17]).useSelectedDismissibleContent(items1), 2);
    const first = tmp3[0];
    const tmp5 = tmp3[1];
    closure_2 = React.useRef(false);
    const items2 = [first];
    const effect = React.useEffect(() => {
      let current = first !== first(ref[16]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET;
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        ref.current = true;
        const tmp5 = tmp5(ref[15])();
      }
    }, items2);
    const items3 = [first, tmp5];
    const effect1 = React.useEffect(() => {
      function handleHide(key) {
        if (key.key === handleHide(closure_2[15]).PROMO_SHEET_KEY) {
          callback(constants.USER_DISMISS);
        }
      }
      const first = handleHide;
      if (first === first(closure_2[16]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
        const subscription = tmp5(closure_2[18]).subscribe("HIDE_ACTION_SHEET", handleHide);
        return () => {
          callback(closure_2[18]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
        };
      }
    }, items3);
  }(questHomeBounties.length > 0);
  let tmp3 = 0 === questHomeBounties.length;
  let obj1 = arg1(dependencyMap[35]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_6.areAllBountiesCompleted());
  let tmp5 = !tmp3;
  if (!tmp3) {
    tmp5 = !stateFromStores;
  }
  if (tmp5) {
    tmp5 = obtainableOrbRewards > 0;
  }
  if (tmp5) {
    tmp5 = orbShopProducts.length >= arg1(dependencyMap[19]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
    const tmp8 = orbShopProducts.length >= arg1(dependencyMap[19]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
  }
  if (!tmp3) {
    if (!stateFromStores) {
      if (verticalScrollEnabled) {
        obj = { style: tmp.container };
        obj = { bounties: questHomeBounties };
        const items1 = [callback2(importDefault(dependencyMap[36]), obj), ];
        let tmp17 = null;
        if (tmp5) {
          obj1 = { orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
          tmp17 = callback2(importDefault(dependencyMap[33]), obj1);
        }
        items1[1] = tmp17;
        obj.children = items1;
        let tmp12Result = closure_10(View, obj);
        const tmp12 = closure_10;
        const tmp13 = View;
      } else {
        const obj2 = { bounties: questHomeBounties, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
        tmp12Result = callback2(QuestHomeBountiesCarousel, obj2);
      }
      return tmp12Result;
    }
  }
  const obj3 = { style: tmp.container };
  if (verticalScrollEnabled) {
    const obj4 = { bounties: questHomeBounties };
    if (!tmp3) {
      tmp3 = stateFromStores;
    }
    obj4.isEmptyOrCompleted = tmp3;
    let tmp23Result = tmp23(importDefault(dependencyMap[36]), obj4);
    const tmp28 = importDefault(dependencyMap[36]);
  } else {
    const obj5 = { reason: tmp3 ? closure_7.EMPTY : closure_7.COMPLETED };
    tmp23Result = tmp23(EmptyState, obj5);
  }
  obj3.children = tmp23Result;
  callback2(View, obj3);
});
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default memoResult;
