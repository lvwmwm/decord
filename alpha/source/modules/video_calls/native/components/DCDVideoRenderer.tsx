// Module ID: 9091
// Function ID: 9092
// Name: DCDVideoRenderer
// Dependencies: [5468, 9092, 2]

// Module 9091 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9092 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5468 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
