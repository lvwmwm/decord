// Module ID: 16908
// Function ID: 16909
// Name: PinsScreen
// Dependencies: [19, 17, 2045, 7499, 21, 4866, 576, 1488, 504, 11985, 16767, 2]

// Module 16908 (PinsScreen)
import nativeDefault from "native" /* 576 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 16767 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = fn;
const View = fn(17).View;
const SearchTabs = fn(7499).SearchTabs;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_7 = createStyles.createStyles(obj);
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default noop.memo(() => {
  channelId = channelId(1488).useRoute().params.channelId;
  const obj = channelId(1488);
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
  const channelDetailsSearchContext = channelId(11985).useChannelDetailsSearchContext(channelId, stateFromStores);
  const obj4 = { style: closure_7().container, children: jsx(messages_PinsScreenDefault, { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS }) };
  return <View style={closure_7().container}>{jsx(messages_PinsScreenDefault, { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS })}</View>;
});
