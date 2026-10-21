// Module ID: 10679
// Function ID: 10680
// Name: ConjureLastIntegrationStatusStore
// Dependencies: [504, 584, 2]

// Module 10679 (ConjureLastIntegrationStatusStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_1;

let obj = { statuses: [] };
const PersistedStore = get_initializedDefault.PersistedStore;
class ConjureLastIntegrationStatusStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_1 = tmp;
  }
  getState() {
    return closure_1;
  }
  getIntegrationStatus(arg0) {
    let closure_0 = arg0;
    const statuses = closure_1.statuses;
    const found = statuses.find((projectId) => projectId.projectId === closure_0);
    let status;
    if (found != null) {
      status = found.status;
    }
    if (status == null) {
      status = null;
    }
    return status;
  }
}
const prototype = ConjureLastIntegrationStatusStore.prototype;
ConjureLastIntegrationStatusStore.displayName = "ConjureLastIntegrationStatusStore";
ConjureLastIntegrationStatusStore.persistKey = "ConjureLastIntegrationStatus";
const obj2 = {
  CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function handleIntegrationStatusUpdate(projectId) {
    let items;
    projectId = projectId.projectId;
    const statuses = closure_1.statuses;
    obj = { statuses: items.slice(-20) };
    items = [];
    items[HermesBuiltin.arraySpread(items, statuses.filter((projectId) => projectId.projectId !== id), 0)] = { projectId, status: projectId.integrationStatus };
    closure_1 = obj;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    let statuses1;
    projectId = projectId.projectId;
    const statuses = closure_1.statuses;
    if (statuses.some((projectId) => projectId.projectId === projectId)) {
      obj = { statuses: statuses1.filter((projectId) => projectId.projectId !== projectId) };
      statuses1 = closure_1.statuses;
      closure_1 = obj;
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    closure_1 = obj;
  }
};
const conjureLastIntegrationStatusStore = new ConjureLastIntegrationStatusStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/conjure/projects/ConjureLastIntegrationStatusStore.tsx");

export default conjureLastIntegrationStatusStore;
