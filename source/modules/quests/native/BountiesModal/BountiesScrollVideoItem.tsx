// Module ID: 13915
// Function ID: 106524
// Name: BountiesScrollVideoItemInner
// Dependencies: [5, 57, 31, 27, 8724, 6941, 4976, 33, 13916, 566, 10839, 13926, 10845, 13927, 13929, 13930, 13932, 10929, 6970, 4981, 13940, 2]
// Exports: BountiesScrollVideoItem

// Module 13915 (BountiesScrollVideoItemInner)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { jsx } from "jsxProd";

const require = arg1;
function BountiesScrollVideoItemInner(bounty) {
  let handleBufferAnalytics;
  let handleLoadStartAnalytics;
  let handleProgress;
  let handleReadyForDisplayAnalytics;
  let handleVideoEnd;
  let handleVideoEndAnalytics;
  let handleVideoErrorAnalytics;
  let handleVideoLoopedAnalytics;
  let handleVideoPausedAnalytics;
  let handleVideoProgress;
  let handleVideoResumedAnalytics;
  let handleVideoTracksAnalytics;
  let index;
  let initialProgress;
  let isCtaVisible;
  let isRecapPageOnTop;
  let isRecapPageRevealed;
  let loopingEnabled;
  let normalizedProgress;
  let orbAmount;
  let ownedByVerticalScrollExperiment;
  let peekScale;
  let rewardRemainingSeconds;
  let rewardTimerSeconds;
  let rewardTotalSeconds;
  let scrollAffordance;
  let softDownloadCapsEnabled;
  let stage1Enabled;
  let tmp21;
  let tmp22;
  let tmp4;
  let tmp5;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const width = bounty.width;
  const height = bounty.height;
  let isActive = bounty.isActive;
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  let flag = bounty.isScrollIndicatorOverlayEnabled;
  ({ index, isRecapPageRevealed, isRecapPageOnTop } = bounty);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bounty.shouldLoadHls;
  if (flag2 === undefined) {
    flag2 = true;
  }
  ({ scrollAffordance, softDownloadCapsEnabled, peekScale } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  let stateFromStores;
  orbAmount = undefined;
  let c8;
  let QuestsExperimentLocations;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let onPlaybackTimeChange;
  let onPaused;
  let onResumed;
  let onEndCardVisible;
  let isEndCardVisible;
  let handleVideoPaused;
  let handleVideoResumed;
  let handleReplay;
  let items = [width, height];
  const memo = isScrollingInBoundsSharedValue.useMemo(() => ({ width, height }), items);
  let obj = bounty(width[9]);
  const items1 = [c8];
  stateFromStores = obj.useStateFromStores(items1, () => _undefined.isBountyCompleted(bounty.id));
  [tmp4, tmp5] = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  const tmp6 = isActive(isScrollingInBoundsSharedValue.useState(flag2), 2);
  if (tmp6[0] !== flag2) {
    tmp6[1](flag2);
    if (flag2) {
      tmp5(true);
    }
  }
  let obj1 = bounty(width[10]);
  const bountiesExperience = obj1.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, orbAmount } = bountiesExperience);
  ({ stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = bounty(width[11]).BountyVideoEndMode;
  if (loopingEnabled) {
    let LOOP = BountyVideoEndMode.LOOP;
  } else {
    LOOP = ownedByVerticalScrollExperiment ? BountyVideoEndMode.END_CARD : BountyVideoEndMode.END_CARD_WITH_CTA;
  }
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    c8 = result;
    const ref = isScrollingInBoundsSharedValue.useRef(null);
    obj = { isActive, playerRef: ref };
    const tmp16 = isActive(isScrollingInBoundsSharedValue.useState(isActive), 2);
    let currentBalance = tmp16[1];
    [tmp21, tmp22] = isActive(isScrollingInBoundsSharedValue.useState(() => {
      let currentBalance = null;
      if (isActive) {
        currentBalance = orbAmount.getCurrentBalance();
      }
      return currentBalance;
    }), 2);
    QuestsExperimentLocations = tmp22;
    const tmp20 = isActive(isScrollingInBoundsSharedValue.useState(() => {
      let currentBalance = null;
      if (isActive) {
        currentBalance = orbAmount.getCurrentBalance();
      }
      return currentBalance;
    }), 2);
    if (tmp16[0] !== isActive) {
      currentBalance = currentBalance(isActive);
      if (isActive) {
        currentBalance = orbAmount.getCurrentBalance();
        tmp22(currentBalance);
        if (currentBalance !== tmp21) {
          currentBalance = tmp26((arg0) => arg0 + 1);
        }
      }
    }
    // CreateGeneratorClosureLongIndex (0x67)
    const items2 = [bounty.id, isActive, orbAmount, sourceQuestContent];
    const callback = isScrollingInBoundsSharedValue.useCallback(height(currentBalance), items2);
    let obj3 = bounty(width[14]);
    obj = { bountyId: bounty.id, endMode: LOOP };
    const bountyVideoProgressPersistence = obj3.useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items3 = [flushProgress];
    let effect = isScrollingInBoundsSharedValue.useEffect(() => () => outer1_11(), items3);
    const tmp25 = isActive(isScrollingInBoundsSharedValue.useState(0), 2);
    obj1 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result };
    ({ timestampSec: obj7.initialPlaybackTimeSec, maxTimestampSec: obj7.initialMaxVideoProgressSec, duration: obj7.initialVideoDurationSec } = initialProgress);
    obj1.wasPreloaded = false;
    let str = "carousel";
    if (ownedByVerticalScrollExperiment) {
      str = "active_only";
    }
    obj1.startupPath = str;
    obj1.verticalScrollingPosition = index;
    obj1.isActive = isActive;
    const bountiesModalVideoAnalytics = bounty(width[15]).useBountiesModalVideoAnalytics(obj1);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    onPlaybackTimeChange = undefined;
    ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
    if (null != scrollAffordance) {
      onPlaybackTimeChange = scrollAffordance.onPlaybackTimeChange;
    }
    onPaused = undefined;
    if (null != scrollAffordance) {
      onPaused = scrollAffordance.onPaused;
    }
    onResumed = undefined;
    if (null != scrollAffordance) {
      onResumed = scrollAffordance.onResumed;
    }
    onEndCardVisible = undefined;
    if (null != scrollAffordance) {
      onEndCardVisible = scrollAffordance.onEndCardVisible;
    }
    const items4 = [handleVideoProgressAnalytics, handleProgress, stateFromStores, onPlaybackTimeChange, result];
    const callback1 = isScrollingInBoundsSharedValue.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
      if (null != onPlaybackTimeChange) {
        let tmp4 = stateFromStores;
        if (!stateFromStores) {
          tmp4 = 1000 * arg0 >= c8;
        }
        onPlaybackTimeChange(arg2, arg1, tmp4, arg0, stateFromStores);
        const tmp3 = onPlaybackTimeChange;
      }
    }, items4);
    const obj6 = bounty(width[15]);
    const obj2 = { endMode: LOOP, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: callback1, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref };
    ({ timestampSec: obj9.initialProgressSec, maxTimestampSec: obj9.initialMaxVideoProgressSec } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj2.initialVideoDurationSec = duration;
    const bountiesModalTiming = bounty(width[11]).useBountiesModalTiming(obj2);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    handleVideoPaused = bountiesModalTiming.handleVideoPaused;
    handleVideoResumed = bountiesModalTiming.handleVideoResumed;
    handleReplay = bountiesModalTiming.handleReplay;
    const items5 = [handleVideoPaused, isEndCardVisible, onPaused];
    ({ isCtaVisible, handleVideoEnd, handleVideoProgress, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const items6 = [handleVideoResumed, onResumed];
    const callback2 = isScrollingInBoundsSharedValue.useCallback((arg0) => {
      handleVideoPaused(arg0);
      let tmp2 = isEndCardVisible;
      if (!isEndCardVisible) {
        tmp2 = null == onPaused;
      }
      if (!tmp2) {
        onPaused();
      }
    }, items5);
    const items7 = [isActive, isEndCardVisible, onEndCardVisible];
    const callback3 = isScrollingInBoundsSharedValue.useCallback((arg0) => {
      handleVideoResumed(arg0);
      if (null != onResumed) {
        onResumed();
      }
    }, items6);
    const effect1 = isScrollingInBoundsSharedValue.useEffect(() => {
      let tmp = isEndCardVisible;
      if (isEndCardVisible) {
        tmp = isActive;
      }
      if (tmp) {
        if (null != onEndCardVisible) {
          onEndCardVisible();
        }
      }
    }, items7);
    obj3 = { style: memo };
    const obj4 = { bounty, sourceQuestContent, isCompleted: stateFromStores, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled: flag };
    let tmp59 = !isEndCardVisible;
    if (tmp59) {
      tmp59 = !isRecapPageOnTop;
    }
    obj4.isProgressBarVisible = tmp59;
    obj4.orbsBalance = tmp21;
    obj4.handleVideoEnd = handleVideoEnd;
    obj4.handleVideoProgress = handleVideoProgress;
    obj4.handleVideoPaused = callback2;
    obj4.handleVideoResumed = callback3;
    obj4.handleVideoError = handleVideoErrorAnalytics;
    obj4.onLoadStart = handleLoadStartAnalytics;
    obj4.onBuffer = handleBufferAnalytics;
    obj4.onFirstFrame = handleReadyForDisplayAnalytics;
    obj4.onVideoTracks = handleVideoTracksAnalytics;
    obj4.rewardRemainingSeconds = rewardRemainingSeconds;
    obj4.rewardTotalSeconds = rewardTotalSeconds;
    obj4.normalizedProgress = normalizedProgress;
    obj4.repeat = loopingEnabled;
    obj4.initialProgress = initialProgress;
    obj4.isActive = isActive;
    obj4.isRecapPageRevealed = isRecapPageRevealed;
    obj4.isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue;
    obj4.playerRef = ref;
    obj4.onPlayerStateChange = (function useResumeOnActive(isActive) {
      isActive = isActive.isActive;
      const playerRef = isActive.playerRef;
      let closure_2 = isScrollingInBoundsSharedValue.useRef(true);
      let _createForOfIteratorHelperLoose = isScrollingInBoundsSharedValue.useRef(null);
      const items = [isActive, playerRef];
      const handlePlayerStateChange = isScrollingInBoundsSharedValue.useCallback((current) => {
        _createForOfIteratorHelperLoose.current = current;
      }, []);
      const effect = isScrollingInBoundsSharedValue.useEffect(() => {
        if (ref.current) {
          ref.current = false;
        } else {
          let tmp = isActive;
          if (isActive) {
            tmp = ref2.current === bounty(width[8]).PlayerState.PAUSED;
          }
          if (tmp) {
            const current = playerRef.current;
            if (null != current) {
              current.play();
            }
          }
        }
      }, items);
      return { handlePlayerStateChange };
    })(obj).handlePlayerStateChange;
    obj4.balanceWidgetPillResetKey = tmp25[0];
    obj4.shouldLoadHls = tmp4;
    obj4.width = width;
    obj4.height = height;
    obj4.peekScale = peekScale;
    obj4.softDownloadCapsEnabled = softDownloadCapsEnabled;
    obj4.renderEndCard = function renderEndCard() {
      const obj = {
        adContentId: bounty.id,
        adCreativeType: bounty(width[18]).AdCreativeType.BOUNTY,
        questContent: bounty(width[19]).QuestContent.VIDEO_MODAL_END_CARD,
        sourceQuestContent,
        overrideVisibility: isEndCardVisible,
        children() {
          return handleProgress(sourceQuestContent(width[20]), { bounty: outer1_0, visible: outer1_17, onReplay: outer1_20, isActive: outer1_4, isScrollingInBoundsSharedValue: outer1_5, sourceQuestContent: outer1_1 });
        }
      };
      return handleProgress(bounty(width[17]).QuestContentImpressionTrackerNative, obj);
    };
    obj3.children = handleProgress(bounty(width[16]).BountyVideo, obj4);
    return handleProgress(stateFromStores, obj3);
  }
  result = 1000 * rewardTimerSeconds;
}
let result = require("result").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export const BountiesScrollVideoItem = function BountiesScrollVideoItem(bounty) {
  let BountiesScrollVideoItemInner;
  let closure_12;
  let _createForOfIteratorHelperLoose;
  let _slicedToArray;
  let closure_8;
  let dependencyMap;
  let isActive;
  let isScrollIndicatorOverlayEnabled;
  let softDownloadCapsEnabled;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ width: dependencyMap, height: _createForOfIteratorHelperLoose, index: _slicedToArray, isActive } = bounty);
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
  ({ isScrollingInBoundsSharedValue: closure_8, isScrollIndicatorOverlayEnabled } = bounty);
  if (isScrollIndicatorOverlayEnabled === undefined) {
    isScrollIndicatorOverlayEnabled = false;
  }
  let flag3 = bounty.shouldLoadHls;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ scrollAffordance: BountiesScrollVideoItemInner, peekScale: closure_12, softDownloadCapsEnabled } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  const obj = {
    adContentId: bounty.id,
    adCreativeType: bounty(6970).AdCreativeType.BOUNTY,
    questContent: bounty(4981).QuestContent.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    overrideVisibility: isActive,
    children() {
      return flag3(outer1_11, { bounty, sourceQuestContent, width: closure_2, height: _createForOfIteratorHelperLoose, index: _slicedToArray, isActive, isRecapPageRevealed: flag, isRecapPageOnTop: flag2, isScrollingInBoundsSharedValue: closure_8, isScrollIndicatorOverlayEnabled, shouldLoadHls: flag3, scrollAffordance: closure_11, peekScale: closure_12, softDownloadCapsEnabled });
    }
  };
  return flag3(bounty(10929).QuestContentImpressionTrackerNative, obj);
};
