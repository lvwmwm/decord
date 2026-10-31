// Module ID: 12108
// Function ID: 12109
// Name: FramePoolManager
// Dependencies: [12109, 12111, 12110, 10927, 2]

// Module 12108 (FramePoolManager)
import leaveFrame from "leaveFrame" /* 10927 */;
import FrameStackLevel from "FrameStackLevel" /* 12110 */;
import FramePoolActionCreators from "FramePoolActionCreators" /* 12111 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 12109 */;
import size from "module_2" /* 2 */;

let tmp2;
class FramePoolManager extends AbstractFramePoolManager {
  constructor() {
    const tmp2 = new tmp({ maxBackgrounded: 1, timeoutMs: 90000 }, new.target, tmp);
    tmp2.poolNodeTag = 0;
    tmp2.loadedWebViewKeys = new Map();
    new Map();
    return tmp2;
  }
  setPoolNodeTag(poolNodeTag) {
    const self = this;
    if (this.poolNodeTag !== poolNodeTag) {
      self.poolNodeTag = poolNodeTag;
      self.emitChange();
    }
  }
  getPoolNodeTag() {
    return this.poolNodeTag;
  }
  setWebViewLoaded(id, iframeId) {
    const self = this;
    const loadedWebViewKeys = this.loadedWebViewKeys;
    if (loadedWebViewKeys.get(id) !== iframeId) {
      const loadedWebViewKeys2 = self.loadedWebViewKeys;
      const result = loadedWebViewKeys2.set(id, iframeId);
      self.emitChange();
    }
  }
  isWebViewLoaded(frameId, arg1) {
    const loadedWebViewKeys = this.loadedWebViewKeys;
    return loadedWebViewKeys.get(frameId) === arg1;
  }
  removeFrameEntry(frameId) {
    const loadedWebViewKeys = this.loadedWebViewKeys;
    loadedWebViewKeys.delete(frameId);
    super.removeFrameEntry(frameId);
    const obj = FramePoolActionCreators;
    const result = obj.updateFramePoolVisibility(frameId, "unpooled");
  }
  place(id, target, level) {
    const updateFramePoolVisibility = FramePoolActionCreators.updateFramePoolVisibility;
    let str = "hidden";
    FramePoolActionCreators;
    if (level !== FrameStackLevel.FrameStackLevel.Backstage) {
      str = "visible";
    }
    const result = updateFramePoolVisibility(id, str);
  }
  unplace(id) {
    const obj = FramePoolActionCreators;
    const result = obj.updateFramePoolVisibility(id, "hidden");
  }
}
const prototype = FramePoolManager.prototype;
function destroyFrame(id) {
  const obj = leaveFrame;
  obj.leaveFrame(id);
}
prototype["destroyFrame"] = destroyFrame;
const destroyFrame1 = new destroyFrame({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, "destroyFrame", FramePoolManager, destroyFrame, this, globalThis);
destroyFrame1.poolNodeTag = 0;
const map = new Map();
destroyFrame1.loadedWebViewKeys = map;
let result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default destroyFrame1;
