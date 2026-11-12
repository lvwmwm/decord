// Module ID: 15910
// Function ID: 15911
// Name: ConjureOverlayWidgetsStore
// Dependencies: [15911, 6932, 1072, 15914, 15917, 504, 572, 2]

// Module 15910 (ConjureOverlayWidgetsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import OverlayLayoutConstants from "OverlayLayoutConstants" /* 15914 */;
import conjureOverlayApps from "conjureOverlayApps" /* 15917 */;
import LayoutStore from "LayoutStore" /* 15911 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
import size from "module_2" /* 2 */;

let closure_7, dependencyMap, set, widgetsByTypeAndLayout;

function syncProjects() {
  const f110750 = (item, index) => item === closure_0[index];
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
  found = ownedProjects.filter(set(15917).isConjureOverlayApp);
  let closure_0 = found;
  const tmp = found.length === found.length && found.every(f110750);
  if (!tmp) {
    if (0 === found.length) {
      found = items;
    }
  }
  set = new Set(found.map((application_id) => application_id.application_id));
  dependencyMap = getLayoutApplicationIds();
  items = [
    ...found,
    ...found.filter((application_id) => {
      const hasItem = set.has(application_id.application_id);
      const hasItem1 = !hasItem && set.has(application_id.application_id);
      return hasItem1;
    })
  ];
  closure_0 = items;
  let tmp3 = items.length === items.length && items.every(f110750);
}
function handleLayoutChange() {
  syncProjects();
  return closure_7 !== closure_7;
}
function markServerListStale(guildId) {
  guildId = guildId.guildId;
  if (found.some((guild_id) => guild_id.guild_id === guildId)) {
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
const obj = {
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
const result = size.fileFinishedImporting("modules/conjure/overlay/ConjureOverlayWidgetsStore.tsx");

export default conjureOverlayWidgetsStore;
