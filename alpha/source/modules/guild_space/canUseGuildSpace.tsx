// Module ID: 7459
// Function ID: 7460
// Name: canUseGuildSpace
// Dependencies: [4788, 4849, 1071, 504, 7460, 7461, 2]
// Exports: canUseGuildSpace, isGuildSpaceAdmin, isGuildSpaceVisible, isGuildSpaceVisibleToMembers, useCanUseGuildSpace, useIsGuildSpaceAdmin

// Module 7459 (canUseGuildSpace)
import Constants from "Constants" /* 1071 */;
import GuildSpaceTypes from "GuildSpaceTypes" /* 7460 */;
import GuildStore from "GuildStore" /* 4788 */;
import PermissionStore from "PermissionStore" /* 4849 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export function isGuildSpaceAdmin(guild) {
  const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  return canResult;
}
export function useIsGuildSpaceAdmin(arg0) {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_GUILD, tmp);
    return canResult;
  }, items1);
}
export function isGuildSpaceVisibleToMembers(guild) {
  const guildSpaceSettings = guild.guildSpaceSettings;
  const tmp = null != guildSpaceSettings && guildSpaceSettings.enabled && guildSpaceSettings.publish_status === GuildSpaceTypes.GuildSpacePublishStatus.PUBLISHED;
  return tmp;
}
export function isGuildSpaceVisible(guild, arg1) {
  const guildSpaceSettings = guild.guildSpaceSettings;
  let enabled;
  if (guildSpaceSettings != null) {
    enabled = guildSpaceSettings.enabled;
  }
  let tmp3 = false !== enabled;
  if (tmp3) {
    let tmp4 = arg1;
    if (!tmp4) {
      const guildSpaceSettings2 = guild.guildSpaceSettings;
      tmp4 = null != guildSpaceSettings2 && guildSpaceSettings2.enabled && guildSpaceSettings2.publish_status === GuildSpaceTypes.GuildSpacePublishStatus.PUBLISHED;
      const tmp5 = null != guildSpaceSettings2 && guildSpaceSettings2.enabled && guildSpaceSettings2.publish_status === GuildSpaceTypes.GuildSpacePublishStatus.PUBLISHED;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
export function canUseGuildSpace(guild, getChannelIdForGuildTransition) {
  return false;
}
export function useCanUseGuildSpace(id, useGuildActionRows) {
  _require = id;
  const tmp = _require;
  const useGuildSpaceExperimentEnabled = require("GuildSpaceExperiment").useGuildSpaceExperimentEnabled;
  const tmp3 = require("GuildSpaceExperiment");
  const guildSpaceExperimentEnabled = useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  const items = [GuildStore];
  const items1 = [id];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => GuildStore.getGuild(id), items1);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(items2, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_GUILD, tmp);
    return canResult;
  }, items3);
  return false;
}
