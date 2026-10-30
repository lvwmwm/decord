// Module ID: 16855
// Function ID: 16856
// Name: BountiesModalContentScroll
// Dependencies: [32, 19, 17, 7838, 6775, 16856, 1072, 4855, 21, 1377, 575, 5009, 5090, 1492, 1626, 16857, 9661, 7835, 16852, 5249, 5252, 7855, 14610, 1109, 504, 16860, 16861, 1267, 7864, 16862, 9662, 6782, 6780, 14632, 16863, 16901, 16866, 14647, 16902, 7288, 16906, 5582, 16907, 5075, 16427, 2]
// Exports: default

// Module 16855 (BountiesModalContentScroll)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import native from "native" /* 5075 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import timingPresets from "timingPresets" /* 5252 */;
import QuestContent from "QuestContent" /* 6780 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import QuestDataUtils from "QuestDataUtils" /* 7835 */;
import AnalyticsActions from "AnalyticsActions" /* 7855 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import QuestActionCreators from "QuestActionCreators" /* 9662 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 14610 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14632 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 16427 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 16852 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 16861 */;
import BountiesScrollVideoItem2 from "BountiesScrollVideoItem" /* 16863 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 16902 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountyStore from "BountyStore" /* 7838 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16856 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let ItemSeparatorComponent, _require, adContentId, dependencyMap, set, zIndex4;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
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
    tmp = closure_17(metroRequire, obj);
  }
  return tmp;
}
function BountiesRecapPullZone(height) {
  const obj = { style: { height: height.height } };
  return closure_17(metroRequire, obj);
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
  return closure_17(slotHeight(scrollY[12]).View, obj3);
}
function BountiesModalContentScrollInner(initialBountyId) {
  let QuestContentImpressionTrackerNative;
  let _undefined;
  let _undefined2;
  let c11;
  let c4;
  let closure_2;
  let closure_29;
  let closure_35;
  let closure_48;
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
  let tmp15;
  let tmp39;
  let tmp40;
  let tmp42;
  let tmp43;
  let tmp7;
  let tmp87Result6;
  let tmp88;
  let tmp89;
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  react = undefined;
  getBountyVideoEndPeekClipHeight = undefined;
  let c25;
  let c32;
  let animatedStyle;
  let first4;
  __initData7 = undefined;
  let memo10;
  let derivedValue;
  __initData8 = undefined;
  let tmp = c32();
  dependencyMap = tmp;
  let tmp2 = sourceQuestContent;
  let tmp3 = dependencyMap;
  const height = sourceQuestContent(1492)().height;
  let obj = react;
  const ref = react.useRef(null);
  const tmp5 = initialBountyId;
  const tmp6 = height(react.useState(initialBountyId(16857).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp7, c4] = tmp6;
  _require = tmp7;
  const callback = react.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  size = sourceQuestContent(1492)();
  const width = size.width;
  const height2 = size.height;
  const tmp9 = sourceQuestContent(1626)();
  let closure_3 = tmp9;
  let items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp9);
  items[5] = tmp7;
  const memo = react.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height2 - closure_3.top - initialBountyId;
    let result = diff / height3;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * height3;
      result = diff1;
    }
    size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
  let obj2 = initialBountyId(9661);
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
  let obj3 = initialBountyId(5090);
  const sharedValue = obj3.useSharedValue(0);
  [tmp15, c11] = height(react.useState(null), 2);
  const tmp14 = height(react.useState(null), 2);
  getBountyVideoEndPeekScale = react.useRef(null);
  const ref2 = react.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp16;
  const items2 = [height, , , ];
  ({ top: arr4[1], width: arr4[2], height: arr4[3] } = memo);
  const memo1 = react.useMemo(() => {
    const obj = { windowHeight: height, videoTop: memo.top, videoWidth: memo.width, videoHeight: memo.height };
    return map1(obj);
  }, items2);
  const items3 = [height];
  const items4 = [sharedValue];
  const memo2 = react.useMemo(() => authStore(height), items3);
  const callback1 = react.useCallback((current) => {
    ref2.current = Date.now();
    ref.current = current;
    _undefined2(current);
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    const trackOverlayEvent = current.trackOverlayEvent;
    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = isVideoEndAppStoreOverlayVisible.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items4);
  const items5 = [sharedValue];
  const callback2 = react.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = isVideoEndAppStoreOverlayVisible.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const trackOverlayEvent = current.trackOverlayEvent;
      const _Date = Date;
      trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const obj = AppStoreOverlayTelemetryManager;
      const result = obj.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(memo1.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined2(null);
      set = sharedValue.set;
      const obj2 = timing;
      const result1 = set(obj2.withTiming(0, timingPresets.timingStandard));
    }
  }, items5);
  const items6 = [callback2, tmp16, callback1, sharedValue, memo1];
  const memo3 = react.useMemo(() => ({ videoEndPeekProgress: sharedValue, videoEndPeekTargetScale: memo1, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items6);
  let obj4 = initialBountyId(504);
  const items7 = [data];
  const items8 = [data, closure_8];
  const stateFromStores = obj4.useStateFromStores(items7, () => BountyStore.getCompletedBountyCount(first) * adContentId, items8);
  let obj5 = initialBountyId(16860);
  const bountyRecurringSwipeUpNux = obj5.useBountyRecurringSwipeUpNux({ isEligible: tmp23 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height3 = memo.height;
  let sum = height3 + c25;
  let c21 = sum;
  let diff = data.length - 1;
  let c22 = diff;
  zIndex4 = tmp27;
  let result = diff * sum;
  c25 = result;
  const sum1 = result + height3;
  const items9 = [sum1, result, height3];
  const memo4 = react.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height3 }), items9);
  const obj6 = initialBountyId(16861);
  const handleRecapMomentumEnd = obj6.useBountiesRecapScroll({ listRef: ref, enabled: tmp27, offsets: memo4 }).handleRecapMomentumEnd;
  const items10 = [data, sum1, stateFromStores > 0, sum];
  const memo5 = react.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    const tmp = zIndex;
    if (tmp) {
      mapped.push(sum1);
    }
    return mapped;
  }, items10);
  const tmp32 = height(react.useState(false), 2);
  const first1 = tmp32[0];
  ItemSeparatorComponent = tmp34;
  const tmp35 = height(react.useState(false), 2);
  const first2 = tmp35[0];
  let closure_31 = tmp37;
  [tmp39, tmp40] = height(react.useState(true), 2);
  c32 = tmp40;
  height(react.useState(true), 2);
  [tmp42, tmp43] = height(react.useState(false), 2);
  let c33 = tmp43;
  height(react.useState(false), 2);
  const tmp44 = height(react.useState(0), 2);
  const first3 = tmp44[0];
  __initData2 = tmp44[1];
  const obj7 = initialBountyId(5090);
  const sharedValue1 = obj7.useSharedValue(false);
  const obj8 = initialBountyId(5090);
  const sharedValue2 = obj8.useSharedValue(false);
  const obj9 = initialBountyId(5090);
  const sharedValue3 = obj9.useSharedValue(0);
  const memo6 = react.useMemo(() => {
    const obj = initialBountyId(closure_2[27]);
    return obj.v4();
  }, []);
  __initData3 = react.useRef(0);
  __initData4 = react.useRef(0);
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
    closure_35(arg0);
    callback2();
    callback3(arg0);
  }, items12);
  const obj10 = initialBountyId(16862);
  __initData5 = obj10.useBountiesRecapOrbCount({ scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp27 });
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
      const obj = { adContentId: first[first3].id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: isVideoEndAppStoreOverlayVisible.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
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
  __initData6 = react.useCallback(() => {
    let obj2;
    let obj3;
    const tmp = AnalyticsActions;
    const trackAdContentEvent = tmp.trackAdContentEvent;
    const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: isVideoEndAppStoreOverlayVisible.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj3 = AnalyticsTypes;
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items15);
  const obj12 = { onScroll: Rt, onBeginDrag: ft, onEndDrag: Pt, onMomentumEnd: Ot };
  const obj11 = initialBountyId(5090);
  class Rt {
    constructor(contentOffset) {
      const result = sharedValue3.set(contentOffset.contentOffset.y);
      if (sharedValue2.get()) {
        if (typeof isScrollEventInBounds === "function") {
          const _Math = Math;
          const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
          tmp3(tmp7);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  const obj13 = { scrollY: sharedValue3, isDraggingSharedValue: sharedValue2, isScrollingInBoundsSharedValue: sharedValue1, isScrollEventInBounds: first2 };
  Rt.__closure = obj13;
  Rt.__workletHash = 7942598540397;
  Rt.__initData = __initData2;
  ft = function ft(contentOffset) {
    const result = sharedValue2.set(true);
    if (typeof isScrollEventInBounds === "function") {
      const _Math = Math;
      const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
      tmp3(tmp7);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  ft.__closure = { isDraggingSharedValue: sharedValue2, isScrollingInBoundsSharedValue: sharedValue1, isScrollEventInBounds: first2 };
  ft.__workletHash = 14039038912528;
  ft.__initData = sharedValue1;
  class Pt {
    constructor() {
      const result = sharedValue2.set(false);
      const tmp2 = closure_19;
      if (!tmp2) {
        const result1 = sharedValue1.set(false);
      }
    }
  }
  const obj14 = { isDraggingSharedValue: sharedValue2, IS_ANDROID: dismissRecurringSwipeUpNux, isScrollingInBoundsSharedValue: sharedValue1 };
  Pt.__closure = obj14;
  Pt.__workletHash = 9975335138319;
  Pt.__initData = sharedValue2;
  class Ot {
    constructor(arg0) {
      const tmp = zIndex;
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(handleRecapMomentumEnd)(arg0);
      }
      const result = sharedValue1.set(false);
    }
  }
  Ot.__closure = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(5090).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue1 };
  Ot.__workletHash = 13684210320337;
  Ot.__initData = sharedValue3;
  ({ showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(5090).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue1 });
  const animatedScrollHandler = obj11.useAnimatedScrollHandler(obj12);
  const obj16 = initialBountyId(5090);
  class Tt {
    constructor() {
      return Math.min(Math.max(Math.round(sharedValue3.get() / c21), 0), c22);
    }
  }
  Tt.__closure = { scrollY: sharedValue3, slotHeight: sum, lastBountyIndex: diff };
  Tt.__workletHash = 14048843158960;
  Tt.__initData = memo6;
  function vt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback4)(arg0);
    }
  }
  vt.__closure = { runOnJS: initialBountyId(5090).runOnJS, commitSwipe: callback4 };
  vt.__workletHash = 14015091539518;
  vt.__initData = __initData3;
  ({ runOnJS: initialBountyId(5090).runOnJS, commitSwipe: callback4 });
  const animatedReaction = obj16.useAnimatedReaction(Tt, vt);
  const tmp57 = initialBountyId(5090);
  class Bt {
    constructor() {
      let tmp = zIndex;
      if (tmp) {
        const value = sharedValue3.get();
        tmp = value >= c25 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const useAnimatedReaction = tmp57.useAnimatedReaction;
  Bt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(16861).RECAP_SNAP_EPSILON };
  Bt.__workletHash = 6584708256992;
  Bt.__initData = __initData4;
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(16861).RECAP_SNAP_EPSILON });
  class At {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(c33)(arg0);
      }
    }
  }
  At.__closure = { runOnJS: initialBountyId(5090).runOnJS, setShowRecapFooter: tmp43 };
  At.__workletHash = 10788669301891;
  At.__initData = callback3;
  ({ runOnJS: initialBountyId(5090).runOnJS, setShowRecapFooter: tmp43 });
  const animatedReaction1 = useAnimatedReaction(Bt, At);
  const obj20 = initialBountyId(5090);
  class Dt {
    constructor() {
      const tmp = zIndex && sharedValue3.get() > c25;
      return tmp;
    }
  }
  Dt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, lastBountyScrollOffset: result };
  Dt.__workletHash = 6186370630693;
  Dt.__initData = callback4;
  class Ct {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_29)(arg0);
      }
    }
  }
  Ct.__closure = { runOnJS: initialBountyId(5090).runOnJS, setIsRecapPageRevealed: tmp32[1] };
  Ct.__workletHash = 12713474352874;
  Ct.__initData = __initData5;
  ({ runOnJS: initialBountyId(5090).runOnJS, setIsRecapPageRevealed: tmp32[1] });
  const animatedReaction2 = obj20.useAnimatedReaction(Dt, Ct);
  const tmp60 = initialBountyId(5090);
  class It {
    constructor() {
      let tmp = zIndex;
      if (tmp) {
        const value = sharedValue3.get();
        tmp = value >= sum1 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const useAnimatedReaction2 = tmp60.useAnimatedReaction;
  It.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(16861).RECAP_SNAP_EPSILON };
  It.__workletHash = 5669564400667;
  It.__initData = __initData6;
  function yt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_31)(arg0);
    }
  }
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue3, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(16861).RECAP_SNAP_EPSILON });
  yt.__closure = { runOnJS: initialBountyId(5090).runOnJS, setIsRecapPageOnTop: tmp35[1] };
  yt.__workletHash = 8102193741774;
  yt.__initData = animatedStyle;
  ({ runOnJS: initialBountyId(5090).runOnJS, setIsRecapPageOnTop: tmp35[1] });
  const animatedReaction21 = useAnimatedReaction2(It, yt);
  const items16 = [height3, stateFromStores > 0];
  const memo7 = react.useMemo(() => {
    let tmp = null;
    if (zIndex) {
      const obj = { height: height3 };
      tmp = callback2(BountiesRecapPullZone, obj);
    }
    return tmp;
  }, items16);
  const obj24 = initialBountyId(5090);
  class Mt {
    constructor() {
      const value = sharedValue.get();
      let num = 97;
      const tmp2 = ref(value, memo1);
      const tmp3 = memo;
      const tmp4 = unpackModuleId(value, memo.width, memo.height);
      if (value > 0) {
        num = 0;
      }
      return { height: tmp3.top + tmp4 * tmp2 + num };
    }
  }
  const obj25 = { videoEndPeekProgress: sharedValue, getBountyVideoEndPeekScale, videoEndPeekTargetScale: memo1, getBountyVideoEndPeekClipHeight, videoLayout: memo, BOUNTIES_MODAL_FOOTER_HEIGHT: 97 };
  Mt.__closure = obj25;
  Mt.__workletHash = 6723524234865;
  Mt.__initData = first4;
  animatedStyle = obj24.useAnimatedStyle(Mt);
  const items17 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr19[2], width: arr19[3] } = memo);
  const memo8 = react.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: memo.left, width: memo.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items17);
  const tmp65 = height(react.useState(false), 2);
  first4 = tmp65[0];
  __initData7 = tmp67;
  function kt() {
    return sharedValue.get() > 0;
  }
  kt.__closure = { videoEndPeekProgress: sharedValue };
  kt.__workletHash = 635744460978;
  kt.__initData = __initData7;
  const obj26 = initialBountyId(5090);
  class Ht {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_48)(arg0);
      }
    }
  }
  Ht.__closure = { runOnJS: initialBountyId(5090).runOnJS, setHideListFooterPadding: tmp65[1] };
  Ht.__workletHash = 7553157067719;
  Ht.__initData = memo10;
  ({ runOnJS: initialBountyId(5090).runOnJS, setHideListFooterPadding: tmp65[1] });
  const animatedReaction3 = obj26.useAnimatedReaction(kt, Ht);
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
  const obj28 = initialBountyId(5090);
  class Ut {
    constructor() {
      const obj = useBountiesRecapScroll;
      return obj.getRevealProgress(sharedValue3.get(), c25, height3);
    }
  }
  Ut.__closure = { getRevealProgress: initialBountyId(16861).getRevealProgress, scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height3 };
  Ut.__workletHash = 1141192763711;
  Ut.__initData = derivedValue;
  ({ getRevealProgress: initialBountyId(16861).getRevealProgress, scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height3 });
  derivedValue = obj28.useDerivedValue(Ut);
  const obj30 = initialBountyId(5090);
  class Gt {
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
  Gt.__closure = { interpolate: initialBountyId(5090).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(5090).Extrapolation };
  Gt.__workletHash = 15664240485606;
  Gt.__initData = __initData8;
  ({ interpolate: initialBountyId(5090).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(5090).Extrapolation });
  const animatedStyle1 = obj30.useAnimatedStyle(Gt);
  const obj32 = initialBountyId(5090);
  class Qt {
    constructor() {
      let interpolate;
      let items;
      let value;
      const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = derivedValue.get();
      items = [c27, c28];
      return obj;
    }
  }
  Qt.__closure = { interpolate: initialBountyId(5090).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(5090).Extrapolation };
  Qt.__workletHash = 13645152212589;
  Qt.__initData = hasRecurringSwipeUpNux;
  ({ interpolate: initialBountyId(5090).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(5090).Extrapolation });
  const animatedStyle2 = obj32.useAnimatedStyle(Qt);
  const obj34 = initialBountyId(5090);
  const tmp75 = first1;
  class Zt {
    constructor() {
      let items;
      let obj4;
      let revealProgress;
      const obj = sharedValue3;
      if (sharedValue3.get() >= c25 - c21 / 2) {
        revealProgress = derivedValue.get();
      } else {
        const obj2 = useBountiesRecapScroll;
        revealProgress = obj2.getRevealProgress(obj.get(), 0, height3);
      }
      const obj3 = { opacity: obj4.interpolate(revealProgress, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      items = [c27, c28];
      obj4 = ReanimatedRexport;
      return obj3;
    }
  }
  Zt.__closure = { scrollY: sharedValue3, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(16861).getRevealProgress, recapRevealHeight: height3, interpolate: initialBountyId(5090).interpolate, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(5090).Extrapolation };
  Zt.__workletHash = 3460917733424;
  Zt.__initData = __initData9;
  const items22 = [tmp.peekGradient, , , , ];
  ({ left: arr24[1], width: arr24[2], top: arr24[3], height: arr24[4] } = memo);
  ({ scrollY: sharedValue3, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(16861).getRevealProgress, recapRevealHeight: height3, interpolate: initialBountyId(5090).interpolate, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(5090).Extrapolation });
  const animatedStyle3 = obj34.useAnimatedStyle(Zt);
  let tmp79 = tmp23;
  const memo13 = react.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items22);
  if (data.length > 1) {
    tmp79 = hasRecurringSwipeUpNux;
  }
  if (tmp79) {
    tmp79 = !tmp16;
  }
  __initData8 = tmp79;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp23;
  }
  function zt() {
    let interpolate;
    let items;
    let value;
    const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = sharedValue3.get();
    items = [0, c21];
    return obj;
  }
  const tmp5Result = tmp5(5090);
  zt.__closure = { interpolate: tmp5(5090).interpolate, scrollY: sharedValue3, slotHeight: sum, Extrapolation: tmp5(5090).Extrapolation };
  zt.__workletHash = 7289479842131;
  zt.__initData = __initData10;
  ({ interpolate: tmp5(5090).interpolate, scrollY: sharedValue3, slotHeight: sum, Extrapolation: tmp5(5090).Extrapolation });
  const animatedStyle4 = tmp5Result.useAnimatedStyle(zt);
  const tmp5Result2 = tmp5(5090);
  class Kt {
    constructor() {
      return derivedValue.get() < c28;
    }
  }
  Kt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp75 };
  Kt.__workletHash = 8241096384746;
  Kt.__initData = __initData11;
  class Wt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(c32)(arg0);
      }
    }
  }
  Wt.__closure = { runOnJS: tmp5(5090).runOnJS, setIsCloseButtonPressable: tmp40 };
  Wt.__workletHash = 12445734761450;
  Wt.__initData = __initData12;
  ({ runOnJS: tmp5(5090).runOnJS, setIsCloseButtonPressable: tmp40 });
  const animatedReaction4 = tmp5Result2.useAnimatedReaction(Kt, Wt);
  const items23 = [sum, sharedValue3, memo10, tmp79, hasRecurringSwipeUpNux, sourceQuestContent, , , , , , ];
  ({ width: arr25[6], height: arr25[7] } = memo);
  items23[8] = first3;
  items23[9] = first1;
  items23[10] = first2;
  items23[11] = sharedValue1;
  const items24 = [first3, first1, first2, , , , ];
  ({ width: arr26[3], height: arr26[4] } = memo);
  items24[5] = tmp79;
  items24[6] = null != tmp15;
  const callback6 = obj.useCallback((arg0) => {
    let BountiesScrollVideoItem;
    let index;
    let item;
    let tmp3;
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue3, style: memo10, isPeekEnabled, children: callback2(BountiesScrollVideoItem, size, item.id) };
    size = { bounty: item, sourceQuestContent, width: memo.width, height: memo.height, index, isScrollIndicatorEnabled: tmp3, isActive: tmp5, isRecapPageRevealed: first1, isRecapPageOnTop: first2, isScrollingInBoundsSharedValue: sharedValue1, shouldLoadHls: tmp5, softDownloadCapsEnabled: true };
    tmp3 = hasRecurringSwipeUpNux;
    BountiesScrollVideoItem = BountiesScrollVideoItem2.BountiesScrollVideoItem;
    const tmp2 = BountiesScrollVideoItemContainer;
    if (hasRecurringSwipeUpNux) {
      tmp3 = 0 === index;
    }
    return callback2(tmp2, obj);
  }, items23);
  [][0] = height3;
  const memo14 = obj.useMemo(() => {
    size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: memo.width, height: memo.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible };
    return size;
  }, items24);
  if (0 === data.length) {
    return null;
  } else {
    let tmp86 = null;
    if (tmp42) {
      const obj38 = { orbAmount: stateFromStores };
      tmp86 = callback2(tmp5(16901).BountiesScrollRecapFooter, obj38);
    }
    const obj39 = { value: memo3, children: tmp88(tmp89, obj40) };
    let tmp87Result = null;
    obj40 = { style: tmp.root, children: items26 };
    const BountyVideoEndAppStoreProvider = tmp5(16866).BountyVideoEndAppStoreProvider;
    tmp88 = hasRecurringSwipeUpNux;
    tmp89 = questHomeBounties;
    if (stateFromStores > 0) {
      const obj41 = { style: items25, pointerEvents: str, children: callback2(QuestContentImpressionTrackerNative, obj42) };
      items25 = [memo12, animatedStyle1];
      str = "none";
      const View = tmp2(5090).View;
      if (first2) {
        str = "box-none";
      }
      obj42 = {
        adContentId,
        adCreativeType: tmp5(6782).AdCreativeType.BOUNTY,
        questContent: tmp5(6780).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              const obj = { orbAmount, onClose, style: { flex: 1 } };
              return callback2(BountiesScrollRecapPage.BountiesScrollRecapPage, obj);
            }
      };
      QuestContentImpressionTrackerNative = tmp5(14647).QuestContentImpressionTrackerNative;
      tmp87Result = tmp87(View, obj41);
    }
    items26 = [tmp87Result, , , , , ];
    const obj43 = { style: memo8, children: callback2(tmp5(7288).AnimatedFlashList, obj44) };
    const View2 = tmp2(5090).View;
    obj44 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo14,
      overrideItemLayout: tmp84,
      ItemSeparatorComponent,
      ListFooterComponent: memo7,
      snapToOffsets: memo5,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: null == tmp15,
      contentContainerStyle: memo9
    };
    items26[1] = callback2(View2, obj43);
    let tmp87Result4 = null;
    if (null != tmp15) {
      const obj45 = { metadata: tmp15.metadata, sheetHeight: memo2, revealProgress: sharedValue, onDismiss: callback2, onInstallPress: null, onOverlaySurfaceClick: null, onCarouselScroll: null };
      ({ onInstallPress: obj47.onInstallPress, onOverlaySurfaceClick: obj47.onOverlaySurfaceClick, onCarouselScroll: obj47.onCarouselScroll } = tmp15);
      tmp87Result4 = tmp87(tmp2(16906), obj45);
    }
    items26[2] = tmp87Result4;
    let tmp87Result5 = null;
    if (tmp79) {
      tmp87Result5 = null;
      if (data.length > 1) {
        const obj46 = { pointerEvents: "none", style: items27, children: callback2(tmp2(5582), obj48) };
        items27 = [memo13, animatedStyle4];
        const View3 = tmp2(5090).View;
        obj48 = { colors: sum1, style: memo.absoluteFill };
        tmp87Result5 = tmp87(View3, obj46);
      }
    }
    items26[3] = tmp87Result5;
    const obj49 = { style: items28, pointerEvents: str2, children: tmp87Result6 };
    items28 = [memo11, animatedStyle2];
    str2 = "none";
    const View4 = tmp2(5090).View;
    if (tmp39) {
      str2 = "box-none";
    }
    tmp87Result6 = null;
    if (tmp39) {
      const obj50 = { onPress: callback5 };
      tmp87Result6 = tmp87(tmp2(16907), obj50);
    }
    items26[4] = callback2(View4, obj49);
    const obj51 = { visible: tmp42, onContentLayout: callback, zIndex: zIndex4, opacityStyle: animatedStyle3, children: tmp86 };
    const tmp2Result = tmp2(16857);
    items26[5] = callback2(tmp2Result, obj51);
    return callback2(BountyVideoEndAppStoreProvider, obj39);
  }
}
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ BOUNTY_ORB_AMOUNT: metroImportAll, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9 } = QuestConstants);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekClipHeight: unpackModuleId, getBountyVideoEndPeekScale: closure_12, getBountyVideoEndPeekTargetScale: map1 } = BountiesModalConstants);
({ AnalyticEvents: closure_14, ComponentActions: closure_15 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = PlatformUtils.isAndroid();
let c20 = 0;
let c21 = 1;
let c22 = 2;
let c23 = 3;
let c24 = 0.5625;
const PX_8 = nativeDefault.space.PX_8;
let closure_26 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c27 = 0.05;
let c28 = 0.1;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
let closure_32 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: obj2, listWrapper: obj3, closeButton: obj4, peekGradient: obj5 };
  return obj;
});
const __initData = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
let __initData2 = { code: "function BountiesModalContentScrollTsx3(event){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}}" };
let closure_36 = { code: "function BountiesModalContentScrollTsx4(event){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}" };
let closure_37 = { code: "function BountiesModalContentScrollTsx5(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let closure_38 = { code: "function BountiesModalContentScrollTsx6(event){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx7(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let __initData3 = { code: "function BountiesModalContentScrollTsx8(next,prev){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev){runOnJS(commitSwipe)(next);}}" };
let __initData4 = { code: "function BountiesModalContentScrollTsx9(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_42 = { code: "function BountiesModalContentScrollTsx10(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx11(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let __initData5 = { code: "function BountiesModalContentScrollTsx12(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let __initData6 = { code: "function BountiesModalContentScrollTsx13(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_46 = { code: "function BountiesModalContentScrollTsx14(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx15(){const{videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT}=this.__closure;const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,videoLayout.width,videoLayout.height);const footerHeight=progress>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight};}" };
let __initData7 = { code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekProgress}=this.__closure;return videoEndPeekProgress.get()>0;}" };
let closure_49 = { code: "function BountiesModalContentScrollTsx17(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
let closure_50 = { code: "function BountiesModalContentScrollTsx18(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let __initData8 = { code: "function BountiesModalContentScrollTsx19(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_52 = { code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
const __initData9 = { code: "function BountiesModalContentScrollTsx21(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
const __initData10 = { code: "function BountiesModalContentScrollTsx22(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
const __initData11 = { code: "function BountiesModalContentScrollTsx23(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
const __initData12 = { code: "function BountiesModalContentScrollTsx24(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default function BountiesModalContentScroll(arg0) {
  let bountyId;
  let sourceQuestContent;
  ({ bountyId, sourceQuestContent } = arg0);
  const obj = { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_17(BountiesModalContentScrollInner, { initialBountyId: bountyId, sourceQuestContent }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return closure_17(ThemeContextProvider, obj);
};
