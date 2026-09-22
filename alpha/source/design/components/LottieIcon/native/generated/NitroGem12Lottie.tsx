// Module ID: 14439
// Function ID: 14440
// Name: NitroGem12Lottie
// Dependencies: [19, 21, 10212, 14440, 2]

// Module 14439 (NitroGem12Lottie)
import LottieIcon from "LottieIcon" /* 10212 */;
import _mod14440 from "module_14440" /* 14440 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem12Lottie.tsx");

export const NitroGem12Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14440, animation: "all", ref, layers, markers: items });
});
