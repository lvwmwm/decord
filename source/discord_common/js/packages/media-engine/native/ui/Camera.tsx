// Module ID: 4233
// Function ID: 37117
// Name: Camera
// Dependencies: [31, 33, 4230, 2]

// Module 4233 (Camera)
import "result";
import { jsx } from "jsxProd";

class Camera {
  constructor(arg0) {
    ({ width, height } = global);
    tmp2 = jsx;
    if (global.disabled) {
      obj = {};
      str = "media-engine-video";
      obj.className = "media-engine-video";
      obj1 = {};
      obj1.width = width;
      obj1.height = height;
      obj.style = obj1;
      str2 = "div";
      tmp2Result = tmp2("div", obj);
    } else {
      tmp3 = closure_0;
      tmp4 = closure_1;
      num = 2;
      obj = {};
      obj.streamId = tmp;
      obj2 = {};
      obj2.width = width;
      obj2.height = height;
      obj.style = obj2;
      tmp2Result = tmp2(require("Video"), obj);
    }
    return tmp2Result;
  }
}
Camera.defaultProps = { disabled: false, width: 320, height: 180 };
const result = require("Video").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default Camera;
