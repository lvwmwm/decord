// Module ID: 11756
// Function ID: 11757
// Name: FramePoolManager
// Dependencies: [11757, 11759, 11758, 11068, 2]

// Module 11756 (FramePoolManager)
import leaveFrame from "leaveFrame" /* 11068 */;
import FrameStackLevel from "FrameStackLevel" /* 11758 */;
import FramePoolActionCreators from "FramePoolActionCreators" /* 11759 */;
import AbstractFramePoolManager from "AbstractFramePoolManager" /* 11757 */;
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
  removeFrameEntry(frameId) {
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
const destroyFrame1 = new destroyFrame({ maxBackgrounded: 1, timeoutMs: 90000 }, tmp2, tmp, "destroyFrame", FramePoolManager, destroyFrame, this);
destroyFrame1.poolNodeTag = 0;
let result = size.fileFinishedImporting("modules/frames/native/FramePoolManager.tsx");

export default destroyFrame1;
