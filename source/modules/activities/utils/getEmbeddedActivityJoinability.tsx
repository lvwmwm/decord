// Module ID: 10549
// Function ID: 82314
// Name: getEmbeddedActivityJoinability
// Dependencies: [1348, 1838, 3758, 1849, 4146, 653, 10547, 4312, 10546, 566, 2]
// Exports: useEmbeddedActivityJoinability

// Module 10549 (getEmbeddedActivityJoinability)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
function getEmbeddedActivityJoinability(arg0) {
  let ChannelStore;
  let GuildStore;
  let PermissionStore;
  let VoiceStateStore;
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
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      let requires_age_gate;
      if (null != application) {
        const embeddedActivityConfig = application.embeddedActivityConfig;
        if (null != embeddedActivityConfig) {
          requires_age_gate = embeddedActivityConfig.requires_age_gate;
        }
      }
      if (true === requires_age_gate) {
        return obj.ACTIVITY_AGE_GATED;
      }
    }
    if (tmp) {
      let supported_platforms;
      if (null != application) {
        const embeddedActivityConfig2 = application.embeddedActivityConfig;
        if (null != embeddedActivityConfig2) {
          supported_platforms = embeddedActivityConfig2.supported_platforms;
        }
      }
      if (tmp7(supported_platforms)) {
        let tmp10 = channelId;
        if (null == channelId) {
          let session_id;
          if (null != activity) {
            session_id = activity.session_id;
          }
          const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(userId, session_id);
          channelId = undefined;
          if (null != voiceStateForSession) {
            channelId = voiceStateForSession.channelId;
          }
          tmp10 = channelId;
        }
        if (null == tmp10) {
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
                if (null != guild) {
                  afkChannelId = guild.afkChannelId;
                }
                if (afkChannelId === channel.id) {
                  return obj.IS_AFK_CHANNEL;
                } else {
                  const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(channel.getGuildId());
                  const obj2 = require(4312) /* _createForOfIteratorHelperLoose */;
                  const isChannelFullResult = require(4312) /* _createForOfIteratorHelperLoose */.isChannelFull(channel, VoiceStateStore, GuildStore);
                  if (PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
                    if (channel.isVocal()) {
                      if (currentClientVoiceChannelId !== tmp10) {
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
                  canResult = PermissionStore.can(Permissions.CONNECT, channel);
                }
              }
            }
            return obj.CAN_JOIN;
          }
        }
      } else {
        return obj.ACTIVITY_NOT_SUPPORTED_ON_OS;
      }
      tmp7 = importDefault(10547);
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  }
}
let obj = { CAN_JOIN: 0, [0]: "CAN_JOIN", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", CHANNEL_FULL: 3, [3]: "CHANNEL_FULL", NO_CHANNEL: 4, [4]: "NO_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 5, [5]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITY_NOT_SUPPORTED_ON_OS: 6, [6]: "ACTIVITY_NOT_SUPPORTED_ON_OS", ACTIVITY_AGE_GATED: 7, [7]: "ACTIVITY_AGE_GATED", NO_USER: 8, [8]: "NO_USER", IS_AFK_CHANNEL: 9, [9]: "IS_AFK_CHANNEL", NO_GUILD: 10, [10]: "NO_GUILD" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export const EmbeddedActivityJoinability = obj;
export const useEmbeddedActivityJoinability = function useEmbeddedActivityJoinability(userId) {
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  const isActivitiesEnabledForCurrentPlatform = userId(channelId[8]).useIsActivitiesEnabledForCurrentPlatform();
  const obj = userId(channelId[8]);
  const items = [closure_6];
  const stateFromStores = userId(channelId[9]).useStateFromStores(items, () => outer1_6.getCurrentUser());
  const obj2 = userId(channelId[9]);
  const items1 = [application, closure_7, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items2 = [activity, application, channelId, stateFromStores, isActivitiesEnabledForCurrentPlatform, userId];
  return userId(channelId[9]).useStateFromStores(items1, () => outer1_10({ userId, activity, application, channelId, currentUser: stateFromStores, isActivitiesEnabledForCurrentPlatform, ChannelStore: application, VoiceStateStore: outer1_7, PermissionStore: stateFromStores, GuildStore: isActivitiesEnabledForCurrentPlatform }), items2);
};
