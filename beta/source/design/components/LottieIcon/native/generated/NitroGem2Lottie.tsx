// Module ID: 14456
// Function ID: 14457
// Name: NitroGem2Lottie
// Dependencies: [19, 21, 10245, 14457, 2]

// Module 14456 (NitroGem2Lottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14457 from "module_14457" /* 14457 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx");

export const NitroGem2Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14457, animation: "all", ref, layers, markers: items });
});
