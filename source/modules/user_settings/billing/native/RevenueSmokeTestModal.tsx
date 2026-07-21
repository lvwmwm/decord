// Module ID: 14548
// Function ID: 109620
// Dependencies: []

// Module 14548
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[2]).createNativeStackNavigator();
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function RevenueSmokeTestModal() {
  let Navigator;
  let Screen;
  let obj = callback(dependencyMap[3]);
  const callback = obj.useAccessibilityNativeStackOptions();
  obj = { skuIDs: [], activeSubscription: null };
  obj = {
    screenOptions(navigation) {
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
      const merged1 = Object.assign(callback2(closure_2[6])());
      return obj;
    }
  };
  const obj1 = {
    name: "RunAllFlows",
    options() {
      return { title: "Run All Payment Flows" };
    }
  };
  ({ Navigator, Screen } = closure_4);
  obj1.component = importDefault(dependencyMap[7]).RunAllFlows;
  obj.children = <Screen {...obj1} />;
  obj.children = <Navigator {...obj} />;
  return jsx(callback(dependencyMap[4]).NativePaymentContextProvider, obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default memoResult;
