// Module ID: 16436
// Function ID: 16437
// Name: NavTTISurfaceProvider
// Dependencies: [109, 19, 17, 4835, 21, 16182, 16176, 16183, 16171, 16179, 504, 16177, 2]
// Exports: NavTTISurfaceProvider

// Module 16436 (NavTTISurfaceProvider)
import react_native from "react-native" /* 17 */;
import useComponentRenderSpan from "useComponentRenderSpan" /* 16176 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16179 */;
import NavigationTTIRegionHierarchy from "NavigationTTIRegionHierarchy" /* 16182 */;
import NavigationTTIRegionDebugOverlay from "NavigationTTIRegionDebugOverlay" /* 16183 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
function NavTTISurfaceView(onLayout) {
  let children;
  let measurementProps;
  onLayout = onLayout.onLayout;
  ({ measurementProps, children } = onLayout);
  const merged = Object.assign(onLayout, Object.assign({ measurementProps: 0, onLayout: 0, children: 0 }));
  const onLayout2 = measurementProps.onLayout;
  const items = [onLayout2, onLayout];
  const obj = { onLayout, children };
  const callback = react.useCallback((arg0) => {
    if (onLayout2 != null) {
      tmp(arg0);
    }
    if (onLayout != null) {
      tmp3(arg0);
    }
  }, items);
  const tmp3 = metroImportAll;
  const merged1 = Object.assign(merged);
  const tmp4 = View;
  if (null != onLayout2) {
    onLayout = callback;
  }
  return tmp3(tmp4, obj);
}
function VisualizedNavTTISurfaceView(arg0) {
  let Children;
  let descendantTracking;
  let items;
  let name;
  let navigationTTIRegionMeasurement;
  let viewProps;
  ({ name, descendantTracking, viewProps } = arg0);
  const children = viewProps.children;
  const tmp = _objectWithoutProperties(viewProps, closure_3);
  const obj = { name, tracking: "exclude", descendantTracking, hasChildren: Children.count(children) > 0 };
  Children = react.Children;
  const useNavigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy;
  NavigationTTIRegionHierarchy;
  const navigationTTIRegionHierarchy = useNavigationTTIRegionHierarchy(obj);
  const obj3 = { measurementProps: navigationTTIRegionMeasurement, children: items };
  const obj2 = useComponentRenderSpan;
  navigationTTIRegionMeasurement = obj2.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId);
  const merged = Object.assign(tmp);
  items = [, ];
  const obj4 = { value: navigationTTIRegionHierarchy.contextValue, children };
  items[0] = metroImportAll(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, obj4);
  const obj5 = { name, regionId: navigationTTIRegionHierarchy.regionId, tracking: "exclude", descendantTracking, includedDescendants: navigationTTIRegionHierarchy.includedDescendants, excludedDescendants: navigationTTIRegionHierarchy.excludedDescendants, hierarchyDepth: navigationTTIRegionHierarchy.depth, violation: navigationTTIRegionHierarchy.violation };
  items[1] = metroImportAll(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj5);
  return React4(NavTTISurfaceView, obj3);
}
let closure_3 = ["children"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx");

export const NavTTISurfaceProvider = function NavTTISurfaceProvider(navigationKey) {
  let children;
  let descendantTracking;
  let isVisible;
  let name;
  let tmp16;
  navigationKey = navigationKey.navigationKey;
  const definition = navigationKey.definition;
  const visibilityMode = navigationKey.visibilityMode;
  ({ name, descendantTracking, isVisible } = navigationKey);
  const merged = Object.assign(navigationKey, Object.assign({ name: 0, navigationKey: 0, definition: 0, descendantTracking: 0, visibilityMode: 0, isVisible: 0 }));
  let syncExternalStore;
  let obj = navigationKey(visibilityMode[8]);
  const result = obj.isNavigationTTIEnabled();
  let c3 = result;
  isVisible = tmp5;
  const items = [definition, result, navigationKey];
  const items1 = [definition, result, navigationKey];
  const callback = syncExternalStore.useCallback((arg0) => {
    let fn;
    if (c3) {
      const obj = NavigationSpanTrackerDefault;
      fn = obj.subscribe(definition, navigationKey, arg0);
    } else {
      fn = () => {

      };
    }
    return fn;
  }, items);
  const callback1 = syncExternalStore.useCallback(() => {
    let activeTraceId = null;
    if (c3) {
      const obj = NavigationSpanTrackerDefault;
      activeTraceId = obj.getActiveTraceId(definition, navigationKey);
    }
    return activeTraceId;
  }, items1);
  syncExternalStore = syncExternalStore.useSyncExternalStore(callback, callback1, callback1);
  const items2 = [syncExternalStore, definition, tmp5, navigationKey, visibilityMode];
  const value = syncExternalStore.useMemo(() => ({ definition, navigationKey, activeTraceId: syncExternalStore, visibilityMode, isVisible }), items2);
  const items3 = [DevSettingsStore];
  const tmp2Result = navigationKey(visibilityMode[10]);
  if (tmp2Result.useStateFromStores(items3, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
    const obj2 = { name, descendantTracking, viewProps: merged };
    children = tmp10(VisualizedNavTTISurfaceView, obj2);
    tmp16 = tmp10;
  } else {
    const obj3 = { measurementProps: {} };
    const merged1 = Object.assign(merged);
    children = tmp10(NavTTISurfaceView, obj3);
    tmp16 = tmp10;
  }
  return tmp16(navigationKey(visibilityMode[11]).NavTTISurfaceContext.Provider, { value, children });
};
