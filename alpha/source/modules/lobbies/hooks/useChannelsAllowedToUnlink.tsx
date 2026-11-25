// Module ID: 19845
// Function ID: 19846
// Name: useChannelsAllowedToUnlink
// Dependencies: [4942, 4944, 11380, 504, 2]
// Exports: getChannelsAllowedToUnlink, useChannelsAllowedToUnlink

// Module 19845 (useChannelsAllowedToUnlink)
import GuildChannelStore2 from "GuildChannelStore" /* 4942 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require;

const f118978 = (channel) => channel.channel;
let closure_3 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const result = size.fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export function getChannelsAllowedToUnlink(arg0) {
  let items;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildChannelStore;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = PermissionStore;
  }
  let closure_0 = tmp;
  if (null == arg0) {
    items = [];
  } else {
    const arr = obj.getChannels(arg0)[closure_3];
    const found = arr.filter((channel) => {
      const obj = guildId(closure_2_1[2]);
      return obj.canUnlinkLobbyChannel(channel.channel, closure_0);
    });
    items = found.map(f118978);
  }
  return items;
}
export function useChannelsAllowedToUnlink(guildId) {
  _require = guildId;
  let obj = require("get initialized");
  let items = [PermissionStore, GuildChannelStore];
  return obj.useStateFromStoresArray(items, () => {
    let obj = GuildChannelStore;
    if (GuildChannelStore !== undefined) {
      if (PermissionStore !== undefined) {
        let items;
        let closure_0 = tmp2;
        if (null == closure_0) {
          items = [];
        } else {
          const arr = obj.getChannels(closure_0)[closure_3];
          const found = arr.filter((channel) => {
            const obj = guildId(closure_2_1[2]);
            return obj.canUnlinkLobbyChannel(channel.channel, closure_0);
          });
          items = found.map(f118978);
        }
        return items;
      }
    }
  });
}
