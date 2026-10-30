// Module ID: 16908
// Function ID: 16909
// Name: BountiesModalContent
// Dependencies: [5, 32, 19, 17, 7838, 6775, 16856, 1072, 1083, 21, 1492, 1626, 5009, 575, 1376, 14458, 5257, 504, 9531, 16865, 14639, 16870, 9671, 16873, 16868, 7855, 6782, 7864, 6780, 14632, 16852, 16876, 14647, 16909, 16907, 7286, 16900, 5090, 5249, 5252, 14610, 1109, 16866, 16906, 7835, 5075, 2]
// Exports: default

// Module 16908 (BountiesModalContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1083 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import timing from "timing" /* 5249 */;
import timingPresets from "timingPresets" /* 5252 */;
import QuestContent from "QuestContent" /* 6780 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import QuestDataUtils from "QuestDataUtils" /* 7835 */;
import AnalyticsActions from "AnalyticsActions" /* 7855 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 14610 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14632 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14647 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 16852 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BountyStore from "BountyStore" /* 7838 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16856 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c4, c5, set;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportAll;
let unpackModuleId;
function BountiesModalContentInner(bounty) {
  let BountyVideo;
  let _undefined;
  let c6;
  let closure_3;
  let handleBufferAnalytics;
  let handleLoadStartAnalytics;
  let handlePaused;
  let handleReadyForDisplayAnalytics;
  let handleResumed;
  let handleVideoEnd;
  let handleVideoEndAnalytics;
  let handleVideoEndWithAppStore;
  let handleVideoErrorAnalytics;
  let handleVideoLoopedAnalytics;
  let handleVideoPaused;
  let handleVideoPausedAnalytics;
  let handleVideoProgress;
  let handleVideoProgressAnalytics;
  let handleVideoResumed;
  let handleVideoResumedAnalytics;
  let handleVideoTracksAnalytics;
  let isCtaVisible;
  let isEndCardVisible;
  let normalizedProgress;
  let obj11;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldRepeatVideo;
  let showEndCard;
  let size1;
  let tmp12;
  let tmp2Result;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let balance;
  c6 = undefined;
  let closure_7;
  isEndCardVisible = undefined;
  let tmp = closure_20();
  _asyncToGenerator = tmp;
  let dismissVideoEndAppStoreOverlay;
  let tmp2 = sourceQuestContent;
  let tmp3 = dismissVideoEndAppStoreOverlay;
  size = sourceQuestContent(dismissVideoEndAppStoreOverlay[10])();
  const width = size.width;
  const height = size.height;
  let tmp4 = sourceQuestContent(dismissVideoEndAppStoreOverlay[11])();
  dismissVideoEndAppStoreOverlay = tmp4;
  let items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const memo = balance.useMemo(() => {
    const rect = closure_2;
    const diff = width - closure_2.left - closure_2.right;
    const diff1 = height2 - closure_2.top - closure_2.bottom;
    let result = diff / closure_2_18;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * closure_2_18;
      flag = false;
      result = diff1;
    }
    size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let items1 = [tmp.videoWrapper, memo];
  const items2 = [tmp.closeButton, , , ];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = memo);
  const memo1 = balance.useMemo(() => {
    const items = [closure_3.videoWrapper, ];
    size = { top: memo.top, left: memo.left, width: memo.width, height: memo.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , , ];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = balance.useMemo(() => {
    let diff;
    const items = [closure_3.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
    const sum = memo.left + memo.width;
    diff = sum - nativeDefault.space.PX_32;
    items[1] = rect;
    return items;
  }, items2);
  const memo3 = balance.useMemo(() => {
    let items1;
    const bottomContainer = closure_3.bottomContainer;
    const tmp = memo;
    if (memo.isFullWidth) {
      const items = [bottomContainer, closure_3.bottomContainerFullWidth];
      items1 = items;
    } else {
      items1 = [bottomContainer, closure_3.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = tmp);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  let obj = bounty(dismissVideoEndAppStoreOverlay[17]);
  const items4 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(dismissVideoEndAppStoreOverlay[18]);
  balance = obj2.useFetchVirtualCurrencyBalance().balance;
  [tmp12, c6] = memo(balance.useState(null), 2);
  const tmp11 = memo(balance.useState(null), 2);
  closure_7 = balance.useRef(balance);
  const items5 = [balance];
  const effect = balance.useEffect(() => {
    closure_7.current = balance;
  }, items5);
  let obj3 = bounty(dismissVideoEndAppStoreOverlay[19]);
  const bountyVideoEndMode = obj3.getBountyVideoEndMode(bounty);
  let result = 1000 * bounty.rewardTimerSeconds;
  let c8 = result;
  const ref = balance.useRef(null);
  const items6 = [bounty.id, sourceQuestContent];
  const callback = balance.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let obj4;
    let tmp;
    function doRewardEarnedHapticFeedback() {
      let sum;
      let tmp7;
      let tmp8;
      let num = 0.25;
      const obj = closure_1_0(closure_1_2[14]);
      const tmp = closure_1_0;
      const tmp2 = closure_1_2;
      if (obj.isAndroid()) {
        num = 0.15;
      }
      tmp(tmp2[14]);
      const items = [];
      let num3 = 0;
      let num4 = 0;
      const arr = Array.from({ length: 6 }, (arg0, arg1) => 6 - arg1);
      do {
        let _Math = Math;
        let result = arr[num3] / tmp4;
        tmp7 = closure_1_0;
        tmp8 = closure_1_2;
        let rounded = Math.round(result * (closure_1_0(closure_1_2[15]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS - 100));
        let obj2 = { time: num4, type: "continuous", duration: rounded, intensity: num + tmp5 * (num3 / 5), sharpness: 0.5 };
        let arr4 = items.push(obj2);
        sum = num4 + rounded;
        num3 = num3 + 1;
        num4 = sum;
      } while (num3 < 6);
      const obj3 = { time: sum + 100, type: "transient", intensity: 1, sharpness: 0.95 };
      items.push(obj3);
      const tmp7Result = tmp7(tmp8[16]);
      tmp7Result.triggerPattern(items);
    }
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let c0;
        let current;
        let num = 2;
        c5 = 2;
        const tmp4 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp;
            bounty = tmp4;
            c0 = false;
            current = ref.current;
            if (null != current) {
              _undefined(current);
            }
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj4.claimBountyReward(bounty.id, sourceQuestContent), done: false };
            obj4 = bounty(dismissVideoEndAppStoreOverlay[20]);
            return obj6;
          }
        } else {
          if (1 === tmp4) {
            let tmp7 = closure_1;
            let tmp8 = dismissVideoEndAppStoreOverlay;
            c3 = 0;
            let obj2 = bounty(dismissVideoEndAppStoreOverlay[21]);
            let result = obj2.openBountyRewardClaimErrorToast(dismissVideoEndAppStoreOverlay);
            closure_129_6(null);
          } else if (arg0 === 1) {
            let num3 = 3;
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const tmp5 = bounty;
            c0 = true;
            c3 = 0;
          }
          const tmp17 = c0 && null != current;
          if (tmp17) {
            closure_129_6(current + closure_1_8);
            const BountiesMobileQuestBarExperiment = bounty(dismissVideoEndAppStoreOverlay[22]).BountiesMobileQuestBarExperiment;
            const obj7 = { location: constants.VIDEO_MODAL_MOBILE };
            if (BountiesMobileQuestBarExperiment.getConfig(obj7).hapticFeedbackOnRewardEarnedEnabled) {
              doRewardEarnedHapticFeedback();
            }
          }
          let num4 = 3;
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp36) {
        dismissVideoEndAppStoreOverlay = tmp36;
        if (0 === c3) {
          c5 = 3;
          throw tmp36;
        } else {
          c4 = 1;
        }
      }
    }
  }), items6);
  let obj4 = bounty(dismissVideoEndAppStoreOverlay[23]);
  let obj5 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
  const bountiesModalVideoAnalytics = obj4.useBountiesModalVideoAnalytics(obj5);
  ({ handleVideoProgressAnalytics, handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  let obj6 = bounty(dismissVideoEndAppStoreOverlay[24]);
  const bountiesModalTiming = obj6.useBountiesModalTiming({ endMode: bountyVideoEndMode, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: handleVideoProgressAnalytics, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref });
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  const maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  const videoDuration = bountiesModalTiming.videoDuration;
  ({ handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  let obj7 = bounty(dismissVideoEndAppStoreOverlay[19]);
  const bountyAppStoreOverlayPlayback = obj7.useBountyAppStoreOverlayPlayback({ bounty, sourceQuestContent, isActive: true, endMode: bountyVideoEndMode, playerRef: ref, handleVideoEnd, handleVideoPaused, handleVideoResumed, showEndCard });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  const items7 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  const items8 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  const callback1 = balance.useCallback(() => {
    let formatVideoProgressRatio;
    let num;
    let obj2;
    let obj3;
    dismissVideoEndAppStoreOverlay();
    const tmp3 = AnalyticsActions;
    const trackAdContentEvent = tmp3.trackAdContentEvent;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: formatVideoProgressRatio(maxVideoProgressSeconds, num), threshold_met: 1000 * maxVideoProgressSeconds >= c8, reward_timer_seconds: c8 / 1000 };
    num = videoDuration;
    obj3 = AnalyticsTypes;
    formatVideoProgressRatio = VideoQuestUtils.formatVideoProgressRatio;
    VideoQuestUtils;
    if (videoDuration == null) {
      num = 0;
    }
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items7);
  const obj8 = { style: memo1, children: closure_15(BountyVideo, size1) };
  const callback2 = balance.useCallback(() => {
    let formatVideoProgressRatio;
    let num;
    let obj2;
    let obj3;
    let tmp5;
    dismissVideoEndAppStoreOverlay();
    const tmp3 = AnalyticsActions;
    const trackAdContentEvent = tmp3.trackAdContentEvent;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD), content_id: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, video_progress: formatVideoProgressRatio(tmp5, num), threshold_met: true, reward_timer_seconds: c8 / 1000 };
    num = videoDuration;
    obj3 = AnalyticsTypes;
    formatVideoProgressRatio = VideoQuestUtils.formatVideoProgressRatio;
    VideoQuestUtils;
    tmp5 = maxVideoProgressSeconds;
    if (videoDuration == null) {
      num = 0;
    }
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items8);
  size1 = {
    bounty,
    sourceQuestContent,
    isCompleted: stateFromStores,
    isCtaVisible,
    isEndCardVisible,
    isProgressBarVisible: !isEndCardVisible && !isVideoEndAppStoreOverlayVisible,
    orbsBalance: tmp12,
    handleVideoEnd: handleVideoEndWithAppStore,
    handleVideoProgress,
    handleVideoPaused: handlePaused,
    handleVideoResumed: handleResumed,
    handleVideoError: handleVideoErrorAnalytics,
    onLoadStart: handleLoadStartAnalytics,
    onBuffer: handleBufferAnalytics,
    onFirstFrame: handleReadyForDisplayAnalytics,
    onVideoTracks: handleVideoTracksAnalytics,
    rewardRemainingSeconds,
    rewardTotalSeconds,
    normalizedProgress,
    repeat: shouldRepeatVideo,
    initialProgress,
    isActive: true,
    playerRef: ref,
    width: null,
    height: null,
    renderEndCard() {
      let visible;
      let obj = {
        adContentId: bounty.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
        sourceQuestContent,
        overrideVisibility: isEndCardVisible,
        children() {
          const obj = { bounty, visible, sourceQuestContent };
          return closure_2_15(sourceQuestContent(dismissVideoEndAppStoreOverlay[33]), obj);
        }
      };
      const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
      return closure_15(QuestContentImpressionTrackerNative, obj);
    }
  };
  BountyVideo = bounty(dismissVideoEndAppStoreOverlay[31]).BountyVideo;
  const tmp23 = closure_17;
  const tmp24 = closure_16;
  const tmp9 = bounty;
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  ({ width: obj9.width, height: obj9.height } = memo);
  const items9 = [tmp25(tmp26, obj8), , ];
  const obj10 = { style: memo2, children: closure_15(tmp2(tmp3[34]), { onPress: callback1 }) };
  items9[1] = closure_15(c6, obj10);
  let rect = { left: memo.isFullWidth, right: memo.isFullWidth, bottom: true, style: memo3, pointerEvents: "box-none", children: tmp25(tmp2Result, obj11) };
  const SafeAreaPaddingView = tmp9(tmp3[35]).SafeAreaPaddingView;
  obj11 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback2 };
  tmp2Result = tmp2(tmp3[36]);
  if (isEndCardVisible) {
    isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
  }
  const obj12 = { children: items9 };
  items9[2] = closure_15(SafeAreaPaddingView, rect);
  return tmp23(tmp24, obj12);
}
function BountiesModalContentWithAppStore(arg0) {
  let _undefined;
  let bounty;
  let c3;
  let items6;
  let ref;
  let ref2;
  let sourceQuestContent;
  let tmp7;
  let memo;
  let sharedValue;
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  ({ bounty, sourceQuestContent } = arg0);
  let tmp2 = sharedValue;
  const height = memo(sharedValue[10])().height;
  size = memo(sharedValue[10])();
  const width = size.width;
  const height2 = size.height;
  const tmp3 = memo(sharedValue[11])();
  let closure_2 = tmp3;
  const items = [width, height2, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp3);
  const tmp = memo;
  memo = react.useMemo(() => {
    const rect = closure_2;
    const diff = width - closure_2.left - closure_2.right;
    const diff1 = height2 - closure_2.top - closure_2.bottom;
    let result = diff / closure_2_18;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * closure_2_18;
      flag = false;
      result = diff1;
    }
    size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let obj = height(sharedValue[37]);
  sharedValue = obj.useSharedValue(0);
  [tmp7, c3] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  _slicedToArray = react.useRef(null);
  react = react.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp8;
  const items1 = [height, , , ];
  ({ top: arr2[1], width: arr2[2], height: arr2[3] } = memo);
  const memo1 = react.useMemo(() => {
    const obj = { windowHeight: height, videoTop: memo.top, videoWidth: memo.width, videoHeight: memo.height };
    return unpackModuleId(obj);
  }, items1);
  const items2 = [height];
  const items3 = [sharedValue];
  const memo2 = react.useMemo(() => authStore(height), items2);
  const showVideoEndAppStoreOverlay = react.useCallback((current) => {
    ref2.current = Date.now();
    ref.current = current;
    _undefined(current);
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    const trackOverlayEvent = current.trackOverlayEvent;
    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue];
  const callback1 = react.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const trackOverlayEvent = current.trackOverlayEvent;
      const _Date = Date;
      trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const obj = AppStoreOverlayTelemetryManager;
      const result = obj.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined(null);
      set = sharedValue.set;
      const obj2 = timing;
      const result1 = set(obj2.withTiming(0, timingPresets.timingStandard));
    }
  }, items4);
  const items5 = [callback1, null != tmp7, showVideoEndAppStoreOverlay, sharedValue, memo1];
  const memo3 = react.useMemo(() => ({ videoEndPeekProgress: sharedValue, videoEndPeekTargetScale: memo1, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay, dismissVideoEndAppStoreOverlay: callback1 }), items5);
  let obj2 = { value: memo3, children: items6 };
  const BountyVideoEndAppStoreProvider = height(sharedValue[42]).BountyVideoEndAppStoreProvider;
  items6 = [closure_15(BountiesModalContentInner, { bounty, sourceQuestContent, dismissVideoEndAppStoreOverlay: callback1 }), ];
  let tmp15Result = null;
  const tmp14 = closure_17;
  const tmp15 = closure_15;
  if (null != tmp7) {
    const obj3 = { metadata: tmp7.metadata, sheetHeight: memo2, revealProgress: sharedValue, onDismiss: callback1, onInstallPress: tmp7.onInstallPress };
    tmp15Result = tmp15(tmp(tmp2[43]), obj3);
  }
  items6[1] = tmp15Result;
  return tmp14(BountyVideoEndAppStoreProvider, obj2);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ BOUNTY_ORB_AMOUNT: metroImportAll, QuestsExperimentLocations: c9 } = QuestConstants);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: unpackModuleId } = BountiesModalConstants);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let c18 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let closure_20 = createStyles.createStyles(() => {
  let rect;
  const obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" }, bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" }, bottomContainerFullWidth: rect, bottomContainerNotFullWidth: { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 } };
  ({ position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" });
  rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  ({ paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default function BountiesModalContent(bountyId) {
  let BillableAdPlacementImpressionTrackerNative;
  let closure_4;
  let obj2;
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  _slicedToArray = undefined;
  const bounty = _slicedToArray(react.useState(() => {
    if (null != bounty) {
      if (bounty.id === bountyId) {
        return bounty;
      }
    }
    const obj = QuestDataUtils;
    const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(sourceQuestContent);
    let bountyByPlacementAndId = null;
    if (null != questPlacementFromQuestContent) {
      const tmp3Result = QuestDataUtils;
      bountyByPlacementAndId = tmp3Result.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
    }
    return bountyByPlacementAndId;
  }), 1)[0];
  let tmp2 = null;
  let tmp3 = null == bounty;
  _slicedToArray = tmp3;
  const items = [tmp3, bountyId, sourceQuestContent];
  const effect = react.useEffect(function() {
    let obj2;
    const tmp = closure_4;
    if (tmp) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const captureQuestsException = QuestDataUtils.captureQuestsException;
      QuestDataUtils;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj = { tags: { source: "BountiesModalContent" }, extra: obj2 };
      obj2 = { bountyId, sourceQuestContent };
      const result = captureQuestsException(error, obj);
      const obj3 = BountiesModalActionCreatorsDefault;
      obj3.hideModal();
    }
  }, items);
  if (null != bounty) {
    let obj = { theme: ThemeTypes.DARK, children: closure_15(BillableAdPlacementImpressionTrackerNative, obj2) };
    const ThemeContextProvider = bountyId(bounty[45]).ThemeContextProvider;
    obj2 = {
      adContentId: bounty.id,
      adCreativeType: bountyId(bounty[26]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[28]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          const obj = { bounty, sourceQuestContent };
          return closure_15(BountiesModalContentWithAppStore, obj);
        }
    };
    BillableAdPlacementImpressionTrackerNative = bountyId(bounty[32]).BillableAdPlacementImpressionTrackerNative;
    tmp2 = closure_15(ThemeContextProvider, obj);
  }
  return tmp2;
};
