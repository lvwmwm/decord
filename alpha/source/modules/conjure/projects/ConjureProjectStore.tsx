// Module ID: 6844
// Function ID: 6845
// Name: ConjureProjectStore
// Dependencies: [32, 1383, 6845, 504, 572, 2]
// Exports: canPublishProject, canRemixProject

// Module 6844 (ConjureProjectStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6845 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1383 */;
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
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let c8 = null;
const map3 = new Map();
let set = new Set();
const set1 = new Set();
let c12 = false;
let maxProjects = null;
let c14 = false;
let obj = null;
const set2 = new Set();
const map4 = new Map();
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
    return c12;
  }
  getMaxProjects() {
    return maxProjects;
  }
  hasFetchedProjectLimit() {
    return c14;
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
  getSharedProjects(id) {
    const items = [];
    const values = map.values();
    for (const item10010 of values) {
      let tmp2 = item10010;
      let tmp4 = isProjectOwner(item10010);
      if (!tmp4) {
        tmp4 = tmp2.guild_id !== id;
      }
      if (!tmp4) {
        let arr = items.push(tmp2);
      }
      continue;
    }
    return items;
  }
  getSharedWithMeProjects() {
    const arr = Array.from(map.values());
    return arr.filter((owner_user_id) => {
      owner_user_id = owner_user_id.owner_user_id;
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      let tmp4 = owner_user_id !== id;
      if (tmp4) {
        obj = ConjureProjectTypes;
        tmp4 = obj.isProjectGuildCollaborationEnabled(owner_user_id) && null != owner_user_id.guild_id;
        obj.isProjectGuildCollaborationEnabled(owner_user_id) && null != owner_user_id.guild_id;
      }
      return tmp4;
    });
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
  getGlobalSelectedProjectId() {
    return c8;
  }
  getProjectLoadStatus(projectId) {
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getProjectsFetchState() {
    return obj;
  }
  hasFetchedGuildProjects(id) {
    return set2.has(id);
  }
  getGuildProjectsFetchState(guildId) {
    let str = map4.get(guildId);
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
          if (null == c8) {
            if (0 === map3.size) {
              if (0 === set.size) {
                if (0 === set2.size) {
                  if (null == obj) {
                    if (null == maxProjects) {
                      const tmp10 = c14;
                      if (!tmp10) {
                        return false;
                      }
                    }
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
    c8 = null;
    map3.clear();
    set.clear();
    set1.clear();
    set2.clear();
    map4.clear();
    obj = null;
    c12 = false;
    success = "unattempted";
    maxProjects = null;
    c14 = false;
  },
  CONJURE_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map4.set(guildId, "loading");
    } else {
      success = "loading";
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let first;
    let guildId;
    let projects;
    let tmp3;
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
    const found = projects.filter((view_only) => true !== view_only.view_only);
    set = new Set(found.map((id) => id.id));
    let tmp2 = map[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp4 = _slicedToArray;
      [first, tmp8] = tmp3;
      let tmp7 = first;
      let hasItem = set.has(first);
      if (!hasItem) {
        let tmp10 = set1;
        let tmp11 = first;
        hasItem = set1.has(tmp7);
      }
      if (!hasItem) {
        let tmp13 = tmp8;
        let tmp14 = isProjectOwner(tmp8);
        if (!tmp14) {
          let tmp15 = null != guildId;
          if (tmp15) {
            tmp15 = tmp8.guild_id === guildId;
          }
          tmp14 = tmp15;
        }
        if (tmp14) {
          let deleteResult = map.delete(tmp7);
        }
      }
      continue;
    }
    for (const item10050 of found) {
      let result = map.set(item10050.id, item10050);
      let deleteResult1 = set1.delete(item10050.id);
      continue;
    }
    if (null != guildId) {
      set2.add(guildId);
      const result1 = map4.set(guildId, "success");
    }
    pruneProjectScopedState();
    c12 = true;
    success = "success";
    ({ type: "success", fetchedAt: Date.now() });
  },
  CONJURE_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map4.set(guildId, "error");
    } else {
      success = "error";
    }
    ({ type: "error", fetchedAt: Date.now() });
  },
  CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function handleProjectLimitFetchSettle(maxProjects) {
    maxProjects = maxProjects.maxProjects;
    c14 = true;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: function handleProjectCreateSuccess(project) {
    project = project.project;
    const result = map.set(project.id, project);
    set1.add(project.id);
  },
  CONJURE_PROJECT_UPDATE_SUCCESS: function handleProjectUpdateSuccess(project) {
    project = project.project;
    const result = map.set(project.id, project);
  },
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
    set1.delete(projectId);
    map1.delete(projectId);
    const tmp6 = map2[Symbol.iterator]();
    while (tmp6 !== undefined) {
      let tmp9 = _slicedToArray(tmp7, 2);
      let first = tmp9[0];
      if (tmp9[1] === projectId) {
        let deleteResult4 = map2.delete(first);
      }
      continue;
    }
    if (c8 === projectId) {
      c8 = null;
    }
    map3.delete(projectId);
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
  },
  CONJURE_PROJECT_GLOBAL_SELECT: function handleProjectGlobalSelect(projectId) {
    projectId = projectId.projectId;
    if (c8 === projectId) {
      return false;
    } else {
      c8 = projectId;
    }
  },
  CONJURE_PROJECT_GLOBAL_CLEAR: function handleProjectGlobalClear(projectId) {
    if (c8 !== projectId.projectId) {
      return false;
    } else {
      c8 = null;
    }
  },
  CONJURE_PROJECT_LOAD_STATUS: function handleProjectLoadStatus(arg0) {
    let projectId;
    let status;
    ({ projectId, status } = arg0);
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    if (value === status) {
      return false;
    } else if (null == status) {
      map3.delete(projectId);
    } else {
      const result = obj.set(projectId, status);
    }
  }
};
const conjureProjectStore = new ConjureProjectStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureProjectStore.tsx");

export default conjureProjectStore;
export { isProjectOwner };
export function canPublishProject(project) {
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
}
export function canRemixProject(project) {
  const owner_user_id = project.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let isProjectPublicResult = owner_user_id === id;
  if (!isProjectPublicResult) {
    obj = ConjureProjectTypes;
    isProjectPublicResult = obj.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
    obj.isProjectGuildCollaborationEnabled(project) && null != project.guild_id;
  }
  if (!isProjectPublicResult) {
    const obj2 = ConjureProjectTypes;
    isProjectPublicResult = obj2.isProjectPublic(project);
  }
  return isProjectPublicResult;
}
