// Module ID: 10296
// Function ID: 10297
// Name: CameraLottie
// Dependencies: [19, 21, 10297, 10298, 2]

// Module 10296 (CameraLottie)
import LottieIcon from "LottieIcon" /* 10297 */;
import _mod10298 from "module_10298" /* 10298 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod10298, ref, layers, markers: items });
});
