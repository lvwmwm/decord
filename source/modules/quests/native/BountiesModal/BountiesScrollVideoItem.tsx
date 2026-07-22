// Module ID: 13801
// Function ID: 104368
// Name: BountiesScrollVideoItemInner
// Dependencies: []
// Exports: BountiesScrollVideoItem

// Module 13801 (BountiesScrollVideoItemInner)
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
  const arg1 = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const importDefault = sourceQuestContent;
  const width = bounty.width;
  const dependencyMap = width;
  const height = bounty.height;
  let callback = height;
  const isActive = bounty.isActive;
  let callback2 = isActive;
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  const React = isScrollingInBoundsSharedValue;
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
  let View;
  let currentBalance;
  let closure_8;
  let QuestsExperimentLocations;
  let jsx;
  let BountiesScrollVideoItemInner;
  let handleVideoProgressAnalytics;
  let onPlaybackTimeChange;
  let onPaused;
  let onResumed;
  let onEndCardVisible;
  let isEndCardVisible;
  let handleVideoPaused;
  let handleVideoResumed;
  let handleReplay;
  const items = [width, height];
  const memo = React.useMemo(() => ({ width, height }), items);
  let obj = arg1(dependencyMap[9]);
  const items1 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items1, () => result.isBountyCompleted(bounty.id));
  View = stateFromStores;
  [tmp4, tmp5] = callback2(React.useState(flag2), 2);
  const tmp6 = callback2(React.useState(flag2), 2);
  if (tmp6[0] !== flag2) {
    tmp6[1](flag2);
    if (flag2) {
      tmp5(true);
    }
  }
  let obj1 = arg1(dependencyMap[10]);
  const bountiesExperience = obj1.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, orbAmount } = bountiesExperience);
  currentBalance = orbAmount;
  ({ stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = arg1(dependencyMap[11]).BountyVideoEndMode;
  if (loopingEnabled) {
    let LOOP = BountyVideoEndMode.LOOP;
  } else {
    LOOP = ownedByVerticalScrollExperiment ? BountyVideoEndMode.END_CARD : BountyVideoEndMode.END_CARD_WITH_CTA;
  }
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    closure_8 = result;
    const ref = React.useRef(null);
    obj = { isActive, playerRef: ref };
    const tmp16 = callback2(React.useState(isActive), 2);
    currentBalance = tmp16[1];
    [tmp21, tmp22] = callback2(React.useState(() => {
      let currentBalance = null;
      if (isActive) {
        currentBalance = orbAmount.getCurrentBalance();
      }
      return currentBalance;
    }), 2);
    QuestsExperimentLocations = tmp22;
    const tmp20 = callback2(React.useState(() => {
      let currentBalance = null;
      if (isActive) {
        currentBalance = orbAmount.getCurrentBalance();
      }
      return currentBalance;
    }), 2);
    if (tmp16[0] !== isActive) {
      currentBalance = currentBalance(isActive);
      if (isActive) {
        currentBalance = currentBalance.getCurrentBalance();
        tmp22(currentBalance);
        if (currentBalance !== tmp21) {
          currentBalance = tmp26((arg0) => arg0 + 1);
        }
      }
    }
    // CreateGeneratorClosureLongIndex (0x67)
    const items2 = [bounty.id, isActive, orbAmount, sourceQuestContent];
    callback = React.useCallback(callback(currentBalance), items2);
    let obj3 = arg1(dependencyMap[14]);
    obj = { bountyId: bounty.id, endMode: LOOP };
    const bountyVideoProgressPersistence = obj3.useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    jsx = handleProgress;
    const flushProgress = bountyVideoProgressPersistence.flushProgress;
    BountiesScrollVideoItemInner = flushProgress;
    const items3 = [flushProgress];
    const effect = React.useEffect(() => () => callback(), items3);
    const tmp25 = callback2(React.useState(0), 2);
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
    const bountiesModalVideoAnalytics = arg1(dependencyMap[15]).useBountiesModalVideoAnalytics(obj1);
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
    const callback1 = React.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
      if (null != onPlaybackTimeChange) {
        let tmp4 = stateFromStores;
        if (!stateFromStores) {
          tmp4 = 1000 * arg0 >= result;
        }
        onPlaybackTimeChange(arg2, arg1, tmp4, arg0, stateFromStores);
        const tmp3 = onPlaybackTimeChange;
      }
    }, items4);
    const obj6 = arg1(dependencyMap[15]);
    const obj2 = { endMode: LOOP, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: callback1, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref };
    ({ timestampSec: obj9.initialProgressSec, maxTimestampSec: obj9.initialMaxVideoProgressSec } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj2.initialVideoDurationSec = duration;
    const bountiesModalTiming = arg1(dependencyMap[11]).useBountiesModalTiming(obj2);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    handleVideoPaused = bountiesModalTiming.handleVideoPaused;
    handleVideoResumed = bountiesModalTiming.handleVideoResumed;
    handleReplay = bountiesModalTiming.handleReplay;
    const items5 = [handleVideoPaused, isEndCardVisible, onPaused];
    ({ isCtaVisible, handleVideoEnd, handleVideoProgress, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const items6 = [handleVideoResumed, onResumed];
    callback2 = React.useCallback((arg0) => {
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
    const callback3 = React.useCallback((arg0) => {
      handleVideoResumed(arg0);
      if (null != onResumed) {
        onResumed();
      }
    }, items6);
    const effect1 = React.useEffect(() => {
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
    obj4.onPlayerStateChange = function useResumeOnActive(isActive) {
      isActive = isActive.isActive;
      const bounty = isActive;
      const playerRef = isActive.playerRef;
      const sourceQuestContent = playerRef;
      let closure_2 = isScrollingInBoundsSharedValue.useRef(true);
      let closure_3 = isScrollingInBoundsSharedValue.useRef(null);
      const items = [isActive, playerRef];
      const handlePlayerStateChange = isScrollingInBoundsSharedValue.useCallback((current) => {
        closure_3.current = current;
      }, []);
      const effect = isScrollingInBoundsSharedValue.useEffect(() => {
        if (ref.current) {
          ref.current = false;
        } else {
          let tmp = isActive;
          if (isActive) {
            tmp = ref2.current === isActive(ref[8]).PlayerState.PAUSED;
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
    }(obj).handlePlayerStateChange;
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
          return callback2(callback(closure_2[20]), { bounty: closure_0, visible: closure_17, onReplay: closure_20, isActive: closure_4, isScrollingInBoundsSharedValue: closure_5, sourceQuestContent: callback });
        }
      };
      return handleProgress(bounty(width[17]).QuestContentImpressionTrackerNative, obj);
    };
    obj3.children = jsx(arg1(dependencyMap[16]).BountyVideo, obj4);
    return <View {...obj3} />;
  }
  result = 1000 * rewardTimerSeconds;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const QuestsExperimentLocations = arg1(dependencyMap[6]).QuestsExperimentLocations;
const jsx = arg1(dependencyMap[7]).jsx;
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx");

export const BountiesScrollVideoItem = function BountiesScrollVideoItem(bounty) {
  let isActive;
  let isScrollIndicatorOverlayEnabled;
  let softDownloadCapsEnabled;
  bounty = bounty.bounty;
  const arg1 = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const importDefault = sourceQuestContent;
  ({ width: closure_2, height: closure_3, index: closure_4, isActive } = bounty);
  if (isActive === undefined) {
    isActive = false;
  }
  let closure_5 = isActive;
  let flag = bounty.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  const View = flag;
  let flag2 = bounty.isRecapPageOnTop;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let closure_7 = flag2;
  ({ isScrollingInBoundsSharedValue: closure_8, isScrollIndicatorOverlayEnabled } = bounty);
  if (isScrollIndicatorOverlayEnabled === undefined) {
    isScrollIndicatorOverlayEnabled = false;
  }
  const QuestsExperimentLocations = isScrollIndicatorOverlayEnabled;
  let flag3 = bounty.shouldLoadHls;
  if (flag3 === undefined) {
    flag3 = true;
  }
  const jsx = flag3;
  ({ scrollAffordance: closure_11, peekScale: closure_12, softDownloadCapsEnabled } = bounty);
  if (softDownloadCapsEnabled === undefined) {
    softDownloadCapsEnabled = false;
  }
  const obj = {
    adContentId: bounty.id,
    adCreativeType: arg1(dependencyMap[18]).AdCreativeType.BOUNTY,
    questContent: arg1(dependencyMap[19]).QuestContent.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    overrideVisibility: isActive,
    children() {
      return flag3(closure_11, { bounty, sourceQuestContent, width: closure_2, height: closure_3, index: closure_4, isActive, isRecapPageRevealed: flag, isRecapPageOnTop: flag2, isScrollingInBoundsSharedValue: closure_8, isScrollIndicatorOverlayEnabled, shouldLoadHls: flag3, scrollAffordance: closure_11, peekScale: closure_12, softDownloadCapsEnabled });
    }
  };
  return jsx(arg1(dependencyMap[17]).QuestContentImpressionTrackerNative, obj);
};
