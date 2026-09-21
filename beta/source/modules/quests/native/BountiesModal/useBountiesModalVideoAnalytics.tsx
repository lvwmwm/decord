// Module ID: 15289
// Function ID: 15290
// Name: useBountiesModalVideoAnalytics
// Dependencies: [19, 4807, 1078, 558, 568, 11610, 1259, 11636, 7959, 5670, 15281, 15290, 5086, 5091, 2]

// Module 15289 (useBountiesModalVideoAnalytics)
import MonitoringAgentDefault from "MonitoringAgent" /* 5086 */;
import AdCreativeType from "AdCreativeType" /* 5670 */;
import AnalyticsActions from "AnalyticsActions" /* 7959 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11636 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15281 */;
import noop from "module_19" /* 19 */;
import NetworkStore from "NetworkStore" /* 4807 */;

require = fn;
function getSelectedTrackInfo(arg0) {
  ({ videoTracks, selectedVideoTrackId } = arg0);
  if (0 === videoTracks.length) {
    return { bitrateBps: null, width: null, height: null, levelIndex: null };
  } else {
    let num = -1;
    if (null != selectedVideoTrackId) {
      num = -1;
      if (selectedVideoTrackId.length > 0) {
        num = videoTracks.findIndex((trackId) => trackId.trackId === selectedVideoTrackId);
      }
    }
    const size = num >= 0 ? videoTracks[num] : videoTracks[0];
    let bitrate = null;
    if (size.bitrate > 0) {
      bitrate = size.bitrate;
    }
    const size1 = { bitrateBps: bitrate, width: null, height: null, levelIndex: null };
    let width = null;
    if (size.width > 0) {
      width = size.width;
    }
    size1.width = width;
    let height = null;
    if (size.height > 0) {
      height = size.height;
    }
    size1.height = height;
    let tmp4 = null;
    if (num >= 0) {
      tmp4 = num;
    }
    size1.levelIndex = tmp4;
    return size1;
  }
}
const AnalyticEvents = fn(1078).AnalyticEvents;
const impression_id = [25, 50, 75];
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx");

export const useBountiesModalVideoAnalytics = ReactCompilerGating.isReactCompilerEnabled() ? ((bountyId) => {
  const cResult = bountyId(rewardDurationMs[4]).c(110);
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  rewardDurationMs = bountyId.rewardDurationMs;
  ({ initialPlaybackTimeSec, initialMaxVideoProgressSec, initialVideoDurationSec, wasPreloaded, verticalScrollingPosition, isActive } = bountyId);
  let num = 0;
  if (undefined !== initialPlaybackTimeSec) {
    num = initialPlaybackTimeSec;
  }
  let num2 = 0;
  if (undefined !== initialMaxVideoProgressSec) {
    num2 = initialMaxVideoProgressSec;
  }
  let num3 = 0;
  if (undefined !== initialVideoDurationSec) {
    num3 = initialVideoDurationSec;
  }
  let tmp5 = null;
  if (undefined !== verticalScrollingPosition) {
    tmp5 = verticalScrollingPosition;
  }
  closure_5 = undefined === isActive || isActive;
  let obj = bountyId(rewardDurationMs[4]);
  const questImpressionId = bountyId(rewardDurationMs[5]).useQuestImpressionId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const v4Result = tmp(tmp2[6]).v4();
    cResult[0] = v4Result;
    video_session_id = v4Result;
    const tmpResult2 = tmp(tmp2[6]);
  } else {
    video_session_id = cResult[0];
  }
  if (cResult[1] === num2) {
    if (cResult[2] === num) {
      if (cResult[3] === rewardDurationMs) {
        let tmp9 = cResult[4];
      }
      num2.useRef(tmp9);
      num2.useRef(false);
      num2.useRef(num);
      num2.useRef(num3);
      num2.useRef(null);
      closure_13 = num2.useRef(null);
      num2.useRef(false);
      num2.useRef(false);
      num2.useRef(null);
      num2.useRef(null);
      num2.useRef(-1);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const size = { bitrateBps: null, width: null, height: null, levelIndex: null };
        cResult[5] = size;
        let tmp13 = size;
      } else {
        tmp13 = cResult[5];
      }
      closure_19 = num2.useRef(tmp13);
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function $() {
          if (null != ref7.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp.current);
            tmp.current = null;
          }
        };
        cResult[6] = fn;
        let tmp14 = fn;
      } else {
        tmp14 = cResult[6];
      }
      closure_20 = tmp14;
      let result = rewardDurationMs / 1000;
      if (cResult[7] === result) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp4) {
            let tmp16 = cResult[10];
          }
          closure_21 = tmp16;
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                current = closure_19.current;
                obj = { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
                return obj;
              }
            }
            cResult[11] = J;
            const tmp17 = J;
          } else {
            class J {
              constructor() {
                current = closure_19.current;
                obj = { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
                return obj;
              }
            }
          }
          J = tmp17;
          if (cResult[12] === num2) {
            class J {
              constructor() {
                current = closure_19.current;
                obj = { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
                return obj;
              }
            }
            if (cResult[15] === bountyId) {
              class J {
                constructor() {
                  current = closure_19.current;
                  obj = { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
                  return obj;
                }
              }
            }
            class Z {
              constructor(arg0) {
                ({ videoTimestampSeconds, progress, thresholdMet } = bountyId);
                obj = closure_0(closure_2[8]);
                obj1 = { adContentId: bountyId, adCreativeType: closure_0(closure_2[9]).AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_PROGRESSED, properties: null, sourceQuestContent };
                obj4 = { progress, video_timestamp_seconds: videoTimestampSeconds, video_session_id: closure_7, impression_id: closure_6, threshold_met: thresholdMet, reward_timer_seconds: rewardDurationMs / 1000 };
                obj1.properties = obj4;
                trackAdContentEventResult = obj.trackAdContentEvent(obj1);
                return;
              }
            }
            cResult[15] = bountyId;
            class W {
              constructor(arg0) {
                if (!closure_9.current) {
                  tmp2 = bountyId;
                  flag = true;
                  tmp.current = true;
                  num = 0;
                  if (bountyId <= 0) {
                    tmp2 = initialVideoDurationSec;
                  }
                  if (tmp2 > 0) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj = closure_0(closure_2[7]);
                    tmp12 = closure_3;
                    tmp15 = closure_6;
                    result = obj.formatVideoProgressRatio(closure_3, tmp2);
                    tmp14 = closure_6;
                    iter = closure_6[Symbol.iterator]();
                    tmp16 = globalThis;
                    str = "p";
                    num2 = 100;
                    tmp3 = tmp14;
                    nextResult = iter.next();
                    tmp5 = iter;
                    while (iter !== undefined) {
                      if (result >= nextResult / 100) {
                        tmp7 = closure_8;
                        current = closure_8.current;
                        tmp8 = nextResult;
                        _HermesInternal = HermesInternal;
                        addResult = current.add("p" + tmp6);
                      }
                      continue;
                    }
                  }
                }
                return;
              }
            }
            cResult[17] = rewardDurationMs;
            cResult[18] = sourceQuestContent;
            cResult[19] = Z;
          }
          class W {
            constructor(arg0) {
              if (!closure_9.current) {
                tmp2 = bountyId;
                flag = true;
                tmp.current = true;
                num = 0;
                if (bountyId <= 0) {
                  tmp2 = initialVideoDurationSec;
                }
                if (tmp2 > 0) {
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj = closure_0(closure_2[7]);
                  tmp12 = closure_3;
                  tmp15 = closure_6;
                  result = obj.formatVideoProgressRatio(closure_3, tmp2);
                  tmp14 = closure_6;
                  iter = closure_6[Symbol.iterator]();
                  tmp16 = globalThis;
                  str = "p";
                  num2 = 100;
                  tmp3 = tmp14;
                  nextResult = iter.next();
                  tmp5 = iter;
                  while (iter !== undefined) {
                    if (result >= nextResult / 100) {
                      tmp7 = closure_8;
                      current = closure_8.current;
                      tmp8 = nextResult;
                      _HermesInternal = HermesInternal;
                      addResult = current.add("p" + tmp6);
                    }
                    continue;
                  }
                }
              }
              return;
            }
          }
          cResult[12] = num2;
          cResult[13] = num3;
          cResult[14] = W;
        }
      }
      let obj2 = { was_preloaded: tmp4, startup_path: "active_only", vertical_scrolling_position: tmp5, reward_timer_seconds: result };
      cResult[7] = result;
      cResult[8] = tmp5;
      cResult[9] = tmp4;
      cResult[10] = obj2;
      tmp16 = obj2;
    }
  }
  const set = new Set();
  if (tmp10) {
    class J {
      constructor() {
        current = closure_19.current;
        obj = { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
        return obj;
      }
    }
    set.add("start");
  }
  if (1000 * num2 >= rewardDurationMs) {
    class J {
      constructor() {
        current = closure_19.current;
        obj = { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
        return obj;
      }
    }
    set.add("threshold");
  }
  cResult[1] = num2;
  cResult[2] = num;
  cResult[3] = rewardDurationMs;
  cResult[4] = set;
  tmp9 = set;
}) : ((bountyId) => {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  const rewardDurationMs = bountyId.rewardDurationMs;
  let num = bountyId.initialPlaybackTimeSec;
  if (num === undefined) {
    num = 0;
  }
  let num2 = bountyId.initialMaxVideoProgressSec;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = bountyId.initialVideoDurationSec;
  if (num3 === undefined) {
    num3 = 0;
  }
  let flag = bountyId.wasPreloaded;
  if (flag === undefined) {
    flag = false;
  }
  let prop = bountyId.verticalScrollingPosition;
  if (prop === undefined) {
    prop = null;
  }
  let flag2 = bountyId.isActive;
  if (flag2 === undefined) {
    flag2 = true;
  }
  closure_10 = undefined;
  closure_15 = undefined;
  closure_21 = undefined;
  let callback;
  let memo1;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  let callback14;
  let callback15;
  let callback16;
  const questImpressionId = bountyId(rewardDurationMs[5]).useQuestImpressionId();
  const memo = num2.useMemo(() => bountyId(rewardDurationMs[6]).v4(), []);
  const set = new Set();
  if (tmp4) {
    set.add("start");
  }
  if (1000 * num2 >= rewardDurationMs) {
    set.add("threshold");
  }
  closure_10 = num2.useRef(set);
  num2.useRef(false);
  num2.useRef(num);
  num2.useRef(num3);
  num2.useRef(null);
  closure_15 = obj2.useRef(null);
  num2.useRef(false);
  num2.useRef(false);
  num2.useRef(null);
  num2.useRef(null);
  num2.useRef(-1);
  closure_21 = obj2.useRef({ bitrateBps: null, width: null, height: null, levelIndex: null });
  callback = obj2.useCallback(() => {
    if (null != ref7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const items = [flag, prop, rewardDurationMs];
  memo1 = obj2.useMemo(() => ({ was_preloaded: flag, startup_path: "active_only", vertical_scrolling_position: prop, reward_timer_seconds: rewardDurationMs / 1000 }), items);
  callback1 = obj2.useCallback(() => {
    const current = closure_21.current;
    return { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
  }, []);
  const items1 = [num2, num3];
  callback2 = obj2.useCallback((current) => {
    if (!ref.current) {
      let tmp2 = current;
      tmp.current = true;
      if (current <= 0) {
        tmp2 = num3;
      }
      if (tmp2 > 0) {
        const result = VideoQuestUtils.formatVideoProgressRatio(num2, tmp2);
        const iter = prop[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (result >= nextResult / 100) {
            current = closure_10.current;
            let _HermesInternal = HermesInternal;
            let addResult = current.add("p" + tmp6);
          }
          continue;
        }
      }
    }
  }, items1);
  const items2 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  callback3 = obj2.useCallback((arg0) => {
    ({ videoTimestampSeconds, progress, thresholdMet } = arg0);
    const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_PROGRESSED, properties: { progress, video_timestamp_seconds: videoTimestampSeconds, video_session_id: memo, impression_id: questImpressionId, threshold_met: thresholdMet, reward_timer_seconds: rewardDurationMs / 1000 }, sourceQuestContent };
    AnalyticsActions.trackAdContentEvent(obj2);
  }, items2);
  const items3 = [callback3];
  callback4 = obj2.useCallback(() => {
    const current = closure_10.current;
    if (!current.has("start")) {
      const current2 = closure_10.current;
      current2.add("start");
      callback3({ videoTimestampSeconds: 0, progress: 0, thresholdMet: false });
    }
  }, items3);
  const items4 = [callback3, rewardDurationMs];
  callback5 = obj2.useCallback((arg0, current) => {
    current = closure_10.current;
    if (!current.has("threshold")) {
      const current2 = closure_10.current;
      current2.add("threshold");
      const _Math = Math;
      const bound = Math.max(rewardDurationMs / 1000, arg0);
      const obj2 = { videoTimestampSeconds: bound, progress: VideoQuestUtils.formatVideoProgressRatio(bound, current), thresholdMet: true };
      callback3(obj2);
    }
  }, items4);
  const items5 = [callback3];
  callback6 = obj2.useCallback((arg0, arg1) => {
    const current = closure_10.current;
    if (!current.has("end")) {
      const current2 = closure_10.current;
      current2.add("end");
      const _Math = Math;
      const obj = { videoTimestampSeconds: Math.max(arg0, arg1), progress: 1, thresholdMet: true };
      callback3(obj);
    }
  }, items5);
  const items6 = [callback3, rewardDurationMs];
  callback7 = obj2.useCallback((videoTimestampSeconds, current) => {
    if (current > 0) {
      const result = VideoQuestUtils.formatVideoProgressRatio(videoTimestampSeconds, current);
      const iter = prop[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _HermesInternal = HermesInternal;
        let tmp4 = nextResult;
        let combined = "p" + nextResult;
        current = closure_10.current;
        let tmp6 = combined;
        let tmp7 = closure_10;
        if (!current.has(combined)) {
          if (result >= tmp4 / 100) {
            let current2 = tmp7.current;
            let addResult = current2.add(tmp6);
            let obj = { videoTimestampSeconds, progress: result, thresholdMet: null };
            obj.thresholdMet = 1000 * videoTimestampSeconds >= rewardDurationMs;
            let tmp13 = callback3(obj);
          }
        }
        continue;
      }
    }
  }, items6);
  const items7 = [callback2, callback4, callback5, callback7, rewardDurationMs];
  const items8 = [callback2, callback4, callback5, callback7, callback6];
  const callback8 = obj2.useCallback((arg0, current, current2) => {
    closure_12.current = current2;
    closure_13.current = current;
    callback2(current);
    if (0 === arg0) {
      callback4();
    }
    if (1000 * arg0 >= rewardDurationMs) {
      callback5(arg0, current);
    }
    callback7(arg0, current);
  }, items7);
  const items9 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback9 = obj2.useCallback((arg0, current, current2) => {
    closure_12.current = current2;
    closure_13.current = current;
    callback2(current);
    if (0 === arg0) {
      callback4();
    }
    callback5(arg0, current);
    callback7(arg0, current);
    callback6(arg0, current);
  }, items8);
  const items10 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback10 = obj2.useCallback((loop_count) => {
    closure_12.current = 0;
    const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_LOOPED, properties: { video_session_id: memo, impression_id: questImpressionId, loop_count, reward_timer_seconds: rewardDurationMs / 1000 }, sourceQuestContent };
    AnalyticsActions.trackAdContentEvent(obj2);
  }, items9);
  const items11 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback11 = obj2.useCallback((video_timestamp_seconds, arg1) => {
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      const obj = { adContentId: bountyId, adCreativeType: tmp(5670).AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_PAUSED, properties: null, sourceQuestContent: null };
      const obj2 = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj2;
      obj.sourceQuestContent = sourceQuestContent;
      tmp(7959).trackAdContentEvent(obj);
      const tmpResult = tmp(7959);
    }
  }, items10);
  const items12 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback12 = obj2.useCallback((video_timestamp_seconds, arg1) => {
    if (arg1 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
      const obj = { adContentId: bountyId, adCreativeType: tmp(5670).AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_RESUMED, properties: null, sourceQuestContent: null };
      const obj2 = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj2;
      obj.sourceQuestContent = sourceQuestContent;
      tmp(7959).trackAdContentEvent(obj);
      const tmpResult = tmp(7959);
    }
  }, items11);
  const items13 = [bountyId, memo, questImpressionId, callback1, memo1, sourceQuestContent];
  const callback13 = obj2.useCallback((error) => {
    const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_ERROR, properties: null, sourceQuestContent: null };
    const obj3 = { video_progress: null, video_error_type: null, network_connection_speed: null, video_session_id: null, video_error_code: null, video_error_message: null, video_network_state: null, impression_id: null, reward_timer_seconds: null };
    const obj = AnalyticsActions;
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(ref2.current, ref3.current);
    obj3.video_session_id = memo;
    let code;
    if (error != null) {
      code = error.error.code;
    }
    obj3.video_error_code = code;
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
    obj3.video_error_message = localizedDescription;
    obj3.impression_id = questImpressionId;
    obj3.reward_timer_seconds = rewardDurationMs / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    if (tmpResult.isSourceError(error)) {
      const obj5 = { name: tmp(5091).MetricEvents.QUEST_VIDEO_ERROR, tags: ["error_type:SOURCE_ERROR"] };
      MonitoringAgentDefault.increment(obj5);
    }
  }, items12);
  callback14 = obj2.useCallback(() => {
    if (null != ref8.current) {
      const _Date = Date;
      tmp.current = null;
      const diff = Date.now() - tmp.current;
      const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_BUFFERING_ENDED, properties: null, sourceQuestContent: null };
      const obj3 = { video_session_id: memo, impression_id: questImpressionId, duration: diff, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), buffer_index: ref9.current, video_bitrate_bps: closure_21.current.bitrateBps };
      const merged = Object.assign(callback1());
      const merged1 = Object.assign(memo1);
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackAdContentEvent(obj2);
    }
  }, items13);
  const items14 = [bountyId, memo, questImpressionId, callback, callback1, memo1, sourceQuestContent];
  callback15 = obj2.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_15.current;
    }
    if (!current) {
      ref5.current = true;
      callback();
      const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_TIME_TO_FIRST_FRAME, properties: null, sourceQuestContent: null };
      const obj3 = { video_session_id: memo, impression_id: questImpressionId, duration_ms: closure_15.current - ref4.current, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), startup_bitrate_bps: closure_21.current.bitrateBps };
      const merged = Object.assign(callback1());
      const merged1 = Object.assign(memo1);
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      AnalyticsActions.trackAdContentEvent(obj2);
    }
  }, items14);
  const items15 = [callback15];
  callback16 = obj2.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_15.current;
    }
    if (!current) {
      if (null == closure_21.current.bitrateBps) {
        if (null == ref7.current) {
          const _setTimeout = setTimeout;
          tmp9.current = setTimeout(() => {
            ref7.current = null;
            callback15();
          }, 500);
        }
      } else {
        callback15();
      }
    }
  }, items15);
  const items16 = [callback, callback14, callback15];
  const effect = obj2.useEffect(() => () => {
    if (null != ref.current) {
      callback15();
    }
    callback();
    callback14();
  }, items16);
  const items17 = [flag2, callback16, callback, callback14, callback15];
  const effect1 = obj2.useEffect(() => {
    if (flag2) {
      callback16();
    } else {
      if (null != ref7.current) {
        callback15();
      }
      callback();
      callback14();
    }
  }, items17);
  let obj3 = { handleVideoProgressAnalytics: callback8, handleVideoEndAnalytics: callback9, handleVideoLoopedAnalytics: callback10, handleVideoPausedAnalytics: callback11, handleVideoResumedAnalytics: callback12, handleVideoErrorAnalytics: callback13, handleLoadStartAnalytics: null, handleVideoTracksAnalytics: null, handleReadyForDisplayAnalytics: null, handleBufferAnalytics: null };
  const items18 = [callback, callback14];
  obj3.handleLoadStartAnalytics = num2.useCallback(() => {
    callback14();
    callback();
    closure_14.current = Date.now();
    closure_15.current = null;
    closure_16.current = false;
    closure_17.current = false;
    closure_21.current = { bitrateBps: null, width: null, height: null, levelIndex: null };
  }, items18);
  const items19 = [callback15, flag2];
  obj3.handleVideoTracksAnalytics = num2.useCallback((arg0) => {
    closure_21.current = getSelectedTrackInfo(arg0);
    let tmp2 = flag2;
    if (flag2) {
      tmp2 = null != closure_15.current;
    }
    if (tmp2) {
      tmp2 = null != closure_21.current.bitrateBps;
    }
    if (tmp2) {
      callback15();
    }
  }, items19);
  const items20 = [flag2, callback16];
  obj3.handleReadyForDisplayAnalytics = num2.useCallback(() => {
    closure_17.current = true;
    if (null == closure_15.current) {
      const _Date = Date;
      tmp.current = Date.now();
    }
    if (flag2) {
      callback16();
    }
  }, items20);
  const items21 = [bountyId, memo, questImpressionId, callback14, callback1, flag2, memo1, sourceQuestContent];
  obj3.handleBufferAnalytics = num2.useCallback((arg0) => {
    if (ref6.current) {
      if (flag2) {
        if (arg0) {
          const _Date = Date;
          closure_19.current = Date.now();
          ref9.current = ref9.current + 1;
          const obj2 = { adContentId: bountyId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_BUFFERING_STARTED, properties: null, sourceQuestContent: null };
          const obj3 = { video_session_id: memo, impression_id: questImpressionId, network_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), buffer_index: ref9.current, video_bitrate_bps: closure_21.current.bitrateBps };
          const merged = Object.assign(callback1());
          const merged1 = Object.assign(memo1);
          obj2.properties = obj3;
          obj2.sourceQuestContent = sourceQuestContent;
          AnalyticsActions.trackAdContentEvent(obj2);
        } else {
          callback14();
        }
        return tmp5;
      }
    }
  }, items21);
  return obj3;
});
