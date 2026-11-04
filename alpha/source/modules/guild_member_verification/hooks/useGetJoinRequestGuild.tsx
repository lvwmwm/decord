// Module ID: 14950
// Function ID: 14951
// Name: useGetJoinRequestGuild
// Dependencies: [19, 5173, 504, 7051, 2]
// Exports: default

// Module 14950 (useGetJoinRequestGuild)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 7051 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5173 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserGuildJoinRequestStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = UserGuildJoinRequestStore.getRequest(tmp);
    }
    return request;
  });
  const items1 = [UserGuildJoinRequestStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores1;
    if (!tmp) {
      const obj = GuildJoinRequestActionCreatorsDefault;
      const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
    }
  }, items2);
  return stateFromStores;
};
