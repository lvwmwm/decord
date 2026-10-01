// Module ID: 13942
// Function ID: 13943
// Name: useAIShimmerCycle
// Dependencies: [32, 19, 13941, 2]
// Exports: linesFromKey, linesKeyFor, useAIShimmerCycle

// Module 13942 (useAIShimmerCycle)
import waveTransition from "waveTransition" /* 13941 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_12;

const result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/useAIShimmerCycle.tsx");

export const linesKeyFor = function linesKeyFor(join) {
  let joined = join;
  if (Array.isArray(join)) {
    joined = join.join("\0");
  }
  return joined;
};
export const linesFromKey = function linesFromKey(str) {
  return str.split("\0");
};
export const useAIShimmerCycle = function useAIShimmerCycle(initialDelay) {
  let delay;
  let text;
  ({ text, delay } = initialDelay);
  initialDelay = initialDelay.initialDelay;
  const duration = initialDelay.duration;
  const reducedMotion = initialDelay.reducedMotion;
  const trailingWidth = initialDelay.trailingWidth;
  const onComplete = initialDelay.onComplete;
  const onStart = initialDelay.onStart;
  const createController = initialDelay.createController;
  let lines;
  let first;
  closure_12 = undefined;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let closure_17;
  let closure_18;
  let ref6;
  let ref7;
  let ref8;
  let ref9;
  let ref10;
  let current;
  let play;
  let obj = reducedMotion;
  const ref = reducedMotion.useRef(null);
  let joined = text;
  if (Array.isArray(text)) {
    let str = "\0";
    joined = text.join("\0");
  }
  const items = [joined];
  lines = obj.useMemo(() => joined.split("\0"), items);
  const tmp2 = duration(obj.useState(0), 2);
  first = tmp2[0];
  closure_12 = tmp4;
  ref2 = obj.useRef(0);
  ref3 = obj.useRef(null);
  ref4 = obj.useRef(null);
  ref5 = obj.useRef(true);
  closure_17 = obj.useRef(onComplete);
  closure_18 = obj.useRef(onStart);
  ref6 = obj.useRef(lines);
  ref7 = obj.useRef(createController);
  ref8 = obj.useRef(trailingWidth);
  ref9 = obj.useRef(duration);
  ref10 = obj.useRef(reducedMotion);
  const effect = obj.useEffect(() => {
    closure_17.current = onComplete;
    closure_18.current = onStart;
    ref6.current = lines;
    ref7.current = createController;
    ref8.current = trailingWidth;
    ref9.current = duration;
    ref10.current = reducedMotion;
  });
  const tmp6 = duration(obj.useState(joined), 2);
  if (tmp6[0] !== joined) {
    const tmp7 = tmp6[1](joined);
    tmp2[1](0);
  }
  let num = 0;
  if (lines.length > 0) {
    num = first % lines.length;
  }
  current = lines[num];
  if (current == null) {
    current = "";
  }
  play = obj.useCallback(() => {
    closure_12((arg0) => arg0 + 1);
  }, []);
  const items1 = [play];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    play,
    stop() {
      current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    }
  }), items1);
  const effect1 = obj.useEffect(() => {
    let str = ref6.current[0];
    current = ref7.current;
    if (str == null) {
      str = "";
    }
    const obj = {
      to: str,
      trailingWidth: ref8.current,
      onStart() {
        current = ref2.current;
        currentResult = undefined;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      },
      onComplete() {
        current = ref.current;
        currentResult = undefined;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      }
    };
    let currentResult = current(obj);
    delay = currentResult;
    closure_8.current = currentResult;
    return () => {
      delay.destroy();
      ref.current = null;
    };
  }, []);
  const items2 = [duration, reducedMotion, trailingWidth];
  const effect2 = obj.useEffect(() => {
    current = ref.current;
    if (current != null) {
      const obj = { duration, reducedMotion, trailingWidth };
      current.setOptions(obj);
    }
  }, items2);
  const items3 = [joined, first, num, current, delay, initialDelay];
  const effect3 = obj.useEffect(() => {
    current = ref.current;
    if (null != current) {
      const _HermesInternal = HermesInternal;
      const combined = "" + joined + ":" + first;
      if (ref4.current !== combined) {
        ref4.current = combined;
        const current2 = ref3.current;
        ref3.current = current;
        ref5.current = null == current2;
        if (null == current2) {
          current.setTransition(current, current);
        } else {
          current.setTransition(current2, current);
          current.play();
        }
      }
      if (null != delay) {
        let current3;
        let sum;
        if (ref10.current) {
          current3 = waveTransition.REDUCED_MOTION_PASS_MS;
        } else {
          current3 = ref9.current;
        }
        const tmp12 = ref2;
        if (ref5.current) {
          sum = tmp7 + initialDelay;
        } else {
          sum = tmp7 + current3;
        }
        tmp12.current = sum;
      }
    }
  }, items3);
  const items4 = [first, play, delay];
  const effect4 = obj.useEffect(() => {
    if (null != delay) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback, ref2.current);
      return () => clearTimeout(closure_0);
    }
  }, items4);
  return { current, lines };
};
