// Module ID: 15804
// Function ID: 15805
// Dependencies: [19, 21, 1481, 4141, 15580, 2]

// Module 15804
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
  obj = { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: importDefault(4141)().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic };
  return jsx(importDefault(15580), { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: importDefault(4141)().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});
const result = require("Link").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;
