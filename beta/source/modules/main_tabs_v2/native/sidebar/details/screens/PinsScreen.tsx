// Module ID: 16685
// Function ID: 16686
// Name: PinsScreen
// Dependencies: [19, 17, 2045, 7303, 21, 4836, 576, 1488, 504, 11782, 16543, 2]

// Module 16685 (PinsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const SearchTabs = SearchConstants.SearchTabs;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(() => {
  let channelId;
  const obj = channelId(1488);
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
  const obj3 = channelId(11782);
  const channelDetailsSearchContext = obj3.useChannelDetailsSearchContext(channelId, stateFromStores);
  return <View style={closure_7().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
