// Module ID: 6487
// Function ID: 6488
// Name: useFastestListPropsScrollReporting
// Dependencies: [4566, 2]
// Exports: default

// Module 6487 (useFastestListPropsScrollReporting)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

const __initData = { code: "function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}" };
let result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx");

export default function useFastestListPropsScrollReporting(scrollReporting, horizontal) {
  let closure_0 = horizontal;
  let scrollPosition;
  if ("animatedScrollPosition" === scrollReporting.scrollReporting) {
    scrollPosition = scrollReporting.scrollPosition;
  }
  ReanimatedRexport;
  const fn = function n(contentOffset) {
    const obj = scrollPosition;
    if (null != scrollPosition) {
      contentOffset = contentOffset.contentOffset;
      const result = obj.set(closure_0 ? contentOffset.x : contentOffset.y);
    }
  };
  fn.__closure = { scrollPosition, horizontal };
  fn.__workletHash = 14196294214838;
  fn.__initData = __initData;
  ({ onScroll: null }.onScroll) = fn;
  scrollReporting = scrollReporting.scrollReporting;
  if ("animatedScrollPosition" === scrollReporting) {
    return { onScroll: tmp3 };
  } else if ("animatedCallbacks" === scrollReporting) {
    return { onScroll: scrollReporting.scrollHandlerAnimated };
  } else {
    let obj = { onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null };
    ({ onScroll: obj.onScroll, onScrollBeginDrag: obj.onScrollBeginDrag, onScrollEndDrag: obj.onScrollEndDrag } = scrollReporting);
    return obj;
  }
};
