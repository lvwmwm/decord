// Module ID: 14553
// Function ID: 109662
// Dependencies: []

// Module 14553
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[2]).createNativeStackNavigator();
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function DevToolsGuildTagBadgesModal() {
  let Navigator;
  let Screen;
  let obj = callback(dependencyMap[3]);
  const callback = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return callback2(callback(closure_2[4]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(closure_2[4]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      const merged = Object.assign(callback);
      const merged1 = Object.assign(callback2(closure_2[5])());
      return obj;
    }
  };
  obj = {
    name: "DevToolsGuildTagBadges",
    options() {
      return { title: "Guild Tag Badges" };
    },
    component: importDefault(dependencyMap[6])
  };
  ({ Navigator, Screen } = closure_4);
  obj.children = <Screen {...obj} />;
  return <Navigator {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesModal.tsx");

export default memoResult;
