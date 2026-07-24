// Module ID: 7435
// Function ID: 59795
// Name: useBuyNitroListData
// Dependencies: [31, 653, 5462, 675, 7436, 2]
// Exports: default

// Module 7435 (useBuyNitroListData)
import result from "result";
import { AnalyticEvents } from "ME";

const result = require("mergeLocations").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroListData.tsx");

export default function useBuyNitroListData(selection) {
  selection = selection.selection;
  const setTier = selection.setTier;
  const tmp = setTier(ref[4])(selection.tier);
  ref = React.useRef(null);
  React = React.useRef(false);
  const items = [setTier];
  const items1 = [tmp];
  const callback = React.useCallback((arg0) => {
    result.current = true;
    setTier(arg0);
  }, items);
  const effect = React.useEffect(() => {
    if (React.current) {
      React.current = false;
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(() => {
        const current = outer1_1.current;
        let scrollToTopResult;
        if (null != current) {
          const obj = { animated: true };
          scrollToTopResult = current.scrollToTop(obj);
        }
        return scrollToTopResult;
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
  return {
    onScroll: (function useBuyNitroListScrollTracking() {
      const analyticsLocations = setTier(ref[2])().analyticsLocations;
      let closure_1 = React.useRef(false);
      return {
        onScroll(nativeEvent) {
          if (tmp3) {
            let obj = setTier(ref[3]);
            obj = { location_stack: analyticsLocations };
            obj.track(outer2_3.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
            ref.current = true;
          }
        }
      };
    })().onScroll,
    onSelectNitroTier: callback,
    listData: tmp,
    listRef: ref
  };
};
