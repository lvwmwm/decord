// Module ID: 9102
// Function ID: 71318
// Dependencies: []

// Module 9102
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

export default arg1(dependencyMap[3]).createNavigatorFactory(function NativeStackNavigator(arg0) {
  let NavigationContent;
  let children;
  let descriptors;
  let id;
  let initialRouteName;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  let obj = arg1(dependencyMap[3]);
  const navigationBuilder = obj.useNavigationBuilder(arg1(dependencyMap[3]).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions });
  const state = navigationBuilder.state;
  const arg1 = state;
  const navigation = navigationBuilder.navigation;
  const importDefault = navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (null != navigation) {
      if (null != navigation.addListener) {
        addListenerResult = navigation.addListener("tabPress", (arg0) => {
          const focused = focused.isFocused();
          const animationFrame = requestAnimationFrame((self) => {
            let tmp = self.index > 0 && closure_1;
            if (tmp) {
              tmp = !self.defaultPrevented;
            }
            if (tmp) {
              const _Object = Object;
              const StackActions = self(closure_2[3]).StackActions;
              const obj = { target: self.key };
              closure_1.dispatch(Object.assign({}, StackActions.popToTop(), obj));
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items);
  obj = {};
  const tmp = callback(arg0, closure_3);
  obj.children = jsx(importDefault(dependencyMap[4]), Object.assign({}, tmp, { state, navigation, descriptors }));
  return <NavigationContent {...obj} />;
});
