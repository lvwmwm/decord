// Module ID: 18943
// Function ID: 18944
// Name: PinsScreen
// Dependencies: [19, 17, 4863, 9827, 21, 5014, 575, 1500, 504, 13832, 18791, 2]

// Module 18943 (PinsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SearchConstants from "SearchConstants" /* 9827 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import createStyles from "createStyles" /* 5014 */;
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
  const obj = channelId(1500);
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
  const obj3 = channelId(13832);
  const channelDetailsSearchContext = obj3.useChannelDetailsSearchContext(channelId, stateFromStores);
  return <View style={closure_7().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;
