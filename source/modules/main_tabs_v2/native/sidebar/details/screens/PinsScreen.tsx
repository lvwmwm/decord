// Module ID: 16289
// Function ID: 16290
// Dependencies: [19, 17, 1391, 8622, 21, 4444, 712, 1503, 589, 11939, 16147, 2]

// Module 16289
import ThemesDefault from "Themes" /* 712 */;
import InitialPinsScreenDefault from "InitialPinsScreen" /* 16147 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import { SearchTabs } from "MessageEmbedTypes" /* 8622 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let obj = { container: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let obj = channelId(1503);
  channelId = obj.useRoute().params.channelId;
  const items = [closure_4];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(589);
  const channelDetailsSearchContext = channelId(11939).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(InitialPinsScreenDefault, obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
