// Module ID: 9246
// Function ID: 72266
// Name: useFastestListPropsScrollReporting
// Dependencies: []
// Exports: default

// Module 9246 (useFastestListPropsScrollReporting)
let closure_2 = { code: "function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx");

export default function useFastestListPropsScrollReporting(scrollReporting, horizontal) {
  const require = horizontal;
  let scrollPosition;
  if ("animatedScrollPosition" === scrollReporting.scrollReporting) {
    scrollPosition = scrollReporting.scrollPosition;
  }
  const dependencyMap = scrollPosition;
  require(dependencyMap[0]);
  const fn = function n(contentOffset) {
    if (null != scrollPosition) {
      contentOffset = contentOffset.contentOffset;
      const result = scrollPosition.set(arg1 ? contentOffset.x : contentOffset.y);
    }
  };
  let obj = { scrollPosition, horizontal };
  fn.__closure = obj;
  fn.__workletHash = 14196294214838;
  fn.__initData = closure_2;
  scrollReporting = scrollReporting.scrollReporting;
  if ("animatedScrollPosition" === scrollReporting) {
    obj = { onScroll: tmp3 };
    return obj;
  } else if ("animatedCallbacks" === scrollReporting) {
    obj = { onScroll: scrollReporting.scrollHandlerAnimated };
    return obj;
  } else {
    ({ onScroll: obj2.onScroll, onScrollBeginDrag: obj2.onScrollBeginDrag, onScrollEndDrag: obj2.onScrollEndDrag } = scrollReporting);
    return {};
  }
};
