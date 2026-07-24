// Module ID: 14079
// Function ID: 107718
// Name: PlayerState
// Dependencies: [57, 31, 6943, 4976, 33, 14072, 10493, 9494, 3743, 13967, 14080, 6964, 8342, 14083, 1554, 10503, 9480, 14091, 2]

// Module 14079 (PlayerState)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _toPropertyKey from "_toPropertyKey";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((onLoad) => {
  let c15;
  let externallyPaused;
  let handleOpenTranscript;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let isFullscreen;
  let sourceQuestContent;
  let style;
  let tmp18;
  onLoad = onLoad.onLoad;
  const onEnd = onLoad.onEnd;
  const onToggleFullscreen = onLoad.onToggleFullscreen;
  const orientation = onLoad.orientation;
  const contentInsets = onLoad.contentInsets;
  let flag = onLoad.captionsEnabled;
  ({ style, handleToggleCaptions, handleOpenTranscript, isFullscreen, externallyPaused } = onLoad);
  if (flag === undefined) {
    flag = false;
  }
  ({ hasCaptionAsset, sourceQuestContent } = onLoad);
  if (hasCaptionAsset === undefined) {
    hasCaptionAsset = true;
  }
  let flag2 = onLoad.hasTranscriptAsset;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let quest;
  let questTaskDetails;
  let memo;
  let memo1;
  let first;
  let closure_11;
  let targetSeconds;
  let c13;
  let ref;
  c15 = undefined;
  let closure_16;
  let handleBufferAnalytics;
  let handleEndAnalytics;
  let handleErrorAnalytics;
  let handleLoadAnalytics;
  let handleLoadStartAnalytics;
  let handlePausePlaybackAnalytics;
  let handleProgressAnalytics;
  let handleReadyForDisplayAnalytics;
  let handleResumePlaybackAnalytics;
  let handleSeekAnalytics;
  let closure_27;
  let id;
  let gameTitle;
  let url1;
  let videoTitle;
  let str;
  let closure_33;
  let closure_34;
  let obj = onLoad(onToggleFullscreen[5]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  questTaskDetails = onLoad(onToggleFullscreen[6]).useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  const items = [quest];
  memo = contentInsets.useMemo(() => onLoad(onToggleFullscreen[7]).getQuestAsset(quest, onLoad(onToggleFullscreen[7]).QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true), items);
  const items1 = [quest];
  memo1 = contentInsets.useMemo(() => onLoad(onToggleFullscreen[7]).getQuestAsset(quest, onLoad(onToggleFullscreen[7]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true), items1);
  let url;
  if (null != memo1) {
    url = memo1.url;
  }
  if (null != url) {
    let VIDEO_PLAYER_VIDEO = onLoad(onToggleFullscreen[7]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS;
  } else {
    VIDEO_PLAYER_VIDEO = onLoad(onToggleFullscreen[7]).QuestAssetType.VIDEO_PLAYER_VIDEO;
  }
  const tmp12 = orientation(contentInsets.useState(questTaskDetails.targetSeconds), 2);
  first = tmp12[0];
  closure_11 = tmp12[1];
  targetSeconds = questTaskDetails.targetSeconds;
  const tmp14 = flag((setVideoProgress) => setVideoProgress.setVideoProgress);
  c13 = tmp14;
  let obj2 = onLoad(onToggleFullscreen[6]);
  ref = contentInsets.useRef(null);
  const tmp15 = flag((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (null == tmp) {
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration: first, maxTimestampSec: questTaskDetails.progressSeconds };
      tmp = obj;
    }
    return tmp;
  }, onLoad(onToggleFullscreen[8]).shallow);
  [tmp18, c15] = orientation(contentInsets.useState(onLoad(onToggleFullscreen[9]).PlayerState.LOADING), 2);
  closure_16 = contentInsets.useRef(questTaskDetails.progressSeconds);
  obj = { duration: first, isQuestCompleted: tmp4, playerState: tmp18, questId: quest.id, videoSessionId: videoQuestModalContext.videoSessionId, videoAssetId: VIDEO_PLAYER_VIDEO, sourceQuestContent };
  const tmp19 = onEnd(onToggleFullscreen[10])(obj);
  handleBufferAnalytics = tmp19.handleBufferAnalytics;
  handleEndAnalytics = tmp19.handleEndAnalytics;
  handleErrorAnalytics = tmp19.handleErrorAnalytics;
  handleLoadAnalytics = tmp19.handleLoadAnalytics;
  handleLoadStartAnalytics = tmp19.handleLoadStartAnalytics;
  handlePausePlaybackAnalytics = tmp19.handlePausePlaybackAnalytics;
  handleProgressAnalytics = tmp19.handleProgressAnalytics;
  handleReadyForDisplayAnalytics = tmp19.handleReadyForDisplayAnalytics;
  handleResumePlaybackAnalytics = tmp19.handleResumePlaybackAnalytics;
  handleSeekAnalytics = tmp19.handleSeekAnalytics;
  closure_27 = contentInsets.useRef(null);
  id = quest.id;
  gameTitle = quest.config.messages.gameTitle;
  url1 = undefined;
  if (null != memo1) {
    url1 = memo1.url;
  }
  if (null == url1) {
    let url2;
    if (null != memo) {
      url2 = memo.url;
    }
    url1 = url2;
  }
  const tmp17 = orientation(contentInsets.useState(onLoad(onToggleFullscreen[9]).PlayerState.LOADING), 2);
  const defaultWatchVideoTask = onLoad(onToggleFullscreen[11]).getDefaultWatchVideoTask(quest.config);
  videoTitle = undefined;
  if (null != defaultWatchVideoTask) {
    videoTitle = defaultWatchVideoTask.messages.videoTitle;
  }
  let url3;
  if (null != memo1) {
    url3 = memo1.url;
  }
  str = "mp4";
  if (null != url3) {
    str = "hls";
  }
  const obj4 = onLoad(onToggleFullscreen[11]);
  const items2 = [id, gameTitle, targetSeconds, url1, videoTitle, str];
  const rnvHttpEngine = onLoad(onToggleFullscreen[12]).useRnvHttpEngine();
  const effect = contentInsets.useEffect(() => {
    if (null != url1) {
      if (0 !== url1.length) {
        if (null != ref.current) {
          let obj = onLoad(onToggleFullscreen[13]);
          obj = { location: quest.VIDEO_MODAL_MOBILE };
          if (obj.getVideoQoEMetricsConfig(obj).externalAnalyticsEnabled) {
            const constants = onLoad(onToggleFullscreen[14]).getConstants();
            obj = { videoRef: ref.current, feature: "quests" };
            ({ Version: obj4.appVersion, ReleaseChannel: obj4.releaseChannel } = constants);
            const obj1 = { contentId: url1, videoStreamType: "quests", contentType: "quests", durationMs: 1000 * targetSeconds, title: videoTitle, questId: id, gameName: gameTitle };
            obj.contentMetadata = obj1;
            const MobileMuxWrapper = onLoad(onToggleFullscreen[13]).MobileMuxWrapper;
            const prototype = MobileMuxWrapper.prototype;
            const mobileMuxWrapper = new MobileMuxWrapper(obj);
            closure_27.current = mobileMuxWrapper;
            let current = closure_27.current;
            current.initialize();
            return () => {
              if (null != outer1_27.current) {
                const current = outer1_27.current;
                current.onProgress(outer1_16.current);
                const current2 = outer1_27.current;
                current2.destroy();
                outer1_27.current = null;
              }
            };
          }
        }
      }
    }
  }, items2);
  const items3 = [handleReadyForDisplayAnalytics];
  const callback = contentInsets.useCallback((arg0) => {
    _undefined2(arg0);
  }, []);
  const items4 = [handleLoadAnalytics, onLoad];
  const callback1 = contentInsets.useCallback(() => {
    handleReadyForDisplayAnalytics();
    const current = closure_27.current;
    if (null != current) {
      current.onReadyForDisplay();
    }
  }, items3);
  const items5 = [first, handleSeekAnalytics, quest.id, tmp14];
  const callback2 = contentInsets.useCallback((arg0) => {
    let duration;
    let naturalSize;
    let trackId;
    let videoTracks;
    ({ duration, videoTracks, trackId, naturalSize } = arg0);
    callback(duration);
    handleLoadAnalytics();
    const current = closure_27.current;
    if (null != current) {
      current.onLoad(duration);
    }
    if (null != naturalSize) {
      const current2 = closure_27.current;
      if (null != current2) {
        const result = current2.updateVideoSourceDimensions(naturalSize.width, naturalSize.height);
      }
    }
    let tmp6 = null != videoTracks;
    if (tmp6) {
      tmp6 = videoTracks.length > 0;
    }
    if (tmp6) {
      tmp6 = null != trackId;
    }
    if (tmp6) {
      tmp6 = trackId.length > 0;
    }
    if (tmp6) {
      const current3 = closure_27.current;
      if (null != current3) {
        current3.onVideoTrackChange(trackId, videoTracks);
      }
    }
    if (null != onLoad) {
      onLoad(arg0);
    }
  }, items4);
  const callback3 = contentInsets.useCallback((currentTime) => {
    closure_16.current = currentTime.currentTime;
    if (first > 0) {
      _undefined(quest.id, currentTime.currentTime, first);
    }
    handleSeekAnalytics(currentTime.fromTimeSec, currentTime.currentTime);
    const current = closure_27.current;
    if (null != current) {
      current.updatePlayheadTime(currentTime.currentTime);
    }
    const current2 = closure_27.current;
    if (null != current2) {
      current2.onSeek();
    }
  }, items5);
  closure_33 = contentInsets.useRef(0);
  closure_34 = contentInsets.useRef(0);
  const items6 = [quest, questTaskDetails.taskType, handleProgressAnalytics, tmp14];
  const items7 = [first, quest, handleEndAnalytics, onEnd];
  const callback4 = contentInsets.useCallback((currentTime) => {
    closure_16.current = currentTime.currentTime;
    if (currentTime.currentTime >= ref.current) {
      onLoad(onToggleFullscreen[15]).sendVideoProgress(quest, currentTime.currentTime);
      handleProgressAnalytics(currentTime.progress, currentTime.seekableDuration, currentTime.currentTime);
      const _Math = Math;
      const sum = currentTime.currentTime + 6;
      ref.current = sum + 2 * Math.random();
      const obj2 = onLoad(onToggleFullscreen[15]);
    }
    if (currentTime.currentTime >= ref2.current) {
      const result = onLoad(onToggleFullscreen[16]).updateOptimisticProgress(quest.id, questTaskDetails.taskType, currentTime.currentTime);
      ref2.current = currentTime.currentTime + 1;
      const obj = onLoad(onToggleFullscreen[16]);
    }
    _undefined(quest.id, currentTime.currentTime, currentTime.seekableDuration);
    const current = closure_27.current;
    if (null != current) {
      current.onProgress(currentTime.currentTime);
    }
  }, items6);
  const items8 = [handleLoadStartAnalytics];
  const callback5 = contentInsets.useCallback(() => {
    onLoad(onToggleFullscreen[15]).sendVideoProgress(quest, first);
    handleEndAnalytics();
    const current = closure_27.current;
    if (null != current) {
      current.onProgress(first);
    }
    const current2 = closure_27.current;
    if (null != current2) {
      current2.onEnd();
    }
    if (null != onEnd) {
      onEnd();
    }
  }, items7);
  const items9 = [handleErrorAnalytics];
  const callback6 = contentInsets.useCallback(() => {
    handleLoadStartAnalytics();
    const current = closure_27.current;
    if (null != current) {
      current.onLoadStart();
    }
    const current2 = closure_27.current;
    if (null != current2) {
      current2.onPlay();
    }
  }, items8);
  const callback7 = contentInsets.useCallback((arg0) => {
    handleErrorAnalytics(arg0);
    const current = closure_27.current;
    if (null != current) {
      current.onError(arg0);
    }
  }, items9);
  const callback8 = contentInsets.useCallback((arg0) => {
    let selectedVideoTrackId;
    let videoTracks;
    ({ videoTracks, selectedVideoTrackId } = arg0);
    let tmp = null != videoTracks;
    if (tmp) {
      tmp = videoTracks.length > 0;
    }
    if (tmp) {
      tmp = null != selectedVideoTrackId;
    }
    if (tmp) {
      tmp = selectedVideoTrackId.length > 0;
    }
    if (tmp) {
      const current = closure_27.current;
      if (null != current) {
        current.onVideoTrackChange(selectedVideoTrackId, videoTracks);
      }
    }
  }, []);
  const items10 = [handleResumePlaybackAnalytics];
  const callback9 = contentInsets.useCallback((nativeEvent) => {
    let height;
    let width;
    let layout;
    if (null != nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (null != nativeEvent) {
        layout = nativeEvent.layout;
      }
    }
    if (null != layout) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      if (width > 0) {
        if (height > 0) {
          const current = closure_27.current;
          if (null != current) {
            const result = current.updateVideoDimensions(width, height);
          }
        }
      }
    }
  }, []);
  const items11 = [handlePausePlaybackAnalytics];
  const callback10 = contentInsets.useCallback(() => {
    handleResumePlaybackAnalytics();
    const current = closure_27.current;
    if (null != current) {
      current.onPlay();
    }
  }, items10);
  const items12 = [handleBufferAnalytics];
  const callback11 = contentInsets.useCallback(() => {
    handlePausePlaybackAnalytics();
    const current = closure_27.current;
    if (null != current) {
      current.onPause();
    }
  }, items11);
  const items13 = [quest, flag, contentInsets];
  const callback12 = contentInsets.useCallback((arg0) => {
    handleBufferAnalytics(arg0);
    const current = closure_27.current;
    if (null != current) {
      current.onBuffer(arg0);
    }
  }, items12);
  const items14 = [memo1, memo];
  const callback13 = contentInsets.useCallback((currentTime) => {
    let obj = { quest, currentTime, visible: flag };
    obj = {};
    let top;
    if (null != contentInsets) {
      top = contentInsets.top;
    }
    let num = 0;
    if (null != top) {
      num = top;
    }
    obj.top = num;
    let bottom;
    if (null != contentInsets) {
      bottom = contentInsets.bottom;
    }
    let num2 = 0;
    if (null != bottom) {
      num2 = bottom;
    }
    obj.bottom = num2;
    let left;
    if (null != contentInsets) {
      left = contentInsets.left;
    }
    let num3 = 0;
    if (null != left) {
      num3 = left;
    }
    obj.left = num3;
    let right;
    if (null != contentInsets) {
      right = contentInsets.right;
    }
    let num4 = 0;
    if (null != right) {
      num4 = right;
    }
    obj.right = num4;
    obj.style = obj;
    return questTaskDetails(onLoad(onToggleFullscreen[17]).VideoQuestCaptions, obj);
  }, items13);
  const memo2 = contentInsets.useMemo(() => {
    let tmp = null;
    if (null != memo) {
      const obj = {};
      let url;
      if (null != memo1) {
        url = memo1.url;
      }
      if (null == url) {
        url = memo.url;
      }
      obj.uri = url;
      tmp = obj;
    }
    return tmp;
  }, items14);
  const items15 = [onToggleFullscreen, orientation];
  if (null == memo2) {
    return null;
  } else {
    obj = { source: memo2, httpEngine: rnvHttpEngine, initialProgress: tmp15, contentDuration: targetSeconds, allowUnrestrictedSeeking: tmp4, disableResumeOnLoad: tmp4, style, isFullscreen, externallyPaused, contentInsets, renderCaptions: callback13, onLoadStart: callback6, onLoad: callback2, onReadyForDisplay: callback1, onSeek: callback3, onBuffer: callback12, onError: callback7, onEnd: callback5, onPlayerStateChange: callback, onResumePlayback: callback10, onPausePlayback: callback11, onProgress: callback4, onVideoTracks: callback8, onVideoLayout: callback9, videoRef: ref };
    let str2 = "top-left";
    if ("landscape" === orientation) {
      str2 = "center";
    }
    obj.bufferingSpinnerPlacement = str2;
    obj.captionsEnabled = flag;
    let tmp43 = tmp45;
    if ("landscape" === orientation) {
      tmp43 = hasCaptionAsset;
    }
    obj.showCaptionsButton = tmp43;
    let tmp44 = tmp45;
    if ("landscape" === orientation) {
      tmp44 = flag2;
    }
    obj.showTranscriptButton = tmp44;
    obj.showFullscreenButton = "landscape" === orientation;
    obj.showProgress = "landscape" === orientation;
    obj.onToggleCaptions = handleToggleCaptions;
    obj.onOpenTranscript = handleOpenTranscript;
    obj.onToggleFullscreen = tmp42;
    return questTaskDetails(onLoad(onToggleFullscreen[9]).AdVideoPlayer, obj);
  }
  const obj5 = onLoad(onToggleFullscreen[12]);
});
let result = require("_toPropertyKey").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerRefactor.tsx");

export const PlayerState = require("getSafeAreaInsetOrPadding").PlayerState;
export const VideoQuestPlayer = memoResult;
