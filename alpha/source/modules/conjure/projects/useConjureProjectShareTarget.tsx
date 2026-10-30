// Module ID: 14671
// Function ID: 14672
// Name: useConjureProjectShareTarget
// Dependencies: [4880, 504, 1114, 3865, 2]
// Exports: default

// Module 14671 (useConjureProjectShareTarget)
import _modDef3865 from "module_3865" /* 3865 */;
import GuildStore from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectShareTarget.tsx");

export default function useConjureProjectShareTarget(guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let tmp2 = guild_id;
  const items = [GuildStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != guild_id) {
      const guild = GuildStore.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (name == null) {
        name = null;
      }
      tmp2 = name;
    }
    return tmp2;
  }, items1);
  let tmp5 = null;
  if (null != guild_id) {
    tmp5 = null;
    if (null == guild_id.install_scope_setup) {
      if ("user" === guild_id.install_scope) {
        const intl = tmp2(1114).intl;
        stateFromStores = intl.string(_modDef3865.KxFFKT);
      }
      tmp5 = stateFromStores;
    }
  }
  return tmp5;
};
