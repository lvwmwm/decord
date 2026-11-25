// Module ID: 14559
// Function ID: 14560
// Name: ConjureServerWidgetStore
// Dependencies: [6622, 504, 572, 2]

// Module 14559 (ConjureServerWidgetStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6622 */;
import size from "module_2" /* 2 */;

function offersServerWidget(install_scope) {
  let tmp = "guild" === install_scope.install_scope;
  if (tmp) {
    const supported_surfaces = install_scope.supported_surfaces;
    let hasItem;
    if (supported_surfaces != null) {
      hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET);
    }
    tmp = true === hasItem;
  }
  return tmp;
}
const items = [];
let found = items;
let unattempted = "unattempted";
const Store = get_initializedDefault.Store;
class ConjureServerWidgetStore extends Store {
  getProjects() {
    return found;
  }
  getProject(arg0) {
    let closure_0 = arg0;
    return found.find((application_id) => application_id.application_id === closure_0);
  }
  getFetchState() {
    return unattempted;
  }
}
const prototype = ConjureServerWidgetStore.prototype;
ConjureServerWidgetStore.displayName = "ConjureServerWidgetStore";
const obj = {
  CONJURE_SERVER_PROFILE_WIDGETS_FETCH_START: function handleFetchStart() {
    unattempted = "loading";
  },
  CONJURE_SERVER_PROFILE_WIDGETS_FETCH_SUCCESS: function handleFetchSuccess(projects) {
    projects = projects.projects;
    found = projects.filter(offersServerWidget);
    if (0 === found.length) {
      found = items;
    }
    unattempted = "success";
  },
  CONJURE_SERVER_PROFILE_WIDGETS_FETCH_FAIL: function handleFetchFail() {
    unattempted = "error";
  },
  LOGOUT: function handleLogout() {
    found = items;
    unattempted = "unattempted";
  }
};
const conjureServerWidgetStore = new ConjureServerWidgetStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/server_widgets/ConjureServerWidgetStore.tsx");

export default conjureServerWidgetStore;
