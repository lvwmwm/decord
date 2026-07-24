// Module ID: 13977
// Function ID: 106931
// Name: BountyVideoEndMode
// Dependencies: [57, 31, 4976, 10868, 2]
// Exports: useBountiesModalTiming

// Module 13977 (BountyVideoEndMode)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";

const require = arg1;
let obj = { END_CARD: "END_CARD", END_CARD_WITH_CTA: "END_CARD_WITH_CTA", LOOP: "LOOP" };
let result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesModalTiming.tsx");

export const BountyVideoEndMode = obj;
export const useBountiesModalTiming = function useBountiesModalTiming(endMode) {
  let c12;
  let c13;
  let c14;
  let c15;
  let isCompleted;
  let onRewardEarned;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp9;
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
  let prop = endMode.initialVideoDurationSec;
  if (prop === undefined) {
    prop = null;
  }
  let closure_11;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let tmp3 = null != prop;
  if (tmp3) {
    tmp3 = num >= prop - 1;
  }
  if (tmp3) {
    tmp3 = endMode !== onVideoLooped.LOOP;
  }
  const tmp5 = onRewardEarned(onVideoProgress.useState(tmp3), 2);
  const first = tmp5[0];
  closure_11 = tmp5[1];
  [tmp9, c12] = onRewardEarned(onVideoProgress.useState(() => {
    let num = 0;
    if (null != prop) {
      num = num / prop;
    }
    return num;
  }), 2);
  const tmp8 = onRewardEarned(onVideoProgress.useState(() => {
    let num = 0;
    if (null != prop) {
      num = num / prop;
    }
    return num;
  }), 2);
  [tmp11, c13] = onRewardEarned(onVideoProgress.useState(null), 2);
  const tmp10 = onRewardEarned(onVideoProgress.useState(null), 2);
  [tmp13, c14] = onRewardEarned(onVideoProgress.useState(num2), 2);
  const tmp12 = onRewardEarned(onVideoProgress.useState(num2), 2);
  [tmp15, c15] = onRewardEarned(onVideoProgress.useState(prop), 2);
  closure_16 = onVideoProgress.useRef(isCompleted);
  closure_17 = onVideoProgress.useRef(num2);
  let num4 = 0;
  if (null != prop) {
    num4 = prop;
  }
  closure_18 = onVideoProgress.useRef(num4);
  closure_19 = onVideoProgress.useRef(0);
  closure_20 = onVideoProgress.useRef(num);
  const items = [onVideoProgress, onRewardEarned, rewardDurationMs];
  const items1 = [endMode, onVideoEnd, onVideoLooped, onRewardEarned];
  const callback = onVideoProgress.useCallback((progress) => {
    let currentTime;
    let seekableDuration;
    ({ currentTime, seekableDuration } = progress);
    _undefined2(null);
    const bound = Math.max(currentTime, ref2.current);
    ref2.current = bound;
    closure_18.current = seekableDuration;
    closure_20.current = currentTime;
    _undefined(progress.progress);
    _undefined3(bound);
    _undefined4(seekableDuration);
    onVideoProgress(bound, seekableDuration, currentTime);
    let tmp7 = !ref.current;
    if (tmp7) {
      tmp7 = 1000 * bound >= rewardDurationMs;
    }
    if (tmp7) {
      ref.current = true;
      onRewardEarned();
    }
  }, items);
  const items2 = [playerRef];
  const callback1 = onVideoProgress.useCallback(() => {
    onVideoEnd(ref2.current, ref3.current, ref5.current);
    if (endMode === onVideoLooped.LOOP) {
      ref4.current = ref4.current + 1;
      onVideoLooped(ref4.current);
      ref5.current = 0;
    } else {
      callback(true);
    }
    if (!ref.current) {
      ref.current = true;
      onRewardEarned();
    }
  }, items1);
  const items3 = [onVideoPaused];
  const callback2 = onVideoProgress.useCallback(() => {
    let tmp = null == playerRef;
    if (!tmp) {
      const current = playerRef.current;
      tmp = null == current;
      const obj = current;
    }
    if (!tmp) {
      obj.seekToStart();
    }
    _undefined2(0);
    callback(false);
  }, items2);
  const items4 = [onVideoResumed];
  const callback3 = onVideoProgress.useCallback((arg0) => {
    onVideoPaused(ref5.current, arg0);
  }, items3);
  const result = 1000 * tmp13;
  const result1 = rewardDurationMs / 1000;
  const callback4 = onVideoProgress.useCallback((arg0) => {
    onVideoResumed(ref5.current, arg0);
  }, items4);
  let bound = Math.max(0, result1 - tmp13);
  let num5 = 0;
  if (result < rewardDurationMs) {
    num5 = 0;
    if (!first) {
      num5 = 0;
      if (!isCompleted) {
        num5 = bound;
        if (null != tmp15) {
          num5 = bound;
          if (tmp15 > 0) {
            const _Math = Math;
            const _Math2 = Math;
            num5 = Math.max(0, Math.min(result1, tmp15) - tmp13);
          }
        }
      }
    }
  }
  let obj = endMode(rewardDurationMs[3]);
  let tmp24 = first;
  if (first) {
    tmp24 = endMode !== onVideoLooped.END_CARD_WITH_CTA;
  }
  obj = {};
  if (!isCompleted) {
    isCompleted = result > obj.useBountiesExperience(onVideoEnd.VIDEO_MODAL_MOBILE).ctaTimerMilliSeconds;
  }
  if (isCompleted) {
    isCompleted = !tmp24;
  }
  obj.isCtaVisible = isCompleted;
  obj.isEndCardVisible = first;
  obj.handleVideoEnd = callback1;
  obj.handleVideoProgress = callback;
  obj.handleVideoPaused = callback3;
  obj.handleVideoResumed = callback4;
  obj.handleReplay = callback2;
  obj.rewardRemainingSeconds = num5;
  obj.rewardTotalSeconds = result1;
  if (null != tmp11) {
    tmp9 = tmp11;
  }
  obj.normalizedProgress = tmp9;
  obj.maxVideoProgressSeconds = tmp13;
  obj.videoDuration = tmp15;
  return obj;
};
