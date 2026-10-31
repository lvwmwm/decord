// Module ID: 7402
// Function ID: 7403
// Name: canUseGuildSpace
// Dependencies: [4885, 4946, 1072, 504, 7403, 2]
// Exports: canUseGuildSpace, isGuildSpaceAdmin, useCanUseGuildSpace, useIsGuildSpaceAdmin

// Module 7402 (canUseGuildSpace)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export function isGuildSpaceAdmin(arg0) {
  const canResult = null != arg0 && PermissionStore.can(Permissions.MANAGE_GUILD, arg0);
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
