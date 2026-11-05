// Module ID: 7374
// Function ID: 7375
// Name: useFastestListPropsScrollReporting
// Dependencies: [1652, 2]
// Exports: default

// Module 7374 (useFastestListPropsScrollReporting)
import _mod1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

let closure_2 = { code: "(function useFastestListPropsScrollReportingNativeTsx1(event){let[scrollPosition,horizontal]=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}})" };
let result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx");

export default function useFastestListPropsScrollReporting(scrollReporting, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  let scrollPosition;
  if ("animatedScrollPosition" === scrollReporting.scrollReporting) {
    scrollPosition = scrollReporting.scrollPosition;
  }
  _mod1652;
  const items = [closure_2, scrollPosition, arg1];
  let c0;
  let c1;
  [tmp3, tmp4, tmp5] = items;
  function useFastestListPropsScrollReportingNativeTsx1(contentOffset) {
    const obj = c0;
    if (null != c0) {
      contentOffset = contentOffset.contentOffset;
      const result = obj.set(c1 ? contentOffset.x : contentOffset.y);
    }
  }
  const items1 = [tmp4, tmp5];
  useFastestListPropsScrollReportingNativeTsx1.__closure = items1;
  useFastestListPropsScrollReportingNativeTsx1.__workletHash = 11602000785903;
  useFastestListPropsScrollReportingNativeTsx1.__initData = tmp3;
  ({ onScroll: null }.onScroll) = useFastestListPropsScrollReportingNativeTsx1;
  scrollReporting = scrollReporting.scrollReporting;
  if ("animatedScrollPosition" === scrollReporting) {
    return { onScroll: tmp6 };
  } else if ("animatedCallbacks" === scrollReporting) {
    return { onScroll: scrollReporting.scrollHandlerAnimated };
  } else {
    let obj = { onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null };
    ({ onScroll: obj.onScroll, onScrollBeginDrag: obj.onScrollBeginDrag, onScrollEndDrag: obj.onScrollEndDrag } = scrollReporting);
    return obj;
  }
};
