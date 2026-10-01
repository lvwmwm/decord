// Module ID: 10338
// Function ID: 10339
// Name: useUserVoiceActivity
// Dependencies: [2045, 4469, 4855, 1085, 504, 2]
// Exports: canViewUserVoiceChannel, default, getUserVoiceState

// Module 10338 (useUserVoiceActivity)
import Constants from "Constants" /* 1085 */;
import ChannelStore_mod from "ChannelStore" /* 2045 */;
import PermissionStore_mod from "PermissionStore" /* 4469 */;
import VoiceStateStore_mod from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

function getVisibleUserVoiceActivity(arg0, arg1) {
  let guildId;
  let includeNonDiscoverable;
  let tmp4;
  let userId;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  ({ userId, guildId, includeNonDiscoverable } = arg0);
  if (includeNonDiscoverable === undefined) {
    includeNonDiscoverable = false;
  }
  let tmp3 = tmp;
  if (tmp === undefined) {
    tmp3 = closure_6;
  }
  if (null != guildId) {
    let channel;
    let tmp12;
    if (null != userId) {
      let voiceState;
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      if (includeNonDiscoverable) {
        voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
      tmp4 = voiceState;
    }
    let tmp7 = tmp;
    if (tmp === undefined) {
      tmp7 = closure_6;
    }
    let channelId;
    if (tmp4 != null) {
      channelId = tmp4.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp7.ChannelStore;
      channel = ChannelStore.getChannel(tmp4.channelId);
    }
    if (tmp === undefined) {
      tmp = closure_6;
    }
    let tmp9 = null != tmp4;
    if (tmp9) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp9 = isPrivateResult;
    }
    if (tmp9) {
      tmp12 = { voiceState: tmp4, voiceChannel: channel };
      const obj = { voiceState: tmp4, voiceChannel: channel };
    } else {
      tmp12 = closure_7;
    }
    return tmp12;
  }
  if (null != userId) {
    let voiceStateForUser;
    VoiceStateStore = tmp3.VoiceStateStore;
    if (includeNonDiscoverable) {
      voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
    tmp4 = voiceStateForUser;
  }
}
let ChannelStore = ChannelStore_mod;
let PermissionStore = PermissionStore_mod;
let VoiceStateStore = VoiceStateStore_mod;
const Permissions = Constants.Permissions;
let closure_6 = { ChannelStore, PermissionStore, VoiceStateStore };
let closure_7 = Object.freeze({ voiceState: "Array", voiceChannel: "channel" });
const result = size.fileFinishedImporting("modules/activity_status/useUserVoiceActivity.tsx");

export default function useUserVoiceActivity(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  const includeNonDiscoverable = userId.includeNonDiscoverable;
  let obj = userId(guildId[4]);
  const items = [includeNonDiscoverable, PermissionStore, VoiceStateStore];
  const items1 = [guildId, userId, includeNonDiscoverable];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { userId, guildId, includeNonDiscoverable };
    const obj2 = { ChannelStore, PermissionStore, VoiceStateStore };
    return getVisibleUserVoiceActivity(obj, obj2);
  }, items1);
};
export const getUserVoiceState = function getUserVoiceState(arg0) {
  let guildId;
  let includeNonDiscoverable;
  let tmp2;
  let userId;
  ({ userId, guildId, includeNonDiscoverable } = arg0);
  if (includeNonDiscoverable === undefined) {
    includeNonDiscoverable = false;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  if (null != guildId) {
    if (null != userId) {
      let voiceState;
      const VoiceStateStore2 = tmp.VoiceStateStore;
      if (includeNonDiscoverable) {
        voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
      tmp2 = voiceState;
    }
    return tmp2;
  }
  if (null != userId) {
    let voiceStateForUser;
    VoiceStateStore = tmp.VoiceStateStore;
    if (includeNonDiscoverable) {
      voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
    tmp2 = voiceStateForUser;
  }
};
export const canViewUserVoiceChannel = function canViewUserVoiceChannel(arg0) {
  let guildId;
  let includeNonDiscoverable;
  let tmp4;
  let userId;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_6;
  }
  ({ userId, guildId, includeNonDiscoverable } = arg0);
  if (includeNonDiscoverable === undefined) {
    includeNonDiscoverable = false;
  }
  let tmp3 = tmp;
  if (tmp === undefined) {
    tmp3 = closure_6;
  }
  if (null != guildId) {
    let channel;
    if (null != userId) {
      let voiceState;
      const VoiceStateStore2 = tmp3.VoiceStateStore;
      if (includeNonDiscoverable) {
        voiceState = VoiceStateStore2.getVoiceState(guildId, userId);
      } else {
        voiceState = VoiceStateStore2.getDiscoverableVoiceState(guildId, userId);
      }
      tmp4 = voiceState;
    }
    let tmp7 = tmp;
    if (tmp === undefined) {
      tmp7 = closure_6;
    }
    let channelId;
    if (tmp4 != null) {
      channelId = tmp4.channelId;
    }
    if (null != channelId) {
      ChannelStore = tmp7.ChannelStore;
      channel = ChannelStore.getChannel(tmp4.channelId);
    }
    if (tmp === undefined) {
      tmp = closure_6;
    }
    let tmp9 = null != tmp4;
    if (tmp9) {
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (!isPrivateResult) {
        PermissionStore = tmp.PermissionStore;
        isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp9 = isPrivateResult;
    }
    return tmp9;
  }
  if (null != userId) {
    let voiceStateForUser;
    VoiceStateStore = tmp3.VoiceStateStore;
    if (includeNonDiscoverable) {
      voiceStateForUser = VoiceStateStore.getVoiceStateForUser(userId);
    } else {
      voiceStateForUser = VoiceStateStore.getDiscoverableVoiceStateForUser(userId);
    }
    tmp4 = voiceStateForUser;
  }
};
export { getVisibleUserVoiceActivity };
