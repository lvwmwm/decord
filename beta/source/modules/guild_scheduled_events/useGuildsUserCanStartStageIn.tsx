// Module ID: 8990
// Function ID: 8991
// Name: useGuildsUserCanStartStageIn
// Dependencies: [4467, 4469, 2053, 504, 2]
// Exports: useChannelsUserCanStartStageIn

// Module 8990 (useGuildsUserCanStartStageIn)
import GuildChannelStore2 from "GuildChannelStore" /* 4467 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;

const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = function useChannelsUserCanStartStageIn(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  let obj = id(504);
  const items = [GuildChannelStore, PermissionStore];
  const items1 = [id];
  return obj.useStateFromStoresArray(items, () => {
    const arr = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
    return arr.reduce((arr, channel) => {
      channel = channel.channel;
      if (channel.isGuildStageVoice()) {
        const channel2 = channel.channel;
        const obj = closure_1_4;
        if (closure_1_4 !== undefined) {
          const canResult = channel2.isGuildStageVoice() && obj.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
          if (canResult) {
            arr.push(channel);
          }
        }
      }
      return arr;
    }, []);
  }, items1);
};
