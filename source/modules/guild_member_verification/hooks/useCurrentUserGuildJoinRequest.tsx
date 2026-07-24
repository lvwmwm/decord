// Module ID: 9198
// Function ID: 72041
// Name: useCurrentUserGuildJoinRequest
// Dependencies: [3948, 566, 2]
// Exports: useCurrentUserGuildJoinRequest

// Module 9198 (useCurrentUserGuildJoinRequest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = function useCurrentUserGuildJoinRequest(guildId) {
  const _require = guildId;
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  return _require(566).useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = outer1_2.getRequest(closure_0);
    }
    return request;
  }, items1);
};
