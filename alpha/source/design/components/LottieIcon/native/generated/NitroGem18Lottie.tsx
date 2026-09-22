// Module ID: 14443
// Function ID: 14444
// Name: NitroGem18Lottie
// Dependencies: [19, 21, 10212, 14444, 2]

// Module 14443 (NitroGem18Lottie)
import LottieIcon from "LottieIcon" /* 10212 */;
import _mod14444 from "module_14444" /* 14444 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem18Lottie.tsx");

export const NitroGem18Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14444, animation: "all", ref, layers, markers: items });
});
