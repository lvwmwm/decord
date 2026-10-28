// Module ID: 14092
// Function ID: 14093
// Name: getChannelListRecord
// Dependencies: [4856, 4934, 1084, 4881, 2]
// Exports: default

// Module 14092 (getChannelListRecord)
import Constants from "Constants" /* 1084 */;
import FavoritesUtils from "FavoritesUtils" /* 4881 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4934 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/channel_sorting/getChannelListRecord.tsx");

export default function getChannelListRecord(guildId, id) {
  let closure_0 = id;
  if (null != guildId) {
    if (null != id) {
      const obj = FavoritesUtils;
      if (obj.isFavoritesGuildId(guildId)) {
        const channels = GuildChannelStore.getChannels(guildId);
        const arr = channels[_false];
        let found = arr.find((channel) => channel.channel.id === closure_0);
        if (found == null) {
          const arr2 = channels[React3];
          found = arr2.find((channel) => channel.channel.id === closure_0);
        }
        if (found == null) {
          const arr3 = channels[ChannelTypes.GUILD_CATEGORY];
          found = arr3.find((channel) => channel.channel.id === closure_0);
        }
        let channel;
        if (found != null) {
          channel = found.channel;
        }
        return channel;
      } else {
        return ChannelStore.getChannel(id);
      }
    }
  }
  return null;
};
