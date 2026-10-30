// Module ID: 8952
// Function ID: 8953
// Name: ActivitiesInTextUtils
// Dependencies: [4858, 4941, 1083, 1094, 504, 2]
// Exports: getIsAppLauncherEnabled, isActivitiesInTextEnabled, useIsActivitiesInTextEnabled, useIsAppLauncherEnabled

// Module 8952 (ActivitiesInTextUtils)
import Constants from "Constants" /* 1083 */;
import ChannelTypes from "ChannelTypes" /* 1094 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isActivityInTextSupportedForChannel(channel) {
  if (null == channel) {
    return false;
  } else {
    channel = ChannelStore.getChannel(channel.parent_id);
    let hasItem = null == channel;
    if (!hasItem) {
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      hasItem = type1 === ChannelTypes.ChannelTypes.GUILD_CATEGORY;
    }
    if (hasItem) {
      const type = channel.type;
      const items = [ChannelTypes.ChannelTypes.GUILD_TEXT, ChannelTypes.ChannelTypes.GUILD_VOICE, ChannelTypes.ChannelTypes.GROUP_DM, ChannelTypes.ChannelTypes.DM, ChannelTypes.ChannelTypes.GUILD_SPACE];
      hasItem = items.includes(type);
    }
    return hasItem;
  }
}
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/activities/ActivitiesInTextUtils.tsx");

export { isActivityInTextSupportedForChannel };
export function isActivitiesInTextEnabled(channel) {
  let flag = false;
  const obj = PermissionStore;
  if (null != channel) {
    flag = false;
    if (undefined !== channel) {
      flag = false;
      if (isActivityInTextSupportedForChannel(channel)) {
        flag = true;
        if (null != channel.guild_id) {
          flag = true;
          if (!obj.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
}
export function useIsActivitiesInTextEnabled(id) {
  _require = id;
  let obj = require("get initialized");
  const items = [ChannelStore, PermissionStore];
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(id);
    let flag = false;
    const obj = PermissionStore;
    if (null != channel) {
      flag = false;
      if (undefined !== channel) {
        flag = false;
        if (isActivityInTextSupportedForChannel(channel)) {
          flag = true;
          if (null != channel.guild_id) {
            flag = true;
            if (!obj.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
              flag = false;
            }
          }
        }
      }
    }
    return flag;
  });
}
export function getIsAppLauncherEnabled(channel) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp2 = null != guild_id || isActivityInTextSupportedForChannel(channel);
  return tmp2;
}
export function useIsAppLauncherEnabled(id) {
  _require = id;
  const items = [ChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(id);
    let tmp2 = null != channel;
    if (tmp2) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp2 = null != guild_id || isActivityInTextSupportedForChannel(channel);
      const tmp4 = null != guild_id || isActivityInTextSupportedForChannel(channel);
    }
    return tmp2;
  });
}
