// Module ID: 10920
// Function ID: 10921
// Name: getEmbeddedActivityJoinability
// Dependencies: [2065, 2087, 4750, 1390, 5113, 1085, 10921, 5414, 558, 576, 10846, 504, 5924, 2]

// Module 10920 (getEmbeddedActivityJoinability)
import Constants from "Constants" /* 1085 */;
import ChannelUtils from "ChannelUtils" /* 5414 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 10921 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getEmbeddedActivityJoinability(arg0) {
  let activity;
  let application;
  let channelId;
  let currentUser;
  let userId;
  ({ userId, activity, application, channelId, currentUser, ChannelStore, VoiceStateStore, PermissionStore, GuildStore } = arg0);
  if (null == userId) {
    return obj.NO_USER;
  } else {
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      let requires_age_gate;
      if (application != null) {
        const embeddedActivityConfig = application.embeddedActivityConfig;
        if (embeddedActivityConfig != null) {
          requires_age_gate = embeddedActivityConfig.requires_age_gate;
        }
      }
      if (true === requires_age_gate) {
        return obj.ACTIVITY_AGE_GATED;
      }
    }
    if (tmp2) {
      let supported_platforms;
      const tmp8 = isActivitySupportedOnClientPlatformDefault;
      if (application != null) {
        const embeddedActivityConfig2 = application.embeddedActivityConfig;
        if (embeddedActivityConfig2 != null) {
          supported_platforms = embeddedActivityConfig2.supported_platforms;
        }
      }
      if (tmp8(supported_platforms)) {
        let tmp11 = channelId;
        if (null == channelId) {
          let session_id;
          const getVoiceStateForSession = VoiceStateStore.getVoiceStateForSession;
          if (activity != null) {
            session_id = activity.session_id;
          }
          const voiceStateForSession = getVoiceStateForSession(userId, session_id);
          let channelId1;
          if (voiceStateForSession != null) {
            channelId1 = voiceStateForSession.channelId;
          }
          tmp11 = channelId1;
        }
        if (null == tmp11) {
          return obj.NO_CHANNEL;
        } else {
          const channel = ChannelStore.getChannel(channelId);
          if (null == channel) {
            return obj.NO_CHANNEL;
          } else {
            if (!channel.isPrivate()) {
              const guildId = channel.getGuildId();
              if (null == guildId) {
                return obj.NO_GUILD;
              } else {
                const guild = GuildStore.getGuild(guildId);
                let afkChannelId;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                if (afkChannelId === channel.id) {
                  return obj.IS_AFK_CHANNEL;
                } else {
                  const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(channel.getGuildId());
                  const obj2 = ChannelUtils;
                  const isChannelFullResult = obj2.isChannelFull(channel, VoiceStateStore, GuildStore);
                  const canResult = PermissionStore.can(Permissions.CONNECT, channel);
                  if (PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
                    if (tmp) {
                      return obj.CHANNEL_CONTENT_GATED;
                    } else if (channel.isVocal()) {
                      if (currentClientVoiceChannelId !== tmp11) {
                        if (isChannelFullResult) {
                          return obj.CHANNEL_FULL;
                        } else if (!canResult) {
                          return obj.NO_CHANNEL_CONNECT_PERMISSION;
                        }
                      }
                    }
                  } else {
                    return obj.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                  }
                }
              }
            }
            return obj.CAN_JOIN;
          }
        }
      } else {
        return obj.ACTIVITY_NOT_SUPPORTED_ON_OS;
      }
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  }
}
const Permissions = Constants.Permissions;
const EmbeddedActivityJoinability = { CAN_JOIN: 0, [0]: "CAN_JOIN", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", CHANNEL_FULL: 3, [3]: "CHANNEL_FULL", NO_CHANNEL: 4, [4]: "NO_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 5, [5]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITY_NOT_SUPPORTED_ON_OS: 6, [6]: "ACTIVITY_NOT_SUPPORTED_ON_OS", ACTIVITY_AGE_GATED: 7, [7]: "ACTIVITY_AGE_GATED", NO_USER: 8, [8]: "NO_USER", IS_AFK_CHANNEL: 9, [9]: "IS_AFK_CHANNEL", NO_GUILD: 10, [10]: "NO_GUILD", CHANNEL_CONTENT_GATED: 11, [11]: "CHANNEL_CONTENT_GATED" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedActivityJoinability(userId) {
  let channelId;
  let isChannelContentGated;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = userId(channelId[9]);
  const cResult = obj.c(16);
  userId = userId.userId;
  const activity = userId.activity;
  channelId = userId.channelId;
  const application = userId.application;
  const obj2 = userId(channelId[10]);
  const isActivitiesEnabledForCurrentPlatform = obj2.useIsActivitiesEnabledForCurrentPlatform();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isChannelContentGated];
    const fn = function s() {
      return isChannelContentGated.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = userId(channelId[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [application];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    class T {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items2 = [channelId];
    cResult[3] = channelId;
    cResult[4] = T;
    cResult[5] = items2;
    tmp12 = items2;
    tmp11 = T;
  } else {
    class T {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    tmp12 = cResult[5];
  }
  const tmpResult3 = userId(channelId[11]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11, tmp12);
  const tmpResult4 = userId(channelId[12]);
  isChannelContentGated = tmpResult4.useIsChannelContentGated(stateFromStores1);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items3 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
    cResult[6] = items3;
  } else {
    class T {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  if (cResult[7] === activity) {
    class T {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const fn2 = function y() {
    const obj = { userId, activity, application, channelId, currentUser: stateFromStores, isContentGated: isChannelContentGated, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore };
    return getEmbeddedActivityJoinability(obj);
  };
  const items4 = [activity, application, channelId, stateFromStores, isChannelContentGated, isActivitiesEnabledForCurrentPlatform, userId];
  cResult[7] = activity;
  cResult[8] = application;
  cResult[9] = channelId;
  cResult[10] = stateFromStores;
  cResult[11] = isActivitiesEnabledForCurrentPlatform;
  cResult[12] = isChannelContentGated;
  cResult[13] = userId;
  cResult[14] = fn2;
  cResult[15] = items4;
}) : (function useEmbeddedActivityJoinability(userId) {
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  let isChannelContentGated;
  let obj = userId(channelId[10]);
  const isActivitiesEnabledForCurrentPlatform = obj.useIsActivitiesEnabledForCurrentPlatform();
  const items = [isChannelContentGated];
  const obj2 = userId(channelId[11]);
  const stateFromStores = obj2.useStateFromStores(items, () => isChannelContentGated.getCurrentUser());
  const items1 = [application];
  const items2 = [channelId];
  const obj3 = userId(channelId[11]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  const obj4 = userId(channelId[12]);
  isChannelContentGated = obj4.useIsChannelContentGated(stateFromStores1);
  const items3 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items4 = [activity, application, channelId, stateFromStores, isChannelContentGated, isActivitiesEnabledForCurrentPlatform, userId];
  const obj5 = userId(channelId[11]);
  return obj5.useStateFromStores(items3, () => {
    const obj = { userId, activity, application, channelId, currentUser: stateFromStores, isContentGated: isChannelContentGated, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore };
    return getEmbeddedActivityJoinability(obj);
  }, items4);
});
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export { EmbeddedActivityJoinability };
export const useEmbeddedActivityJoinability = tmp2;
