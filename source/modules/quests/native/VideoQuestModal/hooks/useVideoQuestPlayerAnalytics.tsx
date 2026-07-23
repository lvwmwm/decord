// Module ID: 14030
// Function ID: 107419
// Name: useVideoQuestPlayerAnalytics
// Dependencies: [31, 27, 4222, 653, 10468, 6959, 10474, 14031, 14032, 6945, 4979, 13931, 6837, 6842, 2]
// Exports: default

// Module 14030 (useVideoQuestPlayerAnalytics)
import result from "result";
import { AppState } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx");

export default function useVideoQuestPlayerAnalytics(duration) {
  duration = duration.duration;
  const isQuestCompleted = duration.isQuestCompleted;
  const playerState = duration.playerState;
  const questId = duration.questId;
  const sourceQuestContent = duration.sourceQuestContent;
  const videoAssetId = duration.videoAssetId;
  const videoSessionId = duration.videoSessionId;
  let closure_7 = questId.useRef(null);
  let closure_8 = questId.useRef(null);
  let obj = duration(playerState[4]);
  const questImpression = obj.useQuestImpression();
  const effect = questId.useEffect(() => {
    closure_8.current = Date.now();
  }, []);
  let items = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  const effect1 = questId.useEffect(() => {
    let closure_0 = sourceQuestContent.addEventListener("change", (arg0) => {
      if (null != outer1_7.current) {
        let obj = { questId: outer1_3 };
        if ("active" === arg0) {
          let QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_UNFOCUSED;
        }
        obj.event = QUEST_VIDEO_APP_UNFOCUSED;
        obj = { video_timestamp_seconds: outer1_7.current, video_state: outer1_2, video_session_id: outer1_6 };
        let id;
        if (null != outer1_9) {
          id = outer1_9.getId();
        }
        obj.impression_id = id;
        obj.properties = obj;
        obj.sourceQuestContent = outer1_4;
        duration(playerState[5]).trackQuestEvent(obj);
        const obj2 = duration(playerState[5]);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items);
  const items1 = [questId, videoAssetId, isQuestCompleted, videoSessionId, duration, questImpression, sourceQuestContent];
  const callback = questId.useCallback((segment_end_sec) => {
    if (null != closure_7.current) {
      let id;
      let obj = duration(playerState[5]);
      obj = { questId, event: videoSessionId.QUEST_VIDEO_SEGMENT_WATCHED };
      obj = {};
      const merged = Object.assign(segment_end_sec);
      obj["video_asset_id"] = videoAssetId;
      obj["quest_completed"] = isQuestCompleted;
      obj["video_duration_sec"] = duration;
      obj["video_progress"] = duration(playerState[6]).formatVideoProgressRatio(segment_end_sec.segment_end_sec, closure_7.current);
      obj["video_session_id"] = videoSessionId;
      if (null != questImpression) {
        id = questImpression.getId();
      }
      obj["impression_id"] = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj);
      const obj4 = duration(playerState[6]);
    }
  }, items1);
  const callback1 = questId.useCallback(() => closure_7.current, []);
  obj = { getCurrentVideoTime: callback1, onAnalytics: callback, emitIntervalMs: duration(playerState[7]).SEGMENT_ANALYTICS_EMIT_INTERVAL_MS, minSegmentDurationMs: duration(playerState[7]).SEGMENT_ANALYTICS_MIN_DURATION_MS };
  const tmp6Result = isQuestCompleted(playerState[7])(obj);
  const handlePlayerStateChange = tmp6Result.handlePlayerStateChange;
  const handleLoadEnd = tmp6Result.handleLoadEnd;
  const handleFirstFrame = tmp6Result.handleFirstFrame;
  const handleSeek = tmp6Result.handleSeek;
  const items2 = [playerState, handlePlayerStateChange];
  const effect2 = questId.useEffect(() => {
    if (duration(playerState[8]).PlayerState.PLAYING === playerState) {
      handlePlayerStateChange(duration(playerState[9]).VideoPlayerState.PLAYING, null);
    } else if (duration(playerState[8]).PlayerState.PAUSED === tmp) {
      handlePlayerStateChange(duration(playerState[9]).VideoPlayerState.PAUSED, null);
    } else if (duration(playerState[8]).PlayerState.ENDED === tmp) {
      handlePlayerStateChange(duration(playerState[9]).VideoPlayerState.ENDED, null);
    } else if (duration(playerState[8]).PlayerState.ERRORED === tmp) {
      handlePlayerStateChange(duration(playerState[9]).VideoPlayerState.PAUSED, null);
    }
  }, items2);
  let closure_14 = questId.useRef(null);
  const items3 = [handleLoadEnd, handleFirstFrame, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items4 = [handlePlayerStateChange];
  const callback2 = questId.useCallback(() => {
    let diff = null;
    if (null != ref2.current) {
      const _Date = Date;
      diff = Date.now() - ref2.current;
    }
    handleLoadEnd(diff);
    handleFirstFrame(0);
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_LOADING_ENDED };
    obj = { video_asset_id: videoAssetId, network_connection_speed: videoAssetId.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId };
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items3);
  const items5 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback3 = questId.useCallback(() => {
    handlePlayerStateChange(duration(playerState[9]).VideoPlayerState.ENDED, null);
  }, items4);
  const callback4 = questId.useCallback(() => {
    closure_14.current = Date.now();
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_LOADING_STARTED };
    obj = { video_asset_id: videoAssetId, network_connection_speed: videoAssetId.getEffectiveConnectionSpeed(), video_session_id: videoSessionId, is_hls_supported: true };
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items5);
  let closure_15 = questId.useRef(null);
  let closure_16 = questId.useRef(-1);
  const items6 = [questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items7 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback5 = questId.useCallback((arg0) => {
    const effectiveConnectionSpeed = videoAssetId.getEffectiveConnectionSpeed();
    if (arg0) {
      const _Date2 = Date;
      tmp2.current = Date.now();
      ref4.current = ref4.current + 1;
      let id;
      let obj = { questId, event: videoSessionId.QUEST_VIDEO_BUFFERING_STARTED };
      obj = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, buffer_index: ref4.current, video_session_id: videoSessionId };
      if (null != questImpression) {
        id = questImpression.getId();
      }
      obj.impression_id = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      duration(playerState[5]).trackQuestEvent(obj);
      const obj4 = duration(playerState[5]);
    } else {
      let diff = null;
      if (null != tmp2.current) {
        const _Date = Date;
        diff = Date.now() - ref3.current;
      }
      let id1;
      obj = duration(playerState[5]);
      const obj1 = { questId, event: videoSessionId.QUEST_VIDEO_BUFFERING_ENDED };
      const obj2 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, duration: diff, buffer_index: ref4.current, video_session_id: videoSessionId };
      if (null != questImpression) {
        id1 = questImpression.getId();
      }
      obj2.impression_id = id1;
      obj1.properties = obj2;
      obj1.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj1);
    }
  }, items6);
  const items8 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback6 = questId.useCallback(() => {
    if (null != ref.current) {
      let id;
      let obj = duration(playerState[5]);
      obj = { questId, event: videoSessionId.QUEST_VIDEO_TIME_TO_FIRST_FRAME };
      obj = {};
      const _Date = Date;
      obj.duration_ms = Date.now() - ref.current;
      obj.video_session_id = videoSessionId;
      obj.video_asset_id = videoAssetId;
      if (null != questImpression) {
        id = questImpression.getId();
      }
      obj.impression_id = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj);
    }
  }, items7);
  const items9 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback7 = questId.useCallback(() => {
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_RESUMED };
    obj = { video_timestamp_seconds: closure_7.current, pause_reason: duration(playerState[10]).VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId };
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items8);
  obj = { handleBufferAnalytics: callback5, handleEndAnalytics: callback3 };
  const items10 = [duration, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const callback8 = questId.useCallback(() => {
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_PAUSED };
    obj = { video_timestamp_seconds: closure_7.current, reason: duration(playerState[10]).VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId };
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items9);
  obj.handleErrorAnalytics = questId.useCallback((error) => {
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_ERROR };
    obj = {};
    const current = closure_7.current;
    let num = 0;
    if (null != current) {
      num = current;
    }
    obj.video_progress = duration(playerState[6]).formatVideoProgressRatio(duration, num);
    obj.video_error_type = null;
    obj.video_asset_id = videoAssetId;
    obj.network_connection_speed = null;
    obj.video_session_id = videoSessionId;
    let code;
    if (null != error) {
      code = error.error.code;
    }
    obj.video_error_code = code;
    let localizedDescription;
    if (null != error) {
      localizedDescription = error.error.localizedDescription;
    }
    if (null == localizedDescription) {
      let errorString;
      if (null != error) {
        errorString = error.error.errorString;
      }
      localizedDescription = errorString;
    }
    obj.video_error_message = localizedDescription;
    obj.video_network_state = null;
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
    const obj4 = duration(playerState[6]);
    const tmp = duration;
    if (obj5.isSourceError(error)) {
      const obj1 = { name: duration(playerState[13]).MetricEvents.QUEST_VIDEO_ERROR };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + questId, "error_type:SOURCE_ERROR"];
      obj1.tags = items;
      isQuestCompleted(playerState[12]).increment(obj1);
      const obj6 = isQuestCompleted(playerState[12]);
    }
  }, items10);
  obj.handleLoadAnalytics = callback2;
  obj.handleLoadStartAnalytics = callback4;
  obj.handlePausePlaybackAnalytics = callback8;
  const items11 = [questId, videoSessionId, questImpression, sourceQuestContent];
  obj.handleProgressAnalytics = questId.useCallback((progress, video_timestamp_seconds, current) => {
    closure_7.current = current;
    let obj = duration(playerState[5]);
    obj = { questId, event: videoSessionId.QUEST_VIDEO_PROGRESSED };
    obj = { progress, video_timestamp_seconds, video_session_id: videoSessionId };
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj.impression_id = id;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj);
  }, items11);
  obj.handleReadyForDisplayAnalytics = callback6;
  obj.handleResumePlaybackAnalytics = callback7;
  const items12 = [handleSeek, questId, videoSessionId, questImpression, sourceQuestContent];
  obj.handleSeekAnalytics = questId.useCallback((from_time_sec, to_time_sec) => {
    handleSeek();
    if (null != from_time_sec) {
      let obj = duration(playerState[5]);
      obj = { questId, event: videoSessionId.QUEST_VIDEO_SEEKED };
      obj = { from_time_sec, to_time_sec, video_session_id: videoSessionId };
      let id;
      if (null != questImpression) {
        id = questImpression.getId();
      }
      obj.impression_id = id;
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj);
    }
  }, items12);
  return obj;
};
