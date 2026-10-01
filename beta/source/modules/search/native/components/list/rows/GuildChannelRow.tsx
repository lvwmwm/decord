// Module ID: 16475
// Function ID: 16476
// Name: GuildChannelRow
// Dependencies: [19, 17, 7303, 21, 4836, 576, 4989, 16476, 5335, 16478, 16468, 2]

// Module 16475 (GuildChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import SearchListRow2 from "SearchListRow" /* 16468 */;
import ChannelContent from "ChannelContent" /* 16476 */;
import renderChannelItem from "renderChannelItem" /* 16478 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const obj2 = ChannelContent;
  const obj3 = { channel, layout, name: tmp2 };
  return <React3 style={closure_7().content}>{obj2.renderChannelContent(obj3)}</React3>;
}
({ Image: c3, View: closure_4 } = react_native);
const layout = SearchConstants.CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = Fragment.jsx;
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 }, simpleIcon: size };
size = { width: 20, height: 20, marginRight: 8, tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildChannelRow(channel) {
  let extras;
  let onPress;
  let subtitle;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.assign({ channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 }));
  const tmp2 = closure_7();
  const obj = renderChannelItem;
  const channelAccessibilityProps = obj.getChannelAccessibilityProps({ channel, unread: false, mentionCount: 0, voiceStates });
  const tmp4 = <_false style={tmp2.simpleIcon} source={utils_ChannelUtils.getSimpleChannelIcon(channel)} />;
  const SearchListRow = SearchListRow2.SearchListRow;
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  return <SearchListRow icon={tmp4} iconWidth={32} label={<GuildChannelLabel channel={channel} />} subLabel={subtitle} onPress={onPress} trailing={trailing} extras={extras} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default memoResult;
