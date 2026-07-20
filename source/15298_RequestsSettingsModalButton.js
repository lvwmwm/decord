// Module ID: 15298
// Function ID: 116371
// Name: RequestsSettingsModalButton
// Dependencies: []
// Exports: default

// Module 15298 (RequestsSettingsModalButton)
function RequestsSettingsModalButton(onPress) {
  let obj = { isModal: true };
  obj = { source: importDefault(dependencyMap[8]), onPress: onPress.onPress };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.3D5yo/);
  obj.children = callback2(arg1(dependencyMap[7]).HeaderIconButton, obj);
  return callback2(importDefault(dependencyMap[6]), obj);
}
function FriendsNavigator() {
  const callback = callback4();
  const importDefault = importDefault(closure_2[10])();
  const layoutEffect = React.useLayoutEffect(() => lib(closure_2[11]).trackAppUIViewed(), []);
  let obj = callback(closure_2[12]);
  closure_2 = obj.useAccessibilityNativeStackOptions();
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
      const obj = {};
      const merged = Object.assign(contentStyle);
      const params2 = route.params;
      let presentation1;
      if (null != params2) {
        presentation1 = params2.presentation;
      }
      let contentStyle = null;
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
        return callback2(callback(closure_2[7]).GenericHeaderTitle, obj);
      };
      obj["headerTitleAlign"] = "center";
      if (navigation.getState().routes[0].key === route.key) {
        const params3 = route.params;
        let presentation2;
        if (null != params3) {
          presentation2 = params3.presentation;
        }
        if ("card" !== presentation2) {
          let renderModalCloseImage = lib(closure_2[7]).getRenderModalCloseImage(navigation);
          const obj3 = lib(closure_2[7]);
        }
        obj["headerLeft"] = renderModalCloseImage;
        const params4 = route.params;
        let presentation3;
        if (null != params4) {
          presentation3 = params4.presentation;
        }
        obj["fullScreenGestureEnabled"] = "card" === presentation3 || tmp2;
        const merged1 = Object.assign(closure_2);
        return obj;
      }
      renderModalCloseImage = lib(closure_2[7]).getRenderModalBackImage(navigation);
    }
  };
  obj = {
    name: "root",
    options(navigation) {
      const lib = navigation.navigation;
      const obj = {};
      const intl = lib(closure_2[9]).intl;
      obj.title = intl.string(lib(closure_2[9]).t.TdEu5X);
      obj.headerRight = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = navigation(closure_2[9]).intl;
        obj["label"] = intl.string(navigation(closure_2[9]).t.zIJnA6);
        obj["onPress"] = function onPress() {
          return navigation.navigate("add-friends", { sourcePage: "Friends Screen Header" });
        };
        return callback(navigation(closure_2[7]).HeaderTextButton, obj);
      };
      return obj;
    },
    getComponent() {
      return lib(closure_2[13]).default;
    }
  };
  const items = [callback2(closure_7.Screen, obj), , , , , , , , , , ];
  const obj1 = { name: "new-message" };
  const obj2 = {};
  const intl = callback(closure_2[9]).intl;
  obj2.title = intl.string(callback(closure_2[9]).t.jD1qzM);
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return lib(closure_2[14]).default;
  };
  items[1] = callback2(closure_7.Screen, obj1);
  const obj3 = { name: "gdm" };
  const obj4 = {};
  const intl2 = callback(closure_2[9]).intl;
  obj4.title = intl2.string(callback(closure_2[9]).t.3hF1W4);
  obj3.options = obj4;
  obj3.getComponent = function getComponent() {
    return lib(closure_2[15]).default;
  };
  items[2] = callback2(closure_7.Screen, obj3);
  const obj5 = { name: "add-friend" };
  const obj6 = {};
  const intl3 = callback(closure_2[9]).intl;
  obj6.title = intl3.string(callback(closure_2[9]).t.w5uwoI);
  obj5.options = obj6;
  obj5.getComponent = function getComponent() {
    return lib(closure_2[16]).default;
  };
  items[3] = callback2(closure_7.Screen, obj5);
  const obj7 = { name: "add-friends" };
  const obj8 = {};
  const intl4 = callback(closure_2[9]).intl;
  obj8.title = intl4.string(callback(closure_2[9]).t.zIJnA6);
  obj7.options = obj8;
  obj7.getComponent = function getComponent() {
    return lib(closure_2[17]).default;
  };
  items[4] = callback2(closure_7.Screen, obj7);
  const obj9 = { name: "username-search" };
  const obj10 = {};
  const intl5 = callback(closure_2[9]).intl;
  obj10.title = intl5.string(callback(closure_2[9]).t.QzVsOs);
  obj9.options = obj10;
  obj9.getComponent = function getComponent() {
    return lib(closure_2[18]).default;
  };
  items[5] = callback2(closure_7.Screen, obj9);
  const obj11 = { name: "suggested-friends" };
  const obj12 = {};
  const intl6 = callback(closure_2[9]).intl;
  obj12.title = intl6.string(callback(closure_2[9]).t.1uAmCw);
  obj11.options = obj12;
  obj11.getComponent = function getComponent() {
    return lib(closure_2[19]).default;
  };
  items[6] = callback2(closure_7.Screen, obj11);
  const obj13 = { name: "requests-settings" };
  const obj14 = {};
  const intl7 = callback(closure_2[9]).intl;
  obj14.title = intl7.string(callback(closure_2[9]).t.XT4hVl);
  obj13.options = obj14;
  obj13.getComponent = function getComponent() {
    return lib(closure_2[20]).default;
  };
  items[7] = callback2(closure_7.Screen, obj13);
  items[8] = callback2(closure_7.Screen, {
    name: "requests",
    options(navigation) {
      const lib = navigation.navigation;
      const obj = {};
      const intl = lib(closure_2[9]).intl;
      obj.title = intl.string(lib(closure_2[9]).t.fyA115);
      obj.headerRight = function headerRight() {
        return callback(closure_9, {
          onPress() {
            return navigation.navigate("requests-settings");
          }
        });
      };
      return obj;
    },
    getComponent() {
      return lib(closure_2[21]).default;
    }
  });
  const obj16 = { name: "spam-requests" };
  const obj17 = {};
  const intl8 = callback(closure_2[9]).intl;
  obj17.title = intl8.string(callback(closure_2[9]).t.oHVeHc);
  obj16.options = obj17;
  obj16.getComponent = function getComponent() {
    return lib(closure_2[22]).default;
  };
  items[9] = callback2(closure_7.Screen, obj16);
  const obj18 = { name: "ignored-user-requests" };
  const obj19 = {};
  const intl9 = callback(closure_2[9]).intl;
  obj19.title = intl9.string(callback(closure_2[9]).t.tFY5Zb);
  obj18.options = obj19;
  obj18.getComponent = function getComponent() {
    return lib(closure_2[23]).default;
  };
  items[10] = callback2(closure_7.Screen, obj18);
  obj.children = items;
  return callback3(closure_7.Navigator, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
let closure_7 = obj.createNativeStackNavigator();
let obj1 = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.header = obj1;
let closure_8 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/main_tabs_v2/native/friends/FriendsNavigator.tsx");

export default function ThemedFriendsNavigator() {
  let left;
  let right;
  const tmp = importDefault(dependencyMap[24])();
  ({ left, right } = importDefault(dependencyMap[25])());
  const tmp2 = importDefault(dependencyMap[25])();
  let obj = { gradient: tmp };
  obj = { style: items };
  const items = [callback4().container, { paddingLeft: left, paddingRight: right }];
  obj.children = callback2(FriendsNavigator, {});
  obj.children = callback2(View, obj);
  return callback2(arg1(dependencyMap[26]).ThemeContextProvider, obj);
};
