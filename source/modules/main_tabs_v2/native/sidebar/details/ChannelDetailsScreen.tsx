// Module ID: 15824
// Function ID: 15825
// Dependencies: [19, 21, 1481, 4140, 15598, 2]

// Module 15824
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  let obj = navigation(1481);
  const route = obj.useRoute();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
  }, items);
  obj = { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: importDefault(4140)().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic };
  return jsx(importDefault(15598), { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: importDefault(4140)().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});
const result = require("createStandardNavigationFactories").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;
