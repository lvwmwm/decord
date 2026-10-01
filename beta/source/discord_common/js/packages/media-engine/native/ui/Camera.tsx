// Module ID: 4899
// Function ID: 4900
// Name: Camera
// Dependencies: [19, 21, 4895, 2]

// Module 4899 (Camera)
import Fragment from "Fragment" /* 21 */;
import VideoDefault from "Video" /* 4895 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

class Camera {
  constructor(disabled) {
    let height;
    let size1;
    let tmp2Result;
    let width;
    ({ width, height } = disabled);
    if (disabled.disabled) {
      const obj2 = { className: "media-engine-video", style: size };
      size = { width, height };
      tmp2Result = tmp2("div", obj2);
    } else {
      const obj = { streamId: tmp, style: size1 };
      size1 = { width, height };
      tmp2Result = tmp2(VideoDefault, obj);
    }
    return tmp2Result;
  }
}
const jsx = Fragment.jsx;
Camera.defaultProps = { disabled: false, width: 320, height: 180 };
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default Camera;
