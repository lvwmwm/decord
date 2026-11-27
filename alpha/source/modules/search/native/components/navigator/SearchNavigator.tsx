// Module ID: 19221
// Function ID: 19222
// Name: SearchNavigator
// Dependencies: [19, 9019, 18969, 1071, 21, 9048, 7355, 13321, 19122, 19222, 9005, 19216, 19217, 9059, 9060, 1359, 9085, 2]

// Module 19221 (SearchNavigator)
import Constants from "Constants" /* 1071 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1359 */;
import TrackingConstants from "TrackingConstants" /* 9019 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 9060 */;
import TrackingDefault from "Tracking" /* 13321 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 18969 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 19122 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 19216 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9048 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let closure_4 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const SearchTypes = Constants.SearchTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(function SearchNavigator(route) {
  let Navigator;
  let items1;
  let obj3;
  let obj4;
  const searchContext = route.route.params.searchContext;
  let obj = searchContext(7355);
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
    let obj = TrackingDefault;
    obj.trackSearchOpened({ searchContext: tmp, searchLocation: DM_LIST });
    return () => {
      const obj = TrackingDefault;
      const obj2 = { searchContext };
      obj.trackSearchClosed(obj2);
    };
  }, items);
  let obj2 = { children: closure_8(Navigator, obj3) };
  obj3 = { id: "search-navigator", screenOptions: obj4, children: items1 };
  obj4 = {};
  Navigator = closure_9.Navigator;
  const tmp3 = AppFrameContainerDefault;
  const merged = Object.assign(accessibilityNativeStackOptions);
  items1 = [, , ];
  const obj5 = {
    initialParams: { searchContext },
    name: SearchNavigatorScreens.SEARCH_TABS,
    options: { headerShown: false, fullScreenGestureEnabled: true },
    getComponent() {
      return searchContext(dependencyMap[9]).default;
    }
  };
  items1[0] = closure_7(closure_9.Screen, obj5);
  const obj6 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      let obj2;
      route = route.route;
      let obj = {
        headerShown: true,
        header: route(closure_2[10]).renderHeader,
        headerLeft: obj2.getRenderBackImage(navigation),
        headerTitle() {
          const obj = { channelId: route.params.channelId };
          return closure_2_7(SearchNavigatorPreviewHeaderDefault, obj);
        },
        fullScreenGestureEnabled: true
      };
      navigation = route.navigation;
      obj2 = route(closure_2[10]);
      return obj;
    },
    getComponent() {
      return searchContext(dependencyMap[12]).default;
    }
  };
  items1[1] = closure_7(closure_9.Screen, obj6);
  const obj7 = {
    name: searchContext(9059).ConversationNavigatorScreens.FOCUS,
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
      return searchContext(dependencyMap[16]).default;
    }
  };
  items1[2] = closure_7(closure_9.Screen, obj7);
  return closure_7(tmp3, obj2);
});
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default memoResult;
