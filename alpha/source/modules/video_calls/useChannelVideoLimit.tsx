// Module ID: 9224
// Function ID: 9225
// Name: useChannelVideoLimit
// Dependencies: [4885, 5767, 1072, 504, 2]
// Exports: default, getChannelVideoLimit

// Module 9224 (useChannelVideoLimit)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 4885 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5767 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelTypes = Constants.ChannelTypes;
let result = size.fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default function useChannelVideoLimit(arg0) {
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
};
export function getChannelVideoLimit(channel) {
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
}
