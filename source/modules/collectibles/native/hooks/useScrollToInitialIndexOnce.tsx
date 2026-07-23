// Module ID: 14479
// Function ID: 110620
// Name: INITIAL_SCROLL_DELAY_MS
// Dependencies: [31, 2]
// Exports: useScrollToInitialIndexOnce

// Module 14479 (INITIAL_SCROLL_DELAY_MS)
import result from "result";

const result = require("set").fileFinishedImporting("modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx");

export const INITIAL_SCROLL_DELAY_MS = 100;
export const useScrollToInitialIndexOnce = function useScrollToInitialIndexOnce(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  const shouldScroll = initialScrollIndex.shouldScroll;
  const flashListRef = initialScrollIndex.flashListRef;
  let num = initialScrollIndex.afterMs;
  if (num === undefined) {
    num = 100;
  }
  const resetKey = initialScrollIndex.resetKey;
  let closure_5;
  let closure_6;
  closure_5 = initialScrollIndex.useRef(false);
  closure_6 = initialScrollIndex.useRef(resetKey);
  const items = [shouldScroll, initialScrollIndex, num, flashListRef, resetKey];
  const effect = initialScrollIndex.useEffect(() => {
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
        const current = outer1_2.current;
        if (null != current) {
          const obj = { animated: true, index: outer1_0 };
          current.scrollToIndex(obj);
        }
      }, num);
    }
  }, items);
};
