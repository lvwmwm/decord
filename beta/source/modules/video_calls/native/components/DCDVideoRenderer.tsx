// Module ID: 9703
// Function ID: 9704
// Name: DCDVideoRenderer
// Dependencies: [5177, 9704, 2]

// Module 9703 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9704 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5177 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
