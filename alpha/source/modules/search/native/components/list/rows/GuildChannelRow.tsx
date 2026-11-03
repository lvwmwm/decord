// Module ID: 18881
// Function ID: 18882
// Name: GuildChannelRow
// Dependencies: [19, 17, 9958, 21, 5141, 575, 5772, 18882, 5837, 8727, 18884, 18860, 2]

// Module 18881 (GuildChannelRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useChannelNameDefault from "useChannelName" /* 5772 */;
import FastImageDefault from "FastImage" /* 5837 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8727 */;
import SearchConstants from "SearchConstants" /* 9958 */;
import SearchListRow2 from "SearchListRow" /* 18860 */;
import ChannelContent from "ChannelContent" /* 18882 */;
import renderChannelItem from "renderChannelItem" /* 18884 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let size;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const obj2 = ChannelContent;
  const obj3 = { channel, layout, name: tmp2 };
  return <View style={closure_6().content}>{obj2.renderChannelContent(obj3)}</View>;
}
const View = react_native.View;
const layout = SearchConstants.CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = Fragment.jsx;
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 }, simpleIcon: size };
size = { width: 20, height: 20, marginRight: 8, tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildChannelRow(channel) {
  let extras;
  let onPress;
  let subtitle;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.assign({ channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 }));
  const tmp2 = closure_6();
  const obj = renderChannelItem;
  const channelAccessibilityProps = obj.getChannelAccessibilityProps({ channel, unread: false, mentionCount: 0, voiceStates });
  FastImageDefault;
  const tmp5 = <tmp4 style={tmp2.simpleIcon} source={utils_ChannelUtils.getSimpleChannelIcon(channel)} />;
  const SearchListRow = SearchListRow2.SearchListRow;
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  return <SearchListRow icon={tmp5} iconWidth={32} label={<GuildChannelLabel channel={channel} />} subLabel={subtitle} onPress={onPress} trailing={trailing} extras={extras} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default memoResult;
