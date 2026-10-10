// Module ID: 16479
// Function ID: 16480
// Name: useActiveChannels
// Dependencies: [2069, 2065, 4750, 5966, 13978, 1085, 2072, 1388, 2]
// Exports: getActiveTextChannels

// Module 16479 (useActiveChannels)
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ChannelRecord from "ChannelRecord" /* 2069 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import ActiveChannelsStore from "ActiveChannelsStore" /* 13978 */;
import size from "module_2" /* 2 */;

let set;

const isTextChannel = ChannelRecord.isTextChannel;
const Permissions = Constants.Permissions;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/guild_home/useActiveChannels.tsx");

export const getActiveTextChannels = function getActiveTextChannels(guildId, items5) {
  let arr;
  let obj;
  let obj2;
  let tmp = items5;
  if (items5 === undefined) {
    const items = [ChannelStore, , , ];
    items[1] = PermissionStore;
    items[2] = ActiveChannelsStore;
    items[3] = UserGuildSettingsStore;
    tmp = items;
  }
  [, , obj, obj2] = tmp;
  set = undefined;
  const activeChannelIds = obj.getActiveChannelIds(guildId);
  if (null != activeChannelIds) {
    const _Array = Array;
    arr = Array.from(activeChannelIds);
  } else {
    arr = [];
  }
  set = obj2.getMutedChannels(guildId);
  const mapped = arr.map((item) => require.getChannel(item));
  const found = mapped.filter(GlobalUtils.isNotNullish);
  return found.filter((hasFlag) => {
    let hasFlagResult;
    if (hasFlag != null) {
      hasFlagResult = hasFlag.hasFlag(ChannelFlags.ACTIVE_CHANNELS_REMOVED);
    }
    if (hasFlagResult) {
      return false;
    } else if (isTextChannel(hasFlag.type)) {
      const obj = set;
      if (set.has(hasFlag.id)) {
        return false;
      } else {
        if (null != hasFlag.parent_id) {
          if (obj.has(hasFlag.parent_id)) {
            return false;
          }
        }
        if (dependencyMap.can(Permissions.VIEW_CHANNEL, hasFlag)) {
          const channel = require.getChannel(hasFlag.parent_id);
          const isThreadResult = hasFlag.isThread();
          let tmp8 = !isThreadResult;
          if (isThreadResult) {
            tmp8 = null == channel;
          }
          if (!tmp8) {
            let hasFlagResult1;
            if (channel != null) {
              hasFlagResult1 = channel.hasFlag(ChannelFlags.ACTIVE_CHANNELS_REMOVED);
            }
            tmp8 = !hasFlagResult1;
          }
          return tmp8;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  });
};
