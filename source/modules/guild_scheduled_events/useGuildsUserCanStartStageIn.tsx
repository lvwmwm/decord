// Module ID: 8377
// Function ID: 66717
// Name: useChannelsUserCanStartStageIn
// Dependencies: [5, 57, 31, 1354, 33]
// Exports: useChannelsUserCanStartStageIn

// Module 8377 (useChannelsUserCanStartStageIn)
import asyncGeneratorStep from "asyncGeneratorStep";
import { GUILD_VOCAL_CHANNELS_KEY } from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import module_33 from "module_33";

const result = module_33.fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

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
  const items = [asyncGeneratorStep, _slicedToArray];
  const items1 = [tmp2];
  return arg1(dependencyMap[3]).useStateFromStoresArray(items, () => channels.getChannels(tmp2)[closure_3].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      let obj = _slicedToArray;
      if (_slicedToArray === undefined) {
        obj = _slicedToArray;
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
