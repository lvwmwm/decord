// Module ID: 17545
// Function ID: 17546
// Name: BountiesModalContentScroll
// Dependencies: [32, 19, 17, 8807, 5338, 17546, 1072, 5152, 21, 1360, 575, 5306, 1655, 1496, 1630, 17547, 10131, 8804, 17542, 5548, 5551, 8825, 10171, 1108, 504, 17550, 17551, 1269, 8834, 17552, 10133, 5345, 5343, 15249, 1708, 17553, 17591, 17556, 15264, 17592, 7888, 17596, 5893, 17597, 5377, 17101, 2]
// Exports: default

// Module 17545 (BountiesModalContentScroll)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import _mod1655 from "module_1655" /* 1655 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import QuestContent from "QuestContent" /* 5343 */;
import AdCreativeType from "AdCreativeType" /* 5345 */;
import native from "native" /* 5377 */;
import timing_timing from "timing/timing" /* 5548 */;
import timingPresets from "timingPresets" /* 5551 */;
import QuestDataUtils from "QuestDataUtils" /* 8804 */;
import AnalyticsActions from "AnalyticsActions" /* 8825 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8834 */;
import QuestActionCreators from "QuestActionCreators" /* 10133 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10171 */;
import VideoQuestUtils from "VideoQuestUtils" /* 15249 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 17101 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 17542 */;
import BountiesScrollVideoItem2 from "BountiesScrollVideoItem" /* 17553 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 17592 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountyStore from "BountyStore" /* 8807 */;
import QuestConstants from "QuestConstants" /* 5338 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17546 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1360 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let _require, absolute, adContentId, dependencyMap, set;

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
let tmp7;
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
function BountiesScrollVideoItemContainer(arg0) {
  let children;
  let index;
  let isPeekEnabled;
  let items2;
  let scrollY;
  let slotHeight;
  let style;
  let tmp10;
  let tmp11;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ index, slotHeight, scrollY, style, isPeekEnabled, children } = arg0);
  let tmp = dependencyMap;
  let items = [closure_31, scrollY, index, slotHeight, isPeekEnabled, 0.8, , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[6] = _mod1655.interpolate;
  items[7] = 0.3;
  items[8] = _mod1655.Extrapolation;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class BountiesModalContentScrollTsx2 {
    constructor() {
      result = (closure_0.get() - closure_1 * closure_2) / closure_2;
      tmp = closure_1;
      absolute = Math.abs(result);
      items = [0];
      items[1] = closure_6;
      items[2] = 1;
      num = 0;
      tmp4 = closure_5;
      if (closure_3) {
        num = 0;
        if (result < 0) {
          num = 0;
          if (1 === tmp) {
            num = closure_4;
          }
        }
      }
      obj = { opacity: null };
      items1 = [1, 1];
      items1[2] = num;
      obj.opacity = tmp4(absolute, items, items1, closure_7.CLAMP);
      return obj;
    }
  }
  let items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  BountiesModalContentScrollTsx2.__closure = items1;
  BountiesModalContentScrollTsx2.__workletHash = 5598409177263;
  BountiesModalContentScrollTsx2.__initData = tmp3;
  const animatedStyle = useAnimatedStyle(BountiesModalContentScrollTsx2);
  let obj = { style: items2, children };
  items2 = [style, animatedStyle];
  return closure_17(_modDef1655.View, obj);
}
function BountiesModalContentScrollInner(initialBountyId) {
  let QuestContentImpressionTrackerNative;
  let _undefined;
  let _undefined2;
  let c11;
  let c4;
  let closure_2;
  let items69;
  let items70;
  let items71;
  let items72;
  let lastBounty;
  let obj14;
  let obj16;
  let obj18;
  let obj22;
  let slotHeight;
  let str;
  let str2;
  let tmp100;
  let tmp101;
  let tmp102;
  let tmp105;
  let tmp106;
  let tmp107;
  let tmp108;
  let tmp109;
  let tmp110;
  let tmp111;
  let tmp112;
  let tmp115;
  let tmp116;
  let tmp117;
  let tmp118;
  let tmp119;
  let tmp120;
  let tmp121;
  let tmp128;
  let tmp129;
  let tmp130;
  let tmp131;
  let tmp132;
  let tmp139;
  let tmp140;
  let tmp141;
  let tmp142;
  let tmp143;
  let tmp146;
  let tmp147;
  let tmp148;
  let tmp149;
  let tmp152;
  let tmp153;
  let tmp154;
  let tmp155;
  let tmp156;
  let tmp157;
  let tmp16;
  let tmp160;
  let tmp161;
  let tmp162;
  let tmp163;
  let tmp164;
  let tmp165;
  let tmp166;
  let tmp167;
  let tmp168;
  let tmp169;
  let tmp170;
  let tmp175;
  let tmp176;
  let tmp177;
  let tmp178;
  let tmp179;
  let tmp182;
  let tmp183;
  let tmp184;
  let tmp185;
  let tmp186;
  let tmp187;
  let tmp194Result6;
  let tmp195;
  let tmp196;
  let tmp40;
  let tmp41;
  let tmp43;
  let tmp44;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp8;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  react = undefined;
  c11 = undefined;
  let sum1;
  let sharedValue1;
  let animatedStyle;
  let first4;
  let memo10;
  let isPeekEnabled;
  let tmp = sharedValue1();
  dependencyMap = tmp;
  let tmp2 = sourceQuestContent;
  let tmp3 = dependencyMap;
  const height = sourceQuestContent(1496)().height;
  let obj = react;
  react.useRef(null);
  const tmp5 = initialBountyId;
  [tmp8, c4] = height(react.useState(initialBountyId(17547).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  _require = tmp8;
  const tmp7 = height(react.useState(initialBountyId(17547).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  size = sourceQuestContent(1496)();
  const width = size.width;
  const height2 = size.height;
  const tmp10 = sourceQuestContent(1630)();
  let closure_3 = tmp10;
  let items = [width, height2, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp10);
  items[5] = tmp8;
  const memo = react.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height2 - closure_3.top - initialBountyId;
    let result = diff / c24;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c24;
      result = diff1;
    }
    size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
  let obj2 = initialBountyId(10131);
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
  let closure_8 = tmp12;
  let items1 = [tmp12, initialBountyId, sourceQuestContent];
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
  let obj3 = initialBountyId(1655);
  const sharedValue = obj3.useSharedValue(0);
  const tmp15 = height(react.useState(null), 2);
  [tmp16, c11] = tmp15;
  const ref = react.useRef(null);
  const ref2 = react.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp17;
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
    const obj = timing_timing;
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
      const obj2 = timing_timing;
      const result1 = set(obj2.withTiming(0, timingPresets.timingStandard));
    }
  }, items5);
  const items6 = [callback2, null != tmp16, callback1, sharedValue, memo1];
  const memo3 = react.useMemo(() => ({ videoEndPeekProgress: sharedValue, videoEndPeekTargetScale: memo1, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items6);
  let obj4 = initialBountyId(504);
  const items7 = [data];
  const items8 = [data, closure_8];
  const stateFromStores = obj4.useStateFromStores(items7, () => BountyStore.getCompletedBountyCount(first) * adContentId, items8);
  let obj5 = initialBountyId(17550);
  const bountyRecurringSwipeUpNux = obj5.useBountyRecurringSwipeUpNux({ isEligible: tmp24 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height3 = memo.height;
  let sum = height3 + sum1;
  let c21 = sum;
  let diff = data.length - 1;
  let closure_22 = tmp28;
  let result = diff * sum;
  c24 = result;
  sum1 = result + height3;
  const items9 = [sum1, result, height3];
  const memo4 = react.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height3 }), items9);
  const items10 = [data, sum1, stateFromStores > 0, sum];
  const obj6 = initialBountyId(17551);
  const handleRecapMomentumEnd = obj6.useBountiesRecapScroll({ listRef: ref, enabled: tmp28, offsets: memo4 }).handleRecapMomentumEnd;
  const memo5 = react.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    const tmp = closure_22;
    if (tmp) {
      mapped.push(sum1);
    }
    return mapped;
  }, items10);
  const tmp33 = height(react.useState(false), 2);
  const first1 = tmp33[0];
  const tmp35 = tmp33[1];
  const tmp36 = height(react.useState(false), 2);
  const first2 = tmp36[0];
  const tmp38 = tmp36[1];
  [tmp40, tmp41] = height(react.useState(true), 2);
  height(react.useState(true), 2);
  [tmp43, tmp44] = height(react.useState(false), 2);
  height(react.useState(false), 2);
  const tmp45 = height(react.useState(0), 2);
  const first3 = tmp45[0];
  let closure_29 = tmp45[1];
  const obj7 = initialBountyId(1655);
  sharedValue1 = obj7.useSharedValue(false);
  const obj8 = initialBountyId(1655);
  const sharedValue2 = obj8.useSharedValue(false);
  const obj9 = initialBountyId(1655);
  const sharedValue3 = obj9.useSharedValue(0);
  const memo6 = react.useMemo(() => {
    const obj = initialBountyId(closure_2[27]);
    return obj.v4();
  }, []);
  const ref3 = react.useRef(0);
  const ref4 = react.useRef(0);
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
    closure_29(arg0);
    callback2();
    callback3(arg0);
  }, items12);
  const obj10 = initialBountyId(17552);
  const orbAmount = obj10.useBountiesRecapOrbCount({ scrollY: sharedValue3, lastBountyScrollOffset: result, recapRevealHeight: height3, targetOrbAmount: stateFromStores, enabled: tmp28 });
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
  const onClose = react.useCallback(() => {
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
  const items16 = [ref3, sharedValue3, sharedValue2, sharedValue1, first3];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp57, tmp58, tmp59, tmp60, tmp61] = items16;
  const obj11 = { onScroll: BountiesModalContentScrollTsx3, onBeginDrag: BountiesModalContentScrollTsx4, onEndDrag: BountiesModalContentScrollTsx5, onMomentumEnd: BountiesModalContentScrollTsx6 };
  const tmp56 = initialBountyId(1655);
  const tmp6 = height;
  class BountiesModalContentScrollTsx3 {
    constructor(contentOffset) {
      const result = _undefined.set(contentOffset.contentOffset.y);
      if (_undefined2.get()) {
        const result1 = _undefined3.set(_undefined4(contentOffset));
      }
    }
  }
  const items17 = [tmp58, tmp59, tmp60, tmp61];
  BountiesModalContentScrollTsx3.__closure = items17;
  BountiesModalContentScrollTsx3.__workletHash = 10715376570228;
  BountiesModalContentScrollTsx3.__initData = tmp57;
  const items18 = [ref4, sharedValue2, sharedValue1, first3];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp62, tmp63, tmp64, tmp65] = items18;
  class BountiesModalContentScrollTsx4 {
    constructor(arg0) {
      const result = _undefined.set(true);
      const result1 = _undefined2.set(_undefined3(arg0));
    }
  }
  const items19 = [tmp63, tmp64, tmp65];
  BountiesModalContentScrollTsx4.__closure = items19;
  BountiesModalContentScrollTsx4.__workletHash = 9771605321321;
  BountiesModalContentScrollTsx4.__initData = tmp62;
  const items20 = [callback3, sharedValue2, dismissRecurringSwipeUpNux, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp66, tmp67, tmp68, tmp69] = items20;
  class BountiesModalContentScrollTsx5 {
    constructor() {
      const result = _undefined.set(false);
      const tmp2 = c1;
      if (!tmp2) {
        const result1 = _undefined2.set(false);
      }
    }
  }
  const items21 = [tmp67, tmp68, tmp69];
  BountiesModalContentScrollTsx5.__closure = items21;
  BountiesModalContentScrollTsx5.__workletHash = 13193066516406;
  BountiesModalContentScrollTsx5.__initData = tmp66;
  const items22 = [orbAmount, stateFromStores > 0, , , ];
  const useAnimatedScrollHandler = tmp56.useAnimatedScrollHandler;
  items22[2] = tmp5(1708).scheduleOnRN;
  items22[3] = handleRecapMomentumEnd;
  items22[4] = sharedValue1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp70, tmp71, tmp72, tmp73, tmp74] = items22;
  class BountiesModalContentScrollTsx6 {
    constructor(arg0) {
      const tmp = c0;
      if (tmp) {
        _undefined(c2, arg0);
      }
      const result = _undefined2.set(false);
    }
  }
  const items23 = [tmp71, tmp72, tmp73, tmp74];
  BountiesModalContentScrollTsx6.__closure = items23;
  BountiesModalContentScrollTsx6.__workletHash = 11833509470853;
  BountiesModalContentScrollTsx6.__initData = tmp70;
  const items24 = [onClose, sharedValue3, sum, diff];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp77, tmp78, tmp79, tmp80] = items24;
  const animatedScrollHandler = useAnimatedScrollHandler(obj11);
  const tmp5Result = tmp5(1655);
  class BountiesModalContentScrollTsx7 {
    constructor() {
      return Math.min(Math.max(Math.round(_undefined.get() / c1), 0), c2);
    }
  }
  const items25 = [tmp78, tmp79, tmp80];
  BountiesModalContentScrollTsx7.__closure = items25;
  BountiesModalContentScrollTsx7.__workletHash = 15263335344329;
  BountiesModalContentScrollTsx7.__initData = tmp77;
  const items26 = [animatedStyle, , ];
  const useAnimatedReaction = tmp5Result.useAnimatedReaction;
  items26[1] = tmp5(1708).scheduleOnRN;
  items26[2] = callback4;
  c0 = undefined;
  c1 = undefined;
  [tmp81, tmp82, tmp83] = items26;
  class BountiesModalContentScrollTsx8 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items27 = [tmp82, tmp83];
  BountiesModalContentScrollTsx8.__closure = items27;
  BountiesModalContentScrollTsx8.__workletHash = 7117021770762;
  BountiesModalContentScrollTsx8.__initData = tmp81;
  const animatedReaction = useAnimatedReaction(BountiesModalContentScrollTsx7, BountiesModalContentScrollTsx8);
  const items28 = [first4, stateFromStores > 0, sharedValue3, result, ];
  const useAnimatedReaction2 = tmp5(1655).useAnimatedReaction;
  tmp5(1655);
  items28[4] = tmp5(17551).RECAP_SNAP_EPSILON;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp86, tmp87, tmp88, tmp89, tmp90] = items28;
  class BountiesModalContentScrollTsx9 {
    constructor() {
      const tmp = c0 && _undefined.get() >= c2 - c3;
      return tmp;
    }
  }
  const items29 = [tmp87, tmp88, tmp89, tmp90];
  BountiesModalContentScrollTsx9.__closure = items29;
  BountiesModalContentScrollTsx9.__workletHash = 1510735356441;
  BountiesModalContentScrollTsx9.__initData = tmp86;
  const items30 = [memo10, tmp5(1708).scheduleOnRN, tmp44];
  c0 = undefined;
  c1 = undefined;
  [tmp91, tmp92, tmp93] = items30;
  class BountiesModalContentScrollTsx10 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items31 = [tmp92, tmp93];
  BountiesModalContentScrollTsx10.__closure = items31;
  BountiesModalContentScrollTsx10.__workletHash = 9911843745367;
  BountiesModalContentScrollTsx10.__initData = tmp91;
  const animatedReaction2 = useAnimatedReaction2(BountiesModalContentScrollTsx9, BountiesModalContentScrollTsx10);
  const items32 = [isPeekEnabled, stateFromStores > 0, sharedValue3, result];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp96, tmp97, tmp98, tmp99] = items32;
  const tmp5Result13 = tmp5(1655);
  class BountiesModalContentScrollTsx11 {
    constructor() {
      const tmp = c0 && _undefined.get() > c2;
      return tmp;
    }
  }
  const items33 = [tmp97, tmp98, tmp99];
  BountiesModalContentScrollTsx11.__closure = items33;
  BountiesModalContentScrollTsx11.__workletHash = 6652015407036;
  BountiesModalContentScrollTsx11.__initData = tmp96;
  const items34 = [hasRecurringSwipeUpNux, , ];
  const useAnimatedReaction3 = tmp5Result13.useAnimatedReaction;
  items34[1] = tmp5(1708).scheduleOnRN;
  items34[2] = tmp35;
  c0 = undefined;
  c1 = undefined;
  [tmp100, tmp101, tmp102] = items34;
  class BountiesModalContentScrollTsx12 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items35 = [tmp101, tmp102];
  BountiesModalContentScrollTsx12.__closure = items35;
  BountiesModalContentScrollTsx12.__workletHash = 7535649681310;
  BountiesModalContentScrollTsx12.__initData = tmp100;
  const animatedReaction3 = useAnimatedReaction3(BountiesModalContentScrollTsx11, BountiesModalContentScrollTsx12);
  const items36 = [closure_43, stateFromStores > 0, sharedValue3, sum1, ];
  const useAnimatedReaction4 = tmp5(1655).useAnimatedReaction;
  tmp5(1655);
  items36[4] = tmp5(17551).RECAP_SNAP_EPSILON;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp105, tmp106, tmp107, tmp108, tmp109] = items36;
  class BountiesModalContentScrollTsx13 {
    constructor() {
      const tmp = c0 && _undefined.get() >= c2 - c3;
      return tmp;
    }
  }
  const items37 = [tmp106, tmp107, tmp108, tmp109];
  BountiesModalContentScrollTsx13.__closure = items37;
  BountiesModalContentScrollTsx13.__workletHash = 2596573002466;
  BountiesModalContentScrollTsx13.__initData = tmp105;
  const items38 = [closure_44, tmp5(1708).scheduleOnRN, tmp38];
  c0 = undefined;
  c1 = undefined;
  [tmp110, tmp111, tmp112] = items38;
  class BountiesModalContentScrollTsx14 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items39 = [tmp111, tmp112];
  BountiesModalContentScrollTsx14.__closure = items39;
  BountiesModalContentScrollTsx14.__workletHash = 9994976909562;
  BountiesModalContentScrollTsx14.__initData = tmp110;
  const animatedReaction4 = useAnimatedReaction4(BountiesModalContentScrollTsx13, BountiesModalContentScrollTsx14);
  const items40 = [height3, stateFromStores > 0];
  const memo7 = obj.useMemo(() => {
    let tmp = null;
    if (closure_22) {
      const obj = { height: height3 };
      tmp = callback2(BountiesRecapPullZone, obj);
    }
    return tmp;
  }, items40);
  const items41 = [closure_45, sharedValue, ref, memo1, c11, memo, 97];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  let c5;
  [tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121] = items41;
  const tmp5Result15 = tmp5(1655);
  class BountiesModalContentScrollTsx15 {
    constructor() {
      const value = _undefined.get();
      let num = 0;
      const tmp2 = _undefined2(value, c2);
      const tmp3 = _undefined4;
      const tmp4 = _undefined3(value, _undefined4.width, _undefined4.height);
      if (value <= 0) {
        num = c5;
      }
      return { height: tmp3.top + tmp4 * tmp2 + num };
    }
  }
  const items42 = [tmp116, tmp117, tmp118, tmp119, tmp120, tmp121];
  BountiesModalContentScrollTsx15.__closure = items42;
  BountiesModalContentScrollTsx15.__workletHash = 11345166526440;
  BountiesModalContentScrollTsx15.__initData = tmp115;
  animatedStyle = tmp5Result15.useAnimatedStyle(BountiesModalContentScrollTsx15);
  const items43 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr45[2], width: arr45[3] } = memo);
  const memo8 = obj.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: memo.left, width: memo.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items43);
  const tmp6Result = tmp6(obj.useState(false), 2);
  first4 = tmp6Result[0];
  const items44 = [closure_46, sharedValue];
  c0 = undefined;
  const tmp126 = tmp6Result[1];
  [tmp128, tmp129] = items44;
  const tmp5Result16 = tmp5(1655);
  class BountiesModalContentScrollTsx16 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  const items45 = [tmp129];
  BountiesModalContentScrollTsx16.__closure = items45;
  BountiesModalContentScrollTsx16.__workletHash = 13605926420267;
  BountiesModalContentScrollTsx16.__initData = tmp128;
  const items46 = [closure_47, , ];
  const useAnimatedReaction5 = tmp5Result16.useAnimatedReaction;
  items46[1] = tmp5(1708).scheduleOnRN;
  items46[2] = tmp126;
  c0 = undefined;
  c1 = undefined;
  [tmp130, tmp131, tmp132] = items46;
  class BountiesModalContentScrollTsx17 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items47 = [tmp131, tmp132];
  BountiesModalContentScrollTsx17.__closure = items47;
  BountiesModalContentScrollTsx17.__workletHash = 2131624119443;
  BountiesModalContentScrollTsx17.__initData = tmp130;
  const animatedReaction5 = useAnimatedReaction5(BountiesModalContentScrollTsx16, BountiesModalContentScrollTsx17);
  const items48 = [first4, memo.top];
  const items49 = [, ];
  ({ width: arr51[0], height: arr51[1] } = memo);
  const memo9 = obj.useMemo(() => {
    let num;
    const obj = { paddingTop: memo.top, paddingBottom: num };
    num = 97;
    if (first4) {
      num = 0;
    }
    return obj;
  }, items48);
  memo10 = obj.useMemo(() => {
    size = { width: memo.width, height: memo.height };
    return size;
  }, items49);
  const items50 = [tmp.closeButton, , , ];
  ({ top: arr52[1], left: arr52[2], width: arr52[3] } = memo);
  const items51 = [first2, tmp.recapPage, , , , ];
  ({ top: arr53[2], left: arr53[3], width: arr53[4] } = memo);
  items51[5] = height;
  const memo11 = obj.useMemo(() => {
    let diff;
    const items = [closure_2.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
    const sum = memo.left + memo.width;
    diff = sum - nativeDefault.space.PX_32;
    items[1] = rect;
    return items;
  }, items50);
  const memo12 = obj.useMemo(() => {
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
  }, items51);
  const items52 = [closure_48, , , , ];
  const useDerivedValue = tmp5(1655).useDerivedValue;
  tmp5(1655);
  items52[1] = tmp5(17551).getRevealProgress;
  items52[2] = sharedValue3;
  items52[3] = result;
  items52[4] = height3;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp139, tmp140, tmp141, tmp142, tmp143] = items52;
  class BountiesModalContentScrollTsx18 {
    constructor() {
      return _undefined(_undefined2.get(), c2, c3);
    }
  }
  const items53 = [tmp140, tmp141, tmp142, tmp143];
  BountiesModalContentScrollTsx18.__closure = items53;
  BountiesModalContentScrollTsx18.__workletHash = 3609524767718;
  BountiesModalContentScrollTsx18.__initData = tmp139;
  const derivedValue = useDerivedValue(BountiesModalContentScrollTsx18);
  const items54 = [closure_49, , , ];
  const useAnimatedStyle = tmp5(1655).useAnimatedStyle;
  tmp5(1655);
  items54[1] = tmp5(1655).interpolate;
  items54[2] = derivedValue;
  items54[3] = tmp5(1655).Extrapolation;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp146, tmp147, tmp148, tmp149] = items54;
  class BountiesModalContentScrollTsx19 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0, 1], _undefined3.CLAMP) };
      return obj;
    }
  }
  const items55 = [tmp147, tmp148, tmp149];
  BountiesModalContentScrollTsx19.__closure = items55;
  BountiesModalContentScrollTsx19.__workletHash = 12052812104767;
  BountiesModalContentScrollTsx19.__initData = tmp146;
  const animatedStyle1 = useAnimatedStyle(BountiesModalContentScrollTsx19);
  const items56 = [closure_50, , , , , ];
  const useAnimatedStyle2 = tmp5(1655).useAnimatedStyle;
  tmp5(1655);
  items56[1] = tmp5(1655).interpolate;
  items56[2] = derivedValue;
  items56[3] = 0.05;
  items56[4] = 0.1;
  items56[5] = tmp5(1655).Extrapolation;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  [tmp152, tmp153, tmp154, tmp155, tmp156, tmp157] = items56;
  class BountiesModalContentScrollTsx20 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), items, [1, 0], _undefined3.CLAMP) };
      items = [c2, c3];
      return obj;
    }
  }
  const items57 = [tmp153, tmp154, tmp155, tmp156, tmp157];
  BountiesModalContentScrollTsx20.__closure = items57;
  BountiesModalContentScrollTsx20.__workletHash = 12251993225876;
  BountiesModalContentScrollTsx20.__initData = tmp152;
  const animatedStyle2 = useAnimatedStyle2(BountiesModalContentScrollTsx20);
  const items58 = [closure_51, sharedValue3, result, sum, derivedValue, , , , , , ];
  const useAnimatedStyle3 = tmp5(1655).useAnimatedStyle;
  tmp5(1655);
  items58[5] = tmp5(17551).getRevealProgress;
  items58[6] = height3;
  items58[7] = tmp5(1655).interpolate;
  items58[8] = 0.05;
  items58[9] = 0.1;
  items58[10] = tmp5(1655).Extrapolation;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  c5 = undefined;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170] = items58;
  class BountiesModalContentScrollTsx21 {
    constructor() {
      let items;
      let value;
      const obj = _undefined;
      if (_undefined.get() >= c1 - c2 / 2) {
        value = _undefined2.get();
      } else {
        value = _undefined3(obj.get(), 0, c5);
      }
      const obj2 = { opacity: _undefined4(value, items, [1, 0], _undefined5.CLAMP) };
      items = [c7, c8];
      return obj2;
    }
  }
  const items59 = [tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170];
  BountiesModalContentScrollTsx21.__closure = items59;
  BountiesModalContentScrollTsx21.__workletHash = 1048703085737;
  BountiesModalContentScrollTsx21.__initData = tmp160;
  const items60 = [tmp.peekGradient, , , , ];
  ({ left: arr62[1], width: arr62[2], top: arr62[3], height: arr62[4] } = memo);
  const animatedStyle3 = useAnimatedStyle3(BountiesModalContentScrollTsx21);
  let tmp173 = tmp24;
  const memo13 = obj.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: memo.left, width: memo.width, top: memo.top + memo.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items60);
  if (data.length > 1) {
    tmp173 = hasRecurringSwipeUpNux;
  }
  if (tmp173) {
    tmp173 = !tmp17;
  }
  isPeekEnabled = tmp173;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp24;
  }
  const items61 = [closure_52, , , , ];
  const useAnimatedStyle4 = tmp5(1655).useAnimatedStyle;
  tmp5(1655);
  items61[1] = tmp5(1655).interpolate;
  items61[2] = sharedValue3;
  items61[3] = sum;
  items61[4] = tmp5(1655).Extrapolation;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp175, tmp176, tmp177, tmp178, tmp179] = items61;
  class BountiesModalContentScrollTsx22 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), items, [1, 0], _undefined3.CLAMP) };
      items = [0, c2];
      return obj;
    }
  }
  const items62 = [tmp176, tmp177, tmp178, tmp179];
  BountiesModalContentScrollTsx22.__closure = items62;
  BountiesModalContentScrollTsx22.__workletHash = 7822704338666;
  BountiesModalContentScrollTsx22.__initData = tmp175;
  const animatedStyle4 = useAnimatedStyle4(BountiesModalContentScrollTsx22);
  const items63 = [closure_53, derivedValue, 0.1];
  c0 = undefined;
  c1 = undefined;
  [tmp182, tmp183, tmp184] = items63;
  const tmp5Result22 = tmp5(1655);
  class BountiesModalContentScrollTsx23 {
    constructor() {
      return _undefined.get() < c1;
    }
  }
  const items64 = [tmp183, tmp184];
  BountiesModalContentScrollTsx23.__closure = items64;
  BountiesModalContentScrollTsx23.__workletHash = 4049505759859;
  BountiesModalContentScrollTsx23.__initData = tmp182;
  const items65 = [closure_54, , ];
  const useAnimatedReaction6 = tmp5Result22.useAnimatedReaction;
  items65[1] = tmp5(1708).scheduleOnRN;
  items65[2] = tmp41;
  c0 = undefined;
  c1 = undefined;
  [tmp185, tmp186, tmp187] = items65;
  class BountiesModalContentScrollTsx24 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items66 = [tmp186, tmp187];
  BountiesModalContentScrollTsx24.__closure = items66;
  BountiesModalContentScrollTsx24.__workletHash = 16546668186590;
  BountiesModalContentScrollTsx24.__initData = tmp185;
  const animatedReaction6 = useAnimatedReaction6(BountiesModalContentScrollTsx23, BountiesModalContentScrollTsx24);
  const items67 = [sum, sharedValue3, memo10, tmp173, hasRecurringSwipeUpNux, sourceQuestContent, , , , , , ];
  ({ width: arr69[6], height: arr69[7] } = memo);
  items67[8] = first3;
  items67[9] = first1;
  items67[10] = first2;
  items67[11] = sharedValue1;
  const items68 = [first3, first1, first2, , , , ];
  ({ width: arr70[3], height: arr70[4] } = memo);
  items68[5] = tmp173;
  items68[6] = null != tmp16;
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
  }, items67);
  [][0] = height3;
  const memo14 = obj.useMemo(() => {
    size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: memo.width, height: memo.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible };
    return size;
  }, items68);
  if (0 === data.length) {
    return null;
  } else {
    let tmp193 = null;
    if (tmp43) {
      const obj12 = { orbAmount: stateFromStores };
      tmp193 = callback2(tmp5(17591).BountiesScrollRecapFooter, obj12);
    }
    const obj13 = { value: memo3, children: tmp195(tmp196, obj14) };
    let tmp194Result = null;
    obj14 = { style: tmp.root, children: items70 };
    const BountyVideoEndAppStoreProvider = tmp5(17556).BountyVideoEndAppStoreProvider;
    tmp195 = hasRecurringSwipeUpNux;
    tmp196 = questHomeBounties;
    if (stateFromStores > 0) {
      const obj15 = { style: items69, pointerEvents: str, children: callback2(QuestContentImpressionTrackerNative, obj16) };
      items69 = [memo12, animatedStyle1];
      str = "none";
      const View = tmp2(1655).View;
      if (first2) {
        str = "box-none";
      }
      obj16 = {
        adContentId,
        adCreativeType: tmp5(5345).AdCreativeType.BOUNTY,
        questContent: tmp5(5343).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              const obj = { orbAmount, onClose, style: { flex: 1 } };
              return callback2(BountiesScrollRecapPage.BountiesScrollRecapPage, obj);
            }
      };
      QuestContentImpressionTrackerNative = tmp5(15264).QuestContentImpressionTrackerNative;
      tmp194Result = tmp194(View, obj15);
    }
    items70 = [tmp194Result, , , , , ];
    const obj17 = { style: memo8, children: callback2(tmp5(7888).AnimatedFlashList, obj18) };
    const View2 = tmp2(1655).View;
    obj18 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo14,
      overrideItemLayout: tmp191,
      ItemSeparatorComponent: first2,
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
    items70[1] = callback2(View2, obj17);
    let tmp194Result4 = null;
    if (null != tmp16) {
      const obj19 = { metadata: tmp16.metadata, sheetHeight: memo2, revealProgress: sharedValue, onDismiss: callback2, onInstallPress: null, onOverlaySurfaceClick: null, onCarouselScroll: null };
      ({ onInstallPress: obj20.onInstallPress, onOverlaySurfaceClick: obj20.onOverlaySurfaceClick, onCarouselScroll: obj20.onCarouselScroll } = tmp16);
      tmp194Result4 = tmp194(tmp2(17596), obj19);
    }
    items70[2] = tmp194Result4;
    let tmp194Result5 = null;
    if (tmp173) {
      tmp194Result5 = null;
      if (data.length > 1) {
        const obj21 = { pointerEvents: "none", style: items71, children: callback2(tmp2(5893), obj22) };
        items71 = [memo13, animatedStyle4];
        const View3 = tmp2(1655).View;
        obj22 = { colors: first1, style: memo.absoluteFill };
        tmp194Result5 = tmp194(View3, obj21);
      }
    }
    items70[3] = tmp194Result5;
    const obj23 = { style: items72, pointerEvents: str2, children: tmp194Result6 };
    items72 = [memo11, animatedStyle2];
    str2 = "none";
    const View4 = tmp2(1655).View;
    if (tmp40) {
      str2 = "box-none";
    }
    tmp194Result6 = null;
    if (tmp40) {
      const obj24 = { onPress: callback5 };
      tmp194Result6 = tmp194(tmp2(17597), obj24);
    }
    items70[4] = callback2(View4, obj23);
    const obj25 = { visible: tmp43, onContentLayout: callback, zIndex: height3, opacityStyle: animatedStyle3, children: tmp193 };
    const tmp2Result = tmp2(17547);
    items70[5] = callback2(tmp2Result, obj25);
    return callback2(BountyVideoEndAppStoreProvider, obj13);
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
let items = [{ code: "(function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;})" }];
[tmp7] = items;
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__workletHash = 3579964422615;
isScrollEventInBounds.__initData = tmp7;
let closure_30 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: obj2, listWrapper: obj3, closeButton: obj4, peekGradient: obj5 };
  return obj;
});
let closure_31 = { code: "(function BountiesModalContentScrollTsx2(){let[scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation]=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};})" };
let closure_33 = { code: "(function BountiesModalContentScrollTsx3(event){let[scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds]=this.__closure;scrollY.set(event.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));}})" };
let closure_34 = { code: "(function BountiesModalContentScrollTsx4(event){let[isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds]=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event));})" };
let closure_35 = { code: "(function BountiesModalContentScrollTsx5(){let[isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue]=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}})" };
let closure_36 = { code: "(function BountiesModalContentScrollTsx6(event){let[showRecapPullZone,scheduleOnRN,handleRecapMomentumEnd,isScrollingInBoundsSharedValue]=this.__closure;if(showRecapPullZone){scheduleOnRN(handleRecapMomentumEnd,event);}isScrollingInBoundsSharedValue.set(false);})" };
let closure_37 = { code: "(function BountiesModalContentScrollTsx7(){let[scrollY,slotHeight,lastBountyIndex]=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);})" };
let closure_38 = { code: "(function BountiesModalContentScrollTsx8(next,prev){let[scheduleOnRN,commitSwipe]=this.__closure;if(next!==prev){scheduleOnRN(commitSwipe,next);}})" };
let closure_39 = { code: "(function BountiesModalContentScrollTsx9(){let[showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON]=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;})" };
let closure_40 = { code: "(function BountiesModalContentScrollTsx10(show,previousShow){let[scheduleOnRN,setShowRecapFooter]=this.__closure;if(show!==previousShow){scheduleOnRN(setShowRecapFooter,show);}})" };
let closure_41 = { code: "(function BountiesModalContentScrollTsx11(){let[showRecapPullZone,scrollY,lastBountyScrollOffset]=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;})" };
let closure_42 = { code: "(function BountiesModalContentScrollTsx12(revealed,previousRevealed){let[scheduleOnRN,setIsRecapPageRevealed]=this.__closure;if(revealed!==previousRevealed){scheduleOnRN(setIsRecapPageRevealed,revealed);}})" };
let closure_43 = { code: "(function BountiesModalContentScrollTsx13(){let[showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON]=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;})" };
let closure_44 = { code: "(function BountiesModalContentScrollTsx14(onTop,previousOnTop){let[scheduleOnRN,setIsRecapPageOnTop]=this.__closure;if(onTop!==previousOnTop){scheduleOnRN(setIsRecapPageOnTop,onTop);}})" };
let closure_45 = { code: "(function BountiesModalContentScrollTsx15(){let[videoEndPeekProgress,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,videoLayout,BOUNTIES_MODAL_FOOTER_HEIGHT]=this.__closure;const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,videoLayout.width,videoLayout.height);const footerHeight=progress>0?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+clipHeight*scale+footerHeight};})" };
let closure_46 = { code: "(function BountiesModalContentScrollTsx16(){let[videoEndPeekProgress]=this.__closure;return videoEndPeekProgress.get()>0;})" };
let closure_47 = { code: "(function BountiesModalContentScrollTsx17(hide,previousHide){let[scheduleOnRN,setHideListFooterPadding]=this.__closure;if(hide!==previousHide){scheduleOnRN(setHideListFooterPadding,hide);}})" };
let closure_48 = { code: "(function BountiesModalContentScrollTsx18(){let[getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight]=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);})" };
let closure_49 = { code: "(function BountiesModalContentScrollTsx19(){let[interpolate,recapPullProgress,Extrapolation]=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};})" };
let closure_50 = { code: "(function BountiesModalContentScrollTsx20(){let[interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation]=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};})" };
let closure_51 = { code: "(function BountiesModalContentScrollTsx21(){let[scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation]=this.__closure;const progress=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};})" };
let closure_52 = { code: "(function BountiesModalContentScrollTsx22(){let[interpolate,scrollY,slotHeight,Extrapolation]=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};})" };
let closure_53 = { code: "(function BountiesModalContentScrollTsx23(){let[recapPullProgress,FOOTER_FADE_END_PROGRESS]=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;})" };
let closure_54 = { code: "(function BountiesModalContentScrollTsx24(pressable,previousPressable){let[scheduleOnRN,setIsCloseButtonPressable]=this.__closure;if(pressable!==previousPressable){scheduleOnRN(setIsCloseButtonPressable,pressable);}})" };
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
