// Module ID: 18897
// Function ID: 18898
// Name: SearchNavigator
// Dependencies: [19, 17, 9805, 18659, 1072, 21, 5009, 575, 9835, 7163, 13857, 1626, 18898, 9791, 18892, 18893, 9846, 9847, 1377, 9868, 2]

// Module 18897 (SearchNavigator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import TrackingConstants from "TrackingConstants" /* 9805 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 9847 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13857 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 18659 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 18892 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import NativeStackView from "NativeStackView" /* 9835 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
let closure_5 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const SearchTypes = Constants.SearchTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(function SearchNavigator(route) {
  let Navigator;
  let items1;
  let items2;
  let obj3;
  let obj4;
  const searchContext = route.route.params.searchContext;
  let obj = searchContext(7163);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = react.useEffect(() => {
    let DM_LIST;
    const tmp = searchContext;
    if (searchContext.type === SearchTypes.GUILD) {
      DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    let obj = search_tracking_TrackingDefault;
    obj.trackSearchOpened({ searchContext: tmp, searchLocation: DM_LIST });
    return () => {
      const obj = search_tracking_TrackingDefault;
      const obj2 = { searchContext };
      obj.trackSearchClosed(obj2);
    };
  }, items);
  const tmp3 = closure_10();
  const rect = useSafeAreaInsetsDefault();
  let obj2 = { style: items1, children: closure_9(Navigator, obj3) };
  items1 = [tmp3.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  Navigator = closure_11.Navigator;
  obj3 = { id: "search-navigator", screenOptions: obj4, children: items2 };
  obj4 = {};
  const merged = Object.assign(accessibilityNativeStackOptions);
  items2 = [, , ];
  const obj5 = {
    initialParams: { searchContext },
    name: SearchNavigatorScreens.SEARCH_TABS,
    options: { headerShown: false, fullScreenGestureEnabled: true },
    getComponent() {
      return searchContext(dependencyMap[12]).default;
    }
  };
  items2[0] = closure_8(closure_11.Screen, obj5);
  const obj6 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      let obj2;
      route = route.route;
      let obj = {
        headerShown: true,
        header: route(closure_2[13]).renderHeader,
        headerLeft: obj2.getRenderBackImage(navigation),
        headerTitle() {
          const obj = { channelId: route.params.channelId };
          return closure_2_8(SearchNavigatorPreviewHeaderDefault, obj);
        },
        fullScreenGestureEnabled: true
      };
      navigation = route.navigation;
      obj2 = route(closure_2[13]);
      return obj;
    },
    getComponent() {
      return searchContext(dependencyMap[15]).default;
    }
  };
  items2[1] = closure_8(closure_11.Screen, obj6);
  const obj7 = {
    name: searchContext(9846).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const conversationNavigatorFocusHeaderOptions = ConversationNavigatorHeader.conversationNavigatorFocusHeaderOptions;
      ConversationNavigatorHeader;
      const obj = utils_PlatformUtils;
      const shouldHandleSafeArea = obj.isAndroid() || searchContext.type === SearchTypes.GUILD;
      return conversationNavigatorFocusHeaderOptions(route, navigation, { shouldHandleSafeArea });
    },
    getComponent() {
      return searchContext(dependencyMap[19]).default;
    }
  };
  items2[2] = closure_8(closure_11.Screen, obj7);
  return closure_8(View, obj2);
});
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default memoResult;
