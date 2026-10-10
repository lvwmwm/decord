// Module ID: 14165
// Function ID: 14166
// Name: markGuildsAsRead
// Dependencies: [6788, 6034, 2065, 4748, 6035, 1085, 5967, 12, 11, 1265, 6799, 2]
// Exports: default

// Module 14165 (markGuildsAsRead)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6788 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6034 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import size from "module_2" /* 2 */;

let activeJoinedThreadsForGuild, channel;

const AnalyticEvents = Constants.AnalyticEvents;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const result = size.fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = _modDef12;
  const flatMapResult = obj.flatMap(arr, (id) => {
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
  const mapped = flatMapResult.map((channelId) => {
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
  });
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
  let obj4 = mapped(6799);
  return obj4.bulkAck(mapped, onFinished);
};
