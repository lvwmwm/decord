// Module ID: 15230
// Function ID: 114981
// Dependencies: []

// Module 15230
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo(function GuildTextChannelRow(channel) {
  let lastMessageId;
  let onPress;
  channel = channel.channel;
  const arg1 = channel;
  ({ lastMessageId, onPress } = channel);
  const importDefault = onPress;
  let obj = { marginBottom: null, marginHorizontal: 4, alignItems: 4, flexDirection: "rgba(0, 0, 0, 0.75)" };
  let extractTimestampResult = null;
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  let closure_4;
  const id = channel.id;
  const dependencyMap = id;
  const guild_id = channel.guild_id;
  if (null != lastMessageId) {
    extractTimestampResult = importDefault(dependencyMap[3]).extractTimestamp(lastMessageId);
    const obj2 = importDefault(dependencyMap[3]);
  }
  closure_4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = importAllResult.useMemo(() => {
    let obj = channel(id[4]);
    obj = {};
    let channelActiveAgoTimestamp = null;
    if (null != extractTimestampResult) {
      channelActiveAgoTimestamp = channel(id[5]).getChannelActiveAgoTimestamp(extractTimestampResult);
      const obj3 = channel(id[5]);
    }
    obj.subtitle = channelActiveAgoTimestamp;
    obj.layout = extractTimestampResult;
    obj.channelId = id;
    obj.guildId = guild_id;
    return obj.renderChannelSubtitle(obj);
  }, items);
  const callback = importAllResult.useCallback(() => {
    onPress(channel.id);
  }, items1);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["subtitle"] = memo;
  obj["channel"] = channel;
  obj["trailing"] = channel.trailing;
  obj["onPress"] = callback;
  return jsx(importDefault(dependencyMap[6]), obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/search/native/components/list/rows/GuildTextChannelRow.tsx");

export default memoResult;
