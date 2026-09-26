// Module ID: 13968
// Function ID: 13969
// Name: NitroGem15Lottie
// Dependencies: [19, 21, 9405, 13969, 2]

// Module 13968 (NitroGem15Lottie)
import LottieIcon from "LottieIcon" /* 9405 */;
import _mod13969 from "module_13969" /* 13969 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13969, animation: "all", ref, layers, markers: items });
});
