// Module ID: 11640
// Function ID: 11641
// Name: FramePoolManager
// Dependencies: [11641, 11642, 11643, 10960, 2]

// Module 11640 (FramePoolManager)
import leaveFrame from "leaveFrame" /* 10960 */;
import FrameStackLevel from "FrameStackLevel" /* 11643 */;
import FrameVisibilityStore from "FrameVisibilityStore" /* 11641 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 11642 */;
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
  removeFrameEntry(arg0) {
    super.removeFrameEntry(arg0);
    FrameVisibilityStore.removeFrame(arg0);
  }
  place(id, target, level) {
    FrameVisibilityStore.setFrameVisible(id, level !== FrameStackLevel.FrameStackLevel.Backstage);
  }
  unplace(id) {
    FrameVisibilityStore.setFrameVisible(id, false);
  }
}
const prototype = FramePoolManager.prototype;
function destroyFrame(id) {
  const obj = leaveFrame;
  obj.leaveFrame(id);
}
prototype["destroyFrame"] = destroyFrame;
const destroyFrame1 = new destroyFrame({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, Object, "destroyFrame", FramePoolManager, destroyFrame);
destroyFrame1.poolNodeTag = 0;
const result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default destroyFrame1;
