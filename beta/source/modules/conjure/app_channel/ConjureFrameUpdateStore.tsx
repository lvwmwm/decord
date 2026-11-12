// Module ID: 19066
// Function ID: 19067
// Name: ConjureFrameUpdateStore
// Dependencies: [6934, 504, 572, 2]
// Exports: useConjureFrameUpdateAvailable

// Module 19066 (ConjureFrameUpdateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import FramesStore from "FramesStore" /* 6934 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const map = new Map();
const set = new Set();
const Store = get_initializedDefault.Store;
class ConjureFrameUpdateStore extends Store {
  initialize() {
    this.waitFor(FramesStore);
  }
  isUpdateAvailable(arg0) {
    const hasItem = null != arg0 && set.has(arg0);
    return hasItem;
  }
}
const prototype = ConjureFrameUpdateStore.prototype;
let obj = {
  APPLICATION_FRAME_UPDATE: function handleFrameUpdate(updatedAt) {
    updatedAt = updatedAt.updatedAt;
    let num = NaN;
    const applicationId = updatedAt.applicationId;
    if (null != updatedAt) {
      const _Date = Date;
      num = Date.parse(updatedAt);
    }
    let flag = false;
    const allFrames = FramesStore.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let id = nextResult.id;
      if (nextResult.applicationId === applicationId) {
        let obj = set;
        if (!set.has(id)) {
          let value = map.get(id);
          let tmp9 = null != value;
          let tmp8 = value;
          if (tmp9) {
            let _Number = Number;
            tmp9 = !Number.isNaN(num);
          }
          if (tmp9) {
            tmp9 = tmp8 >= num;
          }
          if (!tmp9) {
            let addResult = obj.add(id);
            flag = true;
          }
        }
      }
      continue;
    }
    return flag;
  },
  FRAME_LAUNCH: function handleFrameLaunch(frameId) {
    frameId = frameId.frameId;
    const result = map.set(frameId, Date.now());
    return set.delete(frameId);
  },
  FRAME_STOP: function handleFrameStop(frameId) {
    frameId = frameId.frameId;
    map.delete(frameId);
    return set.delete(frameId);
  },
  FRAME_UPDATE_PROXY_TICKET: function handleProxyTicketUpdate(frameId) {
    frameId = frameId.frameId;
    const result = map.set(frameId, Date.now());
    return set.delete(frameId);
  }
};
const conjureFrameUpdateStore = new ConjureFrameUpdateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/app_channel/ConjureFrameUpdateStore.tsx");

export default conjureFrameUpdateStore;
export function useConjureFrameUpdateAvailable(arg0) {
  let closure_0;
  _require = arg0;
  const items = [conjureFrameUpdateStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => conjureFrameUpdateStore.isUpdateAvailable(closure_0), items1);
}
