// Module ID: 15067
// Function ID: 113415
// Name: ICYMICustomScoresModal
// Dependencies: []
// Exports: default

// Module 15067 (ICYMICustomScoresModal)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
let closure_5 = obj.createNativeStackNavigator();
const tmp3 = arg1(dependencyMap[1]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.header = obj;
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  const callback = callback4();
  let obj = callback(dependencyMap[5]);
  let closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      const merged = Object.assign(closure_1);
      return {
        headerStyle: lib.header,
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return callback2(callback(closure_2[6]).GenericHeaderTitle, obj);
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
      const intl = lib(closure_2[7]).intl;
      obj.title = intl.string(lib(closure_2[7]).t.jVshKt);
      obj.headerLeft = lib(closure_2[6]).getRenderModalCloseImage(navigation.navigation);
      const merged = Object.assign(callback(closure_2[8])());
      return obj;
    },
    getComponent() {
      return lib(closure_2[9]).default;
    }
  };
  const items = [
    callback2(closure_5.Screen, obj),
    callback2(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: lib(closure_2[6]).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return lib(closure_2[10]).default;
      }
    })
  ];
  obj.children = items;
  return callback3(closure_5.Navigator, obj);
};
