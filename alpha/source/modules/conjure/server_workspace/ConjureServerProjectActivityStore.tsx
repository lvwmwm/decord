// Module ID: 16073
// Function ID: 16074
// Name: ConjureServerProjectActivityStore
// Dependencies: [504, 572, 2]

// Module 16073 (ConjureServerProjectActivityStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function markRunning(id) {
  const result = map.set(id, Date.now());
  set.add(id);
}
let map = new Map();
let set = new Set();
const Store = get_initializedDefault.Store;
class ConjureServerProjectActivityStore extends Store {
  getTurnStartedAt(arg0) {
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
      if (true !== nextResult.running) {
        let deleteResult = set.delete(tmp2.id);
      } else if (!set.has(tmp2.id)) {
        let tmp7 = markRunning(tmp2.id);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  CONJURE_PROJECT_RUNNING_UPDATE: function handleRunningUpdate(projectId) {
    let flag;
    projectId = projectId.projectId;
    if (projectId.running) {
      const _Date = Date;
      const result = map.set(projectId, Date.now());
      set.add(projectId);
      flag = true;
    } else {
      set.delete(projectId);
      flag = false;
    }
    return flag;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set.delete(projectId);
    return map.delete(projectId);
  },
  LOGOUT: function handleLogout() {
    map = new Map();
    set = new Set();
  }
};
const conjureServerProjectActivityStore = new ConjureServerProjectActivityStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/ConjureServerProjectActivityStore.tsx");

export default conjureServerProjectActivityStore;
