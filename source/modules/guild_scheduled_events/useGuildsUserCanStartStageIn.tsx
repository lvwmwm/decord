// Module ID: 8428
// Function ID: 66994
// Name: useChannelsUserCanStartStageIn
// Dependencies: [1907, 3758, 1356, 566, 2]
// Exports: useChannelsUserCanStartStageIn

// Module 8428 (useChannelsUserCanStartStageIn)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

let require = arg1;
const result = require("Permissions").fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = function useChannelsUserCanStartStageIn(guild) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  let tmp2 = null;
  if (null != id) {
    tmp2 = id;
  }
  const require = tmp2;
  const items = [_isNativeReflectConstruct, closure_4];
  const items1 = [tmp2];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => outer1_2.getChannels(closure_0)[outer1_3].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      let obj = outer2_4;
      if (outer2_4 === undefined) {
        obj = outer2_4;
      }
      const tmp = !channel2.isGuildStageVoice();
      let canResult = !tmp;
      if (!tmp) {
        canResult = obj.can(callback(outer2_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
      }
      if (canResult) {
        arr.push(channel);
      }
    }
    return arr;
  }, []), items1);
};
