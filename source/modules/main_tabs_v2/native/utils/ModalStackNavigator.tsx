// Module ID: 9104
// Function ID: 71335
// Dependencies: []

// Module 9104
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[2]).createNativeStackNavigator();
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function ModalStackNavigator(children) {
  let screenKey;
  ({ screenKey, title: closure_0, titleIcon: closure_1 } = children);
  let obj = arg1(closure_2[3]);
  closure_2 = obj.useAccessibilityNativeStackOptions();
  obj = {
    initialRouteName: screenKey,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children, icon: closure_1 };
          const merged1 = Object.assign(merged);
          return callback2(callback(closure_2[4]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(closure_2[4]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      const merged = Object.assign(closure_2);
      const merged1 = Object.assign(callback2(closure_2[5])());
      return obj;
    },
    children: <closure_4.Screen {...obj} />
  };
  obj = {
    name: screenKey,
    children: children.render,
    options() {
      const obj = { title: callback };
      let str;
      if (obj2.isIOS()) {
        str = "portrait";
      }
      obj.orientation = str;
      return obj;
    }
  };
  return <closure_4.Navigator {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default memoResult;
