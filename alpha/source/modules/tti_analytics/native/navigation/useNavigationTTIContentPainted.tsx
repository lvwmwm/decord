// Module ID: 13313
// Function ID: 13314
// Name: useNavigationTTIContentPainted
// Dependencies: [19, 13314, 13315, 2]
// Exports: useNavigationTTIContentPainted

// Module 13313 (useNavigationTTIContentPainted)
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 13315 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let changesetUpdateId, dependencyMap;

let react = react_mod;
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useNavigationTTIContentPainted.tsx");

export function useNavigationTTIContentPainted() {
  let navTTISurface;
  let ref2;
  let ref3;
  let obj = navTTISurface(13314);
  navTTISurface = obj.useNavTTISurface();
  let obj2 = react;
  const ref = react.useRef(null);
  let navigationKey;
  const useRef = react.useRef;
  if (navTTISurface != null) {
    navigationKey = navTTISurface.navigationKey;
  }
  dependencyMap = useRef(navigationKey);
  react = obj2.useRef(null);
  const ref4 = obj2.useRef(null);
  const items = [navTTISurface];
  const callback = obj2.useCallback(() => {
    if (null != navTTISurface) {
      const activeTraceId = navTTISurface.activeTraceId;
      if (null != activeTraceId) {
        if (ref4.current !== activeTraceId) {
          const current = ref3.current;
          let result = null != current;
          if (result) {
            const obj = NavigationSpanTrackerDefault;
            result = obj.recordContentPaintedWhenReady(activeTraceId, current.monotonicTimestamp, current.changesetUpdateId);
          }
          if (result) {
            tmp.current = activeTraceId;
          }
        }
      }
    }
  }, items);
  let activeTraceId;
  const useLayoutEffect = obj2.useLayoutEffect;
  if (navTTISurface != null) {
    activeTraceId = navTTISurface.activeTraceId;
  }
  const items1 = [activeTraceId, ];
  let navigationKey1;
  if (navTTISurface != null) {
    navigationKey1 = navTTISurface.navigationKey;
  }
  items1[1] = navigationKey1;
  const layoutEffect = useLayoutEffect(() => {
    let navigationKey;
    if (navTTISurface != null) {
      navigationKey = tmp.navigationKey;
    }
    if (ref2.current !== navigationKey) {
      ref2.current = navigationKey;
      ref3.current = null;
      ref4.current = null;
      let activeTraceId;
      if (navTTISurface != null) {
        activeTraceId = tmp.activeTraceId;
      }
      if (null != activeTraceId) {
        const obj = NavigationSpanTrackerDefault;
        const result = obj.requireContentChangeset(activeTraceId);
      }
    }
  }, items1);
  const items2 = [callback];
  const effect = obj2.useEffect(() => {
    callback();
  }, items2);
  const items3 = [callback, ];
  let activeTraceId1;
  const useCallback = obj2.useCallback;
  if (navTTISurface != null) {
    activeTraceId1 = navTTISurface.activeTraceId;
  }
  items3[1] = activeTraceId1;
  return useCallback((changesetUpdateId) => {
    changesetUpdateId = changesetUpdateId.changesetUpdateId;
    const current = ref.current;
    if (null == current) {
      ref.current = changesetUpdateId;
      if (tmp) {
        const obj2 = { monotonicTimestamp: tmp2, changesetUpdateId };
        ref3.current = obj2;
        callback();
      } else {
        ref3.current = null;
        let activeTraceId;
        if (navTTISurface != null) {
          activeTraceId = navTTISurface.activeTraceId;
        }
        if (null != activeTraceId) {
          const obj = NavigationSpanTrackerDefault;
          const result = obj.clearContentPaintedReadiness(activeTraceId);
        }
        ref4.current = null;
      }
    }
  }, items3);
}
