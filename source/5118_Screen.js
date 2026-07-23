// Module ID: 5118
// Function ID: 44393
// Name: Screen
// Dependencies: [57, 31, 27, 33, 1560, 5102, 5113, 5099, 5098, 1457]
// Exports: default

// Module 5118 (Screen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ StyleSheet, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1, flexDirection: "column-reverse" }, content: { flex: 1 }, absolute: { position: "absolute", top: 0, left: 0, right: 0 } });

export default function Screen(headerShown) {
  let children;
  let focused;
  let headerStatusBarHeight;
  let headerTransparent;
  let modal;
  let navigation;
  let route;
  let style;
  let obj = _require(headerStatusBarHeight[4]);
  _require = obj.useSafeAreaFrame();
  let obj1 = _require(headerStatusBarHeight[4]);
  const safeAreaInsets = obj1.useSafeAreaInsets();
  let context = React.useContext(importDefault(headerStatusBarHeight[5]));
  const context1 = React.useContext(importDefault(headerStatusBarHeight[6]));
  ({ focused, modal } = headerShown);
  importDefault = undefined !== modal && modal;
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
  ({ navigation, route, children, style } = headerShown);
  const tmp5 = callback(React.useState(() => callback(headerStatusBarHeight[7])(closure_0, callback, headerStatusBarHeight)), 2);
  let first = tmp5[0];
  callback = tmp5[1];
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
  obj1.children = closure_6(importDefault(headerStatusBarHeight[6]).Provider, obj2);
  obj.children = closure_6(importDefault(headerStatusBarHeight[5]).Provider, obj1);
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
    obj3.children = closure_6(_require(headerStatusBarHeight[9]).NavigationRouteContext.Provider, obj4);
    tmp14Result = tmp14(_require(headerStatusBarHeight[9]).NavigationContext.Provider, obj3);
    const tmp17 = closure_5;
  }
  items1[1] = tmp14Result;
  obj.children = items1;
  return closure_7(importDefault(headerStatusBarHeight[8]), obj);
};
