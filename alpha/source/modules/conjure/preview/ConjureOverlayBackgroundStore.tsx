// Module ID: 10846
// Function ID: 10847
// Name: ConjureOverlayBackgroundStore
// Dependencies: [504, 572, 2]

// Module 10846 (ConjureOverlayBackgroundStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureOverlayBackgroundStore extends Store {
  getBackground(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureOverlayBackgroundStore.prototype;
let obj = {
  CONJURE_OVERLAY_BACKGROUND_SET: function handleOverlayBackgroundSet(blur) {
    const obj = { blur: blur.blur, imageEtag: blur.imageEtag };
    const result = map.set(blur.projectId, obj);
  }
};
const conjureOverlayBackgroundStore = new ConjureOverlayBackgroundStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/preview/ConjureOverlayBackgroundStore.tsx");

export default conjureOverlayBackgroundStore;
