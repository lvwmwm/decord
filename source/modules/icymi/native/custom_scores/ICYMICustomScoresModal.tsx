// Module ID: 15229
// Function ID: 115906
// Name: ICYMICustomScoresModal
// Dependencies: [31, 33, 9149, 4130, 689, 5517, 9158, 1212, 10191, 15230, 15231, 2]
// Exports: default

// Module 15229 (ICYMICustomScoresModal)
import "result";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = {};
createNativeStackNavigator = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
createNativeStackNavigator.header = createNativeStackNavigator;
createNativeStackNavigator = _createForOfIteratorHelperLoose.createStyles(createNativeStackNavigator);
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  const _require = createNativeStackNavigator();
  let obj = _require(5517);
  let closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      let merged = Object.assign(closure_1);
      return {
        headerStyle: lib.header,
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_3(callback(outer2_2[6]).GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center"
      };
    },
    initialRouteName: "default"
  };
  obj = {
    name: "default",
    options(navigation) {
      const obj = {};
      const intl = lib(outer1_2[7]).intl;
      obj.title = intl.string(lib(outer1_2[7]).t.jVshKt);
      obj.headerLeft = lib(outer1_2[6]).getRenderModalCloseImage(navigation.navigation);
      const merged = Object.assign(callback(outer1_2[8])());
      return obj;
    },
    getComponent() {
      return lib(outer1_2[9]).default;
    }
  };
  const items = [
    callback(createNativeStackNavigator.Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: lib(outer1_2[6]).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return lib(outer1_2[10]).default;
      }
    })
  ];
  obj.children = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
};
