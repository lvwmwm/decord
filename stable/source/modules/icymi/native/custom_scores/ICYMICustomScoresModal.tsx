// Module ID: 16798
// Function ID: 16799
// Name: ICYMICustomScoresModal
// Dependencies: [19, 21, 8189, 4788, 576, 7277, 8139, 1115, 11218, 16799, 16800, 2]
// Exports: default

// Module 16798 (ICYMICustomScoresModal)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(8189);
let closure_5 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4788);
const obj3 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_6 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  _require = closure_6();
  closure_1 = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
    screenOptions() {
      let merged = Object.assign(closure_1);
      return {
        headerStyle: closure_0.header,
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(dependencyMap[6]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center"
      };
    },
    initialRouteName: "default",
    children: null
  };
  const items = [
    closure_3(closure_5.Screen, {
      name: "default",
      options(navigation) {
        const obj = { title: null, headerLeft: null };
        const intl = closure_0(1115).intl;
        obj.title = intl.string(closure_0(1115).t.jVshKt);
        obj.headerLeft = closure_0(8139).getRenderModalCloseImage(navigation.navigation);
        const merged = Object.assign(closure_1(11218)());
        return obj;
      },
      getComponent() {
        return closure_0(16799).default;
      }
    }),
    closure_3(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: closure_0(8139).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return closure_0(16800).default;
      }
    })
  ];
  obj2.children = items;
  return closure_4(closure_5.Navigator, obj2);
};
