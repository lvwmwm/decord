// Module ID: 16183
// Function ID: 16184
// Name: NavigationTTIRegionDebugOverlay
// Dependencies: [32, 19, 17, 21, 4836, 576, 16177, 16179, 16181, 16180, 4832, 2]
// Exports: NavigationTTIRegionDebugOverlay

// Module 16183 (NavigationTTIRegionDebugOverlay)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16179 */;
import NavigationTTIDebugFreeze from "NavigationTTIDebugFreeze" /* 16180 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
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
let rect;
let rect1;
let rect2;
let rect3;
let rect4;
function NavigationTTIDebugFreezeControl(arg0) {
  let Text;
  let obj2;
  let target;
  ({ target, surface: require } = arg0);
  let name;
  const tmp = closure_10();
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
    } else {
      str = "FREEZE: NEXT FP";
      if ("first_paint" !== name1) {
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
    hitSlop: name(576).space.PX_12,
    onPress() {
      let navigationKey;
      let tmp8;
      let activeTraceId = null;
      if (null != require) {
        const obj = NavigationSpanTrackerDefault;
        activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
      }
      if (null == name) {
        let first = closure_9[0];
        if (first == null) {
          first = null;
        }
        tmp8 = first;
      } else {
        tmp8 = closure_9[closure_9.indexOf(closure_9, tmp5) + 1];
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
  let str4 = "text-default";
  Text = Text_Text.Text;
  if (null != target) {
    str4 = "text-feedback-info";
  }
  obj2 = { variant: "text-xs/bold", color: str4, style: tmp.badgeText, lineClamp: 1, accessible: false, children: str };
  return closure_7(tmp7, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = ["time_start", "first_paint"];
let createStyles = createStyles_mod;
let obj = { outline: obj2, includedOutline: obj3, excludedOutline: obj4, mixedOutline: obj5, violationOutline: obj6, badge: { position: "absolute", maxWidth: "48%" }, expandedBadge: { maxWidth: "92%" }, badgeText: obj7, includedBadge: rect, excludedBadge: rect1, mixedBadge: rect2, violationBadge: rect3, armedBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO }, freezeControl: rect4, armedFreezeControl: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO } };
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
({ backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO });
rect4 = { position: "absolute", right: 0, bottom: 0, maxWidth: "60%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
({ backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO });
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugOverlay.tsx");

export const NavigationTTIRegionDebugOverlay = function NavigationTTIRegionDebugOverlay(name) {
  let Text;
  let _undefined;
  let c2;
  let closure_3;
  let closure_4;
  let combined;
  let combined2;
  let descendantTracking;
  let excludedDescendants;
  let fn;
  let hierarchyDepth;
  let includedDescendants;
  let items3;
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
  let tmp = closure_10();
  let tmp3 = dependencyMap;
  let tmp2 = name;
  let obj = name(16177);
  const navTTISurface = obj.useNavTTISurface();
  [tmp6, c2] = _slicedToArray(react.useState(false), 2);
  const useSyncExternalStore = react.useSyncExternalStore;
  const tmp5 = _slicedToArray(react.useState(false), 2);
  const subscribeNavigationTTIDebugFreezeTarget = name(16180).subscribeNavigationTTIDebugFreezeTarget;
  const syncExternalStore = useSyncExternalStore(subscribeNavigationTTIDebugFreezeTarget, name(16180).getNavigationTTIDebugFreezeTarget, name(16180).getNavigationTTIDebugFreezeTarget);
  let obj2 = name(16177);
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
    let result = hierarchyDepth * navTTISurface(576).space.PX_4;
    const items1 = [tmp.outline, , , ];
    const rect = { top: result, right: result, bottom: result, left: result };
    items1[1] = rect;
    const tmp39 = navTTISurface;
    const tmp41 = closure_8;
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
    let obj4 = { style: items2, pointerEvents: str28, disabled: !(tmp15 || tmp18), hitSlop: tmp39(576).space.PX_12, onPress: fn, accessible: tmp15 || tmp18, accessibilityRole: str29, accessibilityState: tmp48, accessibilityLabel: combined2, accessibilityHint: tmp54, children: closure_7(Text, obj6) };
    items2[3] = armedBadge;
    str28 = "none";
    if (tmp15 || tmp17 && null == violation) {
      str28 = "auto";
    }
    fn = undefined;
    if (tmp15 || tmp17 && null == violation) {
      fn = () => {
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
    Text = tmp2(4832).Text;
    if (tmp6) {
      num2 = 3;
    }
    items3 = [closure_7(tmp45, obj4), ];
    let tmp44Result = null;
    if (0 === hierarchyDepth) {
      const obj7 = { target: syncExternalStore, surface: navTTISurface };
      tmp44Result = tmp44(NavigationTTIDebugFreezeControl, obj7);
    }
    items3[1] = tmp44Result;
    return tmp41(tmp42, obj3);
  }
  str21 = " \u00B7 " + combined;
};
