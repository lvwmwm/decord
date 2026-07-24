// Module ID: 8005
// Function ID: 63291
// Name: isActivityInTextSupportedForChannel
// Dependencies: [1348, 3758, 482, 669, 566, 2]
// Exports: isActivitiesInTextEnabled, useIsActivitiesInTextEnabled, useIsAppLauncherEnabled

// Module 8005 (isActivityInTextSupportedForChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
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
      hasItem = type === require(669) /* set */.ChannelTypes.GUILD_CATEGORY;
    }
    if (hasItem) {
      const items = [require(669) /* set */.ChannelTypes.GUILD_TEXT, require(669) /* set */.ChannelTypes.GUILD_VOICE, require(669) /* set */.ChannelTypes.GROUP_DM, require(669) /* set */.ChannelTypes.DM];
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
const result = require("sum").fileFinishedImporting("modules/activities/ActivitiesInTextUtils.tsx");

export { isActivityInTextSupportedForChannel };
export const isActivitiesInTextEnabled = function isActivitiesInTextEnabled(channel) {
  return isActivitiesInTextEnabledForChannelWithPermissions(channel, closure_3);
};
export const useIsActivitiesInTextEnabled = function useIsActivitiesInTextEnabled(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct, closure_3];
  return _require(566).useStateFromStores(items, () => outer1_6(outer1_2.getChannel(closure_0), outer1_3));
};
export { getIsAppLauncherEnabled };
export const useIsAppLauncherEnabled = function useIsAppLauncherEnabled(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = outer1_7(channel);
    }
    return tmp2;
  });
};
