// Module ID: 18155
// Function ID: 18156
// Name: useChannelsAllowedToUnlink
// Dependencies: [4707, 4709, 10256, 558, 576, 504, 2]
// Exports: getChannelsAllowedToUnlink

// Module 18155 (useChannelsAllowedToUnlink)
import GuildChannelStore2 from "GuildChannelStore" /* 4707 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require;

const f133449 = (channel) => channel.channel;
let closure_3 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelsAllowedToUnlink(arg0) {
  let first;
  let tmp7;
  _require = arg0;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore, GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const obj = GuildChannelStore;
      if (GuildChannelStore !== undefined) {
        if (PermissionStore !== undefined) {
          let items;
          closure_0 = tmp2;
          if (null == closure_0) {
            items = [];
          } else {
            const arr = obj.getChannels(closure_0)[closure_3];
            const found = arr.filter((channel) => {
              const obj = closure_2_0(closure_2_1[2]);
              return obj.canUnlinkLobbyChannel(channel.channel, closure_0);
            });
            items = found.map(f133449);
          }
          return items;
        }
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7);
}) : (function useChannelsAllowedToUnlink(arg0) {
  _require = arg0;
  let obj = require("get initialized");
  let items = [PermissionStore, GuildChannelStore];
  return obj.useStateFromStoresArray(items, () => {
    let obj = GuildChannelStore;
    if (GuildChannelStore !== undefined) {
      if (PermissionStore !== undefined) {
        let items;
        closure_0 = tmp2;
        if (null == closure_0) {
          items = [];
        } else {
          const arr = obj.getChannels(closure_0)[closure_3];
          const found = arr.filter((channel) => {
            const obj = closure_2_0(closure_2_1[2]);
            return obj.canUnlinkLobbyChannel(channel.channel, closure_0);
          });
          items = found.map(f133449);
        }
        return items;
      }
    }
  });
});
function getChannelsAllowedToUnlink(arg0) {
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
      const obj = closure_2_0(closure_2_1[2]);
      return obj.canUnlinkLobbyChannel(channel.channel, closure_0);
    });
    items = found.map(f133449);
  }
  return items;
}
const result = size.fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export { getChannelsAllowedToUnlink };
export const useChannelsAllowedToUnlink = tmp2;
