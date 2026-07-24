// Module ID: 14775
// Function ID: 112618
// Name: navigatorFactory
// Dependencies: [31, 33, 1457, 3981, 13137, 9149, 2]

// Module 14775 (navigatorFactory)
import result from "result";
import { jsx } from "jsxProd";
import Link from "Link";

const require = arg1;
const navigatorFactory = Link.createNavigatorFactory(function ChatPanelNativeStackNavigator(arg0) {
  let children;
  let id;
  let initialRouteName;
  let screenListeners;
  let screenOptions;
  let obj = { id: 0, initialRouteName: 0, children: 0, screenListeners: 0, screenOptions: 0 };
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  Object.setPrototypeOf(null);
  let merged = Object.assign(arg0, obj);
  const navigationBuilder = state(descriptors[2]).useNavigationBuilder(state(descriptors[2]).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions });
  state = navigationBuilder.state;
  descriptors = navigationBuilder.descriptors;
  const navigation = navigationBuilder.navigation;
  let items = [state, descriptors];
  const memo = navigation.useMemo(() => {
    const state = {};
    const merged = Object.assign(state);
    const items = [...state.routes];
    state["routes"] = items;
    const items1 = [];
    const items2 = [];
    const filteredDescriptors = {};
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < state.routes.length) {
      do {
        let tmp2 = state.routes[num2];
        let tmp3 = state;
        let tmp4 = descriptors;
        let obj3 = state(descriptors[3]);
        if (null != obj3.coerceChannelRoute(tmp2)) {
          let arr = items1.push(tmp2);
          let sum = num;
          if (num2 <= state.index) {
            sum = num + 1;
          }
        } else {
          arr = items2.push(tmp2);
          let tmp6 = descriptors;
          sum = num;
          if (tmp2.key in descriptors) {
            let tmp8 = descriptors;
            filteredDescriptors[tmp2.key] = descriptors[tmp2.key];
            sum = num;
          }
        }
        num2 = num2 + 1;
        num = sum;
        num3 = sum;
      } while (num2 < state.routes.length);
    }
    state.index = Math.max(0, state.index - num3);
    state.routes = items2;
    if (0 === state.routes.length) {
      state.index = 0;
    } else if (state.index >= state.routes.length) {
      state.index = state.routes.length - 1;
    }
    return { state, filteredDescriptors };
  }, items);
  const state2 = memo.state;
  const obj2 = state(descriptors[2]);
  let items1 = [navigation, , ];
  ({ index: arr2[1], key: arr2[2] } = state2);
  const accessibilityPatchedDescriptors = state(descriptors[4]).useAccessibilityPatchedDescriptors(memo.filteredDescriptors);
  const effect = navigation.useEffect(() => {
    let addListenerResult;
    if (null != navigation) {
      if (null != navigation.addListener) {
        addListenerResult = navigation.addListener("tabPress", (arg0) => {
          let closure_0 = arg0;
          let closure_1 = outer1_2.isFocused();
          const animationFrame = requestAnimationFrame(() => {
            let tmp = outer2_3.index > 0 && closure_1;
            if (tmp) {
              tmp = !defaultPrevented.defaultPrevented;
            }
            if (tmp) {
              const obj = {};
              const StackActions = state(descriptors[2]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              obj["target"] = outer2_3.key;
              outer2_2.dispatch(obj);
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items1);
  obj = {};
  obj = {};
  const merged1 = Object.assign(merged);
  obj["state"] = state2;
  obj["navigation"] = navigation;
  obj["descriptors"] = accessibilityPatchedDescriptors;
  obj.children = state2(state(descriptors[5]).NativeStackView, obj);
  return state2(navigationBuilder.NavigationContent, obj);
});
const result = require("Link").fileFinishedImporting("modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx");

export default navigatorFactory;
