// Module ID: 8377
// Function ID: 66706
// Name: useChannelsUserCanStartStageIn
// Dependencies: []
// Exports: useChannelsUserCanStartStageIn

// Module 8377 (useChannelsUserCanStartStageIn)
let closure_2 = importDefault(dependencyMap[0]);
const GUILD_VOCAL_CHANNELS_KEY = arg1(dependencyMap[0]).GUILD_VOCAL_CHANNELS_KEY;
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = function useChannelsUserCanStartStageIn(guild) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  let tmp2 = null;
  if (null != id) {
    tmp2 = id;
  }
  const arg1 = tmp2;
  const items = [closure_2, closure_4];
  const items1 = [tmp2];
  return arg1(dependencyMap[3]).useStateFromStoresArray(items, () => channels.getChannels(tmp2)[closure_3].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      let obj = closure_4;
      if (closure_4 === undefined) {
        obj = closure_4;
      }
      const tmp = !channel2.isGuildStageVoice();
      let canResult = !tmp;
      if (!tmp) {
        canResult = obj.can(callback(closure_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
      }
      if (canResult) {
        arr.push(channel);
      }
    }
    return arr;
  }, []), items1);
};
