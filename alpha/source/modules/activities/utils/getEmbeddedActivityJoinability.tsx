// Module ID: 11752
// Function ID: 11753
// Name: getEmbeddedActivityJoinability
// Dependencies: [4858, 4880, 4941, 1384, 5674, 1072, 11753, 6041, 11682, 504, 6728, 2]
// Exports: useEmbeddedActivityJoinability

// Module 11752 (getEmbeddedActivityJoinability)
import Constants from "Constants" /* 1072 */;
import ChannelUtils from "ChannelUtils" /* 6041 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 11753 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import UserStore from "UserStore" /* 1384 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
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
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export { EmbeddedActivityJoinability };
export function useEmbeddedActivityJoinability(userId) {
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  let isChannelContentGated;
  let obj = userId(channelId[8]);
  const isActivitiesEnabledForCurrentPlatform = obj.useIsActivitiesEnabledForCurrentPlatform();
  const items = [isChannelContentGated];
  const obj2 = userId(channelId[9]);
  const stateFromStores = obj2.useStateFromStores(items, () => isChannelContentGated.getCurrentUser());
  const items1 = [application];
  const items2 = [channelId];
  const obj3 = userId(channelId[9]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  const obj4 = userId(channelId[10]);
  isChannelContentGated = obj4.useIsChannelContentGated(stateFromStores1);
  const items3 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items4 = [activity, application, channelId, stateFromStores, isChannelContentGated, isActivitiesEnabledForCurrentPlatform, userId];
  const obj5 = userId(channelId[9]);
  return obj5.useStateFromStores(items3, () => {
    const obj = { userId, activity, application, channelId, currentUser: stateFromStores, isContentGated: isChannelContentGated, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore };
    return getEmbeddedActivityJoinability(obj);
  }, items4);
}
