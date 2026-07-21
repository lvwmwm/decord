// Module ID: 15092
// Function ID: 113770
// Name: useICYMIEmptyLoadingAnalytics
// Dependencies: []
// Exports: useICYMIEmptyLoadingAnalytics

// Module 15092 (useICYMIEmptyLoadingAnalytics)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/icymi/useICYMIEmptyLoadingAnalytics.tsx");

export const useICYMIEmptyLoadingAnalytics = function useICYMIEmptyLoadingAnalytics(loading, isFocused) {
  isFocused = loading;
  const dependencyMap = isFocused;
  const React = React.useRef(null);
  const items = [loading, isFocused];
  const effect = React.useEffect(() => {
    if (arg1) {
      if (arg0) {
        const _Date = Date;
        tmp2.current = Date.now();
        const ICYMIAnalytics = arg0(arg1[1]).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
      } else if (null != tmp2.current) {
        const _Date2 = Date;
        const diff = Date.now() - ref.current;
        const ICYMIAnalytics2 = arg0(arg1[1]).ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
        ref.current = null;
      }
    }
  }, items);
  const items1 = [isFocused];
  const effect1 = React.useEffect(() => {
    if (!arg1) {
      if (null != ref.current) {
        const _Date = Date;
        const diff = Date.now() - ref.current;
        const ICYMIAnalytics = arg0(arg1[1]).ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
        ref.current = null;
      }
    }
  }, items1);
};
