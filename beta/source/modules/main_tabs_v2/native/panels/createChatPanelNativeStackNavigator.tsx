// Module ID: 15566
// Function ID: 15567
// Name: createChatPanelNativeStackNavigator
// Dependencies: [19, 21, 1486, 4692, 13991, 7339, 2]
// Exports: default

// Module 15566 (createChatPanelNativeStackNavigator)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1486 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

function ChatPanelNativeStackNavigator(arg0) {
  let NativeStackView;
  let NavigationContent;
  let UNSTABLE_routeNamesChangeBehavior;
  let UNSTABLE_router;
  let children;
  let describe;
  let id;
  let initialRouteName;
  let layout;
  let obj4;
  let screenLayout;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  let state;
  let descriptors;
  let obj = state(descriptors[2]);
  const navigationBuilder = obj.useNavigationBuilder(state(descriptors[2]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  descriptors = navigationBuilder.descriptors;
  navigation = navigationBuilder.navigation;
  let items = [state, descriptors];
  ({ describe, NavigationContent } = navigationBuilder);
  const memo = navigation.useMemo(() => {
    let items2;
    let num3;
    state = { routes: items2, index: Math.max(0, state.index - num3) };
    const merged = Object.assign(state);
    const items = [...state.routes];
    const items1 = [];
    items2 = [];
    const obj = {};
    let num = 0;
    let num2 = 0;
    num3 = 0;
    if (0 < state.routes.length) {
      do {
        let sum;
        let tmp2 = state.routes[num];
        let obj3 = NavigationRouteUtils;
        if (null != obj3.coerceChannelRoute(tmp2)) {
          let arr = items1.push(tmp2);
          sum = num2;
          if (num <= state.index) {
            sum = num2 + 1;
          }
        } else {
          let arr2 = items2.push(tmp2);
          sum = num2;
          if (tmp2.key in descriptors) {
            obj[tmp2.key] = tmp8[tmp2.key];
            sum = num2;
          }
        }
        num = num + 1;
        num2 = sum;
        num3 = sum;
      } while (num < state.routes.length);
    }
    if (0 === state.routes.length) {
      state.index = 0;
    } else if (state.index >= state.routes.length) {
      state.index = state.routes.length - 1;
    }
    return { state, filteredDescriptors: obj };
  }, items);
  const state2 = memo.state;
  const filteredDescriptors = memo.filteredDescriptors;
  let items1 = [navigation, , ];
  ({ index: arr2[1], key: arr2[2] } = state2);
  const obj2 = state(descriptors[4]);
  const accessibilityPatchedDescriptors = obj2.useAccessibilityPatchedDescriptors(filteredDescriptors);
  const effect = navigation.useEffect(() => {
    let focused;
    let index;
    let tmp = navigation;
    let addListenerResult;
    if (navigation != null) {
      const addListener = tmp.addListener;
      if (addListener != null) {
        addListenerResult = addListener("tabPress", (arg0) => {
          const defaultPrevented = arg0;
          let closure_1 = focused.isFocused();
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
              const StackActions = state(descriptors[2]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              dispatch(obj);
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items1);
  let obj3 = { children: state2(NativeStackView, obj4) };
  obj4 = { state: state2, navigation, descriptors: accessibilityPatchedDescriptors, describe };
  NativeStackView = state(descriptors[5]).NativeStackView;
  const merged1 = Object.assign(merged);
  return state2(NavigationContent, obj3);
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx");

export default function createChatPanelNativeStackNavigator(arg0) {
  const obj = Link;
  return obj.createNavigatorFactory(ChatPanelNativeStackNavigator)(arg0);
};
