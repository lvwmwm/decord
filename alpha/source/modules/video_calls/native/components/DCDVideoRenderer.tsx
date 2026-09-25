// Module ID: 8884
// Function ID: 8885
// Name: DCDVideoRenderer
// Dependencies: [5265, 8885, 2]

// Module 8884 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 8885 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5265 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
