// Module ID: 14592
// Function ID: 14593
// Name: BountiesModalContent
// Dependencies: [32, 5, 19, 17, 7115, 5756, 14543, 1074, 1085, 21, 1479, 1613, 4836, 576, 504, 8315, 14552, 10744, 14557, 10687, 4801, 14559, 14555, 7131, 5763, 7141, 5761, 10735, 14539, 14562, 10753, 14593, 14590, 6544, 14583, 4566, 4837, 4840, 10720, 1110, 14553, 14589, 7112, 4540, 2]
// Exports: default

// Module 14592 (BountiesModalContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestContent from "QuestContent" /* 5761 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import QuestDataUtils from "QuestDataUtils" /* 7112 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10720 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10735 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10753 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14539 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import BountyStore from "BountyStore" /* 7115 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14543 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c5, set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let unpackModuleId;
function BountiesModalContentInner(bounty) {
  let BountyVideo;
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
  let tmp2Result;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  react = undefined;
  isEndCardVisible = undefined;
  let maxVideoProgressSeconds;
  const videoEndPeekScale = bounty.videoEndPeekScale;
  let tmp = closure_19();
  let closure_3 = tmp;
  let dismissVideoEndAppStoreOverlay;
  let tmp3 = dismissVideoEndAppStoreOverlay;
  size = sourceQuestContent(dismissVideoEndAppStoreOverlay[10])();
  const width = size.width;
  const height = size.height;
  const tmp4 = sourceQuestContent(dismissVideoEndAppStoreOverlay[11])();
  dismissVideoEndAppStoreOverlay = tmp4;
  let items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const memo = react.useMemo(() => {
    const rect = closure_2;
    const diff = width - closure_2.left - closure_2.right;
    const diff1 = height2 - closure_2.top - closure_2.bottom;
    let result = diff / closure_2_17;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * closure_2_17;
      flag = false;
      result = diff1;
    }
    size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let items1 = [tmp.videoWrapper, memo];
  const items2 = [tmp.closeButton, , , ];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = memo);
  const memo1 = react.useMemo(() => {
    const items = [closure_3.videoWrapper, ];
    size = { top: memo.top, left: memo.left, width: memo.width, height: memo.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , , ];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = react.useMemo(() => {
    let diff;
    const items = [closure_3.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
    const sum = memo.left + memo.width;
    diff = sum - nativeDefault.space.PX_32;
    items[1] = rect;
    return items;
  }, items2);
  const memo3 = react.useMemo(() => {
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
  let obj = bounty(dismissVideoEndAppStoreOverlay[14]);
  const items4 = [maxVideoProgressSeconds];
  const stateFromStores = obj.useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(dismissVideoEndAppStoreOverlay[15]);
  const balance = obj2.useFetchVirtualCurrencyBalance().balance;
  let obj3 = bounty(dismissVideoEndAppStoreOverlay[16]);
  const bountyVideoEndMode = obj3.getBountyVideoEndMode(bounty);
  let result = 1000 * bounty.rewardTimerSeconds;
  react = result;
  const ref = react.useRef(null);
  const items5 = [bounty.id, sourceQuestContent];
  const callback = react.useCallback(memo(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let obj5;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let c0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = tmp;
            bounty = tmp4;
            c0 = false;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj7 = { value: obj5.claimBountyReward(bounty.id, sourceQuestContent), done: false };
            obj5 = bounty(dismissVideoEndAppStoreOverlay[17]);
            return obj7;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_1 = dismissVideoEndAppStoreOverlay;
            const obj2 = bounty(dismissVideoEndAppStoreOverlay[18]);
            const result = obj2.openBountyRewardClaimErrorToast(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = true;
            c3 = 0;
          }
          let hapticFeedbackOnRewardEarnedEnabled = c0;
          if (hapticFeedbackOnRewardEarnedEnabled) {
            const BountiesMobileQuestBarExperiment = bounty(dismissVideoEndAppStoreOverlay[19]).BountiesMobileQuestBarExperiment;
            const obj8 = { location: constants.VIDEO_MODAL_MOBILE };
            hapticFeedbackOnRewardEarnedEnabled = BountiesMobileQuestBarExperiment.getConfig(obj8).hapticFeedbackOnRewardEarnedEnabled;
          }
          if (hapticFeedbackOnRewardEarnedEnabled) {
            const obj4 = bounty(dismissVideoEndAppStoreOverlay[20]);
            const result1 = obj4.triggerHapticFeedback(bounty(dismissVideoEndAppStoreOverlay[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp29) {
        dismissVideoEndAppStoreOverlay = tmp29;
        if (0 === c3) {
          c5 = 3;
          throw tmp29;
        } else {
          c4 = 1;
        }
      }
    }
  }), items5);
  let obj4 = bounty(dismissVideoEndAppStoreOverlay[21]);
  let obj5 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
  const bountiesModalVideoAnalytics = obj4.useBountiesModalVideoAnalytics(obj5);
  ({ handleVideoProgressAnalytics, handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  let obj6 = bounty(dismissVideoEndAppStoreOverlay[22]);
  const bountiesModalTiming = obj6.useBountiesModalTiming({ endMode: bountyVideoEndMode, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: handleVideoProgressAnalytics, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref });
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  const videoDuration = bountiesModalTiming.videoDuration;
  ({ handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  let obj7 = bounty(dismissVideoEndAppStoreOverlay[16]);
  const bountyAppStoreOverlayPlayback = obj7.useBountyAppStoreOverlayPlayback({ bounty, sourceQuestContent, isActive: true, endMode: bountyVideoEndMode, playerRef: ref, handleVideoEnd, handleVideoPaused, handleVideoResumed, showEndCard });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  const items6 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  const items7 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  const callback1 = react.useCallback(() => {
    let formatVideoProgressRatio;
    let num;
    let obj2;
    let obj3;
    dismissVideoEndAppStoreOverlay();
    const tmp3 = AnalyticsActions;
    const trackAdContentEvent = tmp3.trackAdContentEvent;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: unpackModuleId.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: formatVideoProgressRatio(maxVideoProgressSeconds, num), threshold_met: 1000 * maxVideoProgressSeconds >= c5, reward_timer_seconds: c5 / 1000 };
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
  }, items6);
  let obj8 = { style: memo1, children: tmp22(BountyVideo, size1) };
  const callback2 = react.useCallback(() => {
    let formatVideoProgressRatio;
    let num;
    let obj2;
    let obj3;
    let tmp5;
    dismissVideoEndAppStoreOverlay();
    const tmp3 = AnalyticsActions;
    const trackAdContentEvent = tmp3.trackAdContentEvent;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: unpackModuleId.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD), content_id: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, video_progress: formatVideoProgressRatio(tmp5, num), threshold_met: true, reward_timer_seconds: c5 / 1000 };
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
  }, items7);
  size1 = {
    bounty,
    sourceQuestContent,
    isCompleted: stateFromStores,
    isCtaVisible,
    isEndCardVisible,
    isProgressBarVisible: !isEndCardVisible && !isVideoEndAppStoreOverlayVisible,
    orbsBalance: balance,
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
    videoEndPeekScale,
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
          return closure_2_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[31]), obj);
        }
      };
      const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
      return authStore2(QuestContentImpressionTrackerNative, obj);
    }
  };
  BountyVideo = bounty(dismissVideoEndAppStoreOverlay[29]).BountyVideo;
  const tmp20 = closure_16;
  const tmp21 = closure_15;
  const tmp9 = bounty;
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  ({ width: obj9.width, height: obj9.height } = memo);
  const items8 = [tmp22(tmp23, obj8), , ];
  const obj10 = { style: memo2, children: closure_14(sourceQuestContent(tmp3[32]), { onPress: callback1 }) };
  items8[1] = closure_14(isEndCardVisible, obj10);
  let rect = { left: memo.isFullWidth, right: memo.isFullWidth, bottom: true, style: memo3, pointerEvents: "box-none", children: tmp22(tmp2Result, obj11) };
  const SafeAreaPaddingView = tmp9(tmp3[33]).SafeAreaPaddingView;
  obj11 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback2 };
  tmp2Result = sourceQuestContent(tmp3[34]);
  if (isEndCardVisible) {
    isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
  }
  const obj12 = { children: items8 };
  items8[2] = closure_14(SafeAreaPaddingView, rect);
  return tmp20(tmp21, obj12);
}
function BountiesModalContentWithAppStore(arg0) {
  let _undefined;
  let bounty;
  let c4;
  let items6;
  let ref;
  let sourceQuestContent;
  let tmp8;
  let memo;
  let sharedValue;
  c4 = undefined;
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
    let result = diff / closure_2_17;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * closure_2_17;
      flag = false;
      result = diff1;
    }
    size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let obj = height(sharedValue[35]);
  sharedValue = obj.useSharedValue(1);
  let obj2 = height(sharedValue[35]);
  const sharedValue1 = obj2.useSharedValue(0);
  [tmp8, c4] = sharedValue1(react.useState(null), 2);
  const tmp7 = sharedValue1(react.useState(null), 2);
  react = react.useRef(null);
  const ref2 = react.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp9;
  const items1 = [height, , ];
  ({ top: arr2[1], height: arr2[2] } = memo);
  const memo1 = react.useMemo(() => {
    const obj = { windowHeight: height, videoTop: memo.top, videoHeight: memo.height };
    return authStore(obj);
  }, items1);
  const items2 = [height];
  const items3 = [sharedValue1];
  const memo2 = react.useMemo(() => React4(height), items2);
  const showVideoEndAppStoreOverlay = react.useCallback((current) => {
    ref2.current = Date.now();
    ref.current = current;
    _undefined(current);
    set = sharedValue1.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    const trackOverlayEvent = current.trackOverlayEvent;
    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = unpackModuleId.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue1, sharedValue];
  const callback1 = react.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = unpackModuleId.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const trackOverlayEvent = current.trackOverlayEvent;
      const _Date = Date;
      trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const obj = AppStoreOverlayTelemetryManager;
      const result = obj.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined(null);
      set = sharedValue.set;
      const obj2 = timing;
      const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items4);
  const items5 = [callback1, null != tmp8, showVideoEndAppStoreOverlay, sharedValue, memo1];
  const memo3 = react.useMemo(() => ({ videoEndPeekTargetScale: memo1, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay, dismissVideoEndAppStoreOverlay: callback1 }), items5);
  const obj3 = { value: memo3, children: items6 };
  const BountyVideoEndAppStoreProvider = height(sharedValue[40]).BountyVideoEndAppStoreProvider;
  items6 = [closure_14(BountiesModalContentInner, { bounty, sourceQuestContent, videoEndPeekScale: sharedValue, dismissVideoEndAppStoreOverlay: callback1 }), ];
  let tmp16Result = null;
  const tmp15 = closure_16;
  const tmp16 = closure_14;
  if (null != tmp8) {
    const obj4 = { metadata: tmp8.metadata, sheetHeight: memo2, revealProgress: sharedValue1, onDismiss: callback1, onInstallPress: tmp8.onInstallPress };
    tmp16Result = tmp16(tmp(tmp2[41]), obj4);
  }
  items6[1] = tmp16Result;
  return tmp15(BountyVideoEndAppStoreProvider, obj3);
}
let react = react_mod;
const View = react_native.View;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ getBountyVideoEndAppStoreSheetHeight: c9, getBountyVideoEndPeekTargetScale: c10 } = BountiesModalConstants);
({ AnalyticEvents: unpackModuleId, ComponentActions: closure_12 } = Constants);
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let c17 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let closure_19 = createStyles.createStyles(() => {
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
  let obj2;
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  let bounty;
  bounty = bounty(react.useState(() => {
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
  let closure_4 = tmp3;
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
    let obj = { theme: ThemeTypes.DARK, children: closure_14(BillableAdPlacementImpressionTrackerNative, obj2) };
    const ThemeContextProvider = bountyId(bounty[43]).ThemeContextProvider;
    obj2 = {
      adContentId: bounty.id,
      adCreativeType: bountyId(bounty[24]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[26]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          const obj = { bounty, sourceQuestContent };
          return authStore2(BountiesModalContentWithAppStore, obj);
        }
    };
    BillableAdPlacementImpressionTrackerNative = bountyId(bounty[30]).BillableAdPlacementImpressionTrackerNative;
    tmp2 = closure_14(ThemeContextProvider, obj);
  }
  return tmp2;
};
