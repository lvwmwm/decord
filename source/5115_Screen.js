// Module ID: 5115
// Function ID: 44374
// Name: Screen
// Dependencies: []
// Exports: default

// Module 5115 (Screen)
let StyleSheet;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ StyleSheet, View: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const styles = StyleSheet.create({ container: { marginLeft: false, marginVertical: "linear" }, content: { flex: 1 }, absolute: { "Null": 131420590, "Null": -1717986767, "Null": -644245095, "Null": 94527 } });

export default function Screen(headerShown) {
  let children;
  let focused;
  let headerStatusBarHeight;
  let headerTransparent;
  let modal;
  let navigation;
  let route;
  let style;
  let obj = callback(dependencyMap[4]);
  const callback = obj.useSafeAreaFrame();
  let obj1 = callback(dependencyMap[4]);
  const safeAreaInsets = obj1.useSafeAreaInsets();
  let context = React.useContext(importDefault(dependencyMap[5]));
  const context1 = React.useContext(importDefault(dependencyMap[6]));
  ({ focused, modal } = headerShown);
  const importDefault = undefined !== modal && modal;
  headerShown = headerShown.headerShown;
  let tmp4 = undefined === headerShown;
  if (!tmp4) {
    tmp4 = headerShown;
  }
  ({ headerStatusBarHeight, headerTransparent } = headerShown);
  if (undefined === headerStatusBarHeight) {
    let num = 0;
    if (!context) {
      num = safeAreaInsets.top;
    }
    headerStatusBarHeight = num;
  }
  const dependencyMap = headerStatusBarHeight;
  ({ navigation, route, children, style } = headerShown);
  const tmp5 = callback2(React.useState(() => callback(headerStatusBarHeight[7])(closure_0, callback, headerStatusBarHeight)), 2);
  let first = tmp5[0];
  const callback2 = tmp5[1];
  obj = { accessibilityElementsHidden: !focused };
  let str = "no-hide-descendants";
  if (focused) {
    str = "auto";
  }
  obj.importantForAccessibility = str;
  const items = [closure_8.container, style];
  obj.style = items;
  obj = { style: closure_8.content };
  obj1 = {};
  if (!context) {
    context = false !== tmp4;
  }
  obj1.value = context;
  const obj2 = {};
  if (!tmp4) {
    let num2 = 0;
    if (null != context1) {
      num2 = context1;
    }
    first = num2;
  }
  obj2.value = first;
  obj2.children = children;
  obj1.children = closure_6(importDefault(dependencyMap[6]).Provider, obj2);
  obj.children = closure_6(importDefault(dependencyMap[5]).Provider, obj1);
  const items1 = [closure_6(closure_5, obj), ];
  let tmp14Result = null;
  if (tmp4) {
    const obj3 = { value: navigation };
    const obj4 = { value: route };
    const obj5 = {
      onLayout(nativeEvent) {
          callback2(nativeEvent.nativeEvent.layout.height);
        }
    };
    let absolute = null;
    if (headerTransparent) {
      absolute = closure_8.absolute;
    }
    obj5.style = absolute;
    obj5.children = headerShown.header;
    obj4.children = closure_6(closure_5, obj5);
    obj3.children = closure_6(callback(dependencyMap[9]).NavigationRouteContext.Provider, obj4);
    tmp14Result = tmp14(callback(dependencyMap[9]).NavigationContext.Provider, obj3);
    const tmp17 = closure_5;
  }
  items1[1] = tmp14Result;
  obj.children = items1;
  return closure_7(importDefault(dependencyMap[8]), obj);
};
