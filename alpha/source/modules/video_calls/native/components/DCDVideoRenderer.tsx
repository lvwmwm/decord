// Module ID: 9709
// Function ID: 9710
// Name: DCDVideoRenderer
// Dependencies: [5178, 9710, 2]

// Module 9709 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9710 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5178 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
