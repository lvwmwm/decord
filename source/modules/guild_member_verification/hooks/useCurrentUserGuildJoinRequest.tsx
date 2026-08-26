// Module ID: 8654
// Function ID: 8655
// Name: useCurrentUserGuildJoinRequest
// Dependencies: [4267, 589, 2]
// Exports: useCurrentUserGuildJoinRequest

// Module 8654 (useCurrentUserGuildJoinRequest)
import closure_2 from "handleGatewayJoinRequestUpdate" /* 4267 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = function useCurrentUserGuildJoinRequest(guildId) {
  const _require = guildId;
  const items = [closure_2];
  const items1 = [guildId];
  return _require(589).useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = closure_1_2.getRequest(tmp);
    }
    return request;
  }, items1);
};
