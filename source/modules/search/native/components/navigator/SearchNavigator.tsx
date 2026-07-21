// Module ID: 15423
// Function ID: 117709
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15423
import importAllResult from "result";
import { View } from "result";
import { SearchEntrypointAnalyticsLocations as closure_5 } from "result";
import { SearchNavigatorScreens } from "result";
import { SearchTypes } from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_8, jsxs: closure_9 } = result);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
let closure_10 = result.createStyles(obj);
result = result.createNativeStackNavigator();
result = result.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default importAllResult.memo((route) => {
  const searchContext = route.route.params.searchContext;
  const arg1 = searchContext;
  let obj = arg1(dependencyMap[9]);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = importAllResult.useEffect(() => {
    if (searchContext.type === constants2.GUILD) {
      let DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    let obj = callback(closure_2[10]);
    obj = { searchContext, searchLocation: DM_LIST };
    obj.trackSearchOpened(obj);
    return () => {
      let obj = callback(closure_2[10]);
      obj = { searchContext: closure_0 };
      obj.trackSearchClosed(obj);
    };
  }, items);
  const rect = importDefault(dependencyMap[11])();
  obj = { style: items1 };
  const items1 = [callback3().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "search-navigator" };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj.screenOptions = {};
  const items2 = [
    callback(result.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: {},
      getComponent() {
        return searchContext(closure_2[12]).default;
      }
    }),
    callback(result.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        const searchContext = route.route;
        const obj = {
          headerShown: true,
          header: searchContext(closure_2[13]).renderHeader,
          headerLeft: searchContext(closure_2[13]).getRenderBackImage(route.navigation),
          headerTitle() {
            return callback2(callback(closure_2[14]), { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(closure_2[15]).default;
      }
    })
  ];
  obj.children = items2;
  obj.children = callback2(result.Navigator, obj);
  return callback(View, obj);
});
