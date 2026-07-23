// Module ID: 15357
// Function ID: 117228
// Dependencies: [31, 9103, 33, 21, 15350, 10078, 15353, 2]

// Module 15357
import importAllResult from "result";
import { CHANNEL_LIST_SEARCH_LAYOUT as closure_4 } from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function GuildTextChannelRow(channel) {
  let lastMessageId;
  let onPress;
  channel = channel.channel;
  ({ lastMessageId, onPress } = channel);
  let obj = { channel: 0, trailing: 0, lastMessageId: 0, onPress: 0 };
  let extractTimestampResult = null;
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  let c4;
  const id = channel.id;
  const guild_id = channel.guild_id;
  if (null != lastMessageId) {
    extractTimestampResult = onPress(id[3]).extractTimestamp(lastMessageId);
    const obj2 = onPress(id[3]);
  }
  c4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = guild_id.useMemo(() => {
    let obj = channel(id[4]);
    obj = {};
    let channelActiveAgoTimestamp = null;
    if (null != c4) {
      channelActiveAgoTimestamp = channel(id[5]).getChannelActiveAgoTimestamp(c4);
      const obj3 = channel(id[5]);
    }
    obj.subtitle = channelActiveAgoTimestamp;
    obj.layout = c4;
    obj.channelId = id;
    obj.guildId = guild_id;
    return obj.renderChannelSubtitle(obj);
  }, items);
  const callback = guild_id.useCallback(() => {
    onPress(channel.id);
  }, items1);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["subtitle"] = memo;
  obj["channel"] = channel;
  obj["trailing"] = channel.trailing;
  obj["onPress"] = callback;
  return jsx(onPress(id[6]), {});
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/list/rows/GuildTextChannelRow.tsx");

export default memoResult;
