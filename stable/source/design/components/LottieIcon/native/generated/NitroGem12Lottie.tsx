// Module ID: 14464
// Function ID: 14465
// Name: NitroGem12Lottie
// Dependencies: [19, 21, 10245, 14465, 2]

// Module 14464 (NitroGem12Lottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14465 from "module_14465" /* 14465 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem12Lottie.tsx");

export const NitroGem12Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14465, animation: "all", ref, layers, markers: items });
});
