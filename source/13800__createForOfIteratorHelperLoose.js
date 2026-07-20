// Module ID: 13800
// Function ID: 104390
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useBountiesModalVideoAnalytics

// Module 13800 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
let closure_5 = [];
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalVideoAnalytics.tsx");

export const useBountiesModalVideoAnalytics = function useBountiesModalVideoAnalytics(bountyId) {
  bountyId = bountyId.bountyId;
  const arg1 = bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  const importDefault = sourceQuestContent;
  const rewardDurationMs = bountyId.rewardDurationMs;
  const dependencyMap = rewardDurationMs;
  let num = bountyId.initialPlaybackTimeSec;
  if (num === undefined) {
    num = 0;
  }
  let num2 = bountyId.initialMaxVideoProgressSec;
  if (num2 === undefined) {
    num2 = 0;
  }
  const React = num2;
  let num3 = bountyId.initialVideoDurationSec;
  if (num3 === undefined) {
    num3 = 0;
  }
  const AnalyticEvents = num3;
  let closure_5;
  let _createForOfIteratorHelperLoose;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let obj = arg1(dependencyMap[2]);
  const questImpressionId = obj.useQuestImpressionId();
  closure_5 = questImpressionId;
  const memo = React.useMemo(() => bountyId(rewardDurationMs[3]).v4(), []);
  _createForOfIteratorHelperLoose = memo;
  const set = new Set();
  if (tmp4) {
    set.add("start");
  }
  if (1000 * num2 >= rewardDurationMs) {
    set.add("threshold");
  }
  closure_7 = React.useRef(set);
  closure_8 = React.useRef(false);
  closure_9 = React.useRef(num);
  closure_10 = React.useRef(num3);
  const items = [num2, num3];
  callback = React.useCallback((current) => {
    let iter;
    let tmp = current;
    if (!ref.current) {
      ref.current = true;
      if (tmp <= 0) {
        tmp = num3;
      }
      if (tmp > 0) {
        const result = bountyId(rewardDurationMs[4]).formatVideoProgressRatio(num2, tmp);
        const tmp11 = memo(questImpressionId);
        let iter2 = tmp11();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            if (result >= value / 100) {
              let tmp3 = closure_7;
              current = closure_7.current;
              let _HermesInternal = HermesInternal;
              let addResult = current.add("p" + value);
            }
            iter = tmp11();
            iter2 = iter;
          } while (!iter.done);
        }
        const obj = bountyId(rewardDurationMs[4]);
      }
    }
  }, items);
  const items1 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  callback1 = React.useCallback((arg0) => {
    let progress;
    let thresholdMet;
    let videoTimestampSeconds;
    ({ videoTimestampSeconds, progress, thresholdMet } = arg0);
    let obj = bountyId(rewardDurationMs[5]);
    obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[6]).AdCreativeType.BOUNTY, event: num3.AD_VIDEO_PROGRESSED, properties: obj, sourceQuestContent };
    obj = { progress, video_timestamp_seconds: videoTimestampSeconds, video_session_id: memo, impression_id: questImpressionId, threshold_met: thresholdMet, reward_timer_seconds: rewardDurationMs / 1000 };
    obj.trackAdContentEvent(obj);
  }, items1);
  const items2 = [callback1];
  callback2 = React.useCallback(() => {
    const current = closure_7.current;
    if (!current.has("start")) {
      const current2 = closure_7.current;
      current2.add("start");
      callback1({});
    }
  }, items2);
  const items3 = [callback1, rewardDurationMs];
  callback3 = React.useCallback((arg0, current) => {
    current = closure_7.current;
    if (!current.has("threshold")) {
      const current2 = closure_7.current;
      current2.add("threshold");
      const _Math = Math;
      const bound = Math.max(rewardDurationMs / 1000, arg0);
      let obj = bountyId(rewardDurationMs[4]);
      obj = { videoTimestampSeconds: bound };
      obj.progress = obj.formatVideoProgressRatio(bound, current);
      obj.thresholdMet = true;
      callback1(obj);
    }
  }, items3);
  const items4 = [callback1];
  callback4 = React.useCallback((arg0, arg1) => {
    const current = closure_7.current;
    if (!current.has("end")) {
      const current2 = closure_7.current;
      current2.add("end");
      const _Math = Math;
      const obj = { videoTimestampSeconds: Math.max(arg0, arg1) };
      callback1(obj);
    }
  }, items4);
  const items5 = [callback1, rewardDurationMs];
  callback5 = React.useCallback((videoTimestampSeconds, current) => {
    let iter;
    if (current > 0) {
      const result = bountyId(rewardDurationMs[4]).formatVideoProgressRatio(videoTimestampSeconds, current);
      const tmp13 = memo(questImpressionId);
      let iter2 = tmp13();
      if (!iter2.done) {
        do {
          let value = iter2.value;
          let _HermesInternal = HermesInternal;
          let combined = "p" + value;
          let tmp2 = closure_7;
          current = closure_7.current;
          if (!current.has(combined)) {
            if (result >= value / 100) {
              let tmp3 = closure_7;
              let current2 = closure_7.current;
              let addResult = current2.add(combined);
              let tmp5 = closure_12;
              let obj = { videoTimestampSeconds, progress: result };
              let tmp6 = closure_2;
              obj.thresholdMet = 1000 * videoTimestampSeconds >= closure_2;
              let tmp7 = closure_12(obj);
            }
          }
          iter = tmp13();
          iter2 = iter;
        } while (!iter.done);
      }
      const obj2 = bountyId(rewardDurationMs[4]);
    }
  }, items5);
  obj = {
    handleVideoProgressAnalytics: React.useCallback((arg0, current, current2) => {
      closure_9.current = current2;
      closure_10.current = current;
      callback(current);
      if (0 === arg0) {
        callback2();
      }
      if (1000 * arg0 >= rewardDurationMs) {
        callback3(arg0, current);
      }
      callback5(arg0, current);
    }, items6),
    handleVideoEndAnalytics: React.useCallback((arg0, current, current2) => {
      closure_9.current = current2;
      closure_10.current = current;
      callback(current);
      if (0 === arg0) {
        callback2();
      }
      callback3(arg0, current);
      callback5(arg0, current);
      callback4(arg0, current);
    }, items7),
    handleVideoLoopedAnalytics: React.useCallback((loop_count) => {
      closure_9.current = 0;
      let obj = bountyId(rewardDurationMs[5]);
      obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[6]).AdCreativeType.BOUNTY, event: num3.AD_VIDEO_LOOPED, properties: obj, sourceQuestContent };
      obj = { video_session_id: memo, impression_id: questImpressionId, loop_count, reward_timer_seconds: rewardDurationMs / 1000 };
      obj.trackAdContentEvent(obj);
    }, items8),
    handleVideoPausedAnalytics: React.useCallback((video_timestamp_seconds) => {
      if (arg1 === bountyId(rewardDurationMs[7]).PlaybackTriggerSource.USER_INTERACTION) {
        let obj = bountyId(rewardDurationMs[5]);
        obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[6]).AdCreativeType.BOUNTY, event: num3.AD_VIDEO_PAUSED };
        obj = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
        obj.properties = obj;
        obj.sourceQuestContent = sourceQuestContent;
        obj.trackAdContentEvent(obj);
      }
    }, items9),
    handleVideoResumedAnalytics: React.useCallback((video_timestamp_seconds) => {
      if (arg1 === bountyId(rewardDurationMs[7]).PlaybackTriggerSource.USER_INTERACTION) {
        let obj = bountyId(rewardDurationMs[5]);
        obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[6]).AdCreativeType.BOUNTY, event: num3.AD_VIDEO_RESUMED };
        obj = { video_timestamp_seconds, video_session_id: memo, impression_id: questImpressionId, reward_timer_seconds: rewardDurationMs / 1000 };
        obj.properties = obj;
        obj.sourceQuestContent = sourceQuestContent;
        obj.trackAdContentEvent(obj);
      }
    }, items10),
    handleVideoErrorAnalytics: React.useCallback((error) => {
      let obj = bountyId(rewardDurationMs[5]);
      obj = { adContentId: bountyId, adCreativeType: bountyId(rewardDurationMs[6]).AdCreativeType.BOUNTY, event: num3.AD_VIDEO_ERROR };
      obj = { "Bool(false)": "Normal", "Bool(false)": true, "Bool(false)": "AbortSignal", video_progress: bountyId(rewardDurationMs[4]).formatVideoProgressRatio(ref2.current, ref3.current), video_session_id: memo };
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
      const obj4 = bountyId(rewardDurationMs[4]);
      if (obj5.isSourceError(error)) {
        const obj1 = { name: bountyId(rewardDurationMs[10]).MetricEvents.QUEST_VIDEO_ERROR, tags: [null] };
        sourceQuestContent(rewardDurationMs[9]).increment(obj1);
        const obj6 = sourceQuestContent(rewardDurationMs[9]);
      }
    }, items11)
  };
  const items6 = [callback, callback2, callback3, callback5, rewardDurationMs];
  const items7 = [callback, callback2, callback3, callback5, callback4];
  const items8 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const items9 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const items10 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  const items11 = [bountyId, memo, questImpressionId, sourceQuestContent, rewardDurationMs];
  return obj;
};
