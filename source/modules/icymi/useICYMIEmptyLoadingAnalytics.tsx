// Module ID: 15262
// Function ID: 116304
// Name: useICYMIEmptyLoadingAnalytics
// Dependencies: [31, 8374, 2]
// Exports: useICYMIEmptyLoadingAnalytics

// Module 15262 (useICYMIEmptyLoadingAnalytics)
import result from "result";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/icymi/useICYMIEmptyLoadingAnalytics.tsx");

export const useICYMIEmptyLoadingAnalytics = function useICYMIEmptyLoadingAnalytics(loading, isFocused) {
  let closure_0 = loading;
  let closure_1 = isFocused;
  React = React.useRef(null);
  const items = [loading, isFocused];
  const effect = React.useEffect(() => {
    if (isFocused) {
      if (loading) {
        const _Date = Date;
        tmp2.current = Date.now();
        const ICYMIAnalytics = loading(isFocused[1]).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
      } else if (null != tmp2.current) {
        const _Date2 = Date;
        const diff = Date.now() - ref.current;
        const ICYMIAnalytics2 = loading(isFocused[1]).ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
        ref.current = null;
      }
    }
  }, items);
  const items1 = [isFocused];
  const effect1 = React.useEffect(() => {
    if (!isFocused) {
      if (null != ref.current) {
        const _Date = Date;
        const diff = Date.now() - ref.current;
        const ICYMIAnalytics = loading(isFocused[1]).ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
        ref.current = null;
      }
    }
  }, items1);
};
