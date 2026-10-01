// Module ID: 15428
// Function ID: 15429
// Name: react
// Dependencies: [19, 2]
// Exports: useScrollToInitialIndexOnce

// Module 15428 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useScrollToInitialIndexOnce.tsx");

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
  let closure_5 = react.useRef(false);
  let closure_6 = react.useRef(resetKey);
  const items = [shouldScroll, initialScrollIndex, num, flashListRef, resetKey];
  const effect = react.useEffect(() => {
    let index;
    if (ref2.current !== resetKey) {
      ref2.current = resetKey;
      ref.current = false;
    }
    const tmp2 = null != initialScrollIndex && shouldScroll && !ref.current;
    if (tmp2) {
      ref.current = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { animated: true, index };
          current.scrollToIndex(obj);
        }
      }, num);
    }
  }, items);
};
