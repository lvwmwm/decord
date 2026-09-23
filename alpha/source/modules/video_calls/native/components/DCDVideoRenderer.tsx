// Module ID: 9782
// Function ID: 9783
// Name: DCDVideoRenderer
// Dependencies: [5262, 9783, 2]

// Module 9782 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9783 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5262 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
