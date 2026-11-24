// Module ID: 15197
// Function ID: 15198
// Name: markGuildsAsRead
// Dependencies: [7329, 6805, 4766, 4847, 6806, 1071, 6042, 11, 1255, 7341, 12, 2]
// Exports: default, markChannelsAsRead

// Module 15197 (markGuildsAsRead)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import ReadStateConstants from "ReadStateConstants" /* 6042 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7341 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7329 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6805 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import GuildChannelStore from "GuildChannelStore" /* 4847 */;
import ReadStateStore from "ReadStateStore" /* 6806 */;
import size from "module_2" /* 2 */;

let activeJoinedThreadsForGuild, channel;

const f107711 = (channelId) => {
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
  const mapped = flatMapResult.map(f107711);
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
  let obj4 = mapped(7341);
  return obj4.bulkAck(mapped, onFinished);
};
export function markChannelsAsRead(arr, source, onFinished) {
  const mapped = arr.map(f107711);
  let obj = AnalyticsUtilsDefault;
  const obj2 = { source, type: "guild" };
  obj.track(AnalyticEvents.MARK_AS_READ, obj2);
  let obj3 = ReadStateActionCreators;
  return obj3.bulkAck(mapped, onFinished);
}
