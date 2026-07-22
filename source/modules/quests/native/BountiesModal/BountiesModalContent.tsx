// Module ID: 13845
// Function ID: 104634
// Name: BountiesModalContentInner
// Dependencies: []
// Exports: default

// Module 13845 (BountiesModalContentInner)
function BountiesModalContentInner(bounty) {
  let handleBufferAnalytics;
  let handleLoadStartAnalytics;
  let handleProgress;
  let handleReadyForDisplayAnalytics;
  let handleVideoEnd;
  let handleVideoEndAnalytics;
  let handleVideoErrorAnalytics;
  let handleVideoLoopedAnalytics;
  let handleVideoPaused;
  let handleVideoPausedAnalytics;
  let handleVideoProgress;
  let handleVideoResumed;
  let handleVideoResumedAnalytics;
  let handleVideoTracksAnalytics;
  let initialProgress;
  let isCtaVisible;
  let normalizedProgress;
  let ownedByVerticalScrollExperiment;
  let rewardRemainingSeconds;
  let rewardTimerSeconds;
  let rewardTotalSeconds;
  let stage1Enabled;
  bounty = bounty.bounty;
  const arg1 = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const importDefault = sourceQuestContent;
  let React;
  let View;
  let closure_6;
  let QuestsExperimentLocations;
  let AnalyticEvents;
  let ThemeTypes;
  let videoDuration;
  const tmp = callback4();
  const dependencyMap = tmp;
  const tmp2 = function useBountiesModalVideoLayout() {
    const size = sourceQuestContent(tmp[8])();
    const width = size.width;
    const bounty = width;
    const height = size.height;
    const sourceQuestContent = height;
    const tmp = sourceQuestContent(tmp[9])();
    const items = [width, height, , , , ];
    ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp);
    return result.useMemo(() => {
      const diff = width - tmp.left - tmp.right;
      const diff1 = height - tmp.top - tmp.bottom;
      let result = diff / closure_13;
      let result1 = diff;
      let flag = true;
      if (result > diff1) {
        result1 = diff1 * closure_13;
        flag = false;
        result = diff1;
      }
      const obj = { top: Math.floor(tmp.top + (diff1 - result) / 2), left: Math.floor(tmp.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
      return obj;
    }, items);
  }();
  let callback = tmp2;
  const items = [tmp.videoWrapper, tmp2];
  const items1 = [tmp.closeButton, , , ];
  ({ top: arr2[1], left: arr2[2], width: arr2[3] } = tmp2);
  const memo = React.useMemo(() => {
    const items = [tmp.videoWrapper, { top: tmp2.top, left: tmp2.left, width: tmp2.width, height: tmp2.height }];
    return items;
  }, items);
  const items2 = [, , , , , ];
  ({ bottomContainer: arr3[0], bottomContainerFullWidth: arr3[1], bottomContainerNotFullWidth: arr3[2] } = tmp);
  ({ isFullWidth: arr3[3], left: arr3[4], width: arr3[5] } = tmp2);
  const memo1 = React.useMemo(() => {
    const items = [tmp.closeButton, ];
    const obj = { top: tmp2.top + sourceQuestContent(tmp[11]).space.PX_8 };
    const sum = tmp2.left + tmp2.width;
    const diff = sum - sourceQuestContent(tmp[11]).space.PX_32;
    obj.left = diff - sourceQuestContent(tmp[11]).space.PX_8;
    items[1] = obj;
    return items;
  }, items1);
  const memo2 = React.useMemo(() => {
    const bottomContainer = tmp.bottomContainer;
    if (tmp2.isFullWidth) {
      const items = [bottomContainer, tmp.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, tmp.bottomContainerNotFullWidth, ];
      const obj = {};
      ({ left: obj.left, width: obj.width } = tmp2);
      items1[2] = obj;
    }
    return items1;
  }, items2);
  let obj = arg1(dependencyMap[12]);
  const items3 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items3, () => flushProgress.isBountyCompleted(bounty.id));
  let obj1 = arg1(dependencyMap[13]);
  let obj2 = arg1(dependencyMap[14]);
  const bountiesExperience = obj2.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const loopingEnabled = bountiesExperience.loopingEnabled;
  ({ ownedByVerticalScrollExperiment, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = arg1(dependencyMap[15]).BountyVideoEndMode;
  const tmp8 = loopingEnabled ? BountyVideoEndMode.LOOP : BountyVideoEndMode.END_CARD;
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    React = result;
    const useBountyVideoProgressPersistence = arg1(dependencyMap[16]).useBountyVideoProgressPersistence;
    obj = { bountyId: bounty.id, endMode: tmp8 };
    const bountyVideoProgressPersistence = useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    View = handleProgress;
    const flushProgress = bountyVideoProgressPersistence.flushProgress;
    closure_6 = flushProgress;
    // CreateGeneratorClosureLongIndex (0x67)
    const items4 = [bounty.id, sourceQuestContent];
    callback = React.useCallback(callback(useBountyVideoProgressPersistence), items4);
    let obj4 = arg1(dependencyMap[19]);
    obj = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result };
    ({ timestampSec: obj6.initialPlaybackTimeSec, maxTimestampSec: obj6.initialMaxVideoProgressSec, duration: obj6.initialVideoDurationSec } = initialProgress);
    obj.wasPreloaded = false;
    obj.startupPath = "carousel";
    let duration = null;
    obj.verticalScrollingPosition = null;
    const bountiesModalVideoAnalytics = obj4.useBountiesModalVideoAnalytics(obj);
    const handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    QuestsExperimentLocations = handleVideoProgressAnalytics;
    const items5 = [handleVideoProgressAnalytics, handleProgress];
    ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
    const callback1 = React.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
    }, items5);
    let obj6 = arg1(dependencyMap[15]);
    obj1 = { endMode: tmp8, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: callback1, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics };
    ({ timestampSec: obj8.initialProgressSec, maxTimestampSec: obj8.initialMaxVideoProgressSec } = initialProgress);
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1.initialVideoDurationSec = duration;
    const bountiesModalTiming = obj6.useBountiesModalTiming(obj1);
    const isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    AnalyticEvents = isEndCardVisible;
    const maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
    ThemeTypes = maxVideoProgressSeconds;
    videoDuration = bountiesModalTiming.videoDuration;
    const items6 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    ({ isCtaVisible, handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const items7 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    const callback2 = React.useCallback(() => {
      let obj = bounty(tmp[20]);
      obj = { adContentId: bounty.id, adCreativeType: bounty(tmp[21]).AdCreativeType.BOUNTY, event: isEndCardVisible.AD_VIDEO_MODAL_CLOSED };
      obj = { content_name: bounty(tmp[22]).getQuestContentName(bounty(tmp[23]).QuestContent.VIDEO_MODAL_MOBILE), content_id: bounty(tmp[23]).QuestContent.VIDEO_MODAL_MOBILE };
      const obj4 = bounty(tmp[22]);
      let num = 0;
      if (null != videoDuration) {
        num = videoDuration;
      }
      obj.video_progress = bounty(maxVideoProgressSeconds[24]).formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj.threshold_met = 1000 * maxVideoProgressSeconds >= result;
      obj.reward_timer_seconds = result / 1000;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
      flushProgress();
      const obj5 = bounty(tmp[24]);
      sourceQuestContent(maxVideoProgressSeconds[25]).hideModal();
    }, items6);
    obj2 = {};
    const obj3 = { style: memo };
    const callback3 = React.useCallback(() => {
      let obj = bounty(tmp[20]);
      obj = { adContentId: bounty.id, adCreativeType: bounty(tmp[21]).AdCreativeType.BOUNTY, event: isEndCardVisible.AD_VIDEO_MODAL_CLOSED };
      obj = { content_name: bounty(tmp[22]).getQuestContentName(bounty(tmp[23]).QuestContent.VIDEO_MODAL_END_CARD), content_id: bounty(tmp[23]).QuestContent.VIDEO_MODAL_END_CARD };
      const obj4 = bounty(tmp[22]);
      let num = 0;
      if (null != videoDuration) {
        num = videoDuration;
      }
      obj.video_progress = bounty(maxVideoProgressSeconds[24]).formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj.threshold_met = true;
      obj.reward_timer_seconds = result / 1000;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
      flushProgress();
      const obj5 = bounty(tmp[24]);
      sourceQuestContent(maxVideoProgressSeconds[25]).hideModal();
    }, items7);
    obj4 = {
      isActive: true,
      bounty,
      sourceQuestContent,
      isCompleted: stateFromStores,
      isCtaVisible,
      isEndCardVisible,
      isProgressBarVisible: !isEndCardVisible,
      orbsBalance: obj1.useFetchVirtualCurrencyBalance().balance,
      handleVideoEnd,
      handleVideoProgress,
      handleVideoPaused,
      handleVideoResumed,
      handleVideoError: handleVideoErrorAnalytics,
      onLoadStart: handleLoadStartAnalytics,
      onBuffer: handleBufferAnalytics,
      onFirstFrame: handleReadyForDisplayAnalytics,
      onVideoTracks: handleVideoTracksAnalytics,
      rewardRemainingSeconds,
      rewardTotalSeconds,
      normalizedProgress,
      repeat: loopingEnabled,
      initialProgress,
      renderEndCard() {
          const obj = {
            adContentId: bounty.id,
            adCreativeType: bounty(tmp[21]).AdCreativeType.BOUNTY,
            questContent: bounty(tmp[23]).QuestContent.VIDEO_MODAL_END_CARD,
            sourceQuestContent,
            overrideVisibility: isEndCardVisible,
            children() {
              return callback2(callback(closure_2[28]), { bounty: closure_0, visible: closure_8, sourceQuestContent: callback });
            }
          };
          return videoDuration(bounty(tmp[27]).QuestContentImpressionTrackerNative, obj);
        },
      isScrollIndicatorEnabled: false
    };
    ({ width: obj11.width, height: obj11.height } = tmp2);
    obj3.children = videoDuration(arg1(dependencyMap[26]).BountyVideo, obj4);
    const items8 = [videoDuration(View, obj3), , ];
    const obj5 = { style: memo1 };
    obj6 = { onPress: callback2 };
    obj5.children = videoDuration(importDefault(dependencyMap[29]), obj6);
    items8[1] = videoDuration(View, obj5);
    const obj7 = {};
    ({ isFullWidth: obj14.left, isFullWidth: obj14.right } = tmp2);
    obj7.bottom = true;
    obj7.style = memo2;
    obj7.pointerEvents = "box-none";
    const obj8 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback3 };
    obj7.children = videoDuration(importDefault(dependencyMap[31]), obj8);
    items8[2] = videoDuration(arg1(dependencyMap[30]).SafeAreaPaddingView, obj7);
    obj2.children = items8;
    return callback3(closure_11, obj2);
  }
  result = 1000 * rewardTimerSeconds;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const QuestsExperimentLocations = arg1(dependencyMap[4]).QuestsExperimentLocations;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const ThemeTypes = arg1(dependencyMap[6]).ThemeTypes;
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = 0.5625;
const tmp2 = arg1(dependencyMap[7]);
let closure_14 = arg1(dependencyMap[10]).createStyles(() => {
  let obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" } };
  obj = { bottom: importDefault(dependencyMap[11]).space.PX_24 };
  obj.bottomContainer = obj;
  obj = { left: importDefault(dependencyMap[11]).space.PX_16, right: importDefault(dependencyMap[11]).space.PX_16 };
  obj.bottomContainerFullWidth = obj;
  obj.bottomContainerNotFullWidth = { paddingLeft: importDefault(dependencyMap[11]).space.PX_16, paddingRight: importDefault(dependencyMap[11]).space.PX_16 };
  return obj;
});
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default function BountiesModalContent(arg0) {
  let sourceQuestContent;
  ({ bountyId: closure_0, sourceQuestContent } = arg0);
  const importDefault = sourceQuestContent;
  let obj = arg1(dependencyMap[32]);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const found = questHomeBounties.find((id) => id.id === closure_0);
  const dependencyMap = found;
  let tmp2 = null;
  if (null != found) {
    obj = { theme: ThemeTypes.DARKER };
    obj = {
      adContentId: found.id,
      adCreativeType: arg1(dependencyMap[21]).AdCreativeType.BOUNTY,
      questContent: arg1(dependencyMap[23]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          return callback(closure_15, { bounty: found, sourceQuestContent });
        }
    };
    obj.children = callback2(arg1(dependencyMap[27]).QuestContentImpressionTrackerNative, obj);
    tmp2 = callback2(arg1(dependencyMap[33]).ThemeContextProvider, obj);
  }
  return tmp2;
};
