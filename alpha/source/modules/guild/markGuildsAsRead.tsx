// Module ID: 16019
// Function ID: 16020
// Name: markGuildsAsRead
// Dependencies: [7404, 6976, 4990, 5071, 6977, 1072, 6911, 11, 1252, 7415, 12, 2]
// Exports: default, markChannelsAsRead

// Module 16019 (markGuildsAsRead)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ReadStateConstants from "ReadStateConstants" /* 6911 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7415 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7404 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6976 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildChannelStore from "GuildChannelStore" /* 5071 */;
import ReadStateStore from "ReadStateStore" /* 6977 */;
import size from "module_2" /* 2 */;

let activeJoinedThreadsForGuild, channel;

const f109597 = (channelId) => {
  let fromTimestampResult;
  const obj = { channelId, readStateType: constants.CHANNEL, messageId: fromTimestampResult };
  channel = channel.getChannel(channelId);
  let isForumLikeChannelResult;
  if (channel != null) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (isForumLikeChannelResult) {
    const _Date = Date;
    const obj3 = SnowflakeUtilsDefault;
    fromTimestampResult = obj3.fromTimestamp(Date.now());
  } else {
    fromTimestampResult = ReadStateStore.lastMessageId(channelId);
  }
  return obj;
};
const AnalyticEvents = Constants.AnalyticEvents;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const result = size.fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = _modDef12;
  const flatMapResult = obj.flatMap(arr, (guildId) => {
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guildId);
    const vocalChannelIds = GuildChannelStore.getVocalChannelIds(guildId);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(guildId);
    const iter = selectableChannelIds[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = activeJoinedThreadsForGuild[iter.next()];
      if (obj == null) {
        obj = {};
      }
      for (const key10027 in obj) {
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  });
  const mapped = flatMapResult.map(f109597);
  const item = arr.forEach((item) => {
    let obj2;
    let obj4;
    const push = mapped.push;
    const obj = { channelId: obj2.cast(item), readStateType: ReadStateTypes.GUILD_EVENT, messageId: ReadStateStore.lastMessageId(item, ReadStateTypes.GUILD_EVENT) };
    obj2 = SnowflakeUtilsDefault;
    push(obj);
    const push2 = mapped.push;
    const obj3 = { channelId: obj4.cast(item), readStateType: ReadStateTypes.GUILD_ONBOARDING_QUESTION, messageId: GuildOnboardingPromptsStore.ackIdForGuild(item) };
    obj4 = SnowflakeUtilsDefault;
    push2(obj3);
  });
  let obj2 = AnalyticsUtilsDefault;
  let obj3 = { source, type: "guild" };
  obj2.track(AnalyticEvents.MARK_AS_READ, obj3);
  let obj4 = mapped(7415);
  return obj4.bulkAck(mapped, onFinished);
};
export function markChannelsAsRead(arr, source, onFinished) {
  const mapped = arr.map(f109597);
  let obj = AnalyticsUtilsDefault;
  const obj2 = { source, type: "guild" };
  obj.track(AnalyticEvents.MARK_AS_READ, obj2);
  let obj3 = ReadStateActionCreators;
  return obj3.bulkAck(mapped, onFinished);
}
