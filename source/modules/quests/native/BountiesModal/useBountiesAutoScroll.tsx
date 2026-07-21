// Module ID: 13792
// Function ID: 104295
// Name: set
// Dependencies: []
// Exports: clearDismissedScrollAffordanceBountyIds, useBountiesAutoScroll

// Module 13792 (set)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const AppState = arg1(dependencyMap[2]).AppState;
const QuestsExperimentLocations = arg1(dependencyMap[3]).QuestsExperimentLocations;
const set = new Set();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesAutoScroll.tsx");

export const AUTO_SCROLL_PEEK_SCALE = 0.83;
export const AUTO_SCROLL_PEEK_TOP_OFFSET = 54;
export const clearDismissedScrollAffordanceBountyIds = function clearDismissedScrollAffordanceBountyIds() {
  set.clear();
};
export const useBountiesAutoScroll = function useBountiesAutoScroll(listRef) {
  let tmp10;
  let tmp12;
  let tmp20;
  let tmp21;
  let tmp6;
  let tmp8;
  listRef = listRef.listRef;
  const arg1 = listRef;
  const enabled = listRef.enabled;
  const dependencyMap = enabled;
  const mode = listRef.mode;
  let callback = mode;
  const activeIndex = listRef.activeIndex;
  const React = activeIndex;
  const activeBountyId = listRef.activeBountyId;
  const AppState = activeBountyId;
  const slotHeight = listRef.slotHeight;
  const QuestsExperimentLocations = slotHeight;
  const onCountdownCancelled = listRef.onCountdownCancelled;
  let callback5;
  let callback6;
  let callback7;
  let callback8;
  let callback9;
  let callback10;
  let callback11;
  let callback12;
  const BountiesVerticalScrollExperiment = arg1(dependencyMap[4]).BountiesVerticalScrollExperiment;
  let obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
  const config = BountiesVerticalScrollExperiment.useConfig(obj);
  const ctaTimerMilliSeconds = config.ctaTimerMilliSeconds;
  const result = config.autoScrollLeadMs / 1000;
  const sum = result + config.autoScrollEndCardMs / 1000;
  const first = callback(arg1(dependencyMap[5]).useForceBountiesSwipeUpNux(), 1)[0];
  const obj2 = arg1(dependencyMap[5]);
  [tmp6, closure_11] = callback(React.useState(false), 2);
  const tmp5 = callback(React.useState(false), 2);
  [tmp8, closure_12] = callback(React.useState(false), 2);
  const tmp7 = callback(React.useState(false), 2);
  [tmp10, closure_13] = callback(React.useState(0), 2);
  const tmp9 = callback(React.useState(0), 2);
  [tmp12, closure_14] = callback(React.useState(false), 2);
  let closure_15 = React.useRef(false);
  let closure_16 = React.useRef(false);
  let closure_17 = React.useRef(false);
  let closure_18 = React.useRef(false);
  let closure_19 = React.useRef(null);
  let closure_20 = React.useRef(null);
  let closure_21 = React.useRef(0);
  let closure_22 = React.useRef(null);
  let closure_23 = React.useRef(false);
  let closure_24 = React.useRef(false);
  const tmp11 = callback(React.useState(false), 2);
  const sharedValue = arg1(dependencyMap[6]).useSharedValue(1);
  let closure_26 = React.useRef(sum);
  callback = React.useCallback(() => {
    if (null != closure_19.current) {
      const _clearInterval = clearInterval;
      clearInterval(closure_19.current);
      closure_19.current = null;
    }
    closure_22.current = null;
  }, []);
  const callback1 = React.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [first];
  const callback2 = React.useCallback((arg0) => {
    let tmp = first;
    if (!first) {
      tmp = null == arg0;
    }
    if (!tmp) {
      onCountdownCancelled.add(arg0);
    }
  }, items);
  const items1 = [first];
  const callback3 = React.useCallback((arg0) => {
    let hasItem = !first;
    if (hasItem) {
      hasItem = null != arg0;
    }
    if (hasItem) {
      hasItem = onCountdownCancelled.has(arg0);
    }
    return hasItem;
  }, items1);
  const callback4 = React.useCallback(() => {
    callback(false);
    callback2(false);
    callback3(0);
    callback4(false);
  }, []);
  const obj3 = arg1(dependencyMap[6]);
  [tmp20, tmp21] = callback(React.useState(activeIndex), 2);
  const tmp22 = callback(React.useState(activeBountyId), 2);
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
  const effect = React.useEffect(() => {
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
  const effect1 = React.useEffect(() => () => {
    callback();
    callback2();
  }, items3);
  const items4 = [sum];
  const effect2 = React.useEffect(() => {
    closure_26.current = sum;
  }, items4);
  const items5 = [activeBountyId, callback1, callback2, sharedValue, callback3];
  callback5 = React.useCallback(() => {
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
      const _setTimeout = setTimeout;
      closure_20.current = setTimeout(() => {
        closure_20.current = null;
        let current = ref.current;
        if (!current) {
          current = ref2.current;
        }
        if (!current) {
          const result = closure_25.set(callback(closure_1[7]).withTiming(0.83, callback(closure_1[8]).timingSlow));
          callback2(true);
          const _setTimeout = setTimeout;
          closure_20.current = setTimeout(() => {
            closure_20.current = null;
            let current = ref.current;
            if (!current) {
              current = ref2.current;
            }
            if (!current) {
              callback(true);
            }
          }, 500);
          const obj = callback(closure_1[7]);
        }
      }, num);
      flag = true;
    }
    return flag;
  }, items5);
  const items6 = [activeBountyId, activeIndex, callback, callback1, listRef, callback2, sharedValue, callback4, slotHeight];
  callback6 = React.useCallback(() => {
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
  callback7 = React.useCallback(() => {
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
  callback8 = React.useCallback(() => {
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
  callback9 = React.useCallback(() => {
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
  callback10 = React.useCallback(() => {
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
  callback11 = React.useCallback(() => {
    if (!closure_23.current) {
      callback9();
      closure_24.current = true;
    }
  }, items11);
  const items12 = [callback10];
  callback12 = React.useCallback(() => {
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
  const effect3 = React.useEffect(() => {
    const listRef = activeBountyId.addEventListener("change", (arg0) => {
      if ("active" === arg0) {
        callback3();
      } else {
        callback2();
      }
    });
    closure_1 = listRef(closure_1[9]).subscribeToIsInAppBrowserOpen((arg0) => {
      if (arg0) {
        callback2();
      } else {
        callback3();
      }
    });
    return () => {
      closure_0.remove();
      callback();
    };
  }, items13);
  const items14 = [activeBountyId, callback, callback1, callback2, mode, onCountdownCancelled, sharedValue, callback4];
  const items15 = [activeBountyId, callback, callback1, callback2, sharedValue, callback4];
  const callback13 = React.useCallback((arg0) => {
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
  const callback14 = React.useCallback(() => {
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
  const callback15 = React.useCallback(() => {
    closure_18.current = false;
    callback1();
    callback4();
    return closure_18.current;
  }, items16);
  const items18 = [activeBountyId, enabled, mode, callback10, callback5, callback8, callback3];
  const callback16 = React.useCallback((arg0, arg1, arg2, arg3, arg4) => {
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
        if (arg1 - arg0 <= result) {
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
    onEndCardVisible: React.useCallback(() => {
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
