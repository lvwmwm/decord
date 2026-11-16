// Module ID: 7017
// Function ID: 7018
// Name: ConjureProjectStore
// Dependencies: [32, 1388, 7018, 504, 572, 2]
// Exports: canPublishProject, canRemixProject

// Module 7017 (ConjureProjectStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

function isProjectOwner(project) {
  const owner_user_id = project.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return owner_user_id === id;
}
function isRailProject(owner_user_id) {
  owner_user_id = owner_user_id.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const hasItem = owner_user_id === id || set2.has(owner_user_id.id);
  return hasItem;
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let c8 = null;
const map3 = new Map();
let set = new Set();
const set1 = new Set();
const set2 = new Set();
const set3 = new Set();
let c14 = false;
let userId = null;
let closure_16 = 0;
let c17 = false;
let maxProjects = null;
let c19 = false;
let failureCode = null;
let obj = null;
const set4 = new Set();
const map4 = new Map();
let success = "unattempted";
let unattempted = "unattempted";
const Store = get_initializedDefault.Store;
class ConjureProjectStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getOwnedProjects() {
    const arr = Array.from(map.values());
    return arr.filter(isProjectOwner);
  }
  getRailProjects() {
    const arr = Array.from(map.values());
    return arr.filter(isRailProject);
  }
  isRailProject(owner_user_id) {
    owner_user_id = owner_user_id.owner_user_id;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    const hasItem = owner_user_id === id || set2.has(owner_user_id.id);
    return hasItem;
  }
  getUnloadedParticipatingProjectIds() {
    const arr = Array.from(set2);
    return arr.filter((item) => !set.has(item));
  }
  isProjectRunning(id) {
    return set3.has(id);
  }
  hasFetchedOwnedProjects() {
    return c17;
  }
  isReconnectListPending() {
    return c14;
  }
  getSessionGeneration() {
    return closure_16;
  }
  getMissingProjectsCheckedUserId() {
    return userId;
  }
  getMaxProjects() {
    return maxProjects;
  }
  hasFetchedProjectLimit() {
    return c19;
  }
  getProjectLimitFailureCode() {
    return failureCode;
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
    return set4.has(id);
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
  getSharedWithMeProjectsFetchState() {
    return unattempted;
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
    closure_16 = closure_16 + 1;
    obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (null == c8) {
            if (0 === map3.size) {
              if (0 === set.size) {
                if (0 === set2.size) {
                  if (0 === set3.size) {
                    const tmp7 = c14;
                    if (!tmp7) {
                      if (null == userId) {
                        if (0 === set4.size) {
                          if (null == obj) {
                            if (null == maxProjects) {
                              const tmp12 = c19;
                              if (!tmp12) {
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
    set3.clear();
    c14 = false;
    userId = null;
    set4.clear();
    map4.clear();
    obj = null;
    c17 = false;
    success = "unattempted";
    unattempted = "unattempted";
    maxProjects = null;
    c19 = false;
    failureCode = null;
  },
  CONJURE_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map4.set(guildId, "loading");
    } else {
      success = "loading";
      unattempted = "loading";
      c14 = false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let first;
    let guildId;
    let projects;
    let tmp3;
    let tmp8;
    function syncRunning(found) {
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (true === nextResult.running) {
          let addResult = set4.add(tmp2.id);
        } else {
          let deleteResult = set4.delete(tmp2.id);
        }
        continue;
      }
    }
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
          let deleteResult1 = set3.delete(tmp7);
        }
      }
      continue;
    }
    for (const item10053 of found) {
      let result = map.set(item10053.id, item10053);
      let deleteResult2 = set1.delete(item10053.id);
      continue;
    }
    syncRunning(found);
    if (null != guildId) {
      let addResult = set4.add(guildId);
      const result1 = map4.set(guildId, "success");
    } else {
      unattempted = "success";
    }
    pruneProjectScopedState();
    c17 = true;
    success = "success";
    ({ type: "success", fetchedAt: Date.now() });
  },
  CONJURE_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map4.set(guildId, "error");
    } else {
      success = "error";
      unattempted = "error";
    }
    ({ type: "error", fetchedAt: Date.now() });
  },
  CONJURE_PARTICIPATING_PROJECTS_MARK: function handleParticipatingProjectsMark(arg0) {
    let flag = false;
    const iter = arg0.projectIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let value = map.get(nextResult);
      let hasItem = null == value;
      if (!hasItem) {
        hasItem = isProjectOwner(tmp5);
      }
      if (!hasItem) {
        hasItem = set2.has(tmp2);
      }
      if (!hasItem) {
        let addResult = set2.add(tmp2);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  CONJURE_MISSING_PROJECTS_CHECK_START: function handleMissingProjectsCheckStart(userId) {
    userId = userId.userId;
    if (userId === userId) {
      return false;
    }
  },
  CONJURE_PROJECT_RUNNING_UPDATE: function handleProjectRunningUpdate(arg0) {
    let projectId;
    let running;
    ({ projectId, running } = arg0);
    obj = set2;
    if (set2.has(projectId)) {
      if (set3.has(projectId) === running) {
        return false;
      }
    }
    obj.add(projectId);
    if (running) {
      set3.add(projectId);
    } else {
      set3.delete(projectId);
    }
  },
  CONJURE_TURN_SETTLED: function handleTurnSettled(projectId) {
    projectId = projectId.projectId;
    obj = set2;
    if (set2.has(projectId)) {
      return false;
    } else {
      obj.add(projectId);
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    obj = set3;
    if (0 === set3.size) {
      return false;
    } else {
      obj.clear();
      const tmp2 = c17;
      if (tmp2) {
        c14 = true;
      }
    }
  },
  CONJURE_PROJECT_LIMIT_FETCH_SETTLE: function handleProjectLimitFetchSettle(maxProjects) {
    maxProjects = maxProjects.maxProjects;
    c19 = true;
    failureCode = maxProjects.failureCode;
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
    set2.delete(projectId);
    set3.delete(projectId);
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
