// Module ID: 13382
// Function ID: 101731
// Name: navigateToDevTools
// Dependencies: []
// Exports: navigateToDevTools

// Module 13382 (navigateToDevTools)
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createNativeStackNavigator();
let closure_7 = importAllResult.memo((screenKey) => {
  screenKey = screenKey.screenKey;
  let obj = callback(dependencyMap[4]);
  const callback = obj.useAccessibilityNativeStackOptions();
  obj = {};
  let str = "home";
  if (null != screenKey) {
    str = screenKey;
  }
  obj.initialRouteName = str;
  obj.screenOptions = function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        let obj = Object.create(null);
        obj.children = 0;
        const merged = Object.assign(children, obj);
        obj = { title: children.children };
        const merged1 = Object.assign(merged);
        return callback2(callback(closure_2[5]).GenericHeaderTitle, obj);
      },
      headerLeft: callback(closure_2[5]).getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    const merged = Object.assign(callback);
    return obj;
  };
  obj = {
    name: "home",
    component: importDefault(dependencyMap[6]),
    options() {
      return {
        headerTitle() {
          let obj = { style: { flexDirection: "row" } };
          const items = [callback3(callback(closure_2[7]).HammerIcon, { size: "sm" }), ];
          obj = { EMOJI_REACTIONS_ON_MESSAGES: null, paddingVertical: "83020ea8b4c0b0d88670e8fd546ddc69", PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY: "CompassIcon", authorization: "png" };
          obj = { marginLeft: callback2(closure_2[9]).space.PX_8 };
          obj.style = obj;
          items[1] = callback3(callback(closure_2[8]).Text, obj);
          obj.children = items;
          return callback4(closure_3, obj);
        },
        title: "DevTools"
      };
    }
  };
  const items = [callback2(closure_6.Screen, obj), ];
  const merged = Object.assign(callback(dependencyMap[10]).DevToolsScreens);
  const merged1 = Object.assign(callback(dependencyMap[10]).PerformanceTestingScreens);
  const entries = Object.entries({});
  items[1] = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    return callback2(Screen.Screen, {
      name: tmp,
      children: tmp2,
      options() {
        return { title: closure_0 };
      }
    }, tmp);
  });
  obj.children = items;
  return closure_5(closure_6.Navigator, obj);
});
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  importDefault(dependencyMap[11]).hideActionSheet();
  const obj2 = importDefault(dependencyMap[11]);
  importDefault(dependencyMap[12]).pushLazy(() => Promise.resolve(closure_7), { screenKey: obj.screenKey }, "DevToolsNavigator");
};
