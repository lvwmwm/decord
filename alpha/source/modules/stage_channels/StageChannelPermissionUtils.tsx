// Module ID: 6704
// Function ID: 6705
// Name: StageChannelPermissionUtils
// Dependencies: [4942, 4876, 502, 4858, 4880, 4941, 4863, 1072, 1084, 4946, 4866, 504, 2]
// Exports: canLurkerListen, createModeratorOverwrite, createOrUpdateModeratorOverwrite, isEmptyOverwrite, removeModeratorOverwrite, useCanCreateStageChannelByGuild, useCanModerateRequestToSpeak, useCanUpdateStageChannelModerators

// Module 6704 (StageChannelPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4866 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let unpackModuleId;
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: c10, Permissions: unpackModuleId } = Constants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export function createModeratorOverwrite(id, MEMBER, arg2) {
  let MODERATE_STAGE_CHANNEL_PERMISSIONS;
  let allow;
  let combine;
  let deny;
  let remove;
  let tmp;
  if (arg2 != null) {
    tmp = arg2.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS), allow: combine(MODERATE_STAGE_CHANNEL_PERMISSIONS, allow) };
  deny = undefined;
  remove = BigFlagUtilsAll.remove;
  BigFlagUtilsAll;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = tmp2(4946).NONE;
  }
  combine = BigFlagUtilsAll.combine;
  allow = undefined;
  BigFlagUtilsAll;
  MODERATE_STAGE_CHANNEL_PERMISSIONS = StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = tmp2(4946).NONE;
  }
  return obj;
}
export function createOrUpdateModeratorOverwrite(id, type, deny) {
  let MODERATE_STAGE_CHANNEL_PERMISSIONS;
  let allow;
  let combine;
  let remove;
  const obj = { id, type, deny: remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS), allow: combine(MODERATE_STAGE_CHANNEL_PERMISSIONS, allow) };
  deny = undefined;
  remove = BigFlagUtilsAll.remove;
  BigFlagUtilsAll;
  if (deny != null) {
    deny = deny.deny;
  }
  if (deny == null) {
    deny = tmp(4946).NONE;
  }
  combine = BigFlagUtilsAll.combine;
  allow = undefined;
  BigFlagUtilsAll;
  MODERATE_STAGE_CHANNEL_PERMISSIONS = StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS;
  if (deny != null) {
    allow = deny.allow;
  }
  if (allow == null) {
    allow = tmp(4946).NONE;
  }
  return obj;
}
export function removeModeratorOverwrite(id, MEMBER, id2) {
  let allow;
  let deny;
  let remove;
  let tmp;
  if (id != null) {
    tmp = id.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny, allow: remove(allow, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS) };
  deny = undefined;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  allow = undefined;
  remove = BigFlagUtilsAll.remove;
  BigFlagUtilsAll;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  return obj;
}
export function isEmptyOverwrite(arg0) {
  let allow;
  let deny;
  ({ allow, deny } = arg0);
  const obj = BigFlagUtilsAll;
  let equalsResult = obj.equals(allow, PermissionUtilsAll.NONE);
  if (equalsResult) {
    const tmpResult = BigFlagUtilsAll;
    equalsResult = tmpResult.equals(deny, tmp(4946).NONE);
  }
  return equalsResult;
}
export function useCanCreateStageChannelByGuild(guildId) {
  _require = guildId;
  const items = [PermissionStore, AuthenticationStore, GuildStore];
  const items1 = [guildId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const id = AuthenticationStore.getId();
    const guild = GuildStore.getGuild(guildId);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(constants.COMMUNITY);
      if (hasItem) {
        hasItem = isGuildOwner(guild, id) || PermissionStore.can(StageChannelPermissions.CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
        const canResult = isGuildOwner(guild, id) || PermissionStore.can(StageChannelPermissions.CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }, items1);
}
export function useCanUpdateStageChannelModerators(id) {
  _require = id;
  const items = [PermissionStore, GuildStore, ChannelStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(id);
    let guildId;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let tmp5 = !PermissionStore.can(unpackModuleId.ADMINISTRATOR, getGuild(guildId));
    PermissionStore.can(unpackModuleId.ADMINISTRATOR, getGuild(guildId));
    const tmp3 = unpackModuleId;
    if (tmp5) {
      tmp5 = !obj2.can(tmp3.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    let canResult1 = !tmp5;
    if (tmp5) {
      canResult1 = obj2.can(StageChannelPermissions.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult1;
  }, items1);
}
export function useCanModerateRequestToSpeak(id) {
  _require = id;
  const items = [ChannelStore, PermissionStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const canResult = null != id && PermissionStore.can(unpackModuleId.MUTE_MEMBERS, ChannelStore.getChannel(tmp));
    return canResult;
  }, items1);
}
export function canLurkerListen(channel) {
  let tmp2 = !(null == channel || !channel.isGuildStageVoice());
  null == channel || !channel.isGuildStageVoice();
  if (tmp2) {
    let isLurkingResult = LurkingStore.isLurking(channel.guild_id);
    if (isLurkingResult) {
      isLurkingResult = StageInstanceStore.isPublic(channel.id) && PermissionStore.can(StageChannelPermissions.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      const canResult = StageInstanceStore.isPublic(channel.id) && PermissionStore.can(StageChannelPermissions.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    tmp2 = isLurkingResult;
  }
  return tmp2;
}
