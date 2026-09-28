// Module ID: 13955
// Function ID: 13956
// Name: NitroGem1Lottie
// Dependencies: [19, 21, 9405, 13956, 2]

// Module 13955 (NitroGem1Lottie)
import LottieIcon from "LottieIcon" /* 9405 */;
import _mod13956 from "module_13956" /* 13956 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export const NitroGem1Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13956, animation: "all", ref, layers, markers: items });
});
