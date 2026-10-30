// Module ID: 18778
// Function ID: 18779
// Name: FriendsNavigator
// Dependencies: [19, 17, 21, 9835, 5009, 575, 9794, 9791, 14121, 1114, 7647, 7163, 18779, 18785, 18788, 18789, 18790, 18801, 18802, 18803, 18805, 18808, 18809, 5189, 1626, 7106, 4966, 5075, 2]
// Exports: default

// Module 18778 (FriendsNavigator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import DeviceUtils from "DeviceUtils" /* 4966 */;
import native from "native" /* 5075 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5189 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7106 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9794 */;
import AssetRegistryDefault from "AssetRegistry" /* 14121 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9835 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function RequestsSettingsModalButton(onPress) {
  let HeaderIconButton;
  let intl;
  let obj2;
  onPress = onPress.onPress;
  const obj = { isModal: true, children: hasOwnProperty(HeaderIconButton, obj2) };
  obj2 = { source: AssetRegistryDefault, onPress, accessibilityLabel: intl.string(intl10.t["3D5yo/"]) };
  const tmp = PressableNavigatorButtonWrapperDefault;
  HeaderIconButton = HeaderShared.HeaderIconButton;
  intl = intl10.intl;
  return hasOwnProperty(tmp, obj);
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
  _require = closure_8();
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[10]);
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
          const GenericHeaderTitle = closure_1_0(closure_1_2[7]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_5(GenericHeaderTitle, obj);
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
        title: intl.string(navigation(closure_2[9]).t.TdEu5X),
        headerRight(arg0) {
          let intl;
          const obj = {
            label: intl.string(navigation(dependencyMap[9]).t.zIJnA6),
            onPress() {
              return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
            }
          };
          const HeaderTextButton = navigation(dependencyMap[7]).HeaderTextButton;
          const merged = Object.assign(arg0);
          intl = navigation(dependencyMap[9]).intl;
          return closure_2_5(HeaderTextButton, obj);
        }
      };
      intl = navigation(closure_2[9]).intl;
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[12]).default;
    }
  };
  const Navigator = closure_7.Navigator;
  items = [closure_5(closure_7.Screen, obj3), , , , , , , , , , ];
  const obj4 = {
    name: "new-message",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[13]).default;
    }
  };
  const Screen = closure_7.Screen;
  obj5 = { title: intl.string(require("intl").t.jD1qzM) };
  intl = require("intl").intl;
  items[1] = closure_5(Screen, obj4);
  const obj6 = {
    name: "gdm",
    options: obj7,
    getComponent() {
      return closure_0(dependencyMap[14]).default;
    }
  };
  const Screen2 = closure_7.Screen;
  obj7 = { title: intl2.string(require("intl").t["3hF1W4"]) };
  intl2 = require("intl").intl;
  items[2] = closure_5(Screen2, obj6);
  const obj8 = {
    name: "add-friend",
    options: obj9,
    getComponent() {
      return closure_0(dependencyMap[15]).default;
    }
  };
  const Screen3 = closure_7.Screen;
  obj9 = { title: intl3.string(require("intl").t.w5uwoI) };
  intl3 = require("intl").intl;
  items[3] = closure_5(Screen3, obj8);
  const obj10 = {
    name: "add-friends",
    options: obj11,
    getComponent() {
      return closure_0(dependencyMap[16]).default;
    }
  };
  const Screen4 = closure_7.Screen;
  obj11 = { title: intl4.string(require("intl").t.zIJnA6) };
  intl4 = require("intl").intl;
  items[4] = closure_5(Screen4, obj10);
  const obj12 = {
    name: "username-search",
    options: obj13,
    getComponent() {
      return closure_0(dependencyMap[17]).default;
    }
  };
  const Screen5 = closure_7.Screen;
  obj13 = { title: intl5.string(require("intl").t.QzVsOs) };
  intl5 = require("intl").intl;
  items[5] = closure_5(Screen5, obj12);
  const obj14 = {
    name: "suggested-friends",
    options: obj15,
    getComponent() {
      return closure_0(dependencyMap[18]).default;
    }
  };
  const Screen6 = closure_7.Screen;
  obj15 = { title: intl6.string(require("intl").t["1uAmCw"]) };
  intl6 = require("intl").intl;
  items[6] = closure_5(Screen6, obj14);
  const obj16 = {
    name: "requests-settings",
    options: obj17,
    getComponent() {
      return closure_0(dependencyMap[19]).default;
    }
  };
  const Screen7 = closure_7.Screen;
  obj17 = { title: intl7.string(require("intl").t.XT4hVl) };
  intl7 = require("intl").intl;
  items[7] = closure_5(Screen7, obj16);
  const obj18 = {
    name: "requests",
    options(navigation) {
      let intl;
      navigation = navigation.navigation;
      let obj = {
        title: intl.string(navigation(closure_2[9]).t.fyA115),
        headerRight() {
          const obj = {
            onPress() {
              return navigation.navigate("requests-settings");
            }
          };
          return closure_2_5(RequestsSettingsModalButton, obj);
        }
      };
      intl = navigation(closure_2[9]).intl;
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[20]).default;
    }
  };
  items[8] = closure_5(closure_7.Screen, obj18);
  const obj19 = {
    name: "spam-requests",
    options: obj20,
    getComponent() {
      return closure_0(dependencyMap[21]).default;
    }
  };
  const Screen8 = closure_7.Screen;
  obj20 = { title: intl8.string(require("intl").t.oHVeHc) };
  intl8 = require("intl").intl;
  items[9] = closure_5(Screen8, obj19);
  const obj21 = {
    name: "ignored-user-requests",
    options: obj22,
    getComponent() {
      return closure_0(dependencyMap[22]).default;
    }
  };
  const Screen9 = closure_7.Screen;
  obj22 = { title: intl9.string(require("intl").t.tFY5Zb) };
  intl9 = require("intl").intl;
  items[10] = closure_5(Screen9, obj21);
  return closure_6(Navigator, obj2);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator(route) {
  let left;
  let obj4;
  let right;
  let tmp9;
  route = route.route;
  const tmp2 = useColorThemeBackgroundDefault();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const params = route.params;
  let str;
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
  const obj2 = { gradient: tmp2, children: hasOwnProperty(tmp9, obj4) };
  const items = [closure_8().container, ];
  let tmp10 = !isIpadOSResult;
  closure_8();
  const ThemeContextProvider = native.ThemeContextProvider;
  tmp9 = View;
  if (!isIpadOSResult) {
    tmp10 = { paddingLeft: left, paddingRight: right };
    const obj3 = { paddingLeft: left, paddingRight: right };
  }
  items[1] = tmp10;
  obj4 = { style: items, children: hasOwnProperty(FriendsNavigator, {}) };
  return hasOwnProperty(ThemeContextProvider, obj2);
};
