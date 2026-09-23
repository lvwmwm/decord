// Module ID: 14517
// Function ID: 14518
// Name: NitroGem9Lottie
// Dependencies: [19, 21, 10292, 14518, 2]

// Module 14517 (NitroGem9Lottie)
import LottieIcon from "LottieIcon" /* 10292 */;
import _mod14518 from "module_14518" /* 14518 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem9Lottie.tsx");

export const NitroGem9Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14518, animation: "all", ref, layers, markers: items });
});
