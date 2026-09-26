// Module ID: 10244
// Function ID: 10245
// Name: CameraLottie
// Dependencies: [19, 21, 10245, 10246, 2]

// Module 10244 (CameraLottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod10246 from "module_10246" /* 10246 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod10246, ref, layers, markers: items });
});
