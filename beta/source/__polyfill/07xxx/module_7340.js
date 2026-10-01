// Module ID: 7340
// Function ID: 7341
// Dependencies: [19, 21, 1486, 7341]
// Exports: createNativeStackNavigator

// Module 7340
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import Link from "Link" /* 1486 */;

let focused, navigation;

function NativeStackNavigator(arg0) {
  let NavigationContent;
  let UNSTABLE_routeNamesChangeBehavior;
  let UNSTABLE_router;
  let children;
  let describe;
  let descriptors;
  let id;
  let initialRouteName;
  let layout;
  let screenLayout;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  let state;
  navigation = undefined;
  let context;
  let obj = state(navigation[2]);
  const navigationBuilder = obj.useNavigationBuilder(state(navigation[2]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  ({ describe, descriptors, NavigationContent } = navigationBuilder);
  context = context.useContext(state(navigation[2]).NavigationMetaContext);
  const items = [context, navigation, , ];
  ({ index: arr[2], key: arr[3] } = state);
  const effect = context.useEffect(() => {
    let index;
    let tmp = context;
    let tmp2 = navigation;
    let addListenerResult;
    if (navigation != null) {
      const addListener = tmp2.addListener;
      if (addListener != null) {
        addListenerResult = addListener("tabPress", (arg0) => {
          let closure_1;
          const defaultPrevented = arg0;
          focused = focused.isFocused();
          const animationFrame = requestAnimationFrame(() => {
            let tmp2 = index.index > 0;
            const tmp = index;
            if (tmp2) {
              tmp2 = closure_1;
            }
            if (tmp2) {
              tmp2 = !defaultPrevented.defaultPrevented;
            }
            if (tmp2) {
              const dispatch = focused.dispatch;
              const obj = { target: tmp.key };
              const StackActions = state(navigation[2]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              dispatch(obj);
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items);
  const NativeStackView = state(navigation[3]).NativeStackView;
  const merged1 = Object.assign(merged);
  return <NavigationContent>{null}</NavigationContent>;
}
const jsx = Fragment.jsx;

export const createNativeStackNavigator = function createNativeStackNavigator(arg0) {
  const obj = Link;
  return obj.createNavigatorFactory(NativeStackNavigator)(arg0);
};
export const createNativeStackScreen = Link.createScreenFactory();
