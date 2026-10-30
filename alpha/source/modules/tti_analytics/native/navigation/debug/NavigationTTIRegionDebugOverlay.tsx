// Module ID: 18558
// Function ID: 18559
// Name: NavigationTTIRegionDebugOverlay
// Dependencies: [32, 19, 17, 21, 5009, 575, 13279, 13280, 18556, 13282, 5619, 2]
// Exports: NavigationTTIRegionDebugOverlay

// Module 18558 (NavigationTTIRegionDebugOverlay)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 13280 */;
import NavigationTTIDebugFreeze from "NavigationTTIDebugFreeze" /* 13282 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

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
function NavigationTTIMilestoneReadout(surface) {
  let NumberResult1;
  let Text;
  let firstContentfulPaintMs;
  let firstPaintMs;
  let items1;
  let items2;
  let obj;
  let obj3;
  let tmp6;
  let tmp7;
  surface = surface.surface;
  const tmp = closure_11();
  const items = [surface];
  const callback = react.useCallback((arg0) => {
    const obj = NavigationSpanTrackerDefault;
    return obj.subscribeDebugBundle(arg0);
  }, []);
  const callback1 = react.useCallback(() => {
    let first_contentful_paint_ms;
    let first_paint_ms;
    if (null == surface) {
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
    obj = { firstPaintMs: null, firstContentfulPaintMs: null };
  } else {
    [, tmp6, tmp7] = str.split(":");
    let NumberResult = null;
    if ("" !== tmp6) {
      const _Number = Number;
      NumberResult = Number(tmp6);
    }
    obj = { firstPaintMs: NumberResult, firstContentfulPaintMs: NumberResult1 };
    NumberResult1 = null;
    if ("" !== tmp7) {
      const _Number2 = Number;
      NumberResult1 = Number(tmp7);
    }
  }
  ({ firstPaintMs, firstContentfulPaintMs } = obj);
  let str4 = "waiting";
  let str5 = "waiting";
  if (null != firstPaintMs) {
    let _HermesInternal = HermesInternal;
    str5 = "+" + firstPaintMs + "ms";
  }
  if (null != firstContentfulPaintMs) {
    const _HermesInternal2 = HermesInternal;
    str4 = "+" + firstContentfulPaintMs + "ms";
  }
  const obj2 = { style: tmp.milestoneReadout, pointerEvents: "none", accessible: false, children: closure_7(Text, obj3) };
  obj3 = { variant: "text-xs/normal", color: "text-default", style: tmp.badgeText, lineClamp: 1, accessible: false, children: items2 };
  Text = surface(5619).Text;
  const obj4 = { variant: "text-xs/bold", color: "none", children: items1 };
  items1 = ["FP ", str5];
  items2 = [closure_7(surface(5619).Text, obj4), " \u00B7 FCP ", str4];
  return closure_8(closure_6, obj2);
}
function NavigationTTIDebugFreezeControl(arg0) {
  let Text;
  let obj2;
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
  const tmp7 = closure_5;
  if (null != target) {
    armedFreezeControl = tmp.armedFreezeControl;
  }
  let obj = {
    style: items,
    hitSlop: name(575).space.PX_12,
    onPress: function cycleTarget() {
      let navigationKey;
      let tmp8;
      let activeTraceId = null;
      if (null != require) {
        const obj = NavigationSpanTrackerDefault;
        activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
      }
      if (null == name) {
        let first = closure_10[0];
        if (first == null) {
          first = null;
        }
        tmp8 = first;
      } else {
        tmp8 = closure_10[closure_10.indexOf(closure_10, tmp5) + 1];
        if (tmp8 == null) {
          tmp8 = null;
        }
      }
      if (null == tmp8) {
        const obj4 = NavigationTTIDebugFreeze;
        const result = obj4.disarmNavigationTTIDebugFreeze();
      } else {
        const obj3 = { armedDuringTraceId: activeTraceId, destinationKey: navigationKey };
        navigationKey = undefined;
        const obj2 = { kind: "milestone", name: tmp8 };
        const armNavigationTTIDebugFreeze = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze;
        NavigationTTIDebugFreeze;
        if (require != null) {
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
}
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
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugOverlay.tsx");

export function NavigationTTIRegionDebugOverlay(name) {
  let Text;
  let _undefined;
  let c2;
  let closure_3;
  let closure_4;
  let combined;
  let combined2;
  let descendantTracking;
  let excludedDescendants;
  let handleBadgePress;
  let hierarchyDepth;
  let includedDescendants;
  let items3;
  let items4;
  let num2;
  let obj6;
  let regionId;
  let str28;
  let str29;
  let str3;
  let tmp48;
  let tmp54;
  let tmp6;
  let tracking;
  let violation;
  name = name.name;
  ({ regionId, tracking, descendantTracking, includedDescendants, excludedDescendants, hierarchyDepth, violation } = name);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_5;
  let tmp = closure_11();
  let tmp3 = dependencyMap;
  let tmp2 = name;
  let obj = name(13279);
  const navTTISurface = obj.useNavTTISurface();
  [tmp6, c2] = _slicedToArray(react.useState(false), 2);
  const useSyncExternalStore = react.useSyncExternalStore;
  const tmp5 = _slicedToArray(react.useState(false), 2);
  const subscribeNavigationTTIDebugFreezeTarget = name(13282).subscribeNavigationTTIDebugFreezeTarget;
  const syncExternalStore = useSyncExternalStore(subscribeNavigationTTIDebugFreezeTarget, name(13282).getNavigationTTIDebugFreezeTarget, name(13282).getNavigationTTIDebugFreezeTarget);
  let obj2 = name(13279);
  const navTTISurface1 = obj2.useNavTTISurface();
  const items = [name, regionId, navTTISurface1, tracking];
  const callback = react.useCallback((arg0) => {
    const obj = navTTISurface(c2[7]);
    let closure_0 = obj.subscribeDebugBundle(arg0);
    const obj2 = name(c2[8]);
    let closure_1 = obj2.subscribeNavigationTTIRegionDebugMeasurements(arg0);
    return () => {
      closure_0();
      closure_1();
    };
  }, []);
  const callback1 = react.useCallback(() => {
    let activeTraceId = null;
    if (null != navTTISurface1) {
      const obj = navTTISurface(tracking[7]);
      activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
    }
    let str = "none";
    if (null != activeTraceId) {
      let str3;
      if ("include" === tracking) {
        const obj3 = navTTISurface(tracking[7]);
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
        const obj2 = name(tracking[8]);
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
  const syncExternalStore1 = react.useSyncExternalStore(callback, callback1, callback1);
  const lastIndexOfResult = syncExternalStore1.lastIndexOf(":");
  let NumberResult = null;
  if (-1 !== lastIndexOfResult) {
    let str = "";
    NumberResult = null;
    if ("" !== syncExternalStore1.slice(lastIndexOfResult + 1)) {
      const _Number = Number;
      NumberResult = Number(syncExternalStore1.slice(lastIndexOfResult + 1));
    }
  }
  let tmp15 = "exclude" === tracking;
  let tmp16 = tmp15;
  if (tmp16) {
    tmp16 = "mixed" === descendantTracking;
  }
  if (!tmp15) {
    tmp15 = tmp14;
  }
  _slicedToArray = tmp15;
  react = tmp18;
  let kind;
  if (syncExternalStore != null) {
    kind = syncExternalStore.kind;
  }
  closure_5 = tmp20;
  if (null != violation) {
    const _HermesInternal2 = HermesInternal;
    str3 = "INVALID \u00B7 " + violation;
  } else {
    str3 = "MEASURED";
    if ("include" !== tracking) {
      let str4 = "TRACKED";
      if ("included" !== descendantTracking) {
        let str6 = "MIXED";
        if ("excluded" === descendantTracking) {
          str6 = "IGNORED";
        }
        str4 = str6;
      }
      let _HermesInternal = HermesInternal;
      str3 = "BOUNDARY ONLY \u00B7 CHILDREN " + str4 + " \u00B7 " + includedDescendants + " tracked / " + excludedDescendants + " ignored below";
    }
  }
  if (null == NumberResult) {
    let str15 = "not observed";
    if ("include" === tracking) {
      str15 = "waiting";
    }
    combined = str15;
  } else {
    const _HermesInternal3 = HermesInternal;
    combined = "+" + NumberResult + "ms";
  }
  let tmp29 = str3;
  if (!tmp6) {
    let str16 = "INVALID";
    if (null == violation) {
      let str17 = "MIXED";
      if (!tmp16) {
        let tmp30 = "BOUNDARY";
        if ("include" === tracking) {
          tmp30 = null;
        }
        str17 = tmp30;
      }
      str16 = str17;
    }
    tmp29 = str16;
  }
  let str18 = "";
  if ("component" === kind && syncExternalStore.spanComponent === name) {
    str18 = " \u00B7 FREEZE NEXT";
  }
  let str19 = "";
  if (null != tmp29) {
    const _HermesInternal4 = HermesInternal;
    str19 = "" + tmp29 + " \u00B7 ";
  }
  if (!tmp6) {
    let str21;
    let violationOutline;
    let includedBadge;
    if ("include" !== tracking) {
      str21 = "";
    }
    let str22 = "";
    if (tmp15) {
      let str23 = " \u25B8";
      if (tmp6) {
        str23 = " \u25BE";
      }
      str22 = str23;
    }
    const _HermesInternal5 = HermesInternal;
    let str26 = "text-overlay-light";
    const combined1 = "" + str19 + name + str21 + str18 + str22;
    if (null == violation) {
      str26 = "text-overlay-light";
      if ("include" !== tracking) {
        let str27 = "text-default";
        if (tmp16) {
          str27 = "text-feedback-info";
        }
        str26 = str27;
      }
    }
    let result = hierarchyDepth * navTTISurface(575).space.PX_4;
    const items1 = [tmp.outline, , , ];
    const rect = { top: result, right: result, bottom: result, left: result };
    items1[1] = rect;
    const tmp39 = navTTISurface;
    const tmp42 = closure_6;
    if (null != violation) {
      violationOutline = tmp.violationOutline;
    } else {
      violationOutline = tmp17 ? tmp.includedOutline : tmp.excludedOutline;
    }
    items1[2] = violationOutline;
    let mixedOutline;
    if (null == violation) {
      if (tmp16) {
        mixedOutline = tmp.mixedOutline;
      }
    }
    let obj3 = { style: items1, pointerEvents: "box-none", accessible: false, children: items3 };
    items1[3] = mixedOutline;
    const items2 = [tmp.badge, , , ];
    let expandedBadge;
    const tmp45 = closure_5;
    if (tmp6) {
      expandedBadge = tmp.expandedBadge;
    }
    items2[1] = expandedBadge;
    if (null != violation) {
      includedBadge = tmp.violationBadge;
    } else if ("include" === tracking) {
      includedBadge = tmp.includedBadge;
    } else {
      includedBadge = tmp16 ? tmp.mixedBadge : tmp.excludedBadge;
    }
    items2[2] = includedBadge;
    let armedBadge;
    if ("component" === kind && syncExternalStore.spanComponent === name) {
      armedBadge = tmp.armedBadge;
    }
    let obj4 = { style: items2, pointerEvents: str28, disabled: !(tmp15 || tmp18), hitSlop: tmp39(575).space.PX_12, onPress: handleBadgePress, accessible: tmp15 || tmp18, accessibilityRole: str29, accessibilityState: tmp48, accessibilityLabel: combined2, accessibilityHint: tmp54, children: closure_8(Text, obj6) };
    items2[3] = armedBadge;
    str28 = "none";
    if (tmp15 || tmp17 && null == violation) {
      str28 = "auto";
    }
    handleBadgePress = undefined;
    if (tmp15 || tmp17 && null == violation) {
      handleBadgePress = function handleBadgePress() {
        let navigationKey;
        const tmp = closure_3;
        if (tmp) {
          c2((arg0) => !arg0);
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
    str29 = undefined;
    if (tmp15 || tmp17 && null == violation) {
      str29 = "button";
    }
    tmp48 = undefined;
    if (tmp15) {
      tmp48 = { expanded: tmp6 };
      const obj5 = { expanded: tmp6 };
    }
    combined2 = undefined;
    if (tmp15 || tmp17 && null == violation) {
      const _HermesInternal6 = HermesInternal;
      combined2 = "" + str3 + " \u00B7 " + name + " \u00B7 " + combined + str18;
    }
    if (tmp15) {
      let str35 = "Show Navigation TTI region details";
      if (tmp6) {
        str35 = "Collapse Navigation TTI region details";
      }
      tmp54 = str35;
    } else if (tmp17 && null == violation) {
      let str34 = "Freeze after this component paints on the next navigation";
      if ("component" === kind && syncExternalStore.spanComponent === name) {
        str34 = "Disarm the one-shot freeze for this component";
      }
      tmp54 = str34;
    }
    obj6 = { variant: "text-xs/bold", color: str26, style: tmp.badgeText, lineClamp: num2, accessible: false, children: combined1 };
    num2 = 1;
    Text = tmp2(5619).Text;
    if (tmp6) {
      num2 = 3;
    }
    items3 = [closure_8(tmp45, obj4), ];
    let tmp41Result = null;
    if (0 === hierarchyDepth) {
      const obj7 = { children: items4 };
      const obj8 = { surface: navTTISurface };
      items4 = [closure_8(NavigationTTIMilestoneReadout, obj8), ];
      const obj9 = { target: syncExternalStore, surface: navTTISurface };
      items4[1] = closure_8(NavigationTTIDebugFreezeControl, obj9);
      tmp41Result = tmp41(closure_9, obj7);
    }
    items3[1] = tmp41Result;
    return closure_7(tmp42, obj3);
  }
  str21 = " \u00B7 " + combined;
}
