// Module ID: 7456
// Function ID: 7457
// Name: conjureServerProject
// Dependencies: [5011, 6899, 7457, 7458, 2]
// Exports: conjureProjectRoute, conjureServerAppGuildId, conjureServerProjectGuildId, getConjureServerProjects

// Module 7456 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 7457 */;
import conjurePageRoutes from "conjurePageRoutes" /* 7458 */;
import GuildStore from "GuildStore" /* 5011 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  if (null != project) {
    if (null == project.install_scope_setup) {
      if ("guild" === project.install_scope) {
        const obj = ConjureActivity;
        return obj.conjureProjectGuildId(project);
      } else {
        let guild_id = project.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        let tmp2 = null;
        if (null != guild_id) {
          tmp2 = null;
          if (null != GuildStore.getGuild(guild_id)) {
            tmp2 = guild_id;
          }
        }
        return tmp2;
      }
    }
  }
  return null;
}
export function conjureServerAppGuildId(nextResult) {
  let install_scope;
  if (nextResult != null) {
    install_scope = nextResult.install_scope;
  }
  let tmp2 = null;
  if ("guild" === install_scope) {
    let result = null;
    if (null != nextResult) {
      result = null;
      if (null == nextResult.install_scope_setup) {
        if ("guild" === nextResult.install_scope) {
          const obj = ConjureActivity;
          result = obj.conjureProjectGuildId(nextResult);
        } else {
          let guild_id = nextResult.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          let tmp5 = null;
          if (null != guild_id) {
            tmp5 = null;
            if (null != GuildStore.getGuild(guild_id)) {
              tmp5 = guild_id;
            }
          }
          result = tmp5;
        }
      }
    }
    tmp2 = result;
  }
  return tmp2;
}
export function getConjureServerProjects(id) {
  let closure_0 = id;
  const items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope_setup) => {
    let result = null;
    if (null != install_scope_setup) {
      result = null;
      if (null == install_scope_setup.install_scope_setup) {
        if ("guild" === install_scope_setup.install_scope) {
          const obj = ConjureActivity;
          result = obj.conjureProjectGuildId(install_scope_setup);
        } else {
          let guild_id = install_scope_setup.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          let tmp3 = null;
          if (null != guild_id) {
            tmp3 = null;
            if (null != GuildStore.getGuild(guild_id)) {
              tmp3 = guild_id;
            }
          }
          result = tmp3;
        }
      }
    }
    return result === id;
  });
}
export function conjureProjectRoute(arg0) {
  let result1;
  const project = ConjureProjectStore.getProject(arg0);
  let result = null;
  if (null != project) {
    result = null;
    if (null == project.install_scope_setup) {
      if ("guild" === project.install_scope) {
        const obj = ConjureActivity;
        result = obj.conjureProjectGuildId(project);
      } else {
        let guild_id = project.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        let tmp4 = null;
        if (null != guild_id) {
          tmp4 = null;
          if (null != GuildStore.getGuild(guild_id)) {
            tmp4 = guild_id;
          }
        }
        result = tmp4;
      }
    }
  }
  if (null != result) {
    const obj3 = conjurePageRoutes;
    result1 = obj3.conjureServerProjectRoute(result, arg0);
  } else {
    const obj2 = conjurePageRoutes;
    result1 = obj2.conjurePageRoute(arg0);
  }
  return result1;
}
