// Module ID: 11053
// Function ID: 11054
// Name: ConjureGameCapturesStore
// Dependencies: [504, 572, 2]

// Module 11053 (ConjureGameCapturesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let set;

let closure_0 = [];
const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureGameCapturesStore extends Store {
  getCaptures(arg0) {
    const value = map.get(arg0);
    let captures;
    if (value != null) {
      captures = value.captures;
    }
    if (captures == null) {
      captures = closure_0;
    }
    return captures;
  }
  getSelectedCapture(id) {
    const value = map.get(id);
    let tmp2 = null;
    if (null != value) {
      tmp2 = null;
      if (0 !== value.captures.length) {
        tmp2 = null;
        if (null !== value.selectedId) {
          const captures = value.captures;
          let found = captures.find((id) => id.id === value.selectedId);
          if (found == null) {
            found = value.captures[0];
          }
          tmp2 = found;
        }
      }
    }
    return tmp2;
  }
}
const prototype = ConjureGameCapturesStore.prototype;
let obj = {
  CONJURE_GAME_CAPTURES_SET: function handleCapturesSet(captures) {
    let projectId;
    let selectedId;
    ({ projectId, selectedId } = captures);
    const obj = map;
    const obj2 = { captures: captures.captures, selectedId };
    set = map.set;
    if (selectedId == null) {
      const value = obj.get(projectId);
      let selectedId1;
      if (value != null) {
        selectedId1 = value.selectedId;
      }
      selectedId = selectedId1;
    }
    const result = set(projectId, obj2);
  },
  CONJURE_GAME_CAPTURE_SELECT: function handleCaptureSelect(projectId) {
    projectId = projectId.projectId;
    const captureId = projectId.captureId;
    const value = map.get(projectId);
    const tmp = map;
    if (null == value) {
      return false;
    } else {
      const obj = { selectedId: captureId };
      set = tmp.set;
      const merged = Object.assign(value);
      const result = set(projectId, obj);
    }
  }
};
const conjureGameCapturesStore = new ConjureGameCapturesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/preview/ConjureGameCapturesStore.tsx");

export default conjureGameCapturesStore;
