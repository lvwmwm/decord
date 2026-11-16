// Module ID: 13980
// Function ID: 13981
// Name: useConjureServerProjects
// Dependencies: [7017, 10522, 504, 2]
// Exports: conjureProjectPointsAtGuild, default

// Module 13980 (useConjureServerProjects)
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
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
      return ownedProjects.filter((guild_id) => {
        let tmp2 = guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp;
        if (!tmp2) {
          const guild_ids = guild_id.guild_ids;
          let hasItem;
          if (guild_ids != null) {
            hasItem = guild_ids.includes(tmp);
          }
          tmp2 = true === hasItem;
        }
        return tmp2;
      });
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
export function conjureProjectPointsAtGuild(guild_id, arg1) {
  let tmp = guild_id.guild_id === arg1 || guild_id.preview_guild_id === arg1;
  if (!tmp) {
    const guild_ids = guild_id.guild_ids;
    let hasItem;
    if (guild_ids != null) {
      hasItem = guild_ids.includes(arg1);
    }
    tmp = true === hasItem;
  }
  return tmp;
}
