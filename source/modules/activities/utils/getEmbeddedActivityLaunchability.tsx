// Module ID: 10825
// Function ID: 84051
// Name: getEmbeddedActivityLaunchability
// Dependencies: []
// Exports: getEmbeddedActivityLaunchabilityForChannel, getEmbeddedActivityLaunchabilityLabel, useEmbeddedActivityLaunchability

// Module 10825 (getEmbeddedActivityLaunchability)
function getEmbeddedActivityLaunchability(arg0) {
  let ChannelStore;
  let GuildStore;
  let PermissionStore;
  let VoiceStateStore;
  let channelId;
  ({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return obj.NO_CHANNEL;
  } else if (closure_6.includes(channel.type)) {
    if (obj2.getIsActivitiesEnabledForCurrentPlatform()) {
      if (null != channel) {
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
              if (PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
                const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(channel.getGuildId());
                if (channel.isVocal()) {
                  if (currentClientVoiceChannelId !== channelId) {
                    if (!canResult) {
                      return obj.NO_CHANNEL_CONNECT_PERMISSION;
                    }
                  }
                }
              } else {
                return obj.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
              }
              const canResult = PermissionStore.can(Permissions.CONNECT, channel);
            }
          }
        }
      }
      return obj.CAN_LAUNCH;
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
    const obj2 = arg1(dependencyMap[6]);
  } else {
    return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
const Permissions = arg1(dependencyMap[5]).Permissions;
const obj = { CAN_LAUNCH: 0, [0]: "CAN_LAUNCH", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", NO_CHANNEL: 3, [3]: "NO_CHANNEL", NO_GUILD: 4, [4]: "NO_GUILD", IS_AFK_CHANNEL: 5, [5]: "IS_AFK_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL: 7, [7]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL" };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export const EmbeddedActivityLaunchability = obj;
export { getEmbeddedActivityLaunchability };
export const getEmbeddedActivityLaunchabilityForChannel = function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  return getEmbeddedActivityLaunchability({ channelId, ChannelStore: closure_2, GuildStore: closure_3, PermissionStore: closure_4, VoiceStateStore: closure_5 });
};
export const useEmbeddedActivityLaunchability = function useEmbeddedActivityLaunchability(channelId) {
  const arg1 = channelId;
  const items = [closure_2, closure_3, closure_4, closure_5];
  const items1 = [channelId];
  return arg1(dependencyMap[7]).useStateFromStores(items, () => callback({ channelId: arg0, ChannelStore: closure_2, GuildStore: closure_3, PermissionStore: closure_4, VoiceStateStore: closure_5 }), items1);
};
export const getEmbeddedActivityLaunchabilityLabel = function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl3 = arg1(dependencyMap[8]).intl;
    return intl3.string(arg1(dependencyMap[8]).t.qJvTKQ);
  } else if (obj.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl2 = arg1(dependencyMap[8]).intl;
    return intl2.string(arg1(dependencyMap[8]).t.hHGrWz);
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.j29zCr);
  }
};
