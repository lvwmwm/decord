// Module ID: 10902
// Function ID: 10903
// Name: leaveFrame
// Dependencies: [6840, 1380, 572, 2]
// Exports: leaveFrame

// Module 10902 (leaveFrame)
import DispatcherDefault from "Dispatcher" /* 572 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import FramesStore from "FramesStore" /* 6840 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/leaveFrame.tsx");

export function leaveFrame(id) {
  const obj = GlobalUtils;
  if (obj.isNotNullish(id)) {
    const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: id, lockState: null, pictureInPictureLockState: null };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
  const frame = FramesStore.getFrame(id);
  if (null != frame) {
    const obj7 = { type: "FRAME_STOP", applicationId: null, frameId: null };
    ({ applicationId: obj5.applicationId, id: obj5.frameId } = frame);
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj7);
  }
}
