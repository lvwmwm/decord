// Module ID: 15434
// Function ID: 117765
// Name: ContextMenuCommandNavigator
// Dependencies: []
// Exports: default

// Module 15434 (ContextMenuCommandNavigator)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
let closure_7 = obj.createNativeStackNavigator();
let obj1 = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.content = obj1;
let closure_8 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  let Navigator;
  let Screen;
  const tmp = callback3();
  const arg1 = tmp;
  const layoutEffect = React.useLayoutEffect(() => tmp(closure_2[6]).trackAppUIViewed(), []);
  let obj = arg1(dependencyMap[7]);
  const importDefault = obj.useAccessibilityNativeStackOptions();
  const rect = importDefault(dependencyMap[8])();
  obj = { style: items };
  const items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      navigation = navigation.navigation;
      const obj = {
        contentStyle: tmp.content,
        headerShadowVisible: false,
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return callback2(callback(closure_2[9]).GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center"
      };
      if (navigation.getState().routes[0].key === navigation.route.key) {
        let renderModalCloseImage = tmp(closure_2[9]).getRenderModalCloseImage(navigation);
        const obj3 = tmp(closure_2[9]);
      } else {
        renderModalCloseImage = tmp(closure_2[9]).getRenderModalBackImage(navigation);
        const obj2 = tmp(closure_2[9]);
      }
      obj.headerLeft = renderModalCloseImage;
      const merged = Object.assign(closure_1);
      return obj;
    }
  };
  const obj1 = { name: "root" };
  const obj2 = {};
  ({ Navigator, Screen } = Screen);
  const intl = arg1(dependencyMap[10]).intl;
  obj2.title = intl.string(arg1(dependencyMap[10]).t.PHjkRE);
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return tmp(closure_2[11]).default;
  };
  const items1 = [
    callback(Screen, obj1),
    callback(Screen.Screen, {
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
        return tmp(closure_2[12]).default;
      }
    })
  ];
  obj.children = items1;
  obj.children = callback2(Navigator, obj);
  return callback(View, obj);
};
