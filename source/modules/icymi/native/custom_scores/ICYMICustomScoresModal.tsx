// Module ID: 16379
// Function ID: 16380
// Name: ICYMICustomScoresModal
// Dependencies: [19, 21, 7844, 4481, 709, 6940, 7795, 1233, 10856, 16380, 16381, 2]
// Exports: default

// Module 16379 (ICYMICustomScoresModal)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 7844 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { header: null };
createNativeStackNavigator = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createNativeStackNavigator[0] = createNativeStackNavigator;
let closure_6 = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("set").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  const _require = callback3();
  let obj = _require(6940);
  closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      let merged = Object.assign(closure_1);
      return {
        headerStyle: lib.header,
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[6]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center"
      };
    },
    initialRouteName: "default",
    children: null
  };
  obj = {
    name: "default",
    options(navigation) {
      const obj = { title: null, headerLeft: null };
      const intl = lib(1233).intl;
      obj[0] = intl.string(lib(1233).t.jVshKt);
      obj[1] = lib(7795).getRenderModalCloseImage(navigation.navigation);
      const merged = Object.assign(callback(10856)());
      return obj;
    },
    getComponent() {
      return lib(16380).default;
    }
  };
  const items = [
    callback(closure_5.Screen, obj),
    callback(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: lib(7795).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return lib(16381).default;
      }
    })
  ];
  obj[2] = items;
  return callback2(closure_5.Navigator, obj);
};
