// Module ID: 6697
// Function ID: 6698
// Name: StreamPermissionUtils
// Dependencies: [5726, 4770, 4847, 4788, 4849, 5565, 1071, 6684, 6675, 6698, 6707, 504, 2]
// Exports: getStreamEligibleChannels, useCanWatchStream

// Module 6697 (StreamPermissionUtils)
import Constants from "Constants" /* 1071 */;
import ChannelRecord from "ChannelRecord" /* 4770 */;
import GuildChannelStore from "GuildChannelStore" /* 4847 */;
import ChannelUtils from "ChannelUtils" /* 6675 */;
import canJoinVoiceChannelDefault from "canJoinVoiceChannel" /* 6684 */;
import shouldAgeVerifyForAgeGate from "shouldAgeVerifyForAgeGate" /* 6698 */;
import GameConsoleStore from "GameConsoleStore" /* 5726 */;
import GuildStore from "GuildStore" /* 4788 */;
import PermissionStore from "PermissionStore" /* 4849 */;
import VoiceStateStore from "VoiceStateStore" /* 5565 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function canStreamInChannel(channel, GuildStore, PermissionStore, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    const guild = GuildStore.getGuild(channel.getGuildId());
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    let tmp5 = !(channel.isGuildStageVoice() && num <= 0);
    const isGuildStageVoiceResult = channel.isGuildStageVoice() && num <= 0;
    if (tmp5) {
      if (flag) {
        flag = !canJoinVoiceChannelDefault(channel, PermissionStore);
      }
      let tmp9 = !flag;
      if (tmp9) {
        let canResult = PermissionStore.can(Permissions.STREAM, channel);
        if (canResult) {
          canResult = null != guild && guild.afkChannelId !== channel.id;
        }
        tmp9 = canResult;
      }
      tmp5 = tmp9;
    }
    return tmp5;
  }
}
function canWatchStream(basicChannel1, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore) {
  let obj;
  if (null == basicChannel1) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let CHANNEL_FULL;
    let isInChannelResult = VoiceStateStore.isInChannel(basicChannel1.id);
    let isChannelFullResult = basicChannel1 instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = ChannelUtils;
      isChannelFullResult = obj.isChannelFull(basicChannel1, VoiceStateStore, GuildStore);
    }
    let tmp9 = canJoinVoiceChannelDefault(basicChannel1, PermissionStore);
    const tmp10 = null != GameConsoleStore.getAwaitingRemoteSessionInfo() || null != GameConsoleStore.getRemoteSessionId();
    const obj2 = shouldAgeVerifyForAgeGate;
    let result = obj2.shouldAgeVerifyForAgeGate();
    const tmp11 = require;
    if (result) {
      const tmp11Result = tmp11(6707);
      result = tmp11Result.shouldShowAgeGateForChannelId(basicChannel1.id);
    }
    if (tmp10) {
      CHANNEL_FULL = obj.REMOTE_MODE;
    } else if (result) {
      CHANNEL_FULL = obj.AGE_RESTRICTED;
    } else {
      if (!tmp9) {
        if (!isInChannelResult) {
          CHANNEL_FULL = obj.NO_PERMISSION;
        }
      }
      const tmp14 = isChannelFullResult && !isInChannelResult;
      if (tmp14) {
        CHANNEL_FULL = obj.CHANNEL_FULL;
      }
    }
    let tmp18 = !tmp10 && !result;
    if (tmp18) {
      if (!isInChannelResult) {
        if (tmp9) {
          tmp9 = !isChannelFullResult;
        }
        isInChannelResult = tmp9;
      }
      tmp18 = isInChannelResult;
    }
    const items1 = [tmp18, CHANNEL_FULL];
    return items1;
  }
}
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore.GUILD_VOCAL_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const StreamUnavailableReasons = { REMOTE_MODE: 0, [0]: "REMOTE_MODE", CHANNEL_FULL: 1, [1]: "CHANNEL_FULL", NO_PERMISSION: 2, [2]: "NO_PERMISSION", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
let result = size.fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export { StreamUnavailableReasons };
export { canWatchStream };
export function useCanWatchStream(stateFromStores) {
  _require = stateFromStores;
  const items = [VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => canWatchStream(stateFromStores, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore));
}
export function getStreamEligibleChannels(arg0, GuildStore, PermissionStore) {
  const items = [];
  const tmp = arg0[GUILD_VOCAL_CHANNELS_KEY];
  for (const item10011 of tmp) {
    let channel = item10011.channel;
    let tmp2 = channel;
    if (canStreamInChannel(channel, GuildStore, PermissionStore)) {
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
}
