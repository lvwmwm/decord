// Module ID: 9749
// Function ID: 75742
// Name: useAutoPlay
// Dependencies: [31]
// Exports: useAutoPlay

// Module 9749 (useAutoPlay)
import result from "result";


export const useAutoPlay = function useAutoPlay(autoPlay) {
  autoPlay = autoPlay.autoPlay;
  const React = tmp;
  const autoPlayReverse = autoPlay.autoPlayReverse;
  let closure_1 = tmp2;
  const autoPlayInterval = autoPlay.autoPlayInterval;
  const prev = iter.prev;
  const next = iter.next;
  let closure_5 = React.useRef();
  let closure_6 = React.useRef(!tmp);
  const items = [undefined !== autoPlayReverse && autoPlayReverse, autoPlayInterval, prev, next];
  const callback = React.useCallback(() => {
    if (!ref.current) {
      if (closure_5.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_5.current);
      }
      const _setTimeout = setTimeout;
      closure_5.current = setTimeout(() => {
        if (outer1_1) {
          let obj = { onFinished: outer1_7 };
          outer1_3(obj);
        } else {
          obj = { onFinished: outer1_7 };
          outer1_4(obj);
        }
      }, autoPlayInterval);
    }
  }, items);
  const items1 = [undefined !== autoPlay && autoPlay];
  const pause = React.useCallback(() => {
    if (result) {
      if (closure_5.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_5.current);
      }
      closure_6.current = true;
    }
  }, items1);
  const items2 = [callback, undefined !== autoPlay && autoPlay];
  const start = React.useCallback(() => {
    if (result) {
      closure_6.current = false;
      callback();
    }
  }, items2);
  const items3 = [pause, start, undefined !== autoPlay && autoPlay];
  const effect = React.useEffect(() => {
    if (result) {
      start();
    } else {
      pause();
    }
    return pause;
  }, items3);
  return { pause, start };
};
