// Module ID: 13252
// Function ID: 13253
// Name: useCurrentUserGuildJoinRequest
// Dependencies: [4826, 504, 2]
// Exports: useCurrentUserGuildJoinRequest

// Module 13252 (useCurrentUserGuildJoinRequest)
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4826 */;
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
