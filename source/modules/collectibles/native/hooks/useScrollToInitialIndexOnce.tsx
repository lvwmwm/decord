// Module ID: 14354
// Function ID: 108392
// Name: INITIAL_SCROLL_DELAY_MS
// Dependencies: []
// Exports: useScrollToInitialIndexOnce

// Module 14354 (INITIAL_SCROLL_DELAY_MS)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx");

export const INITIAL_SCROLL_DELAY_MS = 100;
export const useScrollToInitialIndexOnce = function useScrollToInitialIndexOnce(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  const React = initialScrollIndex;
  const shouldScroll = initialScrollIndex.shouldScroll;
  const flashListRef = initialScrollIndex.flashListRef;
  let num = initialScrollIndex.afterMs;
  if (num === undefined) {
    num = 100;
  }
  const resetKey = initialScrollIndex.resetKey;
  let closure_5;
  let closure_6;
  closure_5 = React.useRef(false);
  closure_6 = React.useRef(resetKey);
  const items = [shouldScroll, initialScrollIndex, num, flashListRef, resetKey];
  const effect = React.useEffect(() => {
    if (ref2.current !== resetKey) {
      ref2.current = resetKey;
      ref.current = false;
    }
    let tmp4 = null != initialScrollIndex && shouldScroll;
    if (tmp4) {
      tmp4 = !ref.current;
    }
    if (tmp4) {
      ref.current = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (null != current) {
          const obj = { animated: true, index: closure_0 };
          current.scrollToIndex(obj);
        }
      }, num);
    }
  }, items);
};
