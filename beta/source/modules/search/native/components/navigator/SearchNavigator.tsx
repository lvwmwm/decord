// Module ID: 17347
// Function ID: 17348
// Name: SearchNavigator
// Dependencies: [19, 17, 8158, 17127, 1078, 21, 4790, 580, 8194, 558, 568, 7278, 12542, 1616, 17348, 8144, 17342, 17343, 8221, 8204, 17344, 2]

// Module 17347 (SearchNavigator)
import nativeDefault from "native" /* 580 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12542 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 17342 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
let closure_5 = fn(8158).SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = fn(17127).SearchNavigatorScreens;
const SearchTypes = fn(1078).SearchTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4790);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_10 = createStyles.createStyles(obj);
const NativeStackNavigator = fn(8194);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = searchContext(568).c(25);
  searchContext = route.route.params.searchContext;
  let obj = searchContext(568);
  const tmp = searchContext;
  const accessibilityNativeStackOptions = searchContext(7278).useAccessibilityNativeStackOptions();
  if (cResult[0] !== searchContext) {
    const fn = function v() {
      if (searchContext.type === SearchTypes.GUILD) {
        let DM_LIST = constants.GUILD;
      } else {
        DM_LIST = constants.DM_LIST;
      }
      search_tracking_TrackingDefault.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
      return () => {
        search_tracking_TrackingDefault.trackSearchClosed({ searchContext });
      };
    };
    const items = [searchContext];
    cResult[0] = searchContext;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  const tmp8 = closure_10();
  const obj2 = searchContext(7278);
  ({ left, right } = useSafeAreaInsetsDefault());
  if (cResult[3] === left) {
    if (cResult[4] === right) {
      let tmp10 = cResult[5];
    }
    if (cResult[6] === tmp8.container) {
      if (cResult[7] === tmp10) {
        let tmp11 = cResult[8];
      }
      if (cResult[9] !== accessibilityNativeStackOptions) {
        const obj3 = {};
        const merged = Object.assign(accessibilityNativeStackOptions);
        cResult[9] = accessibilityNativeStackOptions;
        cResult[10] = obj3;
        let tmp12 = obj3;
      } else {
        tmp12 = cResult[10];
      }
      if (cResult[11] !== searchContext) {
        const obj4 = { searchContext };
        cResult[11] = searchContext;
        cResult[12] = obj4;
        let tmp16 = obj4;
      } else {
        tmp16 = cResult[12];
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { headerShown: false, fullScreenGestureEnabled: true };
        class N {
          constructor() {
            return searchContext(closure_1_2[14]).default;
          }
        }
        cResult[13] = N;
        cResult[14] = obj5;
        let tmp18 = N;
        const tmp19 = obj5;
      } else {
        tmp18 = cResult[13];
        class N {
          constructor() {
            return searchContext(closure_1_2[14]).default;
          }
        }
      }
      if (cResult[15] !== tmp16) {
        class N {
          constructor() {
            return searchContext(closure_1_2[14]).default;
          }
        }
        const obj6 = { initialParams: tmp16, name: SearchNavigatorScreens.SEARCH_TABS, options: tmp19, getComponent: tmp18 };
        const tmp23 = closure_8(closure_11.Screen, obj6);
        cResult[15] = tmp16;
        cResult[16] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return searchContext(closure_1_2[14]).default;
          }
        }
        const obj7 = {
          name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
          options(route) {
                  route = route.route;
                  const obj = {
                    headerShown: true,
                    header: route(8144).renderHeader,
                    headerLeft: route(8144).getRenderBackImage(route.navigation),
                    headerTitle() {
                      return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
                    },
                    fullScreenGestureEnabled: true
                  };
                  return obj;
                },
          getComponent() {
                  return searchContext(17343).default;
                }
        };
        const tmp27 = closure_8(closure_11.Screen, obj7);
        cResult[17] = tmp27;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[17];
      }
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return searchContext(closure_1_2[14]).default;
          }
        }
        const obj8 = {
          name: tmp(8221).ConversationNavigatorScreens.FOCUS,
          options(arg0) {
                  ({ route, navigation } = arg0);
                  return searchContext(8204).conversationNavigatorFocusHeaderOptions(route, navigation);
                },
          getComponent() {
                  return searchContext(17344).default;
                }
        };
        const tmp30 = closure_8(closure_11.Screen, obj8);
        cResult[18] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[18];
      }
      if (cResult[19] === tmp20) {
        if (cResult[20] === tmp12) {
          let tmp31 = cResult[21];
        }
        class N {
          constructor() {
            return searchContext(closure_1_2[14]).default;
          }
        }
        const obj9 = { style: tmp11, children: tmp31 };
        const tmp38 = closure_8(View, obj9);
        cResult[22] = tmp31;
        cResult[23] = tmp11;
        cResult[24] = tmp38;
      }
      const obj10 = { id: "search-navigator", screenOptions: tmp12, children: null };
      const items1 = [tmp20, tmp24, tmp28];
      obj10.children = items1;
      const tmp34 = closure_9(closure_11.Navigator, obj10);
      cResult[19] = tmp20;
      cResult[20] = tmp12;
      cResult[21] = tmp34;
      tmp31 = tmp34;
    }
    const items2 = [tmp8.container, tmp10];
    cResult[6] = tmp8.container;
    cResult[7] = tmp10;
    cResult[8] = items2;
    tmp11 = items2;
  }
  const obj11 = { paddingLeft: left, paddingRight: right };
  cResult[3] = left;
  cResult[4] = right;
  cResult[5] = obj11;
  tmp10 = obj11;
}) : ((route) => {
  const searchContext = route.route.params.searchContext;
  const accessibilityNativeStackOptions = searchContext(7278).useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    if (searchContext.type === SearchTypes.GUILD) {
      let DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    search_tracking_TrackingDefault.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      search_tracking_TrackingDefault.trackSearchClosed({ searchContext });
    };
  }, items);
  let obj = searchContext(7278);
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items1 = [closure_10().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj2.style = items1;
  const obj3 = { id: "search-navigator", screenOptions: null, children: null };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj3.screenOptions = {};
  const items2 = [
    closure_8(closure_11.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(17348).default;
      }
    }),
    closure_8(closure_11.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(8144).renderHeader,
          headerLeft: route(8144).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(17343).default;
      }
    }),

  ];
  const obj4 = {};
  const obj5 = {
    initialParams: { searchContext },
    name: SearchNavigatorScreens.SEARCH_TABS,
    options: { headerShown: false, fullScreenGestureEnabled: true },
    getComponent() {
      return searchContext(17348).default;
    }
  };
  const obj6 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      route = route.route;
      const obj = {
        headerShown: true,
        header: route(8144).renderHeader,
        headerLeft: route(8144).getRenderBackImage(route.navigation),
        headerTitle() {
          return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
        },
        fullScreenGestureEnabled: true
      };
      return obj;
    },
    getComponent() {
      return searchContext(17343).default;
    }
  };
  const tmp3 = closure_10();
  items2[2] = closure_8(closure_11.Screen, {
    name: searchContext(8221).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      ({ route, navigation } = arg0);
      return searchContext(8204).conversationNavigatorFocusHeaderOptions(route, navigation);
    },
    getComponent() {
      return searchContext(17344).default;
    }
  });
  obj3.children = items2;
  obj2.children = closure_9(closure_11.Navigator, obj3);
  return closure_8(View, obj2);
}));
