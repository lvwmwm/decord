// Module ID: 11486
// Function ID: 11487
// Name: useNavigationTTIContentPainted
// Dependencies: [19, 558, 576, 11487, 11488, 2]

// Module 11486 (useNavigationTTIContentPainted)
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 11488 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigationTTIContentPainted() {
  let navTTISurface;
  let ref2;
  let ref3;
  let tmp4;
  let obj = navTTISurface(576);
  const cResult = obj.c(14);
  let obj2 = navTTISurface(11487);
  navTTISurface = obj2.useNavTTISurface();
  const ref = react.useRef(null);
  let navigationKey;
  const useRef = react.useRef;
  if (navTTISurface != null) {
    navigationKey = navTTISurface.navigationKey;
  }
  dependencyMap = useRef(navigationKey);
  react = obj3.useRef(null);
  const ref4 = obj3.useRef(null);
  if (cResult[0] !== navTTISurface) {
    const fn = function t() {
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
    };
    cResult[0] = navTTISurface;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  let closure_5 = tmp4;
  let activeTraceId;
  const tmp5 = cResult[2];
  if (navTTISurface != null) {
    activeTraceId = navTTISurface.activeTraceId;
  }
  if (tmp5 === activeTraceId) {
    let tmp9;
    let navigationKey1;
    const tmp7 = cResult[3];
    if (navTTISurface != null) {
      navigationKey1 = navTTISurface.navigationKey;
    }
    if (tmp7 === navigationKey1) {
      tmp9 = cResult[4];
    }
    let activeTraceId1;
    if (navTTISurface != null) {
      activeTraceId1 = navTTISurface.activeTraceId;
    }
    let navigationKey2;
    if (navTTISurface != null) {
      navigationKey2 = navTTISurface.navigationKey;
    }
    if (cResult[5] === activeTraceId1) {
      let tmp14;
      let tmp17;
      let tmp16;
      if (cResult[6] === navigationKey2) {
        tmp14 = cResult[7];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp9, tmp14);
      if (cResult[8] !== tmp4) {
        const fn3 = function p() {
          closure_5();
        };
        const items = [tmp4];
        cResult[8] = tmp4;
        cResult[9] = fn3;
        cResult[10] = items;
        tmp17 = items;
        tmp16 = fn3;
      } else {
        tmp16 = cResult[9];
        tmp17 = cResult[10];
      }
      const effect = obj3.useEffect(tmp16, tmp17);
      if (cResult[11] === tmp4) {
        let tmp21;
        let activeTraceId2;
        const tmp19 = cResult[12];
        if (navTTISurface != null) {
          activeTraceId2 = navTTISurface.activeTraceId;
        }
        if (tmp19 === activeTraceId2) {
          tmp21 = cResult[13];
        }
        return tmp21;
      }
      cResult[11] = tmp4;
      let activeTraceId3;
      if (navTTISurface != null) {
        activeTraceId3 = navTTISurface.activeTraceId;
      }
      const fn4 = function y(changesetUpdateId) {
        changesetUpdateId = changesetUpdateId.changesetUpdateId;
        const current = ref.current;
        if (null == current) {
          ref.current = changesetUpdateId;
          if (tmp) {
            const obj2 = { monotonicTimestamp: tmp2, changesetUpdateId };
            ref3.current = obj2;
            closure_5();
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
      };
      cResult[12] = activeTraceId3;
      cResult[13] = fn4;
      tmp21 = fn4;
    }
    const items1 = [activeTraceId1, navigationKey2];
    cResult[5] = activeTraceId1;
    cResult[6] = navigationKey2;
    cResult[7] = items1;
    tmp14 = items1;
  }
  let activeTraceId4;
  if (navTTISurface != null) {
    activeTraceId4 = navTTISurface.activeTraceId;
  }
  cResult[2] = activeTraceId4;
  let navigationKey3;
  if (navTTISurface != null) {
    navigationKey3 = navTTISurface.navigationKey;
  }
  const fn2 = function f() {
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
  };
  cResult[3] = navigationKey3;
  cResult[4] = fn2;
  tmp9 = fn2;
}) : (function useNavigationTTIContentPainted() {
  let navTTISurface;
  let ref2;
  let ref3;
  let obj = navTTISurface(11487);
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
});
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useNavigationTTIContentPainted.tsx");

export const useNavigationTTIContentPainted = tmp2;
