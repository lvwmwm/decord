// Module ID: 11745
// Function ID: 11746
// Name: FramePoolActionCreators
// Dependencies: [584, 2]
// Exports: updateFramePoolVisibility

// Module 11745 (FramePoolActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/FramePoolActionCreators.tsx");

export const updateFramePoolVisibility = function updateFramePoolVisibility(frameId, hidden) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRAME_POOL_VISIBILITY_UPDATE", frameId, poolVisibility: hidden };
  obj.dispatch(obj2);
};
