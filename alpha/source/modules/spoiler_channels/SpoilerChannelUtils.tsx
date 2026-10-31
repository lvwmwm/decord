// Module ID: 6753
// Function ID: 6754
// Name: SpoilerChannelUtils
// Dependencies: [4863, 6754, 504, 2]
// Exports: shouldShowSpoilerGateForChannelId, useGetSpoilerGatingChannelId, useIsChannelSpoilerGated, useShouldShowSpoilerGateForChannelId

// Module 6753 (SpoilerChannelUtils)
import ChannelStore from "ChannelStore" /* 4863 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 6754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isChannelSpoilerGated(channel, ChannelSpoilerAgreeStore, ChannelStore) {
  let obj = ChannelSpoilerAgreeStore;
  if (ChannelSpoilerAgreeStore === undefined) {
    obj = ChannelSpoilerAgreeStore;
  }
  let obj2 = ChannelStore;
  if (ChannelStore === undefined) {
    obj2 = ChannelStore;
  }
  if (obj === undefined) {
    obj = ChannelSpoilerAgreeStore;
  }
  if (obj2 === undefined) {
    obj2 = ChannelStore;
  }
  let id1 = null;
  if (null != channel) {
    if (channel.isSpoilerChannel()) {
      let id = null;
      if (!obj.didAgree(channel.id)) {
        id = channel.id;
      }
      id1 = id;
    } else {
      id1 = null;
      if (null != channel.parent_id) {
        channel = obj2.getChannel(channel.parent_id);
        id1 = null;
        if (null != channel) {
          id1 = null;
          if (channel.isSpoilerChannel()) {
            id1 = null;
            if (!obj.didAgree(channel.id)) {
              id1 = channel.id;
            }
          }
        }
      }
    }
  }
  return null != id1;
}
const result = size.fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export function useGetSpoilerGatingChannelId(channel) {
  _require = channel;
  const obj = require("get initialized");
  const items = [ChannelSpoilerAgreeStore, ChannelStore];
  const items1 = [channel];
  return obj.useStateFromStores(items, () => {
    if (ChannelSpoilerAgreeStore !== undefined) {
      if (ChannelStore !== undefined) {
        let id1 = null;
        if (null != channel) {
          if (channel.isSpoilerChannel()) {
            let id = null;
            if (!ChannelSpoilerAgreeStore.didAgree(channel.id)) {
              id = obj.id;
            }
            id1 = id;
          } else {
            id1 = null;
            if (null != channel.parent_id) {
              channel = obj3.getChannel(obj.parent_id);
              id1 = null;
              if (null != channel) {
                id1 = null;
                if (channel.isSpoilerChannel()) {
                  id1 = null;
                  if (!ChannelSpoilerAgreeStore.didAgree(channel.id)) {
                    id1 = channel.id;
                  }
                }
              }
            }
          }
        }
        return id1;
      }
    }
  }, items1);
}
export { isChannelSpoilerGated };
export function useIsChannelSpoilerGated(channel) {
  _require = channel;
  const items = [ChannelSpoilerAgreeStore, ChannelStore];
  const items1 = [channel];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => isChannelSpoilerGated(channel, ChannelSpoilerAgreeStore, ChannelStore), items1);
}
export function useShouldShowSpoilerGateForChannelId(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore, ChannelSpoilerAgreeStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => isChannelSpoilerGated(ChannelStore.getChannel(closure_0), ChannelSpoilerAgreeStore, ChannelStore), items1);
}
export function shouldShowSpoilerGateForChannelId(channelId) {
  const tmp = null != channelId && isChannelSpoilerGated(ChannelStore.getChannel(channelId));
  return tmp;
}
