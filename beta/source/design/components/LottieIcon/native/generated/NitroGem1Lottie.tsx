// Module ID: 14454
// Function ID: 14455
// Name: NitroGem1Lottie
// Dependencies: [19, 21, 10245, 14455, 2]

// Module 14454 (NitroGem1Lottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14455 from "module_14455" /* 14455 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export const NitroGem1Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14455, animation: "all", ref, layers, markers: items });
});
