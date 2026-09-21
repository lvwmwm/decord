// Module ID: 14429
// Function ID: 14430
// Name: NitroGem6Lottie
// Dependencies: [19, 21, 10206, 14430, 2]

// Module 14429 (NitroGem6Lottie)
import LottieIcon from "LottieIcon" /* 10206 */;
import _mod14430 from "module_14430" /* 14430 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem6Lottie.tsx");

export const NitroGem6Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14430, animation: "all", ref, layers, markers: items });
});
