// Module ID: 8435
// Function ID: 8436
// Name: useCurrentUserGuildJoinRequest
// Dependencies: [4127, 589, 2]
// Exports: useCurrentUserGuildJoinRequest

// Module 8435 (useCurrentUserGuildJoinRequest)
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
