// Module ID: 19225
// Function ID: 19226
// Name: FriendsNavigator
// Dependencies: [19, 21, 10009, 5170, 575, 9938, 9935, 14446, 1113, 7763, 7264, 19226, 19232, 19235, 19236, 19237, 19248, 19249, 19250, 19252, 19255, 19256, 5342, 7216, 5127, 5231, 19257, 2]
// Exports: default

// Module 19225 (FriendsNavigator)
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import DeviceUtils from "DeviceUtils" /* 5127 */;
import native from "native" /* 5231 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5342 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7216 */;
import HeaderShared from "HeaderShared" /* 9935 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9938 */;
import AssetRegistryDefault from "AssetRegistry" /* 14446 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 10009 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp;
const AppFrameContainerDefault = tmp(19257);
function RequestsSettingsModalButton(onPress) {
  let HeaderIconButton;
  let intl;
  let obj2;
  onPress = onPress.onPress;
  const obj = { isModal: true, children: React3(HeaderIconButton, obj2) };
  obj2 = { source: AssetRegistryDefault, onPress, accessibilityLabel: intl.string(intl10.t["3D5yo/"]) };
  const tmp = PressableNavigatorButtonWrapperDefault;
  HeaderIconButton = HeaderShared.HeaderIconButton;
  intl = intl10.intl;
  return React3(tmp, obj);
}
function FriendsNavigator() {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj20;
  let obj22;
  let obj5;
  let obj7;
  let obj9;
  _require = closure_7();
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[9]);
    return obj.trackAppUIViewed();
  }, []);
  let obj = require("Navigator");
  let closure_1 = obj.useAccessibilityNativeStackOptions();
  let obj2 = {
    screenOptions(arg0) {
      let presentation;
      let route;
      ({ navigation, route } = arg0);
      const params = route.params;
      if (params != null) {
        presentation = params.presentation;
      }
      let obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[6]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_4(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: null,
        fullScreenGestureEnabled: null
      };
      if (navigation.getState().routes[0].key === route.key) {
        let renderModalCloseImage;
        const params2 = route.params;
        let presentation1;
        if (params2 != null) {
          presentation1 = params2.presentation;
        }
        if ("card" !== presentation1) {
          const obj3 = HeaderShared;
          renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
        }
        obj.headerLeft = renderModalCloseImage;
        const params3 = route.params;
        let presentation2;
        if (params3 != null) {
          presentation2 = params3.presentation;
        }
        obj.fullScreenGestureEnabled = "card" === presentation2 || "card" === presentation;
        let merged = Object.assign(closure_1);
        return obj;
      }
      const obj2 = HeaderShared;
      renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
    },
    children: items
  };
  let obj3 = {
    name: "root",
    options(navigation) {
      let intl;
      navigation = navigation.navigation;
      let obj = {
        title: intl.string(navigation(closure_2[8]).t.TdEu5X),
        headerRight(arg0) {
          let intl;
          const obj = {
            label: intl.string(navigation(dependencyMap[8]).t.zIJnA6),
            onPress() {
              return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
            }
          };
          const HeaderTextButton = navigation(dependencyMap[6]).HeaderTextButton;
          const merged = Object.assign(arg0);
          intl = navigation(dependencyMap[8]).intl;
          return closure_2_4(HeaderTextButton, obj);
        }
      };
      intl = navigation(closure_2[8]).intl;
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[11]).default;
    }
  };
  const Navigator = closure_6.Navigator;
  items = [closure_4(closure_6.Screen, obj3), , , , , , , , , , ];
  const obj4 = {
    name: "new-message",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[12]).default;
    }
  };
  const Screen = closure_6.Screen;
  obj5 = { title: intl.string(require("intl").t.jD1qzM) };
  intl = require("intl").intl;
  items[1] = closure_4(Screen, obj4);
  const obj6 = {
    name: "gdm",
    options: obj7,
    getComponent() {
      return closure_0(dependencyMap[13]).default;
    }
  };
  const Screen2 = closure_6.Screen;
  obj7 = { title: intl2.string(require("intl").t["3hF1W4"]) };
  intl2 = require("intl").intl;
  items[2] = closure_4(Screen2, obj6);
  const obj8 = {
    name: "add-friend",
    options: obj9,
    getComponent() {
      return closure_0(dependencyMap[14]).default;
    }
  };
  const Screen3 = closure_6.Screen;
  obj9 = { title: intl3.string(require("intl").t.w5uwoI) };
  intl3 = require("intl").intl;
  items[3] = closure_4(Screen3, obj8);
  const obj10 = {
    name: "add-friends",
    options: obj11,
    getComponent() {
      return closure_0(dependencyMap[15]).default;
    }
  };
  const Screen4 = closure_6.Screen;
  obj11 = { title: intl4.string(require("intl").t.zIJnA6) };
  intl4 = require("intl").intl;
  items[4] = closure_4(Screen4, obj10);
  const obj12 = {
    name: "username-search",
    options: obj13,
    getComponent() {
      return closure_0(dependencyMap[16]).default;
    }
  };
  const Screen5 = closure_6.Screen;
  obj13 = { title: intl5.string(require("intl").t.QzVsOs) };
  intl5 = require("intl").intl;
  items[5] = closure_4(Screen5, obj12);
  const obj14 = {
    name: "suggested-friends",
    options: obj15,
    getComponent() {
      return closure_0(dependencyMap[17]).default;
    }
  };
  const Screen6 = closure_6.Screen;
  obj15 = { title: intl6.string(require("intl").t["1uAmCw"]) };
  intl6 = require("intl").intl;
  items[6] = closure_4(Screen6, obj14);
  const obj16 = {
    name: "requests-settings",
    options: obj17,
    getComponent() {
      return closure_0(dependencyMap[18]).default;
    }
  };
  const Screen7 = closure_6.Screen;
  obj17 = { title: intl7.string(require("intl").t.XT4hVl) };
  intl7 = require("intl").intl;
  items[7] = closure_4(Screen7, obj16);
  const obj18 = {
    name: "requests",
    options(navigation) {
      let intl;
      navigation = navigation.navigation;
      let obj = {
        title: intl.string(navigation(closure_2[8]).t.fyA115),
        headerRight() {
          const obj = {
            onPress() {
              return navigation.navigate("requests-settings");
            }
          };
          return closure_2_4(RequestsSettingsModalButton, obj);
        }
      };
      intl = navigation(closure_2[8]).intl;
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[19]).default;
    }
  };
  items[8] = closure_4(closure_6.Screen, obj18);
  const obj19 = {
    name: "spam-requests",
    options: obj20,
    getComponent() {
      return closure_0(dependencyMap[20]).default;
    }
  };
  const Screen8 = closure_6.Screen;
  obj20 = { title: intl8.string(require("intl").t.oHVeHc) };
  intl8 = require("intl").intl;
  items[9] = closure_4(Screen8, obj19);
  const obj21 = {
    name: "ignored-user-requests",
    options: obj22,
    getComponent() {
      return closure_0(dependencyMap[21]).default;
    }
  };
  const Screen9 = closure_6.Screen;
  obj22 = { title: intl9.string(require("intl").t.tFY5Zb) };
  intl9 = require("intl").intl;
  items[10] = closure_4(Screen9, obj21);
  return closure_5(Navigator, obj2);
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator(route) {
  let obj3;
  let tmpResult;
  route = route.route;
  const params = route.params;
  let str;
  const tmp3 = useColorThemeBackgroundDefault();
  const tmp4 = useIsWindowLargeDefault();
  if (params != null) {
    const params2 = params.params;
    if (params2 != null) {
      str = params2.presentation;
    }
  }
  if (str == null) {
    str = "modal";
  }
  let isIpadOSResult = tmp4;
  if (isIpadOSResult) {
    const obj = DeviceUtils;
    isIpadOSResult = obj.isIpadOS();
  }
  if (isIpadOSResult) {
    isIpadOSResult = "modal" === str;
  }
  const obj2 = { gradient: tmp3, children: React3(tmpResult, obj3) };
  const ThemeContextProvider = native.ThemeContextProvider;
  obj3 = { ignoreHorizontalSafeArea: isIpadOSResult, children: React3(FriendsNavigator, {}) };
  tmpResult = AppFrameContainerDefault;
  return React3(ThemeContextProvider, obj2);
};
