// Module ID: 8842
// Function ID: 69727
// Name: useChannelVideoLimit
// Dependencies: [1838, 4203, 653, 566, 2]
// Exports: default, getChannelVideoLimit

// Module 8842 (useChannelVideoLimit)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default function useChannelVideoLimit(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
  const items1 = [arg0];
  return _require(566).useStateFromStoresObject(items, () => {
    const result = outer1_3.countVoiceStatesForChannel(guildId.id);
    const guild = outer1_2.getGuild(guildId.getGuildId());
    if (null == guild) {
      let obj = { reachedLimit: false, limit: -1 };
    } else if (guildId.type === outer1_4.GUILD_STAGE_VOICE) {
      obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
    } else {
      obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
    }
    return obj;
  }, items1);
};
export const getChannelVideoLimit = function getChannelVideoLimit(channel) {
  const result = _isNativeReflectConstruct.countVoiceStatesForChannel(channel.id);
  guild = guild.getGuild(channel.getGuildId());
  if (null == guild) {
    let obj = { reachedLimit: false, limit: -1 };
  } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
    obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
  } else {
    obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
  }
  return obj;
};
