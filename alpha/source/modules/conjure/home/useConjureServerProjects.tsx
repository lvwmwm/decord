// Module ID: 13120
// Function ID: 13121
// Name: useConjureServerProjects
// Dependencies: [6964, 13121, 504, 2]
// Exports: conjureProjectPointsAtGuild, default

// Module 13120 (useConjureServerProjects)
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureServerProjects.tsx");

export default function useConjureServerProjects(arg0) {
  let closure_0;
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let obj4;
  _require = arg0;
  const obj = {
    mine: obj2.useConjureProjectsByActivity(() => {
      const ownedProjects = ConjureProjectStore.getOwnedProjects();
      return ownedProjects.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
    }, items),
    shared: obj3.useConjureProjectsByActivity(() => ConjureProjectStore.getSharedProjects(closure_0), items1),
    fetchState: obj4.useStateFromStores(items2, () => ConjureProjectStore.getGuildProjectsFetchState(closure_0), items3)
  };
  items = [arg0];
  items1 = [arg0];
  obj2 = require("useConjureHomeOwnProjects");
  items2 = [ConjureProjectStore];
  items3 = [arg0];
  obj3 = require("useConjureHomeOwnProjects");
  obj4 = require("get initialized");
  return obj;
};
export function conjureProjectPointsAtGuild(guild_id, guildId) {
  return guild_id.guild_id === guildId || guild_id.preview_guild_id === guildId;
}
