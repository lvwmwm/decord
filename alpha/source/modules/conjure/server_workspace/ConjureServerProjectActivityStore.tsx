// Module ID: 15718
// Function ID: 15719
// Name: ConjureServerProjectActivityStore
// Dependencies: [504, 572, 2]

// Module 15718 (ConjureServerProjectActivityStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function recordActivity(id, arg1) {
  let num = map.get(id);
  if (num == null) {
    num = 0;
  }
  let flag = num < arg1;
  if (flag) {
    const result = map.set(id, arg1);
    flag = true;
  }
  return flag;
}
let map = new Map();
const Store = get_initializedDefault.Store;
class ConjureServerProjectActivityStore extends Store {
  getActivityAt(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureServerProjectActivityStore.prototype;
ConjureServerProjectActivityStore.displayName = "ConjureServerProjectActivityStore";
const obj = {
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let flag = false;
    const iter = arg0.projects[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let num = NaN;
      if (null != nextResult.last_activity_at) {
        let _Date = Date;
        num = Date.parse(tmp2.last_activity_at);
      }
      let _Number = Number;
      let tmp4 = num;
      if (!Number.isNaN(num)) {
        let tmp8 = recordActivity(tmp2.id, tmp4) || flag;
        flag = tmp8;
      }
      continue;
    }
    return flag;
  },
  CONJURE_PROJECT_RUNNING_UPDATE: function handleRunningUpdate(projectId) {
    projectId = projectId.projectId;
    const timestamp = Date.now();
    let num = map.get(projectId);
    if (num == null) {
      num = 0;
    }
    let flag = num < timestamp;
    if (flag) {
      const result = map.set(projectId, timestamp);
      flag = true;
    }
    return flag;
  },
  CONJURE_TURN_SETTLED: function handleTurnSettled(projectId) {
    projectId = projectId.projectId;
    const timestamp = Date.now();
    let num = map.get(projectId);
    if (num == null) {
      num = 0;
    }
    let flag = num < timestamp;
    if (flag) {
      const result = map.set(projectId, timestamp);
      flag = true;
    }
    return flag;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    return map.delete(projectId.projectId);
  },
  LOGOUT: function handleLogout() {
    map = new Map();
  }
};
const conjureServerProjectActivityStore = new ConjureServerProjectActivityStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/ConjureServerProjectActivityStore.tsx");

export default conjureServerProjectActivityStore;
