// Module ID: 13085
// Function ID: 100832
// Name: useAccessibilityPatchedDescriptors
// Dependencies: [31, 33, 5519, 1457, 9113, 2]

// Module 13085 (useAccessibilityPatchedDescriptors)
import result from "result";
import { jsx } from "jsxProd";
import Link from "Link";

const require = arg1;
function useAccessibilityPatchedDescriptors(descriptors) {
  const _require = descriptors;
  accessibilityNativeStackOptions = _require(accessibilityNativeStackOptions[2]).useAccessibilityNativeStackOptions();
  const items = [descriptors, accessibilityNativeStackOptions];
  return React.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return descriptors;
    } else {
      let obj = {};
      for (const key10007 in closure_0) {
        let tmp12 = key10007;
        let tmp13 = descriptors;
        let tmp14 = descriptors[key10007];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          obj = {};
          let tmp2 = obj;
          let tmp3 = tmp14;
          let merged = Object.assign(tmp14);
          obj = {};
          let tmp5 = obj;
          let merged1 = Object.assign(tmp14.options);
          let tmp7 = accessibilityNativeStackOptions;
          let tmp8 = obj;
          let merged2 = Object.assign(accessibilityNativeStackOptions);
          obj["options"] = obj;
          tmp10 = obj;
        }
        obj[key10007] = tmp10;
        continue;
      }
      return obj;
    }
  }, items);
}
const navigatorFactory = Link.createNavigatorFactory(function AccessibleNativeStackNavigator(arg0) {
  let NavigationContent;
  let children;
  let id;
  let initialRouteName;
  let navigation;
  let screenListeners;
  let screenOptions;
  let state;
  let obj = { id: 0, initialRouteName: 0, children: 0, screenListeners: 0, screenOptions: 0 };
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const navigationBuilder = require(1457) /* Link */.useNavigationBuilder(require(1457) /* Link */.StackRouter, { id, initialRouteName, children, screenListeners, screenOptions });
  ({ state, navigation, NavigationContent } = navigationBuilder);
  obj = {};
  const obj2 = require(1457) /* Link */;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["state"] = state;
  obj["navigation"] = navigation;
  obj["descriptors"] = useAccessibilityPatchedDescriptors(navigationBuilder.descriptors);
  obj.children = jsx(require(9113) /* createNativeStackNavigator */.NativeStackView, {});
  return <NavigationContent />;
});
const result = require("NavigationStack").fileFinishedImporting("design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx");

export default navigatorFactory;
export { useAccessibilityPatchedDescriptors };
