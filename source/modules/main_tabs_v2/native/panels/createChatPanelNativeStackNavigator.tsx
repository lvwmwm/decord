// Module ID: 14602
// Function ID: 110058
// Name: navigatorFactory
// Dependencies: []

// Module 14602 (navigatorFactory)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const navigatorFactory = arg1(dependencyMap[2]).createNavigatorFactory(function ChatPanelNativeStackNavigator(arg0) {
  let children;
  let id;
  let initialRouteName;
  let screenListeners;
  let screenOptions;
  let obj = {};
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const navigationBuilder = arg1(dependencyMap[2]).useNavigationBuilder(arg1(dependencyMap[2]).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions });
  const state = navigationBuilder.state;
  const arg1 = state;
  const descriptors = navigationBuilder.descriptors;
  const dependencyMap = descriptors;
  const navigation = navigationBuilder.navigation;
  const React = navigation;
  const items = [state, descriptors];
  const memo = React.useMemo(() => {
    const state = {};
    const merged = Object.assign(state);
    const items = [...closure_0.routes];
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
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let obj3 = closure_0(closure_1[3]);
        if (null != obj3.coerceChannelRoute(tmp2)) {
          let arr = items1.push(tmp2);
          let sum = num;
          if (num2 <= state.index) {
            sum = num + 1;
          }
        } else {
          arr = items2.push(tmp2);
          let tmp6 = closure_1;
          sum = num;
          if (tmp2.key in closure_1) {
            let tmp8 = closure_1;
            filteredDescriptors[tmp2.key] = closure_1[tmp2.key];
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
  const jsx = state2;
  const obj2 = arg1(dependencyMap[2]);
  const items1 = [navigation, , ];
  ({ index: arr2[1], key: arr2[2] } = state2);
  const accessibilityPatchedDescriptors = arg1(dependencyMap[4]).useAccessibilityPatchedDescriptors(memo.filteredDescriptors);
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (null != navigation) {
      if (null != navigation.addListener) {
        addListenerResult = navigation.addListener("tabPress", (arg0) => {
          let closure_1 = focused.isFocused();
          const animationFrame = requestAnimationFrame(() => {
            let tmp = closure_3.index > 0 && closure_1;
            if (tmp) {
              tmp = !arg0.defaultPrevented;
            }
            if (tmp) {
              const obj = {};
              const StackActions = arg0(closure_1[2]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              obj["target"] = closure_3.key;
              closure_2.dispatch(obj);
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
  obj.children = jsx(arg1(dependencyMap[5]).NativeStackView, obj);
  return <navigationBuilder.NavigationContent {...obj} />;
});
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx");

export default navigatorFactory;
