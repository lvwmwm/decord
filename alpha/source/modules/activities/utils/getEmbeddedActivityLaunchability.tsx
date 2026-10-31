// Module ID: 11747
// Function ID: 11748
// Name: getEmbeddedActivityLaunchability
// Dependencies: [4863, 4885, 4946, 5679, 2018, 1072, 11719, 6734, 504, 1113, 2]
// Exports: getEmbeddedActivityLaunchabilityForChannel, getEmbeddedActivityLaunchabilityLabel, useEmbeddedActivityLaunchability

// Module 11747 (getEmbeddedActivityLaunchability)
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import Constants2 from "Constants" /* 2018 */;
import AgeGateUtils from "AgeGateUtils" /* 6734 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 11719 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getEmbeddedActivityLaunchability(arg0) {
  let channelId;
  let isContentGated;
  ({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore, isContentGated } = arg0);
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
                const getCurrentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId;
                if (isContentGated) {
                  return obj.CHANNEL_CONTENT_GATED;
                } else if (channel.isVocal()) {
                  if (tmp8 !== channelId) {
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
const EmbeddedActivityLaunchability = { CAN_LAUNCH: 0, [0]: "CAN_LAUNCH", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", NO_CHANNEL: 3, [3]: "NO_CHANNEL", NO_GUILD: 4, [4]: "NO_GUILD", IS_AFK_CHANNEL: 5, [5]: "IS_AFK_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL: 7, [7]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL", CHANNEL_CONTENT_GATED: 8, [8]: "CHANNEL_CONTENT_GATED" };
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export { EmbeddedActivityLaunchability };
export { getEmbeddedActivityLaunchability };
export function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  let channel;
  let obj2;
  const obj = { channelId, isContentGated: obj2.isChannelContentGated(channel), ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
  channel = ChannelStore.getChannel(channelId);
  obj2 = AgeGateUtils;
  return getEmbeddedActivityLaunchability(obj);
}
export function useEmbeddedActivityLaunchability(channelId) {
  let isChannelContentGated;
  _require = channelId;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj2 = require("AgeGateUtils");
  isChannelContentGated = obj2.useIsChannelContentGated(stateFromStores);
  const items2 = [ChannelStore, GuildStore, PermissionStore, VoiceStateStore];
  const items3 = [channelId, isChannelContentGated];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items2, () => {
    const obj = { channelId, isContentGated: isChannelContentGated, ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
    return getEmbeddedActivityLaunchability(obj);
  }, items3);
}
export function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl4 = intl5.intl;
    return intl4.string(intl5.t.qJvTKQ);
  } else if (obj.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl3 = intl5.intl;
    return intl3.string(intl5.t.hHGrWz);
  } else if (obj.CHANNEL_CONTENT_GATED === arg0) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t.pKLV22);
  } else {
    const intl = intl5.intl;
    return intl.string(intl5.t.j29zCr);
  }
}
