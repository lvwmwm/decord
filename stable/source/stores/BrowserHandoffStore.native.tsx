// Module ID: 503
// Function ID: 504
// Name: BrowserHandoffStore
// Dependencies: [504, 585, 2]

// Module 503 (BrowserHandoffStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const Store = get_initializedDefault.Store;
class BrowserHandoffStore extends Store {
  initialize() {

  }
  isHandoffAvailable() {
    return false;
  }
}
const prototype = BrowserHandoffStore.prototype;
Object.defineProperty(prototype, "user", {
  get: function user() {
    return null;
  },
  set: undefined
});
Object.defineProperty(prototype, "key", {
  get: function key() {
    return null;
  },
  set: undefined
});
BrowserHandoffStore.displayName = "BrowserHandoffStore";
const browserHandoffStore = new BrowserHandoffStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default browserHandoffStore;
