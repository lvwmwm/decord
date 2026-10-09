// Module ID: 10811
// Function ID: 10812
// Name: leaveFrame
// Dependencies: [10772, 1388, 584, 2]
// Exports: leaveFrame

// Module 10811 (leaveFrame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import FramesStore from "FramesStore" /* 10772 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/leaveFrame.tsx");

export const leaveFrame = function leaveFrame(id) {
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
};
