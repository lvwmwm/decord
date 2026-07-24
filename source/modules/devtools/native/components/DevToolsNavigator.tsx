// Module ID: 13556
// Function ID: 104247
// Name: navigateToDevTools
// Dependencies: [31, 27, 33, 9149, 5517, 9158, 13557, 9066, 4126, 689, 13559, 4098, 4337, 2]
// Exports: navigateToDevTools

// Module 13556 (navigateToDevTools)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let closure_7 = require("result").memo((screenKey) => {
  screenKey = screenKey.screenKey;
  let obj = _require(5517);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {};
  let str = "home";
  if (null != screenKey) {
    str = screenKey;
  }
  obj.initialRouteName = str;
  obj.screenOptions = function screenOptions(navigation) {
    let obj = {
      headerTitle(children) {
        let obj = Object.create(null);
        obj.children = 0;
        const merged = Object.assign(children, obj);
        obj = { title: children.children };
        const merged1 = Object.assign(merged);
        return outer2_4(callback(outer2_2[5]).GenericHeaderTitle, obj);
      },
      headerLeft: callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(callback);
    return obj;
  };
  obj = {
    name: "home",
    component: importDefault(13557),
    options() {
      return {
        headerTitle() {
          let obj = { style: { flexDirection: "row" } };
          const items = [outer2_4(callback(outer2_2[7]).HammerIcon, { size: "sm" }), ];
          obj = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
          obj = { marginLeft: outer2_1(outer2_2[9]).space.PX_8 };
          obj.style = obj;
          items[1] = outer2_4(callback(outer2_2[8]).Text, obj);
          obj.children = items;
          return outer2_5(outer2_3, obj);
        },
        title: "DevTools"
      };
    }
  };
  let items = [callback(createNativeStackNavigator.Screen, obj), ];
  let merged = Object.assign(_require(13559).DevToolsScreens);
  let merged1 = Object.assign(_require(13559).PerformanceTestingScreens);
  const entries = Object.entries({});
  items[1] = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    return outer1_4(outer1_6.Screen, {
      name: tmp,
      children: tmp2,
      options() {
        return { title: closure_0 };
      }
    }, tmp);
  });
  obj.children = items;
  return closure_5(createNativeStackNavigator.Navigator, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  importDefault(4098).hideActionSheet();
  const obj2 = importDefault(4098);
  importDefault(4337).pushLazy(() => Promise.resolve(outer1_7), { screenKey: obj.screenKey }, "DevToolsNavigator");
};
