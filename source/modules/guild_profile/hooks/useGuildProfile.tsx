// Module ID: 8462
// Function ID: 67288
// Name: useGuildProfile
// Dependencies: [5, 31, 8461, 566, 8463, 2]
// Exports: useGuildProfile

// Module 8462 (useGuildProfile)
import set from "set";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  const _require = guildId;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getProfile(closure_0));
  const items1 = [_isNativeReflectConstruct];
  obj = { guildProfile: stateFromStores };
  // CreateGeneratorClosureLongIndex (0x67)
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_4.getFetchStatus(closure_0));
  const items2 = [guildId];
  obj.fetchGuildProfile = React.useCallback(callback(tmp), items2);
  obj.fetchStatus = stateFromStores1;
  return obj;
};
