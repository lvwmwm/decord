// Module ID: 16127
// Function ID: 16128
// Name: useICYMIEmptyLoadingAnalytics
// Dependencies: [19, 7807, 2]
// Exports: useICYMIEmptyLoadingAnalytics

// Module 16127 (useICYMIEmptyLoadingAnalytics)
import ICYMIAnalytics3 from "ICYMIAnalytics" /* 7807 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let result = size.fileFinishedImporting("modules/icymi/useICYMIEmptyLoadingAnalytics.tsx");

export const useICYMIEmptyLoadingAnalytics = function useICYMIEmptyLoadingAnalytics(loading, isFocused) {
  let ref;
  let closure_0 = loading;
  let closure_1 = isFocused;
  react = react.useRef(null);
  const items = [loading, isFocused];
  const effect = react.useEffect(() => {
    const tmp = isFocused;
    if (tmp) {
      if (loading) {
        const _Date = Date;
        ref.current = Date.now();
        const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
      } else if (null != ref.current) {
        const _Date2 = Date;
        const diff = Date.now() - tmp3.current;
        const ICYMIAnalytics2 = ICYMIAnalytics3.ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
        ref.current = null;
      }
    }
  }, items);
  const items1 = [isFocused];
  const effect1 = react.useEffect(() => {
    const tmp = isFocused;
    if (!tmp) {
      if (null != ref.current) {
        const _Date = Date;
        const diff = Date.now() - tmp2.current;
        const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
        ref.current = null;
      }
    }
  }, items1);
};
