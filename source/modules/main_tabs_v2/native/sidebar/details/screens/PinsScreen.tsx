// Module ID: 15593
// Function ID: 120225
// Dependencies: [31, 27, 1348, 9141, 33, 4130, 689, 1459, 566, 10107, 15455, 2]

// Module 15593
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SearchTabs } from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(() => {
  let obj = channelId(1459);
  channelId = obj.useRoute().params.channelId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = channelId(566).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(566);
  const channelDetailsSearchContext = channelId(10107).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(importDefault(15455), obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
