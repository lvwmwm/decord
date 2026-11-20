// Module ID: 18857
// Function ID: 18858
// Name: PinsScreen
// Dependencies: [19, 17, 4643, 8456, 21, 4794, 575, 1503, 504, 13033, 18698, 2]

// Module 18857 (PinsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SearchConstants from "SearchConstants" /* 8456 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import createStyles from "createStyles" /* 4794 */;
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
  const obj = channelId(1503);
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
  const obj3 = channelId(13033);
  const channelDetailsSearchContext = obj3.useChannelDetailsSearchContext(channelId, stateFromStores);
  return <View style={closure_7().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
