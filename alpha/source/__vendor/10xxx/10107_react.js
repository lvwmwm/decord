// Module ID: 10107
// Function ID: 10108
// Name: react
// Dependencies: [19]
// Exports: useAutoPlay

// Module 10107 (react)
import react from "react" /* 19 */;


export const useAutoPlay = function useAutoPlay(autoPlay) {
  autoPlay = autoPlay.autoPlay;
  let tmp = undefined !== autoPlay && autoPlay;
  let closure_0 = tmp;
  const autoPlayReverse = autoPlay.autoPlayReverse;
  const tmp2 = undefined !== autoPlayReverse && autoPlayReverse;
  let closure_1 = tmp2;
  const autoPlayInterval = autoPlay.autoPlayInterval;
  const prev = iter.prev;
  const next = iter.next;
  let closure_5 = react.useRef();
  let closure_6 = react.useRef(!tmp);
  const items = [tmp2, autoPlayInterval, prev, next];
  const callback = react.useCallback(() => {
    let onFinished;
    if (!ref2.current) {
      let tmp = ref;
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      const _setTimeout = setTimeout;
      tmp.current = setTimeout(() => {
        const tmp = closure_1_1;
        if (tmp) {
          const obj2 = { onFinished };
          prev(obj2);
        } else {
          const obj = { onFinished };
          next(obj);
        }
      }, autoPlayInterval);
    }
  }, items);
  const items1 = [tmp];
  const pause = react.useCallback(() => {
    const tmp = closure_0;
    if (tmp) {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp2.current);
      }
      ref2.current = true;
    }
  }, items1);
  const items2 = [callback, tmp];
  const start = react.useCallback(() => {
    const tmp = closure_0;
    if (tmp) {
      ref2.current = false;
      callback();
    }
  }, items2);
  const items3 = [pause, start, tmp];
  const effect = react.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      start();
    } else {
      pause();
    }
    return pause;
  }, items3);
  return { pause, start };
};
