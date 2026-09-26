// Module ID: 14458
// Function ID: 14459
// Name: NitroGem3Lottie
// Dependencies: [19, 21, 10245, 14459, 2]

// Module 14458 (NitroGem3Lottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14459 from "module_14459" /* 14459 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14459, animation: "all", ref, layers, markers: items });
});
