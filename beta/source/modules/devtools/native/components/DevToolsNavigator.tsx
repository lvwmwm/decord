// Module ID: 14139
// Function ID: 14140
// Name: DevToolsNavigator
// Dependencies: [19, 17, 21, 7339, 6421, 14140, 7288, 15346, 8736, 4832, 576, 15134, 14251, 4800, 5039, 4700, 2]
// Exports: navigateToDevTools

// Module 14139 (DevToolsNavigator)
import react_native from "react-native" /* 17 */;
import Types from "Types" /* 4700 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import SettingHookHarnessDefault from "SettingHookHarness" /* 14140 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp6;
const DevToolsContentDefault = tmp6(15346);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let Navigator = NativeStackView.createNativeStackNavigator();
let closure_8 = react.memo((screenKey) => {
  let Screen;
  let closure_0;
  let items1;
  let str = screenKey.screenKey;
  _require = undefined;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  let items = [closure_4(SettingHookHarnessDefault, {}), ];
  const tmp7 = Navigator;
  Navigator = Navigator.Navigator;
  const tmp4 = closure_6;
  const tmp5 = closure_4;
  if (str == null) {
    str = "home";
  }
  let obj2 = { children: items };
  let obj3 = {
    initialRouteName: str,
    screenOptions(navigation) {
      let obj2;
      let obj = {
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[6]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_4(GenericHeaderTitle, obj);
        },
        headerLeft: obj2.getRenderModalCloseImage(navigation),
        headerTitleAlign: "center"
      };
      navigation = navigation.navigation;
      obj2 = HeaderShared;
      let merged = Object.assign(closure_0);
      return obj;
    },
    children: items1
  };
  items1 = [, , ];
  const obj4 = {
    name: "home",
    component: DevToolsContentDefault,
    options() {
      let obj = {
        headerTitle() {
          let items;
          let obj3;
          const obj = { style: { flexDirection: "row" }, children: items };
          items = [closure_1_4(closure_1_0(closure_1_2[8]).HammerIcon, { size: "sm" }), ];
          const obj2 = { style: obj3, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
          obj3 = { marginLeft: closure_1_1(closure_1_2[10]).space.PX_8 };
          const Text = closure_1_0(closure_1_2[9]).Text;
          items[1] = closure_1_4(Text, obj2);
          return closure_1_5(closure_1_3, obj);
        },
        title: "DevTools"
      };
      return obj;
    }
  };
  items1[0] = tmp5(tmp7.Screen, obj4);
  const obj5 = {};
  let merged = Object.assign(tmp(15134).DevToolsScreens);
  let merged1 = Object.assign(tmp(15134).PerformanceTestingScreens);
  const entries1 = entries(obj5);
  items1[1] = entries1.map((item) => {
    let tmp;
    [tmp, ] = item;
    const obj = {
      name: tmp,
      children: tmp2,
      options() {
        return { title };
      }
    };
    return closure_1_4(Navigator.Screen, obj, tmp);
  });
  let tmpResult = tmp(14251);
  const designSystemScreens = tmpResult.getDesignSystemScreens();
  items1[2] = designSystemScreens.map((item) => {
    let tmp;
    [, tmp] = item;
    let obj = {
      name: tmp.route,
      getComponent: tmp.getComponent,
      options(navigation) {
        let tmpResult;
        navigation = navigation.navigation;
        const obj = closure_0(dependencyMap[5]);
        let str = obj.getCachedSettingTitle(closure_1_0);
        const tmp = closure_0;
        const tmp2 = dependencyMap;
        if (str == null) {
          str = "Design System";
        }
        const obj2 = { title: str, headerLeft: tmpResult.getRenderModalBackImage(navigation) };
        tmpResult = tmp(tmp2[6]);
        return obj2;
      }
    };
    return closure_4(Screen.Screen, obj, tmp.route);
  });
  items[1] = closure_5(Navigator, obj3);
  return closure_5(tmp4, obj2);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const screenKey = obj.screenKey;
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.hideActionSheet();
  const obj3 = ModalActionCreatorsDefault;
  const obj4 = { screenKey };
  const obj5 = { trigger: Types.ModalOpenTrigger.USER_INTERACTION };
  obj3.pushLazy(() => Promise.resolve(closure_1_8), obj4, "DevToolsNavigator", obj5);
};
