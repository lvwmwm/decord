// Module ID: 12955
// Function ID: 98598
// Name: useAccessibilityPatchedDescriptors
// Dependencies: []

// Module 12955 (useAccessibilityPatchedDescriptors)
function useAccessibilityPatchedDescriptors(descriptors) {
  const arg1 = descriptors;
  const accessibilityNativeStackOptions = arg1(dependencyMap[2]).useAccessibilityNativeStackOptions();
  const dependencyMap = accessibilityNativeStackOptions;
  const items = [descriptors, accessibilityNativeStackOptions];
  return React.useMemo(() => {
    if (null == accessibilityNativeStackOptions) {
      return arg0;
    } else {
      let obj = {};
      for (const key10007 in closure_0) {
        let tmp12 = key10007;
        let tmp13 = closure_0;
        let tmp14 = closure_0[key10007];
        let tmp10 = tmp14;
        if ("none" !== tmp14.options.animation) {
          obj = {};
          let tmp2 = obj;
          let tmp3 = tmp14;
          let merged = Object.assign(tmp14);
          obj = {};
          let tmp5 = obj;
          let merged1 = Object.assign(tmp14.options);
          let tmp7 = closure_1;
          let tmp8 = obj;
          let merged2 = Object.assign(closure_1);
          obj["options"] = obj;
          tmp10 = obj;
        }
        obj[key10007] = tmp10;
      }
      return obj;
    }
  }, items);
}
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const navigatorFactory = arg1(dependencyMap[3]).createNavigatorFactory(function AccessibleNativeStackNavigator(arg0) {
  let NavigationContent;
  let children;
  let id;
  let initialRouteName;
  let navigation;
  let screenListeners;
  let screenOptions;
  let state;
  let obj = { -1550297213: false, -351643628: null, -1440499924: "", -591745613: null, 1630734434: null };
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const navigationBuilder = arg1(dependencyMap[3]).useNavigationBuilder(arg1(dependencyMap[3]).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions });
  ({ state, navigation, NavigationContent } = navigationBuilder);
  obj = {};
  const obj2 = arg1(dependencyMap[3]);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["state"] = state;
  obj["navigation"] = navigation;
  obj["descriptors"] = useAccessibilityPatchedDescriptors(navigationBuilder.descriptors);
  obj.children = jsx(arg1(dependencyMap[4]).NativeStackView, obj);
  return <NavigationContent {...obj} />;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Navigator/native/createAccessibleNativeStackNavigator.native.tsx");

export default navigatorFactory;
export { useAccessibilityPatchedDescriptors };
