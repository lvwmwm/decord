// Module ID: 14031
// Function ID: 107438
// Name: useVideoSegmentAnalytics
// Dependencies: [57, 31, 6945, 2]
// Exports: default

// Module 14031 (useVideoSegmentAnalytics)
import _slicedToArray from "_slicedToArray";
import closure_3 from "result";
import result from "result";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ useRef: closure_4, useCallback: closure_5, useEffect: closure_6 } = result);
result = require("DEFAULT_VIDEO_VOLUME").fileFinishedImporting("modules/video_player/useVideoSegmentAnalytics.tsx");

export default function useVideoSegmentAnalytics(getCurrentVideoTime) {
  getCurrentVideoTime = getCurrentVideoTime.getCurrentVideoTime;
  const onAnalytics = getCurrentVideoTime.onAnalytics;
  const emitIntervalMs = getCurrentVideoTime.emitIntervalMs;
  const minSegmentDurationMs = getCurrentVideoTime.minSegmentDurationMs;
  let tmp = emitIntervalMs(minSegmentDurationMs.useState(null), 2);
  const first = tmp[0];
  const callback = tmp[1];
  let tmp3 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  const first1 = tmp3[0];
  let closure_7 = tmp3[1];
  const tmp5 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  const first2 = tmp5[0];
  let closure_9 = tmp5[1];
  const tmp7 = emitIntervalMs(minSegmentDurationMs.useState(false), 2);
  const first3 = tmp7[0];
  let closure_11 = tmp7[1];
  let closure_12 = first(null);
  let closure_13 = first(Date.now());
  let closure_14 = first(false);
  const items = [onAnalytics];
  let tmp9 = callback((segmentEndSec) => {
    if (segmentEndSec.segmentEndSec >= segmentEndSec.segmentStartSec) {
      const obj = {};
      ({ startTimeMs: obj.start_time, endTimeMs: obj.end_time } = segmentEndSec);
      obj.duration = segmentEndSec.endTimeMs - segmentEndSec.startTimeMs;
      ({ segmentStartSec: obj.segment_start_sec, segmentEndSec: obj.segment_end_sec } = segmentEndSec);
      obj.segment_duration_sec = segmentEndSec.segmentEndSec - segmentEndSec.segmentStartSec;
      onAnalytics(obj);
    }
  }, items);
  let closure_15 = tmp9;
  const items1 = [getCurrentVideoTime, first2, first3];
  const tmp10 = callback(() => {
    const tmp = getCurrentVideoTime();
    if (null != tmp) {
      if (first2) {
        if (first3) {
          const _Date = Date;
          const timestamp = Date.now();
          const obj = { startTimeMs: timestamp, endTimeMs: timestamp, segmentStartSec: tmp, segmentEndSec: tmp };
          callback(obj);
          closure_14.current = true;
        }
      }
    }
  }, items1);
  let closure_16 = tmp10;
  const items2 = [first, tmp9, emitIntervalMs, minSegmentDurationMs, getCurrentVideoTime];
  const tmp11 = callback(() => {
    const tmp = getCurrentVideoTime();
    if (null != tmp) {
      if (null != first) {
        const _Date = Date;
        const timestamp = Date.now();
        let tmp4 = timestamp - ref2.current < emitIntervalMs;
        if (!tmp4) {
          tmp4 = tmp - first.segmentStartSec < minSegmentDurationMs / 1000;
        }
        if (!tmp4) {
          let obj = {};
          const merged = Object.assign(first);
          obj["endTimeMs"] = timestamp;
          obj["segmentEndSec"] = tmp;
          tmp9 = tmp9(obj);
          obj = { startTimeMs: timestamp, endTimeMs: timestamp, segmentStartSec: tmp, segmentEndSec: tmp };
          callback(obj);
          ref2.current = timestamp;
        }
      }
    }
  }, items2);
  let closure_17 = tmp11;
  const items3 = [first2, first3];
  first1(() => {
    let tmp = first2;
    if (first2) {
      tmp = first3;
    }
    if (!tmp) {
      callback(null);
      closure_14.current = false;
    }
  }, items3);
  const items4 = [first1, first2, first3, first, tmp11, tmp9, tmp10, getCurrentVideoTime];
  first1(() => {
    if (first1) {
      if (first2) {
        if (first3) {
          if (!ref3.current) {
            tmp10();
          }
          const _window = window;
          ref.current = window.setInterval(() => {
            outer1_17();
          }, 200);
        }
        return () => {
          if (null != outer1_12.current) {
            const _clearInterval = clearInterval;
            clearInterval(outer1_12.current);
            outer1_12.current = null;
          }
        };
      }
    }
    const tmp3 = getCurrentVideoTime();
    if (null != first) {
      if (null != tmp3) {
        const _Date = Date;
        if (tmp3 - first.segmentStartSec > 0.2) {
          const obj = {};
          const merged = Object.assign(first);
          obj["endTimeMs"] = tmp5;
          obj["segmentEndSec"] = tmp3;
          obj(obj);
        }
      }
    }
    callback(null);
    ref3.current = false;
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }, items4);
  const items5 = [first, tmp9, getCurrentVideoTime];
  const tmp14 = callback(() => {
    const tmp = getCurrentVideoTime();
    if (null != first) {
      if (null != tmp) {
        const _Date = Date;
        if (tmp - first.segmentStartSec > 0.2) {
          const obj = {};
          const merged = Object.assign(first);
          obj["endTimeMs"] = tmp3;
          obj["segmentEndSec"] = tmp;
          tmp9 = tmp9(obj);
        }
        callback(null);
        closure_14.current = false;
      }
    }
  }, items5);
  const tmp15 = first(tmp14);
  let closure_18 = tmp15;
  tmp15.current = tmp14;
  return {
    handlePlayerStateChange: callback((arg0) => {
      if (getCurrentVideoTime(onAnalytics[2]).VideoPlayerState.PLAYING === arg0) {
        callback2(true);
      } else if (getCurrentVideoTime(onAnalytics[2]).VideoPlayerState.PAUSED === arg0) {
        tmp15.current();
        callback2(false);
      }
    }, []),
    handleLoadEnd: callback(() => {
      callback3(true);
    }, []),
    handleFirstFrame: callback(() => {
      callback4(true);
    }, []),
    handleSeek: callback(() => {
      tmp15.current();
    }, [])
  };
};
export const SEGMENT_ANALYTICS_EMIT_INTERVAL_MS = 4000;
export const SEGMENT_ANALYTICS_MIN_DURATION_MS = 2000;
