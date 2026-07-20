// Module ID: 8830
// Function ID: 69651
// Name: useChannelVideoLimit
// Dependencies: []
// Exports: default, getChannelVideoLimit

// Module 8830 (useChannelVideoLimit)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ChannelTypes = arg1(dependencyMap[2]).ChannelTypes;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default function useChannelVideoLimit(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStoresObject(items, (self) => {
    const result = closure_3.countVoiceStatesForChannel(self.id);
    const guild = guild.getGuild(self.getGuildId());
    if (null == guild) {
      let obj = {};
    } else if (self.type === constants.GUILD_STAGE_VOICE) {
      obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
    } else {
      obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
    }
    return obj;
  }, items1);
};
export const getChannelVideoLimit = function getChannelVideoLimit(channel) {
  const result = closure_3.countVoiceStatesForChannel(channel.id);
  const guild = guild.getGuild(channel.getGuildId());
  if (null == guild) {
    let obj = {};
  } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
    obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
  } else {
    obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
  }
  return obj;
};
