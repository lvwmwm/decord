// Module ID: 5609
// Function ID: 47689
// Name: canUseGuildSpace
// Dependencies: [3758, 653, 5610, 566, 2]
// Exports: canUseGuildSpace, useCanUseGuildSpace

// Module 5609 (canUseGuildSpace)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("items").fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export function canUseGuildSpace(guild, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = function useCanUseGuildSpace(id, useGuildActionRows) {
  const _require = id;
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  const guildSpaceExperimentEnabled = _require(5610).useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  const obj = _require(5610);
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.MANAGE_GUILD, closure_0);
    }
    return canResult;
  }, items1);
  return false;
};
