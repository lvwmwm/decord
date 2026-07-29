// Module ID: 13098
// Function ID: 13099
// Name: markGuildsAsRead
// Dependencies: [5115, 5096, 1932, 4201, 676, 4386, 12, 11, 698, 5126, 2]
// Exports: default

// Module 13098 (markGuildsAsRead)
import handleUpdate from "handleUpdate";
import rebuild from "rebuild";
import comparator from "comparator";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { AnalyticEvents } from "ME";
import { ReadStateTypes } from "ReadStateTypes";

const require = arg1;
const result = require("comparator").fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = importDefault(12);
  const mapped = obj.flatMap(arr, (closure_0) => {
    const selectableChannelIds = store.getSelectableChannelIds(closure_0);
    const vocalChannelIds = store.getVocalChannelIds(closure_0);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(closure_0);
    const iter = selectableChannelIds[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = activeJoinedThreadsForGuild[iter.next()];
      if (obj == null) {
        obj = {};
      }
      let tmp4 = obj;
      for (const key10027 in obj) {
        let tmp5 = key10027;
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  }).map((channelId) => ({ channelId, readStateType: constants.CHANNEL, messageId: generateOldThreadCutoff.lastMessageId(channelId) }));
  const item = arr.forEach((id) => {
    let obj = { channelId: null, readStateType: null, messageId: null };
    obj[0] = outer1_1(outer1_2[7]).cast(id);
    obj[1] = outer1_8.GUILD_EVENT;
    obj[2] = outer1_6.lastMessageId(id, outer1_8.GUILD_EVENT);
    mapped.push(obj);
    obj = { channelId: null, readStateType: null, messageId: null };
    const obj2 = outer1_1(outer1_2[7]);
    obj[0] = outer1_1(outer1_2[7]).cast(id);
    obj[1] = outer1_8.GUILD_ONBOARDING_QUESTION;
    obj[2] = outer1_3.ackIdForGuild(id);
    mapped.push(obj);
  });
  const flatMapResult = obj.flatMap(arr, (closure_0) => {
    const selectableChannelIds = store.getSelectableChannelIds(closure_0);
    const vocalChannelIds = store.getVocalChannelIds(closure_0);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(closure_0);
    const iter = selectableChannelIds[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = activeJoinedThreadsForGuild[iter.next()];
      if (obj == null) {
        obj = {};
      }
      let tmp4 = obj;
      for (const key10027 in obj) {
        let tmp5 = key10027;
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  });
  obj = { source, type: "guild" };
  importDefault(698).track(AnalyticEvents.MARK_AS_READ, obj);
  let obj2 = importDefault(698);
  return mapped(5126).bulkAck(mapped, onFinished);
};
