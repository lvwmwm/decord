// Module ID: 17092
// Function ID: 17093
// Name: FramePoolManager
// Dependencies: [17093, 10821, 2]

// Module 17092 (FramePoolManager)
import leaveFrame from "leaveFrame" /* 10821 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 17093 */;
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
  destroyFrame(id) {
    const obj = leaveFrame;
    obj.leaveFrame(id);
  }
}
const tmp5 = new "destroyFrame"({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, FramePoolManager.prototype, FramePoolManager, "destroyFrame", this);
tmp5.poolNodeTag = 0;
const result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default tmp5;
