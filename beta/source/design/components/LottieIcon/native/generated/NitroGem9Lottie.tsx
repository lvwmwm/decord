// Module ID: 14462
// Function ID: 14463
// Name: NitroGem9Lottie
// Dependencies: [19, 21, 10245, 14463, 2]

// Module 14462 (NitroGem9Lottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14463 from "module_14463" /* 14463 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem9Lottie.tsx");

export const NitroGem9Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14463, animation: "all", ref, layers, markers: items });
});
