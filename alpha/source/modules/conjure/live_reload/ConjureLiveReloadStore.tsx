// Module ID: 11014
// Function ID: 11015
// Name: ConjureLiveReloadStore
// Dependencies: [504, 584, 2]

// Module 11014 (ConjureLiveReloadStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let set;

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureLiveReloadStore extends Store {
  getLiveReload(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureLiveReloadStore.prototype;
let obj = {
  CONJURE_LIVE_RELOAD_SET: function handleLiveReloadSet(background) {
    let obj3;
    background = background.background;
    const projectId = background.projectId;
    const obj = { enabled: background.enabled, error: background.error, phase: background.phase, step: background.step };
    set = map.set;
    if (true === background) {
      obj3 = { background };
      const obj2 = { background };
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const result = set(projectId, obj);
  }
};
const conjureLiveReloadStore = new ConjureLiveReloadStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/live_reload/ConjureLiveReloadStore.tsx");

export default conjureLiveReloadStore;
