// Module ID: 10876
// Function ID: 10877
// Name: getEmbeddedActivityLaunchability
// Dependencies: [2065, 2087, 4750, 5113, 2024, 1085, 10846, 5924, 558, 576, 504, 1126, 2]
// Exports: getEmbeddedActivityLaunchabilityForChannel, getEmbeddedActivityLaunchabilityLabel

// Module 10876 (getEmbeddedActivityLaunchability)
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import Constants2 from "Constants" /* 2024 */;
import AgeGateUtils from "AgeGateUtils" /* 5924 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 10846 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedActivityLaunchability(channelId) {
  let first;
  let fn;
  let isChannelContentGated;
  let items3;
  let tmp10;
  let tmp6;
  let tmp7;
  _require = channelId;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = A;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = A;
  } else {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult3 = require("AgeGateUtils");
  isChannelContentGated = tmpResult3.useIsChannelContentGated(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items2 = [ChannelStore, GuildStore, PermissionStore, VoiceStateStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  if (cResult[5] === channelId) {
    class A {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const tmpResult4 = require("get initialized");
    return tmpResult4.useStateFromStores(tmp10, fn, items3);
  }
  fn = function u() {
    const obj = { channelId, isContentGated: isChannelContentGated, ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
    return getEmbeddedActivityLaunchability(obj);
  };
  items3 = [channelId, isChannelContentGated];
  cResult[5] = channelId;
  cResult[6] = isChannelContentGated;
  cResult[7] = fn;
  cResult[8] = items3;
}) : (function useEmbeddedActivityLaunchability(channelId) {
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
});
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export { EmbeddedActivityLaunchability };
export { getEmbeddedActivityLaunchability };
export const getEmbeddedActivityLaunchabilityForChannel = function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  let channel;
  let obj2;
  const obj = { channelId, isContentGated: obj2.isChannelContentGated(channel), ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
  channel = ChannelStore.getChannel(channelId);
  obj2 = AgeGateUtils;
  return getEmbeddedActivityLaunchability(obj);
};
export const useEmbeddedActivityLaunchability = tmp2;
export const getEmbeddedActivityLaunchabilityLabel = function getEmbeddedActivityLaunchabilityLabel(arg0) {
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
};
