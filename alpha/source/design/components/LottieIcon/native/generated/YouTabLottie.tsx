// Module ID: 14512
// Function ID: 14513
// Name: YouTabLottie
// Dependencies: [19, 21, 10297, 14513, 2]

// Module 14512 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 10297 */;
import _mod14513 from "module_14513" /* 14513 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14513, animation: "all", ref, layers, markers: items });
});
