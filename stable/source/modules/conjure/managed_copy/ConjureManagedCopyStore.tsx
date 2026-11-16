// Module ID: 11016
// Function ID: 11017
// Name: ConjureManagedCopyStore
// Dependencies: [504, 572, 2]

// Module 11016 (ConjureManagedCopyStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let set;

const map = new Map();
const map1 = new Map();
const map2 = new Map();
const Store = get_initializedDefault.Store;
class ConjureManagedCopyStore extends Store {
  getCopy(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLastSync(arg0) {
    let value = map1.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getDownstreamUpdates(arg0) {
    let value = map2.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureManagedCopyStore.prototype;
let obj = {
  CONJURE_COPY_STATE_SET: function handleCopyStateSet(arg0) {
    let event;
    let projectId;
    let prop;
    let source_name;
    ({ projectId, event } = arg0);
    map2.delete(projectId);
    const obj = { sourceProjectId: event.source_project_id, sourceName: source_name, sourceApplicationId: prop, updatesPaused: true === event.updates_paused };
    source_name = event.source_name;
    set = map.set;
    if (source_name == null) {
      source_name = null;
    }
    prop = event.source_application_id;
    if (prop == null) {
      prop = null;
    }
    const result = set(projectId, obj);
  },
  CONJURE_COPY_SYNC_SET: function handleCopySyncSet(event) {
    let tmp3;
    event = event.event;
    const projectId = event.projectId;
    const parsed = Date.parse(event.at);
    const obj = { status: event.status, atMs: tmp3 };
    tmp3 = null;
    set = map1.set;
    if (!Number.isNaN(parsed)) {
      tmp3 = parsed;
    }
    const result = set(projectId, obj);
  },
  CONJURE_DOWNSTREAM_UPDATES_SET: function handleDownstreamUpdatesSet(event) {
    let error;
    event = event.event;
    const obj = { enabled: event.enabled, pending: false, error };
    error = event.error;
    const projectId = event.projectId;
    set = map2.set;
    if (error == null) {
      error = null;
    }
    const result = set(projectId, obj);
  },
  CONJURE_DOWNSTREAM_UPDATES_REQUEST: function handleDownstreamUpdatesRequest(projectId) {
    projectId = projectId.projectId;
    const enabled = projectId.enabled;
    let flag = null != map2.get(projectId);
    const obj = map2;
    if (flag) {
      const obj2 = { enabled, pending: true, error: null };
      const result = obj.set(projectId, obj2);
      flag = true;
    }
    return flag;
  }
};
const conjureManagedCopyStore = new ConjureManagedCopyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/managed_copy/ConjureManagedCopyStore.tsx");

export default conjureManagedCopyStore;
