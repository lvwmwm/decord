// Module ID: 16919
// Function ID: 16920
// Name: BountiesScrollVideoItem
// Dependencies: [5, 32, 19, 17, 9555, 7845, 6781, 21, 16920, 504, 16921, 14677, 16926, 16928, 16929, 16924, 16932, 14685, 6788, 6786, 16953, 2]
// Exports: BountiesScrollVideoItem

// Module 16919 (BountiesScrollVideoItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import QuestContent from "QuestContent" /* 6786 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14685 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VirtualCurrencyStore_mod from "VirtualCurrencyStore" /* 9555 */;
import BountyStore from "BountyStore" /* 7845 */;
import size_mod from "module_2" /* 2 */;

let c4, c5;

function BountiesScrollVideoItemInner(bounty) {
  let BountyVideo;
  let c7;
  let duration;
  let handleBufferAnalytics;
  let handleLoadStartAnalytics;
  let handlePaused;
  let handleProgress;
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
  let handleVideoResumed;
  let handleVideoResumedAnalytics;
  let handleVideoTracksAnalytics;
  let index;
  let initialProgress;
  let isCtaVisible;
  let isEndCardVisible;
  let isRecapPageOnTop;
  let isRecapPageRevealed;
  let normalizedProgress;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldRepeatVideo;
  let showEndCard;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp7;
  let tmp8;
  const f110916 = () => {
    let currentBalance = null;
    if (isActive) {
      currentBalance = VirtualCurrencyStore.getCurrentBalance();
    }
    return currentBalance;
  };
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let width = bounty.width;
  const height = bounty.height;
  const isActive = bounty.isActive;
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  let flag = bounty.shouldLoadHls;
  ({ index, isRecapPageRevealed, isRecapPageOnTop } = bounty);
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = bounty.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = bounty.isScrollIndicatorEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let closure_6;
  VirtualCurrencyStore = undefined;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  isEndCardVisible = undefined;
  let obj = isScrollingInBoundsSharedValue;
  const items = [width, height];
  let tmp2 = bounty;
  const tmp3 = width;
  const memo = isScrollingInBoundsSharedValue.useMemo(() => {
    size = { width, height };
    return size;
  }, items);
  let obj2 = bounty(width[9]);
  const items1 = [handleProgress];
  const stateFromStores = obj2.useStateFromStores(items1, () => BountyStore.isBountyCompleted(bounty.id));
  [tmp7, tmp8] = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
  const tmp6 = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
  const tmp9 = isActive(isScrollingInBoundsSharedValue.useState(flag), 2);
  if (tmp9[0] !== flag) {
    tmp9[1](flag);
    if (flag) {
      tmp8(true);
    }
  }
  closure_6 = flushProgress;
  let result = 1000 * bounty.rewardTimerSeconds;
  const tmp2Result = tmp2(tmp3[10]);
  const bountyVideoEndMode = tmp2Result.getBountyVideoEndMode(bounty);
  const ref = obj.useRef(null);
  width = obj.useRef(true);
  let closure_3 = obj.useRef(null);
  const items2 = [isActive, ref];
  const callback = obj.useCallback((current) => {
    ref2.current = current;
  }, []);
  const effect = obj.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      const tmp2 = isActive && ref2.current === bounty(width[8]).PlayerState.PAUSED;
      if (tmp2) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
  }, items2);
  [tmp19, tmp20] = isActive(obj.useState(isActive), 2);
  isActive(obj.useState(isActive), 2);
  [tmp22, tmp23] = isActive(obj.useState(f110916), 2);
  VirtualCurrencyStore = tmp23;
  isActive(obj.useState(f110916), 2);
  const first = tmp5(obj.useState(0), 2)[0];
  isActive(obj.useState(0), 2);
  const tmp12 = flushProgress;
  if (tmp19 !== isActive) {
    tmp20(isActive);
    if (isActive) {
      let currentBalance = VirtualCurrencyStore.getCurrentBalance();
      tmp23(currentBalance);
      if (currentBalance !== tmp22) {
        tmp26((arg0) => arg0 + 1);
      }
    }
  }
  const items3 = [bounty.id, isActive, tmp12, sourceQuestContent];
  const callback1 = obj.useCallback(height(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp;
            bounty = tmp4;
            c0 = false;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj3.claimBountyReward(bounty.id, sourceQuestContent), done: false };
            obj3 = bounty(width[11]);
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_1 = width;
            const obj2 = bounty(width[12]);
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
          const tmp15 = c0 && closure_129_4;
          if (tmp15) {
            closure_129_7((arg0) => {
              let sum = null;
              if (null != arg0) {
                sum = arg0 + closure_1_6;
              }
              return sum;
            });
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp24) {
        width = tmp24;
        if (0 === c3) {
          c5 = 3;
          throw tmp24;
        } else {
          c4 = 1;
        }
      }
    }
  }), items3);
  let obj3 = { bountyId: bounty.id, endMode: bountyVideoEndMode };
  const tmp2Result5 = tmp2(tmp3[13]);
  const bountyVideoProgressPersistence = tmp2Result5.useBountyVideoProgressPersistence(obj3);
  ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
  flushProgress = bountyVideoProgressPersistence.flushProgress;
  const items4 = [flushProgress];
  const effect1 = obj.useEffect(() => () => flushProgress(), items4);
  let obj4 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, initialPlaybackTimeSec: initialProgress.timestampSec, initialMaxVideoProgressSec: initialProgress.maxTimestampSec, initialVideoDurationSec: initialProgress.duration, wasPreloaded: false, verticalScrollingPosition: index, isActive };
  const tmp2Result6 = tmp2(tmp3[14]);
  const bountiesModalVideoAnalytics = tmp2Result6.useBountiesModalVideoAnalytics(obj4);
  handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
  const items5 = [handleVideoProgressAnalytics, handleProgress];
  ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  const callback2 = obj.useCallback((arg0, arg1, arg2) => {
    handleVideoProgressAnalytics(arg0, arg1, arg2);
    handleProgress(arg0, arg1, arg2);
  }, items5);
  let obj5 = { endMode: bountyVideoEndMode, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback1, onVideoProgress: callback2, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref, initialProgressSec: initialProgress.timestampSec, initialMaxVideoProgressSec: initialProgress.maxTimestampSec, initialVideoDurationSec: duration };
  duration = null;
  const useBountiesModalTiming = tmp2(tmp3[15]).useBountiesModalTiming;
  tmp2(tmp3[15]);
  if (initialProgress.duration > 0) {
    duration = initialProgress.duration;
  }
  const bountiesModalTiming = useBountiesModalTiming(obj5);
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  ({ handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  const tmp2Result8 = tmp2(tmp3[10]);
  const bountyAppStoreOverlayPlayback = tmp2Result8.useBountyAppStoreOverlayPlayback({ bounty, sourceQuestContent, isActive, endMode: bountyVideoEndMode, playerRef: ref, handleVideoEnd, handleVideoPaused, handleVideoResumed, showEndCard, onPaused: flushProgress });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  let obj6 = { style: memo, children: handleVideoProgressAnalytics(BountyVideo, size) };
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  size = {
    bounty,
    sourceQuestContent,
    isCompleted: stateFromStores,
    isScrollIndicatorEnabled: flag3,
    isCtaVisible,
    isEndCardVisible,
    isProgressBarVisible: !isEndCardVisible && !isRecapPageOnTop && !isVideoEndAppStoreOverlayVisible,
    orbsBalance: tmp22,
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
    isActive,
    isRecapPageRevealed,
    isScrollingInBoundsSharedValue,
    playerRef: ref,
    onPlayerStateChange: callback,
    balanceWidgetPillResetKey: first,
    shouldLoadHls: tmp7,
    width,
    height,
    softDownloadCapsEnabled: flag2,
    renderEndCard() {
      let visible;
      const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
      return <QuestContentImpressionTrackerNative adContentId={bounty.id} adCreativeType={AdCreativeType.AdCreativeType.BOUNTY} questContent={QuestContent.QuestContent.VIDEO_MODAL_END_CARD} sourceQuestContent={sourceQuestContent} overrideVisibility={isEndCardVisible}>{function children() {
        const obj = { bounty, visible, isActive, isScrollingInBoundsSharedValue, sourceQuestContent };
        return handleVideoProgressAnalytics(sourceQuestContent(width[20]), obj);
      }}</QuestContentImpressionTrackerNative>;
    }
  };
  BountyVideo = tmp2(tmp3[16]).BountyVideo;
  const tmp42 = closure_6;
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  return handleVideoProgressAnalytics(tmp42, obj6);
}
const View = react_native.View;
let VirtualCurrencyStore = VirtualCurrencyStore_mod;
const BOUNTY_ORB_AMOUNT = QuestConstants.BOUNTY_ORB_AMOUNT;
const jsx = Fragment.jsx;
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export function BountiesScrollVideoItem(bounty) {
  let height;
  let index;
  let isActive;
  let isScrollingInBoundsSharedValue;
  let shouldLoadHls;
  let width;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ width: dependencyMap, height: _asyncToGenerator, index: _slicedToArray, isActive } = bounty);
  if (isActive === undefined) {
    isActive = false;
  }
  let flag = bounty.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bounty.isRecapPageOnTop;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ isScrollingInBoundsSharedValue: BountyStore, shouldLoadHls } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  let flag3 = bounty.softDownloadCapsEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = bounty.isScrollIndicatorEnabled;
  if (flag4 === undefined) {
    flag4 = false;
  }
  const obj = {
    adContentId: bounty.id,
    adCreativeType: bounty(6788).AdCreativeType.BOUNTY,
    questContent: bounty(6786).QuestContent.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    overrideVisibility: isActive,
    children() {
      return <BountiesScrollVideoItemInner bounty={bounty} sourceQuestContent={sourceQuestContent} width={dependencyMap} height={_asyncToGenerator} index={_slicedToArray} isActive={isActive} isRecapPageRevealed={flag} isRecapPageOnTop={flag2} isScrollingInBoundsSharedValue={BountyStore} shouldLoadHls={shouldLoadHls} softDownloadCapsEnabled={flag3} isScrollIndicatorEnabled={flag4} />;
    }
  };
  const BillableAdPlacementImpressionTrackerNative = bounty(14685).BillableAdPlacementImpressionTrackerNative;
  return flag3(BillableAdPlacementImpressionTrackerNative, obj);
}
