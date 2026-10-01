// Module ID: 16696
// Function ID: 16697
// Name: MessageRequestsNavigator
// Dependencies: [19, 17, 21, 7339, 4836, 576, 6421, 6895, 1613, 7288, 1115, 10386, 16697, 16716, 16717, 2]
// Exports: default

// Module 16696 (MessageRequestsNavigator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10386 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  let Navigator;
  let Screen;
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  const tmp = closure_8();
  _require = tmp;
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[7]);
    return obj.trackAppUIViewed();
  }, []);
  const rect = useSafeAreaInsetsDefault();
  let obj2 = { style: items, children: closure_6(Navigator, obj3) };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj3 = {
    screenOptions(navigation) {
      let obj2;
      let obj = {
        headerStyle: closure_0.header,
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
        headerLeft: obj2.getRenderModalCloseImage(navigation)
      };
      navigation = navigation.navigation;
      obj2 = HeaderShared;
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: items1
  };
  const obj4 = {
    name: "root",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[12]).default;
    }
  };
  ({ Navigator, Screen } = closure_7);
  obj5 = { title: intl.string(require("intl").t.e7GWjQ) };
  intl = require("intl").intl;
  let merged = Object.assign(getNavigationModalPresentationDefault());
  items1 = [closure_5(Screen, obj4), , ];
  const obj6 = {
    name: "spam",
    options: obj7,
    getComponent() {
      return closure_0(dependencyMap[13]).default;
    }
  };
  const Screen2 = closure_7.Screen;
  obj7 = { title: intl2.string(require("intl").t.ulKXHp) };
  intl2 = require("intl").intl;
  let merged1 = Object.assign(getNavigationModalPresentationDefault());
  items1[1] = closure_5(Screen2, obj6);
  const obj8 = {
    name: "preview",
    options: obj9,
    getComponent() {
      return closure_0(dependencyMap[14]).default;
    }
  };
  const Screen3 = closure_7.Screen;
  obj9 = { title: intl3.string(require("intl").t.iilwGH) };
  intl3 = require("intl").intl;
  const merged2 = Object.assign(getNavigationModalPresentationDefault());
  items1[2] = closure_5(Screen3, obj8);
  return closure_5(View, obj2);
};
