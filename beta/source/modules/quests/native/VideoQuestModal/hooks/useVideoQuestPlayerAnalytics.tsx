// Module ID: 15390
// Function ID: 15391
// Name: useVideoQuestPlayerAnalytics
// Dependencies: [19, 17, 4807, 1078, 558, 568, 11610, 7959, 11636, 15391, 15281, 7947, 5666, 15290, 5086, 5091, 2]

// Module 15390 (useVideoQuestPlayerAnalytics)
import MonitoringAgentDefault from "MonitoringAgent" /* 5086 */;
import QuestTypes from "QuestTypes" /* 5666 */;
import DiscordVideoPlayerTypes from "DiscordVideoPlayerTypes" /* 7947 */;
import AnalyticsActions from "AnalyticsActions" /* 7959 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11636 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15281 */;
import noop from "module_19" /* 19 */;
import NetworkStore from "NetworkStore" /* 4807 */;

require = fn;
const AppState = fn(17).AppState;
const AnalyticEvents = fn(1078).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((duration) => {
  const cResult = duration(playerState[5]).c(91);
  duration = duration.duration;
  const isQuestCompleted = duration.isQuestCompleted;
  playerState = duration.playerState;
  const questId = duration.questId;
  const sourceQuestContent = duration.sourceQuestContent;
  const videoAssetId = duration.videoAssetId;
  const videoSessionId = duration.videoSessionId;
  closure_7 = questId.useRef(null);
  questId.useRef(null);
  let obj = duration(playerState[5]);
  const questImpression = duration(playerState[6]).useQuestImpression();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      closure_8.current = Date.now();
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = obj2.useEffect(tmp5, tmp6);
  if (cResult[2] === questImpression) {
    if (cResult[3] === playerState) {
      if (cResult[4] === questId) {
        if (cResult[5] === sourceQuestContent) {
          if (cResult[6] === videoSessionId) {
            let tmp8 = cResult[7];
            let tmp9 = cResult[8];
          }
          const effect1 = obj2.useEffect(tmp8, tmp9);
          if (cResult[9] === duration) {
            if (cResult[10] === questImpression) {
              if (cResult[11] === isQuestCompleted) {
                if (cResult[12] === questId) {
                  if (cResult[13] === sourceQuestContent) {
                    if (cResult[14] === videoAssetId) {
                      if (cResult[15] === videoSessionId) {
                        let tmp11 = cResult[16];
                      }
                      const _Symbol = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        const fn3 = function f() {
                          return closure_7.current;
                        };
                        cResult[17] = fn3;
                        let tmp13 = fn3;
                      } else {
                        tmp13 = cResult[17];
                      }
                      if (cResult[18] !== tmp11) {
                        let obj4 = { getCurrentVideoTime: tmp13, onAnalytics: tmp11, emitIntervalMs: tmp(tmp2[9]).SEGMENT_ANALYTICS_EMIT_INTERVAL_MS, minSegmentDurationMs: tmp(tmp2[9]).SEGMENT_ANALYTICS_MIN_DURATION_MS };
                        cResult[18] = tmp11;
                        cResult[19] = obj4;
                        let tmp14 = obj4;
                      } else {
                        tmp14 = cResult[19];
                      }
                      const tmp16 = isQuestCompleted(tmp2[9])(tmp14);
                      const handlePlayerStateChange = tmp16.handlePlayerStateChange;
                      const handleLoadEnd = tmp16.handleLoadEnd;
                      const handleFirstFrame = tmp16.handleFirstFrame;
                      const handleSeek = tmp16.handleSeek;
                      if (cResult[20] === handlePlayerStateChange) {
                        if (cResult[21] === playerState) {
                          let tmp17 = cResult[22];
                          let tmp18 = cResult[23];
                        }
                        const effect2 = obj2.useEffect(tmp17, tmp18);
                        obj2.useRef(null);
                        if (cResult[24] === handleFirstFrame) {
                          if (cResult[25] === handleLoadEnd) {
                            if (cResult[26] === questImpression) {
                              if (cResult[27] === questId) {
                                if (cResult[28] === sourceQuestContent) {
                                  if (cResult[29] === videoAssetId) {
                                    if (cResult[32] !== handlePlayerStateChange) {
                                      class G {
                                        constructor() {
                                          tmp = handlePlayerStateChange(closure_0(closure_2[11]).VideoPlayerState.ENDED, null);
                                          return;
                                        }
                                      }
                                      cResult[32] = handlePlayerStateChange;
                                      class Y {
                                        constructor() {
                                          closure_14.current = Date.now();
                                          obj = closure_0(closure_2[7]);
                                          obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_STARTED, properties: null, sourceQuestContent: null };
                                          obj5 = { video_asset_id: videoAssetId, network_connection_speed: closure_5.getEffectiveConnectionSpeed(), video_session_id: videoSessionId, is_hls_supported: true, impression_id: null };
                                          obj4 = closure_9;
                                          id = undefined;
                                          if (closure_9 != null) {
                                            id = obj4.getId();
                                          }
                                          obj5.impression_id = id;
                                          obj1.properties = obj5;
                                          obj1.sourceQuestContent = sourceQuestContent;
                                          trackQuestEventResult = obj.trackQuestEvent(obj1);
                                          return;
                                        }
                                      }
                                      class F {
                                        constructor() {
                                          diff = null;
                                          if (null != closure_14.current) {
                                            tmp3 = globalThis;
                                            _Date = Date;
                                            diff = Date.now() - tmp.current;
                                          }
                                          tmp4 = handleLoadEnd(diff);
                                          tmp5 = handleFirstFrame(0);
                                          obj = closure_0(closure_2[7]);
                                          obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_ENDED, properties: null, sourceQuestContent: null };
                                          obj5 = { video_asset_id: videoAssetId, network_connection_speed: closure_5.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId, impression_id: null };
                                          obj4 = closure_9;
                                          id = undefined;
                                          if (closure_9 != null) {
                                            id = obj4.getId();
                                          }
                                          obj5.impression_id = id;
                                          obj1.properties = obj5;
                                          obj1.sourceQuestContent = sourceQuestContent;
                                          trackQuestEventResult = obj.trackQuestEvent(obj1);
                                          return;
                                        }
                                      }
                                    } else {
                                      class G {
                                        constructor() {
                                          tmp = handlePlayerStateChange(closure_0(closure_2[11]).VideoPlayerState.ENDED, null);
                                          return;
                                        }
                                      }
                                    }
                                    if (cResult[34] === questImpression) {
                                      class G {
                                        constructor() {
                                          tmp = handlePlayerStateChange(closure_0(closure_2[11]).VideoPlayerState.ENDED, null);
                                          return;
                                        }
                                      }
                                    }
                                    class Y {
                                      constructor() {
                                        closure_14.current = Date.now();
                                        obj = closure_0(closure_2[7]);
                                        obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_STARTED, properties: null, sourceQuestContent: null };
                                        obj5 = { video_asset_id: videoAssetId, network_connection_speed: closure_5.getEffectiveConnectionSpeed(), video_session_id: videoSessionId, is_hls_supported: true, impression_id: null };
                                        obj4 = closure_9;
                                        id = undefined;
                                        if (closure_9 != null) {
                                          id = obj4.getId();
                                        }
                                        obj5.impression_id = id;
                                        obj1.properties = obj5;
                                        obj1.sourceQuestContent = sourceQuestContent;
                                        trackQuestEventResult = obj.trackQuestEvent(obj1);
                                        return;
                                      }
                                    }
                                    class F {
                                      constructor() {
                                        diff = null;
                                        if (null != closure_14.current) {
                                          tmp3 = globalThis;
                                          _Date = Date;
                                          diff = Date.now() - tmp.current;
                                        }
                                        tmp4 = handleLoadEnd(diff);
                                        tmp5 = handleFirstFrame(0);
                                        obj = closure_0(closure_2[7]);
                                        obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_ENDED, properties: null, sourceQuestContent: null };
                                        obj5 = { video_asset_id: videoAssetId, network_connection_speed: closure_5.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId, impression_id: null };
                                        obj4 = closure_9;
                                        id = undefined;
                                        if (closure_9 != null) {
                                          id = obj4.getId();
                                        }
                                        obj5.impression_id = id;
                                        obj1.properties = obj5;
                                        obj1.sourceQuestContent = sourceQuestContent;
                                        trackQuestEventResult = obj.trackQuestEvent(obj1);
                                        return;
                                      }
                                    }
                                    cResult[34] = questImpression;
                                    cResult[35] = questId;
                                    cResult[36] = sourceQuestContent;
                                    cResult[37] = videoAssetId;
                                    cResult[38] = videoSessionId;
                                    cResult[39] = Y;
                                    class V {
                                      constructor() {
                                        tmp = playerState;
                                        tmp2 = closure_0;
                                        tmp3 = closure_2;
                                        if (closure_0(closure_2[10]).PlayerState.PLAYING === playerState) {
                                          tmp10 = handlePlayerStateChange;
                                          tmp11 = null;
                                          tmp12 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PLAYING, null);
                                        } else if (tmp2(tmp3[10]).PlayerState.PAUSED === tmp) {
                                          tmp7 = handlePlayerStateChange;
                                          tmp8 = null;
                                          tmp9 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PAUSED, null);
                                        } else if (tmp2(tmp3[10]).PlayerState.ENDED === tmp) {
                                          tmp4 = handlePlayerStateChange;
                                          tmp5 = null;
                                          tmp6 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.ENDED, null);
                                        } else if (tmp2(tmp3[10]).PlayerState.ERRORED === tmp) {
                                          tmp13 = handlePlayerStateChange;
                                          tmp14 = null;
                                          tmp15 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PAUSED, null);
                                        }
                                        return;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        class F {
                          constructor() {
                            diff = null;
                            if (null != closure_14.current) {
                              tmp3 = globalThis;
                              _Date = Date;
                              diff = Date.now() - tmp.current;
                            }
                            tmp4 = handleLoadEnd(diff);
                            tmp5 = handleFirstFrame(0);
                            obj = closure_0(closure_2[7]);
                            obj1 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_ENDED, properties: null, sourceQuestContent: null };
                            obj5 = { video_asset_id: videoAssetId, network_connection_speed: closure_5.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId, impression_id: null };
                            obj4 = closure_9;
                            id = undefined;
                            if (closure_9 != null) {
                              id = obj4.getId();
                            }
                            obj5.impression_id = id;
                            obj1.properties = obj5;
                            obj1.sourceQuestContent = sourceQuestContent;
                            trackQuestEventResult = obj.trackQuestEvent(obj1);
                            return;
                          }
                        }
                        cResult[24] = handleFirstFrame;
                        cResult[25] = handleLoadEnd;
                        cResult[26] = questImpression;
                        cResult[27] = questId;
                        cResult[28] = sourceQuestContent;
                        class V {
                          constructor() {
                            tmp = playerState;
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            if (closure_0(closure_2[10]).PlayerState.PLAYING === playerState) {
                              tmp10 = handlePlayerStateChange;
                              tmp11 = null;
                              tmp12 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PLAYING, null);
                            } else if (tmp2(tmp3[10]).PlayerState.PAUSED === tmp) {
                              tmp7 = handlePlayerStateChange;
                              tmp8 = null;
                              tmp9 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PAUSED, null);
                            } else if (tmp2(tmp3[10]).PlayerState.ENDED === tmp) {
                              tmp4 = handlePlayerStateChange;
                              tmp5 = null;
                              tmp6 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.ENDED, null);
                            } else if (tmp2(tmp3[10]).PlayerState.ERRORED === tmp) {
                              tmp13 = handlePlayerStateChange;
                              tmp14 = null;
                              tmp15 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PAUSED, null);
                            }
                            return;
                          }
                        }
                        cResult[30] = videoSessionId;
                        cResult[31] = F;
                      }
                      class V {
                        constructor() {
                          tmp = playerState;
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          if (closure_0(closure_2[10]).PlayerState.PLAYING === playerState) {
                            tmp10 = handlePlayerStateChange;
                            tmp11 = null;
                            tmp12 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PLAYING, null);
                          } else if (tmp2(tmp3[10]).PlayerState.PAUSED === tmp) {
                            tmp7 = handlePlayerStateChange;
                            tmp8 = null;
                            tmp9 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PAUSED, null);
                          } else if (tmp2(tmp3[10]).PlayerState.ENDED === tmp) {
                            tmp4 = handlePlayerStateChange;
                            tmp5 = null;
                            tmp6 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.ENDED, null);
                          } else if (tmp2(tmp3[10]).PlayerState.ERRORED === tmp) {
                            tmp13 = handlePlayerStateChange;
                            tmp14 = null;
                            tmp15 = handlePlayerStateChange(tmp2(tmp3[11]).VideoPlayerState.PAUSED, null);
                          }
                          return;
                        }
                      }
                      const items1 = [playerState, handlePlayerStateChange];
                      cResult[20] = handlePlayerStateChange;
                      cResult[21] = playerState;
                      cResult[22] = V;
                      cResult[23] = items1;
                      tmp18 = items1;
                      tmp17 = V;
                    }
                  }
                }
              }
            }
          }
          cResult[9] = duration;
          cResult[10] = questImpression;
          cResult[11] = isQuestCompleted;
          cResult[12] = questId;
          cResult[13] = sourceQuestContent;
          cResult[14] = videoAssetId;
          cResult[15] = videoSessionId;
          cResult[16] = tmp12;
          tmp11 = tmp12;
        }
      }
    }
  }
  const fn2 = function l() {
    closure_0 = sourceQuestContent.addEventListener("change", (event) => {
      if (null != ref.current) {
        const obj4 = { questId, event: null, properties: null, sourceQuestContent: null };
        if ("active" === event) {
          let QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_UNFOCUSED;
        }
        obj4.event = QUEST_VIDEO_APP_UNFOCUSED;
        const obj = { video_timestamp_seconds: tmp.current, video_state, video_session_id, impression_id: null };
        let id;
        if (questImpression != null) {
          id = obj2.getId();
        }
        obj.impression_id = id;
        obj4.properties = obj;
        obj4.sourceQuestContent = sourceQuestContent;
        duration(playerState[7]).trackQuestEvent(obj4);
        obj2 = questImpression;
        const obj3 = duration(playerState[7]);
      }
    });
    return () => {
      closure_0.remove();
    };
  };
  const items2 = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  cResult[2] = questImpression;
  cResult[3] = playerState;
  cResult[4] = questId;
  cResult[5] = sourceQuestContent;
  cResult[6] = videoSessionId;
  cResult[7] = fn2;
  cResult[8] = items2;
  tmp9 = items2;
  tmp8 = fn2;
}) : ((duration) => {
  duration = duration.duration;
  const isQuestCompleted = duration.isQuestCompleted;
  const playerState = duration.playerState;
  const questId = duration.questId;
  const sourceQuestContent = duration.sourceQuestContent;
  const videoAssetId = duration.videoAssetId;
  const videoSessionId = duration.videoSessionId;
  closure_7 = questId.useRef(null);
  questId.useRef(null);
  const questImpression = duration(playerState[6]).useQuestImpression();
  const effect = questId.useEffect(() => {
    closure_8.current = Date.now();
  }, []);
  let items = [questId, videoSessionId, playerState, questImpression, sourceQuestContent];
  const effect1 = questId.useEffect(() => {
    closure_0 = sourceQuestContent.addEventListener("change", (event) => {
      if (null != ref.current) {
        const obj4 = { questId, event: null, properties: null, sourceQuestContent: null };
        if ("active" === event) {
          let QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_FOCUSED;
        } else {
          QUEST_VIDEO_APP_UNFOCUSED = videoSessionId.QUEST_VIDEO_APP_UNFOCUSED;
        }
        obj4.event = QUEST_VIDEO_APP_UNFOCUSED;
        const obj = { video_timestamp_seconds: tmp.current, video_state, video_session_id, impression_id: null };
        let id;
        if (questImpression != null) {
          id = obj2.getId();
        }
        obj.impression_id = id;
        obj4.properties = obj;
        obj4.sourceQuestContent = sourceQuestContent;
        duration(playerState[7]).trackQuestEvent(obj4);
        obj2 = questImpression;
        const obj3 = duration(playerState[7]);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items);
  const items1 = [questId, videoAssetId, isQuestCompleted, videoSessionId, duration, questImpression, sourceQuestContent];
  const callback = questId.useCallback((segment_end_sec) => {
    if (null != closure_7.current) {
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_SEGMENT_WATCHED, properties: null, sourceQuestContent: null };
      const obj3 = {};
      const merged = Object.assign(segment_end_sec);
      obj3.video_asset_id = videoAssetId;
      obj3.quest_completed = isQuestCompleted;
      obj3.video_duration_sec = duration;
      const obj = AnalyticsActions;
      obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(segment_end_sec.segment_end_sec, tmp.current);
      obj3.video_session_id = videoSessionId;
      let id;
      if (questImpression != null) {
        id = obj5.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      obj.trackQuestEvent(obj2);
      obj5 = questImpression;
    }
  }, items1);
  const callback1 = questId.useCallback(() => closure_7.current, []);
  let obj2 = { getCurrentVideoTime: callback1, onAnalytics: callback, emitIntervalMs: null, minSegmentDurationMs: null };
  let obj = duration(playerState[6]);
  obj2.emitIntervalMs = duration(playerState[9]).SEGMENT_ANALYTICS_EMIT_INTERVAL_MS;
  obj2.minSegmentDurationMs = duration(playerState[9]).SEGMENT_ANALYTICS_MIN_DURATION_MS;
  const tmp6Result = isQuestCompleted(playerState[9])(obj2);
  const handlePlayerStateChange = tmp6Result.handlePlayerStateChange;
  const handleLoadEnd = tmp6Result.handleLoadEnd;
  const handleFirstFrame = tmp6Result.handleFirstFrame;
  const handleSeek = tmp6Result.handleSeek;
  const items2 = [playerState, handlePlayerStateChange];
  const effect2 = questId.useEffect(() => {
    if (AdsVideoTypes.PlayerState.PLAYING === playerState) {
      handlePlayerStateChange(tmp2(7947).VideoPlayerState.PLAYING, null);
    } else if (tmp2(15281).PlayerState.PAUSED === tmp) {
      handlePlayerStateChange(tmp2(7947).VideoPlayerState.PAUSED, null);
    } else if (tmp2(15281).PlayerState.ENDED === tmp) {
      handlePlayerStateChange(tmp2(7947).VideoPlayerState.ENDED, null);
    } else if (tmp2(15281).PlayerState.ERRORED === tmp) {
      handlePlayerStateChange(tmp2(7947).VideoPlayerState.PAUSED, null);
    }
  }, items2);
  questId.useRef(null);
  const items3 = [handleLoadEnd, handleFirstFrame, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items4 = [handlePlayerStateChange];
  const callback2 = questId.useCallback(() => {
    let diff = null;
    if (null != ref2.current) {
      const _Date = Date;
      diff = Date.now() - tmp.current;
    }
    handleLoadEnd(diff);
    handleFirstFrame(0);
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_ENDED, properties: null, sourceQuestContent: null };
    const obj3 = { video_asset_id: videoAssetId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), duration: diff, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items3);
  const items5 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback3 = questId.useCallback(() => {
    handlePlayerStateChange(DiscordVideoPlayerTypes.VideoPlayerState.ENDED, null);
  }, items4);
  const callback4 = questId.useCallback(() => {
    closure_14.current = Date.now();
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_LOADING_STARTED, properties: null, sourceQuestContent: null };
    const obj3 = { video_asset_id: videoAssetId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), video_session_id: videoSessionId, is_hls_supported: true, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items5);
  closure_15 = questId.useRef(null);
  questId.useRef(-1);
  const items6 = [questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const items7 = [questId, videoSessionId, videoAssetId, questImpression, sourceQuestContent];
  const callback5 = questId.useCallback((arg0) => {
    const effectiveConnectionSpeed = NetworkStore.getEffectiveConnectionSpeed();
    if (arg0) {
      const _Date2 = Date;
      tmp2.current = Date.now();
      ref3.current = ref3.current + 1;
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_STARTED, properties: null, sourceQuestContent: null };
      const obj3 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, buffer_index: ref3.current, video_session_id: videoSessionId, impression_id: null };
      let id;
      if (questImpression != null) {
        id = obj8.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj2);
      obj8 = questImpression;
    } else {
      let diff = null;
      if (null != tmp2.current) {
        const _Date = Date;
        diff = Date.now() - tmp2.current;
      }
      const obj6 = { questId, event: AnalyticEvents.QUEST_VIDEO_BUFFERING_ENDED, properties: null, sourceQuestContent: null };
      const obj7 = { video_asset_id: videoAssetId, network_connection_speed: effectiveConnectionSpeed, duration: diff, buffer_index: ref3.current, video_session_id: videoSessionId, impression_id: null };
      let id1;
      if (questImpression != null) {
        id1 = obj4.getId();
      }
      obj7.impression_id = id1;
      obj6.properties = obj7;
      obj6.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj6);
      obj4 = questImpression;
    }
  }, items6);
  const items8 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback6 = questId.useCallback(() => {
    if (null != ref.current) {
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_TIME_TO_FIRST_FRAME, properties: null, sourceQuestContent: null };
      const obj3 = { duration_ms: null, video_session_id: null, video_asset_id: null, impression_id: null };
      const _Date = Date;
      obj3.duration_ms = Date.now() - tmp.current;
      obj3.video_session_id = videoSessionId;
      obj3.video_asset_id = videoAssetId;
      let id;
      if (questImpression != null) {
        id = obj4.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj2);
      obj4 = questImpression;
    }
  }, items7);
  const items9 = [questId, videoSessionId, questImpression, sourceQuestContent];
  const callback7 = questId.useCallback(() => {
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_RESUMED, properties: null, sourceQuestContent: null };
    const obj3 = { video_timestamp_seconds: closure_7.current, pause_reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items8);
  let obj3 = { handleBufferAnalytics: callback5, handleEndAnalytics: callback3, handleErrorAnalytics: null, handleLoadAnalytics: null, handleLoadStartAnalytics: null, handlePausePlaybackAnalytics: null, handleProgressAnalytics: null, handleReadyForDisplayAnalytics: null, handleResumePlaybackAnalytics: null, handleSeekAnalytics: null };
  const items10 = [duration, questId, videoAssetId, videoSessionId, questImpression, sourceQuestContent];
  const callback8 = questId.useCallback(() => {
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_PAUSED, properties: null, sourceQuestContent: null };
    const obj3 = { video_timestamp_seconds: closure_7.current, reason: QuestTypes.VideoPauseReason.PAUSE_BUTTON, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items9);
  obj3.handleErrorAnalytics = questId.useCallback((error) => {
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_ERROR, properties: null, sourceQuestContent: null };
    const obj = AnalyticsActions;
    const tmp3 = questId;
    let num = closure_7.current;
    if (num == null) {
      num = 0;
    }
    const obj4 = { video_progress: VideoQuestUtils.formatVideoProgressRatio(duration, num), video_error_type: null, video_asset_id: videoAssetId, network_connection_speed: null, video_session_id: videoSessionId, video_error_code: null, video_error_message: null, video_network_state: null, impression_id: null };
    let code;
    if (error != null) {
      code = error.error.code;
    }
    obj4.video_error_code = code;
    let localizedDescription;
    if (error != null) {
      localizedDescription = error.error.localizedDescription;
    }
    if (localizedDescription == null) {
      let errorString;
      if (error != null) {
        errorString = error.error.errorString;
      }
      localizedDescription = errorString;
    }
    obj4.video_error_message = localizedDescription;
    let id;
    if (questImpression != null) {
      id = obj5.getId();
    }
    obj4.impression_id = id;
    obj2.properties = obj4;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackQuestEvent(obj2);
    obj5 = questImpression;
    if (tmpResult.isSourceError(error)) {
      const obj6 = { name: tmp(5091).MetricEvents.QUEST_VIDEO_ERROR, tags: null };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + tmp3, "error_type:SOURCE_ERROR"];
      obj6.tags = items;
      MonitoringAgentDefault.increment(obj6);
    }
  }, items10);
  obj3.handleLoadAnalytics = callback2;
  obj3.handleLoadStartAnalytics = callback4;
  obj3.handlePausePlaybackAnalytics = callback8;
  const items11 = [questId, videoSessionId, questImpression, sourceQuestContent];
  obj3.handleProgressAnalytics = questId.useCallback((progress, video_timestamp_seconds, current) => {
    closure_7.current = current;
    const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_PROGRESSED, properties: null, sourceQuestContent: null };
    const obj3 = { progress, video_timestamp_seconds, video_session_id: videoSessionId, impression_id: null };
    let id;
    if (questImpression != null) {
      id = questImpression.getId();
    }
    obj3.impression_id = id;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items11);
  obj3.handleReadyForDisplayAnalytics = callback6;
  obj3.handleResumePlaybackAnalytics = callback7;
  const items12 = [handleSeek, questId, videoSessionId, questImpression, sourceQuestContent];
  obj3.handleSeekAnalytics = questId.useCallback((from_time_sec, to_time_sec) => {
    handleSeek();
    if (null != from_time_sec) {
      const obj2 = { questId, event: AnalyticEvents.QUEST_VIDEO_SEEKED, properties: null, sourceQuestContent: null };
      const obj3 = { from_time_sec, to_time_sec, video_session_id: videoSessionId, impression_id: null };
      let id;
      if (questImpression != null) {
        id = obj4.getId();
      }
      obj3.impression_id = id;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackQuestEvent(obj2);
      obj4 = questImpression;
    }
  }, items12);
  return obj3;
});
