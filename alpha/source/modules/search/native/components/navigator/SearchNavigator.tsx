// Module ID: 18860
// Function ID: 18861
// Name: SearchNavigator
// Dependencies: [19, 8455, 18608, 1071, 21, 8518, 6972, 13098, 18761, 18861, 8441, 18855, 18856, 8529, 8530, 1358, 14229, 2]

// Module 18860 (SearchNavigator)
import Constants from "Constants" /* 1071 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import TrackingConstants from "TrackingConstants" /* 8455 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 8530 */;
import TrackingDefault from "Tracking" /* 13098 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 18608 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 18761 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 18855 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 8518 */;
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
  let obj = searchContext(6972);
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
    name: searchContext(8529).ConversationNavigatorScreens.FOCUS,
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
