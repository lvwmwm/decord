// Module ID: 9732
// Function ID: 9733
// Name: DCDVideoRenderer
// Dependencies: [5211, 9733, 2]

// Module 9732 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9733 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5211 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
