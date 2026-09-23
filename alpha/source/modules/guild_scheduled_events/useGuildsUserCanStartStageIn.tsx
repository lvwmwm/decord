// Module ID: 9876
// Function ID: 9877
// Name: useGuildsUserCanStartStageIn
// Dependencies: [4460, 4462, 2050, 504, 2]
// Exports: useChannelsUserCanStartStageIn

// Module 9876 (useGuildsUserCanStartStageIn)
import GuildChannelStore from "GuildChannelStore" /* 4460 */;
import PermissionStore from "PermissionStore" /* 4462 */;

const require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(4460).GUILD_VOCAL_CHANNELS_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = function useChannelsUserCanStartStageIn(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  const items = [GuildChannelStore, PermissionStore];
  const items1 = [id];
  return id(504).useStateFromStoresArray(items, () => GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      if (closure_1_4 !== undefined) {
        let canResult = channel2.isGuildStageVoice();
        if (canResult) {
          canResult = obj.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
        }
        if (canResult) {
          arr.push(channel);
        }
      }
      obj = closure_1_4;
    }
    return arr;
  }, []), items1);
};
