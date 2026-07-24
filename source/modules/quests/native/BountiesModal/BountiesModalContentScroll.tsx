// Module ID: 13958
// Function ID: 106724
// Name: ItemSeparator
// Dependencies: [57, 31, 27, 6940, 4976, 653, 1345, 33, 478, 689, 4130, 3991, 1450, 1557, 13959, 10493, 10868, 10869, 566, 13961, 13962, 491, 6968, 6958, 13964, 13965, 9480, 6969, 4981, 10503, 13956, 13966, 13995, 13996, 13997, 10956, 13998, 7527, 4554, 14002, 14003, 3854, 7529, 2]
// Exports: default

// Module 13958 (ItemSeparator)
import _slicedToArray from "_slicedToArray";
import BountiesScrollVideoItemInner from "BountiesScrollVideoItemInner";
import get_ActivityIndicator from "AdCreativeType";
import closure_7 from "_createForOfIteratorHelperLoose";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "BountiesScrollRecapFooter";
import isWindows from "isWindows";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function ItemSeparator(trailingItem) {
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    let obj = {};
    obj = { height: PX_8 };
    obj.style = obj;
    tmp = callback(closure_6, obj);
  }
  return tmp;
}
function BountiesRecapPullZone(height) {
  const style = { height: height.height };
  return callback(closure_6, { style });
}
function BountiesScrollVideoItemContainer(index) {
  let children;
  let style;
  index = index.index;
  const slotHeight = index.slotHeight;
  const scrollY = index.scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  ({ style, children } = index);
  let obj = index(scrollY[11]);
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
    const items = [1, 1, num];
    obj.opacity = index(scrollY[11]).interpolate(absolute, [0, 0.3, 1], items, index(scrollY[11]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY: 0.8, interpolate: index(scrollY[11]).interpolate, FADE_DEADBAND: 0.3, Extrapolation: index(scrollY[11]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 6532652233494;
  fn.__initData = closure_24;
  const animatedStyle = obj.useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback(slotHeight(scrollY[11]).View, { style, children });
}
function BountiesModalContentScrollInner(arg0) {
  let peekActive;
  let progress;
  let require;
  let showProgressRing;
  let sourceQuestContent;
  let tmp26;
  let tmp27;
  let tmp29;
  let tmp30;
  let visible;
  ({ initialBountyId: require, sourceQuestContent } = arg0);
  let c37;
  let c38;
  let memo2;
  let closure_40;
  let closure_41;
  let peekScale;
  let cancel;
  let dismissOnClose;
  let takeDidAutoScroll;
  let onPlaybackTimeChange;
  let onEndCardVisible;
  let pauseCountdown;
  let resumeCountdown;
  let memo3;
  let callback2;
  let callback3;
  let closure_53;
  let closure_54;
  let memo7;
  let derivedValue;
  let tmp = callback2();
  const dependencyMap = tmp;
  let height = sourceQuestContent(1450)().height;
  const ref = React.useRef(null);
  const tmp3 = height(React.useState(require(13959) /* BountiesScrollPromptFooter */.BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  React = tmp3[1];
  let callback = React.useCallback((nativeEvent) => {
    React(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  const tmp5 = (function useBountiesScrollVideoLayout(footerHeight) {
    footerHeight = footerHeight.footerHeight;
    const size = sourceQuestContent(tmp[12])();
    const width = size.width;
    let height = size.height;
    tmp = sourceQuestContent(tmp[13])();
    height = tmp;
    const items = [width, height, , , , ];
    ({ top: arr[2], left: arr[3], right: arr[4] } = tmp);
    items[5] = footerHeight;
    return React.useMemo(() => {
      const diff = width - tmp.left - tmp.right;
      const diff1 = height - tmp.top - footerHeight;
      let result = diff / diff;
      let result1 = diff;
      if (result > diff1) {
        result1 = diff1 * diff;
        result = diff1;
      }
      const obj = { top: tmp.top, left: Math.floor(tmp.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
      return obj;
    }, items);
  })({ footerHeight: tmp3[0] });
  const absoluteFill = tmp5;
  let obj = require(10493) /* _createForOfIteratorHelperLoose */;
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const first = height(React.useState(() => {
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === outer1_0);
    if (findIndexResult <= 0) {
      let items = questHomeBounties;
    } else {
      items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(questHomeBounties.slice(findIndexResult), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(questHomeBounties.slice(0, findIndexResult), arraySpreadResult);
    }
    return items;
  }), 1)[0];
  let obj1 = require(10868) /* useBountiesExperience */;
  const bountiesExperience = obj1.useBountiesExperience(ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE);
  const orbAmount = bountiesExperience.orbAmount;
  ownedByVerticalScrollExperiment = bountiesExperience.ownedByVerticalScrollExperiment;
  const rewardTimerSeconds = bountiesExperience.rewardTimerSeconds;
  const scrollAffordanceVariant = bountiesExperience.scrollAffordanceVariant;
  callback = tmp7;
  let obj2 = require(10869) /* shouldUseScrollIndicatorOverlay */;
  let result = obj2.shouldUseScrollIndicatorOverlay(scrollAffordanceVariant);
  let obj3 = require(566) /* initialize */;
  let items = [first];
  const items1 = [first, orbAmount];
  const stateFromStores = obj3.useStateFromStores(items, () => first.getCompletedBountyCount(first) * orbAmount, items1);
  const first1 = first[0];
  let obj4 = require(566) /* initialize */;
  const items2 = [first];
  const items3 = [first1, rewardTimerSeconds];
  const height2 = tmp5.height;
  let sum = height2 + PX_8;
  let c15 = sum;
  let diff = first.length - 1;
  let c16 = diff;
  PX_8 = tmp14;
  let result1 = diff * sum;
  let sum1 = result1 + height2;
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
  let obj5 = require(13961) /* getRevealProgress */;
  const handleRecapMomentumEnd = obj5.useBountiesRecapScroll({ listRef: ref, enabled: tmp14, offsets: memo }).handleRecapMomentumEnd;
  const items5 = [first, sum1, stateFromStores > 0, sum];
  const memo1 = React.useMemo(() => {
    const mapped = first.map((arg0, arg1) => arg1 * outer1_15);
    if (closure_17) {
      mapped.push(sum1);
    }
    return mapped;
  }, items5);
  const tmp19 = height(React.useState(false), 2);
  const first2 = tmp19[0];
  callback2 = tmp21;
  const tmp22 = height(React.useState(false), 2);
  const first3 = tmp22[0];
  let closure_25 = tmp24;
  [tmp26, tmp27] = height(React.useState(true), 2);
  let closure_26 = tmp27;
  const tmp25 = height(React.useState(true), 2);
  [tmp29, tmp30] = height(React.useState(false), 2);
  let closure_27 = tmp30;
  const tmp31 = height(React.useState(0), 2);
  const first4 = tmp31[0];
  let closure_29 = tmp31[1];
  let obj6 = require(3991);
  const sharedValue = obj6.useSharedValue(false);
  let obj7 = require(3991);
  const sharedValue1 = obj7.useSharedValue(false);
  let obj8 = require(3991);
  const sharedValue2 = obj8.useSharedValue(0);
  let obj9 = require(13962) /* useBountySwipeUpNux */;
  obj = { isEligible: first.length > 1, location: ownedByVerticalScrollExperiment.VIDEO_MODAL_MOBILE };
  const bountySwipeUpNux = obj9.useBountySwipeUpNux(obj);
  const hasSingleUseSwipeUpNux = bountySwipeUpNux.hasSingleUseSwipeUpNux;
  const dismissSingleUseSwipeUpNux = bountySwipeUpNux.dismissSingleUseSwipeUpNux;
  const hasRecurringSwipeUpNux = bountySwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountySwipeUpNux.dismissRecurringSwipeUpNux;
  let tmp39 = tmp38;
  if (0 === first4) {
    tmp39 = hasSingleUseSwipeUpNux;
  }
  if (tmp39) {
    tmp39 = stateFromStores1;
  }
  c37 = tmp40;
  let tmp41 = result;
  if (result) {
    tmp41 = hasRecurringSwipeUpNux;
  }
  c38 = tmp41;
  memo2 = React.useMemo(() => outer1_0(tmp[21]).v4(), []);
  closure_40 = React.useRef(0);
  closure_41 = React.useRef(0);
  const effect = React.useEffect(() => {
    closure_40.current = Date.now();
  }, []);
  const items6 = [first4, memo2];
  const callback1 = React.useCallback((arg0) => {
    if (arg0 === outer1_0(tmp[22]).VerticalScrollingDirection.DOWN) {
      let obj = outer1_0(tmp[23]);
      obj = { verticalScrollingPosition: first4, scrollSessionId: memo2 };
      const result = obj.trackBountyAutoScrollDismissed(obj);
    }
  }, items6);
  let obj11 = require(13964) /* set */;
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
  peekScale = bountiesAutoScroll.peekScale;
  cancel = bountiesAutoScroll.cancel;
  dismissOnClose = bountiesAutoScroll.dismissOnClose;
  takeDidAutoScroll = bountiesAutoScroll.takeDidAutoScroll;
  onPlaybackTimeChange = bountiesAutoScroll.onPlaybackTimeChange;
  onEndCardVisible = bountiesAutoScroll.onEndCardVisible;
  pauseCountdown = bountiesAutoScroll.pauseCountdown;
  resumeCountdown = bountiesAutoScroll.resumeCountdown;
  const items7 = [onEndCardVisible, onPlaybackTimeChange, pauseCountdown, resumeCountdown];
  ({ visible, peekActive, progress, showProgressRing } = bountiesAutoScroll);
  memo3 = React.useMemo(() => ({ onPlaybackTimeChange, onPaused: pauseCountdown, onResumed: resumeCountdown, onEndCardVisible }), items7);
  const items8 = [memo2];
  callback2 = React.useCallback((current) => {
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = outer1_0(tmp[22]).BountyScrollingType.MANUAL;
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
        let UP = outer1_0(tmp[22]).VerticalScrollingDirection.DOWN;
      } else {
        UP = outer1_0(tmp[22]).VerticalScrollingDirection.UP;
      }
      result.scrollingDirection = UP;
      result.verticalScrollingPosition = current;
      result.scrollSessionId = memo2;
      result.timeWatchedPreScrollMs = diff;
      result = outer1_0(tmp[23]).trackBountyVerticalScroll(result);
      const obj2 = outer1_0(tmp[23]);
    }
  }, items8);
  const items9 = [takeDidAutoScroll, callback2, first4, hasSingleUseSwipeUpNux, hasRecurringSwipeUpNux, dismissSingleUseSwipeUpNux, dismissRecurringSwipeUpNux];
  callback3 = React.useCallback((arg0) => {
    const tmp = takeDidAutoScroll();
    callback(arg0);
    const BountyScrollingType = outer1_0(tmp[22]).BountyScrollingType;
    callback2(arg0, tmp ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL);
    if (tmp5) {
      if (hasSingleUseSwipeUpNux) {
        dismissSingleUseSwipeUpNux(ownedByVerticalScrollExperiment.USER_DISMISS);
      } else if (hasRecurringSwipeUpNux) {
        dismissRecurringSwipeUpNux(ownedByVerticalScrollExperiment.USER_DISMISS);
      }
    }
  }, items9);
  let obj13 = require(13965) /* getRecapOrbCountFromPullProgress */;
  closure_53 = obj13.useBountiesRecapOrbCount({ scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height2, targetOrbAmount: stateFromStores, enabled: tmp14 });
  const items10 = [first, first4];
  const effect1 = React.useEffect(() => {
    if (null != first[first4]) {
      const items = [tmp.id];
      outer1_0(tmp[26]).markAdContentSeen(outer1_0(tmp[27]).AdCreativeType.BOUNTY, items);
      const obj = outer1_0(tmp[26]);
    }
  }, items10);
  const items11 = [first, first4, dismissOnClose, rewardTimerSeconds, sourceQuestContent];
  const items12 = [sourceQuestContent];
  const callback4 = React.useCallback(() => {
    const tmp = dismissOnClose();
    if (null != first[first4]) {
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
      let obj = outer1_0(tmp[23]);
      obj = { adContentId: tmp2.id, adCreativeType: outer1_0(tmp[27]).AdCreativeType.BOUNTY, event: rewardTimerSeconds.AD_VIDEO_MODAL_CLOSED };
      obj = { content_name: outer1_0(tmp[22]).getQuestContentName(outer1_0(tmp[28]).QuestContent.VIDEO_MODAL_MOBILE), content_id: outer1_0(tmp[28]).QuestContent.VIDEO_MODAL_MOBILE };
      const obj4 = outer1_0(tmp[22]);
      obj.video_progress = outer1_0(tmp[29]).formatVideoProgressRatio(num, num2);
      obj.threshold_met = 1000 * num >= result;
      obj.reward_timer_seconds = result / 1000;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
      const obj5 = outer1_0(tmp[29]);
    }
    sourceQuestContent(tmp[30]).hideModal();
  }, items11);
  closure_54 = React.useCallback(() => {
    let obj = outer1_0(tmp[23]);
    obj = { adContentId: orbAmount, adCreativeType: outer1_0(tmp[27]).AdCreativeType.BOUNTY, event: rewardTimerSeconds.AD_VIDEO_MODAL_CLOSED };
    obj = { content_name: outer1_0(tmp[22]).getQuestContentName(outer1_0(tmp[28]).QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: outer1_0(tmp[28]).QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj);
    const obj4 = outer1_0(tmp[22]);
    sourceQuestContent(tmp[30]).hideModal();
  }, items12);
  let obj14 = require(3991);
  obj1 = { onScroll: xt, onBeginDrag: mt };
  xt = function xt(contentOffset) {
    const result = sharedValue2.set(contentOffset.contentOffset.y);
    if (sharedValue1.get()) {
      const result1 = sharedValue.set(first2(contentOffset));
    }
  };
  obj2 = { scrollY: sharedValue2, isDraggingSharedValue: sharedValue1, isScrollingInBoundsSharedValue: sharedValue, isScrollEventInBounds: first2 };
  xt.__closure = obj2;
  xt.__workletHash = 7942598540397;
  xt.__initData = closure_25;
  mt = function mt(arg0) {
    const result = sharedValue1.set(true);
    const result1 = sharedValue.set(first2(arg0));
  };
  obj3 = { isDraggingSharedValue: sharedValue1, isScrollingInBoundsSharedValue: sharedValue, isScrollEventInBounds: first2 };
  mt.__closure = obj3;
  mt.__workletHash = 14039038912528;
  mt.__initData = closure_26;
  class Tt {
    constructor(arg0) {
      if (arg0.contentOffset.y < 0) {
        tmp3 = initialBountyId;
        tmp4 = outer1_2;
        num2 = 22;
        UP = initialBountyId(outer1_2[22]).VerticalScrollingDirection.DOWN;
      } else {
        tmp = initialBountyId;
        tmp2 = outer1_2;
        num = 22;
        UP = initialBountyId(outer1_2[22]).VerticalScrollingDirection.UP;
      }
      obj = initialBountyId(outer1_2[11]);
      tmp5 = obj.runOnJS(cancel)(UP);
      result = closure_31.set(false);
      if (!height) {
        tmp7 = closure_30;
        result1 = closure_30.set(false);
      }
      return;
    }
  }
  obj4 = { VerticalScrollingDirection: require(6968) /* getQuestContentName */.VerticalScrollingDirection, runOnJS: require(3991).runOnJS, cancelScrollAffordance: cancel, isDraggingSharedValue: sharedValue1, IS_ANDROID: height2, isScrollingInBoundsSharedValue: sharedValue };
  Tt.__closure = obj4;
  Tt.__workletHash = 10752087179842;
  Tt.__initData = closure_27;
  obj1.onEndDrag = Tt;
  class Bt {
    constructor(arg0) {
      if (closure_17) {
        tmp = initialBountyId;
        tmp2 = outer1_2;
        num = 11;
        obj = initialBountyId(outer1_2[11]);
        tmp3 = handleRecapMomentumEnd;
        tmp4 = arg0;
        tmp5 = obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      result = closure_30.set(false);
      return;
    }
  }
  obj5 = { showRecapPullZone: tmp14, runOnJS: require(3991).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue };
  Bt.__closure = obj5;
  Bt.__workletHash = 13684210320337;
  Bt.__initData = first4;
  obj1.onMomentumEnd = Bt;
  const tmp28 = height(React.useState(false), 2);
  const tmp36 = first.length > 1;
  let obj20 = require(3991);
  function wt() {
    return Math.min(Math.max(Math.round(sharedValue2.get() / closure_15), 0), closure_16);
  }
  wt.__closure = { scrollY: sharedValue2, slotHeight: sum, lastBountyIndex: diff };
  wt.__workletHash = 14048843158960;
  wt.__initData = closure_29;
  function yt(arg0, arg1) {
    if (arg0 !== arg1) {
      outer1_0(outer1_0[11]).runOnJS(callback3)(arg0);
      const obj = outer1_0(outer1_0[11]);
    }
  }
  obj6 = { runOnJS: require(3991).runOnJS, commitSwipe: callback3 };
  yt.__closure = obj6;
  yt.__workletHash = 14015091539518;
  yt.__initData = sharedValue;
  const animatedReaction = obj20.useAnimatedReaction(wt, yt);
  let obj22 = require(3991);
  class Nt {
    constructor() {
      tmp = closure_17;
      if (closure_17) {
        tmp2 = closure_32;
        tmp4 = closure_19;
        tmp5 = initialBountyId;
        tmp6 = outer1_2;
        num = 19;
        value = closure_32.get();
        tmp = value >= closure_19 - initialBountyId(outer1_2[19]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  obj7 = { showRecapPullZone: tmp14, scrollY: sharedValue2, lastBountyScrollOffset: result1, RECAP_SNAP_EPSILON: require(13961) /* getRevealProgress */.RECAP_SNAP_EPSILON };
  Nt.__closure = obj7;
  Nt.__workletHash = 6584708256992;
  Nt.__initData = sharedValue1;
  class Mt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = initialBountyId;
        tmp2 = outer1_2;
        num = 11;
        obj = initialBountyId(outer1_2[11]);
        tmp3 = closure_27;
        tmp4 = obj.runOnJS(closure_27)(arg0);
      }
      return;
    }
  }
  obj8 = { runOnJS: require(3991).runOnJS, setShowRecapFooter: tmp30 };
  Mt.__closure = obj8;
  Mt.__workletHash = 10788669301891;
  Mt.__initData = sharedValue2;
  const animatedReaction1 = obj22.useAnimatedReaction(Nt, Mt);
  let obj25 = require(3991);
  class Vt {
    constructor() {
      tmp = closure_17;
      if (closure_17) {
        tmp2 = closure_32;
        tmp3 = closure_19;
        tmp = closure_32.get() > closure_19;
      }
      return tmp;
    }
  }
  Vt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue2, lastBountyScrollOffset: result1 };
  Vt.__workletHash = 6186370630693;
  Vt.__initData = hasSingleUseSwipeUpNux;
  function bt(arg0, arg1) {
    if (arg0 !== arg1) {
      outer1_0(outer1_0[11]).runOnJS(closure_23)(arg0);
      const obj = outer1_0(outer1_0[11]);
    }
  }
  obj9 = { runOnJS: require(3991).runOnJS, setIsRecapPageRevealed: tmp21 };
  bt.__closure = obj9;
  bt.__workletHash = 12713474352874;
  bt.__initData = dismissSingleUseSwipeUpNux;
  const animatedReaction2 = obj25.useAnimatedReaction(Vt, bt);
  let obj27 = require(3991);
  class Ht {
    constructor() {
      tmp = closure_17;
      if (closure_17) {
        tmp2 = closure_32;
        tmp4 = closure_20;
        tmp5 = initialBountyId;
        tmp6 = outer1_2;
        num = 19;
        value = closure_32.get();
        tmp = value >= closure_20 - initialBountyId(outer1_2[19]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj1);
  Ht.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue2, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: require(13961) /* getRevealProgress */.RECAP_SNAP_EPSILON };
  Ht.__workletHash = 5669564400667;
  Ht.__initData = hasRecurringSwipeUpNux;
  function kt(arg0, arg1) {
    if (arg0 !== arg1) {
      outer1_0(outer1_0[11]).runOnJS(closure_25)(arg0);
      const obj = outer1_0(outer1_0[11]);
    }
  }
  obj11 = { runOnJS: require(3991).runOnJS, setIsRecapPageOnTop: tmp24 };
  kt.__closure = obj11;
  kt.__workletHash = 8102193741774;
  kt.__initData = dismissRecurringSwipeUpNux;
  const animatedReaction3 = obj27.useAnimatedReaction(Ht, kt);
  const items13 = [height2, stateFromStores > 0];
  const items14 = [tmp.listWrapper, tmp5];
  const memo4 = React.useMemo(() => {
    let tmp = null;
    if (closure_17) {
      const obj = { height: height2 };
      tmp = tmp7(takeDidAutoScroll, obj);
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
    const sum = tmp5.top + outer1_0(tmp[24]).AUTO_SCROLL_PEEK_TOP_OFFSET;
    const sum1 = sum + tmp5.height * outer1_0(tmp[24]).AUTO_SCROLL_PEEK_SCALE;
    obj.top = sum1 + sourceQuestContent(tmp[9]).space.PX_32;
    ({ left: obj.left, width: obj.width } = tmp5);
    items[1] = obj;
    return items;
  }, items18);
  const memo10 = React.useMemo(() => {
    const items = [tmp.recapPage, ];
    let obj = { top: tmp5.top, left: tmp5.left, width: tmp5.width, height: height - tmp5.top };
    tmp = null;
    if (first3) {
      obj = { zIndex: sum };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = obj;
    return items;
  }, items19);
  let obj30 = require(3991);
  class Jt {
    constructor() {
      obj = initialBountyId(outer1_2[19]);
      return obj.getRevealProgress(closure_32.get(), closure_19, height);
    }
  }
  const obj10 = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue2, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: require(13961) /* getRevealProgress */.RECAP_SNAP_EPSILON };
  Jt.__closure = { getRevealProgress: require(13961) /* getRevealProgress */.getRevealProgress, scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height2 };
  Jt.__workletHash = 8427964721554;
  Jt.__initData = c37;
  derivedValue = obj30.useDerivedValue(Jt);
  let obj32 = require(3991);
  class Ut {
    constructor() {
      obj = {};
      obj2 = initialBountyId(outer1_2[11]);
      value = runOnJS.get();
      obj.opacity = obj2.interpolate(value, [0, 1], [0, 1], initialBountyId(outer1_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  obj13 = { interpolate: require(3991).interpolate, recapPullProgress: derivedValue, Extrapolation: require(3991).Extrapolation };
  Ut.__closure = obj13;
  Ut.__workletHash = 1497321349449;
  Ut.__initData = c38;
  const animatedStyle = obj32.useAnimatedStyle(Ut);
  const obj12 = { getRevealProgress: require(13961) /* getRevealProgress */.getRevealProgress, scrollY: sharedValue2, lastBountyScrollOffset: result1, recapRevealHeight: height2 };
  class Gt {
    constructor() {
      obj = {};
      obj2 = initialBountyId(outer1_2[11]);
      value = runOnJS.get();
      items = [, ];
      items[0] = outer1_19;
      items[1] = outer1_20;
      obj.opacity = obj2.interpolate(value, items, [1, 0], initialBountyId(outer1_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  obj14 = { interpolate: require(3991).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: result1, FOOTER_FADE_END_PROGRESS: sum1, Extrapolation: require(3991).Extrapolation };
  Gt.__closure = obj14;
  Gt.__workletHash = 3685190194249;
  Gt.__initData = memo2;
  const animatedStyle1 = require(3991).useAnimatedStyle(Gt);
  const obj35 = require(3991);
  class Qt {
    constructor() {
      if (closure_32.get() >= closure_19 - closure_15 / 2) {
        tmp6 = runOnJS;
        value = runOnJS.get();
      } else {
        tmp = initialBountyId;
        tmp2 = outer1_2;
        num = 19;
        obj = initialBountyId(outer1_2[19]);
        tmp3 = closure_32;
        tmp4 = height;
        num2 = 0;
        value = obj.getRevealProgress(closure_32.get(), 0, height);
      }
      obj = {};
      obj3 = initialBountyId(outer1_2[11]);
      items = [, ];
      items[0] = outer1_19;
      items[1] = outer1_20;
      obj.opacity = obj3.interpolate(value, items, [1, 0], initialBountyId(outer1_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj37 = require(3991);
  Qt.__closure = { scrollY: sharedValue2, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: require(13961) /* getRevealProgress */.getRevealProgress, recapRevealHeight: height2, interpolate: require(3991).interpolate, FOOTER_FADE_START_PROGRESS: result1, FOOTER_FADE_END_PROGRESS: sum1, Extrapolation: require(3991).Extrapolation };
  Qt.__workletHash = 15092194442650;
  Qt.__initData = closure_40;
  const items20 = [tmp.peekGradient, , , , ];
  ({ left: arr22[1], width: arr22[2], top: arr22[3], height: arr22[4] } = tmp5);
  const animatedStyle2 = obj37.useAnimatedStyle(Qt);
  const memo11 = React.useMemo(() => {
    const items = [tmp.peekGradient, { left: tmp5.left, width: tmp5.width, top: tmp5.top + tmp5.height, bottom: 0 }];
    return items;
  }, items20);
  const obj15 = { scrollY: sharedValue2, lastBountyScrollOffset: result1, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: require(13961) /* getRevealProgress */.getRevealProgress, recapRevealHeight: height2, interpolate: require(3991).interpolate, FOOTER_FADE_START_PROGRESS: result1, FOOTER_FADE_END_PROGRESS: sum1, Extrapolation: require(3991).Extrapolation };
  class Zt {
    constructor() {
      obj = {};
      obj2 = initialBountyId(outer1_2[11]);
      value = closure_32.get();
      items = [0];
      items[1] = closure_15;
      obj.opacity = obj2.interpolate(value, items, [1, 0], initialBountyId(outer1_2[11]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj39 = require(3991);
  Zt.__closure = { interpolate: require(3991).interpolate, scrollY: sharedValue2, slotHeight: sum, Extrapolation: require(3991).Extrapolation };
  Zt.__workletHash = 5908400559291;
  Zt.__initData = closure_41;
  const animatedStyle3 = obj39.useAnimatedStyle(Zt);
  const obj16 = { interpolate: require(3991).interpolate, scrollY: sharedValue2, slotHeight: sum, Extrapolation: require(3991).Extrapolation };
  class Wt {
    constructor() {
      return runOnJS.get() < outer1_20;
    }
  }
  Wt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: sum1 };
  Wt.__workletHash = 547045699209;
  Wt.__initData = peekScale;
  function zt(arg0, arg1) {
    if (arg0 !== arg1) {
      outer1_0(outer1_0[11]).runOnJS(closure_26)(arg0);
      const obj = outer1_0(outer1_0[11]);
    }
  }
  const obj17 = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: sum1 };
  const obj41 = require(3991);
  zt.__closure = { runOnJS: require(3991).runOnJS, setIsCloseButtonPressable: tmp27 };
  zt.__workletHash = 6290671204687;
  zt.__initData = cancel;
  const animatedReaction4 = obj41.useAnimatedReaction(Wt, zt);
  const items21 = [sum, sharedValue2, memo7, "peek" === scrollAffordanceVariant && hasRecurringSwipeUpNux, "auto" === scrollAffordanceVariant, peekScale, sourceQuestContent, , , , , , , , , , ];
  ({ width: arr23[7], height: arr23[8] } = tmp5);
  items21[9] = first4;
  items21[10] = first2;
  items21[11] = first3;
  items21[12] = sharedValue;
  items21[13] = tmp41;
  items21[14] = memo3;
  items21[15] = ownedByVerticalScrollExperiment;
  items21[16] = ownedByVerticalScrollExperiment;
  const items22 = [first4, first2, first3, , , , , , , ];
  ({ width: arr24[3], height: arr24[4] } = tmp5);
  items22[5] = "peek" === scrollAffordanceVariant && hasRecurringSwipeUpNux;
  items22[6] = "auto" === scrollAffordanceVariant;
  items22[7] = tmp41;
  items22[8] = ownedByVerticalScrollExperiment;
  items22[9] = ownedByVerticalScrollExperiment;
  const callback5 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let flag = true;
    if (ownedByVerticalScrollExperiment) {
      let tmp2 = index === first4;
      if (!tmp2) {
        tmp2 = index === first4 + 1;
      }
      flag = tmp2;
      const tmp = first4;
    }
    let obj = { index, slotHeight: closure_15, scrollY: sharedValue2, style: memo7, isPeekEnabled: c37 };
    obj = { bounty: item, sourceQuestContent, width: tmp5.width, height: tmp5.height, index, isActive: index === first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, isScrollingInBoundsSharedValue: sharedValue };
    let tmp7 = c38;
    if (c38) {
      tmp7 = 0 === index;
    }
    obj.isScrollIndicatorOverlayEnabled = tmp7;
    obj.shouldLoadHls = flag;
    let tmp8;
    if (closure_12) {
      tmp8 = memo3;
    }
    obj.scrollAffordance = tmp8;
    let tmp9;
    if (index === first4) {
      if (closure_12) {
        tmp9 = peekScale;
      }
    }
    obj.peekScale = tmp9;
    obj.softDownloadCapsEnabled = ownedByVerticalScrollExperiment;
    obj.children = closure_12(outer1_0(tmp[31]).BountiesScrollVideoItem, obj, item.id);
    return closure_12(onPlaybackTimeChange, obj);
  }, items21);
  [][0] = height2;
  const memo12 = React.useMemo(() => ({ activeIndex: first4, isRecapPageRevealed: first2, isRecapPageOnTop: first3, width: tmp5.width, height: tmp5.height, isPeekEnabled: c37, isAutoScrollEnabled: closure_12, canShowScrollIndicatorOverlay: c38, ownedByVerticalScrollExperiment, isSoftCapPreload: ownedByVerticalScrollExperiment }), items22);
  if (0 === first.length) {
    return null;
  } else {
    if (tmp39) {
      let tmp77 = callback(sourceQuestContent(13995), {});
    } else {
      tmp77 = null;
      if (tmp29) {
        const obj19 = { orbAmount: stateFromStores };
        tmp77 = callback(require(13996) /* BountiesScrollRecapFooter */.BountiesScrollRecapFooter, obj19);
      }
    }
    obj20 = { style: tmp.root };
    const obj21 = { active: peekActive };
    const items23 = [callback(sourceQuestContent(13997), obj21), , , , , , ];
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
        adCreativeType: require(6969) /* AdCreativeType */.AdCreativeType.BOUNTY,
        questContent: require(4981) /* set */.QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first3,
        sourceQuestContent,
        children() {
              return tmp7(outer1_0(tmp[36]).BountiesScrollRecapPage, { orbAmount: closure_53, onClose: closure_54, style: { flex: 1 } });
            }
      };
      obj22.children = callback(require(10956) /* _createForOfIteratorHelperLoose */.QuestContentImpressionTrackerNative, obj23);
      tmp90Result = callback(sourceQuestContent(3991).View, obj22);
      const tmp90 = callback;
    }
    items23[1] = tmp90Result;
    const obj24 = { style: memo5 };
    tmp = require;
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
    tmp = dismissOnClose;
    obj25.ItemSeparatorComponent = dismissOnClose;
    obj25.ListFooterComponent = memo4;
    obj25.snapToOffsets = memo1;
    obj25.snapToEnd = false;
    obj25.decelerationRate = 0.85;
    obj25.showsVerticalScrollIndicator = false;
    obj25.drawDistance = sum;
    obj25.onScroll = animatedScrollHandler;
    obj25.scrollEventThrottle = 16;
    obj25.contentContainerStyle = memo6;
    obj24.children = callback(require(7527) /* defaultMVCPConfig */.AnimatedFlashList, obj25);
    items23[2] = callback(questHomeBounties, obj24);
    tmp = null;
    if (tmp40) {
      tmp = null;
      if (first.length > 1) {
        tmp = callback;
        tmp = sourceQuestContent;
        tmp = dependencyMap;
        const obj26 = { pointerEvents: "none" };
        const items25 = [memo11, animatedStyle3];
        obj26.style = items25;
        tmp = callback;
        obj27 = {};
        tmp = height2;
        obj27.colors = height2;
        tmp = absoluteFill;
        obj27.style = absoluteFill.absoluteFill;
        obj26.children = callback(sourceQuestContent(4554), obj27);
        tmp = callback(sourceQuestContent(3991).View, obj26);
      }
    }
    items23[3] = tmp;
    tmp = sourceQuestContent;
    tmp = dependencyMap;
    tmp = callback;
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
      tmp = callback;
      tmp = sourceQuestContent;
      tmp = dependencyMap;
      const obj29 = { onPress: callback4 };
      tmp = callback(sourceQuestContent(14002), obj29);
    }
    obj28.children = tmp;
    items23[4] = tmp(sourceQuestContent(3991).View, obj28);
    tmp = null;
    if (visible) {
      tmp = callback;
      tmp = questHomeBounties;
      obj30 = { style: memo9, pointerEvents: "none" };
      tmp = callback;
      tmp = sourceQuestContent;
      tmp = dependencyMap;
      const obj31 = { progress, showProgressRing };
      obj30.children = callback(sourceQuestContent(14003), obj31);
      tmp = callback(questHomeBounties, obj30);
    }
    items23[5] = tmp;
    tmp = sourceQuestContent;
    tmp = dependencyMap;
    tmp = callback;
    obj32 = {};
    tmp = sourceQuestContent(13959);
    if (!tmp39) {
      tmp39 = tmp29;
    }
    obj32.visible = tmp39;
    obj32.onContentLayout = callback;
    tmp = c15;
    obj32.zIndex = c15;
    obj32.opacityStyle = animatedStyle2;
    obj32.children = tmp77;
    items23[6] = tmp(tmp, obj32);
    obj20.children = items23;
    return first1(questHomeBounties, obj20);
  }
  const obj18 = { runOnJS: require(3991).runOnJS, setIsCloseButtonPressable: tmp27 };
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8, QuestsExperimentLocations: closure_9 } = QuestsExperimentLocations);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
isWindows = isWindows.isAndroid();
let c15 = 3;
let c16 = 0.5625;
let PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
let closure_18 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c19 = 0.05;
let c20 = 0.1;
let closure_21 = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
let closure_22 = (() => {
  function isScrollEventInBounds(contentOffset) {
    return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
  }
  isScrollEventInBounds.__closure = {};
  isScrollEventInBounds.__workletHash = 14148486927190;
  isScrollEventInBounds.__initData = closure_21;
  return isScrollEventInBounds;
})();
let closure_23 = _createForOfIteratorHelperLoose.createStyles(() => {
  const closeButton = { position: "absolute", zIndex: c15 };
  const autoScrollIndicator = { position: "absolute", zIndex: c15, alignItems: "center" };
  return { root: { flex: 1 }, recapPage: { position: "absolute", zIndex: 0 }, listWrapper: { position: "absolute", zIndex: 1, overflow: "hidden" }, closeButton, peekGradient: { position: "absolute", zIndex: 2 }, autoScrollIndicator };
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  let bountyId;
  let sourceQuestContent;
  ({ bountyId, sourceQuestContent } = arg0);
  const obj = { theme: require(7529) /* items */.ThemeTypes.DARKER, children: callback(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) };
  return callback(require(3854) /* ThemeContextProvider */.ThemeContextProvider, obj);
};
