// Module ID: 13167
// Function ID: 13168
// Name: ConjureBrowserSessionsStore
// Dependencies: [504, 584, 2]

// Module 13167 (ConjureBrowserSessionsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size_mod from "module_2" /* 2 */;

let set;

let closure_0 = [];
let closure_1 = [];
const map = new Map();
const map1 = new Map();
const Store = get_initializedDefault.Store;
class ConjureBrowserSessionsStore extends Store {
  getSessions(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = closure_0;
    }
    return value;
  }
  getTabs(arg0) {
    let value = map1.get(arg0);
    if (value == null) {
      value = closure_1;
    }
    return value;
  }
  getTab(arg0, arg1) {
    closure_0 = arg1;
    const tabs = this.getTabs(arg0);
    let found = tabs.find((session) => session.session.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }
}
const prototype = ConjureBrowserSessionsStore.prototype;
let obj = {
  CONJURE_BROWSER_SESSIONS_SET: function handleBrowserSessionsSet(arg0) {
    let projectId;
    let sessions;
    ({ projectId, sessions } = arg0);
    let set1;
    let value = map.get(projectId);
    const obj = map;
    if (value == null) {
      value = closure_0;
    }
    const tmp2 = value.length === sessions.length && value.every((id, index) => id.id === sessions[index].id && id.started_at === tmp[index].started_at);
    if (tmp2) {
      return false;
    } else {
      const items = [];
      HermesBuiltin.arraySpread(items, sessions, 0);
      const sorted = items.sort((started_at, started_at2) => started_at.started_at - started_at2.started_at);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set1 = new Set(sorted.map((id) => id.id));
      let value2 = map1.get(projectId);
      const tmp9 = map1;
      if (value2 == null) {
        value2 = closure_1;
      }
      const found = value2.filter((session) => !set1.has(session.session.id));
      const found1 = found.filter((ended) => !ended.ended);
      const items1 = [];
      const arraySpreadResult4 = HermesBuiltin.arraySpread(items1, found1.map((session) => ({ session: session.session, ended: true })), 0);
      HermesBuiltin.arraySpread(items1, found.filter((ended) => ended.ended), arraySpreadResult4);
      const substr = items1.slice(0, 12);
      const result = obj.set(projectId, sessions);
      const items2 = [];
      set = tmp9.set;
      HermesBuiltin.arraySpread(items2, substr, HermesBuiltin.arraySpread(items2, sorted.map((session) => ({ session, ended: false })), 0));
      const result1 = set(projectId, items2);
      return true;
    }
  }
};
const conjureBrowserSessionsStore = new ConjureBrowserSessionsStore(DispatcherDefault, obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/browser_streams/ConjureBrowserSessionsStore.tsx");

export default conjureBrowserSessionsStore;
