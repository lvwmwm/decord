// Module ID: 14232
// Function ID: 14233
// Name: markGuildsAsRead
// Dependencies: [7347, 5725, 2045, 2100, 4773, 1078, 4940, 12, 11, 1245, 7357, 2]
// Exports: default

// Module 14232 (markGuildsAsRead)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7347 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5725 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 2100 */;
import ReadStateStore from "ReadStateStore" /* 4773 */;

const require = fn;
const AnalyticEvents = fn(1078).AnalyticEvents;
const ReadStateTypes = fn(4940).ReadStateTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  const mapped = _modDef12.flatMap(arr, (id) => {
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(id);
    const vocalChannelIds = GuildChannelStore.getVocalChannelIds(id);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(id);
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
  }).map((channelId) => {
    const obj = { channelId, readStateType: constants.CHANNEL, messageId: null };
    channel = channel.getChannel(channelId);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const _Date = Date;
      let fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
    } else {
      fromTimestampResult = ReadStateStore.lastMessageId(channelId);
    }
    obj.messageId = fromTimestampResult;
    return obj;
  });
  const item = arr.forEach((item) => {
    const obj = { channelId: SnowflakeUtilsDefault.cast(item), readStateType: ReadStateTypes.GUILD_EVENT, messageId: ReadStateStore.lastMessageId(item, ReadStateTypes.GUILD_EVENT) };
    mapped.push(obj);
    const obj3 = { channelId: null, readStateType: null, messageId: null };
    obj3.channelId = SnowflakeUtilsDefault.cast(item);
    obj3.readStateType = ReadStateTypes.GUILD_ONBOARDING_QUESTION;
    obj3.messageId = GuildOnboardingPromptsStore.ackIdForGuild(item);
    mapped.push(obj3);
  });
  const flatMapResult = _modDef12.flatMap(arr, (id) => {
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(id);
    const vocalChannelIds = GuildChannelStore.getVocalChannelIds(id);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(id);
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
  AnalyticsUtilsDefault.track(AnalyticEvents.MARK_AS_READ, { source, type: "guild" });
  let obj3 = { source, type: "guild" };
  return mapped(7357).bulkAck(mapped, onFinished);
};
