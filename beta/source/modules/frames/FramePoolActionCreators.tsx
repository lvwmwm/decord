// Module ID: 15755
// Function ID: 15756
// Name: FramePoolActionCreators
// Dependencies: [572, 2]
// Exports: updateFramePoolVisibility

// Module 15755 (FramePoolActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/FramePoolActionCreators.tsx");

export function updateFramePoolVisibility(frameId, hidden) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRAME_POOL_VISIBILITY_UPDATE", frameId, poolVisibility: hidden };
  obj.dispatch(obj2);
}
