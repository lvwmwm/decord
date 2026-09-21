// Module ID: 14439
// Function ID: 14440
// Name: NitroGem24Lottie
// Dependencies: [19, 21, 10206, 14440, 2]

// Module 14439 (NitroGem24Lottie)
import LottieIcon from "LottieIcon" /* 10206 */;
import _mod14440 from "module_14440" /* 14440 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem24Lottie.tsx");

export const NitroGem24Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14440, animation: "all", ref, layers, markers: items });
});
