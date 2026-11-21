// Module ID: 6953
// Function ID: 6954
// Name: leaveFrame
// Dependencies: [6623, 1254, 572, 2]
// Exports: leaveFrame

// Module 6953 (leaveFrame)
import DispatcherDefault from "Dispatcher" /* 572 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import FramesStore from "FramesStore" /* 6623 */;
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
