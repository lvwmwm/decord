// Module ID: 16181
// Function ID: 16182
// Name: ConjureOverlayWidgetsStore
// Dependencies: [16182, 7017, 1072, 16185, 16188, 504, 572, 2]

// Module 16181 (ConjureOverlayWidgetsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import OverlayLayoutConstants from "OverlayLayoutConstants" /* 16185 */;
import conjureOverlayApps from "conjureOverlayApps" /* 16188 */;
import LayoutStore from "LayoutStore" /* 16182 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

let closure_7, dependencyMap, set, widgetsByTypeAndLayout;

const f113227 = (application_id) => application_id.application_id;
function syncProjects() {
  let tmp3;
  const f113229 = (item, index) => item === closure_0[index];
  function getLayoutApplicationIds() {
    set = new Set();
    widgetsByTypeAndLayout = widgetsByTypeAndLayout.getWidgetsByTypeAndLayout(constants.CONJURE, OVERLAY_V3_LAYOUT_ID);
    for (const item10017 of widgetsByTypeAndLayout) {
      let applicationId = item10017.meta.applicationId;
      if (typeof applicationId === "string") {
        let addResult = set.add(tmp2);
      }
      continue;
    }
    return set;
  }
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  found = ownedProjects.filter(set(16188).isConjureOverlayApp);
  let closure_0 = found;
  const obj = ConjureProjectStore;
  const tmp = found.length === found.length && found.every(f113229);
  if (!tmp) {
    if (0 === found.length) {
      found = items;
    }
  }
  set = new Set(found.map((application_id) => application_id.application_id));
  dependencyMap = getLayoutApplicationIds();
  items = [...found];
  const items1 = [];
  const arraySpreadResult = HermesBuiltin.arraySpread(items1, found, 0);
  new Set(found.map(f113227));
  const ownedProjects1 = obj.getOwnedProjects();
  HermesBuiltin.arraySpread(items1, ownedProjects1.filter((application_id) => {
    const obj = conjureOverlayApps;
    const result = obj.isConjureServerOverlayApp(application_id) && !set.has(application_id.application_id);
    return result;
  }), arraySpreadResult);
  HermesBuiltin.arraySpread(items, items1.filter((application_id) => {
    const hasItem = set.has(application_id.application_id);
    const hasItem1 = !hasItem && set.has(application_id.application_id);
    return hasItem1;
  }), tmp3);
  closure_0 = items;
  items.length === items.length && items.every(f113229);
}
function handleLayoutChange() {
  syncProjects();
  return closure_7 !== closure_7;
}
function markServerListStale(guildId) {
  guildId = guildId.guildId;
  items = [];
  const arraySpreadResult = HermesBuiltin.arraySpread(items, found, 0);
  set = new Set(found.map(f113227));
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  HermesBuiltin.arraySpread(items, ownedProjects.filter((application_id) => {
    const obj = conjureOverlayApps;
    const result = obj.isConjureServerOverlayApp(application_id) && !set.has(application_id.application_id);
    return result;
  }), arraySpreadResult);
  if (items.some((guild_id) => guild_id.guild_id === guildId)) {
    closure_12 = closure_12 + 1;
  } else {
    return false;
  }
}
const OverlayWidgets = Constants.OverlayWidgets;
const OVERLAY_V3_LAYOUT_ID = OverlayLayoutConstants.OVERLAY_V3_LAYOUT_ID;
let items = [];
const metroImportDefault = items;
let closure_8 = items;
let found = items;
let c10 = false;
let c11 = 0;
let closure_12 = 0;
const Store = get_initializedDefault.Store;
class ConjureOverlayWidgetsStore extends Store {
  initialize() {
    this.waitFor(ConjureProjectStore, LayoutStore);
    LayoutStore.initializeIfNeeded();
    syncProjects();
    items = [ConjureProjectStore];
    this.syncWith(items, () => {
      syncProjects();
      return true;
    });
    const items1 = [LayoutStore];
    this.syncWith(items1, handleLayoutChange);
  }
  getProjects() {
    return closure_7;
  }
  getOwnedProjects() {
    return closure_8;
  }
  getServerProjects() {
    return found;
  }
  getProject(arg0) {
    let closure_0 = arg0;
    if (null != arg0) {
      found = closure_7.find((application_id) => application_id.application_id === closure_0);
      if (found == null) {
        found = found.find((application_id) => application_id.application_id === closure_0);
      }
      return found;
    }
  }
  isServerProjectEnabled(arg0) {
    let closure_0 = arg0;
    return closure_7.some((application_id) => application_id.application_id === closure_0);
  }
  getServerStaleVersion() {
    return closure_12;
  }
  hasOwnedFetchSucceeded() {
    return ConjureProjectStore.hasFetchedOwnedProjects();
  }
  hasServerFetchSucceeded() {
    return c10;
  }
  getServerFetchFailures() {
    return c11;
  }
}
const prototype = ConjureOverlayWidgetsStore.prototype;
ConjureOverlayWidgetsStore.displayName = "ConjureOverlayWidgetsStore";
let obj = {
  CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_SUCCESS: function handleServerFetchSuccess(projects) {
    projects = projects.projects;
    found = projects.filter(conjureOverlayApps.isConjureServerOverlayApp);
    if (0 === found.length) {
      found = items;
    }
    c10 = true;
    c11 = 0;
    syncProjects();
  },
  CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_FAIL: function handleServerFetchFail() {
    c11 = c11 + 1;
  },
  INTEGRATION_DELETE: markServerListStale,
  GUILD_INTEGRATIONS_UPDATE: markServerListStale,
  CONJURE_SERVER_OVERLAY_WIDGETS_GUILD_REMOVE: function handleServerGuildRemove(guildId) {
    guildId = guildId.guildId;
    found = found.filter((guild_id) => guild_id.guild_id !== guildId);
    if (found.length === found.length) {
      return false;
    } else {
      if (0 === found.length) {
        found = items;
      }
      syncProjects();
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    c10 = false;
    c11 = 0;
    closure_12 = closure_12 + 1;
    syncProjects();
  },
  LOGOUT: function handleLogout() {
    closure_7 = items;
    closure_8 = items;
    found = items;
    c10 = false;
    c11 = 0;
    closure_12 = closure_12 + 1;
  }
};
const conjureOverlayWidgetsStore = new ConjureOverlayWidgetsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/overlay/ConjureOverlayWidgetsStore.tsx");

export default conjureOverlayWidgetsStore;
