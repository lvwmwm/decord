// Module ID: 14555
// Function ID: 14556
// Name: useBountiesModalTiming
// Dependencies: [32, 19, 5756, 2]
// Exports: useBountiesModalTiming

// Module 14555 (useBountiesModalTiming)
import QuestConstants from "QuestConstants" /* 5756 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let progress;

let closure_2 = QuestConstants.BOUNTY_CTA_TIMER_MILLISECONDS;
const BountyVideoEndMode = { END_CARD: "END_CARD", END_CARD_WITH_CTA: "END_CARD_WITH_CTA", LOOP: "LOOP", APP_STORE_LOOP: "APP_STORE_LOOP" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalTiming.tsx");

export { BountyVideoEndMode };
export const useBountiesModalTiming = function useBountiesModalTiming(endMode) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let isCompleted;
  let onRewardEarned;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp7;
  let tmp9;
  const f99968 = () => {
    num = 0;
    if (null != num3) {
      num = num / tmp;
    }
    return num;
  };
  endMode = endMode.endMode;
  const rewardDurationMs = endMode.rewardDurationMs;
  ({ isCompleted, onRewardEarned } = endMode);
  const onVideoProgress = endMode.onVideoProgress;
  const onVideoEnd = endMode.onVideoEnd;
  const onVideoLooped = endMode.onVideoLooped;
  const onVideoPaused = endMode.onVideoPaused;
  const onVideoResumed = endMode.onVideoResumed;
  const playerRef = endMode.playerRef;
  let num = endMode.initialProgressSec;
  if (num === undefined) {
    num = 0;
  }
  let num2 = endMode.initialMaxVideoProgressSec;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = endMode.initialVideoDurationSec;
  if (num3 === undefined) {
    num3 = null;
  }
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  let ref;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  const obj = rewardDurationMs;
  let tmp = null != num3;
  const useState = rewardDurationMs.useState;
  if (tmp) {
    tmp = num >= num3 - 1;
  }
  if (tmp) {
    tmp = endMode !== onVideoProgress.LOOP;
  }
  if (tmp) {
    const tmp3 = onVideoProgress;
    tmp = endMode !== onVideoProgress.APP_STORE_LOOP;
  }
  [tmp5, c11] = endMode(useState(tmp), 2);
  const tmp4 = endMode(useState(tmp), 2);
  [tmp7, c12] = endMode(obj.useState(f99968), 2);
  const tmp6 = endMode(obj.useState(f99968), 2);
  let tmp8 = endMode(obj.useState(null), 2);
  [tmp9, c13] = tmp8;
  [tmp11, c14] = endMode(obj.useState(num2), 2);
  const tmp10 = endMode(obj.useState(num2), 2);
  [tmp13, c15] = endMode(obj.useState(num3), 2);
  endMode(obj.useState(num3), 2);
  ref = obj.useRef(isCompleted);
  ref2 = obj.useRef(num2);
  const useRef = obj.useRef;
  if (num3 == null) {
    num3 = 0;
  }
  ref3 = useRef(num3);
  ref4 = obj.useRef(0);
  ref5 = obj.useRef(num);
  const items = [onVideoProgress, onRewardEarned, rewardDurationMs];
  const items1 = [endMode, onVideoEnd, onVideoLooped, onRewardEarned];
  const callback = obj.useCallback((progress) => {
    let currentTime;
    let seekableDuration;
    ({ currentTime, seekableDuration } = progress);
    progress = progress.progress;
    _undefined3(null);
    const bound = Math.max(currentTime, ref2.current);
    ref2.current = bound;
    ref3.current = seekableDuration;
    ref5.current = currentTime;
    _undefined2(progress);
    _undefined4(bound);
    _undefined5(seekableDuration);
    onVideoProgress(bound, seekableDuration, currentTime);
    const current = ref.current;
    let tmp8 = !current;
    const tmp7 = ref;
    if (!current) {
      tmp8 = 1000 * bound >= rewardDurationMs;
    }
    if (tmp8) {
      tmp7.current = true;
      onRewardEarned();
    }
  }, items);
  const items2 = [playerRef];
  const callback1 = obj.useCallback(() => {
    onVideoEnd(ref2.current, ref3.current, ref5.current);
    const tmp = ref5;
    if (endMode !== obj.LOOP) {
      if (tmp3 !== obj.APP_STORE_LOOP) {
        _undefined(true);
      }
      if (!ref.current) {
        tmp7.current = true;
        onRewardEarned();
      }
    }
    ref4.current = ref4.current + 1;
    onVideoLooped(ref4.current);
    tmp.current = 0;
  }, items1);
  const callback2 = obj.useCallback(() => {
    if (playerRef != null) {
      const current = playerRef.current;
      if (current != null) {
        current.seekToStart();
      }
    }
    _undefined3(0);
    _undefined(false);
  }, items2);
  const items3 = [onVideoPaused];
  const callback3 = obj.useCallback(() => {
    _undefined(true);
  }, []);
  const items4 = [onVideoResumed];
  const callback4 = obj.useCallback((arg0) => {
    onVideoPaused(ref5.current, arg0);
  }, items3);
  const result = 1000 * tmp11;
  const result1 = rewardDurationMs / 1000;
  const callback5 = obj.useCallback((arg0) => {
    onVideoResumed(ref5.current, arg0);
  }, items4);
  let bound = Math.max(0, result1 - tmp11);
  let num5 = 0;
  if (result < rewardDurationMs) {
    num5 = 0;
    if (!tmp5) {
      num5 = 0;
      if (!isCompleted) {
        num5 = bound;
        if (null != tmp13) {
          num5 = bound;
          if (tmp13 > 0) {
            const _Math = Math;
            const _Math2 = Math;
            num5 = Math.max(0, Math.min(result1, tmp13) - tmp11);
          }
        }
      }
    }
  }
  const tmp23 = tmp5 && endMode !== onVideoProgress.END_CARD_WITH_CTA;
  if (!isCompleted) {
    isCompleted = result > onRewardEarned;
  }
  if (isCompleted) {
    isCompleted = !tmp23;
  }
  const obj2 = { isCtaVisible: isCompleted, isEndCardVisible: tmp5, handleVideoEnd: callback1, handleVideoProgress: callback, handleVideoPaused: callback4, handleVideoResumed: callback5, handleReplay: callback2, showEndCard: callback3, rewardRemainingSeconds: num5, rewardTotalSeconds: result1, normalizedProgress: tmp9, maxVideoProgressSeconds: tmp11, videoDuration: tmp13 };
  return obj2;
};
