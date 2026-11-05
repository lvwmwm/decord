// Module ID: 13235
// Function ID: 13236
// Name: useConjureProjectShareTarget
// Dependencies: [5014, 504, 1113, 3995, 2]
// Exports: default, isConjureProjectWithoutServer

// Module 13235 (useConjureProjectShareTarget)
import _modDef3995 from "module_3995" /* 3995 */;
import GuildStore from "GuildStore" /* 5014 */;
import size from "module_2" /* 2 */;

function useConjureProjectShareTargetDetails(project) {
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
    tmp5 = null;
    if (null == project.install_scope_setup) {
      let tmp6;
      if ("user" === project.install_scope) {
        const obj2 = { kind: "user", label: intl.string(_modDef3995.KxFFKT) };
        intl = tmp2(1113).intl;
        tmp6 = obj2;
      } else {
        tmp6 = null;
        if ("guild" === project.install_scope) {
          tmp6 = null;
          if (null != stateFromStores) {
            tmp6 = { kind: "guild", label: stateFromStores.name, guild: stateFromStores };
            const obj3 = { kind: "guild", label: stateFromStores.name, guild: stateFromStores };
          }
        }
      }
      tmp5 = tmp6;
    }
  }
  return tmp5;
}
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectShareTarget.tsx");

export default function useConjureProjectShareTarget(project) {
  const tmp = useConjureProjectShareTargetDetails(project);
  let label;
  if (tmp != null) {
    label = tmp.label;
  }
  if (label == null) {
    label = null;
  }
  return label;
};
export { useConjureProjectShareTargetDetails };
export function isConjureProjectWithoutServer(project) {
  return "guild" === project.install_scope && null == project.guild_id && null == project.install_scope_setup;
}
