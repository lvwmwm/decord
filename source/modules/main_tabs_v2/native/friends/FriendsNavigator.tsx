// Module ID: 15480
// Function ID: 118968
// Name: RequestsSettingsModalButton
// Dependencies: [31, 27, 33, 9149, 4130, 689, 9161, 9158, 11657, 1212, 15481, 6707, 5517, 15482, 15488, 15500, 15501, 15502, 15508, 15509, 15510, 15512, 15515, 15516, 3977, 1557, 3842, 2]
// Exports: default

// Module 15480 (RequestsSettingsModalButton)
import result from "result";
import { View } from "set";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function RequestsSettingsModalButton(onPress) {
  let obj = { isModal: true };
  obj = { source: importDefault(11657), onPress: onPress.onPress };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["3D5yo/"]);
  obj.children = callback(require(9158) /* GenericHeaderTitle */.HeaderIconButton, obj);
  return callback(importDefault(9161), obj);
}
function FriendsNavigator() {
  const _require = createNativeStackNavigator();
  importDefault = importDefault(15481)();
  const layoutEffect = React.useLayoutEffect(() => lib(6707).trackAppUIViewed(), []);
  let obj = _require(5517);
  const dependencyMap = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(arg0) {
      let navigation;
      let route;
      ({ navigation, route } = arg0);
      const params = route.params;
      let presentation;
      if (null != params) {
        presentation = params.presentation;
      }
      let obj = {};
      let merged = Object.assign(contentStyle);
      const params2 = route.params;
      let presentation1;
      if (null != params2) {
        presentation1 = params2.presentation;
      }
      contentStyle = null;
      if ("card" !== presentation1) {
        contentStyle = null;
        if (!tmp2) {
          contentStyle = contentStyle.contentStyle;
        }
      }
      obj["contentStyle"] = contentStyle;
      obj["headerStyle"] = lib.header;
      obj["headerShadowVisible"] = false;
      obj["headerTitle"] = function headerTitle(children) {
        let obj = Object.create(null);
        obj.children = 0;
        const merged = Object.assign(children, obj);
        obj = { title: children.children };
        const merged1 = Object.assign(merged);
        return outer2_5(callback(table[7]).GenericHeaderTitle, obj);
      };
      obj["headerTitleAlign"] = "center";
      if (navigation.getState().routes[0].key === route.key) {
        const params3 = route.params;
        let presentation2;
        if (null != params3) {
          presentation2 = params3.presentation;
        }
        if ("card" !== presentation2) {
          let renderModalCloseImage = lib(9158).getRenderModalCloseImage(navigation);
          const obj3 = lib(9158);
        }
        obj["headerLeft"] = renderModalCloseImage;
        const params4 = route.params;
        let presentation3;
        if (null != params4) {
          presentation3 = params4.presentation;
        }
        obj["fullScreenGestureEnabled"] = "card" === presentation3 || tmp2;
        let merged1 = Object.assign(dependencyMap);
        return obj;
      }
      renderModalCloseImage = lib(9158).getRenderModalBackImage(navigation);
    }
  };
  obj = {
    name: "root",
    options(navigation) {
      navigation = navigation.navigation;
      let obj = {};
      let intl = lib(1212).intl;
      obj.title = intl.string(lib(1212).t.TdEu5X);
      obj.headerRight = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = navigation(1212).intl;
        obj["label"] = intl.string(navigation(1212).t.zIJnA6);
        obj["onPress"] = function onPress() {
          return outer1_0.navigate("add-friends", { sourcePage: "Friends Screen Header" });
        };
        return outer2_5(navigation(9158).HeaderTextButton, obj);
      };
      return obj;
    },
    getComponent() {
      return lib(15482).default;
    }
  };
  const items = [callback(createNativeStackNavigator.Screen, obj), , , , , , , , , , ];
  const obj1 = { name: "new-message" };
  const obj2 = {};
  let intl = _require(1212).intl;
  obj2.title = intl.string(_require(1212).t.jD1qzM);
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return lib(15488).default;
  };
  items[1] = callback(createNativeStackNavigator.Screen, obj1);
  let obj3 = { name: "gdm" };
  const obj4 = {};
  const intl2 = _require(1212).intl;
  obj4.title = intl2.string(_require(1212).t["3hF1W4"]);
  obj3.options = obj4;
  obj3.getComponent = function getComponent() {
    return lib(15500).default;
  };
  items[2] = callback(createNativeStackNavigator.Screen, obj3);
  const obj5 = { name: "add-friend" };
  const obj6 = {};
  const intl3 = _require(1212).intl;
  obj6.title = intl3.string(_require(1212).t.w5uwoI);
  obj5.options = obj6;
  obj5.getComponent = function getComponent() {
    return lib(15501).default;
  };
  items[3] = callback(createNativeStackNavigator.Screen, obj5);
  const obj7 = { name: "add-friends" };
  const obj8 = {};
  const intl4 = _require(1212).intl;
  obj8.title = intl4.string(_require(1212).t.zIJnA6);
  obj7.options = obj8;
  obj7.getComponent = function getComponent() {
    return lib(15502).default;
  };
  items[4] = callback(createNativeStackNavigator.Screen, obj7);
  const obj9 = { name: "username-search" };
  const obj10 = {};
  const intl5 = _require(1212).intl;
  obj10.title = intl5.string(_require(1212).t.QzVsOs);
  obj9.options = obj10;
  obj9.getComponent = function getComponent() {
    return lib(15508).default;
  };
  items[5] = callback(createNativeStackNavigator.Screen, obj9);
  const obj11 = { name: "suggested-friends" };
  const obj12 = {};
  const intl6 = _require(1212).intl;
  obj12.title = intl6.string(_require(1212).t["1uAmCw"]);
  obj11.options = obj12;
  obj11.getComponent = function getComponent() {
    return lib(15509).default;
  };
  items[6] = callback(createNativeStackNavigator.Screen, obj11);
  const obj13 = { name: "requests-settings" };
  const obj14 = {};
  const intl7 = _require(1212).intl;
  obj14.title = intl7.string(_require(1212).t.XT4hVl);
  obj13.options = obj14;
  obj13.getComponent = function getComponent() {
    return lib(15510).default;
  };
  items[7] = callback(createNativeStackNavigator.Screen, obj13);
  items[8] = callback(createNativeStackNavigator.Screen, {
    name: "requests",
    options(navigation) {
      navigation = navigation.navigation;
      const obj = {};
      const intl = lib(1212).intl;
      obj.title = intl.string(lib(1212).t.fyA115);
      obj.headerRight = function headerRight() {
        return outer2_5(outer2_9, {
          onPress() {
            return outer1_0.navigate("requests-settings");
          }
        });
      };
      return obj;
    },
    getComponent() {
      return lib(15512).default;
    }
  });
  const obj16 = { name: "spam-requests" };
  const obj17 = {};
  const intl8 = _require(1212).intl;
  obj17.title = intl8.string(_require(1212).t.oHVeHc);
  obj16.options = obj17;
  obj16.getComponent = function getComponent() {
    return lib(15515).default;
  };
  items[9] = callback(createNativeStackNavigator.Screen, obj16);
  const obj18 = { name: "ignored-user-requests" };
  const obj19 = {};
  const intl9 = _require(1212).intl;
  obj19.title = intl9.string(_require(1212).t.tFY5Zb);
  obj18.options = obj19;
  obj18.getComponent = function getComponent() {
    return lib(15516).default;
  };
  items[10] = callback(createNativeStackNavigator.Screen, obj18);
  obj.children = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = {};
createNativeStackNavigator = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
createNativeStackNavigator.container = createNativeStackNavigator;
_createForOfIteratorHelperLoose = { borderBottomWidth: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, shadowColor: "transparent" };
createNativeStackNavigator.header = _createForOfIteratorHelperLoose;
createNativeStackNavigator = _createForOfIteratorHelperLoose.createStyles(createNativeStackNavigator);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator() {
  let left;
  let right;
  const tmp = importDefault(3977)();
  ({ left, right } = importDefault(1557)());
  const tmp2 = importDefault(1557)();
  let obj = { gradient: tmp };
  obj = { style: items };
  items = [createNativeStackNavigator().container, { paddingLeft: left, paddingRight: right }];
  obj.children = callback(FriendsNavigator, {});
  obj.children = callback(View, obj);
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
};
