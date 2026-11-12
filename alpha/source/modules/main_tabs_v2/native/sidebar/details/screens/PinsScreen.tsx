// Module ID: 19535
// Function ID: 19536
// Name: PinsScreen
// Dependencies: [19, 17, 5092, 8999, 21, 5243, 575, 1502, 504, 14583, 19367, 2]

// Module 19535 (PinsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SearchConstants from "SearchConstants" /* 8999 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const SearchTabs = SearchConstants.SearchTabs;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function PinsScreen() {
  let channelId;
  const obj = channelId(1502);
  channelId = obj.useRoute().params.channelId;
  const items = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj3 = channelId(14583);
  const channelDetailsSearchContext = obj3.useChannelDetailsSearchContext(channelId, stateFromStores);
  return <View style={closure_7().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
