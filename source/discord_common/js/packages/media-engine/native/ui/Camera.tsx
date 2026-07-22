// Module ID: 4229
// Function ID: 37085
// Name: Camera
// Dependencies: []

// Module 4229 (Camera)
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
      tmp3 = importDefault;
      tmp4 = dependencyMap;
      num = 2;
      obj = {};
      obj.streamId = tmp;
      obj2 = {};
      obj2.width = width;
      obj2.height = height;
      obj.style = obj2;
      tmp2Result = tmp2(importDefault(dependencyMap[2]), obj);
    }
    return tmp2Result;
  }
}
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
Camera.defaultProps = {};
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default Camera;
