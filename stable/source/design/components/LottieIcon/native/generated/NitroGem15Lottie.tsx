// Module ID: 14466
// Function ID: 14467
// Name: NitroGem15Lottie
// Dependencies: [19, 21, 10245, 14467, 2]

// Module 14466 (NitroGem15Lottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14467 from "module_14467" /* 14467 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14467, animation: "all", ref, layers, markers: items });
});
