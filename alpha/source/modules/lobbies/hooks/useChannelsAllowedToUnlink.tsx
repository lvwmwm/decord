// Module ID: 19651
// Function ID: 19652
// Name: useChannelsAllowedToUnlink
// Dependencies: [4944, 4946, 10809, 504, 2]
// Exports: getChannelsAllowedToUnlink, useChannelsAllowedToUnlink

// Module 19651 (useChannelsAllowedToUnlink)
import GuildChannelStore2 from "GuildChannelStore" /* 4944 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require;

const f118295 = (channel) => channel.channel;
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
      const obj = id(closure_2_1[2]);
      return obj.canUnlinkLobbyChannel(channel.channel, closure_0);
    });
    items = found.map(f118295);
  }
  return items;
}
export function useChannelsAllowedToUnlink(id) {
  _require = id;
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
            const obj = id(closure_2_1[2]);
            return obj.canUnlinkLobbyChannel(channel.channel, closure_0);
          });
          items = found.map(f118295);
        }
        return items;
      }
    }
  });
}
