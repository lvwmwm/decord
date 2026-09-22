// Module ID: 14433
// Function ID: 14434
// Name: NitroGem3Lottie
// Dependencies: [19, 21, 10212, 14434, 2]

// Module 14433 (NitroGem3Lottie)
import LottieIcon from "LottieIcon" /* 10212 */;
import _mod14434 from "module_14434" /* 14434 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14434, animation: "all", ref, layers, markers: items });
});
