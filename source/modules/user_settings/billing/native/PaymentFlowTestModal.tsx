// Module ID: 14538
// Function ID: 109517
// Dependencies: []

// Module 14538
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[2]).createNativeStackNavigator();
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function PaymentFlowTestModal() {
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
    name: "PaymentFlowTest",
    options() {
      return { title: "Payment Flow Test" };
    },
    component: importDefault(dependencyMap[6])
  };
  ({ Navigator, Screen } = closure_4);
  obj.children = <Screen {...obj} />;
  return <Navigator {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default memoResult;
