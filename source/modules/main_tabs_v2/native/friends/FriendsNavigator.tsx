// Module ID: 15570
// Function ID: 15571
// Name: RequestsSettingsModalButton
// Dependencies: [19, 17, 21, 9105, 4189, 712, 9117, 9114, 11686, 1236, 15571, 5731, 5570, 15572, 15578, 15590, 15591, 15592, 15598, 15599, 15600, 15602, 15605, 15606, 4036, 1581, 3901, 2]
// Exports: default

// Module 15570 (RequestsSettingsModalButton)
import SuggestedFriendsScreen from "SuggestedFriendsScreen";
import { View } from "handleFindFriends";
import jsxProd from "compareUserItems";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function RequestsSettingsModalButton(onPress) {
  let obj = { isModal: true, children: null };
  obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = importDefault(11686);
  obj[1] = onPress.onPress;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["3D5yo/"]);
  obj[1] = callback(require(9114) /* GenericHeaderTitle */.HeaderIconButton, obj);
  return callback(importDefault(9117), obj);
}
function FriendsNavigator() {
  const _require = createNativeStackNavigator();
  importDefault = importDefault(15571)();
  const layoutEffect = React.useLayoutEffect(() => lib(5731).trackAppUIViewed(), []);
  let obj = _require(5570);
  const dependencyMap = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(arg0) {
      let navigation;
      let route;
      ({ navigation, route } = arg0);
      const params = route.params;
      let presentation;
      if (params != null) {
        presentation = params.presentation;
      }
      const obj = {};
      let merged = Object.assign(closure_1);
      const params2 = route.params;
      let presentation1;
      if (params2 != null) {
        presentation1 = params2.presentation;
      }
      let contentStyle = null;
      if ("card" !== presentation1) {
        contentStyle = null;
        if (!tmp5) {
          contentStyle = closure_1.contentStyle;
        }
      }
      obj.contentStyle = contentStyle;
      obj.headerStyle = lib.header;
      obj.headerShadowVisible = false;
      obj.headerTitle = function headerTitle(children) {
        const merged = Object.assign(children, Object.create(null));
        const merged1 = Object.assign(merged);
        return callback2(callback(table[7]).GenericHeaderTitle, { title: children.children });
      };
      obj.headerTitleAlign = "center";
      if (navigation.getState().routes[0].key === route.key) {
        const params3 = route.params;
        let presentation2;
        if (params3 != null) {
          presentation2 = params3.presentation;
        }
        if ("card" !== presentation2) {
          let renderModalCloseImage = lib(9114).getRenderModalCloseImage(navigation);
          const obj3 = lib(9114);
        }
        obj.headerLeft = renderModalCloseImage;
        const params4 = route.params;
        let presentation3;
        if (params4 != null) {
          presentation3 = params4.presentation;
        }
        obj.fullScreenGestureEnabled = "card" === presentation3 || tmp5;
        let merged1 = Object.assign(dependencyMap);
        return obj;
      }
      renderModalCloseImage = lib(9114).getRenderModalBackImage(navigation);
    },
    children: null
  };
  obj = {
    name: "root",
    options(navigation) {
      navigation = navigation.navigation;
      let obj = { title: null, headerRight: null };
      let intl = navigation(1236).intl;
      obj[0] = intl.string(navigation(1236).t.TdEu5X);
      obj[1] = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = navigation(outer1_2[9]).intl;
        obj.label = intl.string(navigation(outer1_2[9]).t.zIJnA6);
        obj.onPress = function onPress() {
          return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
        };
        return outer1_5(navigation(outer1_2[7]).HeaderTextButton, obj);
      };
      return obj;
    },
    getComponent() {
      return lib(15572).default;
    }
  };
  const items = [callback(createNativeStackNavigator.Screen, obj), , , , , , , , , , ];
  const obj1 = { name: "new-message", options: null, getComponent: null };
  const obj2 = { title: null };
  let intl = _require(1236).intl;
  obj2[0] = intl.string(_require(1236).t.jD1qzM);
  obj1[1] = obj2;
  obj1[2] = function getComponent() {
    return lib(15578).default;
  };
  items[1] = callback(createNativeStackNavigator.Screen, obj1);
  let obj3 = { name: "gdm", options: null, getComponent: null };
  const obj4 = { title: null };
  const intl2 = _require(1236).intl;
  obj4[0] = intl2.string(_require(1236).t["3hF1W4"]);
  obj3[1] = obj4;
  obj3[2] = function getComponent() {
    return lib(15590).default;
  };
  items[2] = callback(createNativeStackNavigator.Screen, obj3);
  const obj5 = { name: "add-friend", options: null, getComponent: null };
  const obj6 = { title: null };
  const intl3 = _require(1236).intl;
  obj6[0] = intl3.string(_require(1236).t.w5uwoI);
  obj5[1] = obj6;
  obj5[2] = function getComponent() {
    return lib(15591).default;
  };
  items[3] = callback(createNativeStackNavigator.Screen, obj5);
  const obj7 = { name: "add-friends", options: null, getComponent: null };
  const obj8 = { title: null };
  const intl4 = _require(1236).intl;
  obj8[0] = intl4.string(_require(1236).t.zIJnA6);
  obj7[1] = obj8;
  obj7[2] = function getComponent() {
    return lib(15592).default;
  };
  items[4] = callback(createNativeStackNavigator.Screen, obj7);
  const obj9 = { name: "username-search", options: null, getComponent: null };
  const obj10 = { title: null };
  const intl5 = _require(1236).intl;
  obj10[0] = intl5.string(_require(1236).t.QzVsOs);
  obj9[1] = obj10;
  obj9[2] = function getComponent() {
    return lib(15598).default;
  };
  items[5] = callback(createNativeStackNavigator.Screen, obj9);
  const obj11 = { name: "suggested-friends", options: null, getComponent: null };
  const obj12 = { title: null };
  const intl6 = _require(1236).intl;
  obj12[0] = intl6.string(_require(1236).t["1uAmCw"]);
  obj11[1] = obj12;
  obj11[2] = function getComponent() {
    return lib(15599).default;
  };
  items[6] = callback(createNativeStackNavigator.Screen, obj11);
  const obj13 = { name: "requests-settings", options: null, getComponent: null };
  const obj14 = { title: null };
  const intl7 = _require(1236).intl;
  obj14[0] = intl7.string(_require(1236).t.XT4hVl);
  obj13[1] = obj14;
  obj13[2] = function getComponent() {
    return lib(15600).default;
  };
  items[7] = callback(createNativeStackNavigator.Screen, obj13);
  items[8] = callback(createNativeStackNavigator.Screen, {
    name: "requests",
    options(navigation) {
      navigation = navigation.navigation;
      const obj = { title: null, headerRight: null };
      const intl = navigation(1236).intl;
      obj[0] = intl.string(navigation(1236).t.fyA115);
      obj[1] = function headerRight() {
        return outer1_5(outer1_9, {
          onPress() {
            return navigation.navigate("requests-settings");
          }
        });
      };
      return obj;
    },
    getComponent() {
      return lib(15602).default;
    }
  });
  const obj16 = { name: "spam-requests", options: null, getComponent: null };
  const obj17 = { title: null };
  const intl8 = _require(1236).intl;
  obj17[0] = intl8.string(_require(1236).t.oHVeHc);
  obj16[1] = obj17;
  obj16[2] = function getComponent() {
    return lib(15605).default;
  };
  items[9] = callback(createNativeStackNavigator.Screen, obj16);
  const obj18 = { name: "ignored-user-requests", options: null, getComponent: null };
  const obj19 = { title: null };
  const intl9 = _require(1236).intl;
  obj19[0] = intl9.string(_require(1236).t.tFY5Zb);
  obj18[1] = obj19;
  obj18[2] = function getComponent() {
    return lib(15606).default;
  };
  items[10] = callback(createNativeStackNavigator.Screen, obj18);
  obj[1] = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { container: null, header: null };
createNativeStackNavigator = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createNativeStackNavigator[0] = createNativeStackNavigator;
createCacheKey = { borderBottomWidth: 0, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
createNativeStackNavigator[1] = createCacheKey;
createNativeStackNavigator = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator() {
  let left;
  let right;
  const tmp = importDefault(4036)();
  ({ left, right } = importDefault(1581)());
  const tmp2 = importDefault(1581)();
  let obj = { gradient: tmp, children: null };
  obj = { style: items, children: null };
  items = [createNativeStackNavigator().container, { paddingLeft: left, paddingRight: right }];
  obj[1] = callback(FriendsNavigator, {});
  obj[1] = callback(View, obj);
  return callback(require(3901) /* ManaContext */.ThemeContextProvider, obj);
};
