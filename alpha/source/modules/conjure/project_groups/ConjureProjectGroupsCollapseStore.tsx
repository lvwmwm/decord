// Module ID: 13210
// Function ID: 13211
// Name: ConjureProjectGroupsCollapseStore
// Dependencies: [13211, 504, 572, 2]

// Module 13210 (ConjureProjectGroupsCollapseStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureProjectGroupsTypes from "ConjureProjectGroupsTypes" /* 13211 */;
import size from "module_2" /* 2 */;

let obj = { collapsedByKey: {} };
const PersistedStore = get_initializedDefault.PersistedStore;
class ConjureProjectGroupsCollapseStore extends PersistedStore {
  initialize(arg0) {

  }
  getState() {
    return obj;
  }
  isCollapsed(arg0) {
    let tmp = obj.collapsedByKey[arg0];
    if (tmp == null) {
      tmp = arg0 === ConjureProjectGroupsTypes.CONJURE_COLLABORATING_GROUP_KEY;
    }
    return tmp;
  }
}
const prototype = ConjureProjectGroupsCollapseStore.prototype;
ConjureProjectGroupsCollapseStore.displayName = "ConjureProjectGroupsCollapseStore";
ConjureProjectGroupsCollapseStore.persistKey = "ConjureProjectGroupsCollapse";
let obj2 = {
  CONJURE_PROJECT_GROUP_COLLAPSE_SET: function handleCollapseSet(arg0) {
    let collapsed;
    let key;
    let obj2;
    ({ key, collapsed } = arg0);
    let flag = obj.collapsedByKey[key] !== collapsed;
    if (flag) {
      obj = { collapsedByKey: obj2 };
      obj2 = {};
      const merged = Object.assign(obj.collapsedByKey);
      obj2[key] = collapsed;
      flag = true;
    }
    return flag;
  }
};
const conjureProjectGroupsCollapseStore = new ConjureProjectGroupsCollapseStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/conjure/project_groups/ConjureProjectGroupsCollapseStore.tsx");

export default conjureProjectGroupsCollapseStore;
