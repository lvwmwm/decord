// Module ID: 14889
// Function ID: 14890
// Name: DevToolsNavigator
// Dependencies: [19, 17, 21, 8189, 7277, 14890, 8139, 16060, 9579, 4784, 576, 15861, 14996, 4755, 4991, 4653, 2]
// Exports: navigateToDevTools

// Module 14889 (DevToolsNavigator)
import Types from "Types" /* 4653 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import HeaderShared from "HeaderShared" /* 8139 */;
import SettingHookHarnessDefault from "SettingHookHarness" /* 14890 */;
import DevToolsContentDefault from "DevToolsContent" /* 16060 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const NativeStackNavigator = fn(8189);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
let closure_8 = noop.memo((screenKey) => {
  let str = screenKey.screenKey;
  _require = undefined;
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  let items = [closure_4(SettingHookHarnessDefault, {}), ];
  if (str == null) {
    str = "home";
  }
  let obj2 = { children: null };
  const obj3 = {
    initialRouteName: str,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_4(closure_1_0(closure_1_2[6]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      return obj;
    },
    children: null
  };
  let obj = require("Navigator");
  const tmp4 = closure_6;
  const tmp5 = closure_4;
  const tmp7 = Navigator;
  const items1 = [
    tmp5(tmp7.Screen, {
      name: "home",
      component: DevToolsContentDefault,
      options() {
        return {
          headerTitle() {
            const obj = { style: { flexDirection: "row" }, children: null };
            const items = [closure_1_4(closure_1_0(9579).HammerIcon, { size: "sm" }), ];
            const obj2 = { style: { marginLeft: closure_1_1(576).space.PX_8 }, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
            items[1] = closure_1_4(closure_1_0(4784).Text, obj2);
            obj.children = items;
            return closure_1_5(closure_1_3, obj);
          },
          title: "DevTools"
        };
      }
    }),
  ,

  ];
  let merged = Object.assign(tmp(15861).DevToolsScreens);
  let merged1 = Object.assign(tmp(15861).PerformanceTestingScreens);
  const entries = Object.entries({});
  items1[1] = entries.map((item) => {
    [tmp, ] = item;
    return closure_1_4(Navigator.Screen, {
      name: tmp,
      children: tmp2,
      options() {
        return { title };
      }
    }, tmp);
  });
  const obj4 = {
    name: "home",
    component: DevToolsContentDefault,
    options() {
      return {
        headerTitle() {
          const obj = { style: { flexDirection: "row" }, children: null };
          const items = [closure_1_4(closure_1_0(9579).HammerIcon, { size: "sm" }), ];
          const obj2 = { style: { marginLeft: closure_1_1(576).space.PX_8 }, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
          items[1] = closure_1_4(closure_1_0(4784).Text, obj2);
          obj.children = items;
          return closure_1_5(closure_1_3, obj);
        },
        title: "DevTools"
      };
    }
  };
  const obj5 = {};
  const designSystemScreens = require("SettingRendererUtils").getDesignSystemScreens();
  items1[2] = designSystemScreens.map((item) => {
    [, tmp] = item;
    return closure_4(Screen.Screen, {
      name: tmp.route,
      getComponent: tmp.getComponent,
      options(navigation) {
        let str = closure_0(dependencyMap[5]).getCachedSettingTitle(closure_1_0);
        if (str == null) {
          str = "Design System";
        }
        const obj2 = { title: str, headerLeft: null };
        const obj = closure_0(dependencyMap[5]);
        obj2.headerLeft = closure_0(dependencyMap[6]).getRenderModalBackImage(navigation.navigation);
        return obj2;
      }
    }, tmp.route);
  });
  obj3.children = items1;
  items[1] = closure_5(Navigator.Navigator, obj3);
  obj2.children = items;
  return closure_5(tmp4, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const obj3 = ModalActionCreatorsDefault;
  const obj4 = { screenKey: obj.screenKey };
  obj3.pushLazy(() => Promise.resolve(closure_1_8), obj4, "DevToolsNavigator", { trigger: Types.ModalOpenTrigger.USER_INTERACTION });
};
