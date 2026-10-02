// Module ID: 9080
// Function ID: 9081
// Name: useChannelVideoLimit
// Dependencies: [2073, 4861, 1086, 558, 576, 504, 2]
// Exports: getChannelVideoLimit

// Module 9080 (useChannelVideoLimit)
import Constants from "Constants" /* 1086 */;
import GuildStore from "GuildStore" /* 2073 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4861 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelTypes = Constants.ChannelTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let guildId;
  let tmp7;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = SortedVoiceStateStore;
    const items = [SortedVoiceStateStore, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function h() {
      let obj;
      let tmp5;
      const result = SortedVoiceStateStore.countVoiceStatesForChannel(guildId.id);
      const guild = GuildStore.getGuild(guildId.getGuildId());
      const tmp = guildId;
      if (null == guild) {
        obj = { reachedLimit: false, limit: -1 };
      } else if (tmp.type === ChannelTypes.GUILD_STAGE_VOICE) {
        obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
        const obj2 = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
      } else {
        obj = { reachedLimit: tmp5, limit: guild.maxVideoChannelUsers };
        tmp5 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
      }
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
}) : ((arg0) => {
  let guildId;
  _require = arg0;
  let obj = require("get initialized");
  const items = [SortedVoiceStateStore, GuildStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let obj;
    let tmp5;
    const result = SortedVoiceStateStore.countVoiceStatesForChannel(guildId.id);
    const guild = GuildStore.getGuild(guildId.getGuildId());
    const tmp = guildId;
    if (null == guild) {
      obj = { reachedLimit: false, limit: -1 };
    } else if (tmp.type === ChannelTypes.GUILD_STAGE_VOICE) {
      obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
      const obj2 = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
    } else {
      obj = { reachedLimit: tmp5, limit: guild.maxVideoChannelUsers };
      tmp5 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
    }
    return obj;
  }, items1);
});
let result = size.fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default tmp2;
export const getChannelVideoLimit = function getChannelVideoLimit(channel) {
  let obj;
  let tmp4;
  const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
  const guild = GuildStore.getGuild(channel.getGuildId());
  if (null == guild) {
    obj = { reachedLimit: false, limit: -1 };
  } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
    obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
    const obj2 = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
  } else {
    obj = { reachedLimit: tmp4, limit: guild.maxVideoChannelUsers };
    tmp4 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
  }
  return obj;
};
