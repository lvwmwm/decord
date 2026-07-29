// Module ID: 5660
// Function ID: 5661
// Name: canUseGuildSpace
// Dependencies: [3817, 676, 5661, 589, 2]
// Exports: canUseGuildSpace, useCanUseGuildSpace

// Module 5660 (canUseGuildSpace)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("experiment").fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export function canUseGuildSpace(getUncachedChannelPermissions, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = function useCanUseGuildSpace(id, useGuildActionRows) {
  const _require = id;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildSpaceExperimentEnabled = _require(5661).useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  const obj = _require(5661);
  const tmp = _require;
  const items = [getUncachedChannelPermissions];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  return false;
};
