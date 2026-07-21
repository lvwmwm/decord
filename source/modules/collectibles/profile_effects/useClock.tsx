// Module ID: 8216
// Function ID: 64940
// Name: allowableMinInterval
// Dependencies: []
// Exports: default

// Module 8216 (allowableMinInterval)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/profile_effects/useClock.tsx");

export default function _default(arg0) {
  let obj = arg1;
  const importDefault = arg0;
  if (arg1 === undefined) {
    obj = {};
  }
  let num = obj.minInterval;
  if (num === undefined) {
    num = 41.666666666666664;
  }
  const dependencyMap = num;
  const allowableMinInterval = obj.allowableMinInterval;
  const React = allowableMinInterval;
  const droppedFramesCallbackThreshold = obj.droppedFramesCallbackThreshold;
  const droppedFramesCallback = obj.droppedFramesCallback;
  let num2 = obj.droppedFramesResetTime;
  if (num2 === undefined) {
    num2 = 3000;
  }
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let ticking;
  let closure_11;
  let closure_12;
  let callback;
  let stop;
  let callback2;
  closure_6 = React.useRef(num);
  closure_7 = React.useRef(0);
  closure_8 = React.useRef(undefined);
  closure_9 = React.useRef(undefined);
  ticking = React.useRef(true);
  closure_11 = React.useRef(0);
  closure_12 = React.useRef(undefined);
  callback = React.useCallback(() => {
    closure_11.current = 0;
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
      closure_12.current = undefined;
    }
  }, []);
  stop = React.useCallback(() => {
    ticking.current = false;
    cancelAnimationFrame(ref2.current);
    clearTimeout(closure_12.current);
  }, []);
  const items = [allowableMinInterval, callback, num2, droppedFramesCallbackThreshold, droppedFramesCallback, arg0];
  callback2 = React.useCallback((current) => {
    if (ticking.current) {
      if (null == ref3.current) {
        ref3.current = current;
      }
      if (null == ref4.current) {
        ref4.current = current;
      }
      const diff = current - ref4.current;
      let num = 120;
      const diff1 = current - ref3.current;
      if (null != allowableMinInterval) {
        num = allowableMinInterval;
      }
      if (diff1 > 1.5 * Math.min(num, ref.current)) {
        ref5.current = ref5.current + 1;
        if (null != closure_12.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_12.current);
        }
        const _setTimeout = setTimeout;
        closure_12.current = setTimeout(callback, num2);
        if (null != droppedFramesCallbackThreshold) {
          if (ref5.current > droppedFramesCallbackThreshold) {
            current(num[1])(null != droppedFramesCallback, "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit");
            if (droppedFramesCallback()) {
              ref5.current = 0;
            }
          }
        }
      }
      ref3.current = current;
      if (diff >= ref.current - 3) {
        ref4.current = current;
        current(diff);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      closure_7.current = requestAnimationFrame(callback2);
    }
  }, items);
  const items1 = [callback2];
  const items2 = [num];
  const reset = React.useCallback(() => {
    ticking.current = true;
    closure_9.current = undefined;
    cancelAnimationFrame(ref2.current);
    ref2.current = requestAnimationFrame(callback2);
  }, items1);
  const effect = React.useEffect(() => {
    closure_6.current = num;
  }, items2);
  importDefault(dependencyMap[2])(() => {
    closure_7.current = requestAnimationFrame(callback2);
    return () => callback();
  });
  return { stop, reset, ticking };
};
