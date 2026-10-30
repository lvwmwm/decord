// Module ID: 18683
// Function ID: 18684
// Name: GuildTextChannelRow
// Dependencies: [19, 9806, 21, 11, 18671, 13843, 18674, 2]

// Module 18683 (GuildTextChannelRow)
import Fragment from "Fragment" /* 21 */;
import SearchConstants from "SearchConstants" /* 9806 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 18671 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const SearchUtils = tmp(13843);
let closure_4 = SearchConstants.CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildTextChannelRow(channel) {
  let lastMessageId;
  let layout;
  let onPress;
  channel = channel.channel;
  ({ lastMessageId, onPress } = channel);
  let extractTimestampResult = null;
  const trailing = channel.trailing;
  const merged = Object.assign(channel, Object.assign({ channel: 0, trailing: 0, lastMessageId: 0, onPress: 0 }));
  let c4;
  const id = channel.id;
  const guild_id = channel.guild_id;
  if (null != lastMessageId) {
    const tmp4 = id;
    let obj = onPress(id[3]);
    extractTimestampResult = obj.extractTimestamp(lastMessageId);
  }
  c4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = guild_id.useMemo(() => {
    let channelActiveAgoTimestamp = null;
    const renderChannelSubtitle = guild_channels_ChannelSubtitle.renderChannelSubtitle;
    guild_channels_ChannelSubtitle;
    if (null != c4) {
      const tmpResult = SearchUtils;
      channelActiveAgoTimestamp = tmpResult.getChannelActiveAgoTimestamp(tmp4);
    }
    const obj = { subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id };
    return renderChannelSubtitle(obj);
  }, items);
  const callback = guild_id.useCallback(() => {
    onPress(channel.id);
  }, items1);
  onPress(id[6]);
  const merged1 = Object.assign(merged);
  return <tmp7 subtitle={memo} channel={channel} trailing={trailing} onPress={callback} />;
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildTextChannelRow.tsx");

export default memoResult;
