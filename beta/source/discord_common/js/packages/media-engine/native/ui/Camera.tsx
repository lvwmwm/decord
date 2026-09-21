// Module ID: 4821
// Function ID: 4822
// Name: Camera
// Dependencies: [19, 21, 558, 568, 4817, 2]

// Module 4821 (Camera)
import c from "c" /* 568 */;
import VideoDefault from "Video" /* 4817 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ disabled, deviceId, width, height } = arg0);
  if (cResult[0] === deviceId) {
    if (cResult[1] === disabled) {
      if (cResult[2] === height) {
        if (cResult[3] === width) {
          return cResult[4];
        }
      }
    }
  }
  if (disabled) {
    const obj2 = { className: "media-engine-video", style: null };
    const size = { width, height };
    obj2.style = size;
    let tmp3Result = tmp3("div", obj2);
  } else {
    const obj3 = { streamId: deviceId, style: null };
    const size1 = { width, height };
    obj3.style = size1;
    tmp3Result = tmp3(VideoDefault, obj3);
  }
  cResult[0] = deviceId;
  cResult[1] = disabled;
  cResult[2] = height;
  cResult[3] = width;
  cResult[4] = tmp3Result;
}) : ((disabled) => {
  ({ width, height } = disabled);
  if (disabled.disabled) {
    const obj2 = { className: "media-engine-video", style: null };
    const size = { width, height };
    obj2.style = size;
    let tmp2Result = tmp2("div", obj2);
  } else {
    const obj = { streamId: tmp, style: null };
    const size1 = { width, height };
    obj.style = size1;
    tmp2Result = tmp2(VideoDefault, obj);
  }
  return tmp2Result;
});
tmp3.defaultProps = { disabled: false, width: 320, height: 180 };
let size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ui/Camera.tsx");

export default tmp3;
