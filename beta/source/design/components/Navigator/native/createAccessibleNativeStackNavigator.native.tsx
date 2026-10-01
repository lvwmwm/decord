// Module ID: 13991
// Function ID: 13992
// Name: createAccessibleNativeStackNavigator
// Dependencies: [19, 21, 6421, 1486, 7339, 2]
// Exports: default, useAccessibilityPatchedDescriptors

// Module 13991 (createAccessibleNativeStackNavigator)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1486 */;
import Navigator from "Navigator" /* 6421 */;
import NativeStackView2 from "NativeStackView" /* 7339 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function AccessibleNativeStackNavigator(arg0) {
  let NavigationContent;
  let UNSTABLE_routeNamesChangeBehavior;
  let UNSTABLE_router;
  let children;
  let describe;
  let id;
  let initialRouteName;
  let layout;
  let screenLayout;
  let screenListeners;
  let screenOptions;
  let state;
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  let obj = Link;
  const navigationBuilder = obj.useNavigationBuilder(Link.StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  const descriptors = navigationBuilder.descriptors;
  ({ state, describe, navigation, NavigationContent } = navigationBuilder);
  let obj2 = Navigator;
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  const items = [descriptors, accessibilityNativeStackOptions];
  const memo = react.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      const obj = {};
      for (const key10006 in descriptors) {
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          let obj2 = { options: obj3 };
          let merged = Object.assign(tmp14);
          let obj3 = {};
          let merged1 = Object.assign(tmp14.options);
          let merged2 = Object.assign(accessibilityNativeStackOptions);
          tmp10 = obj2;
        }
        obj[key10006] = tmp10;
        continue;
      }
      return obj;
    }
  }, items);
  const NativeStackView = NativeStackView2.NativeStackView;
  let merged1 = Object.assign(merged);
  return <NavigationContent>{null}</NavigationContent>;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx");

export default function createAccessibleNativeStackNavigator(arg0) {
  const obj = Link;
  return obj.createNavigatorFactory(AccessibleNativeStackNavigator)(arg0);
};
export const useAccessibilityPatchedDescriptors = function useAccessibilityPatchedDescriptors(filteredDescriptors) {
  let closure_0 = filteredDescriptors;
  const obj = Navigator;
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [filteredDescriptors, accessibilityNativeStackOptions];
  return react.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      const obj = {};
      for (const key10006 in descriptors) {
        let tmp14 = descriptors[key10006];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          let obj2 = { options: obj3 };
          let merged = Object.assign(tmp14);
          let obj3 = {};
          let merged1 = Object.assign(tmp14.options);
          let merged2 = Object.assign(accessibilityNativeStackOptions);
          tmp10 = obj2;
        }
        obj[key10006] = tmp10;
        continue;
      }
      return obj;
    }
  }, items);
};
