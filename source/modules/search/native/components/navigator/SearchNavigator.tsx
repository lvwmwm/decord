// Module ID: 15617
// Function ID: 120423
// Dependencies: [31, 27, 9061, 15408, 653, 33, 4131, 689, 9041, 5517, 10040, 1557, 15618, 9050, 15613, 15614, 2]

// Module 15617
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { SearchEntrypointAnalyticsLocations as closure_5 } from "SearchEntrypointAnalyticsLocations";
import { SearchNavigatorScreens } from "SearchNavigatorScreens";
import { SearchTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import createNativeStackNavigator from "createNativeStackNavigator";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo((route) => {
  const searchContext = route.route.params.searchContext;
  let obj = searchContext(5517);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = importAllResult.useEffect(() => {
    if (searchContext.type === outer1_7.GUILD) {
      let DM_LIST = outer1_5.GUILD;
    } else {
      DM_LIST = outer1_5.DM_LIST;
    }
    let obj = outer1_1(outer1_2[10]);
    obj = { searchContext, searchLocation: DM_LIST };
    obj.trackSearchOpened(obj);
    return () => {
      let obj = outer2_1(outer2_2[10]);
      obj = { searchContext: outer1_0 };
      obj.trackSearchClosed(obj);
    };
  }, items);
  const rect = importDefault(1557)();
  obj = { style: items1 };
  items1 = [callback3().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "search-navigator" };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj.screenOptions = {};
  const items2 = [
    callback(createNativeStackNavigator.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(outer1_2[12]).default;
      }
    }),
    callback(createNativeStackNavigator.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: searchContext(outer1_2[13]).renderHeader,
          headerLeft: searchContext(outer1_2[13]).getRenderBackImage(route.navigation),
          headerTitle() {
            return outer2_8(outer2_1(outer2_2[14]), { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(outer1_2[15]).default;
      }
    })
  ];
  obj.children = items2;
  obj.children = callback2(createNativeStackNavigator.Navigator, obj);
  return callback(View, obj);
});
const result = require("SearchEntrypointAnalyticsLocations").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default memoResult;
