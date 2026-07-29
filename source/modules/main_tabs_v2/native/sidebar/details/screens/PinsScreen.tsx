// Module ID: 15689
// Function ID: 15690
// Dependencies: [19, 17, 1372, 9101, 21, 4189, 712, 1483, 589, 10100, 15551, 2]

// Module 15689
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchTabs } from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { container: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(() => {
  let obj = channelId(1483);
  channelId = obj.useRoute().params.channelId;
  const items = [ensureGuildLoaded];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(589);
  const channelDetailsSearchContext = channelId(10100).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(importDefault(15551), obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
