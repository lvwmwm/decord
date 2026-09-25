// Module ID: 13691
// Function ID: 13692
// Name: NitroGem15Lottie
// Dependencies: [19, 21, 9394, 13692, 2]

// Module 13691 (NitroGem15Lottie)
import LottieIcon from "LottieIcon" /* 9394 */;
import _mod13692 from "module_13692" /* 13692 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13692, animation: "all", ref, layers, markers: items });
});
