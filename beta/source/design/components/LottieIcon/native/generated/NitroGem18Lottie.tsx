// Module ID: 14468
// Function ID: 14469
// Name: NitroGem18Lottie
// Dependencies: [19, 21, 10245, 14469, 2]

// Module 14468 (NitroGem18Lottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14469 from "module_14469" /* 14469 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem18Lottie.tsx");

export const NitroGem18Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14469, animation: "all", ref, layers, markers: items });
});
