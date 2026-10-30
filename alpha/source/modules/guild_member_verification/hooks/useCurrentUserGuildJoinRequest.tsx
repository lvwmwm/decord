// Module ID: 6914
// Function ID: 6915
// Name: useCurrentUserGuildJoinRequest
// Dependencies: [5041, 504, 2]
// Exports: useCurrentUserGuildJoinRequest

// Module 6914 (useCurrentUserGuildJoinRequest)
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5041 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export function useCurrentUserGuildJoinRequest(guildId) {
  _require = guildId;
  const items = [UserGuildJoinRequestStore];
  const items1 = [guildId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let request = null;
    if (null != guildId) {
      request = UserGuildJoinRequestStore.getRequest(tmp);
    }
    return request;
  }, items1);
}
