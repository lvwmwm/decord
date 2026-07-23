// Module ID: 13930
// Function ID: 106624
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4222, 653, 10468, 491, 10474, 6959, 6970, 13916, 13931, 6837, 6842, 2]
// Exports: useBountiesModalVideoAnalytics

// Module 13930 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_6 = [25, 50, 75];
let result = require("ME").fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx");

export const useBountiesModalVideoAnalytics = function useBountiesModalVideoAnalytics(bountyId) {
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
  let str = bountyId.startupPath;
  if (str === undefined) {
    str = "carousel";
  }
  let prop = bountyId.verticalScrollingPosition;
  if (prop === undefined) {
    prop = null;
  }
  let flag2 = bountyId.isActive;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let questImpressionId;
  let memo;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
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
  let obj = bountyId(rewardDurationMs[3]);
  questImpressionId = obj.useQuestImpressionId();
  memo = num2.useMemo(() => bountyId(rewardDurationMs[4]).v4(), []);
  const set = new Set();
  if (tmp5) {
    set.add("start");
  }
  if (1000 * num2 >= rewardDurationMs) {
    set.add("threshold");
  }
  closure_11 = num2.useRef(set);
  closure_12 = num2.useRef(false);
  closure_13 = num2.useRef(num);
  closure_14 = num2.useRef(num3);
  closure_15 = num2.useRef(null);
  closure_16 = num2.useRef(null);
  closure_17 = num2.useRef(false);
  closure_18 = num2.useRef(false);
  closure_19 = num2.useRef(null);
  closure_20 = num2.useRef(null);
  closure_21 = num2.useRef(-1);
  closure_22 = num2.useRef({ bitrateBps: null, width: null, height: null, levelIndex: null });
  callback = num2.useCallback(() => {
    if (null != closure_19.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_19.current);
      closure_19.current = null;
    }
  }, []);
  const items = [flag, str, prop, rewardDurationMs];
  memo1 = num2.useMemo(() => ({ was_preloaded: flag, startup_path: str, vertical_scrolling_position: prop, reward_timer_seconds: rewardDurationMs / 1000 }), items);
  callback1 = num2.useCallback(() => {
    const current = closure_22.current;
    return { hls_level_index: current.levelIndex, hls_segment_res_width: current.width, hls_segment_res_height: current.height };
  }, []);
  const items1 = [num2, num3];
  callback2 = num2.useCallback((current) => {
    let iter;
    let tmp = current;
    if (!ref.current) {
      ref.current = true;
      if (tmp <= 0) {
        tmp = num3;
      }
      if (tmp > 0) {
        const result = bountyId(rewardDurationMs[5]).formatVideoProgressRatio(num2, tmp);
        const tmp11 = prop(str);
        let iter2 = tmp11();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            if (result >= value / 100) {
              let tmp3 = closure_11;
              current = closure_11.current;
              let _HermesInternal = HermesInternal;
              let addResult = current.add("p" + value);
            }
            iter = tmp11();
            iter2 = iter;
          } while (!iter.done);
        }
        const obj = bountyId(rewardDurationMs[5]);
      }
    }
  }, items1);
  const items2 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  callback3 = num2.useCallback((arg0) => {
    let progress;
    let thresholdMet;
    let videoTimestampSeconds;
    ({ videoTimestampSeconds, progress, thresholdMet } = arg0);
    let obj = bountyId(rewardDurationMs[6]);
    obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: flag.AD_VIDEO_PROGRESSED, properties: obj, sourceQuestContent };
    obj = { progress, video_timestamp_seconds: videoTimestampSeconds, video_session_id: memo, impression_id: questImpressionId, threshold_met: thresholdMet, reward_timer_seconds: rewardDurationMs / 1000 };
    obj.trackAdContentEvent(obj);
  }, items2);
  const items3 = [callback3];
  callback4 = num2.useCallback(() => {
    const current = closure_11.current;
    if (!current.has("start")) {
      const current2 = closure_11.current;
      current2.add("start");
      callback3({ videoTimestampSeconds: 0, progress: 0, thresholdMet: false });
    }
  }, items3);
  const items4 = [callback3, rewardDurationMs];
  callback5 = num2.useCallback((arg0, current) => {
    current = closure_11.current;
    if (!current.has("threshold")) {
      const current2 = closure_11.current;
      current2.add("threshold");
      const _Math = Math;
      const bound = Math.max(rewardDurationMs / 1000, arg0);
      let obj = bountyId(rewardDurationMs[5]);
      obj = { videoTimestampSeconds: bound };
      obj.progress = obj.formatVideoProgressRatio(bound, current);
      obj.thresholdMet = true;
      callback3(obj);
    }
  }, items4);
  const items5 = [callback3];
  callback6 = num2.useCallback((arg0, arg1) => {
    const current = closure_11.current;
    if (!current.has("end")) {
      const current2 = closure_11.current;
      current2.add("end");
      const _Math = Math;
      const obj = { videoTimestampSeconds: Math.max(arg0, arg1), progress: 1, thresholdMet: true };
      callback3(obj);
    }
  }, items5);
  const items6 = [callback3, rewardDurationMs];
  callback7 = num2.useCallback((videoTimestampSeconds, current) => {
    let iter;
    if (current > 0) {
      const result = bountyId(rewardDurationMs[5]).formatVideoProgressRatio(videoTimestampSeconds, current);
      const tmp13 = prop(str);
      let iter2 = tmp13();
      if (!iter2.done) {
        do {
          let value = iter2.value;
          let _HermesInternal = HermesInternal;
          let combined = "p" + value;
          let tmp2 = closure_11;
          current = closure_11.current;
          if (!current.has(combined)) {
            if (result >= value / 100) {
              let tmp3 = closure_11;
              let current2 = closure_11.current;
              let addResult = current2.add(combined);
              let tmp5 = callback3;
              let obj = { videoTimestampSeconds, progress: result };
              let tmp6 = rewardDurationMs;
              obj.thresholdMet = 1000 * videoTimestampSeconds >= rewardDurationMs;
              let tmp7 = callback3(obj);
            }
          }
          iter = tmp13();
          iter2 = iter;
        } while (!iter.done);
      }
      const obj2 = bountyId(rewardDurationMs[5]);
    }
  }, items6);
  const items7 = [callback2, callback4, callback5, callback7, rewardDurationMs];
  const items8 = [callback2, callback4, callback5, callback7, callback6];
  const callback8 = num2.useCallback((arg0, current, current2) => {
    closure_13.current = current2;
    closure_14.current = current;
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
  const callback9 = num2.useCallback((arg0, current, current2) => {
    closure_13.current = current2;
    closure_14.current = current;
    callback2(current);
    if (0 === arg0) {
      callback4();
    }
    callback5(arg0, current);
    callback7(arg0, current);
    callback6(arg0, current);
  }, items8);
  const items10 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback10 = num2.useCallback((loop_count) => {
    closure_13.current = 0;
    let obj = bountyId(rewardDurationMs[6]);
    obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: flag.AD_VIDEO_LOOPED, properties: obj, sourceQuestContent };
    obj = { video_session_id: memo, impression_id: questImpressionId, loop_count, reward_timer_seconds: rewardDurationMs / 1000 };
    obj.trackAdContentEvent(obj);
  }, items9);
  const items11 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback11 = num2.useCallback((video_timestamp_seconds) => {
    if (arg1 === bountyId(rewardDurationMs[8]).PlaybackTriggerSource.USER_INTERACTION) {
      let obj = bountyId(rewardDurationMs[6]);
      obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: flag.AD_VIDEO_PAUSED };
      obj = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
    }
  }, items10);
  const items12 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const callback12 = num2.useCallback((video_timestamp_seconds) => {
    if (arg1 === bountyId(rewardDurationMs[8]).PlaybackTriggerSource.USER_INTERACTION) {
      let obj = bountyId(rewardDurationMs[6]);
      obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: flag.AD_VIDEO_RESUMED };
      obj = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
    }
  }, items11);
  const items13 = [bountyId, memo, questImpressionId, callback1, memo1, sourceQuestContent];
  const callback13 = num2.useCallback((error) => {
    let obj = bountyId(rewardDurationMs[6]);
    obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: flag.AD_VIDEO_ERROR };
    obj = { video_progress: bountyId(rewardDurationMs[5]).formatVideoProgressRatio(ref2.current, ref3.current), video_error_type: null, network_connection_speed: null, video_session_id: memo };
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
    obj.impression_id = questImpressionId;
    obj.reward_timer_seconds = rewardDurationMs / 1000;
    obj.properties = obj;
    obj.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj);
    const obj4 = bountyId(rewardDurationMs[5]);
    if (obj5.isSourceError(error)) {
      const obj1 = { name: bountyId(rewardDurationMs[11]).MetricEvents.QUEST_VIDEO_ERROR, tags: ["error_type:SOURCE_ERROR"] };
      sourceQuestContent(rewardDurationMs[10]).increment(obj1);
      const obj6 = sourceQuestContent(rewardDurationMs[10]);
    }
  }, items12);
  callback14 = num2.useCallback(() => {
    if (null != ref7.current) {
      const _Date = Date;
      ref7.current = null;
      const diff = Date.now() - ref7.current;
      let obj = bountyId(rewardDurationMs[6]);
      obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: flag.AD_VIDEO_BUFFERING_ENDED };
      obj = { video_session_id: memo, impression_id: questImpressionId, duration: diff, network_connection_speed: num3.getEffectiveConnectionSpeed(), buffer_index: ref8.current, video_bitrate_bps: closure_22.current.bitrateBps };
      const merged = Object.assign(callback1());
      const merged1 = Object.assign(memo1);
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
    }
  }, items13);
  const items14 = [bountyId, memo, questImpressionId, callback, callback1, memo1, sourceQuestContent];
  callback15 = num2.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_16.current;
    }
    if (!current) {
      ref5.current = true;
      callback();
      let obj = bountyId(rewardDurationMs[6]);
      obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: true.AD_VIDEO_TIME_TO_FIRST_FRAME };
      obj = { video_session_id: memo, impression_id: questImpressionId, duration_ms: closure_16.current - ref4.current, network_connection_speed: num3.getEffectiveConnectionSpeed(), startup_bitrate_bps: closure_22.current.bitrateBps };
      const merged = Object.assign(callback1());
      const merged1 = Object.assign(memo1);
      obj.properties = obj;
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj);
    }
  }, items14);
  const items15 = [callback15];
  callback16 = num2.useCallback(() => {
    let current = ref5.current;
    if (!current) {
      current = null == ref4.current;
    }
    if (!current) {
      current = null == closure_16.current;
    }
    if (!current) {
      if (null == closure_22.current.bitrateBps) {
        if (null == closure_19.current) {
          const _setTimeout = setTimeout;
          closure_19.current = setTimeout(() => {
            outer1_19.current = null;
            outer1_33();
          }, 500);
        }
      } else {
        callback15();
      }
    }
  }, items15);
  const items16 = [callback, callback14, callback15];
  const effect = num2.useEffect(() => () => {
    if (null != outer1_19.current) {
      outer1_33();
    }
    outer1_23();
    outer1_32();
  }, items16);
  const items17 = [flag2, callback16, callback, callback14, callback15];
  const effect1 = num2.useEffect(() => {
    if (flag2) {
      callback16();
    } else {
      if (null != closure_19.current) {
        callback15();
      }
      callback();
      callback14();
    }
  }, items17);
  obj = {
    handleVideoProgressAnalytics: callback8,
    handleVideoEndAnalytics: callback9,
    handleVideoLoopedAnalytics: callback10,
    handleVideoPausedAnalytics: callback11,
    handleVideoResumedAnalytics: callback12,
    handleVideoErrorAnalytics: callback13,
    handleLoadStartAnalytics: num2.useCallback(() => {
      callback14();
      callback();
      closure_15.current = Date.now();
      closure_16.current = null;
      closure_17.current = false;
      closure_18.current = false;
      closure_22.current = { bitrateBps: null, width: null, height: null, levelIndex: null };
    }, items18),
    handleVideoTracksAnalytics: num2.useCallback((arg0) => {
      closure_22.current = (function getSelectedTrackInfo(arg0) {
        let selectedVideoTrackId;
        let videoTracks;
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
          const obj = {};
          let bitrate = null;
          if (size.bitrate > 0) {
            bitrate = size.bitrate;
          }
          obj.bitrateBps = bitrate;
          let width = null;
          if (size.width > 0) {
            width = size.width;
          }
          obj.width = width;
          let height = null;
          if (size.height > 0) {
            height = size.height;
          }
          obj.height = height;
          let tmp4 = null;
          if (num >= 0) {
            tmp4 = num;
          }
          obj.levelIndex = tmp4;
          return obj;
        }
      })(arg0);
      let tmp = flag2;
      if (flag2) {
        tmp = null != closure_16.current;
      }
      if (tmp) {
        tmp = null != closure_22.current.bitrateBps;
      }
      if (tmp) {
        callback15();
      }
    }, items19),
    handleReadyForDisplayAnalytics: num2.useCallback(() => {
      closure_18.current = true;
      if (null == closure_16.current) {
        const _Date = Date;
        closure_16.current = Date.now();
      }
      if (flag2) {
        callback16();
      }
    }, items20),
    handleBufferAnalytics: num2.useCallback((arg0) => {
      if (ref6.current) {
        if (flag2) {
          if (arg0) {
            const _Date = Date;
            closure_20.current = Date.now();
            ref8.current = ref8.current + 1;
            let obj = bountyId(rewardDurationMs[6]);
            obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[7]).AdCreativeType.BOUNTY, event: flag.AD_VIDEO_BUFFERING_STARTED };
            obj = { video_session_id: memo, impression_id: questImpressionId, network_connection_speed: 7.getEffectiveConnectionSpeed(), buffer_index: ref8.current, video_bitrate_bps: closure_22.current.bitrateBps };
            const merged = Object.assign(callback1());
            const merged1 = Object.assign(memo1);
            obj.properties = obj;
            obj.sourceQuestContent = sourceQuestContent;
            obj.trackAdContentEvent(obj);
          } else {
            callback14();
          }
          return tmp5;
        }
      }
    }, items21)
  };
  items18 = [callback, callback14];
  items19 = [callback15, flag2];
  items20 = [flag2, callback16];
  items21 = [bountyId, memo, questImpressionId, callback14, callback1, flag2, memo1, sourceQuestContent];
  return obj;
};
