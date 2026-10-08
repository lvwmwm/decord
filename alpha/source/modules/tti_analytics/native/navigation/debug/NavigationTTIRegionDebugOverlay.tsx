// Module ID: 16783
// Function ID: 16784
// Name: NavigationTTIRegionDebugOverlay
// Dependencies: [32, 19, 17, 21, 5090, 587, 558, 576, 11513, 11514, 16781, 11516, 5086, 2]

// Module 16783 (NavigationTTIRegionDebugOverlay)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 11514 */;
import NavigationTTIDebugFreeze from "NavigationTTIDebugFreeze" /* 11516 */;
import NavigationTTIRegionDebugState from "NavigationTTIRegionDebugState" /* 16781 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let rect1;
let rect2;
let rect3;
let rect4;
let rect5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
({ jsxs: metroImportDefault, jsx: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = ["time_start", "first_paint", "first_contentful_paint"];
let createStyles = createStyles_mod;
let obj = { outline: obj2, includedOutline: obj3, excludedOutline: obj4, mixedOutline: obj5, violationOutline: obj6, badge: { position: "absolute", maxWidth: "48%" }, expandedBadge: { maxWidth: "92%" }, badgeText: obj7, includedBadge: rect, excludedBadge: rect1, mixedBadge: rect2, violationBadge: rect3, armedBadge: obj8, freezeControl: rect4, armedFreezeControl: obj9, milestoneReadout: rect5 };
obj2 = { zIndex: 10000, borderWidth: 2 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderColor: nativeDefault.colors.STATUS_POSITIVE, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
obj4 = { borderColor: nativeDefault.colors.BORDER_STRONG, borderStyle: "dashed", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj6 = { borderColor: nativeDefault.colors.STATUS_DANGER, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj7 = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
rect = { top: 0, left: 0, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
rect1 = { top: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
rect2 = { top: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
rect3 = { top: 0, left: 0, backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
rect4 = { position: "absolute", right: 0, bottom: 0, maxWidth: "60%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
rect5 = { position: "absolute", left: 0, bottom: 0, maxWidth: "55%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRenderedAtMs(name) {
  let first;
  let tracking;
  let obj = name(tracking[7]);
  const cResult = obj.c(9);
  name = name.name;
  const regionId = name.regionId;
  tracking = name.tracking;
  let obj2 = name(tracking[8]);
  const navTTISurface = obj2.useNavTTISurface();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      const obj = regionId(tracking[9]);
      let closure_0 = obj.subscribeDebugBundle(arg0);
      const obj2 = name(tracking[10]);
      let closure_1 = obj2.subscribeNavigationTTIRegionDebugMeasurements(arg0);
      return () => {
        closure_0();
        closure_1();
      };
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === name) {
    if (cResult[2] === regionId) {
      if (cResult[3] === navTTISurface) {
        let tmp4;
        if (cResult[4] === tracking) {
          tmp4 = cResult[5];
        }
        const syncExternalStore = react.useSyncExternalStore(first, tmp4, tmp4);
        let str = ":";
        const lastIndexOfResult = syncExternalStore.lastIndexOf(":");
        if (cResult[6] === lastIndexOfResult) {
          let tmp7;
          if (cResult[7] === syncExternalStore) {
            tmp7 = cResult[8];
          }
          return tmp7;
        }
        let NumberResult = null;
        if (-1 !== lastIndexOfResult) {
          NumberResult = null;
          if ("" !== syncExternalStore.slice(lastIndexOfResult + 1)) {
            const _Number = Number;
            NumberResult = Number(syncExternalStore.slice(lastIndexOfResult + 1));
          }
        }
        cResult[6] = lastIndexOfResult;
        cResult[7] = syncExternalStore;
        cResult[8] = NumberResult;
        tmp7 = NumberResult;
      }
    }
  }
  const fn2 = function v() {
    let activeTraceId = null;
    if (null != navTTISurface) {
      const obj = NavigationSpanTrackerDefault;
      activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
    }
    let str = "none";
    if (null != activeTraceId) {
      let str3;
      if ("include" === tracking) {
        const obj3 = NavigationSpanTrackerDefault;
        const lastBundle = obj3.getLastBundle();
        let end_ms;
        if (lastBundle != null) {
          const components = lastBundle.components;
          const found = components.find((span_name) => span_name.span_name === name);
          if (found != null) {
            end_ms = found.end_ms;
          }
        }
        str3 = end_ms;
      } else {
        const obj2 = NavigationTTIRegionDebugState;
        str3 = obj2.getNavigationTTIRegionDebugMeasurement(activeTraceId, regionId);
      }
      if (str3 == null) {
        str3 = "";
      }
      const _HermesInternal = HermesInternal;
      str = "" + activeTraceId + ":" + str3;
    }
    return str;
  };
  cResult[1] = name;
  cResult[2] = regionId;
  cResult[3] = navTTISurface;
  cResult[4] = tracking;
  cResult[5] = fn2;
  tmp4 = fn2;
}) : (function useRenderedAtMs(name) {
  name = name.name;
  const regionId = name.regionId;
  const tracking = name.tracking;
  let obj = name(tracking[8]);
  const navTTISurface = obj.useNavTTISurface();
  const items = [name, regionId, navTTISurface, tracking];
  const callback = react.useCallback((arg0) => {
    const obj = regionId(tracking[9]);
    let closure_0 = obj.subscribeDebugBundle(arg0);
    const obj2 = name(tracking[10]);
    let closure_1 = obj2.subscribeNavigationTTIRegionDebugMeasurements(arg0);
    return () => {
      closure_0();
      closure_1();
    };
  }, []);
  const callback1 = react.useCallback(() => {
    let activeTraceId = null;
    if (null != navTTISurface) {
      const obj = NavigationSpanTrackerDefault;
      activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
    }
    let str = "none";
    if (null != activeTraceId) {
      let str3;
      if ("include" === tracking) {
        const obj3 = NavigationSpanTrackerDefault;
        const lastBundle = obj3.getLastBundle();
        let end_ms;
        if (lastBundle != null) {
          const components = lastBundle.components;
          const found = components.find((span_name) => span_name.span_name === name);
          if (found != null) {
            end_ms = found.end_ms;
          }
        }
        str3 = end_ms;
      } else {
        const obj2 = NavigationTTIRegionDebugState;
        str3 = obj2.getNavigationTTIRegionDebugMeasurement(activeTraceId, regionId);
      }
      if (str3 == null) {
        str3 = "";
      }
      const _HermesInternal = HermesInternal;
      str = "" + activeTraceId + ":" + str3;
    }
    return str;
  }, items);
  const syncExternalStore = react.useSyncExternalStore(callback, callback1, callback1);
  const lastIndexOfResult = syncExternalStore.lastIndexOf(":");
  let NumberResult = null;
  if (-1 !== lastIndexOfResult) {
    let str = "";
    NumberResult = null;
    if ("" !== syncExternalStore.slice(lastIndexOfResult + 1)) {
      const _Number = Number;
      NumberResult = Number(syncExternalStore.slice(lastIndexOfResult + 1));
    }
  }
  return NumberResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useNavigationTTIDebugFreezeTarget() {

}
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigationTTIMilestones(arg0) {
  let closure_0;
  let first;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      const obj = NavigationSpanTrackerDefault;
      return obj.subscribeDebugBundle(arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn2 = function u() {
      let first_contentful_paint_ms;
      let first_paint_ms;
      if (null == closure_0) {
        return "none";
      } else {
        const obj = NavigationSpanTrackerDefault;
        const lastBundleForSurface = obj.getLastBundleForSurface(tmp.definition, tmp.navigationKey);
        if (null == lastBundleForSurface) {
          return "none";
        } else {
          ({ first_paint_ms, first_contentful_paint_ms } = lastBundleForSurface.navigation.spanTtiProperties);
          const trace_id = lastBundleForSurface.navigation.spanTtiProperties.trace_id;
          if (first_paint_ms == null) {
            first_paint_ms = "";
          }
          if (first_contentful_paint_ms == null) {
            first_contentful_paint_ms = "";
          }
          const _HermesInternal = HermesInternal;
          return "" + trace_id + ":" + first_paint_ms + ":" + first_contentful_paint_ms;
        }
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn2;
    tmp3 = fn2;
  } else {
    tmp3 = cResult[2];
  }
  const str = react.useSyncExternalStore(first, tmp3, tmp3);
  if ("none" === str) {
    let tmp13;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { firstPaintMs: null, firstContentfulPaintMs: null };
      cResult[3] = obj2;
      tmp13 = obj2;
    } else {
      tmp13 = cResult[3];
    }
    return tmp13;
  } else {
    let tmp4;
    if (cResult[4] !== str) {
      const parts = str.split(":");
      cResult[4] = str;
      cResult[5] = parts;
      tmp4 = parts;
    } else {
      tmp4 = cResult[5];
    }
    const tmp7 = _slicedToArray(tmp4, 3);
    let NumberResult = null;
    if ("" !== tmp7[1]) {
      const _Number = Number;
      NumberResult = Number(tmp8);
    }
    let NumberResult1 = null;
    if ("" !== tmp7[2]) {
      const _Number2 = Number;
      NumberResult1 = Number(tmp9);
    }
    if (cResult[6] === NumberResult) {
      let tmp12;
      if (cResult[7] === NumberResult1) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { firstPaintMs: NumberResult, firstContentfulPaintMs: NumberResult1 };
    cResult[6] = NumberResult;
    cResult[7] = NumberResult1;
    cResult[8] = obj3;
    tmp12 = obj3;
  }
}) : (function useNavigationTTIMilestones(arg0) {
  let NumberResult1;
  let tmp5;
  let tmp6;
  let closure_0 = arg0;
  const items = [arg0];
  const callback = react.useCallback((arg0) => {
    const obj = NavigationSpanTrackerDefault;
    return obj.subscribeDebugBundle(arg0);
  }, []);
  const callback1 = react.useCallback(() => {
    let first_contentful_paint_ms;
    let first_paint_ms;
    if (null == closure_0) {
      return "none";
    } else {
      const obj = NavigationSpanTrackerDefault;
      const lastBundleForSurface = obj.getLastBundleForSurface(tmp.definition, tmp.navigationKey);
      if (null == lastBundleForSurface) {
        return "none";
      } else {
        ({ first_paint_ms, first_contentful_paint_ms } = lastBundleForSurface.navigation.spanTtiProperties);
        const trace_id = lastBundleForSurface.navigation.spanTtiProperties.trace_id;
        if (first_paint_ms == null) {
          first_paint_ms = "";
        }
        if (first_contentful_paint_ms == null) {
          first_contentful_paint_ms = "";
        }
        const _HermesInternal = HermesInternal;
        return "" + trace_id + ":" + first_paint_ms + ":" + first_contentful_paint_ms;
      }
    }
  }, items);
  const str = react.useSyncExternalStore(callback, callback1, callback1);
  if ("none" === str) {
    return { firstPaintMs: null, firstContentfulPaintMs: null };
  } else {
    [, tmp5, tmp6] = str.split(":");
    let NumberResult = null;
    if ("" !== tmp5) {
      const _Number = Number;
      NumberResult = Number(tmp5);
    }
    let obj = { firstPaintMs: NumberResult, firstContentfulPaintMs: NumberResult1 };
    NumberResult1 = null;
    if ("" !== tmp6) {
      const _Number2 = Number;
      NumberResult1 = Number(tmp6);
    }
    return obj;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavigationTTIMilestoneReadout(surface) {
  let firstContentfulPaintMs;
  let firstPaintMs;
  let items;
  let items1;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  surface = surface.surface;
  const tmp4 = closure_11();
  ({ firstPaintMs, firstContentfulPaintMs } = closure_14(surface));
  let str = "waiting";
  let str2 = "waiting";
  closure_14(surface);
  if (null != firstPaintMs) {
    const _HermesInternal = HermesInternal;
    str2 = "+" + firstPaintMs + "ms";
  }
  if (null != firstContentfulPaintMs) {
    const _HermesInternal2 = HermesInternal;
    str = "+" + firstContentfulPaintMs + "ms";
  }
  if (cResult[0] !== str2) {
    const obj2 = { variant: "text-xs/bold", color: "none", children: items };
    items = ["FP ", str2];
    const tmp10 = metroImportDefault(Text_Text.Text, obj2);
    cResult[0] = str2;
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === str) {
    if (cResult[3] === tmp4.badgeText) {
      let tmp11;
      if (cResult[4] === tmp8) {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4.milestoneReadout) {
        let tmp13;
        if (cResult[7] === tmp11) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
      const obj3 = { style: tmp4.milestoneReadout, pointerEvents: "none", accessible: false, children: tmp11 };
      const tmp16 = metroImportAll(metroRequire, obj3);
      cResult[6] = tmp4.milestoneReadout;
      cResult[7] = tmp11;
      cResult[8] = tmp16;
      tmp13 = tmp16;
    }
  }
  const obj4 = { variant: "text-xs/normal", color: "text-default", style: tmp4.badgeText, lineClamp: 1, accessible: false, children: items1 };
  items1 = [tmp8, " \u00B7 FCP ", str];
  const tmp12 = metroImportDefault(Text_Text.Text, obj4);
  cResult[2] = str;
  cResult[3] = tmp4.badgeText;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function NavigationTTIMilestoneReadout(surface) {
  let Text;
  let firstContentfulPaintMs;
  let firstPaintMs;
  let items;
  let items1;
  let obj2;
  surface = surface.surface;
  const tmp = closure_11();
  ({ firstPaintMs, firstContentfulPaintMs } = closure_14(surface));
  let str = "waiting";
  let str2 = "waiting";
  closure_14(surface);
  if (null != firstPaintMs) {
    const _HermesInternal = HermesInternal;
    str2 = "+" + firstPaintMs + "ms";
  }
  if (null != firstContentfulPaintMs) {
    const _HermesInternal2 = HermesInternal;
    str = "+" + firstContentfulPaintMs + "ms";
  }
  const obj = { style: tmp.milestoneReadout, pointerEvents: "none", accessible: false, children: metroImportDefault(Text, obj2) };
  obj2 = { variant: "text-xs/normal", color: "text-default", style: tmp.badgeText, lineClamp: 1, accessible: false, children: items1 };
  Text = Text_Text.Text;
  const obj3 = { variant: "text-xs/bold", color: "none", children: items };
  items = ["FP ", str2];
  items1 = [metroImportDefault(Text_Text.Text, obj3), " \u00B7 FCP ", str];
  return metroImportAll(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavigationTTIDebugFreezeControl(arg0) {
  let surface;
  let target;
  let tmp7;
  const tmp = surface;
  let obj = surface(576);
  const cResult = obj.c(17);
  ({ target, surface } = arg0);
  const tmp4 = closure_11();
  let kind;
  if (target != null) {
    kind = target.kind;
  }
  let name = null;
  if ("milestone" === kind) {
    name = target.name;
  }
  if (cResult[0] !== target) {
    let kind1;
    if (target != null) {
      kind1 = target.kind;
    }
    let str = "FREEZE: COMPONENT";
    if ("component" !== kind1) {
      let name1;
      if (target != null) {
        name1 = target.name;
      }
      if ("time_start" === name1) {
        str = "FREEZE: NEXT START";
      } else if ("first_paint" === name1) {
        str = "FREEZE: NEXT FP";
      } else {
        str = "FREEZE: NEXT FCP";
        if ("first_contentful_paint" !== name1) {
          str = "FREEZE: OFF";
        }
      }
    }
    cResult[0] = target;
    cResult[1] = str;
    tmp7 = str;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === name) {
    let tmp10;
    if (cResult[3] === surface) {
      tmp10 = cResult[4];
    }
    let armedFreezeControl;
    if (null != target) {
      armedFreezeControl = tmp4.armedFreezeControl;
    }
    if (cResult[5] === tmp4.freezeControl) {
      let tmp12;
      if (cResult[6] === armedFreezeControl) {
        tmp12 = cResult[7];
      }
      let str6 = "text-default";
      if (null != target) {
        str6 = "text-feedback-info";
      }
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp4.badgeText) {
          let tmp13;
          if (cResult[10] === str6) {
            tmp13 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp7) {
              if (cResult[14] === tmp12) {
                let tmp16;
                if (cResult[15] === tmp13) {
                  tmp16 = cResult[16];
                }
                return tmp16;
              }
            }
          }
          let obj2 = { style: tmp12, hitSlop: name(587).space.PX_12, onPress: tmp10, accessibilityRole: "button", accessibilityLabel: tmp7, accessibilityHint: "Cycles the one-shot freeze point. Restart the app after a freeze.", children: tmp13 };
          const tmp20 = closure_8(closure_5, obj2);
          cResult[12] = tmp10;
          cResult[13] = tmp7;
          cResult[14] = tmp12;
          cResult[15] = tmp13;
          cResult[16] = tmp20;
          tmp16 = tmp20;
        }
      }
      let obj3 = { variant: "text-xs/bold", color: str6, style: tmp4.badgeText, lineClamp: 1, accessible: false, children: tmp7 };
      const tmp15 = closure_8(tmp(5086).Text, obj3);
      cResult[8] = tmp7;
      cResult[9] = tmp4.badgeText;
      cResult[10] = str6;
      cResult[11] = tmp15;
      tmp13 = tmp15;
    }
    const items = [tmp4.freezeControl, armedFreezeControl];
    cResult[5] = tmp4.freezeControl;
    cResult[6] = armedFreezeControl;
    cResult[7] = items;
    tmp12 = items;
  }
  function cycleTarget() {
    let navigationKey;
    let tmp7;
    let activeTraceId = null;
    if (null != surface) {
      const obj = NavigationSpanTrackerDefault;
      activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
    }
    if (null == name) {
      let first = closure_10[0];
      if (first == null) {
        first = null;
      }
      tmp7 = first;
    } else {
      tmp7 = closure_10[closure_10.indexOf(closure_10, tmp5) + 1];
      if (tmp7 == null) {
        tmp7 = null;
      }
    }
    if (null == tmp7) {
      const obj4 = NavigationTTIDebugFreeze;
      const result = obj4.disarmNavigationTTIDebugFreeze();
    } else {
      const obj3 = { armedDuringTraceId: activeTraceId, destinationKey: navigationKey };
      navigationKey = undefined;
      const obj2 = { kind: "milestone", name: tmp7 };
      const armNavigationTTIDebugFreeze = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze;
      NavigationTTIDebugFreeze;
      if (surface != null) {
        navigationKey = tmp.navigationKey;
      }
      if (navigationKey == null) {
        navigationKey = null;
      }
      const result1 = armNavigationTTIDebugFreeze(obj2, obj3);
    }
  }
  cResult[2] = name;
  cResult[3] = surface;
  cResult[4] = cycleTarget;
  tmp10 = cycleTarget;
}) : (function NavigationTTIDebugFreezeControl(arg0) {
  let Text;
  let obj2;
  let require;
  let target;
  ({ target, surface: require } = arg0);
  let name;
  const tmp = closure_11();
  let kind;
  if (target != null) {
    kind = target.kind;
  }
  name = null;
  if ("milestone" === kind) {
    name = target.name;
  }
  let kind1;
  if (target != null) {
    kind1 = target.kind;
  }
  let str = "FREEZE: COMPONENT";
  if ("component" !== kind1) {
    let name1;
    if (target != null) {
      name1 = target.name;
    }
    if ("time_start" === name1) {
      str = "FREEZE: NEXT START";
    } else if ("first_paint" === name1) {
      str = "FREEZE: NEXT FP";
    } else {
      str = "FREEZE: NEXT FCP";
      if ("first_contentful_paint" !== name1) {
        str = "FREEZE: OFF";
      }
    }
  }
  const items = [tmp.freezeControl, ];
  let armedFreezeControl;
  let tmp7 = closure_5;
  if (null != target) {
    armedFreezeControl = tmp.armedFreezeControl;
  }
  let obj = {
    style: items,
    hitSlop: name(587).space.PX_12,
    onPress: function cycleTarget() {
      let navigationKey;
      let tmp7;
      let activeTraceId = null;
      if (null != _require) {
        const obj = NavigationSpanTrackerDefault;
        activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
      }
      if (null == name) {
        let first = closure_10[0];
        if (first == null) {
          first = null;
        }
        tmp7 = first;
      } else {
        tmp7 = closure_10[closure_10.indexOf(closure_10, tmp5) + 1];
        if (tmp7 == null) {
          tmp7 = null;
        }
      }
      if (null == tmp7) {
        const obj4 = NavigationTTIDebugFreeze;
        const result = obj4.disarmNavigationTTIDebugFreeze();
      } else {
        const obj3 = { armedDuringTraceId: activeTraceId, destinationKey: navigationKey };
        navigationKey = undefined;
        const obj2 = { kind: "milestone", name: tmp7 };
        const armNavigationTTIDebugFreeze = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze;
        NavigationTTIDebugFreeze;
        if (_require != null) {
          navigationKey = tmp.navigationKey;
        }
        if (navigationKey == null) {
          navigationKey = null;
        }
        const result1 = armNavigationTTIDebugFreeze(obj2, obj3);
      }
    },
    accessibilityRole: "button",
    accessibilityLabel: str,
    accessibilityHint: "Cycles the one-shot freeze point. Restart the app after a freeze.",
    children: tmp6(Text, obj2)
  };
  items[1] = armedFreezeControl;
  let str5 = "text-default";
  Text = Text_Text.Text;
  if (null != target) {
    str5 = "text-feedback-info";
  }
  obj2 = { variant: "text-xs/bold", color: str5, style: tmp.badgeText, lineClamp: 1, accessible: false, children: str };
  return closure_8(tmp7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavigationTTIRegionDebugOverlay(name) {
  let closure_3;
  let closure_4;
  let descendantTracking;
  let excludedDescendants;
  let hierarchyDepth;
  let includedDescendants;
  let items;
  let items1;
  let regionId;
  let tmp8;
  let tracking;
  let violation;
  let tmp = name;
  let tmp2 = dependencyMap;
  let obj = name(576);
  const cResult = obj.c(56);
  name = name.name;
  ({ regionId, tracking, descendantTracking, includedDescendants, excludedDescendants, hierarchyDepth, violation } = name);
  const tmp4 = closure_11();
  let obj2 = name(11513);
  const navTTISurface = obj2.useNavTTISurface();
  const tmp6 = react;
  [tmp8, dependencyMap] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  if (typeof useNavigationTTIDebugFreezeTarget === "function") {
    const useSyncExternalStore = tmp6.useSyncExternalStore;
    const subscribeNavigationTTIDebugFreezeTarget = tmp(11516).subscribeNavigationTTIDebugFreezeTarget;
    const syncExternalStore = useSyncExternalStore(subscribeNavigationTTIDebugFreezeTarget, tmp(11516).getNavigationTTIDebugFreezeTarget, tmp(11516).getNavigationTTIDebugFreezeTarget);
    if (cResult[0] === name) {
      if (cResult[1] === regionId) {
        let tmp10;
        let str5;
        if (cResult[2] === tracking) {
          tmp10 = cResult[3];
        }
        const tmp12 = closure_12(tmp10);
        let tmp15 = "exclude" === tracking;
        if (!tmp15) {
          tmp15 = tmp14;
        }
        _slicedToArray = tmp15;
        react = tmp18;
        let kind;
        if (syncExternalStore != null) {
          kind = syncExternalStore.kind;
        }
        let closure_5 = tmp20;
        if (cResult[4] === descendantTracking) {
          if (cResult[5] === excludedDescendants) {
            if (cResult[6] === null != violation) {
              if (cResult[7] === includedDescendants) {
                if (cResult[8] === tracking) {
                  let tmp22;
                  let combined;
                  if (cResult[9] === violation) {
                    tmp22 = cResult[10];
                  }
                  if (null == tmp12) {
                    let str17 = "not observed";
                    if ("include" === tracking) {
                      str17 = "waiting";
                    }
                    combined = str17;
                  } else {
                    const _HermesInternal3 = HermesInternal;
                    combined = "+" + tmp12 + "ms";
                  }
                  let tmp30 = tmp22;
                  if (!tmp8) {
                    let str18 = "INVALID";
                    if (null == violation) {
                      let str19 = "MIXED";
                      if (!(tmp15 && "mixed" === descendantTracking)) {
                        let tmp31 = "BOUNDARY";
                        if ("include" === tracking) {
                          tmp31 = null;
                        }
                        str19 = tmp31;
                      }
                      str18 = str19;
                    }
                    tmp30 = str18;
                  }
                  let str21 = "";
                  if ("component" === kind && syncExternalStore.spanComponent === name) {
                    str21 = " \u00B7 FREEZE NEXT";
                  }
                  let str22 = "";
                  if (null != tmp30) {
                    const _HermesInternal4 = HermesInternal;
                    str22 = "" + tmp30 + " \u00B7 ";
                  }
                  if (!tmp8) {
                    let str24;
                    let tmp43;
                    if ("include" !== tracking) {
                      str24 = "";
                    }
                    let str26 = "";
                    if (tmp15) {
                      let str27 = " \u25B8";
                      if (tmp8) {
                        str27 = " \u25BE";
                      }
                      str26 = str27;
                    }
                    const _HermesInternal6 = HermesInternal;
                    const combined1 = "" + str22 + name + str24 + str21 + str26;
                    let str30 = "text-overlay-light";
                    if (null == violation) {
                      str30 = "text-overlay-light";
                      if ("include" !== tracking) {
                        let str31 = "text-default";
                        if (tmp15 && "mixed" === descendantTracking) {
                          str31 = "text-feedback-info";
                        }
                        str30 = str31;
                      }
                    }
                    let result = hierarchyDepth * navTTISurface(587).space.PX_4;
                    const tmp41 = navTTISurface;
                    if (cResult[11] !== result) {
                      const rect = { top: result, right: result, bottom: result, left: result };
                      cResult[11] = result;
                      cResult[12] = rect;
                      tmp43 = rect;
                    } else {
                      tmp43 = cResult[12];
                    }
                    if (cResult[13] === (tmp17 && !tmp14)) {
                      if (cResult[14] === tmp15) {
                        if (cResult[15] === ("component" === kind && syncExternalStore.spanComponent === name)) {
                          if (cResult[16] === name) {
                            let violationOutline;
                            if (null != violation) {
                              violationOutline = tmp4.violationOutline;
                            } else {
                              violationOutline = tmp17 ? tmp4.includedOutline : tmp4.excludedOutline;
                            }
                            let mixedOutline;
                            if (null == violation) {
                              if (tmp15 && "mixed" === descendantTracking) {
                                mixedOutline = tmp4.mixedOutline;
                              }
                            }
                            if (cResult[19] === tmp43) {
                              if (cResult[20] === tmp4.outline) {
                                if (cResult[21] === violationOutline) {
                                  let tmp46;
                                  let includedBadge;
                                  if (cResult[22] === mixedOutline) {
                                    tmp46 = cResult[23];
                                  }
                                  let expandedBadge;
                                  if (tmp8) {
                                    expandedBadge = tmp4.expandedBadge;
                                  }
                                  if (null != violation) {
                                    includedBadge = tmp4.violationBadge;
                                  } else if ("include" === tracking) {
                                    includedBadge = tmp4.includedBadge;
                                  } else {
                                    includedBadge = tmp16 ? tmp4.mixedBadge : tmp4.excludedBadge;
                                  }
                                  let armedBadge;
                                  if ("component" === kind && syncExternalStore.spanComponent === name) {
                                    armedBadge = tmp4.armedBadge;
                                  }
                                  if (cResult[24] === tmp4.badge) {
                                    if (cResult[25] === armedBadge) {
                                      if (cResult[26] === expandedBadge) {
                                        let tmp49;
                                        if (cResult[27] === includedBadge) {
                                          tmp49 = cResult[28];
                                        }
                                        let str32 = "none";
                                        if (tmp15 || tmp17 && !tmp14) {
                                          str32 = "auto";
                                        }
                                        if (cResult[29] === tmp8) {
                                          let tmp51;
                                          let combined2;
                                          let tmp58;
                                          if (cResult[30] === tmp15) {
                                            tmp51 = cResult[31];
                                          }
                                          if (tmp15 || tmp17 && !tmp14) {
                                            const _HermesInternal7 = HermesInternal;
                                            combined2 = "" + tmp22 + " \u00B7 " + name + " \u00B7 " + combined + str21;
                                          }
                                          if (tmp15) {
                                            let str39 = "Show Navigation TTI region details";
                                            if (tmp8) {
                                              str39 = "Collapse Navigation TTI region details";
                                            }
                                            tmp58 = str39;
                                          } else if (tmp17 && !tmp14) {
                                            let str38 = "Freeze after this component paints on the next navigation";
                                            if ("component" === kind && syncExternalStore.spanComponent === name) {
                                              str38 = "Disarm the one-shot freeze for this component";
                                            }
                                            tmp58 = str38;
                                          }
                                          let num32 = 1;
                                          if (tmp8) {
                                            num32 = 3;
                                          }
                                          if (cResult[32] === combined1) {
                                            if (cResult[33] === tmp4.badgeText) {
                                              if (cResult[34] === num32) {
                                                let tmp59;
                                                if (cResult[35] === str30) {
                                                  tmp59 = cResult[36];
                                                }
                                                if (cResult[37] === (tmp15 || tmp17 && !tmp14)) {
                                                  if (cResult[38] === tmp49) {
                                                    if (cResult[39] === str32) {
                                                      if (cResult[40] === !(tmp15 || tmp17 && !tmp14)) {
                                                        if (cResult[41] === tmp50) {
                                                          if (cResult[42] === str33) {
                                                            if (cResult[43] === tmp51) {
                                                              if (cResult[44] === combined2) {
                                                                if (cResult[45] === tmp58) {
                                                                  let tmp63;
                                                                  if (cResult[46] === tmp59) {
                                                                    tmp63 = cResult[47];
                                                                  }
                                                                  if (cResult[48] === syncExternalStore) {
                                                                    if (cResult[49] === hierarchyDepth) {
                                                                      let tmp67;
                                                                      if (cResult[50] === navTTISurface) {
                                                                        tmp67 = cResult[51];
                                                                      }
                                                                      if (cResult[52] === tmp63) {
                                                                        if (cResult[53] === tmp67) {
                                                                          let tmp74;
                                                                          if (cResult[54] === tmp46) {
                                                                            tmp74 = cResult[55];
                                                                          }
                                                                          return tmp74;
                                                                        }
                                                                      }
                                                                      let obj3 = { style: tmp46, pointerEvents: "box-none", accessible: false, children: items };
                                                                      items = [tmp63, tmp67];
                                                                      const tmp77 = closure_7(closure_6, obj3);
                                                                      cResult[52] = tmp63;
                                                                      cResult[53] = tmp67;
                                                                      cResult[54] = tmp46;
                                                                      cResult[55] = tmp77;
                                                                      tmp74 = tmp77;
                                                                    }
                                                                  }
                                                                  let tmp68 = null;
                                                                  if (0 === hierarchyDepth) {
                                                                    let obj4 = { children: items1 };
                                                                    const obj5 = { surface: navTTISurface };
                                                                    items1 = [closure_8(closure_15, obj5), ];
                                                                    const obj6 = { target: syncExternalStore, surface: navTTISurface };
                                                                    items1[1] = closure_8(closure_16, obj6);
                                                                    tmp68 = closure_7(closure_9, obj4);
                                                                  }
                                                                  cResult[48] = syncExternalStore;
                                                                  cResult[49] = hierarchyDepth;
                                                                  cResult[50] = navTTISurface;
                                                                  cResult[51] = tmp68;
                                                                  tmp67 = tmp68;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj7 = { style: tmp49, pointerEvents: str32, disabled: !(tmp15 || tmp17 && !tmp14), hitSlop: tmp41(587).space.PX_12, onPress: tmp50, accessible: tmp15 || tmp17 && !tmp14, accessibilityRole: str33, accessibilityState: tmp51, accessibilityLabel: combined2, accessibilityHint: tmp58, children: tmp59 };
                                                const tmp66 = closure_8(closure_5, obj7);
                                                cResult[37] = tmp15 || tmp17 && !tmp14;
                                                cResult[38] = tmp49;
                                                cResult[39] = str32;
                                                cResult[40] = !(tmp15 || tmp17 && !tmp14);
                                                cResult[41] = tmp50;
                                                cResult[42] = str33;
                                                cResult[43] = tmp51;
                                                cResult[44] = combined2;
                                                cResult[45] = tmp58;
                                                cResult[46] = tmp59;
                                                cResult[47] = tmp66;
                                                tmp63 = tmp66;
                                              }
                                            }
                                          }
                                          const obj8 = { variant: "text-xs/bold", color: str30, style: tmp4.badgeText, lineClamp: num32, accessible: false, children: combined1 };
                                          const tmp61 = closure_8(tmp(5086).Text, obj8);
                                          cResult[32] = combined1;
                                          cResult[33] = tmp4.badgeText;
                                          cResult[34] = num32;
                                          cResult[35] = str30;
                                          cResult[36] = tmp61;
                                          tmp59 = tmp61;
                                        }
                                        let tmp52;
                                        if (tmp15) {
                                          tmp52 = { expanded: tmp8 };
                                          const obj9 = { expanded: tmp8 };
                                        }
                                        cResult[29] = tmp8;
                                        cResult[30] = tmp15;
                                        cResult[31] = tmp52;
                                        tmp51 = tmp52;
                                      }
                                    }
                                  }
                                  const items2 = [tmp4.badge, expandedBadge, includedBadge, armedBadge];
                                  cResult[24] = tmp4.badge;
                                  cResult[25] = armedBadge;
                                  cResult[26] = expandedBadge;
                                  cResult[27] = includedBadge;
                                  cResult[28] = items2;
                                  tmp49 = items2;
                                }
                              }
                            }
                            const items3 = [tmp4.outline, tmp43, violationOutline, mixedOutline];
                            cResult[19] = tmp43;
                            cResult[20] = tmp4.outline;
                            cResult[21] = violationOutline;
                            cResult[22] = mixedOutline;
                            cResult[23] = items3;
                            tmp46 = items3;
                          }
                        }
                      }
                    }
                    function handleBadgePress() {
                      let navigationKey;
                      const tmp = closure_3;
                      if (tmp) {
                        dependencyMap((arg0) => !arg0);
                      } else {
                        const tmp2 = closure_5;
                        if (tmp2) {
                          const obj4 = NavigationTTIDebugFreeze;
                          const result = obj4.disarmNavigationTTIDebugFreeze();
                        } else {
                          const tmp3 = closure_4;
                          if (tmp3) {
                            let activeTraceId = null;
                            const obj = { kind: "component", spanComponent: name };
                            const armNavigationTTIDebugFreeze = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze;
                            NavigationTTIDebugFreeze;
                            if (null != navTTISurface) {
                              const obj2 = NavigationSpanTrackerDefault;
                              activeTraceId = obj2.getActiveTraceId(tmp8.definition, tmp8.navigationKey);
                            }
                            const obj3 = { armedDuringTraceId: activeTraceId, destinationKey: navigationKey };
                            navigationKey = undefined;
                            if (navTTISurface != null) {
                              navigationKey = tmp8.navigationKey;
                            }
                            if (navigationKey == null) {
                              navigationKey = null;
                            }
                            const result1 = armNavigationTTIDebugFreeze(obj, obj3);
                          }
                        }
                      }
                    }
                    cResult[13] = tmp17 && !tmp14;
                    cResult[14] = tmp15;
                    cResult[15] = "component" === kind && syncExternalStore.spanComponent === name;
                    cResult[16] = name;
                    cResult[17] = navTTISurface;
                    cResult[18] = handleBadgePress;
                  }
                  const _HermesInternal5 = HermesInternal;
                  str24 = " \u00B7 " + combined;
                }
              }
            }
          }
        }
        if (null != violation) {
          const _HermesInternal2 = HermesInternal;
          str5 = "INVALID \u00B7 " + violation;
        } else {
          str5 = "MEASURED";
          if ("include" !== tracking) {
            let str6 = "TRACKED";
            if ("included" !== descendantTracking) {
              let str8 = "MIXED";
              if ("excluded" === descendantTracking) {
                str8 = "IGNORED";
              }
              str6 = str8;
            }
            const _HermesInternal = HermesInternal;
            str5 = "BOUNDARY ONLY \u00B7 CHILDREN " + str6 + " \u00B7 " + includedDescendants + " tracked / " + excludedDescendants + " ignored below";
          }
        }
        cResult[4] = descendantTracking;
        cResult[5] = excludedDescendants;
        cResult[6] = null != violation;
        cResult[7] = includedDescendants;
        cResult[8] = tracking;
        cResult[9] = violation;
        cResult[10] = str5;
        tmp22 = str5;
      }
    }
    const obj10 = { name, regionId, tracking };
    cResult[0] = name;
    cResult[1] = regionId;
    cResult[2] = tracking;
    cResult[3] = obj10;
    tmp10 = obj10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function NavigationTTIRegionDebugOverlay(name) {
  let Text;
  let _undefined;
  let c2;
  let closure_3;
  let closure_4;
  let combined2;
  let descendantTracking;
  let excludedDescendants;
  let handleBadgePress;
  let hierarchyDepth;
  let includedDescendants;
  let items2;
  let items3;
  let num;
  let obj6;
  let str32;
  let str33;
  let tmp47;
  let tmp53;
  let tmp7;
  let tracking;
  let violation;
  name = name.name;
  ({ tracking, descendantTracking, includedDescendants, excludedDescendants, hierarchyDepth, violation } = name);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_5;
  const regionId = name.regionId;
  let tmp = closure_11();
  let tmp2 = name;
  let tmp3 = dependencyMap;
  let obj = name(11513);
  const navTTISurface = obj.useNavTTISurface();
  const tmp6 = _slicedToArray(react.useState(false), 2);
  [tmp7, c2] = tmp6;
  const tmp5 = react;
  if (typeof useNavigationTTIDebugFreezeTarget === "function") {
    let str5;
    let combined;
    const useSyncExternalStore = tmp5.useSyncExternalStore;
    const subscribeNavigationTTIDebugFreezeTarget = tmp2(11516).subscribeNavigationTTIDebugFreezeTarget;
    const syncExternalStore = useSyncExternalStore(subscribeNavigationTTIDebugFreezeTarget, tmp2(11516).getNavigationTTIDebugFreezeTarget, tmp2(11516).getNavigationTTIDebugFreezeTarget);
    let obj2 = { name, regionId, tracking };
    const tmp10 = closure_12(obj2);
    let tmp13 = "exclude" === tracking;
    if (!tmp13) {
      tmp13 = tmp12;
    }
    _slicedToArray = tmp13;
    react = tmp16;
    let kind;
    if (syncExternalStore != null) {
      kind = syncExternalStore.kind;
    }
    closure_5 = tmp18;
    if (null != violation) {
      const _HermesInternal2 = HermesInternal;
      str5 = "INVALID \u00B7 " + violation;
    } else {
      str5 = "MEASURED";
      if ("include" !== tracking) {
        let str6 = "TRACKED";
        if ("included" !== descendantTracking) {
          let str8 = "MIXED";
          if ("excluded" === descendantTracking) {
            str8 = "IGNORED";
          }
          str6 = str8;
        }
        const _HermesInternal = HermesInternal;
        str5 = "BOUNDARY ONLY \u00B7 CHILDREN " + str6 + " \u00B7 " + includedDescendants + " tracked / " + excludedDescendants + " ignored below";
      }
    }
    if (null == tmp10) {
      let str17 = "not observed";
      if ("include" === tracking) {
        str17 = "waiting";
      }
      combined = str17;
    } else {
      const _HermesInternal3 = HermesInternal;
      combined = "+" + tmp10 + "ms";
    }
    let tmp27 = str5;
    if (!tmp7) {
      let str18 = "INVALID";
      if (null == violation) {
        let str19 = "MIXED";
        if (!(tmp13 && "mixed" === descendantTracking)) {
          let tmp28 = "BOUNDARY";
          if ("include" === tracking) {
            tmp28 = null;
          }
          str19 = tmp28;
        }
        str18 = str19;
      }
      tmp27 = str18;
    }
    let str21 = "";
    if ("component" === kind && syncExternalStore.spanComponent === name) {
      str21 = " \u00B7 FREEZE NEXT";
    }
    let str22 = "";
    if (null != tmp27) {
      const _HermesInternal4 = HermesInternal;
      str22 = "" + tmp27 + " \u00B7 ";
    }
    if (!tmp7) {
      let str24;
      let violationOutline;
      let includedBadge;
      if ("include" !== tracking) {
        str24 = "";
      }
      let str26 = "";
      if (tmp13) {
        let str27 = " \u25B8";
        if (tmp7) {
          str27 = " \u25BE";
        }
        str26 = str27;
      }
      const _HermesInternal6 = HermesInternal;
      let str30 = "text-overlay-light";
      const combined1 = "" + str22 + name + str24 + str21 + str26;
      if (null == violation) {
        str30 = "text-overlay-light";
        if ("include" !== tracking) {
          let str31 = "text-default";
          if (tmp13 && "mixed" === descendantTracking) {
            str31 = "text-feedback-info";
          }
          str30 = str31;
        }
      }
      let result = hierarchyDepth * navTTISurface(587).space.PX_4;
      const items = [tmp.outline, , , ];
      const rect = { top: result, right: result, bottom: result, left: result };
      items[1] = rect;
      const tmp38 = navTTISurface;
      const tmp41 = closure_6;
      if (null != violation) {
        violationOutline = tmp.violationOutline;
      } else {
        violationOutline = tmp15 ? tmp.includedOutline : tmp.excludedOutline;
      }
      items[2] = violationOutline;
      let mixedOutline;
      if (null == violation) {
        if (tmp13 && "mixed" === descendantTracking) {
          mixedOutline = tmp.mixedOutline;
        }
      }
      let obj3 = { style: items, pointerEvents: "box-none", accessible: false, children: items2 };
      items[3] = mixedOutline;
      const items1 = [tmp.badge, , , ];
      let expandedBadge;
      const tmp44 = closure_5;
      if (tmp7) {
        expandedBadge = tmp.expandedBadge;
      }
      items1[1] = expandedBadge;
      if (null != violation) {
        includedBadge = tmp.violationBadge;
      } else if ("include" === tracking) {
        includedBadge = tmp.includedBadge;
      } else {
        includedBadge = tmp14 ? tmp.mixedBadge : tmp.excludedBadge;
      }
      items1[2] = includedBadge;
      let armedBadge;
      if ("component" === kind && syncExternalStore.spanComponent === name) {
        armedBadge = tmp.armedBadge;
      }
      let obj4 = { style: items1, pointerEvents: str32, disabled: !tmp19, hitSlop: tmp38(587).space.PX_12, onPress: handleBadgePress, accessible: tmp19, accessibilityRole: str33, accessibilityState: tmp47, accessibilityLabel: combined2, accessibilityHint: tmp53, children: closure_8(Text, obj6) };
      items1[3] = armedBadge;
      str32 = "none";
      if (tmp13 || "include" === tracking && null == violation) {
        str32 = "auto";
      }
      handleBadgePress = undefined;
      if (tmp13 || "include" === tracking && null == violation) {
        handleBadgePress = function handleBadgePress() {
          let navigationKey;
          const tmp = closure_3;
          if (tmp) {
            _undefined((arg0) => !arg0);
          } else {
            const tmp2 = closure_5;
            if (tmp2) {
              const obj4 = NavigationTTIDebugFreeze;
              const result = obj4.disarmNavigationTTIDebugFreeze();
            } else {
              const tmp3 = closure_4;
              if (tmp3) {
                let activeTraceId = null;
                const obj = { kind: "component", spanComponent: name };
                const armNavigationTTIDebugFreeze = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze;
                NavigationTTIDebugFreeze;
                if (null != navTTISurface) {
                  const obj2 = NavigationSpanTrackerDefault;
                  activeTraceId = obj2.getActiveTraceId(tmp8.definition, tmp8.navigationKey);
                }
                const obj3 = { armedDuringTraceId: activeTraceId, destinationKey: navigationKey };
                navigationKey = undefined;
                if (navTTISurface != null) {
                  navigationKey = tmp8.navigationKey;
                }
                if (navigationKey == null) {
                  navigationKey = null;
                }
                const result1 = armNavigationTTIDebugFreeze(obj, obj3);
              }
            }
          }
        };
      }
      str33 = undefined;
      if (tmp13 || "include" === tracking && null == violation) {
        str33 = "button";
      }
      tmp47 = undefined;
      if (tmp13) {
        tmp47 = { expanded: tmp7 };
        const obj5 = { expanded: tmp7 };
      }
      combined2 = undefined;
      if (tmp13 || "include" === tracking && null == violation) {
        const _HermesInternal7 = HermesInternal;
        combined2 = "" + str5 + " \u00B7 " + name + " \u00B7 " + combined + str21;
      }
      if (tmp13) {
        let str39 = "Show Navigation TTI region details";
        if (tmp7) {
          str39 = "Collapse Navigation TTI region details";
        }
        tmp53 = str39;
      } else if ("include" === tracking && null == violation) {
        let str38 = "Freeze after this component paints on the next navigation";
        if ("component" === kind && syncExternalStore.spanComponent === name) {
          str38 = "Disarm the one-shot freeze for this component";
        }
        tmp53 = str38;
      }
      obj6 = { variant: "text-xs/bold", color: str30, style: tmp.badgeText, lineClamp: num, accessible: false, children: combined1 };
      num = 1;
      Text = tmp2(5086).Text;
      if (tmp7) {
        num = 3;
      }
      items2 = [closure_8(tmp44, obj4), ];
      let tmp40Result = null;
      if (0 === hierarchyDepth) {
        const obj7 = { children: items3 };
        const obj8 = { surface: navTTISurface };
        items3 = [closure_8(closure_15, obj8), ];
        const obj9 = { target: syncExternalStore, surface: navTTISurface };
        items3[1] = closure_8(closure_16, obj9);
        tmp40Result = tmp40(closure_9, obj7);
      }
      items2[1] = tmp40Result;
      return closure_7(tmp41, obj3);
    }
    const _HermesInternal5 = HermesInternal;
    str24 = " \u00B7 " + combined;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let result1 = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugOverlay.tsx");

export const NavigationTTIRegionDebugOverlay = tmp7;
