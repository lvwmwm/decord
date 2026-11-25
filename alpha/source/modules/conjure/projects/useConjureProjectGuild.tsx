// Module ID: 18726
// Function ID: 18727
// Name: useConjureProjectGuild
// Dependencies: [4883, 6903, 504, 2]
// Exports: default

// Module 18726 (useConjureProjectGuild)
import GuildStore from "GuildStore" /* 4883 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectGuild.tsx");

export default function useConjureProjectGuild(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureProjectStore, GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    let tmp3 = null;
    if (null != guild_id) {
      let guild = GuildStore.getGuild(guild_id);
      if (guild == null) {
        guild = null;
      }
      tmp3 = guild;
    }
    return tmp3;
  }, items1);
};
