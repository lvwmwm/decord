// Module ID: 13964
// Function ID: 106808
// Name: set
// Dependencies: [57, 31, 27, 4976, 10869, 13963, 3991, 4131, 4134, 4096, 2]
// Exports: clearDismissedScrollAffordanceBountyIds, useBountiesAutoScroll

// Module 13964 (set)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AppState } from "get ActivityIndicator";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import set from "get ActivityIndicator";

const require = arg1;
let set = new Set();
let result = set.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesAutoScroll.tsx");

export const AUTO_SCROLL_PEEK_SCALE = 0.83;
export const AUTO_SCROLL_PEEK_TOP_OFFSET = 54;
export const clearDismissedScrollAffordanceBountyIds = function clearDismissedScrollAffordanceBountyIds() {
  set.clear();
};
export const useBountiesAutoScroll = function useBountiesAutoScroll(listRef) {
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let tmp10;
  let tmp12;
  let tmp20;
  let tmp21;
  let tmp6;
  let tmp8;
  listRef = listRef.listRef;
  const enabled = listRef.enabled;
  const mode = listRef.mode;
  const activeIndex = listRef.activeIndex;
  const activeBountyId = listRef.activeBountyId;
  const slotHeight = listRef.slotHeight;
  const onCountdownCancelled = listRef.onCountdownCancelled;
  let callback5;
  let callback6;
  let callback7;
  let callback8;
  let callback9;
  let callback10;
  let callback11;
  let callback12;
  const BountiesVerticalScrollExperiment = listRef(enabled[4]).BountiesVerticalScrollExperiment;
  let obj = { location: slotHeight.VIDEO_MODAL_MOBILE };
  const config = BountiesVerticalScrollExperiment.useConfig(obj);
  const ctaTimerMilliSeconds = config.ctaTimerMilliSeconds;
  let result = config.autoScrollLeadMs / 1000;
  const sum = result + config.autoScrollEndCardMs / 1000;
  const first = mode(listRef(enabled[5]).useForceBountiesSwipeUpNux(), 1)[0];
  const obj2 = listRef(enabled[5]);
  [tmp6, closure_11] = mode(activeIndex.useState(false), 2);
  const tmp5 = mode(activeIndex.useState(false), 2);
  [tmp8, closure_12] = mode(activeIndex.useState(false), 2);
  let tmp7 = mode(activeIndex.useState(false), 2);
  [tmp10, closure_13] = mode(activeIndex.useState(0), 2);
  const tmp9 = mode(activeIndex.useState(0), 2);
  [tmp12, closure_14] = mode(activeIndex.useState(false), 2);
  let closure_15 = activeIndex.useRef(false);
  let closure_16 = activeIndex.useRef(false);
  let closure_17 = activeIndex.useRef(false);
  let closure_18 = activeIndex.useRef(false);
  let closure_19 = activeIndex.useRef(null);
  let closure_20 = activeIndex.useRef(null);
  let closure_21 = activeIndex.useRef(0);
  let closure_22 = activeIndex.useRef(null);
  let closure_23 = activeIndex.useRef(false);
  let closure_24 = activeIndex.useRef(false);
  const tmp11 = mode(activeIndex.useState(false), 2);
  const sharedValue = listRef(enabled[6]).useSharedValue(1);
  let closure_26 = activeIndex.useRef(sum);
  const callback = activeIndex.useCallback(() => {
    if (null != closure_19.current) {
      const _clearInterval = clearInterval;
      clearInterval(closure_19.current);
      closure_19.current = null;
    }
    closure_22.current = null;
  }, []);
  const callback1 = activeIndex.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [first];
  const callback2 = activeIndex.useCallback((arg0) => {
    let tmp = first;
    if (!first) {
      tmp = null == arg0;
    }
    if (!tmp) {
      onCountdownCancelled.add(arg0);
    }
  }, items);
  const items1 = [first];
  const callback3 = activeIndex.useCallback((arg0) => {
    let hasItem = !first;
    if (hasItem) {
      hasItem = null != arg0;
    }
    if (hasItem) {
      hasItem = onCountdownCancelled.has(arg0);
    }
    return hasItem;
  }, items1);
  const callback4 = activeIndex.useCallback(() => {
    callback(false);
    callback2(false);
    callback3(0);
    callback4(false);
  }, []);
  const obj3 = listRef(enabled[6]);
  [tmp20, tmp21] = mode(activeIndex.useState(activeIndex), 2);
  const tmp22 = mode(activeIndex.useState(activeBountyId), 2);
  let tmp23 = tmp20 === activeIndex;
  if (tmp23) {
    tmp23 = tmp22[0] === activeBountyId;
  }
  if (!tmp23) {
    tmp21(activeIndex);
    tmp22[1](activeBountyId);
    callback4();
  }
  const items2 = [activeIndex, activeBountyId, callback, callback1, sharedValue, callback3];
  const effect = activeIndex.useEffect(() => {
    callback();
    callback1();
    closure_15.current = callback3(activeBountyId);
    closure_16.current = callback3(activeBountyId);
    closure_17.current = false;
    closure_18.current = false;
    closure_21.current = 0;
    closure_23.current = false;
    closure_24.current = false;
    const result = sharedValue.set(1);
  }, items2);
  const items3 = [callback, callback1];
  const effect1 = activeIndex.useEffect(() => () => {
    outer1_27();
    outer1_28();
  }, items3);
  const items4 = [sum];
  const effect2 = activeIndex.useEffect(() => {
    closure_26.current = closure_9;
  }, items4);
  const items5 = [activeBountyId, callback1, callback2, sharedValue, callback3];
  callback5 = activeIndex.useCallback(() => {
    let num = arg0;
    if (arg0 === undefined) {
      num = 0;
    }
    let current = closure_16.current;
    if (!current) {
      current = closure_15.current;
    }
    if (!current) {
      current = callback3(activeBountyId);
    }
    let flag = !current;
    if (flag) {
      closure_16.current = true;
      callback2(activeBountyId);
      callback1();
      let _setTimeout = setTimeout;
      closure_20.current = setTimeout(() => {
        outer1_20.current = null;
        let current = outer1_15.current;
        if (!current) {
          current = outer1_18.current;
        }
        if (!current) {
          const result = outer1_25.set(listRef(enabled[7]).withTiming(0.83, listRef(enabled[8]).timingSlow));
          outer1_12(true);
          const _setTimeout = setTimeout;
          outer1_20.current = setTimeout(() => {
            outer2_20.current = null;
            let current = outer2_15.current;
            if (!current) {
              current = outer2_18.current;
            }
            if (!current) {
              outer2_11(true);
            }
          }, 500);
          const obj = listRef(enabled[7]);
        }
      }, num);
      flag = true;
    }
    return flag;
  }, items5);
  const items6 = [activeBountyId, activeIndex, callback, callback1, listRef, callback2, sharedValue, callback4, slotHeight];
  callback6 = activeIndex.useCallback(() => {
    let current = closure_18.current;
    if (!current) {
      current = closure_15.current;
    }
    if (!current) {
      closure_18.current = true;
      callback2(activeBountyId);
      callback();
      callback1();
      callback4();
      const result = sharedValue.set(1);
      const current2 = listRef.current;
      if (null != current2) {
        const obj = { offset: (activeIndex + 1) * slotHeight, animated: true };
        current2.scrollToOffset(obj);
      }
    }
  }, items6);
  const items7 = [callback6];
  callback7 = activeIndex.useCallback(() => {
    if (!closure_15.current) {
      if (!closure_23.current) {
        const _Date = Date;
        const timestamp = Date.now();
        if (null != closure_22.current) {
          ref2.current = ref2.current + (timestamp - closure_22.current);
        }
        closure_22.current = timestamp;
        const current = ref4.current;
        const result = ref2.current / 1000;
        if (result >= current) {
          callback6();
        } else {
          callback3(result / current);
        }
      }
    }
  }, items7);
  const items8 = [callback7];
  callback8 = activeIndex.useCallback(() => {
    let current = closure_17.current;
    if (!current) {
      current = null != closure_19.current;
    }
    if (!current) {
      current = closure_23.current;
    }
    if (!current) {
      closure_17.current = true;
      closure_21.current = 0;
      const _Date = Date;
      closure_22.current = Date.now();
      callback3(0);
      callback4(true);
      const _setInterval = setInterval;
      closure_19.current = setInterval(callback7, 50);
    }
  }, items8);
  const items9 = [callback];
  callback9 = activeIndex.useCallback(() => {
    if (closure_17.current) {
      if (!closure_23.current) {
        if (null != closure_19.current) {
          const _Date = Date;
          if (null != closure_22.current) {
            ref2.current = ref2.current + (tmp5 - closure_22.current);
          }
          closure_23.current = true;
          callback();
        }
      }
    }
  }, items9);
  const items10 = [callback7];
  callback10 = activeIndex.useCallback(() => {
    let current = closure_17.current;
    if (current) {
      current = closure_23.current;
    }
    if (current) {
      current = !closure_15.current;
    }
    if (current) {
      current = !closure_18.current;
    }
    if (current) {
      closure_23.current = false;
      const _Date = Date;
      closure_22.current = Date.now();
      const _setInterval = setInterval;
      closure_19.current = setInterval(callback7, 50);
    }
  }, items10);
  const items11 = [callback9];
  callback11 = activeIndex.useCallback(() => {
    if (!closure_23.current) {
      callback9();
      closure_24.current = true;
    }
  }, items11);
  const items12 = [callback10];
  callback12 = activeIndex.useCallback(() => {
    let current = ref3.current;
    if (current) {
      current = !listRef(enabled[9]).getIsInAppBrowserOpen();
      const obj = listRef(enabled[9]);
    }
    if (current) {
      ref3.current = false;
      callback10();
    }
  }, items12);
  const items13 = [callback11, callback12];
  const effect3 = activeIndex.useEffect(() => {
    let closure_0 = activeBountyId.addEventListener("change", (arg0) => {
      if ("active" === arg0) {
        outer1_39();
      } else {
        outer1_38();
      }
    });
    let closure_1 = listRef(enabled[9]).subscribeToIsInAppBrowserOpen((arg0) => {
      if (arg0) {
        outer1_38();
      } else {
        outer1_39();
      }
    });
    return () => {
      closure_0.remove();
      callback();
    };
  }, items13);
  const items14 = [activeBountyId, callback, callback1, callback2, mode, onCountdownCancelled, sharedValue, callback4];
  const items15 = [activeBountyId, callback, callback1, callback2, sharedValue, callback4];
  const callback13 = activeIndex.useCallback((arg0) => {
    let current = !closure_16.current;
    if (!current) {
      current = closure_15.current;
    }
    if (!current) {
      current = closure_18.current;
    }
    if (!current) {
      closure_15.current = true;
      callback2(activeBountyId);
      callback();
      callback(false);
      callback3(0);
      const result = sharedValue.set(listRef(enabled[7]).withTiming(1, listRef(enabled[8]).timingStandard));
      if ("countdown" === mode) {
        if (null != onCountdownCancelled) {
          onCountdownCancelled(arg0);
        }
      }
      callback1();
      callback4();
      const obj = listRef(enabled[7]);
    }
  }, items14);
  const items16 = [callback1, callback4];
  const callback14 = activeIndex.useCallback(() => {
    if (closure_16.current) {
      closure_15.current = true;
      callback2(activeBountyId);
      callback();
      callback1();
      callback4();
      const result = sharedValue.set(1);
    }
  }, items15);
  const items17 = [result, ctaTimerMilliSeconds, enabled, mode, callback5, callback8];
  const callback15 = activeIndex.useCallback(() => {
    closure_18.current = false;
    callback1();
    callback4();
    return closure_18.current;
  }, items16);
  const items18 = [activeBountyId, enabled, mode, callback10, callback5, callback8, callback3];
  const callback16 = activeIndex.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    let tmp = arg2;
    let tmp2 = arg4;
    let current = !enabled;
    if (!current) {
      current = "countdown" !== mode;
    }
    if (!current) {
      current = closure_15.current;
    }
    if (!current) {
      current = closure_18.current;
    }
    if (!current) {
      current = arg1 <= 0;
    }
    if (!current) {
      let tmp7 = !closure_16.current;
      if (tmp7) {
        if (!tmp2) {
          tmp2 = 1000 * arg3 > ctaTimerMilliSeconds;
        }
        tmp7 = tmp2;
      }
      if (tmp7) {
        callback5(5000);
      }
      if (tmp) {
        tmp = !closure_17.current;
      }
      if (tmp) {
        if (arg1 - arg0 <= closure_8) {
          callback8();
        }
      }
    }
  }, items17);
  obj = {
    visible: tmp6,
    peekActive: tmp8,
    progress: tmp10,
    showProgressRing: tmp12,
    peekScale: sharedValue,
    cancel: callback13,
    dismissOnClose: callback14,
    takeDidAutoScroll: callback15,
    onPlaybackTimeChange: callback16,
    onEndCardVisible: activeIndex.useCallback(() => {
      let current = !enabled;
      if (!current) {
        current = closure_15.current;
      }
      if (!current) {
        current = callback3(activeBountyId);
      }
      if (!current) {
        if ("hint" !== mode) {
          if (!closure_16.current) {
            callback5();
          }
          if (closure_17.current) {
            if (closure_23.current) {
              callback10();
            }
          } else {
            callback8();
          }
        } else {
          callback5();
        }
      }
    }, items18),
    pauseCountdown: callback9,
    resumeCountdown: callback10
  };
  return obj;
};
