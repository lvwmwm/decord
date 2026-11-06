// Module ID: 11692
// Function ID: 11693
// Name: ConjurePagesStore
// Dependencies: [504, 572, 2]

// Module 11692 (ConjurePagesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let closure_0 = { chatOpen: true, debugOpen: false, previewSelection: null, chatScroll: null };
let c1 = null;
let c2 = null;
let c3 = false;
const map = new Map();
const map1 = new Map();
const set = new Set();
const Store = get_initializedDefault.Store;
class ConjurePagesStore extends Store {
  getProjectId() {
    return c2;
  }
  isOnPage() {
    return c3;
  }
  getShownProjectId() {
    let tmp = null;
    if (c3) {
      tmp = c1;
    }
    return tmp;
  }
  getScrollTop(arg0) {
    let num = map.get(arg0);
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getProjectView(arg0) {
    let value = map1.get(arg0);
    if (value == null) {
      value = closure_0;
    }
    return value;
  }
}
const prototype = ConjurePagesStore.prototype;
ConjurePagesStore.displayName = "ConjurePagesStore";
let obj = {
  CONJURE_PAGES_VISIT: function handleVisit(inServer) {
    let projectId2;
    if (true !== inServer.inServer) {
      const projectId = inServer.projectId;
    }
    let flag = !c3;
    if (c3) {
      flag = inServer.projectId !== projectId2;
    }
    if (flag) {
      projectId2 = inServer.projectId;
      c3 = true;
      flag = true;
    }
    return flag;
  },
  CONJURE_PAGES_LEAVE: function handleLeave() {
    let flag = c3;
    if (flag) {
      c3 = false;
      flag = true;
    }
    return flag;
  },
  CONJURE_PAGES_SCROLL_SAVE: function handleScrollSave(key) {
    const result = map.set(key.key, key.scrollTop);
    return false;
  },
  CONJURE_PAGES_PROJECT_VIEW_SAVE: function handleProjectViewSave(arg0) {
    let projectId;
    let view;
    ({ projectId, view } = arg0);
    if (!set.has(projectId)) {
      let value = map1.get(projectId);
      if (value == null) {
        value = closure_0;
      }
      const obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(view);
      const result = set(projectId, obj);
    }
    return false;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set.add(projectId);
    map1.delete(projectId);
    if (projectId === c2) {
      c2 = null;
    }
    let flag = projectId === c1;
    if (flag) {
      c1 = null;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    c2 = null;
    c3 = false;
    map.clear();
    map1.clear();
    set.clear();
  }
};
const conjurePagesStore = new ConjurePagesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/pages/ConjurePagesStore.tsx");

export default conjurePagesStore;
