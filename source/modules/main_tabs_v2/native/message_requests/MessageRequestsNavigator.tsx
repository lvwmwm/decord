// Module ID: 15604
// Function ID: 120313
// Name: MessageRequestsNavigator
// Dependencies: [31, 27, 33, 9149, 4130, 689, 5517, 6707, 1557, 9158, 1212, 10191, 15605, 15624, 15625, 2]
// Exports: default

// Module 15604 (MessageRequestsNavigator)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = {};
createNativeStackNavigator = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
createNativeStackNavigator.container = createNativeStackNavigator;
_createForOfIteratorHelperLoose = { borderBottomWidth: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createNativeStackNavigator.header = _createForOfIteratorHelperLoose;
createNativeStackNavigator = _createForOfIteratorHelperLoose.createStyles(createNativeStackNavigator);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  let Navigator;
  let Screen;
  const tmp = createNativeStackNavigator();
  const require = tmp;
  let obj = require(5517) /* NavigationStack */;
  const importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = React.useLayoutEffect(() => tmp(outer1_2[7]).trackAppUIViewed(), []);
  const rect = importDefault(1557)();
  obj = { style: items };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      let obj = {
        headerStyle: tmp.header,
        headerShadowVisible: false,
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_5(callback(outer2_2[9]).GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: tmp(outer1_2[9]).getRenderModalCloseImage(navigation.navigation)
      };
      let merged = Object.assign(closure_1);
      return obj;
    }
  };
  const obj1 = { name: "root" };
  const obj2 = {};
  ({ Navigator, Screen } = createNativeStackNavigator);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.title = intl.string(require(1212) /* getSystemLocale */.t.e7GWjQ);
  let merged = Object.assign(importDefault(10191)());
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return tmp(outer1_2[12]).default;
  };
  const items1 = [callback(Screen, obj1), , ];
  const obj3 = { name: "spam" };
  const obj4 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.title = intl2.string(require(1212) /* getSystemLocale */.t.ulKXHp);
  let merged1 = Object.assign(importDefault(10191)());
  obj3.options = obj4;
  obj3.getComponent = function getComponent() {
    return tmp(outer1_2[13]).default;
  };
  items1[1] = callback(createNativeStackNavigator.Screen, obj3);
  const obj5 = { name: "preview" };
  const obj6 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.title = intl3.string(require(1212) /* getSystemLocale */.t.iilwGH);
  const merged2 = Object.assign(importDefault(10191)());
  obj5.options = obj6;
  obj5.getComponent = function getComponent() {
    return tmp(outer1_2[14]).default;
  };
  items1[2] = callback(createNativeStackNavigator.Screen, obj5);
  obj.children = items1;
  obj.children = callback2(Navigator, obj);
  return callback(View, obj);
};
