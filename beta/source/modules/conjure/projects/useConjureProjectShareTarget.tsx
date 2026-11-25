// Module ID: 13793
// Function ID: 13794
// Name: useConjureProjectShareTarget
// Dependencies: [4784, 504, 1112, 4190, 2]
// Exports: isConjureProjectWithoutServer, useConjureProjectShareTargetDetails

// Module 13793 (useConjureProjectShareTarget)
import _modDef4190 from "module_4190" /* 4190 */;
import GuildStore from "GuildStore" /* 4784 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectShareTarget.tsx");

export function useConjureProjectShareTargetDetails(project) {
  let intl;
  let guild_id;
  if (project != null) {
    guild_id = project.guild_id;
  }
  let tmp2 = guild_id;
  const items = [GuildStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != guild_id) {
      let guild = GuildStore.getGuild(tmp);
      if (guild == null) {
        guild = null;
      }
      tmp2 = guild;
    }
    return tmp2;
  }, items1);
  let tmp5 = null;
  if (null != project) {
    let tmp6;
    if ("user" === project.install_scope) {
      const obj2 = { kind: "user", label: intl.string(_modDef4190.KxFFKT) };
      intl = tmp2(1112).intl;
      tmp6 = obj2;
    } else {
      tmp6 = null;
      if (null != stateFromStores) {
        tmp6 = { kind: "guild", label: stateFromStores.name, guild: stateFromStores };
        const obj3 = { kind: "guild", label: stateFromStores.name, guild: stateFromStores };
      }
    }
    tmp5 = tmp6;
  }
  return tmp5;
}
export function isConjureProjectWithoutServer(project) {
  return "guild" === project.install_scope && null == project.guild_id;
}
