// Module ID: 9158
// Function ID: 9159
// Name: useCurrentUserGuildJoinRequest
// Dependencies: [4007, 589, 2]
// Exports: useCurrentUserGuildJoinRequest

// Module 9158 (useCurrentUserGuildJoinRequest)
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = function useCurrentUserGuildJoinRequest(guildId) {
  const _require = guildId;
  const items = [handleGatewayJoinRequestUpdate];
  const items1 = [guildId];
  return _require(589).useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = outer1_2.getRequest(tmp);
    }
    return request;
  }, items1);
};
