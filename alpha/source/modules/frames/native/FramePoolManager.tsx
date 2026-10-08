// Module ID: 16896
// Function ID: 16897
// Name: FramePoolManager
// Dependencies: [16897, 11149, 2]

// Module 16896 (FramePoolManager)
import getFramesManagerDefault from "getFramesManager" /* 11149 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 16897 */;
import size from "module_2" /* 2 */;

let tmp2;
class FramePoolManager extends AbstractFramePoolManager {
  constructor() {
    const tmp2 = new tmp({ maxBackgrounded: 1, timeoutMs: 90000 }, new.target, tmp);
    tmp2.poolNodeTag = 0;
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
  place() {

  }
  unplace() {

  }
  destroyFrame(arg0) {
    const obj = getFramesManagerDefault();
    obj.leaveFrame(arg0);
  }
}
const tmp5 = new "destroyFrame"({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, Object, FramePoolManager.prototype, FramePoolManager);
tmp5.poolNodeTag = 0;
const result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default tmp5;
