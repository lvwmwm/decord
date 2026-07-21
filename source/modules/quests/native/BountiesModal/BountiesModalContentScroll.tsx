// Module ID: 13784
// Function ID: 104189
// Name: ItemSeparator
// Dependencies: []
// Exports: default

// Module 13784 (ItemSeparator)
function ItemSeparator(trailingItem) {
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    let obj = {};
    obj = { height: PX_8 };
    obj.style = obj;
    tmp = callback2(closure_6, obj);
  }
  return tmp;
}
function BountiesRecapPullZone(height) {
  const style = { height: height.height };
  return callback2(closure_6, { style });
}
function BountiesScrollVideoItemContainer(index) {
  let children;
  let style;
  index = index.index;
  const arg1 = index;
  const slotHeight = index.slotHeight;
  const importDefault = slotHeight;
  const scrollY = index.scrollY;
  const dependencyMap = scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  let closure_3 = isPeekEnabled;
  ({ style, children } = index);
  let obj = arg1(dependencyMap[11]);
  const fn = function c() {
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === index) {
          num = 0.8;
        }
      }
    }
    const obj = {};
    const items = [, , num];
    obj.opacity = index(scrollY[11]).interpolate(absolute, [], items, index(scrollY[11]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY: 0.8, interpolate: arg1(dependencyMap[11]).interpolate, FADE_DEADBAND: 0.3, Extrapolation: arg1(dependencyMap[11]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 6532652233494;
  fn.__initData = closure_24;
  const animatedStyle = obj.useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback2(importDefault(dependencyMap[11]).View, { style, children });
}
function BountiesModalContentScrollInner(arg0) {
  let peekActive;
  let progress;
  let showProgressRing;
  let sourceQuestContent;
  let tmp26;
  let tmp27;
  let tmp29;
  let tmp30;
  let visible;
  ({ initialBountyId: closure_0, sourceQuestContent } = arg0);
  const importDefault = sourceQuestContent;
  let closure_36;
  let closure_37;
  let closure_38;
  let closure_39;
  let closure_40;
  let closure_41;
  let closure_42;
  let closure_43;
  let ItemSeparator;
  let BountiesRecapPullZone;
  let BountiesScrollVideoItemContainer;
  let BountiesModalContentScrollInner;
  let resumeCountdown;
  let memo3;
  let callback2;
  let callback3;
  let closure_52;
  let closure_53;
  let memo7;
  let derivedValue;
  let tmp = callback3();
  const dependencyMap = tmp;
  const height = importDefault(dependencyMap[12])().height;
  let callback = height;
  const ref = React.useRef(null);
  const tmp3 = callback(React.useState(arg1(dependencyMap[14]).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  const React = tmp3[1];
  callback = React.useCallback((nativeEvent) => {
    React(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  const tmp5 = function useBountiesScrollVideoLayout(footerHeight) {
    footerHeight = footerHeight.footerHeight;
    const size = sourceQuestContent(tmp[12])();
    const width = size.width;
    const sourceQuestContent = width;
    let height = size.height;
    let tmp = height;
    tmp = sourceQuestContent(tmp[13])();
    height = tmp;
    const items = [width, height, , , , ];
    ({ top: arr[2], left: arr[3], right: arr[4] } = tmp);
    items[5] = footerHeight;
    return React.useMemo(() => {
      const diff = width - tmp.left - tmp.right;
      const diff1 = height - tmp.top - footerHeight;
      let result = diff / closure_16;
      let result1 = diff;
      if (result > diff1) {
        result1 = diff1 * closure_16;
        result = diff1;
      }
      const obj = { top: tmp.top, left: Math.floor(tmp.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
      return obj;
    }, items);
  }({ footerHeight: tmp3[0] });
  let obj = arg1(dependencyMap[15]);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const first = callback(React.useState(() => {
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === closure_0);
    if (findIndexResult <= 0) {
      let items = questHomeBounties;
    } else {
      items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(questHomeBounties.slice(0, findIndexResult), arraySpreadResult);
    }
    return items;
  }), 1)[0];
  let closure_7 = first;
  let obj1 = arg1(dependencyMap[16]);
  const bountiesExperience = obj1.useBountiesExperience(ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE);
  const orbAmount = bountiesExperience.orbAmount;
  const ownedByVerticalScrollExperiment = bountiesExperience.ownedByVerticalScrollExperiment;
  const rewardTimerSeconds = bountiesExperience.rewardTimerSeconds;
  const AnalyticEvents = rewardTimerSeconds;
  const scrollAffordanceVariant = bountiesExperience.scrollAffordanceVariant;
  const ContentDismissActionType = tmp7;
  let obj2 = arg1(dependencyMap[17]);
  const result = obj2.shouldUseScrollIndicatorOverlay(scrollAffordanceVariant);
  let obj3 = arg1(dependencyMap[18]);
  const items = [closure_7];
  const items1 = [first, orbAmount];
  const stateFromStores = obj3.useStateFromStores(items, () => first.getCompletedBountyCount(first) * orbAmount, items1);
  const first1 = first[0];
  let obj4 = arg1(dependencyMap[18]);
  const items2 = [closure_7];
  const items3 = [first1, rewardTimerSeconds];
  const height2 = tmp5.height;
  const sum = height2 + PX_8;
  let closure_14 = sum;
  const diff = first.length - 1;
  let closure_15 = diff;
  let closure_16 = tmp14;
  const PX_8 = height2;
  const result1 = diff * sum;
  let closure_18 = result1;
  const sum1 = result1 + height2;
  let closure_19 = sum1;
  const items4 = [sum1, result1, height2];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    if (null == first1) {
      return false;
    } else {
      const bountyVideoProgress = first.getBountyVideoProgress(first1.id);
      let tmp4 = null != bountyVideoProgress;
      if (tmp4) {
        tmp4 = bountyVideoProgress.maxTimestampSec >= rewardTimerSeconds;
      }
      return tmp4;
    }
  }, items3);
  const memo = React.useMemo(() => ({ lastBounty: result1, fullRecap: sum1, revealHeight: height2 }), items4);
  let obj5 = arg1(dependencyMap[19]);
  const handleRecapMomentumEnd = obj5.useBountiesRecapScroll({ listRef: ref, enabled: tmp14, offsets: memo }).handleRecapMomentumEnd;
  let closure_20 = handleRecapMomentumEnd;
  const items5 = [first, sum1, stateFromStores > 0, sum];
  const memo1 = React.useMemo(() => {
    const mapped = first.map((arg0, arg1) => arg1 * closure_14);
    if (tmp14) {
      mapped.push(sum1);
    }
    return mapped;
  }, items5);
  const tmp19 = callback(React.useState(false), 2);
  const first2 = tmp19[0];
  let closure_21 = first2;
  let closure_22 = tmp21;
  const tmp22 = callback(React.useState(false), 2);
  const first3 = tmp22[0];
  callback3 = first3;
  let closure_24 = tmp24;
  [tmp26, tmp27] = callback(React.useState(true), 2);
  let closure_25 = tmp27;
  const tmp25 = callback(React.useState(true), 2);
  [tmp29, tmp30] = callback(React.useState(false), 2);
  let closure_26 = tmp30;
  const tmp31 = callback(React.useState(0), 2);
  const first4 = tmp31[0];
  let closure_27 = first4;
  let closure_28 = tmp31[1];
  let obj6 = arg1(dependencyMap[11]);
  const sharedValue = obj6.useSharedValue(false);
  let closure_29 = sharedValue;
  let obj7 = arg1(dependencyMap[11]);
  const sharedValue1 = obj7.useSharedValue(false);
  let closure_30 = sharedValue1;
  let obj8 = arg1(dependencyMap[11]);
  const sharedValue2 = obj8.useSharedValue(0);
  let closure_31 = sharedValue2;
  let obj9 = arg1(dependencyMap[20]);
  obj = { isEligible: first.length > 1, location: ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE };
  const bountySwipeUpNux = obj9.useBountySwipeUpNux(obj);
  const hasSingleUseSwipeUpNux = bountySwipeUpNux.hasSingleUseSwipeUpNux;
  let closure_32 = hasSingleUseSwipeUpNux;
  const dismissSingleUseSwipeUpNux = bountySwipeUpNux.dismissSingleUseSwipeUpNux;
  let closure_33 = dismissSingleUseSwipeUpNux;
  const hasRecurringSwipeUpNux = bountySwipeUpNux.hasRecurringSwipeUpNux;
  let closure_34 = hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountySwipeUpNux.dismissRecurringSwipeUpNux;
  let closure_35 = dismissRecurringSwipeUpNux;
  let tmp39 = tmp38;
  if (0 === first4) {
    tmp39 = hasSingleUseSwipeUpNux;
  }
  if (tmp39) {
    tmp39 = stateFromStores1;
  }
  closure_36 = tmp40;
  let tmp41 = result;
  if (result) {
    tmp41 = hasRecurringSwipeUpNux;
  }
  closure_37 = tmp41;
  const memo2 = React.useMemo(() => callback(tmp[21]).v4(), []);
  closure_38 = memo2;
  closure_39 = React.useRef(0);
  closure_40 = React.useRef(0);
  const effect = React.useEffect(() => {
    closure_39.current = Date.now();
  }, []);
  const items6 = [first4, memo2];
  const callback1 = React.useCallback((arg0) => {
    if (arg0 === callback(tmp[22]).VerticalScrollingDirection.DOWN) {
      let obj = callback(tmp[23]);
      obj = { verticalScrollingPosition: first4, scrollSessionId: memo2 };
      const result = obj.trackBountyAutoScrollDismissed(obj);
    }
  }, items6);
  let obj11 = arg1(dependencyMap[24]);
  obj = { listRef: ref };
  let tmp45 = tmp7;
  if ("auto" === scrollAffordanceVariant) {
    tmp45 = first4 < diff;
  }
  obj.enabled = tmp45;
  let str = "hint";
  if (0 === first4) {
    str = "hint";
    if (hasRecurringSwipeUpNux) {
      str = "countdown";
    }
  }
  obj.mode = str;
  obj.activeIndex = first4;
  let id;
  if (null != first[first4]) {
    id = tmp46.id;
  }
  let tmp48 = null;
  if (null != id) {
    tmp48 = id;
  }
  obj.activeBountyId = tmp48;
  obj.slotHeight = sum;
  obj.onCountdownCancelled = callback1;
  const bountiesAutoScroll = obj11.useBountiesAutoScroll(obj);
  const peekScale = bountiesAutoScroll.peekScale;
  closure_41 = peekScale;
  const cancel = bountiesAutoScroll.cancel;
  closure_42 = cancel;
  const dismissOnClose = bountiesAutoScroll.dismissOnClose;
  closure_43 = dismissOnClose;
  const takeDidAutoScroll = bountiesAutoScroll.takeDidAutoScroll;
  ItemSeparator = takeDidAutoScroll;
  const onPlaybackTimeChange = bountiesAutoScroll.onPlaybackTimeChange;
  BountiesRecapPullZone = onPlaybackTimeChange;
  const onEndCardVisible = bountiesAutoScroll.onEndCardVisible;
  BountiesScrollVideoItemContainer = onEndCardVisible;
  const pauseCountdown = bountiesAutoScroll.pauseCountdown;
  BountiesModalContentScrollInner = pauseCountdown;
  resumeCountdown = bountiesAutoScroll.resumeCountdown;
  const items7 = [onEndCardVisible, onPlaybackTimeChange, pauseCountdown, resumeCountdown];
  ({ visible, peekActive, progress, showProgressRing } = bountiesAutoScroll);
  memo3 = React.useMemo(() => ({ onPlaybackTimeChange, onPaused: pauseCountdown, onResumed: resumeCountdown, onEndCardVisible }), items7);
  const items8 = [memo2];
  callback2 = React.useCallback((current) => {
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = callback(tmp[22]).BountyScrollingType.MANUAL;
    }
    current = ref2.current;
    if (current !== current) {
      ref2.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref.current = timestamp;
      const diff = timestamp - ref.current;
      let result = { scrollingType: MANUAL };
      if (current > current) {
        let UP = callback(tmp[22]).VerticalScrollingDirection.DOWN;
      } else {
        UP = callback(tmp[22]).VerticalScrollingDirection.UP;
      }
      result.scrollingDirection = UP;
      result.verticalScrollingPosition = current;
      result.scrollSessionId = memo2;
      result.timeWatchedPreScrollMs = diff;
      result = callback(tmp[23]).trackBountyVerticalScroll(result);
      const obj2 = callback(tmp[23]);
    }
  }, items8);
  const items9 = [takeDidAutoScroll, callback2, first4, hasSingleUseSwipeUpNux, hasRecurringSwipeUpNux, dismissSingleUseSwipeUpNux, dismissRecurringSwipeUpNux];
  callback3 = React.useCallback((arg0) => {
    const tmp = takeDidAutoScroll();
    callback2(arg0);
    const BountyScrollingType = callback(tmp[22]).BountyScrollingType;
    callback2(arg0, tmp ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL);
    if (tmp5) {
      if (hasSingleUseSwipeUpNux) {
        dismissSingleUseSwipeUpNux(tmp7.USER_DISMISS);
      } else if (hasRecurringSwipeUpNux) {
        dismissRecurringSwipeUpNux(tmp7.USER_DISMISS);
      }
    }
  }, items9);
  let obj13 = arg1(dependencyMap[25]);
  closure_52 = obj13.useBountiesRecapOrbCount({ scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height2, targetOrbAmount: stateFromStores, enabled: tmp14 });
  const items10 = [first, first4];
  const effect1 = React.useEffect(() => {
    if (null != first[closure_27]) {
      const items = [tmp.id];
      callback(tmp[26]).markAdContentSeen(callback(tmp[27]).AdCreativeType.BOUNTY, items);
      const obj = callback(tmp[26]);
    }
  }, items10);
  const items11 = [first, first4, dismissOnClose, rewardTimerSeconds, sourceQuestContent];
  const items12 = [sourceQuestContent];
  const callback4 = React.useCallback(() => {
    const tmp = dismissOnClose();
    if (null != first[closure_27]) {
      const bountyVideoProgress = first.getBountyVideoProgress(tmp2.id);
      let maxTimestampSec;
      if (null != bountyVideoProgress) {
        maxTimestampSec = bountyVideoProgress.maxTimestampSec;
      }
      let num = 0;
      if (null != maxTimestampSec) {
        num = maxTimestampSec;
      }
      let duration;
      if (null != bountyVideoProgress) {
        duration = bountyVideoProgress.duration;
      }
      let num2 = 0;
      if (null != duration) {
        num2 = duration;
      }
      const result = 1000 * rewardTimerSeconds;
      let obj = callback(tmp[23]);
      obj = { adContentId: tmp2.id, adCreativeType: callback(tmp[27]).AdCreativeType.BOUNTY, event: rewardTimerSeconds.AD_VIDEO_MODAL_CLOSED };
      obj = { content_name: callback(tmp[22]).getQuestContentName(callback(tmp[28]).QuestContent.VIDEO_MODAL_MOBILE), content_id: callback(tmp[28]).QuestContent.VIDEO_MODAL_MOBILE };
      const obj4 = callback(tmp[22]);
      obj.video_progress = callback(tmp[29]).formatVideoProgressRatio(num, num2);
      obj.threshold_met = 1000 * num >= result;
      obj.reward_timer_seconds = result / 1000;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
      const obj5 = callback(tmp[29]);
    }
    sourceQuestContent(tmp[30]).hideModal();
  }, items11);
  closure_53 = React.useCallback(() => {
    let obj = callback(tmp[23]);
    obj = { adContentId: orbAmount, adCreativeType: callback(tmp[27]).AdCreativeType.BOUNTY, event: rewardTimerSeconds.AD_VIDEO_MODAL_CLOSED };
    obj = { content_name: callback(tmp[22]).getQuestContentName(callback(tmp[28]).QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: callback(tmp[28]).QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj);
    const obj4 = callback(tmp[22]);
    sourceQuestContent(tmp[30]).hideModal();
  }, items12);
  let obj14 = arg1(dependencyMap[11]);
  obj1 = { onScroll: mt };
  function mt(contentOffset) {
    const result = sharedValue2.set(contentOffset.contentOffset.y);
    if (sharedValue1.get()) {
      const result1 = sharedValue.set(tmp21(contentOffset));
    }
  }
  obj2 = { scrollY: sharedValue2, isDraggingSharedValue: sharedValue1, isScrollingInBoundsSharedValue: sharedValue, isScrollEventInBounds: closure_22 };
  mt.__closure = obj2;
  mt.__workletHash = 7942598540397;
  mt.__initData = closure_25;
  class Tt {
    constructor(arg0) {
      result = closure_30.set(true);
      result1 = closure_29.set(closure_22(arg0));
      return;
    }
  }
  obj3 = { isDraggingSharedValue: sharedValue1, isScrollingInBoundsSharedValue: sharedValue, isScrollEventInBounds: closure_22 };
  Tt.__closure = obj3;
  Tt.__workletHash = 14039038912528;
  Tt.__initData = closure_26;
  obj1.onBeginDrag = Tt;
  class Ct {
    constructor(arg0) {
      if (arg0.contentOffset.y < 0) {
        tmp3 = initialBountyId;
        tmp4 = closure_2;
        num2 = 22;
        UP = initialBountyId(closure_2[22]).VerticalScrollingDirection.DOWN;
      } else {
        tmp = initialBountyId;
        tmp2 = closure_2;
        num = 22;
        UP = initialBountyId(closure_2[22]).VerticalScrollingDirection.UP;
      }
      obj = initialBountyId(closure_2[11]);
      tmp5 = obj.runOnJS(cancel)(UP);
      result = closure_30.set(false);
      if (!closure_14) {
        tmp7 = closure_29;
        result1 = closure_29.set(false);
      }
      return;
    }
  }
  obj4 = { VerticalScrollingDirection: arg1(dependencyMap[22]).VerticalScrollingDirection, runOnJS: arg1(dependencyMap[11]).runOnJS, cancelScrollAffordance: cancel, isDraggingSharedValue: sharedValue1, IS_ANDROID: closure_14, isScrollingInBoundsSharedValue: sharedValue };
  Ct.__closure = obj4;
  Ct.__workletHash = 10752087179842;
  Ct.__initData = closure_27;
  obj1.onEndDrag = Ct;
  class Bt {
    constructor(arg0) {
      if (closure_16) {
        tmp = initialBountyId;
        tmp2 = closure_2;
        num = 11;
        obj = initialBountyId(closure_2[11]);
        tmp3 = handleRecapMomentumEnd;
        tmp4 = arg0;
        tmp5 = obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      result = closure_29.set(false);
      return;
    }
  }
  obj5 = { showRecapPullZone: tmp14, runOnJS: arg1(dependencyMap[11]).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue };
  Bt.__closure = obj5;
  Bt.__workletHash = 13684210320337;
  Bt.__initData = closure_28;
  obj1.onMomentumEnd = Bt;
  const tmp28 = callback(React.useState(false), 2);
  const tmp36 = first.length > 1;
  let obj20 = arg1(dependencyMap[11]);
  function xt() {
    return Math.min(Math.max(Math.round(sharedValue2.get() / sum), 0), diff);
  }
  xt.__closure = { scrollY: sharedValue2, slotHeight: sum, lastBountyIndex: diff };
  xt.__workletHash = 14048843158960;
  xt.__initData = closure_29;
  function yt(arg0, arg1) {
    if (arg0 !== arg1) {
      callback(callback[11]).runOnJS(callback3)(arg0);
      const obj = callback(callback[11]);
    }
  }
  obj6 = { runOnJS: arg1(dependencyMap[11]).runOnJS, commitSwipe: callback3 };
  yt.__closure = obj6;
  yt.__workletHash = 14015091539518;
  yt.__initData = closure_30;
  const animatedReaction = obj20.useAnimatedReaction(xt, yt);
  let obj22 = arg1(dependencyMap[11]);
  class Mt {
    constructor() {
      tmp = closure_16;
      if (closure_16) {
        tmp2 = closure_31;
        tmp4 = closure_18;
        tmp5 = initialBountyId;
        tmp6 = closure_2;
        num = 19;
        value = closure_31.get();
        tmp = value >= closure_18 - initialBountyId(closure_2[19]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  obj7 = { showRecapPullZone: tmp14, scrollY: sharedValue2, lastBountyScrollOffset: result1, RECAP_SNAP_EPSILON: arg1(dependencyMap[19]).RECAP_SNAP_EPSILON };
  Mt.__closure = obj7;
  Mt.__workletHash = 6584708256992;
  Mt.__initData = closure_31;
  function wt(arg0, arg1) {
    if (arg0 !== arg1) {
      callback(callback[11]).runOnJS(tmp30)(arg0);
      const obj = callback(callback[11]);
    }
  }
  obj8 = { runOnJS: arg1(dependencyMap[11]).runOnJS, setShowRecapFooter: tmp30 };
  wt.__closure = obj8;
  wt.__workletHash = 10788669301891;
  wt.__initData = closure_32;
  const animatedReaction1 = obj22.useAnimatedReaction(Mt, wt);
  let obj25 = arg1(dependencyMap[11]);
  class Vt {
    constructor() {
      tmp = closure_16;
      if (closure_16) {
        tmp2 = closure_31;
        tmp3 = closure_18;
        tmp = closure_31.get() > closure_18;
      }
      return tmp;
    }
  }
  Vt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue2, lastBountyScrollOffset: result1 };
  Vt.__workletHash = 6186370630693;
  Vt.__initData = closure_33;
  class Nt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = initialBountyId;
        tmp2 = closure_2;
        num = 11;
        obj = initialBountyId(closure_2[11]);
        tmp3 = closure_22;
        tmp4 = obj.runOnJS(closure_22)(arg0);
      }
      return;
    }
  }
  obj9 = { runOnJS: arg1(dependencyMap[11]).runOnJS, setIsRecapPageRevealed: tmp21 };
  Nt.__closure = obj9;
  Nt.__workletHash = 12713474352874;
  Nt.__initData = closure_34;
  const animatedReaction2 = obj25.useAnimatedReaction(Vt, Nt);
  let obj27 = arg1(dependencyMap[11]);
  function kt() {
    let tmp = tmp14;
    if (tmp14) {
      const value = sharedValue2.get();
      tmp = value >= sum1 - callback(tmp[19]).RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj1);
  kt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue2, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: arg1(dependencyMap[19]).RECAP_SNAP_EPSILON };
  kt.__workletHash = 5669564400667;
  kt.__initData = closure_35;
  function bt(arg0, arg1) {
    if (arg0 !== arg1) {
      callback(callback[11]).runOnJS(tmp24)(arg0);
      const obj = callback(callback[11]);
    }
  }
  obj11 = { runOnJS: arg1(dependencyMap[11]).runOnJS, setIsRecapPageOnTop: tmp24 };
  bt.__closure = obj11;
  bt.__workletHash = 8102193741774;
  bt.__initData = closure_36;
  const animatedReaction3 = obj27.useAnimatedReaction(kt, bt);
  const items13 = [height2, stateFromStores > 0];
  const items14 = [tmp.listWrapper, tmp5];
  const memo4 = React.useMemo(() => {
    let tmp = null;
    if (tmp14) {
      const obj = { height: height2 };
      tmp = first1(onPlaybackTimeChange, obj);
    }
    return tmp;
  }, items13);
  const items15 = [tmp5.top];
  const memo5 = React.useMemo(() => {
    const items = [tmp.listWrapper, { top: 0, left: tmp5.left, width: tmp5.width, height: tmp5.top + tmp5.height + 97 }];
    return items;
  }, items14);
  const items16 = [, ];
  ({ width: arr18[0], height: arr18[1] } = tmp5);
  const memo6 = React.useMemo(() => ({ paddingTop: tmp5.top, paddingBottom: 97 }), items15);
  memo7 = React.useMemo(() => ({ width: tmp5.width, height: tmp5.height }), items16);
  const items17 = [tmp.closeButton, , , ];
  ({ top: arr19[1], left: arr19[2], width: arr19[3] } = tmp5);
  const items18 = [tmp.autoScrollIndicator, , , , ];
  ({ top: arr20[1], height: arr20[2], left: arr20[3], width: arr20[4] } = tmp5);
  const memo8 = React.useMemo(() => {
    const items = [tmp.closeButton, ];
    const obj = { top: tmp5.top + sourceQuestContent(tmp[9]).space.PX_8 };
    const sum = tmp5.left + tmp5.width;
    const diff = sum - sourceQuestContent(tmp[9]).space.PX_32;
    obj.left = diff - sourceQuestContent(tmp[9]).space.PX_8;
    items[1] = obj;
    return items;
  }, items17);
  const items19 = [first3, tmp.recapPage, , , , ];
  ({ top: arr21[2], left: arr21[3], width: arr21[4] } = tmp5);
  items19[5] = height;
  const memo9 = React.useMemo(() => {
    const items = [tmp.autoScrollIndicator, ];
    const obj = {};
    const sum = tmp5.top + callback(tmp[24]).AUTO_SCROLL_PEEK_TOP_OFFSET;
    const sum1 = sum + tmp5.height * callback(tmp[24]).AUTO_SCROLL_PEEK_SCALE;
    obj.top = sum1 + sourceQuestContent(tmp[9]).space.PX_32;
    ({ left: obj.left, width: obj.width } = tmp5);
    items[1] = obj;
    return items;
  }, items18);
  const memo10 = React.useMemo(() => {
    const items = [tmp.recapPage, ];
    let obj = { top: tmp5.top, left: tmp5.left, width: tmp5.width, height: height - tmp5.top };
    let tmp = null;
    if (first3) {
      obj = { zIndex: diff };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = obj;
    return items;
  }, items19);
  let obj30 = arg1(dependencyMap[11]);
  class Yt {
    constructor() {
      obj = initialBountyId(closure_2[19]);
      return obj.getRevealProgress(closure_31.get(), closure_18, height);
    }
  }
  const obj10 = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue2, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: arg1(dependencyMap[19]).RECAP_SNAP_EPSILON };
  Yt.__closure = { getRevealProgress: arg1(dependencyMap[19]).getRevealProgress, scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height2 };
  Yt.__workletHash = 8427964721554;
  Yt.__initData = closure_37;
  derivedValue = obj30.useDerivedValue(Yt);
  let obj32 = arg1(dependencyMap[11]);
  class Jt {
    constructor() {
      obj = {};
      obj2 = initialBountyId(closure_2[11]);
      value = runOnJS.get();
      obj.opacity = obj2.interpolate(value, ["Text", "lc"], ["Text", "lc"], initialBountyId(closure_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  obj13 = { interpolate: arg1(dependencyMap[11]).interpolate, recapPullProgress: derivedValue, Extrapolation: arg1(dependencyMap[11]).Extrapolation };
  Jt.__closure = obj13;
  Jt.__workletHash = 1497321349449;
  Jt.__initData = closure_38;
  const animatedStyle = obj32.useAnimatedStyle(Jt);
  const obj12 = { getRevealProgress: arg1(dependencyMap[19]).getRevealProgress, scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height2 };
  class Ut {
    constructor() {
      obj = {};
      obj2 = initialBountyId(closure_2[11]);
      value = runOnJS.get();
      items = [, ];
      items[0] = closure_19;
      items[1] = handleRecapMomentumEnd;
      obj.opacity = obj2.interpolate(value, items, ["<string:3813229678>", "<string:153900714>"], initialBountyId(closure_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  obj14 = { interpolate: arg1(dependencyMap[11]).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: closure_19, FOOTER_FADE_END_PROGRESS: closure_20, Extrapolation: arg1(dependencyMap[11]).Extrapolation };
  Ut.__closure = obj14;
  Ut.__workletHash = 3685190194249;
  Ut.__initData = closure_39;
  const animatedStyle1 = arg1(dependencyMap[11]).useAnimatedStyle(Ut);
  const obj35 = arg1(dependencyMap[11]);
  class Gt {
    constructor() {
      if (closure_31.get() >= closure_18 - closure_14 / 2) {
        tmp6 = runOnJS;
        value = runOnJS.get();
      } else {
        tmp = initialBountyId;
        tmp2 = closure_2;
        num = 19;
        obj = initialBountyId(closure_2[19]);
        tmp3 = closure_31;
        tmp4 = height;
        num2 = 0;
        value = obj.getRevealProgress(closure_31.get(), 0, height);
      }
      obj = {};
      obj3 = initialBountyId(closure_2[11]);
      items = [, ];
      items[0] = closure_19;
      items[1] = handleRecapMomentumEnd;
      obj.opacity = obj3.interpolate(value, items, ["<string:3813229678>", "<string:153900714>"], initialBountyId(closure_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj37 = arg1(dependencyMap[11]);
  Gt.__closure = { scrollY: sharedValue2, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: arg1(dependencyMap[19]).getRevealProgress, recapRevealHeight: height2, interpolate: arg1(dependencyMap[11]).interpolate, FOOTER_FADE_START_PROGRESS: closure_19, FOOTER_FADE_END_PROGRESS: closure_20, Extrapolation: arg1(dependencyMap[11]).Extrapolation };
  Gt.__workletHash = 15092194442650;
  Gt.__initData = closure_40;
  const items20 = [tmp.peekGradient, , , , ];
  ({ left: arr22[1], width: arr22[2], top: arr22[3], height: arr22[4] } = tmp5);
  const animatedStyle2 = obj37.useAnimatedStyle(Gt);
  const memo11 = React.useMemo(() => {
    const items = [tmp.peekGradient, { left: tmp5.left, width: tmp5.width, top: tmp5.top + tmp5.height, bottom: 0 }];
    return items;
  }, items20);
  const obj15 = { scrollY: sharedValue2, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: arg1(dependencyMap[19]).getRevealProgress, recapRevealHeight: height2, interpolate: arg1(dependencyMap[11]).interpolate, FOOTER_FADE_START_PROGRESS: closure_19, FOOTER_FADE_END_PROGRESS: closure_20, Extrapolation: arg1(dependencyMap[11]).Extrapolation };
  class Qt {
    constructor() {
      obj = {};
      obj2 = initialBountyId(closure_2[11]);
      value = closure_31.get();
      items = [0.229];
      items[1] = closure_14;
      obj.opacity = obj2.interpolate(value, items, ["<string:3813229678>", "<string:153900714>"], initialBountyId(closure_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj39 = arg1(dependencyMap[11]);
  Qt.__closure = { interpolate: arg1(dependencyMap[11]).interpolate, scrollY: sharedValue2, slotHeight: sum, Extrapolation: arg1(dependencyMap[11]).Extrapolation };
  Qt.__workletHash = 5908400559291;
  Qt.__initData = closure_41;
  const animatedStyle3 = obj39.useAnimatedStyle(Qt);
  const obj16 = { interpolate: arg1(dependencyMap[11]).interpolate, scrollY: sharedValue2, slotHeight: sum, Extrapolation: arg1(dependencyMap[11]).Extrapolation };
  function zt() {
    return derivedValue.get() < handleRecapMomentumEnd;
  }
  zt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: closure_20 };
  zt.__workletHash = 547045699209;
  zt.__initData = closure_42;
  class Zt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = initialBountyId;
        tmp2 = closure_2;
        num = 11;
        obj = initialBountyId(closure_2[11]);
        tmp3 = closure_25;
        tmp4 = obj.runOnJS(closure_25)(arg0);
      }
      return;
    }
  }
  const obj17 = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: closure_20 };
  const obj41 = arg1(dependencyMap[11]);
  Zt.__closure = { runOnJS: arg1(dependencyMap[11]).runOnJS, setIsCloseButtonPressable: tmp27 };
  Zt.__workletHash = 6290671204687;
  Zt.__initData = closure_43;
  const animatedReaction4 = obj41.useAnimatedReaction(zt, Zt);
  const items21 = [sum, sharedValue2, memo7, "peek" === scrollAffordanceVariant && hasRecurringSwipeUpNux, "auto" === scrollAffordanceVariant, peekScale, sourceQuestContent, , , , , , , , , ];
  ({ width: arr23[7], height: arr23[8] } = tmp5);
  items21[9] = first4;
  items21[10] = first2;
  items21[11] = first3;
  items21[12] = sharedValue;
  items21[13] = tmp41;
  items21[14] = memo3;
  items21[15] = ownedByVerticalScrollExperiment;
  const items22 = [first4, first2, first3, , , , , , ];
  ({ width: arr24[3], height: arr24[4] } = tmp5);
  items22[5] = "peek" === scrollAffordanceVariant && hasRecurringSwipeUpNux;
  items22[6] = "auto" === scrollAffordanceVariant;
  items22[7] = tmp41;
  items22[8] = ownedByVerticalScrollExperiment;
  const callback5 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let tmp = !ownedByVerticalScrollExperiment;
    if (!tmp) {
      tmp = index === first4;
    }
    let obj = { index, slotHeight: sum, scrollY: sharedValue2, style: memo7, isPeekEnabled: tmp40 };
    obj = { bounty: item, sourceQuestContent, width: tmp5.width, height: tmp5.height, isActive: index === first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, isScrollingInBoundsSharedValue: sharedValue };
    let tmp6 = tmp41;
    if (tmp41) {
      tmp6 = 0 === index;
    }
    obj.isScrollIndicatorOverlayEnabled = tmp6;
    obj.shouldLoadHls = tmp;
    let tmp7;
    if (tmp7) {
      tmp7 = memo3;
    }
    obj.scrollAffordance = tmp7;
    let tmp8;
    if (index === first4) {
      if (tmp7) {
        tmp8 = peekScale;
      }
    }
    obj.peekScale = tmp8;
    obj.children = first1(callback(tmp[31]).BountiesScrollVideoItem, obj, item.id);
    return first1(onEndCardVisible, obj);
  }, items21);
  [][0] = height2;
  const memo12 = React.useMemo(() => ({ activeIndex: first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, width: tmp5.width, height: tmp5.height, isPeekEnabled: tmp40, isAutoScrollEnabled: tmp7, canShowScrollIndicatorOverlay: tmp41, ownedByVerticalScrollExperiment }), items22);
  if (0 === first.length) {
    return null;
  } else {
    if (tmp39) {
      let tmp77 = first1(importDefault(dependencyMap[32]), {});
    } else {
      tmp77 = null;
      if (tmp29) {
        const obj19 = { orbAmount: stateFromStores };
        tmp77 = first1(arg1(dependencyMap[33]).BountiesScrollRecapFooter, obj19);
      }
    }
    obj20 = { style: tmp.root };
    const obj21 = { active: peekActive };
    const items23 = [first1(importDefault(dependencyMap[34]), obj21), , , , , , ];
    let tmp90Result = null;
    if (tmp14) {
      obj22 = {};
      const items24 = [memo10, animatedStyle];
      obj22.style = items24;
      let str2 = "none";
      if (first3) {
        str2 = "box-none";
      }
      obj22.pointerEvents = str2;
      const obj23 = {
        adContentId: orbAmount,
        adCreativeType: arg1(dependencyMap[27]).AdCreativeType.BOUNTY,
        questContent: arg1(dependencyMap[28]).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first3,
        sourceQuestContent,
        children() {
              return first1(callback(tmp[36]).BountiesScrollRecapPage, { orbAmount: closure_52, onClose: closure_53, style: { flex: 1 } });
            }
      };
      obj22.children = first1(arg1(dependencyMap[35]).QuestContentImpressionTrackerNative, obj23);
      tmp90Result = first1(importDefault(dependencyMap[11]).View, obj22);
      const tmp90 = first1;
    }
    items23[1] = tmp90Result;
    const obj24 = { style: memo5 };
    tmp = arg1;
    tmp = dependencyMap;
    obj25 = {
      ref,
      data: first,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback5,
      extraData: memo12,
      overrideItemLayout: tmp76
    };
    tmp = ItemSeparator;
    obj25.ItemSeparatorComponent = ItemSeparator;
    obj25.ListFooterComponent = memo4;
    obj25.snapToOffsets = memo1;
    obj25.snapToEnd = false;
    obj25.decelerationRate = 0.85;
    obj25.showsVerticalScrollIndicator = false;
    obj25.drawDistance = sum;
    obj25.onScroll = animatedScrollHandler;
    obj25.scrollEventThrottle = 16;
    obj25.contentContainerStyle = memo6;
    obj24.children = first1(arg1(dependencyMap[37]).AnimatedFlashList, obj25);
    items23[2] = first1(questHomeBounties, obj24);
    tmp = null;
    if (tmp40) {
      tmp = null;
      if (first.length > 1) {
        tmp = first1;
        tmp = importDefault;
        tmp = dependencyMap;
        const obj26 = { pointerEvents: "none" };
        const items25 = [memo11, animatedStyle3];
        obj26.style = items25;
        tmp = first1;
        obj27 = {};
        tmp = closure_18;
        obj27.colors = closure_18;
        tmp = tmp5;
        obj27.style = tmp5.absoluteFill;
        obj26.children = first1(importDefault(dependencyMap[38]), obj27);
        tmp = first1(importDefault(dependencyMap[11]).View, obj26);
      }
    }
    items23[3] = tmp;
    tmp = importDefault;
    tmp = dependencyMap;
    tmp = first1;
    const obj28 = {};
    const items26 = [memo8, animatedStyle1];
    obj28.style = items26;
    let str5 = "none";
    if (tmp26) {
      str5 = "box-none";
    }
    obj28.pointerEvents = str5;
    tmp = null;
    if (tmp26) {
      tmp = first1;
      tmp = importDefault;
      tmp = dependencyMap;
      const obj29 = { onPress: callback4 };
      tmp = first1(importDefault(dependencyMap[39]), obj29);
    }
    obj28.children = tmp;
    items23[4] = tmp(importDefault(dependencyMap[11]).View, obj28);
    tmp = null;
    if (visible) {
      tmp = first1;
      tmp = questHomeBounties;
      obj30 = { style: memo9, pointerEvents: "none" };
      tmp = first1;
      tmp = importDefault;
      tmp = dependencyMap;
      const obj31 = { progress, showProgressRing };
      obj30.children = first1(importDefault(dependencyMap[40]), obj31);
      tmp = first1(questHomeBounties, obj30);
    }
    items23[5] = tmp;
    tmp = importDefault;
    tmp = dependencyMap;
    tmp = first1;
    obj32 = {};
    tmp = importDefault(dependencyMap[14]);
    if (!tmp39) {
      tmp39 = tmp29;
    }
    obj32.visible = tmp39;
    obj32.onContentLayout = callback;
    tmp = closure_15;
    obj32.zIndex = closure_15;
    obj32.opacityStyle = animatedStyle2;
    obj32.children = tmp77;
    items23[6] = tmp(tmp, obj32);
    obj20.children = items23;
    return height2(questHomeBounties, obj20);
  }
  const obj18 = { runOnJS: arg1(dependencyMap[11]).runOnJS, setIsCloseButtonPressable: tmp27 };
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8, QuestsExperimentLocations: closure_9 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const ContentDismissActionType = arg1(dependencyMap[6]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
let closure_14 = arg1(dependencyMap[8]).isAndroid();
let closure_15 = 3;
let closure_16 = 0.5625;
const PX_8 = importDefault(dependencyMap[9]).space.PX_8;
let closure_18 = ["isArray", "<string:2104688640>"];
let closure_19 = 0.05;
let closure_20 = 0.1;
let closure_21 = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
let closure_22 = () => {
  function isScrollEventInBounds(contentOffset) {
    return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
  }
  isScrollEventInBounds.__closure = {};
  isScrollEventInBounds.__workletHash = 14148486927190;
  isScrollEventInBounds.__initData = closure_21;
  return isScrollEventInBounds;
}();
const obj = arg1(dependencyMap[8]);
let closure_23 = arg1(dependencyMap[10]).createStyles(() => {
  const closeButton = { position: "absolute", zIndex: closure_15 };
  const autoScrollIndicator = { conversationIds: "<string:1627390512>", KeyboardEvents: "<string:1166889530>", forceFlush: "<string:678577549>", zIndex: closure_15 };
  return { root: { flex: 1 }, recapPage: {}, listWrapper: { -77407381: 6, -1399238308: "100%", 1565641825: 48 }, closeButton, peekGradient: {}, autoScrollIndicator };
});
let closure_24 = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
let closure_25 = { code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}" };
let closure_26 = { code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}" };
let closure_27 = { code: "function BountiesModalContentScrollTsx5(event){const{VerticalScrollingDirection,runOnJS,cancelScrollAffordance,isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;const scrollingDirection=event.contentOffset.y<0?VerticalScrollingDirection.DOWN:VerticalScrollingDirection.UP;runOnJS(cancelScrollAffordance)(scrollingDirection);isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let closure_28 = { code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_29 = { code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let closure_30 = { code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}" };
let closure_31 = { code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_32 = { code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let closure_33 = { code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let closure_34 = { code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_35 = { code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_36 = { code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let closure_37 = { code: "function BountiesModalContentScrollTsx15(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let closure_38 = { code: "function BountiesModalContentScrollTsx16(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx17(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_40 = { code: "function BountiesModalContentScrollTsx18(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_41 = { code: "function BountiesModalContentScrollTsx19(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_42 = { code: "function BountiesModalContentScrollTsx20(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx21(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
const obj2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  let bountyId;
  let sourceQuestContent;
  ({ bountyId, sourceQuestContent } = arg0);
  const obj = { theme: arg1(dependencyMap[42]).ThemeTypes.DARKER, children: callback2(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) };
  return callback2(arg1(dependencyMap[41]).ThemeContextProvider, obj);
};
