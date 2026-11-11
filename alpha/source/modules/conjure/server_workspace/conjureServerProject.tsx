// Module ID: 7173
// Function ID: 7174
// Name: conjureServerProject
// Dependencies: [5114, 6954, 7174, 7175, 2]
// Exports: conjureProjectRoute, conjureServerAppGuildId, conjureServerProjectGuildId, getConjureServerProjects

// Module 7173 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 7174 */;
import conjurePageRoutes from "conjurePageRoutes" /* 7175 */;
import GuildStore from "GuildStore" /* 5114 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  if (null == project) {
    return null;
  } else if ("guild" === project.install_scope) {
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
export function conjureServerAppGuildId(nextResult) {
  let install_scope;
  if (nextResult != null) {
    install_scope = nextResult.install_scope;
  }
  let tmp2 = null;
  if ("guild" === install_scope) {
    let result = null;
    if (null != nextResult) {
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
    tmp2 = result;
  }
  return tmp2;
}
export function getConjureServerProjects(id) {
  let closure_0 = id;
  const items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    let result = null;
    if (null != install_scope) {
      if ("guild" === install_scope.install_scope) {
        const obj = ConjureActivity;
        result = obj.conjureProjectGuildId(install_scope);
      } else {
        let guild_id = install_scope.guild_id;
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
    return result === id;
  });
}
export function conjureProjectRoute(arg0) {
  let result1;
  const project = ConjureProjectStore.getProject(arg0);
  let result = null;
  if (null != project) {
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
  if (null != result) {
    const obj3 = conjurePageRoutes;
    result1 = obj3.conjureServerProjectRoute(result, arg0);
  } else {
    const obj2 = conjurePageRoutes;
    result1 = obj2.conjurePageRoute(arg0);
  }
  return result1;
}
