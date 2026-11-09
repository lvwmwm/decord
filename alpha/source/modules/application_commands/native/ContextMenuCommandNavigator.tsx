// Module ID: 19326
// Function ID: 19327
// Name: ContextMenuCommandNavigator
// Dependencies: [19, 21, 9976, 5140, 575, 7730, 7231, 19219, 9902, 1113, 19327, 19329, 2]
// Exports: default

// Module 19326 (ContextMenuCommandNavigator)
import nativeDefault from "native" /* 575 */;
import HeaderShared from "HeaderShared" /* 9902 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 19219 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9976 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const Screen = NativeStackView.createNativeStackNavigator();
let obj = { content: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  let Navigator;
  let closure_0;
  let closure_1;
  let intl;
  let items;
  let obj3;
  let obj5;
  _require = closure_7();
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[5]);
    return obj.trackAppUIViewed();
  }, []);
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  let obj2 = { children: closure_5(Navigator, obj3) };
  obj3 = {
    screenOptions(navigation) {
      let renderModalCloseImage;
      navigation = navigation.navigation;
      let obj = {
        contentStyle: closure_0.content,
        headerShadowVisible: false,
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[8]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_4(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: renderModalCloseImage
      };
      if (navigation.getState().routes[0].key === navigation.route.key) {
        const obj3 = HeaderShared;
        renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
      } else {
        const obj2 = HeaderShared;
        renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
      }
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: items
  };
  const obj4 = {
    name: "root",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[10]).default;
    }
  };
  obj5 = { title: intl.string(require("intl").t.PHjkRE) };
  ({ Navigator, Screen } = Screen);
  const tmp2 = AppFrameContainerDefault;
  intl = require("intl").intl;
  items = [closure_4(Screen, obj4), ];
  const obj6 = {
    name: "app",
    options(route) {
      const section = route.route.params.section;
      let title;
      if (section != null) {
        title = section.name;
      }
      return { title };
    },
    getComponent() {
      return closure_0(dependencyMap[11]).default;
    }
  };
  items[1] = closure_4(Screen.Screen, obj6);
  return closure_4(tmp2, obj2);
};
