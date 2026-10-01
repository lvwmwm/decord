// Module ID: 16175
// Function ID: 16176
// Name: NavTTIView
// Dependencies: [109, 19, 17, 4835, 21, 16176, 16182, 16183, 504, 16171, 2]
// Exports: NavTTIView

// Module 16175 (NavTTIView)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import useComponentRenderSpan from "useComponentRenderSpan" /* 16176 */;
import NavigationTTIRegionHierarchy from "NavigationTTIRegionHierarchy" /* 16182 */;
import NavigationTTIRegionDebugOverlay from "NavigationTTIRegionDebugOverlay" /* 16183 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let tmp;
const navigationTTIEnabled = tmp(16171);
function NavTTIMeasuredView(onLayout) {
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
  const tmp3 = React4;
  const merged1 = Object.assign(merged);
  const tmp4 = View;
  if (null != onLayout2) {
    onLayout = callback;
  }
  return tmp3(tmp4, obj);
}
function IncludedNavTTIView(name) {
  let navigationTTIRegionMeasurement;
  name = name.name;
  const merged = Object.assign(name, Object.assign({ name: 0 }));
  const obj2 = { measurementProps: navigationTTIRegionMeasurement };
  const obj = useComponentRenderSpan;
  navigationTTIRegionMeasurement = obj.useNavigationTTIRegionMeasurement("include", name);
  const merged1 = Object.assign(merged);
  return React4(NavTTIMeasuredView, obj2);
}
function VisualizedNavTTIViewContent(measurementProps) {
  let descendantTracking;
  let hierarchy;
  let items;
  let props;
  let tracking;
  ({ props, hierarchy } = measurementProps);
  measurementProps = measurementProps.measurementProps;
  ({ tracking, descendantTracking } = props);
  let str = props.name;
  const tmp = _objectWithoutProperties(props, closure_2);
  if (str == null) {
    str = "(unnamed)";
  }
  const obj = { measurementProps, children: items };
  const merged = Object.assign(tmp);
  items = [, ];
  const obj2 = { value: hierarchy.contextValue, children: props.children };
  items[0] = React4(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, obj2);
  const obj3 = { name: str, regionId: hierarchy.regionId, tracking, descendantTracking, includedDescendants: hierarchy.includedDescendants, excludedDescendants: hierarchy.excludedDescendants, hierarchyDepth: hierarchy.depth, violation: hierarchy.violation };
  items[1] = React4(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj3);
  return authStore(NavTTIMeasuredView, obj);
}
function VisualizedIncludedNavTTIView(name) {
  let Children;
  const obj = { name: name.name, tracking: name.tracking, hasChildren: Children.count(name.children) > 0 };
  Children = react.Children;
  const useNavigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy;
  NavigationTTIRegionHierarchy;
  const navigationTTIRegionHierarchy = useNavigationTTIRegionHierarchy(obj);
  const obj2 = useComponentRenderSpan;
  const obj3 = { props: name, measurementProps: obj2.useNavigationTTIRegionMeasurement("include", name.name), hierarchy: navigationTTIRegionHierarchy };
  return React4(VisualizedNavTTIViewContent, obj3);
}
function VisualizedExcludedNavTTIView(name) {
  let Children;
  let str = name.name;
  if (str == null) {
    str = "(unnamed)";
  }
  const obj = { name: str, tracking: name.tracking, descendantTracking: name.descendantTracking, hasChildren: Children.count(name.children) > 0 };
  Children = react.Children;
  const useNavigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy;
  NavigationTTIRegionHierarchy;
  const navigationTTIRegionHierarchy = useNavigationTTIRegionHierarchy(obj);
  const obj2 = useComponentRenderSpan;
  const obj3 = { props: name, measurementProps: obj2.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId), hierarchy: navigationTTIRegionHierarchy };
  return React4(VisualizedNavTTIViewContent, obj3);
}
function VisualizedNavTTIView(tracking) {
  let tmp6;
  if ("include" === tracking.tracking) {
    const obj2 = {};
    const merged = Object.assign(tracking);
    tmp6 = React4(VisualizedIncludedNavTTIView, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(tracking);
    tmp6 = React4(VisualizedExcludedNavTTIView, obj);
  }
  return tmp6;
}
let closure_2 = ["tracking", "descendantTracking", "name"];
let closure_3 = ["tracking", "name", "descendantTracking"];
let closure_4 = ["tracking", "name"];
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTIView.tsx");

export const NavTTIView = function NavTTIView(tracking) {
  let descendantTracking;
  let name2;
  let tracking2;
  const items = [DevSettingsStore];
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
    const obj2 = {};
    const merged = Object.assign(tracking);
    return React4(VisualizedNavTTIView, obj2);
  } else if ("exclude" === tracking.tracking) {
    ({ tracking: tracking2, name: name2, descendantTracking } = tracking);
    const obj3 = {};
    const merged1 = Object.assign(_objectWithoutProperties(tracking, closure_3));
    return React4(View, obj3);
  } else {
    let tmp6Result;
    tracking = tracking.tracking;
    const name = tracking.name;
    const tmp5 = _objectWithoutProperties(tracking, closure_4);
    const tmpResult = navigationTTIEnabled;
    if (tmpResult.isNavigationTTIEnabled()) {
      const obj4 = { name };
      const merged2 = Object.assign(tmp5);
      tmp6Result = tmp6(IncludedNavTTIView, obj4);
    } else {
      const obj5 = {};
      const merged3 = Object.assign(tmp5);
      tmp6Result = tmp6(View, obj5);
    }
    return tmp6Result;
  }
};
