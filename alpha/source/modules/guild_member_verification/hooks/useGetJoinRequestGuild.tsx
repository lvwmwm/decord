// Module ID: 10044
// Function ID: 10045
// Name: useGetJoinRequestGuild
// Dependencies: [19, 4579, 504, 5760, 2]
// Exports: default

// Module 10044 (useGetJoinRequestGuild)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5760 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4579 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  _require = arg0;
  const items = [UserGuildJoinRequestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = UserGuildJoinRequestStore.getRequest(tmp);
    }
    return request;
  });
  let obj = require("initialize");
  const items1 = [UserGuildJoinRequestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = noop.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
    }
  }, items2);
  return stateFromStores;
};
