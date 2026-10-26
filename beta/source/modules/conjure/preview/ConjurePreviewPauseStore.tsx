// Module ID: 10741
// Function ID: 10742
// Name: ConjurePreviewPauseStore
// Dependencies: [504, 584, 2]

// Module 10741 (ConjurePreviewPauseStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const set = new Set();
const Store = get_initializedDefault.Store;
class ConjurePreviewPauseStore extends Store {
  isPaused(arg0) {
    const hasItem = null != arg0 && set.has(arg0);
    return hasItem;
  }
}
const prototype = ConjurePreviewPauseStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    const obj = set;
    if (0 === set.size) {
      return false;
    } else {
      obj.clear();
    }
  },
  CONJURE_PREVIEW_PAUSED_SET: function handlePausedSet(arg0) {
    let paused;
    let projectId;
    ({ projectId, paused } = arg0);
    if (set.has(projectId) === paused) {
      return false;
    } else if (paused) {
      set.add(projectId);
    } else {
      set.delete(projectId);
    }
  }
};
const conjurePreviewPauseStore = new ConjurePreviewPauseStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/preview/ConjurePreviewPauseStore.tsx");

export default conjurePreviewPauseStore;
