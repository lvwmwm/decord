// Module ID: 15634
// Function ID: 15635
// Name: FramePoolActionCreators
// Dependencies: [572, 2]
// Exports: updateFramePoolVisibility

// Module 15634 (FramePoolActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/FramePoolActionCreators.tsx");

export function updateFramePoolVisibility(frameId, hidden) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRAME_POOL_VISIBILITY_UPDATE", frameId, poolVisibility: hidden };
  obj.dispatch(obj2);
}
