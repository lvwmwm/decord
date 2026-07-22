// Module ID: 15431
// Function ID: 117752
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15431
import importAllResult from "__exportStarResult1";
import { View } from "__exportStarResult1";
import { SearchEntrypointAnalyticsLocations as closure_5 } from "__exportStarResult1";
import { SearchNavigatorScreens } from "__exportStarResult1";
import { SearchTypes } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_8, jsxs: closure_9 } = __exportStarResult1);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
let closure_10 = __exportStarResult1.createStyles(obj);
__exportStarResult1 = __exportStarResult1.createNativeStackNavigator();
const result = __exportStarResult1.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

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
    callback(__exportStarResult1.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { 1716927330: 1766088043, 1403737748: 827788593 },
      getComponent() {
        return searchContext(closure_2[12]).default;
      }
    }),
    callback(__exportStarResult1.Screen, {
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
  obj.children = callback2(__exportStarResult1.Navigator, obj);
  return callback(View, obj);
});
