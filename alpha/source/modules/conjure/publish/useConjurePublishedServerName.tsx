// Module ID: 13541
// Function ID: 13542
// Name: useConjurePublishedServerName
// Dependencies: [5114, 6954, 504, 2]
// Exports: default

// Module 13541 (useConjurePublishedServerName)
import GuildStore from "GuildStore" /* 5114 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedServerName.tsx");

export default function useConjurePublishedServerName(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureProjectStore, GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let tmp2 = null;
    if (null != project) {
      tmp2 = null;
      if ("guild" === project.install_scope) {
        tmp2 = null;
        if (null != project.guild_id) {
          let guild = GuildStore.getGuild(project.guild_id);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
      }
    }
    return tmp2;
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj3 = { guildId: null, name: null };
    ({ id: obj2.guildId, name: obj2.name } = stateFromStores);
    tmp2 = obj3;
  }
  return tmp2;
};
