// Module ID: 8800
// Function ID: 8801
// Name: getEmbeddedActivityLaunchability
// Dependencies: [2045, 2067, 4469, 4855, 2005, 1074, 8801, 504, 1115, 2]
// Exports: getEmbeddedActivityLaunchabilityForChannel, getEmbeddedActivityLaunchabilityLabel, useEmbeddedActivityLaunchability

// Module 8800 (getEmbeddedActivityLaunchability)
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import Constants2 from "Constants" /* 2005 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 8801 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getEmbeddedActivityLaunchability(arg0) {
  let channelId;
  ({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return obj.NO_CHANNEL;
  } else if (closure_6.includes(channel.type)) {
    const obj2 = useIsActivitiesEnabledForCurrentPlatform;
    if (obj2.getIsActivitiesEnabledForCurrentPlatform()) {
      if (null != channel) {
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
              const canResult = PermissionStore.can(Permissions.CONNECT, channel);
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
            }
          }
        }
      }
      return obj.CAN_LAUNCH;
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  } else {
    return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
  }
}
let closure_6 = Constants2.SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
const Permissions = Constants.Permissions;
const EmbeddedActivityLaunchability = { CAN_LAUNCH: 0, [0]: "CAN_LAUNCH", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", NO_CHANNEL: 3, [3]: "NO_CHANNEL", NO_GUILD: 4, [4]: "NO_GUILD", IS_AFK_CHANNEL: 5, [5]: "IS_AFK_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL: 7, [7]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL" };
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export { EmbeddedActivityLaunchability };
export { getEmbeddedActivityLaunchability };
export const getEmbeddedActivityLaunchabilityForChannel = function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  const obj = { channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
  return getEmbeddedActivityLaunchability(obj);
};
export const useEmbeddedActivityLaunchability = function useEmbeddedActivityLaunchability(channelId) {
  _require = channelId;
  let obj = require("get initialized");
  const items = [ChannelStore, GuildStore, PermissionStore, VoiceStateStore];
  const items1 = [channelId];
  return obj.useStateFromStores(items, () => {
    const obj = { channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
    return getEmbeddedActivityLaunchability(obj);
  }, items1);
};
export const getEmbeddedActivityLaunchabilityLabel = function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl3 = intl4.intl;
    return intl3.string(intl4.t.qJvTKQ);
  } else if (tmp.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t.hHGrWz);
  } else {
    const intl = intl4.intl;
    return intl.string(intl4.t.j29zCr);
  }
};
