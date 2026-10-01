// Module ID: 16176
// Function ID: 16177
// Name: useComponentRenderSpan
// Dependencies: [19, 3, 16177, 16178, 16179, 16181, 2]
// Exports: useNavigationTTIRegionMeasurement

// Module 16176 (useComponentRenderSpan)
import LoggerDefault from "Logger" /* 3 */;
import NavigationSpanTypes from "NavigationSpanTypes" /* 16178 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16179 */;
import NavigationTTIRegionDebugState from "NavigationTTIRegionDebugState" /* 16181 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = new LoggerDefault("NavTTISurface");
let closure_4 = tmp2;
let size = size_mod;
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/useComponentRenderSpan.tsx");

export const useNavigationTTIRegionMeasurement = function useNavigationTTIRegionMeasurement(exclude, name) {
  let navTTISurface;
  _require = exclude;
  const spanComponent = name;
  let obj = require("NavTTISurfaceContext");
  navTTISurface = obj.useNavTTISurface();
  let str;
  if (navTTISurface != null) {
    str = navTTISurface.navigationKey;
  }
  if (str == null) {
    str = "";
  }
  let activeTraceId;
  if (navTTISurface != null) {
    activeTraceId = navTTISurface.activeTraceId;
  }
  if (activeTraceId == null) {
    activeTraceId = null;
  }
  let flag;
  if (navTTISurface != null) {
    flag = navTTISurface.isVisible;
  }
  if (flag == null) {
    flag = false;
  }
  const ref = str.useRef(null);
  const ref2 = str.useRef(null);
  const ref3 = str.useRef(null);
  const ref4 = str.useRef(null);
  const ref5 = str.useRef(str);
  const ref6 = str.useRef(false);
  const items = [name, exclude];
  const callback = str.useCallback((traceId, endMonotonicMs, arg2, arg3, measurementSource) => {
    let isFiniteResult = arg2 > 0 && arg3 > 0;
    if (isFiniteResult) {
      const _Number = Number;
      isFiniteResult = Number.isFinite(arg2);
    }
    if (isFiniteResult) {
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(arg3);
    }
    if (isFiniteResult) {
      const current = ref3.current;
      traceId = undefined;
      const tmp4 = ref3;
      if (current != null) {
        traceId = current.traceId;
      }
      if (traceId !== traceId) {
        if ("include" === exclude) {
          NavigationSpanTrackerDefault;
        } else {
          const obj2 = NavigationSpanTrackerDefault;
          const activeTraceElapsedMs = obj2.getActiveTraceElapsedMs(traceId, endMonotonicMs);
          if (null != activeTraceElapsedMs) {
            const obj3 = NavigationTTIRegionDebugState;
            const result = obj3.recordNavigationTTIRegionDebugMeasurement(traceId, spanComponent, activeTraceElapsedMs);
          }
        }
        const obj6 = { traceId, source: measurementSource };
        tmp4.current = obj6;
      } else {
        const tmp12 = "include" === exclude && measurementSource === NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT && current.source !== NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT;
        if (tmp12) {
          const obj = NavigationSpanTrackerDefault;
          const result1 = obj.recordLateComponentLayout(traceId, spanComponent, endMonotonicMs);
        }
      }
    }
  }, items);
  const items1 = [activeTraceId, flag, str];
  const layoutEffect = str.useLayoutEffect(() => {
    const tmp = ref4;
    const tmp2 = activeTraceId;
    if (ref4.current !== activeTraceId) {
      ref2.current = null;
    }
    tmp.current = tmp2;
    ref5.current = str;
    ref6.current = flag;
  }, items1);
  const items2 = [callback];
  const items3 = [activeTraceId, flag, str, callback];
  const onLayout = str.useCallback((nativeEvent) => {
    let height;
    let height2;
    let width;
    let width2;
    const layout = nativeEvent.nativeEvent.layout;
    ({ width, height } = layout);
    let isFiniteResult = width > 0 && height > 0;
    if (isFiniteResult) {
      const _Number = Number;
      isFiniteResult = Number.isFinite(width);
    }
    if (isFiniteResult) {
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(height);
    }
    if (isFiniteResult) {
      size = { navigationKey: ref5.current, width: null, height: null };
      ({ width: obj.width, height: obj.height } = layout);
      ref.current = size;
    }
    const current = ref4.current;
    if (null != current) {
      if (ref6.current) {
        const _performance = performance;
        ({ width: width2, height: height2 } = layout);
        const nowResult = performance.now();
        callback(current, nowResult, width2, height2, NavigationSpanTypes.ComponentMeasurementSource.ON_LAYOUT);
      } else if (isFiniteResult) {
        const size1 = { traceId: current, width: null, height: null };
        ({ width: obj2.width, height: obj2.height } = layout);
        ref2.current = size1;
      }
    }
  }, items2);
  const effect = str.useEffect(() => {
    let height;
    let width;
    const tmp = flag;
    if (tmp) {
      if (null != activeTraceId) {
        const current2 = ref3.current;
        let traceId;
        if (current2 != null) {
          traceId = current2.traceId;
        }
        if (traceId !== activeTraceId) {
          const current3 = ref2.current;
          let traceId1;
          if (current3 != null) {
            traceId1 = current3.traceId;
          }
          if (traceId1 !== activeTraceId) {
            const current = ref.current;
            if (null != current) {
              if (current.navigationKey === str) {
                let CACHED_PREVIOUS_DESTINATION = exclude(navTTISurface[3]).ComponentMeasurementSource.CACHED_SAME_DESTINATION;
              } else {
                CACHED_PREVIOUS_DESTINATION = exclude(navTTISurface[3]).ComponentMeasurementSource.CACHED_PREVIOUS_DESTINATION;
              }
              const _requestAnimationFrame = requestAnimationFrame;
              let closure_2 = requestAnimationFrame(() => {
                callback(activeTraceId, performance.now(), current.width, current.height, CACHED_PREVIOUS_DESTINATION);
              });
              return () => cancelAnimationFrame(closure_2);
            }
          } else {
            const _performance = performance;
            ({ width, height } = current3);
            const nowResult = performance.now();
            callback(activeTraceId, nowResult, width, height, exclude(navTTISurface[3]).ComponentMeasurementSource.ON_LAYOUT);
          }
        }
      }
    }
  }, items3);
  const items4 = [navTTISurface, name, exclude];
  const effect1 = str.useEffect(() => {
    const tmp = "include" === exclude && null == navTTISurface;
    if (tmp) {
      const _HermesInternal = HermesInternal;
      activeTraceId.warn("" + spanComponent + " has no NavTTISurfaceProvider; measurement is disabled.");
    }
  }, items4);
  if ("include" === exclude) {
    if (null == navTTISurface) {
      let obj2 = {};
    }
    return { onLayout };
  }
};
