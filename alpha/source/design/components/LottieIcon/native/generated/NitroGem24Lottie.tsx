// Module ID: 14445
// Function ID: 14446
// Name: NitroGem24Lottie
// Dependencies: [19, 21, 10212, 14446, 2]

// Module 14445 (NitroGem24Lottie)
import LottieIcon from "LottieIcon" /* 10212 */;
import _mod14446 from "module_14446" /* 14446 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem24Lottie.tsx");

export const NitroGem24Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14446, animation: "all", ref, layers, markers: items });
});
