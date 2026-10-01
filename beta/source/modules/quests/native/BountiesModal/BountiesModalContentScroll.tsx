// Module ID: 14542
// Function ID: 14543
// Name: BountiesModalContentScroll
// Dependencies: [32, 19, 17, 7115, 5756, 14543, 1074, 2042, 21, 1365, 576, 4836, 4566, 1479, 1613, 14544, 10681, 7112, 14539, 4837, 4840, 7131, 10720, 1110, 504, 14547, 14548, 1255, 7141, 14549, 10683, 5763, 5761, 10735, 14550, 14584, 14553, 10753, 14585, 8179, 14589, 5293, 14590, 4540, 14591, 2]
// Exports: default

// Module 14542 (BountiesModalContentScroll)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import QuestContent from "QuestContent" /* 5761 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import QuestDataUtils from "QuestDataUtils" /* 7112 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10720 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10735 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14539 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 14548 */;
import BountiesScrollVideoItem2 from "BountiesScrollVideoItem" /* 14550 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 14585 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 14591 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountyStore from "BountyStore" /* 7115 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14543 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let _require, adContentId, dependencyMap, set;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let unpackModuleId;
function ItemSeparator(trailingItem) {
  let obj2;
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    const obj = { style: obj2 };
    obj2 = { height: PX_8 };
    tmp = closure_15(metroRequire, obj);
  }
  return tmp;
}
function BountiesRecapPullZone(height) {
  const obj = { style: { height: height.height } };
  return closure_15(metroRequire, obj);
}
function BountiesScrollVideoItemContainer(index) {
  let children;
  let items;
  let style;
  index = index.index;
  const slotHeight = index.slotHeight;
  const scrollY = index.scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  ({ style, children } = index);
  let obj = index(scrollY[12]);
  const fn = function u() {
    let items;
    let obj2;
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    const tmp = index;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === tmp) {
          num = 0.8;
        }
      }
    }
    const obj = { opacity: obj2.interpolate(absolute, [0, 0.3, 1], items, ReanimatedRexport.Extrapolation.CLAMP) };
    items = [1, 1, num];
    obj2 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY: 0.8, interpolate: index(scrollY[12]).interpolate, FADE_DEADBAND: 0.3, Extrapolation: index(scrollY[12]).Extrapolation };
  fn.__closure = obj2;
  fn.__workletHash = 6532652233494;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children };
  items = [style, animatedStyle];
  return closure_15(slotHeight(scrollY[12]).View, obj3);
}
function BountiesModalContentScrollInner(initialBountyId) {
  let QuestContentImpressionTrackerNative;
  let _undefined;
  let _undefined2;
  let c12;
  let c33;
  let c34;
  let c4;
  let closure_2;
  let closure_24;
  let closure_36;
  let closure_49;
  let ft;
  let isPeekEnabled;
  let items25;
  let items26;
  let items27;
  let items28;
  let lastBounty;
  let obj40;
  let obj42;
  let obj44;
  let obj48;
  let onClose;
  let orbAmount;
  let ref3;
  let ref4;
  let slotHeight;
  let str;
  let str2;
  let tmp16;
  let tmp40;
  let tmp41;
  let tmp43;
  let tmp44;
  let tmp7;
  let tmp88Result6;
  let tmp89;
  let tmp90;
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  react = undefined;
  c12 = undefined;
  let c23;
  closure_30 = undefined;
  let animatedStyle;
  let first4;
  __initData9 = undefined;
  let memo10;
  let derivedValue;
  __initData10 = undefined;
  let tmp = closure_30();
  dependencyMap = tmp;
  let tmp2 = sourceQuestContent;
  let tmp3 = dependencyMap;
  const height = sourceQuestContent(1479)().height;
  let obj = react;
  react.useRef(null);
  const tmp5 = initialBountyId;
  let tmp6 = height(react.useState(initialBountyId(14544).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp7, c4] = tmp6;
  _require = tmp7;
  const callback = react.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  size = sourceQuestContent(1479)();
  const width = size.width;
  const height2 = size.height;
  const tmp9 = sourceQuestContent(1613)();
  let closure_3 = tmp9;
  let items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp9);
  items[5] = tmp7;
  const memo = react.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height2 - closure_3.top - initialBountyId;
    let result = diff / c22;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c22;
      result = diff1;
    }
    size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
  let obj2 = initialBountyId(10681);
  const questHomeBounties = obj2.useQuestHomeBounties().questHomeBounties;
  const data = height(react.useState(() => {
    let items;
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
    if (findIndexResult < 0) {
      items = [];
    } else {
      items = arr;
      if (0 !== findIndexResult) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, questHomeBounties.slice(findIndexResult), 0);
        HermesBuiltin.arraySpread(items1, questHomeBounties.slice(0, findIndexResult), arraySpreadResult);
        items = items1;
      }
    }
    return items;
  }), 1)[0];
  let closure_8 = tmp11;
  let items1 = [tmp11, initialBountyId, sourceQuestContent];
  const effect = react.useEffect(function() {
    let obj2;
    const tmp = closure_8;
    if (tmp) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const captureQuestsException = QuestDataUtils.captureQuestsException;
      QuestDataUtils;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
      obj2 = { bountyId: initialBountyId, sourceQuestContent };
      const result = captureQuestsException(error, obj);
      const obj3 = BountiesModalActionCreatorsDefault;
      obj3.hideModal();
    }
  }, items1);
  adContentId = closure_8;
  let obj3 = initialBountyId(4566);
  const sharedValue = obj3.useSharedValue(1);
  let obj4 = initialBountyId(4566);
  const sharedValue1 = obj4.useSharedValue(0);
  const tmp15 = height(react.useState(null), 2);
  [tmp16, c12] = tmp15;
  const ref = react.useRef(null);
  const ref2 = react.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp17;
  const items2 = [height, , ];
  ({ top: arr4[1], height: arr4[2] } = memo);
  const memo1 = react.useMemo(() => {
    const obj = { windowHeight: height, videoTop: memo.top, videoHeight: memo.height };
    return unpackModuleId(obj);
  }, items2);
  const items3 = [height];
  const items4 = [sharedValue1];
  const memo2 = react.useMemo(() => authStore(height), items3);
  const callback1 = react.useCallback((current) => {
    ref2.current = Date.now();
    ref.current = current;
    _undefined2(current);
    set = sharedValue1.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    const trackOverlayEvent = current.trackOverlayEvent;
    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = _undefined2.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items4);
  const items5 = [sharedValue1, sharedValue];
  const callback2 = react.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = _undefined2.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const trackOverlayEvent = current.trackOverlayEvent;
      const _Date = Date;
      trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const obj = AppStoreOverlayTelemetryManager;
      const result = obj.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined2(null);
      set = sharedValue.set;
      const obj2 = timing;
      const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items5);
  const items6 = [callback2, null != tmp16, callback1, sharedValue, memo1];
  const memo3 = react.useMemo(() => ({ videoEndPeekTargetScale: memo1, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items6);
  let obj5 = initialBountyId(504);
  const items7 = [data];
  const items8 = [data, closure_8];
  const stateFromStores = obj5.useStateFromStores(items7, () => BountyStore.getCompletedBountyCount(first) * adContentId, items8);
  const obj6 = initialBountyId(14547);
  const bountyRecurringSwipeUpNux = obj6.useBountyRecurringSwipeUpNux({ isEligible: tmp24 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height3 = memo.height;
  let sum = height3 + c23;
  c22 = sum;
  let diff = data.length - 1;
  c23 = diff;
  colors = tmp28;
  let result = diff * sum;
  FOOTER_FADE_END_PROGRESS = result;
  const sum1 = result + height3;
  const items9 = [sum1, result, height3];
  const memo4 = react.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height3 }), items9);
  const obj7 = initialBountyId(14548);
  const handleRecapMomentumEnd = obj7.useBountiesRecapScroll({ listRef: ref, enabled: tmp28, offsets: memo4 }).handleRecapMomentumEnd;
  const items10 = [data, sum1, stateFromStores > 0, sum];
  const memo5 = react.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    const tmp = closure_24;
    if (tmp) {
      mapped.push(sum1);
    }
    return mapped;
  }, items10);
  const tmp33 = height(react.useState(false), 2);
  const first1 = tmp33[0];
  closure_30 = tmp35;
  const tmp36 = height(react.useState(false), 2);
  const first2 = tmp36[0];
  let closure_32 = tmp38;
  [tmp40, tmp41] = height(react.useState(true), 2);
  __initData2 = tmp41;
  height(react.useState(true), 2);
  [tmp43, tmp44] = height(react.useState(false), 2);
  __initData3 = tmp44;
  height(react.useState(false), 2);
  const tmp45 = height(react.useState(0), 2);
  const first3 = tmp45[0];
  __initData4 = tmp45[1];
  const obj8 = initialBountyId(4566);
  const sharedValue2 = obj8.useSharedValue(false);
  const obj9 = initialBountyId(4566);
  const sharedValue3 = obj9.useSharedValue(false);
  const obj10 = initialBountyId(4566);
  const sharedValue4 = obj10.useSharedValue(0);
  const memo6 = react.useMemo(() => {
    const obj = initialBountyId(closure_2[27]);
    return obj.v4();
  }, []);
  __initData5 = react.useRef(0);
  __initData6 = react.useRef(0);
  const effect1 = react.useEffect(() => {
    ref3.current = Date.now();
  }, []);
  const items11 = [memo6];
  const callback3 = react.useCallback((current) => {
    let UP;
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = AnalyticsTypes.BountyScrollingType.MANUAL;
    }
    current = ref4.current;
    if (current !== current) {
      ref4.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref3.current = timestamp;
      const diff = timestamp - ref3.current;
      const obj = { scrollingType: MANUAL, scrollingDirection: UP, verticalScrollingPosition: current, scrollSessionId: memo6, timeWatchedPreScrollMs: diff };
      const trackBountyVerticalScroll = AnalyticsActions.trackBountyVerticalScroll;
      AnalyticsActions;
      if (current > current) {
        UP = AnalyticsTypes.VerticalScrollingDirection.DOWN;
      } else {
        UP = AnalyticsTypes.VerticalScrollingDirection.UP;
      }
      const result = trackBountyVerticalScroll(obj);
    }
  }, items11);
  const items12 = [first3, dismissRecurringSwipeUpNux, callback2, callback3, hasRecurringSwipeUpNux];
  const callback4 = react.useCallback((arg0) => {
    const tmp = 0 === first3 && arg0 > 0 && hasRecurringSwipeUpNux;
    if (tmp) {
      dismissRecurringSwipeUpNux(ContentDismissActionType.USER_DISMISS);
    }
    closure_36(arg0);
    callback2();
    callback3(arg0);
  }, items12);
  const obj11 = initialBountyId(14549);
  __initData7 = obj11.useBountiesRecapOrbCount({ scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp28 });
  const items13 = [data, first3];
  const effect2 = react.useEffect(() => {
    if (null != first[first3]) {
      const items = [first[first3].id];
      const obj = QuestActionCreators;
      obj.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
    }
  }, items13);
  const items14 = [data, first3, sourceQuestContent];
  const items15 = [sourceQuestContent];
  const callback5 = react.useCallback(() => {
    let obj2;
    let obj3;
    let obj4;
    if (null != first[first3]) {
      const bountyVideoProgress = BountyStore.getBountyVideoProgress(tmp.id);
      let num;
      if (bountyVideoProgress != null) {
        num = bountyVideoProgress.maxTimestampSec;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (bountyVideoProgress != null) {
        num2 = bountyVideoProgress.duration;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const result = 1000 * tmp.rewardTimerSeconds;
      const obj = { adContentId: first[first3].id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: _undefined2.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: obj4.formatVideoProgressRatio(num, num2), threshold_met: 1000 * num >= result, reward_timer_seconds: result / 1000 };
      obj3 = AnalyticsTypes;
      obj4 = VideoQuestUtils;
      trackAdContentEvent(obj);
    }
    const obj5 = BountiesModalActionCreatorsDefault;
    obj5.hideModal();
  }, items14);
  __initData8 = react.useCallback(() => {
    let obj2;
    let obj3;
    const tmp = AnalyticsActions;
    const trackAdContentEvent = tmp.trackAdContentEvent;
    const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: _undefined2.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj3 = AnalyticsTypes;
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items15);
  const obj13 = { onScroll: ft, onBeginDrag: Pt, onEndDrag: Ot, onMomentumEnd: Et };
  ft = function ft(contentOffset) {
    const result = sharedValue4.set(contentOffset.contentOffset.y);
    if (sharedValue3.get()) {
      if (typeof isScrollEventInBounds === "function") {
        const _Math = Math;
        const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
        tmp3(tmp7);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  };
  const obj14 = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: handleRecapMomentumEnd };
  ft.__closure = obj14;
  ft.__workletHash = 7942598540397;
  ft.__initData = __initData2;
  const obj12 = initialBountyId(4566);
  class Pt {
    constructor(contentOffset) {
      const result = sharedValue3.set(true);
      if (typeof isScrollEventInBounds === "function") {
        const _Math = Math;
        const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
        tmp3(tmp7);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  Pt.__closure = { isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: handleRecapMomentumEnd };
  Pt.__workletHash = 14039038912528;
  Pt.__initData = __initData3;
  class Ot {
    constructor() {
      const result = sharedValue3.set(false);
      const tmp2 = closure_17;
      if (!tmp2) {
        const result1 = sharedValue2.set(false);
      }
    }
  }
  const obj15 = { isDraggingSharedValue: sharedValue3, IS_ANDROID: callback1, isScrollingInBoundsSharedValue: sharedValue2 };
  Ot.__closure = obj15;
  Ot.__workletHash = 9975335138319;
  Ot.__initData = first3;
  class Et {
    constructor(arg0) {
      const tmp = closure_24;
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      const result = sharedValue2.set(false);
    }
  }
  Et.__closure = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4566).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  Et.__workletHash = 13684210320337;
  Et.__initData = __initData4;
  ({ showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4566).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 });
  const animatedScrollHandler = obj12.useAnimatedScrollHandler(obj13);
  const obj17 = initialBountyId(4566);
  class Rt {
    constructor() {
      return Math.min(Math.max(Math.round(sharedValue4.get() / c22), 0), c23);
    }
  }
  Rt.__closure = { scrollY: sharedValue4, slotHeight: sum, lastBountyIndex: diff };
  Rt.__workletHash = 14048843158960;
  Rt.__initData = sharedValue2;
  function vt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback4)(arg0);
    }
  }
  vt.__closure = { runOnJS: initialBountyId(4566).runOnJS, commitSwipe: callback4 };
  vt.__workletHash = 14015091539518;
  vt.__initData = sharedValue3;
  ({ runOnJS: initialBountyId(4566).runOnJS, commitSwipe: callback4 });
  const animatedReaction = obj17.useAnimatedReaction(Rt, vt);
  const tmp58 = initialBountyId(4566);
  class Tt {
    constructor() {
      let tmp = closure_24;
      if (tmp) {
        const value = sharedValue4.get();
        tmp = value >= c26 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const useAnimatedReaction = tmp58.useAnimatedReaction;
  Tt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14548).RECAP_SNAP_EPSILON };
  Tt.__workletHash = 6584708256992;
  Tt.__initData = sharedValue4;
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14548).RECAP_SNAP_EPSILON });
  class At {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(c34)(arg0);
      }
    }
  }
  At.__closure = { runOnJS: initialBountyId(4566).runOnJS, setShowRecapFooter: tmp44 };
  At.__workletHash = 10788669301891;
  At.__initData = memo6;
  ({ runOnJS: initialBountyId(4566).runOnJS, setShowRecapFooter: tmp44 });
  const animatedReaction1 = useAnimatedReaction(Tt, At);
  const obj21 = initialBountyId(4566);
  class Ct {
    constructor() {
      const tmp = closure_24 && sharedValue4.get() > c26;
      return tmp;
    }
  }
  Ct.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result };
  Ct.__workletHash = 6186370630693;
  Ct.__initData = __initData5;
  class Dt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_30)(arg0);
      }
    }
  }
  Dt.__closure = { runOnJS: initialBountyId(4566).runOnJS, setIsRecapPageRevealed: tmp33[1] };
  Dt.__workletHash = 12713474352874;
  Dt.__initData = __initData6;
  ({ runOnJS: initialBountyId(4566).runOnJS, setIsRecapPageRevealed: tmp33[1] });
  const animatedReaction2 = obj21.useAnimatedReaction(Ct, Dt);
  const tmp61 = initialBountyId(4566);
  class It {
    constructor() {
      let tmp = closure_24;
      if (tmp) {
        const value = sharedValue4.get();
        tmp = value >= sum1 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const useAnimatedReaction2 = tmp61.useAnimatedReaction;
  It.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14548).RECAP_SNAP_EPSILON };
  It.__workletHash = 5669564400667;
  It.__initData = callback3;
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14548).RECAP_SNAP_EPSILON });
  class Bt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_32)(arg0);
      }
    }
  }
  Bt.__closure = { runOnJS: initialBountyId(4566).runOnJS, setIsRecapPageOnTop: tmp36[1] };
  Bt.__workletHash = 8102193741774;
  Bt.__initData = callback4;
  ({ runOnJS: initialBountyId(4566).runOnJS, setIsRecapPageOnTop: tmp36[1] });
  const animatedReaction21 = useAnimatedReaction2(It, Bt);
  const items16 = [height3, stateFromStores > 0];
  const memo7 = react.useMemo(() => {
    let tmp = null;
    if (closure_24) {
      const obj = { height: height3 };
      tmp = isVideoEndAppStoreOverlayVisible(BountiesRecapPullZone, obj);
    }
    return tmp;
  }, items16);
  function wt() {
    let num2;
    const value = sharedValue.get();
    if (sharedValue1.get() > 0) {
      num2 = 0;
    } else {
      num2 = 97;
    }
    return { height: memo.top + memo.height * value + num2 };
  }
  wt.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1, BOUNTIES_MODAL_FOOTER_HEIGHT: 97, videoLayout: memo };
  wt.__workletHash = 154705522065;
  wt.__initData = __initData7;
  const obj25 = initialBountyId(4566);
  animatedStyle = obj25.useAnimatedStyle(wt);
  const items17 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr19[2], width: arr19[3] } = memo);
  const memo8 = react.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: memo.left, width: memo.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items17);
  const tmp66 = height(react.useState(false), 2);
  first4 = tmp66[0];
  __initData9 = tmp68;
  const obj26 = initialBountyId(4566);
  class Ht {
    constructor() {
      const value = sharedValue.get();
      const tmp2 = sharedValue1.get() > 0 || value < 1;
      return tmp2;
    }
  }
  Ht.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1 };
  Ht.__workletHash = 14406360987242;
  Ht.__initData = __initData8;
  class Mt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_49)(arg0);
      }
    }
  }
  Mt.__closure = { runOnJS: initialBountyId(4566).runOnJS, setHideListFooterPadding: tmp66[1] };
  Mt.__workletHash = 7553157067719;
  Mt.__initData = animatedStyle;
  ({ runOnJS: initialBountyId(4566).runOnJS, setHideListFooterPadding: tmp66[1] });
  const animatedReaction3 = obj26.useAnimatedReaction(Ht, Mt);
  const items18 = [first4, memo.top];
  const items19 = [, ];
  ({ width: arr21[0], height: arr21[1] } = memo);
  const memo9 = react.useMemo(() => {
    let num;
    const obj = { paddingTop: memo.top, paddingBottom: num };
    num = 97;
    if (first4) {
      num = 0;
    }
    return obj;
  }, items18);
  memo10 = react.useMemo(() => {
    size = { width: memo.width, height: memo.height };
    return size;
  }, items19);
  const items20 = [tmp.closeButton, , , ];
  ({ top: arr22[1], left: arr22[2], width: arr22[3] } = memo);
  const items21 = [first2, tmp.recapPage, , , , ];
  ({ top: arr23[2], left: arr23[3], width: arr23[4] } = memo);
  items21[5] = height;
  const memo11 = react.useMemo(() => {
    let diff;
    const items = [closure_2.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
    const sum = memo.left + memo.width;
    diff = sum - nativeDefault.space.PX_32;
    items[1] = rect;
    return items;
  }, items20);
  const memo12 = react.useMemo(() => {
    const items = [closure_2.recapPage, ];
    size = { top: memo.top, left: memo.left, width: memo.width, height: height - memo.top };
    let tmp = null;
    if (first2) {
      tmp = { zIndex };
      const obj = { zIndex };
    }
    const merged = Object.assign(tmp);
    items[1] = size;
    return items;
  }, items21);
  const obj28 = initialBountyId(4566);
  class Jt {
    constructor() {
      const obj = useBountiesRecapScroll;
      return obj.getRevealProgress(sharedValue4.get(), c26, height3);
    }
  }
  Jt.__closure = { getRevealProgress: initialBountyId(14548).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height3 };
  Jt.__workletHash = 1141192763711;
  Jt.__initData = first4;
  ({ getRevealProgress: initialBountyId(14548).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height3 });
  derivedValue = obj28.useDerivedValue(Jt);
  const obj30 = initialBountyId(4566);
  class Ut {
    constructor() {
      let interpolate;
      let value;
      const obj = { opacity: interpolate(value, [0, 1], [0, 1], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = derivedValue.get();
      return obj;
    }
  }
  Ut.__closure = { interpolate: initialBountyId(4566).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4566).Extrapolation };
  Ut.__workletHash = 15664240485606;
  Ut.__initData = __initData9;
  ({ interpolate: initialBountyId(4566).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4566).Extrapolation });
  const animatedStyle1 = obj30.useAnimatedStyle(Ut);
  const obj32 = initialBountyId(4566);
  class Gt {
    constructor() {
      let interpolate;
      let items;
      let value;
      const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = derivedValue.get();
      items = [c25, c26];
      return obj;
    }
  }
  Gt.__closure = { interpolate: initialBountyId(4566).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4566).Extrapolation };
  Gt.__workletHash = 13645152212589;
  Gt.__initData = memo10;
  ({ interpolate: initialBountyId(4566).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4566).Extrapolation });
  const animatedStyle2 = obj32.useAnimatedStyle(Gt);
  const obj34 = initialBountyId(4566);
  const tmp76 = FOOTER_FADE_END_PROGRESS;
  class Qt {
    constructor() {
      let items;
      let obj4;
      let revealProgress;
      const obj = sharedValue4;
      if (sharedValue4.get() >= c26 - c22 / 2) {
        revealProgress = derivedValue.get();
      } else {
        const obj2 = useBountiesRecapScroll;
        revealProgress = obj2.getRevealProgress(obj.get(), 0, height3);
      }
      const obj3 = { opacity: obj4.interpolate(revealProgress, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      items = [c25, c26];
      obj4 = ReanimatedRexport;
      return obj3;
    }
  }
  Qt.__closure = { scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14548).getRevealProgress, recapRevealHeight: height3, interpolate: initialBountyId(4566).interpolate, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4566).Extrapolation };
  Qt.__workletHash = 3460917733424;
  Qt.__initData = derivedValue;
  const items22 = [tmp.peekGradient, , , , ];
  ({ left: arr24[1], width: arr24[2], top: arr24[3], height: arr24[4] } = memo);
  ({ scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14548).getRevealProgress, recapRevealHeight: height3, interpolate: initialBountyId(4566).interpolate, FOOTER_FADE_START_PROGRESS: height3, FOOTER_FADE_END_PROGRESS, Extrapolation: initialBountyId(4566).Extrapolation });
  const animatedStyle3 = obj34.useAnimatedStyle(Qt);
  let tmp80 = tmp24;
  const memo13 = react.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items22);
  if (data.length > 1) {
    tmp80 = hasRecurringSwipeUpNux;
  }
  if (tmp80) {
    tmp80 = !tmp17;
  }
  __initData10 = tmp80;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp24;
  }
  const tmp5Result = tmp5(4566);
  class Zt {
    constructor() {
      let interpolate;
      let items;
      let value;
      const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = sharedValue4.get();
      items = [0, c22];
      return obj;
    }
  }
  Zt.__closure = { interpolate: tmp5(4566).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: tmp5(4566).Extrapolation };
  Zt.__workletHash = 7289479842131;
  Zt.__initData = __initData10;
  ({ interpolate: tmp5(4566).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: tmp5(4566).Extrapolation });
  const animatedStyle4 = tmp5Result.useAnimatedStyle(Zt);
  const tmp5Result2 = tmp5(4566);
  class Wt {
    constructor() {
      return derivedValue.get() < c26;
    }
  }
  Wt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp76 };
  Wt.__workletHash = 8241096384746;
  Wt.__initData = hasRecurringSwipeUpNux;
  function zt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(c33)(arg0);
    }
  }
  zt.__closure = { runOnJS: tmp5(4566).runOnJS, setIsCloseButtonPressable: tmp41 };
  zt.__workletHash = 12445734761450;
  zt.__initData = __initData11;
  ({ runOnJS: tmp5(4566).runOnJS, setIsCloseButtonPressable: tmp41 });
  const animatedReaction4 = tmp5Result2.useAnimatedReaction(Wt, zt);
  const items23 = [sum, sharedValue4, memo10, tmp80, hasRecurringSwipeUpNux, sharedValue, sourceQuestContent, , , , , , ];
  ({ width: arr25[7], height: arr25[8] } = memo);
  items23[9] = first3;
  items23[10] = first1;
  items23[11] = first2;
  items23[12] = sharedValue2;
  const items24 = [first3, first1, first2, , , , , ];
  ({ width: arr26[3], height: arr26[4] } = memo);
  items24[5] = tmp80;
  items24[6] = null != tmp16;
  items24[7] = sharedValue;
  const callback6 = obj.useCallback((arg0) => {
    let BountiesScrollVideoItem;
    let index;
    let item;
    let tmp3;
    let tmp6;
    let tmp7;
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue4, style: memo10, isPeekEnabled, children: isVideoEndAppStoreOverlayVisible(BountiesScrollVideoItem, size, item.id) };
    size = { bounty: item, sourceQuestContent, width: memo.width, height: memo.height, index, isScrollIndicatorEnabled: tmp3, isActive: index === first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, isScrollingInBoundsSharedValue: sharedValue2, shouldLoadHls: tmp6, videoEndPeekScale: tmp7, softDownloadCapsEnabled: true };
    tmp3 = hasRecurringSwipeUpNux;
    BountiesScrollVideoItem = BountiesScrollVideoItem2.BountiesScrollVideoItem;
    const tmp2 = BountiesScrollVideoItemContainer;
    if (hasRecurringSwipeUpNux) {
      tmp3 = 0 === index;
    }
    tmp7 = undefined;
    tmp6 = tmp5 || index === tmp4 + 1;
    if (index === first3) {
      tmp7 = sharedValue;
    }
    return isVideoEndAppStoreOverlayVisible(tmp2, obj);
  }, items23);
  [][0] = height3;
  const memo14 = obj.useMemo(() => {
    size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: memo.width, height: memo.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible, videoEndPeekScale: sharedValue };
    return size;
  }, items24);
  if (0 === data.length) {
    return null;
  } else {
    let tmp87 = null;
    if (tmp43) {
      const obj38 = { orbAmount: stateFromStores };
      tmp87 = isVideoEndAppStoreOverlayVisible(tmp5(14584).BountiesScrollRecapFooter, obj38);
    }
    const obj39 = { value: memo3, children: tmp89(tmp90, obj40) };
    let tmp88Result = null;
    obj40 = { style: tmp.root, children: items26 };
    const BountyVideoEndAppStoreProvider = tmp5(14553).BountyVideoEndAppStoreProvider;
    tmp89 = memo1;
    tmp90 = questHomeBounties;
    if (stateFromStores > 0) {
      const obj41 = { style: items25, pointerEvents: str, children: isVideoEndAppStoreOverlayVisible(QuestContentImpressionTrackerNative, obj42) };
      items25 = [memo12, animatedStyle1];
      str = "none";
      const View = tmp2(4566).View;
      if (first2) {
        str = "box-none";
      }
      obj42 = {
        adContentId,
        adCreativeType: tmp5(5763).AdCreativeType.BOUNTY,
        questContent: tmp5(5761).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              const obj = { orbAmount, onClose, style: { flex: 1 } };
              return isVideoEndAppStoreOverlayVisible(BountiesScrollRecapPage.BountiesScrollRecapPage, obj);
            }
      };
      QuestContentImpressionTrackerNative = tmp5(10753).QuestContentImpressionTrackerNative;
      tmp88Result = tmp88(View, obj41);
    }
    items26 = [tmp88Result, , , , , ];
    const obj43 = { style: memo8, children: isVideoEndAppStoreOverlayVisible(tmp5(8179).AnimatedFlashList, obj44) };
    const View2 = tmp2(4566).View;
    obj44 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo14,
      overrideItemLayout: tmp85,
      ItemSeparatorComponent: sum1,
      ListFooterComponent: memo7,
      snapToOffsets: memo5,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: null == tmp16,
      contentContainerStyle: memo9
    };
    items26[1] = isVideoEndAppStoreOverlayVisible(View2, obj43);
    let tmp88Result4 = null;
    if (null != tmp16) {
      const obj45 = { metadata: tmp16.metadata, sheetHeight: memo2, revealProgress: sharedValue1, onDismiss: callback2, onInstallPress: null, onOverlaySurfaceClick: null, onCarouselScroll: null };
      ({ onInstallPress: obj47.onInstallPress, onOverlaySurfaceClick: obj47.onOverlaySurfaceClick, onCarouselScroll: obj47.onCarouselScroll } = tmp16);
      tmp88Result4 = tmp88(tmp2(14589), obj45);
    }
    items26[2] = tmp88Result4;
    let tmp88Result5 = null;
    if (tmp80) {
      tmp88Result5 = null;
      if (data.length > 1) {
        const obj46 = { pointerEvents: "none", style: items27, children: isVideoEndAppStoreOverlayVisible(tmp2(5293), obj48) };
        items27 = [memo13, animatedStyle4];
        const View3 = tmp2(4566).View;
        obj48 = { colors, style: memo.absoluteFill };
        tmp88Result5 = tmp88(View3, obj46);
      }
    }
    items26[3] = tmp88Result5;
    const obj49 = { style: items28, pointerEvents: str2, children: tmp88Result6 };
    items28 = [memo11, animatedStyle2];
    str2 = "none";
    const View4 = tmp2(4566).View;
    if (tmp40) {
      str2 = "box-none";
    }
    tmp88Result6 = null;
    if (tmp40) {
      const obj50 = { onPress: callback5 };
      tmp88Result6 = tmp88(tmp2(14590), obj50);
    }
    items26[4] = isVideoEndAppStoreOverlayVisible(View4, obj49);
    const obj51 = { visible: tmp43, onContentLayout: callback, zIndex: height3, opacityStyle: animatedStyle3, children: tmp87 };
    const tmp2Result = tmp2(14544);
    items26[5] = isVideoEndAppStoreOverlayVisible(tmp2Result, obj51);
    return isVideoEndAppStoreOverlayVisible(BountyVideoEndAppStoreProvider, obj39);
  }
}
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ BOUNTY_ORB_AMOUNT: metroImportAll, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9 } = QuestConstants);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: unpackModuleId } = BountiesModalConstants);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = PlatformUtils.isAndroid();
let c18 = 0;
let c19 = 1;
let c20 = 2;
let c21 = 3;
let c22 = 0.5625;
const PX_8 = nativeDefault.space.PX_8;
let colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c25 = 0.05;
let c26 = 0.1;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
let closure_30 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: obj2, listWrapper: obj3, closeButton: obj4, peekGradient: obj5 };
  return obj;
});
const __initData = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
let __initData2 = { code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}" };
let __initData3 = { code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}" };
let closure_35 = { code: "function BountiesModalContentScrollTsx5(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let __initData4 = { code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_37 = { code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let closure_38 = { code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_40 = { code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let __initData5 = { code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let __initData6 = { code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_44 = { code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let __initData7 = { code: "function BountiesModalContentScrollTsx15(){const{videoEndPeekScale,videoEndAppStoreProgress,BOUNTIES_MODAL_FOOTER_HEIGHT,videoLayout}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();const footerHeight=overlayProgress>0||scale<1?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+videoLayout.height*scale+footerHeight};}" };
let __initData8 = { code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekScale,videoEndAppStoreProgress}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();return overlayProgress>0||scale<1;}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx17(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
let closure_48 = { code: "function BountiesModalContentScrollTsx18(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let __initData9 = { code: "function BountiesModalContentScrollTsx19(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_50 = { code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_51 = { code: "function BountiesModalContentScrollTsx21(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let __initData10 = { code: "function BountiesModalContentScrollTsx22(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_53 = { code: "function BountiesModalContentScrollTsx23(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
const __initData11 = { code: "function BountiesModalContentScrollTsx24(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  let bountyId;
  let sourceQuestContent;
  ({ bountyId, sourceQuestContent } = arg0);
  const obj = { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_15(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return closure_15(ThemeContextProvider, obj);
};
