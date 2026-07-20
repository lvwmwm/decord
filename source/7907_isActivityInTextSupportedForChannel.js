// Module ID: 7907
// Function ID: 62908
// Name: isActivityInTextSupportedForChannel
// Dependencies: []
// Exports: isActivitiesInTextEnabled, useIsActivitiesInTextEnabled, useIsAppLauncherEnabled

// Module 7907 (isActivityInTextSupportedForChannel)
function isActivityInTextSupportedForChannel(channel) {
  if (null == channel) {
    return false;
  } else {
    channel = channel.getChannel(channel.parent_id);
    let hasItem = null == channel;
    if (!hasItem) {
      let type;
      if (null != channel) {
        type = channel.type;
      }
      hasItem = type === arg1(dependencyMap[3]).ChannelTypes.GUILD_CATEGORY;
    }
    if (hasItem) {
      const items = [arg1(dependencyMap[3]).ChannelTypes.GUILD_TEXT, arg1(dependencyMap[3]).ChannelTypes.GUILD_VOICE, arg1(dependencyMap[3]).ChannelTypes.GROUP_DM, arg1(dependencyMap[3]).ChannelTypes.DM];
      hasItem = items.includes(channel.type);
    }
    return hasItem;
  }
}
function isActivitiesInTextEnabledForChannelWithPermissions(guild_id, closure_3) {
  if (null != guild_id) {
    if (undefined !== guild_id) {
      if (isActivityInTextSupportedForChannel(guild_id)) {
        if (null != guild_id.guild_id) {
          if (!closure_3.can(Permissions.USE_EMBEDDED_ACTIVITIES, guild_id)) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
function getIsAppLauncherEnabled(channel) {
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let tmp2 = null != guild_id;
  if (!tmp2) {
    tmp2 = isActivityInTextSupportedForChannel(channel);
  }
  return tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/ActivitiesInTextUtils.tsx");

export { isActivityInTextSupportedForChannel };
export const isActivitiesInTextEnabled = function isActivitiesInTextEnabled(channel) {
  return isActivitiesInTextEnabledForChannelWithPermissions(channel, closure_3);
};
export const useIsActivitiesInTextEnabled = function useIsActivitiesInTextEnabled(id) {
  const arg1 = id;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => callback(channel.getChannel(arg0), closure_3));
};
export { getIsAppLauncherEnabled };
export const useIsAppLauncherEnabled = function useIsAppLauncherEnabled(id) {
  const arg1 = id;
  const items = [closure_2];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = callback(channel);
    }
    return tmp2;
  });
};
