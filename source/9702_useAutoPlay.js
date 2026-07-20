// Module ID: 9702
// Function ID: 75448
// Name: useAutoPlay
// Dependencies: []
// Exports: useAutoPlay

// Module 9702 (useAutoPlay)
let closure_0 = importAll(dependencyMap[0]);

export const useAutoPlay = function useAutoPlay(autoPlay) {
  autoPlay = autoPlay.autoPlay;
  const React = tmp;
  const autoPlayReverse = autoPlay.autoPlayReverse;
  const tmp2 = undefined !== autoPlayReverse && autoPlayReverse;
  const autoPlayInterval = autoPlay.autoPlayInterval;
  const prev = iter.prev;
  const next = iter.next;
  let closure_5 = React.useRef();
  let closure_6 = React.useRef(!tmp);
  const items = [tmp2, autoPlayInterval, prev, next];
  const callback = React.useCallback(() => {
    if (!ref.current) {
      if (closure_5.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_5.current);
      }
      const _setTimeout = setTimeout;
      closure_5.current = setTimeout(() => {
        if (closure_1) {
          let obj = { onFinished: closure_7 };
          callback(obj);
        } else {
          obj = { onFinished: closure_7 };
          callback2(obj);
        }
      }, autoPlayInterval);
    }
  }, items);
  const items1 = [undefined !== autoPlay && autoPlay];
  const pause = React.useCallback(() => {
    if (tmp) {
      if (closure_5.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_5.current);
      }
      closure_6.current = true;
      const tmp = closure_5;
    }
  }, items1);
  const items2 = [callback, undefined !== autoPlay && autoPlay];
  const start = React.useCallback(() => {
    if (tmp) {
      closure_6.current = false;
      callback();
      const tmp = closure_6;
    }
  }, items2);
  const items3 = [pause, start, undefined !== autoPlay && autoPlay];
  const effect = React.useEffect(() => {
    if (tmp) {
      start();
    } else {
      pause();
      const tmp = pause;
    }
    return pause;
  }, items3);
  return { pause, start };
};
