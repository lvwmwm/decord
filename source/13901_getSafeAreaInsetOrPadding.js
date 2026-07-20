// Module ID: 13901
// Function ID: 105201
// Name: getSafeAreaInsetOrPadding
// Dependencies: []

// Module 13901 (getSafeAreaInsetOrPadding)
let StyleSheet;
function getSafeAreaInsetOrPadding(arg0, arg1) {
  return Math.max(arg0[arg1], obj[arg1]);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet, Pressable: closure_6, ActivityIndicator: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const QuestsExperimentLocations = arg1(dependencyMap[5]).QuestsExperimentLocations;
const tmp2 = arg1(dependencyMap[2]);
({ AppStates: closure_11, ComponentActions: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[7]));
let obj = { left: importDefault(dependencyMap[8]).space.PX_16, right: importDefault(dependencyMap[8]).space.PX_16, top: importDefault(dependencyMap[8]).space.PX_16, bottom: importDefault(dependencyMap[8]).space.PX_16 };
let closure_16 = importAllResult.memo(importDefault(dependencyMap[9]));
let closure_17 = { code: "function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
let closure_18 = () => {
  function hasVideoEnded(arg0, arg1) {
    return arg0 >= arg1 - 1;
  }
  hasVideoEnded.__closure = {};
  hasVideoEnded.__workletHash = 3281537893520;
  hasVideoEnded.__initData = closure_17;
  return hasVideoEnded;
}();
let closure_19 = { code: "function canSeekForward_VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}" };
let closure_20 = () => {
  function canSeekForward(arg0, arg1, arg2, arg3) {
    let tmp = arg3;
    let tmp2 = !callback(arg0, arg2);
    if (tmp2) {
      if (!tmp) {
        tmp = arg0 <= arg1 - 1;
      }
      tmp2 = tmp;
    }
    return tmp2;
  }
  canSeekForward.__closure = { hasVideoEnded: closure_18 };
  canSeekForward.__workletHash = 741911733910;
  canSeekForward.__initData = closure_19;
  return canSeekForward;
}();
let obj2 = arg1(dependencyMap[10]);
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = {};
obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2["backgroundColor"] = importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST;
obj2["justifyContent"] = "center";
obj2["alignItems"] = "center";
obj.loadingContainer = obj2;
obj.bufferingSpinner = { position: "absolute" };
const obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3["justifyContent"] = "center";
obj3["alignItems"] = "center";
obj.bufferingSpinnerCentered = obj3;
obj.video = { <string:1140607356>: 30271555, <string:1751293292>: 22092032 };
obj.videoContainer = { _secureFramesTransitionPrepareCount: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006919153853686053, visible: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391320984753, hasSpoiler: 139264.00004577637 };
const obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const obj1 = {};
const tmp4 = arg1(dependencyMap[7]);
const importDefaultResult = importDefault(dependencyMap[11]);
const importDefaultResultResult = importDefault(dependencyMap[11])(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK);
obj4["backgroundColor"] = importDefault(dependencyMap[11])(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK).alpha(0.5).hex();
obj4["justifyContent"] = "center";
obj4["alignItems"] = "center";
obj4["flexDirection"] = "column";
obj.controls = obj4;
const obj5 = { 1638710865: "isArray", -1582345780: "NOTIFICATION_SETTINGS_MODAL_OPEN", 1498521697: "isArray", 1446732546: "isArrayBuffer", 103043498: "540091c70b333c8b8937ba1627138192", -28204959: "wumpus-pikachu", padding: importDefault(dependencyMap[8]).space.PX_8 };
obj.controlsTopBottom = obj5;
const alphaResult = importDefault(dependencyMap[11])(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK).alpha(0.5);
obj.controlsMiddle = { gap: importDefault(dependencyMap[8]).space.PX_24 };
obj.controlsTop = { top: 0 };
obj.controlsBottom = { bottom: 0 };
const obj6 = { gap: importDefault(dependencyMap[8]).space.PX_24 };
obj.progressContainer = { height: importDefault(dependencyMap[8]).space.PX_16 };
const obj8 = { "Null": 0, "Null": 11, "Null": 4, "Null": "Explosion 3", id: 1, ii: 1, in: null, backgroundColor: importDefault(dependencyMap[8]).colors.WHITE, shadowOffset: { aze: false, azj: true } };
obj.progress = obj8;
const obj7 = { height: importDefault(dependencyMap[8]).space.PX_16 };
obj.icon = { color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
const obj9 = { color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
obj.iconDisabled = { color: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE };
const obj10 = { color: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE };
obj.controlButton = { padding: importDefault(dependencyMap[8]).space.PX_8 };
let closure_21 = obj2.createStyles(obj);
const obj12 = { PAUSED: "paused", PLAYING: "playing", ENDED: "ended", LOADING: "loading", ERRORED: "errored" };
let closure_23 = { code: "function shouldShowControls_VideoQuestPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused}=this.__closure;return hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);}" };
let closure_24 = { code: "function VideoQuestPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_25 = { code: "function VideoQuestPlayerTsx5(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+\"%\",timingFast,'animate-always')};}" };
const obj11 = { padding: importDefault(dependencyMap[8]).space.PX_8 };
const memoResult = importAllResult.memo((onLoad) => {
  let contentInsets;
  let externallyPaused;
  let handleOpenTranscript;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let isBuffering;
  let isFullscreen;
  let sourceQuestContent;
  let style;
  let toggleBuffering;
  onLoad = onLoad.onLoad;
  const arg1 = onLoad;
  const onEnd = onLoad.onEnd;
  const importDefault = onEnd;
  const onToggleFullscreen = onLoad.onToggleFullscreen;
  const dependencyMap = onToggleFullscreen;
  const orientation = onLoad.orientation;
  let callback = orientation;
  ({ contentInsets, isFullscreen, externallyPaused } = onLoad);
  const importAllResult = externallyPaused;
  let flag = onLoad.captionsEnabled;
  ({ style, handleToggleCaptions, handleOpenTranscript } = onLoad);
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
  let ref;
  let quest;
  let questTaskDetails;
  let closure_8;
  let callback2;
  let QuestsExperimentLocations;
  let first;
  let closure_12;
  let targetSeconds;
  let tmp16;
  let obj;
  let closure_16;
  let closure_17;
  let callback3;
  let closure_19;
  let callback4;
  let callback5;
  let constants;
  let closure_23;
  let closure_24;
  let closure_25;
  let getSafeAreaInsetOrPadding;
  let tmp25;
  let sharedValue1;
  let closure_29;
  let handleEndAnalytics;
  let handleErrorAnalytics;
  let handleLoadAnalytics;
  let handleLoadStartAnalytics;
  let handlePausePlaybackAnalytics;
  let handleProgressAnalytics;
  let handleReadyForDisplayAnalytics;
  let handleResumePlaybackAnalytics;
  let handleSeekAnalytics;
  let ref1;
  let id;
  let gameTitle;
  let url1;
  let videoTitle;
  let str;
  let rnvHttpEngine;
  let closure_46;
  callback2 = undefined;
  callback4 = undefined;
  let callback6;
  let callback7;
  let tmp52;
  let ref2;
  let ref3;
  toggleBuffering = undefined;
  let top1 = callback5();
  ref = importAllResult.useRef(null);
  obj = arg1(dependencyMap[12]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  let obj1 = arg1(dependencyMap[13]);
  questTaskDetails = obj1.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  closure_8 = tmp6;
  const items = [quest];
  const memo = importAllResult.useMemo(() => onLoad(onToggleFullscreen[14]).getQuestAsset(quest, onLoad(onToggleFullscreen[14]).QuestAssetType.VIDEO_PLAYER_VIDEO, undefined, true), items);
  callback2 = memo;
  const items1 = [quest];
  const memo1 = importAllResult.useMemo(() => onLoad(onToggleFullscreen[14]).getQuestAsset(quest, onLoad(onToggleFullscreen[14]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS, undefined, true), items1);
  QuestsExperimentLocations = memo1;
  let url;
  if (null != memo1) {
    url = memo1.url;
  }
  if (null != url) {
    let VIDEO_PLAYER_VIDEO = arg1(dependencyMap[14]).QuestAssetType.VIDEO_PLAYER_VIDEO_HLS;
  } else {
    VIDEO_PLAYER_VIDEO = arg1(dependencyMap[14]).QuestAssetType.VIDEO_PLAYER_VIDEO;
  }
  const tmp14 = callback(importAllResult.useState(questTaskDetails.targetSeconds), 2);
  first = tmp14[0];
  closure_12 = tmp14[1];
  targetSeconds = questTaskDetails.targetSeconds;
  tmp16 = callback2((setVideoProgress) => setVideoProgress.setVideoProgress);
  const tmp17 = callback2((arg0) => {
    let tmp = arg0.videoProgress[closure_6.id];
    if (null == tmp) {
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration: first, maxTimestampSec: questTaskDetails.progressSeconds };
      tmp = obj;
    }
    return tmp;
  }, arg1(dependencyMap[15]).shallow);
  obj = tmp17;
  const tmp18 = callback(importAllResult.useState(constants.LOADING), 2);
  const first1 = tmp18[0];
  closure_16 = first1;
  closure_17 = tmp18[1];
  callback3 = importAllResult.useRef(false);
  const tmp20 = callback(importAllResult.useState(false), 2);
  let first2 = tmp20[0];
  closure_19 = first2;
  callback4 = tmp20[1];
  callback5 = importAllResult.useRef(questTaskDetails.progressSeconds);
  constants = importAllResult.useRef([]);
  closure_23 = importAllResult.useRef(null);
  closure_24 = importAllResult.useRef(0);
  if (first2) {
    first2 = first1 === constants.ENDED;
  }
  if (first2) {
    first2 = callback3(tmp17.timestampSec, tmp17.duration);
  }
  closure_25 = first2;
  let obj2 = arg1(dependencyMap[16]);
  const sharedValue = obj2.useSharedValue(false);
  getSafeAreaInsetOrPadding = sharedValue;
  tmp25 = () => {
    function shouldShowControls() {
      let tmp = closure_19;
      if (closure_19) {
        let value = closure_26.get();
        if (!value) {
          value = closure_16 === constants.PAUSED;
        }
        if (!value) {
          value = closure_16 === constants.ENDED;
        }
        if (!value) {
          value = closure_16 === constants.ERRORED;
        }
        if (!value) {
          value = closure_25;
        }
        if (!value) {
          value = closure_4;
        }
        tmp = value;
      }
      return tmp;
    }
    shouldShowControls.__closure = { hasLoaded: first2, showControls: sharedValue, playerState: first1, PlayerState: closure_22, isVideoEnded: first2, externallyPaused };
    shouldShowControls.__workletHash = 11602236169344;
    shouldShowControls.__initData = closure_23;
    return shouldShowControls;
  }();
  let obj3 = arg1(dependencyMap[16]);
  class K {
    constructor() {
      tmp = f105212();
      obj = {};
      obj2 = onLoad(onToggleFullscreen[17]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj.opacity = obj2.withSpring(num, onLoad(onToggleFullscreen[18]).SUBTLE_SPRING);
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  obj = { shouldShowControls: tmp25, withSpring: arg1(dependencyMap[17]).withSpring, SUBTLE_SPRING: arg1(dependencyMap[18]).SUBTLE_SPRING };
  K.__closure = obj;
  K.__workletHash = 6174625876255;
  K.__initData = closure_24;
  const animatedStyle = obj3.useAnimatedStyle(K);
  let obj5 = arg1(dependencyMap[16]);
  sharedValue1 = obj5.useSharedValue(0);
  let obj6 = arg1(dependencyMap[16]);
  class W {
    constructor() {
      obj = {};
      obj2 = onLoad(onToggleFullscreen[19]);
      result = 100 * closure_28.get();
      obj.width = obj2.withTiming(`${tmp}%`, onLoad(onToggleFullscreen[20]).timingFast, "animate-always");
      return obj;
    }
  }
  obj = { withTiming: arg1(dependencyMap[19]).withTiming, progress: sharedValue1, timingFast: arg1(dependencyMap[20]).timingFast };
  W.__closure = obj;
  W.__workletHash = 4647711667921;
  W.__initData = closure_25;
  const animatedStyle1 = obj6.useAnimatedStyle(W);
  closure_29 = importAllResult.useRef(-1);
  const items2 = [sharedValue];
  callback = importAllResult.useCallback((arg0) => {
    const onLoad = arg0;
    return (arg0) => {
      const items = [...arguments];
      clearTimeout(ref.current);
      const result = closure_26.set(true);
      ref.current = setTimeout(() => {
        const result = closure_26.set(false);
      }, 2000);
      if (null != arg0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
    };
  }, items2);
  obj1 = { duration: first, isQuestCompleted: tmp6, playerState: first1, questId: quest.id, videoSessionId: videoQuestModalContext.videoSessionId, videoAssetId: VIDEO_PLAYER_VIDEO, sourceQuestContent };
  const tmp31 = importDefault(dependencyMap[21])(obj1);
  handleEndAnalytics = tmp31.handleEndAnalytics;
  handleErrorAnalytics = tmp31.handleErrorAnalytics;
  handleLoadAnalytics = tmp31.handleLoadAnalytics;
  handleLoadStartAnalytics = tmp31.handleLoadStartAnalytics;
  handlePausePlaybackAnalytics = tmp31.handlePausePlaybackAnalytics;
  handleProgressAnalytics = tmp31.handleProgressAnalytics;
  handleReadyForDisplayAnalytics = tmp31.handleReadyForDisplayAnalytics;
  handleResumePlaybackAnalytics = tmp31.handleResumePlaybackAnalytics;
  handleSeekAnalytics = tmp31.handleSeekAnalytics;
  ref1 = importAllResult.useRef(null);
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
  let obj9 = arg1(dependencyMap[22]);
  const defaultWatchVideoTask = obj9.getDefaultWatchVideoTask(quest.config);
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
  let obj10 = arg1(dependencyMap[23]);
  rnvHttpEngine = obj10.useRnvHttpEngine();
  const items3 = [id, gameTitle, targetSeconds, url1, videoTitle, str, rnvHttpEngine];
  const effect = importAllResult.useEffect(() => {
    if (null != ref.current) {
      if (null != url1) {
        if (0 !== url1.length) {
          let obj = onLoad(onToggleFullscreen[24]);
          obj = { location: memo1.VIDEO_MODAL_MOBILE };
          if (obj.getVideoQoEMetricsConfig(obj).externalAnalyticsEnabled) {
            const constants = onLoad(onToggleFullscreen[25]).getConstants();
            let tmp10;
            if (null != rnvHttpEngine) {
              const muxExperimentDimension = onLoad(onToggleFullscreen[23]).getMuxExperimentDimension();
              if (null != muxExperimentDimension) {
                tmp10 = muxExperimentDimension;
              }
              const obj4 = onLoad(onToggleFullscreen[23]);
            }
            obj = { videoRef: ref.current, feature: "quests" };
            ({ Version: obj5.appVersion, ReleaseChannel: obj5.releaseChannel } = constants);
            const obj1 = { contentId: url1, videoStreamType: "quests", contentType: "quests", durationMs: 1000 * targetSeconds, title: videoTitle, questId: id, gameName: gameTitle, experimentName: tmp10 };
            obj.contentMetadata = obj1;
            const MobileMuxWrapper = onLoad(onToggleFullscreen[24]).MobileMuxWrapper;
            const prototype = MobileMuxWrapper.prototype;
            const mobileMuxWrapper = new MobileMuxWrapper(obj);
            ref1.current = mobileMuxWrapper;
            const current = ref1.current;
            current.initialize();
            return () => {
              if (null != ref2.current) {
                const current = ref2.current;
                current.onProgress(ref.current);
                const current2 = ref2.current;
                current2.destroy();
                ref2.current = null;
              }
            };
          }
        }
      }
    }
  }, items3);
  const tmp40 = callback(importAllResult.useState(false), 2);
  closure_46 = tmp40[1];
  const items4 = [handleReadyForDisplayAnalytics];
  const items5 = [tmp17.maxTimestampSec];
  const callback1 = importAllResult.useCallback(() => {
    handleReadyForDisplayAnalytics();
    const current = ref1.current;
    if (null != current) {
      current.onReadyForDisplay();
    }
    callback3(true);
  }, items4);
  callback2 = importAllResult.useCallback((arg0) => {
    if (null != ref.current) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, Math.min(arg0, tmp17.maxTimestampSec));
      if (obj.isAndroid()) {
        ref3.current = (ref3.current + 1) % 100;
        const current2 = ref.current;
        current2.seek(bound + 0.0001 * ref3.current);
      } else {
        const current = ref.current;
        current.seek(bound);
      }
      closure_23.current = bound;
      const obj = onLoad(onToggleFullscreen[26]);
    }
  }, items5);
  const items6 = [null != completedAt, tmp17.timestampSec, handleLoadAnalytics, onLoad, callback2];
  const items7 = [first1, handlePausePlaybackAnalytics, handleResumePlaybackAnalytics, first2, callback2];
  callback3 = importAllResult.useCallback((arg0) => {
    let duration;
    let naturalSize;
    let trackId;
    let videoTracks;
    ({ duration, videoTracks, trackId, naturalSize } = arg0);
    lib(duration);
    callback2(true);
    handleLoadAnalytics();
    const current = ref1.current;
    if (null != current) {
      current.onLoad(duration);
    }
    if (null != naturalSize) {
      const current2 = ref1.current;
      if (null != current2) {
        const result = current2.updateVideoSourceDimensions(naturalSize.width, naturalSize.height);
      }
    }
    let tmp7 = null != videoTracks;
    if (tmp7) {
      tmp7 = videoTracks.length > 0;
    }
    if (tmp7) {
      tmp7 = null != trackId;
    }
    if (tmp7) {
      tmp7 = trackId.length > 0;
    }
    if (tmp7) {
      const current3 = ref1.current;
      if (null != current3) {
        current3.onVideoTrackChange(trackId, videoTracks);
      }
    }
    if (null != ref.current) {
      const timestampSec = tmp17.timestampSec;
      let tmp12 = !tmp6;
      if (!tmp6) {
        tmp12 = timestampSec > 5;
      }
      if (tmp12) {
        tmp12 = timestampSec < duration - 3;
      }
      if (tmp12) {
        callback2(timestampSec - 1);
      }
      const tmp17 = callback(closure_22.PLAYING);
      if (null != onLoad) {
        onLoad(arg0);
      }
    }
  }, items6);
  callback4 = importAllResult.useCallback(() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.shouldRestartVideo;
    if (flag === undefined) {
      flag = true;
    }
    if (first1 !== closure_22.ERRORED) {
      if (first1 !== closure_22.PAUSED) {
        if (first1 !== closure_22.LOADING) {
          if (first1 === closure_22.PLAYING) {
            callback(closure_22.PAUSED);
            handlePausePlaybackAnalytics();
            const current3 = ref1.current;
            if (null != current3) {
              current3.onPause();
            }
          }
        }
      }
      callback(closure_22.PLAYING);
      handleResumePlaybackAnalytics();
      const current = ref1.current;
      if (null != current) {
        current.onPlay();
      }
    }
    callback2(0);
    callback(closure_22.PLAYING);
    handleResumePlaybackAnalytics();
    const current2 = ref1.current;
    if (null != current2) {
      current2.onPlay();
    }
  }, items7);
  const items8 = [callback4];
  const items9 = [first1, handlePausePlaybackAnalytics];
  callback5 = importAllResult.useCallback(() => callback4(), items8);
  callback6 = importAllResult.useCallback(() => {
    closure_18.current = false;
    if (first1 === closure_22.PLAYING) {
      closure_18.current = true;
      callback(closure_22.PAUSED);
      handlePausePlaybackAnalytics();
      const current = ref1.current;
      if (null != current) {
        current.onPause();
      }
    }
  }, items9);
  const items10 = [first1, handleResumePlaybackAnalytics];
  callback7 = importAllResult.useCallback(() => {
    if (ref.current) {
      ref.current = false;
      if (first1 !== closure_22.ERRORED) {
        callback(closure_22.PLAYING);
        handleResumePlaybackAnalytics();
        const current = ref1.current;
        if (null != current) {
          current.onPlay();
        }
      }
    }
  }, items10);
  const items11 = [callback6, callback7];
  const effect1 = importAllResult.useEffect(() => {
    const ComponentDispatch = onLoad(onToggleFullscreen[27]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(lib.QUEST_GAME_LINK_OPENED, callback6);
    const ComponentDispatch2 = onLoad(onToggleFullscreen[27]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(lib.QUEST_APP_STORE_OVERLAY_FINISHED, callback7);
    return () => {
      const ComponentDispatch = callback(closure_2[27]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.QUEST_GAME_LINK_OPENED, closure_49);
      const ComponentDispatch2 = callback(closure_2[27]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.QUEST_APP_STORE_OVERLAY_FINISHED, closure_50);
    };
  }, items11);
  const items12 = [onToggleFullscreen, orientation];
  const items13 = [sharedValue, callback4];
  const callback8 = importAllResult.useCallback(() => {
    if (null != onToggleFullscreen) {
      const obj = { orientation };
      onToggleFullscreen(obj);
    }
  }, items12);
  const items14 = [first, sharedValue1, handleSeekAnalytics, quest.id, tmp16];
  const callback9 = importAllResult.useCallback(() => {
    if (sharedValue.get()) {
      const result = sharedValue.set(false);
    }
    callback4({ shouldRestartVideo: false });
  }, items13);
  tmp52 = first1 === constants.ERRORED;
  const callback10 = importAllResult.useCallback((currentTime) => {
    let current = closure_22.current;
    const arr = current.shift();
    let tmp2 = null;
    if (null != arr) {
      tmp2 = arr;
    }
    if (null != ref.current) {
      closure_21.current = currentTime.currentTime;
      closure_23.current = null;
      if (first > 0) {
        const result = sharedValue1.set(currentTime.currentTime / first);
        tmp16(quest.id, currentTime.currentTime, first);
      }
      handleSeekAnalytics(tmp2, currentTime.currentTime);
      current = ref1.current;
      if (null != current) {
        current.updatePlayheadTime(currentTime.currentTime);
      }
      const current2 = ref1.current;
      if (null != current2) {
        current2.onSeek();
      }
    }
  }, items14);
  if (!tmp52) {
    tmp52 = !callback4(tmp17.timestampSec, tmp17.maxTimestampSec, tmp17.duration, tmp6);
  }
  const items15 = [callback2, first, sharedValue1, tmp52];
  const items16 = [callback2, first, sharedValue1, first1];
  const callback11 = importAllResult.useCallback(() => {
    if (!tmp52) {
      let current = ref2.current;
      if (null == current) {
        current = sharedValue1.get() * first;
      }
      current = closure_22.current;
      current.push(current);
      callback2(current + 10);
    }
  }, items15);
  const tmp25Result = tmp25();
  const callbackResult = callback(importAllResult.useCallback(() => {
    let current = ref2.current;
    if (null == current) {
      current = sharedValue1.get() * first;
    }
    current = closure_22.current;
    current.push(current);
    callback2(current - 10);
    if (first1 === closure_22.ENDED) {
      callback(closure_22.PLAYING);
    }
  }, items16));
  ref2 = importAllResult.useRef(0);
  ref3 = importAllResult.useRef(0);
  const items17 = [sharedValue1, quest, ref2, ref3, questTaskDetails.taskType, tmp16, handleProgressAnalytics];
  const items18 = [first, quest, handleEndAnalytics, onEnd];
  const callback12 = importAllResult.useCallback((seekableDuration) => {
    let num = 0;
    if (0 !== seekableDuration.seekableDuration) {
      num = seekableDuration.currentTime / seekableDuration.seekableDuration;
    }
    closure_21.current = seekableDuration.currentTime;
    if (seekableDuration.currentTime >= ref2.current) {
      onLoad(onToggleFullscreen[28]).sendVideoProgress(quest, seekableDuration.currentTime);
      handleProgressAnalytics(num, seekableDuration.seekableDuration, seekableDuration.currentTime);
      const _Math = Math;
      const sum = seekableDuration.currentTime + 6;
      ref2.current = sum + 2 * Math.random();
      const obj2 = onLoad(onToggleFullscreen[28]);
      const tmp16 = ref2;
    }
    if (seekableDuration.currentTime >= ref3.current) {
      const result = onLoad(onToggleFullscreen[29]).updateOptimisticProgress(quest.id, questTaskDetails.taskType, seekableDuration.currentTime);
      ref3.current = seekableDuration.currentTime + 1;
      const obj = onLoad(onToggleFullscreen[29]);
    }
    tmp16(quest.id, seekableDuration.currentTime, seekableDuration.seekableDuration);
    const result1 = sharedValue1.set(num);
    const current = ref1.current;
    if (null != current) {
      current.onProgress(seekableDuration.currentTime);
    }
  }, items17);
  const items19 = [handleLoadStartAnalytics];
  const callback13 = importAllResult.useCallback(() => {
    onLoad(onToggleFullscreen[28]).sendVideoProgress(quest, first);
    handleEndAnalytics();
    callback(closure_22.ENDED);
    const current = ref1.current;
    if (null != current) {
      current.onProgress(first);
    }
    const current2 = ref1.current;
    if (null != current2) {
      current2.onEnd();
    }
    if (null != onEnd) {
      onEnd();
    }
  }, items18);
  const items20 = [handleErrorAnalytics];
  const callback14 = importAllResult.useCallback(() => {
    callback(closure_22.LOADING);
    handleLoadStartAnalytics();
    const current = ref1.current;
    if (null != current) {
      current.onLoadStart();
    }
    const current2 = ref1.current;
    if (null != current2) {
      current2.onPlay();
    }
  }, items19);
  const callback15 = importAllResult.useCallback((arg0) => {
    callback(closure_22.ERRORED);
    handleErrorAnalytics(arg0);
    const current = ref1.current;
    if (null != current) {
      current.onError(arg0);
    }
  }, items20);
  const callback16 = importAllResult.useCallback((videoTracks) => {
    let tmp = null != videoTracks && null != videoTracks.videoTracks;
    if (tmp) {
      tmp = videoTracks.videoTracks.length > 0;
    }
    if (tmp) {
      tmp = null != videoTracks.selectedVideoTrackId;
    }
    if (tmp) {
      tmp = videoTracks.selectedVideoTrackId.length > 0;
    }
    if (tmp) {
      const current = ref1.current;
      if (null != current) {
        current.onVideoTrackChange(videoTracks.selectedVideoTrackId, videoTracks.videoTracks);
      }
    }
  }, []);
  const callback17 = importAllResult.useCallback((nativeEvent) => {
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
          const current = ref1.current;
          if (null != current) {
            const result = current.updateVideoDimensions(width, height);
          }
        }
      }
    }
  }, []);
  let obj11 = arg1(dependencyMap[30]);
  const items21 = [closure_8];
  const tmp66 = obj11.useStateFromStores(items21, () => tmp6.getState()) === first.ACTIVE;
  const items22 = [memo1, memo];
  const memo2 = importAllResult.useMemo(() => {
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
  }, items22);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const onLoad = ref.current;
      return () => {
        let tmp2 = tmp;
        if (null != current) {
          tmp2 = null == current.setNativeProps;
        }
        if (!tmp2) {
          let obj = { paused: true };
          obj = { uri: null };
          obj.src = obj;
          current.setNativeProps(obj);
        }
      };
    }
    const obj = onLoad(onToggleFullscreen[26]);
  }, []);
  let tmp69 = !tmp66;
  if (tmp66) {
    tmp69 = first1 === constants.PAUSED;
  }
  if (!tmp69) {
    tmp69 = first1 === constants.LOADING;
  }
  if (!tmp69) {
    tmp69 = externallyPaused;
  }
  const callbackResult1 = callback(callback11);
  ({ isBuffering, toggleBuffering } = function useBufferingState(handleBufferAnalytics) {
    handleBufferAnalytics = handleBufferAnalytics.handleBufferAnalytics;
    const onLoad = handleBufferAnalytics;
    const videoQoETracker = handleBufferAnalytics.videoQoETracker;
    const onEnd = videoQoETracker;
    let closure_2 = externallyPaused.useRef(false);
    const tmp = orientation(externallyPaused.useState(false), 2);
    const orientation = tmp[1];
    const items = [handleBufferAnalytics, videoQoETracker];
    return {
      isBuffering: tmp[0],
      toggleBuffering: externallyPaused.useCallback((current) => {
        callback(current);
        if (current !== ref.current) {
          ref.current = current;
          handleBufferAnalytics(current);
          current = videoQoETracker.current;
          if (null != current) {
            current.onBuffer(current);
          }
        }
      }, items)
    };
  }({ handleBufferAnalytics: tmp31.handleBufferAnalytics, videoQoETracker: ref1 }));
  const items23 = [toggleBuffering, first1];
  const items24 = [toggleBuffering];
  const callback18 = importAllResult.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        toggleBuffering(false);
      }
    } else {
      if (first1 !== closure_22.LOADING) {
        const obj = onLoad(onToggleFullscreen[26]);
      }
      toggleBuffering(true);
    }
  }, items23);
  const items25 = [toggleBuffering];
  const callback19 = importAllResult.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(true);
    }
  }, items24);
  const callback20 = importAllResult.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(false);
    }
  }, items25);
  const tmp76 = importDefault(dependencyMap[32])();
  if (null == memo2) {
    return null;
  } else {
    let tmp77 = isFullscreen;
    if (isFullscreen) {
      tmp77 = null != tmp76;
    }
    if (tmp77) {
      obj2 = { paddingRight: getSafeAreaInsetOrPadding(tmp76, "right"), paddingLeft: getSafeAreaInsetOrPadding(tmp76, "left") };
      tmp77 = obj2;
    }
    obj3 = {};
    const items26 = [top1.container, style];
    obj3.style = items26;
    obj3.accessible = false;
    const obj4 = {};
    const items27 = [top1.videoContainer];
    obj4.style = items27;
    obj4.onPress = callback9;
    obj4.accessible = !tmp25Result;
    const intl = arg1(dependencyMap[33]).intl;
    const t = arg1(dependencyMap[33]).t;
    obj4.accessibilityLabel = intl.string(tmp69 ? t.R3aFPe : t.fTMEUi);
    let tmp88 = first1 !== constants.ERRORED;
    if (tmp88) {
      obj5 = { "Null": null, "Null": "space-between", "Null": "flex-start", "Null": "heading-md/normal", "Null": "text-muted", "Null": 1.9, httpEngine: rnvHttpEngine, ref, style: top1.video, paused: tmp69, source: memo2, onBuffer: callback18, onPlaybackStalled: callback19, onPlaybackResume: callback20, onLoad: callback3, onSeek: callback10, onProgress: callback12, onLoadStart: callback14, onEnd: callback13, onError: callback15, onReadyForDisplay: callback1, onVideoTracks: callback16, onLayout: callback17, resizeMode: "contain" };
      tmp88 = targetSeconds(closure_16, obj5);
    }
    const items28 = [tmp88, , , , , ];
    obj6 = { quest, currentTime: tmp17.timestampSec, visible: flag };
    const obj7 = {};
    let top;
    if (null != contentInsets) {
      top = contentInsets.top;
    }
    let num5 = 0;
    if (null != top) {
      num5 = top;
    }
    obj7.top = num5;
    let bottom;
    if (null != contentInsets) {
      bottom = contentInsets.bottom;
    }
    let num6 = 0;
    if (null != bottom) {
      num6 = bottom;
    }
    obj7.bottom = num6;
    let left;
    if (null != contentInsets) {
      left = contentInsets.left;
    }
    let num7 = 0;
    if (null != left) {
      num7 = left;
    }
    obj7.left = num7;
    let right;
    if (null != contentInsets) {
      right = contentInsets.right;
    }
    let num8 = 0;
    if (null != right) {
      num8 = right;
    }
    obj7.right = num8;
    obj6.style = obj7;
    items28[1] = targetSeconds(arg1(dependencyMap[34]).VideoQuestCaptions, obj6);
    if (!isBuffering) {
      items28[2] = isBuffering;
      top1 = !tmp40[0];
      if (top1) {
        top1 = targetSeconds;
        top1 = ref;
        const obj8 = { style: top1.loadingContainer };
        top1 = questTaskDetails;
        obj9 = { animating: true };
        obj8.children = targetSeconds(questTaskDetails, obj9);
        top1 = targetSeconds(ref, obj8);
      }
      items28[3] = top1;
      top1 = importDefault;
      top1 = dependencyMap;
      top1 = tmp16;
      obj10 = {};
      const items29 = [top1.controls, animatedStyle];
      obj10.style = items29;
      obj10.accessible = false;
      top1 = "landscape" === orientation;
      if (top1) {
        obj11 = {};
        const items30 = [, , ];
        ({ controlsTopBottom: arr32[0], controlsTop: arr32[1] } = top1);
        items30[2] = tmp77;
        obj11.style = items30;
        if (!hasCaptionAsset) {
          const items31 = [hasCaptionAsset, ];
          if (flag2) {
            top1 = targetSeconds;
            top1 = arg1;
            top1 = dependencyMap;
            const obj12 = { accessibilityRole: "button" };
            const intl3 = arg1(dependencyMap[33]).intl;
            obj12.accessibilityLabel = intl3.string(arg1(dependencyMap[33]).t.KCzjTi);
            obj12.onPress = handleOpenTranscript;
            obj12.style = top1.controlButton;
            const obj13 = { color: top1.iconDisabled.color };
            obj12.children = targetSeconds(arg1(dependencyMap[37]).TranscriptOutlineIcon, obj13);
            flag2 = targetSeconds(arg1(dependencyMap[35]).PressableOpacity, obj12);
          }
          items31[1] = flag2;
          obj11.children = items31;
          top1 = top1(top1, obj11);
        } else {
          top1 = targetSeconds;
          top1 = arg1;
          top1 = dependencyMap;
          const obj14 = { accessibilityRole: "button" };
          const intl2 = arg1(dependencyMap[33]).intl;
          obj14.accessibilityLabel = intl2.string(arg1(dependencyMap[33]).t.bDSZO1);
          obj14.onPress = handleToggleCaptions;
          obj14.style = top1.controlButton;
          let obj15 = {};
          if (flag) {
            let color = top1.icon.color;
          } else {
            color = top1.iconDisabled.color;
          }
          obj15.color = color;
          obj15 = top1(arg1(dependencyMap[36]).ClosedCaptionsOutlineIcon, obj15);
          obj14.children = obj15;
          top1 = top1(arg1(dependencyMap[35]).PressableOpacity, obj14);
        }
      }
      const items32 = [top1, , ];
      const obj16 = { style: top1.controlsMiddle };
      top1 = arg1;
      top1 = dependencyMap;
      top1 = tmp16;
      top1 = ref;
      top1 = targetSeconds;
      const obj17 = {};
      top1 = constants;
      obj17.disabled = first1 === constants.ERRORED;
      obj17.accessibilityRole = "button";
      const intl4 = arg1(dependencyMap[33]).intl;
      obj17.accessibilityLabel = intl4.string(arg1(dependencyMap[33]).t.r9s3Uv);
      obj17.onPress = callbackResult;
      const obj18 = { GATEWAY_BRIDGE_TIMEOUT: "/assets/.cache/intl/aW50bA==", headerGuildIcon: null, responderRelease: "66d1e4125b6e3fe86e5116b45518629e", color: top1.icon.color };
      obj17.children = targetSeconds(arg1(dependencyMap[39]).SkipBackwardIcon, obj18);
      const items33 = [targetSeconds(arg1(dependencyMap[38]).VideoQuestPlayerControlButton, obj17), , ];
      const obj19 = { accessibilityRole: "button" };
      if (!first2) {
        top1 = constants;
        if (first1 !== constants.ERRORED) {
          top1 = arg1;
          top1 = dependencyMap;
          const t2 = arg1(dependencyMap[33]).t;
          let K0e7M9 = tmp69 ? t2.R3aFPe : t2.fTMEUi;
        }
        obj19.accessibilityLabel = top1(K0e7M9);
        obj19.onPress = callback5;
        if (!first2) {
          top1 = constants;
          if (first1 !== constants.ERRORED) {
            top1 = arg1;
            top1 = dependencyMap;
            top1 = targetSeconds;
            if (tmp69) {
              let PauseIcon = top1(top1[41]).PlayIcon;
            } else {
              PauseIcon = top1(top1[42]).PauseIcon;
            }
            const obj20 = { size: "lg" };
            top1 = top1(PauseIcon, obj20);
          }
          obj19.children = top1;
          items33[1] = top1(arg1(dependencyMap[38]).VideoQuestPlayerControlButton, obj19);
          top1 = targetSeconds;
          top1 = arg1;
          top1 = dependencyMap;
          const obj21 = { disabled: tmp52, accessibilityRole: "button" };
          const intl5 = arg1(dependencyMap[33]).intl;
          obj21.accessibilityLabel = intl5.string(arg1(dependencyMap[33]).t.zWDcNP);
          obj21.onPress = callbackResult1;
          const obj22 = { GATEWAY_BRIDGE_TIMEOUT: "/assets/.cache/intl/aW50bA==", headerGuildIcon: null, responderRelease: "66d1e4125b6e3fe86e5116b45518629e", color: top1.icon.color };
          obj21.children = targetSeconds(arg1(dependencyMap[43]).SkipForwardIcon, obj22);
          items33[2] = targetSeconds(arg1(dependencyMap[38]).VideoQuestPlayerControlButton, obj21);
          obj16.children = items33;
          items32[1] = top1(top1, obj16);
          if (top1) {
            top1 = targetSeconds;
            top1 = ref;
            const obj23 = {};
            const items34 = [, , ];
            ({ controlsTopBottom: arr36[0], controlsBottom: arr36[1] } = top1);
            items34[2] = tmp77;
            obj23.style = items34;
            top1 = arg1;
            top1 = dependencyMap;
            const obj24 = { accessibilityRole: "button" };
            const intl6 = arg1(dependencyMap[33]).intl;
            obj24.accessibilityLabel = intl6.string(arg1(dependencyMap[33]).t.vKZT5t);
            obj24.onPress = callback8;
            obj24.style = top1.controlButton;
            obj24.children = targetSeconds(arg1(dependencyMap[44]).FullscreenEnterIcon, {});
            obj23.children = targetSeconds(arg1(dependencyMap[35]).PressableOpacity, obj24);
            top1 = targetSeconds(ref, obj23);
          }
          items32[2] = top1;
          obj10.children = items32;
          items28[4] = top1(importDefault(dependencyMap[16]).View, obj10);
          if (top1) {
            top1 = targetSeconds;
            top1 = ref;
            const obj25 = { style: top1.progressContainer };
            top1 = importDefault;
            top1 = dependencyMap;
            const obj26 = {};
            const items35 = [top1.progress, animatedStyle1];
            obj26.style = items35;
            obj25.children = targetSeconds(importDefault(dependencyMap[16]).View, obj26);
            top1 = targetSeconds(ref, obj25);
          }
          items28[5] = top1;
          obj4.children = items28;
          obj3.children = tmp81(tmp82, obj4);
          return tmp79(tmp80, obj3);
        }
        top1 = targetSeconds;
        top1 = arg1;
        top1 = dependencyMap;
        const obj27 = { size: "lg" };
        top1 = targetSeconds(arg1(dependencyMap[40]).RetryIcon, obj27);
      }
      top1 = arg1;
      top1 = dependencyMap;
      K0e7M9 = arg1(dependencyMap[33]).t.K0e7M9;
    } else {
      const obj28 = { animating: true };
      let items36 = [top1.bufferingSpinner, ];
      if (!isFullscreen) {
        if ("landscape" !== orientation) {
          let obj29 = {};
          top1 = undefined;
          if (null != contentInsets) {
            top1 = contentInsets.top;
          }
          let num9 = 0;
          if (null != top1) {
            num9 = top1;
          }
          obj29.top = num9;
          top1 = undefined;
          if (null != contentInsets) {
            top1 = contentInsets.left;
          }
          let num10 = 0;
          if (null != top1) {
            num10 = top1;
          }
          obj29.left = num10;
        }
        items36[1] = obj29;
        obj28.style = items36;
        top1 = importDefault;
        top1 = dependencyMap;
        items36 = importDefault(dependencyMap[8]).unsafe_rawColors.WHITE;
        obj28.color = items36;
        top1 = tmp98(tmp99, obj28);
      }
      obj29 = top1.bufferingSpinnerCentered;
    }
    const tmp79 = targetSeconds;
    const tmp80 = ref;
    const tmp81 = tmp16;
    const tmp82 = quest;
    const tmp91 = targetSeconds;
  }
});
const result = arg1(dependencyMap[45]).fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx");

export const PlayerState = obj12;
export const VideoQuestPlayer = memoResult;
