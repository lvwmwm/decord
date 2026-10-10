// Module ID: 10651
// Function ID: 10652
// Name: ConjureProjectStore
// Dependencies: [32, 1390, 6946, 10652, 504, 584, 2]
// Exports: canPublishProject, canRemixProject

// Module 10651 (ConjureProjectStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;
import ConjureSequencedBuffer from "ConjureSequencedBuffer" /* 10652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1390 */;
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
function logSeq(log) {
  return log.log.seq;
}
function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
function handleLogAppend(arg0) {
  let log;
  let projectId;
  ({ projectId, log } = arg0);
  let str = map5.get(projectId);
  obj = map5;
  if (null == str) {
    const self = this;
    const self2 = this;
    const conjureSequencedBuffer = new ConjureSequencedBuffer.ConjureSequencedBuffer(tmp);
    const result = obj.set(projectId, conjureSequencedBuffer);
    str = conjureSequencedBuffer;
  }
  if (null != log.seq) {
    if (-1 !== str.indexOfSeq(log.seq)) {
      return false;
    }
  }
  const obj2 = { key: sum, log };
  sum = sum + 1;
  str.insert(obj2);
  const trimmed = str.trim(500);
}
function handleHistoryLoadSettle(status) {
  let num;
  let projectId;
  let scope;
  ({ projectId, scope } = status);
  if ("failed" !== status.status) {
    const obj2 = { status: "loaded", truncated: tmp2, count: tmp };
    let value = map7.get(projectId);
    const obj4 = map7;
    if (null == value) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      const result = obj4.set(projectId, map);
      value = map;
    }
    const result1 = value.set(scope, obj2);
  } else {
    const value4 = map7.get(projectId);
    let value5;
    if (value4 != null) {
      value5 = value4.get(scope);
    }
    let flag;
    if (value5 != null) {
      flag = value5.truncated;
    }
    if (flag == null) {
      flag = false;
    }
    obj = { status: "failed", truncated: flag, count: num };
    num = undefined;
    if (value5 != null) {
      num = value5.count;
    }
    if (num == null) {
      num = 0;
    }
    let value6 = obj6.get(projectId);
    if (null == value6) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map1 = new Map();
      const result2 = obj6.set(projectId, map1);
      value6 = map1;
    }
    const result3 = value6.set(scope, obj);
  }
}
let map = new Map();
let map1 = new Map();
const map2 = new Map();
let set = new Set();
const set1 = new Set();
const map3 = new Map();
const set2 = new Set();
let c12 = false;
let maxProjects = null;
let c14 = false;
let obj = null;
const set3 = new Set();
const map4 = new Map();
let success = "unattempted";
let closure_19 = [];
const map5 = new Map();
let sum = 0;
const map6 = new Map();
let closure_24 = { status: "idle", truncated: false, count: 0 };
const map7 = new Map();
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
  getIntegrationStatus(projectId) {
    let value = map1.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getPublishStatus(projectId) {
    let value = map2.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isProjectPublishing(arg0) {
    return set.has(arg0);
  }
  isAppChannelPending(projectId) {
    return set1.has(projectId);
  }
  isProjectDeleting(id) {
    return set2.has(id);
  }
  getSelectedProjectId(guildId) {
    let value = map3.get(guildId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLogs(projectId) {
    const value = map5.get(projectId);
    let snapshotResult;
    if (value != null) {
      snapshotResult = value.snapshot();
    }
    if (snapshotResult == null) {
      snapshotResult = closure_19;
    }
    return snapshotResult;
  }
  getUnreadLogErrorCount(arg0) {
    const value = map5.get(arg0);
    if (null == value) {
      return 0;
    } else {
      let num = map6.get(arg0);
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      const values = value.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        let tmp7 = nextResult.key > num;
        if (tmp7) {
          tmp7 = "error" === tmp6.log.level;
        }
        if (tmp7) {
          tmp7 = true !== tmp6.log.historical;
        }
        if (tmp7) {
          num2 = num2 + 1;
        }
        continue;
      }
      return num2;
    }
  }
  getHistoryState(arg0, arg1) {
    const value = map7.get(arg0);
    let value2;
    if (value != null) {
      value2 = value.get(arg1);
    }
    if (value2 == null) {
      value2 = closure_24;
    }
    return value2;
  }
  getProjectsFetchState() {
    return obj;
  }
  hasFetchedGuildProjects(id) {
    return set3.has(id);
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
          if (0 === set.size) {
            if (0 === set1.size) {
              if (0 === map3.size) {
                if (0 === set2.size) {
                  if (0 === map5.size) {
                    if (0 === set3.size) {
                      if (0 === map7.size) {
                        if (null == obj) {
                          if (null == maxProjects) {
                            const tmp11 = c14;
                            if (!tmp11) {
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
    obj.clear();
    map1.clear();
    map2.clear();
    set.clear();
    set1.clear();
    map3.clear();
    set2.clear();
    map5.clear();
    set3.clear();
    map4.clear();
    map6.clear();
    map7.clear();
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
    let guildId;
    let projects;
    let tmp3;
    let tmp6;
    let tmp8;
    function pruneProjectScopedState() {
      const keys = set2.keys();
      for (const item10010 of keys) {
        let tmp2 = item10010;
        if (!set.has(item10010)) {
          let deleteResult = set2.delete(tmp2);
        }
        continue;
      }
      const keys1 = set3.keys();
      for (const item10027 of keys1) {
        let tmp8 = item10027;
        if (!set.has(item10027)) {
          let deleteResult1 = set3.delete(tmp8);
        }
        continue;
      }
      const tmp14 = set4[Symbol.iterator]();
      while (tmp14 !== undefined) {
        let tmp17 = _slicedToArray(tmp15, 2);
        let first = tmp17[0];
        if (!set.has(tmp17[1])) {
          let deleteResult2 = set4.delete(first);
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
      let tmp17 = map;
      let result = map.set(item10044.id, item10044);
      continue;
    }
    if (null != guildId) {
      let tmp19 = set3;
      set3.add(guildId);
      let tmp21 = map4;
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
  CONJURE_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function handleProjectIntegrationStatusUpdate(projectId) {
    const result = map1.set(projectId.projectId, projectId.integrationStatus);
  },
  CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function handleProjectPublishStatusUpdate(published) {
    let projectId;
    let surface;
    ({ projectId, surface } = published);
    let str = "unpublished";
    if (published.published) {
      let str2 = "up_to_date";
      if (tmp) {
        str2 = "changes";
      }
      str = str2;
    }
    const value = map2.get(projectId);
    let state;
    obj = map2;
    if (value != null) {
      state = value.state;
    }
    if (state === str) {
      if (value.surface === surface) {
        return false;
      }
    }
    const result = obj.set(projectId, { state: str, surface });
  },
  CONJURE_PROJECT_PUBLISH_START: function handleProjectPublishStart(projectId) {
    set.add(projectId.projectId);
  },
  CONJURE_PROJECT_PUBLISH_SETTLE: function handleProjectPublishSettle(projectId) {
    return set.delete(projectId.projectId);
  },
  CONJURE_PROJECT_APP_CHANNEL_PENDING: function handleProjectAppChannelPending(arg0) {
    let pending;
    let projectId;
    ({ projectId, pending } = arg0);
    if (set1.has(projectId) === pending) {
      return false;
    } else if (pending) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_PROJECT_DELETE_START: function handleProjectDeleteStart(projectId) {
    set2.add(projectId.projectId);
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set2.delete(projectId);
    map.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
    set.delete(projectId);
    set1.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
    map7.delete(projectId);
    const tmp11 = map3[Symbol.iterator]();
    while (tmp11 !== undefined) {
      let tmp14 = _slicedToArray(tmp12, 2);
      let first = tmp14[0];
      if (tmp14[1] === projectId) {
        let deleteResult9 = map3.delete(first);
      }
      continue;
    }
  },
  CONJURE_PROJECT_DELETE_FAIL: function handleProjectDeleteFail(projectId) {
    return set2.delete(projectId.projectId);
  },
  CONJURE_PROJECT_SELECT: function handleProjectSelect(arg0) {
    let guildId;
    let projectId;
    ({ guildId, projectId } = arg0);
    let value = map3.get(guildId);
    if (value == null) {
      value = null;
    }
    if (value === projectId) {
      return false;
    } else if (null == projectId) {
      map3.delete(guildId);
    } else {
      const result = obj.set(guildId, projectId);
    }
  },
  CONJURE_HISTORY_LOAD_SETTLE: handleHistoryLoadSettle,
  CONJURE_DEBUG_BACKLOG: function handleDebugBacklog(arg0) {
    let backlog;
    let projectId;
    ({ projectId, backlog } = arg0);
    const logs = backlog.logs;
    for (const item10008 of logs) {
      obj = { type: "CONJURE_LOG_APPEND", projectId, log: item10008 };
      let tmp2 = handleLogAppend(obj);
      continue;
    }
    const iter = backlog.states[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj3 = { type: "CONJURE_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: true === nextResult.truncated };
      ({ scope: obj2.scope, status: obj2.status, count: obj2.count } = nextResult);
      let tmp5 = handleHistoryLoadSettle(obj3);
      continue;
    }
  },
  CONJURE_LOG_APPEND: handleLogAppend,
  CONJURE_LOGS_SEEN: function handleLogsSeen(projectId) {
    projectId = projectId.projectId;
    let num = 0;
    const value = map5.get(projectId);
    let values;
    if (value != null) {
      values = value.values();
    }
    if (values == null) {
      values = closure_19;
    }
    const tmp2 = values[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let _Math = Math;
      num = Math.max(num, tmp3.key);
      continue;
    }
    let num2 = map6.get(projectId);
    const obj2 = map6;
    if (num2 == null) {
      num2 = 0;
    }
    if (num2 >= num) {
      return false;
    } else {
      const result = obj2.set(projectId, num);
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
    obj = ConjureTypes;
    tmp3 = obj.isProjectPublic(project) && null != project.guild_id;
    obj.isProjectPublic(project) && null != project.guild_id;
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
  let isProjectSharedResult = owner_user_id === id;
  if (!isProjectSharedResult) {
    obj = ConjureTypes;
    isProjectSharedResult = obj.isProjectShared(owner_user_id);
  }
  if (!isProjectSharedResult) {
    const obj2 = ConjureTypes;
    isProjectSharedResult = obj2.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
    obj2.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
  }
  return isProjectSharedResult;
};
