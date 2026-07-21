// Module ID: 5520
// Function ID: 46983
// Dependencies: []

// Module 5520
let closure_3 = ["state", "r", "isArray", "flex", "String"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

export default arg1(dependencyMap[4]).createNavigatorFactory(function StackNavigator(arg0) {
  let NavigationContent;
  let children;
  let descriptors;
  let id;
  let initialRouteName;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  const tmp = callback(arg0, closure_3);
  const mode = tmp.mode;
  importDefault(dependencyMap[3])(null != mode, "Stack Navigator: 'mode=\"" + mode + "\"' is deprecated. Use 'presentation: \"" + mode + "\"' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator#presentation for more details.");
  const headerMode = tmp.headerMode;
  importDefault(dependencyMap[3])("none" === headerMode, "Stack Navigator: 'headerMode=\"none\"' is deprecated. Use 'headerShown: false' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headershown for more details.");
  let tmp7 = null != headerMode;
  const tmp2 = importDefault(dependencyMap[3]);
  const tmp3 = null != mode;
  if (tmp7) {
    tmp7 = "none" !== headerMode;
  }
  importDefault(dependencyMap[3])(tmp7, "Stack Navigator: 'headerMode' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headermode for more details.");
  const keyboardHandlingEnabled = tmp.keyboardHandlingEnabled;
  importDefault(dependencyMap[3])(undefined !== keyboardHandlingEnabled, "Stack Navigator: 'keyboardHandlingEnabled' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#keyboardhandlingenabled for more details.");
  let obj = { presentation: mode, headerShown: tmp10 };
  let tmp11;
  if (headerMode) {
    if ("none" !== headerMode) {
      tmp11 = headerMode;
    }
  }
  obj.headerMode = tmp11;
  obj.keyboardHandlingEnabled = keyboardHandlingEnabled;
  const tmp10 = !headerMode || "none" !== headerMode;
  const tmp6 = importDefault(dependencyMap[3]);
  const navigationBuilder = arg1(dependencyMap[4]).useNavigationBuilder(arg1(dependencyMap[4]).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions, defaultScreenOptions: obj });
  const state = navigationBuilder.state;
  const arg1 = state;
  const navigation = navigationBuilder.navigation;
  const importDefault = navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
    let addListenerResult;
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
            const StackActions = self(closure_2[4]).StackActions;
            const obj = { target: self.key };
            closure_1.dispatch(Object.assign({}, StackActions.popToTop(), obj));
          }
        });
      });
    }
    return addListenerResult;
  }, items);
  obj = {};
  const obj2 = arg1(dependencyMap[4]);
  obj.children = jsx(importDefault(dependencyMap[5]), Object.assign({}, tmp, { state, descriptors, navigation }));
  return <NavigationContent {...obj} />;
});
