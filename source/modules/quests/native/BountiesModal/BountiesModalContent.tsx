// Module ID: 13959
// Function ID: 106790
// Name: BountiesModalContentInner
// Dependencies: [5, 31, 27, 6941, 4976, 653, 482, 33, 1450, 1557, 4130, 689, 566, 8722, 10839, 13926, 13929, 10845, 13927, 13930, 6959, 6970, 6969, 4981, 10474, 13905, 13932, 10929, 13960, 13951, 5121, 13943, 10464, 3842, 2]
// Exports: default

// Module 13959 (BountiesModalContentInner)
import ME from "ME";
import BountiesModalEndedCtaButtons from "BountiesModalEndedCtaButtons";
import { View } from "_createForOfIteratorHelperLoose";
import closure_6 from "_createForOfIteratorHelperLoose";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { AnalyticEvents } from "ME";
import { ThemeTypes } from "sum";
import jsxProd from "ManaContext";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
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
  const sourceQuestContent = bounty.sourceQuestContent;
  let React;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let isEndCardVisible;
  let maxVideoProgressSeconds;
  let videoDuration;
  let tmp = callback4();
  const dependencyMap = tmp;
  const tmp2 = (function useBountiesModalVideoLayout() {
    const size = sourceQuestContent(tmp[8])();
    const width = size.width;
    const height = size.height;
    tmp = sourceQuestContent(tmp[9])();
    const items = [width, height, , , , ];
    ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp);
    return _undefined.useMemo(() => {
      const diff = width - tmp.left - tmp.right;
      const diff1 = height - tmp.top - tmp.bottom;
      let result = diff / outer2_13;
      let result1 = diff;
      let flag = true;
      if (result > diff1) {
        result1 = diff1 * outer2_13;
        flag = false;
        result = diff1;
      }
      const obj = { top: Math.floor(tmp.top + (diff1 - result) / 2), left: Math.floor(tmp.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
      return obj;
    }, items);
  })();
  let callback = tmp2;
  let items = [tmp.videoWrapper, tmp2];
  let items1 = [tmp.closeButton, , , ];
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
  let obj = bounty(566);
  const items3 = [flushProgress];
  const stateFromStores = obj.useStateFromStores(items3, () => flushProgress.isBountyCompleted(bounty.id));
  let obj1 = bounty(8722);
  let obj2 = bounty(10839);
  const bountiesExperience = obj2.useBountiesExperience(handleVideoProgressAnalytics.VIDEO_MODAL_MOBILE);
  const loopingEnabled = bountiesExperience.loopingEnabled;
  ({ ownedByVerticalScrollExperiment, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = bounty(13926).BountyVideoEndMode;
  const tmp8 = loopingEnabled ? BountyVideoEndMode.LOOP : BountyVideoEndMode.END_CARD;
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    React = result;
    const useBountyVideoProgressPersistence = bounty(13929).useBountyVideoProgressPersistence;
    obj = { bountyId: bounty.id, endMode: tmp8 };
    const bountyVideoProgressPersistence = useBountyVideoProgressPersistence(obj);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    // CreateGeneratorClosureLongIndex (0x67)
    const items4 = [bounty.id, sourceQuestContent];
    callback = React.useCallback(callback(useBountyVideoProgressPersistence), items4);
    let obj4 = bounty(13930);
    obj = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result };
    ({ timestampSec: obj6.initialPlaybackTimeSec, maxTimestampSec: obj6.initialMaxVideoProgressSec, duration: obj6.initialVideoDurationSec } = initialProgress);
    obj.wasPreloaded = false;
    obj.startupPath = "carousel";
    let duration = null;
    obj.verticalScrollingPosition = null;
    const bountiesModalVideoAnalytics = obj4.useBountiesModalVideoAnalytics(obj);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    const items5 = [handleVideoProgressAnalytics, handleProgress];
    ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
    const callback1 = React.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
    }, items5);
    let obj6 = bounty(13926);
    obj1 = { endMode: tmp8, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: callback1, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics };
    ({ timestampSec: obj8.initialProgressSec, maxTimestampSec: obj8.initialMaxVideoProgressSec } = initialProgress);
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj1.initialVideoDurationSec = duration;
    const bountiesModalTiming = obj6.useBountiesModalTiming(obj1);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
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
      obj.threshold_met = 1000 * maxVideoProgressSeconds >= c4;
      obj.reward_timer_seconds = c4 / 1000;
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
      obj.reward_timer_seconds = c4 / 1000;
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
              return videoDuration(sourceQuestContent(table[28]), { bounty: outer1_0, visible: outer1_8, sourceQuestContent: outer1_1 });
            }
          };
          return videoDuration(bounty(tmp[27]).QuestContentImpressionTrackerNative, obj);
        },
      isScrollIndicatorEnabled: false
    };
    ({ width: obj11.width, height: obj11.height } = tmp2);
    obj3.children = videoDuration(bounty(13932).BountyVideo, obj4);
    const items8 = [videoDuration(handleProgress, obj3), , ];
    let obj5 = { style: memo1 };
    obj6 = { onPress: callback2 };
    obj5.children = videoDuration(sourceQuestContent(13951), obj6);
    items8[1] = videoDuration(handleProgress, obj5);
    const obj7 = {};
    ({ isFullWidth: obj14.left, isFullWidth: obj14.right } = tmp2);
    obj7.bottom = true;
    obj7.style = memo2;
    obj7.pointerEvents = "box-none";
    const obj8 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback3 };
    obj7.children = videoDuration(sourceQuestContent(13943), obj8);
    items8[2] = videoDuration(bounty(5121).SafeAreaPaddingView, obj7);
    obj2.children = items8;
    return callback3(closure_11, obj2);
  }
  result = 1000 * rewardTimerSeconds;
}
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = 0.5625;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" } };
  obj = { position: "absolute", bottom: importDefault(689).space.PX_24, justifyContent: "flex-end" };
  obj.bottomContainer = obj;
  obj = { left: importDefault(689).space.PX_16, right: importDefault(689).space.PX_16 };
  obj.bottomContainerFullWidth = obj;
  obj.bottomContainerNotFullWidth = { paddingLeft: importDefault(689).space.PX_16, paddingRight: importDefault(689).space.PX_16 };
  return obj;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default function BountiesModalContent(arg0) {
  let require;
  let sourceQuestContent;
  ({ bountyId: require, sourceQuestContent } = arg0);
  let obj = require(found[32]);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  found = questHomeBounties.find((id) => id.id === closure_0);
  let tmp2 = null;
  if (null != found) {
    obj = { theme: ThemeTypes.DARKER };
    obj = {
      adContentId: found.id,
      adCreativeType: require(found[21]).AdCreativeType.BOUNTY,
      questContent: require(found[23]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          return outer1_10(outer1_15, { bounty: found, sourceQuestContent });
        }
    };
    obj.children = callback2(require(found[27]).QuestContentImpressionTrackerNative, obj);
    tmp2 = callback2(require(found[33]).ThemeContextProvider, obj);
  }
  return tmp2;
};
