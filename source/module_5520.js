// Module ID: 5520
// Function ID: 47019
// Dependencies: [29, 31, 33, 4487, 1457, 5521]

// Module 5520
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { jsx } from "jsxProd";
import Link from "Link";

const require = arg1;
let closure_3 = ["id", "initialRouteName", "children", "screenListeners", "screenOptions"];

export default Link.createNavigatorFactory(function StackNavigator(arg0) {
  let NavigationContent;
  let children;
  let descriptors;
  let id;
  let initialRouteName;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  let tmp = callback(arg0, closure_3);
  const mode = tmp.mode;
  navigation(4487)(null != mode, "Stack Navigator: 'mode=\"" + mode + "\"' is deprecated. Use 'presentation: \"" + mode + "\"' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator#presentation for more details.");
  const headerMode = tmp.headerMode;
  navigation(4487)("none" === headerMode, "Stack Navigator: 'headerMode=\"none\"' is deprecated. Use 'headerShown: false' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headershown for more details.");
  let tmp7 = null != headerMode;
  const tmp2 = navigation(4487);
  const tmp3 = null != mode;
  if (tmp7) {
    tmp7 = "none" !== headerMode;
  }
  navigation(4487)(tmp7, "Stack Navigator: 'headerMode' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headermode for more details.");
  const keyboardHandlingEnabled = tmp.keyboardHandlingEnabled;
  navigation(4487)(undefined !== keyboardHandlingEnabled, "Stack Navigator: 'keyboardHandlingEnabled' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#keyboardhandlingenabled for more details.");
  let obj = { presentation: mode, headerShown: tmp10 };
  let tmp11;
  if (headerMode) {
    if ("none" !== headerMode) {
      tmp11 = headerMode;
    }
  }
  obj.headerMode = tmp11;
  obj.keyboardHandlingEnabled = keyboardHandlingEnabled;
  tmp10 = !headerMode || "none" !== headerMode;
  const tmp6 = navigation(4487);
  const navigationBuilder = state(1457).useNavigationBuilder(state(1457).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions, defaultScreenOptions: obj });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (null != navigation.addListener) {
      addListenerResult = navigation.addListener("tabPress", (arg0) => {
        let closure_0 = arg0;
        let closure_1 = outer1_1.isFocused();
        const animationFrame = requestAnimationFrame(() => {
          let tmp = outer2_0.index > 0 && closure_1;
          if (tmp) {
            tmp = !defaultPrevented.defaultPrevented;
          }
          if (tmp) {
            const _Object = Object;
            const StackActions = state(outer3_2[4]).StackActions;
            const obj = { target: outer2_0.key };
            outer2_1.dispatch(Object.assign({}, StackActions.popToTop(), obj));
          }
        });
      });
    }
    return addListenerResult;
  }, items);
  obj = {};
  const obj2 = state(1457);
  obj.children = jsx(navigation(5521), Object.assign({}, tmp, { state, descriptors, navigation }));
  return <NavigationContent />;
});
