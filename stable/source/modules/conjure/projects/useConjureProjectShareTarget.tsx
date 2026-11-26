// Module ID: 10552
// Function ID: 10553
// Name: useConjureProjectShareTarget
// Dependencies: [5177, 504, 1113, 4131, 2]
// Exports: default, isConjureProjectWithoutServer, useConjureProjectShareTargetDetails

// Module 10552 (useConjureProjectShareTarget)
import _modDef4131 from "module_4131" /* 4131 */;
import GuildStore from "GuildStore" /* 5177 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectShareTarget.tsx");

export default function useConjureProjectShareTarget(guild_id) {
  let intl;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
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
  if (null != guild_id) {
    let tmp6;
    if ("user" === guild_id.install_scope) {
      const obj2 = { kind: "user", label: intl.string(_modDef4131.KxFFKT) };
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
  let label;
  if (tmp5 != null) {
    label = tmp5.label;
  }
  if (label == null) {
    label = null;
  }
  return label;
};
export function useConjureProjectShareTargetDetails(project) {
  let intl;
  let guild_id;
  if (project != null) {
    guild_id = project.guild_id;
  }
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
  const tmp2 = guild_id;
  if (null != project) {
    let tmp6;
    if ("user" === project.install_scope) {
      const obj2 = { kind: "user", label: intl.string(_modDef4131.KxFFKT) };
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
  return tmp5;
}
export function isConjureProjectWithoutServer(project) {
  return "guild" === project.install_scope && null == project.guild_id;
}
