// Module ID: 13008
// Function ID: 13009
// Name: useConjureProjectShareTarget
// Dependencies: [4885, 504, 1113, 3868, 2]
// Exports: default, isConjureProjectWithoutServer

// Module 13008 (useConjureProjectShareTarget)
import _modDef3868 from "module_3868" /* 3868 */;
import GuildStore from "GuildStore" /* 4885 */;
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
        const obj2 = { kind: "user", label: intl.string(_modDef3868.KxFFKT) };
        intl = tmp2(1113).intl;
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
  return null == project.guild_id && "user" !== project.install_scope && null == project.install_scope_setup;
}
