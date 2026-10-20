// Module ID: 6721
// Function ID: 6722
// Name: ConjureProjectStore
// Dependencies: [32, 1392, 6722, 504, 584, 2]
// Exports: canPublishProject, canRemixProject

// Module 6721 (ConjureProjectStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6722 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

function isProjectOwner(item10010) {
  const owner_user_id = item10010.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return owner_user_id === id;
}
function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let set = new Set();
let c9 = false;
let maxProjects = null;
let c11 = false;
let obj = null;
const set1 = new Set();
const map3 = new Map();
let success = "unattempted";
const Store = get_initializedDefault.Store;
class ConjureProjectStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getOwnedProjects() {
    const arr = Array.from(map.values());
    return arr.filter(isProjectOwner);
  }
  hasFetchedOwnedProjects() {
    return c9;
  }
  getMaxProjects() {
    return maxProjects;
  }
  hasFetchedProjectLimit() {
    return c11;
  }
  getProject(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  findProjectByApplicationId(applicationId) {
    const values = map.values();
    for (const item10009 of values) {
      obj.return();
      return item10009;
    }
    return null;
  }
  getSharedProjects(guildId) {
    const items = [];
    const values = map.values();
    for (const item10010 of values) {
      let tmp2 = item10010;
      let tmp4 = isProjectOwner(item10010);
      if (!tmp4) {
        tmp4 = tmp2.guild_id !== guildId;
      }
      if (!tmp4) {
        let arr = items.push(tmp2);
      }
      continue;
    }
    return items;
  }
  getIntegrationStatus(arg0) {
    let value = map1.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isProjectDeleting(id) {
    return set.has(id);
  }
  getSelectedProjectId(guildId) {
    let value = map2.get(guildId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getProjectsFetchState() {
    return obj;
  }
  hasFetchedGuildProjects(id) {
    return set1.has(id);
  }
  getGuildProjectsFetchState(guildId) {
    let str = map3.get(guildId);
    if (str == null) {
      str = "unattempted";
    }
    return str;
  }
  getOwnedProjectsFetchState() {
    return success;
  }
  isConjureProjectApplication(applicationId) {
    let tmp = null != applicationId;
    if (tmp) {
      const self = this;
      tmp = null != this.findProjectByApplicationId(applicationId);
    }
    return tmp;
  }
}
const prototype = ConjureProjectStore.prototype;
obj = {
  LOGOUT: function handleLogout() {
    obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === set.size) {
            if (0 === set1.size) {
              if (null == obj) {
                if (null == maxProjects) {
                  const tmp8 = c11;
                  if (!tmp8) {
                    return false;
                  }
                }
              }
            }
          }
        }
      }
    }
    obj.clear();
    map1.clear();
    map2.clear();
    set.clear();
    set1.clear();
    map3.clear();
    obj = null;
    c9 = false;
    success = "unattempted";
    maxProjects = null;
    c11 = false;
  },
  CONJURE_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "loading");
    } else {
      success = "loading";
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let guildId;
    let projects;
    let tmp3;
    let tmp6;
    let tmp8;
    function pruneProjectScopedState() {
      const keys = set2.keys();
      for (const item10009 of keys) {
        let tmp2 = item10009;
        if (!set.has(item10009)) {
          let deleteResult = set2.delete(tmp2);
        }
        continue;
      }
      const tmp8 = set3[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let tmp11 = _slicedToArray(tmp9, 2);
        let first = tmp11[0];
        if (!set.has(tmp11[1])) {
          let deleteResult1 = set3.delete(first);
        }
        continue;
      }
    }
    ({ projects, guildId } = arg0);
    set = new Set(projects.map((id) => id.id));
    let tmp2 = map[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp4 = _slicedToArray;
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      let tmp7 = tmp6;
      if (!set.has(tmp6)) {
        let tmp9 = isProjectOwner;
        let tmp10 = tmp8;
        let tmp11 = isProjectOwner(tmp8);
        if (!tmp11) {
          let tmp12 = null != guildId;
          if (tmp12) {
            let tmp13 = tmp8;
            tmp12 = tmp8.guild_id === guildId;
          }
          tmp11 = tmp12;
        }
        if (tmp11) {
          let tmp14 = map;
          let tmp15 = tmp6;
          let deleteResult = map.delete(tmp7);
        }
      }
      continue;
    }
    for (const item10044 of projects) {
      let result = map.set(item10044.id, item10044);
      continue;
    }
    if (null != guildId) {
      set1.add(guildId);
      const result1 = map3.set(guildId, "success");
    }
    pruneProjectScopedState();
    c9 = true;
    success = "success";
    ({ type: "success", fetchedAt: Date.now() });
  },
  CONJURE_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "error");
    } else {
      success = "error";
    }
    ({ type: "error", fetchedAt: Date.now() });
  },
  CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function handleProjectLimitFetchSettle(maxProjects) {
    maxProjects = maxProjects.maxProjects;
    c11 = true;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function handleProjectIntegrationStatusUpdate(projectId) {
    const result = map1.set(projectId.projectId, projectId.integrationStatus);
  },
  CONJURE_PROJECT_DELETE_START: function handleProjectDeleteStart(projectId) {
    set.add(projectId.projectId);
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set.delete(projectId);
    map.delete(projectId);
    map1.delete(projectId);
    const tmp5 = map2[Symbol.iterator]();
    while (tmp5 !== undefined) {
      let tmp8 = _slicedToArray(tmp6, 2);
      let first = tmp8[0];
      if (tmp8[1] === projectId) {
        let deleteResult3 = map2.delete(first);
      }
      continue;
    }
  },
  CONJURE_PROJECT_DELETE_FAIL: function handleProjectDeleteFail(projectId) {
    return set.delete(projectId.projectId);
  },
  CONJURE_PROJECT_SELECT: function handleProjectSelect(arg0) {
    let guildId;
    let projectId;
    ({ guildId, projectId } = arg0);
    let value = map2.get(guildId);
    if (value == null) {
      value = null;
    }
    if (value === projectId) {
      return false;
    } else if (null == projectId) {
      map2.delete(guildId);
    } else {
      const result = obj.set(guildId, projectId);
    }
  }
};
const conjureProjectStore = new ConjureProjectStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureProjectStore.tsx");

export default conjureProjectStore;
export { isProjectOwner };
export const canPublishProject = function canPublishProject(project) {
  const owner_user_id = project.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = owner_user_id === id;
  if (!tmp3) {
    obj = ConjureProjectTypes;
    tmp3 = obj.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
    obj.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
  }
  return tmp3;
};
export const canRemixProject = function canRemixProject(owner_user_id) {
  owner_user_id = owner_user_id.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let isProjectPublicResult = owner_user_id === id;
  if (!isProjectPublicResult) {
    obj = ConjureProjectTypes;
    isProjectPublicResult = obj.isProjectGuildCollaborationEnabled(owner_user_id) && null != owner_user_id.guild_id;
    obj.isProjectGuildCollaborationEnabled(owner_user_id) && null != owner_user_id.guild_id;
  }
  if (!isProjectPublicResult) {
    const obj2 = ConjureProjectTypes;
    isProjectPublicResult = obj2.isProjectPublic(owner_user_id);
  }
  return isProjectPublicResult;
};
