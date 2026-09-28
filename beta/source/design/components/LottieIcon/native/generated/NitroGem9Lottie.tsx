// Module ID: 13963
// Function ID: 13964
// Name: NitroGem9Lottie
// Dependencies: [19, 21, 9405, 13964, 2]

// Module 13963 (NitroGem9Lottie)
import LottieIcon from "LottieIcon" /* 9405 */;
import _mod13964 from "module_13964" /* 13964 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem9Lottie.tsx");

export const NitroGem9Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13964, animation: "all", ref, layers, markers: items });
});
