// Module ID: 14446
// Function ID: 14447
// Name: ServerTabLottie
// Dependencies: [19, 21, 10245, 14447, 2]

// Module 14446 (ServerTabLottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14447 from "module_14447" /* 14447 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14447, animation: "all", ref, layers, markers: items });
});
