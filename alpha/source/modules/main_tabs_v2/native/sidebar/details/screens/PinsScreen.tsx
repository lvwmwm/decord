// Module ID: 19038
// Function ID: 19039
// Name: PinsScreen
// Dependencies: [19, 17, 4641, 8457, 21, 4792, 575, 1505, 504, 13063, 18874, 2]

// Module 19038 (PinsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SearchConstants from "SearchConstants" /* 8457 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import createStyles from "createStyles" /* 4792 */;
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
  const obj = channelId(1505);
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
  const obj3 = channelId(13063);
  const channelDetailsSearchContext = obj3.useChannelDetailsSearchContext(channelId, stateFromStores);
  return <View style={closure_7().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
