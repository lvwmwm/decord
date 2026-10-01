// Module ID: 16094
// Function ID: 16095
// Name: ICYMICustomScoresModal
// Dependencies: [19, 21, 7339, 4836, 576, 6421, 7288, 1115, 10386, 16095, 16096, 2]
// Exports: default

// Module 16094 (ICYMICustomScoresModal)
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  let closure_0;
  let items;
  _require = closure_6();
  let obj = require("Navigator");
  let closure_1 = obj.useAccessibilityNativeStackOptions();
  let obj2 = {
    screenOptions() {
      let obj = {
        headerStyle: closure_0.header,
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[6]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_3(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_1);
      return obj;
    },
    initialRouteName: "default",
    children: items
  };
  const Navigator = closure_5.Navigator;
  items = [, ];
  const obj3 = {
    name: "default",
    options(navigation) {
      let intl;
      let obj2;
      const obj = { title: intl.string(closure_0(dependencyMap[7]).t.jVshKt), headerLeft: obj2.getRenderModalCloseImage(navigation) };
      navigation = navigation.navigation;
      intl = closure_0(dependencyMap[7]).intl;
      obj2 = closure_0(dependencyMap[6]);
      const merged = Object.assign(closure_1(dependencyMap[8])());
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[9]).default;
    }
  };
  items[0] = closure_3(closure_5.Screen, obj3);
  const obj4 = {
    name: "guild",
    options(navigation) {
      let obj2;
      const obj = { headerLeft: obj2.getRenderModalBackImage(navigation) };
      navigation = navigation.navigation;
      obj2 = closure_0(dependencyMap[6]);
      return obj;
    },
    getComponent() {
      return closure_0(dependencyMap[10]).default;
    }
  };
  items[1] = closure_3(closure_5.Screen, obj4);
  return closure_4(Navigator, obj2);
};
