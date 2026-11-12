// Module ID: 19547
// Function ID: 19548
// Name: MessageRequestsNavigator
// Dependencies: [19, 21, 9061, 5243, 575, 7424, 8611, 19430, 8984, 1113, 10839, 19548, 19567, 19568, 2]
// Exports: default

// Module 19547 (MessageRequestsNavigator)
import nativeDefault from "native" /* 575 */;
import HeaderShared from "HeaderShared" /* 8984 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10839 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 19430 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9061 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_7 = createStyles.createStyles(obj);
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
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  _require = closure_7();
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[6]);
    return obj.trackAppUIViewed();
  }, []);
  let obj2 = { children: closure_5(Navigator, obj3) };
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
          const GenericHeaderTitle = closure_1_0(closure_1_2[8]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_4(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: obj2.getRenderModalCloseImage(navigation)
      };
      navigation = navigation.navigation;
      obj2 = HeaderShared;
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: items
  };
  const obj4 = {
    name: "root",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[11]).default;
    }
  };
  ({ Navigator, Screen } = closure_6);
  obj5 = { title: intl.string(require("intl").t.e7GWjQ) };
  const tmp2 = AppFrameContainerDefault;
  intl = require("intl").intl;
  let merged = Object.assign(getNavigationModalPresentationDefault());
  items = [closure_4(Screen, obj4), , ];
  const obj6 = {
    name: "spam",
    options: obj7,
    getComponent() {
      return closure_0(dependencyMap[12]).default;
    }
  };
  const Screen2 = closure_6.Screen;
  obj7 = { title: intl2.string(require("intl").t.ulKXHp) };
  intl2 = require("intl").intl;
  let merged1 = Object.assign(getNavigationModalPresentationDefault());
  items[1] = closure_4(Screen2, obj6);
  const obj8 = {
    name: "preview",
    options: obj9,
    getComponent() {
      return closure_0(dependencyMap[13]).default;
    }
  };
  const Screen3 = closure_6.Screen;
  obj9 = { title: intl3.string(require("intl").t.iilwGH) };
  intl3 = require("intl").intl;
  const merged2 = Object.assign(getNavigationModalPresentationDefault());
  items[2] = closure_4(Screen3, obj8);
  return closure_4(tmp2, obj2);
};
