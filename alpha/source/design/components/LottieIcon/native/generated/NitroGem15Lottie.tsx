// Module ID: 14530
// Function ID: 14531
// Name: NitroGem15Lottie
// Dependencies: [19, 21, 10297, 14531, 2]

// Module 14530 (NitroGem15Lottie)
import LottieIcon from "LottieIcon" /* 10297 */;
import _mod14531 from "module_14531" /* 14531 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14531, animation: "all", ref, layers, markers: items });
});
