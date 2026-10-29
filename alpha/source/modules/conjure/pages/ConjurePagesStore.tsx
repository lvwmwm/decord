// Module ID: 11291
// Function ID: 11292
// Name: ConjurePagesStore
// Dependencies: [504, 584, 2]

// Module 11291 (ConjurePagesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0 = { chatOpen: true, debugOpen: false, previewSelection: null, chatScroll: null };
let c1 = null;
let c2 = false;
let c3 = "";
const map = new Map();
const map1 = new Map();
const set = new Set();
const Store = get_initializedDefault.Store;
class ConjurePagesStore extends Store {
  getProjectId() {
    return c1;
  }
  isOnPage() {
    return c2;
  }
  getShownProjectId() {
    let tmp = null;
    if (c2) {
      tmp = c1;
    }
    return tmp;
  }
  getHomePrompt() {
    return c3;
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
  CONJURE_PAGES_VISIT: function handleVisit(projectId) {
    let flag = !c2;
    if (c2) {
      flag = projectId.projectId !== projectId;
    }
    if (flag) {
      projectId = projectId.projectId;
      c2 = true;
      flag = true;
    }
    return flag;
  },
  CONJURE_PAGES_LEAVE: function handleLeave() {
    let flag = c2;
    if (flag) {
      c2 = false;
      flag = true;
    }
    return flag;
  },
  CONJURE_PAGES_HOME_PROMPT_SAVE: function handleHomePromptSave(prompt) {
    const _prompt = prompt.prompt;
    return false;
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
    let flag = projectId === c1;
    if (flag) {
      c1 = null;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    c2 = false;
    c3 = "";
    map.clear();
    map1.clear();
    set.clear();
  }
};
const conjurePagesStore = new ConjurePagesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/pages/ConjurePagesStore.tsx");

export default conjurePagesStore;
