// Module ID: 15598
// Function ID: 120261
// Name: ContextMenuCommandNavigator
// Dependencies: [31, 27, 33, 9149, 4130, 689, 6707, 5517, 1557, 9158, 1212, 15599, 15601, 2]
// Exports: default

// Module 15598 (ContextMenuCommandNavigator)
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
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
createNativeStackNavigator.content = _createForOfIteratorHelperLoose;
createNativeStackNavigator = _createForOfIteratorHelperLoose.createStyles(createNativeStackNavigator);
const result = require("jsxProd").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  let Navigator;
  let Screen;
  const tmp = createNativeStackNavigator();
  const require = tmp;
  const layoutEffect = React.useLayoutEffect(() => tmp(outer1_2[6]).trackAppUIViewed(), []);
  let obj = require(5517) /* NavigationStack */;
  const importDefault = obj.useAccessibilityNativeStackOptions();
  const rect = importDefault(1557)();
  obj = { style: items };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      navigation = navigation.navigation;
      let obj = {
        contentStyle: tmp.content,
        headerShadowVisible: false,
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_5(callback(outer2_2[9]).GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center"
      };
      if (navigation.getState().routes[0].key === navigation.route.key) {
        let renderModalCloseImage = tmp(outer1_2[9]).getRenderModalCloseImage(navigation);
        const obj3 = tmp(outer1_2[9]);
      } else {
        renderModalCloseImage = tmp(outer1_2[9]).getRenderModalBackImage(navigation);
        const obj2 = tmp(outer1_2[9]);
      }
      obj.headerLeft = renderModalCloseImage;
      let merged = Object.assign(closure_1);
      return obj;
    }
  };
  const obj1 = { name: "root" };
  let obj2 = {};
  ({ Navigator, Screen } = createNativeStackNavigator);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.title = intl.string(require(1212) /* getSystemLocale */.t.PHjkRE);
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return tmp(outer1_2[11]).default;
  };
  const items1 = [
    callback(Screen, obj1),
    callback(createNativeStackNavigator.Screen, {
      name: "app",
      options(route) {
        const obj = {};
        const section = route.route.params.section;
        let name;
        if (null != section) {
          name = section.name;
        }
        obj.title = name;
        return obj;
      },
      getComponent() {
        return tmp(outer1_2[12]).default;
      }
    })
  ];
  obj.children = items1;
  obj.children = callback2(Navigator, obj);
  return callback(View, obj);
};
