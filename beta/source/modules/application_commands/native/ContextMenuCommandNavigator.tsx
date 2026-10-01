// Module ID: 16690
// Function ID: 16691
// Name: ContextMenuCommandNavigator
// Dependencies: [19, 17, 21, 7339, 4836, 576, 6895, 6421, 1613, 7288, 1115, 16691, 16693, 2]
// Exports: default

// Module 16690 (ContextMenuCommandNavigator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const Screen = NativeStackView.createNativeStackNavigator();
let obj = { container: { flex: 1 }, content: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  let Navigator;
  let closure_0;
  let closure_1;
  let intl;
  let items;
  let items1;
  let obj3;
  let obj5;
  const tmp = closure_8();
  _require = tmp;
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[6]);
    return obj.trackAppUIViewed();
  }, []);
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  const rect = useSafeAreaInsetsDefault();
  let obj2 = { style: items, children: closure_6(Navigator, obj3) };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
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
          const GenericHeaderTitle = closure_1_0(closure_1_2[9]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_5(GenericHeaderTitle, obj);
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
    children: items1
  };
  const obj4 = {
    name: "root",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[11]).default;
    }
  };
  ({ Navigator, Screen } = Screen);
  obj5 = { title: intl.string(require("intl").t.PHjkRE) };
  intl = require("intl").intl;
  items1 = [closure_5(Screen, obj4), ];
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
      return closure_0(dependencyMap[12]).default;
    }
  };
  items1[1] = closure_5(Screen.Screen, obj6);
  return closure_5(View, obj2);
};
