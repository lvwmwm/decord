// Module ID: 16977
// Function ID: 16978
// Name: PinsScreen
// Dependencies: [19, 17, 1957, 7982, 21, 4636, 576, 1486, 504, 12432, 16830, 2]

// Module 16977 (PinsScreen)
import nativeDefault from "native" /* 576 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 16830 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const View = fn(17).View;
const SearchTabs = fn(7982).SearchTabs;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_7 = createStyles.createStyles(obj);
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default noop.memo(() => {
  channelId = channelId(1486).useRoute().params.channelId;
  const obj = channelId(1486);
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(504);
  const channelDetailsSearchContext = channelId(12432).useChannelDetailsSearchContext(channelId, stateFromStores);
  const obj4 = { style: closure_7().container, children: jsx(messages_PinsScreenDefault, { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS }) };
  return <View style={closure_7().container}>{jsx(messages_PinsScreenDefault, { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS })}</View>;
});
