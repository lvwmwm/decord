// Module ID: 9700
// Function ID: 9701
// Name: DCDVideoRenderer
// Dependencies: [5179, 9701, 2]

// Module 9700 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9701 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5179 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
