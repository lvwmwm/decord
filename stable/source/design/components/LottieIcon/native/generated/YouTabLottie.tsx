// Module ID: 14448
// Function ID: 14449
// Name: YouTabLottie
// Dependencies: [19, 21, 10245, 14449, 2]

// Module 14448 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14449 from "module_14449" /* 14449 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14449, animation: "all", ref, layers, markers: items });
});
