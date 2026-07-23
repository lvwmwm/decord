// Module ID: 9114
// Function ID: 71395
// Dependencies: [29, 31, 33, 1457, 9115]

// Module 9114
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { jsx } from "jsxProd";
import Link from "Link";

const require = arg1;
let closure_3 = ["id", "initialRouteName", "children", "screenListeners", "screenOptions"];

export default Link.createNavigatorFactory(function NativeStackNavigator(arg0) {
  let NavigationContent;
  let children;
  let descriptors;
  let id;
  let initialRouteName;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  let obj = state(1457);
  const navigationBuilder = obj.useNavigationBuilder(state(1457).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions });
  state = navigationBuilder.state;
  const navigation = navigationBuilder.navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (null != navigation) {
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
              const StackActions = state(outer3_2[3]).StackActions;
              const obj = { target: outer2_0.key };
              outer2_1.dispatch(Object.assign({}, StackActions.popToTop(), obj));
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items);
  obj = {};
  let tmp = callback(arg0, closure_3);
  obj.children = jsx(navigation(9115), Object.assign({}, tmp, { state, navigation, descriptors }));
  return <NavigationContent />;
});
