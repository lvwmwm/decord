// Module ID: 7236
// Function ID: 7237
// Name: conjureServerProject
// Dependencies: [5177, 5349, 7017, 7237, 7238, 2]
// Exports: conjureProjectRoute, conjureServerAppGuildId, conjureServerProjectGuildId, getConjureServerProjects, isConjureServerProjectIn

// Module 7236 (conjureServerProject)
import ConjureProjectStore2 from "ConjureProjectStore" /* 7017 */;
import ConjureActivity from "ConjureActivity" /* 7237 */;
import conjurePageRoutes from "conjurePageRoutes" /* 7238 */;
import GuildStore from "GuildStore" /* 5177 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
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
export function conjureServerAppGuildId(project) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let tmp2 = null;
  if ("guild" === install_scope) {
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
export function isConjureServerProjectIn(project, id) {
  let tmp = null != project;
  if (tmp) {
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
    let tmp9 = result === id;
    if (!tmp9) {
      let tmp11 = isProjectOwner(project);
      if (tmp11) {
        const guild_ids = project.guild_ids;
        let hasItem;
        if (guild_ids != null) {
          hasItem = guild_ids.includes(id);
        }
        tmp11 = true === hasItem;
      }
      tmp9 = tmp11;
    }
    tmp = tmp9;
  }
  return tmp;
}
export function getConjureServerProjects(id) {
  let closure_0 = id;
  const items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    let tmp2 = null != install_scope;
    if (tmp2) {
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
      let tmp9 = result === tmp;
      if (!tmp9) {
        let tmp11 = isProjectOwner(install_scope);
        if (tmp11) {
          const guild_ids = install_scope.guild_ids;
          let hasItem;
          if (guild_ids != null) {
            hasItem = guild_ids.includes(tmp);
          }
          tmp11 = true === hasItem;
        }
        tmp9 = tmp11;
      }
      tmp2 = tmp9;
    }
    return tmp2;
  });
}
export function conjureProjectRoute(arg0) {
  let result2;
  let tmp14;
  const project = ConjureProjectStore.getProject(arg0);
  const guildId = SelectedGuildStore.getGuildId();
  if (null == guildId) {
    let result = null;
    if (null != project) {
      if ("guild" === project.install_scope) {
        const obj2 = ConjureActivity;
        result = obj2.conjureProjectGuildId(project);
      } else {
        let guild_id = project.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        let tmp17 = null;
        if (null != guild_id) {
          tmp17 = null;
          if (null != GuildStore.getGuild(guild_id)) {
            tmp17 = guild_id;
          }
        }
        result = tmp17;
      }
    }
    tmp14 = result;
  } else {
    let tmp13 = null != project;
    if (tmp13) {
      let result1 = null;
      if (null != project) {
        if ("guild" === project.install_scope) {
          const obj = ConjureActivity;
          result1 = obj.conjureProjectGuildId(project);
        } else {
          let guild_id1 = project.guild_id;
          if (guild_id1 == null) {
            guild_id1 = null;
          }
          let tmp5 = null;
          if (null != guild_id1) {
            tmp5 = null;
            if (null != GuildStore.getGuild(guild_id1)) {
              tmp5 = guild_id1;
            }
          }
          result1 = tmp5;
        }
      }
      let tmp9 = result1 === guildId;
      if (!tmp9) {
        let tmp11 = isProjectOwner(project);
        if (tmp11) {
          const guild_ids = project.guild_ids;
          let hasItem;
          if (guild_ids != null) {
            hasItem = guild_ids.includes(guildId);
          }
          tmp11 = true === hasItem;
        }
        tmp9 = tmp11;
      }
      tmp13 = tmp9;
    }
    tmp14 = guildId;
  }
  if (null != tmp14) {
    const obj4 = conjurePageRoutes;
    result2 = obj4.conjureServerProjectRoute(tmp14, arg0);
  } else {
    const obj3 = conjurePageRoutes;
    result2 = obj3.conjurePageRoute(arg0);
  }
  return result2;
}
