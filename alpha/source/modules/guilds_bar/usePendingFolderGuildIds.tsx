// Module ID: 12694
// Function ID: 12695
// Name: usePendingFolderGuildIds
// Dependencies: [5001, 4843, 558, 576, 504, 2]
// Exports: getPendingFolderGuildIds

// Module 12694 (usePendingFolderGuildIds)
import react from "react" /* 576 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5001 */;
import GuildStore from "GuildStore" /* 4843 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const f115237 = (item) => null == closure_0[item];
function getPendingFolderGuildIds() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserGuildJoinRequestStore, GuildStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter(f115237);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingFolderGuildIds() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserGuildJoinRequestStore, GuildStore];
    const fn = function u() {
      let obj;
      let obj2;
      const items = [UserGuildJoinRequestStore, GuildStore];
      [obj, obj2] = items;
      const guildIds = obj.computeGuildIds();
      const guilds = obj2.getGuilds();
      return guildIds.filter(f115237);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresArray(tmp4, tmp5);
}) : (function usePendingFolderGuildIds() {
  const obj = get_initialized;
  let items = [UserGuildJoinRequestStore, GuildStore];
  return obj.useStateFromStoresArray(items, () => {
    let obj;
    let obj2;
    const items = [UserGuildJoinRequestStore, GuildStore];
    [obj, obj2] = items;
    const guildIds = obj.computeGuildIds();
    const guilds = obj2.getGuilds();
    return guildIds.filter(f115237);
  });
});
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default tmp2;
export { getPendingFolderGuildIds };
