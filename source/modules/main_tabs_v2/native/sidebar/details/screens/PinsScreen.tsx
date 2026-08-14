// Module ID: 16028
// Function ID: 16029
// Dependencies: [19, 17, 1391, 8468, 21, 4342, 712, 1502, 589, 11746, 15887, 2]

// Module 16028
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchTabs } from "MessageEmbedTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { container: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(() => {
  let obj = channelId(1502);
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
  const channelDetailsSearchContext = channelId(11746).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(importDefault(15887), obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
