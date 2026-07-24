// Module ID: 15590
// Function ID: 120217
// Dependencies: [31, 33, 1457, 3986, 15364, 2]

// Module 15590
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  let obj = navigation(1457);
  const route = obj.useRoute();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
  }, items);
  obj = { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: importDefault(3986)().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic };
  return jsx(importDefault(15364), { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: importDefault(3986)().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});
const result = require("Link").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;
