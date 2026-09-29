// Module ID: 14444
// Function ID: 14445
// Name: MessagesTabLottie
// Dependencies: [19, 21, 10245, 14445, 2]

// Module 14444 (MessagesTabLottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14445 from "module_14445" /* 14445 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessagesTabLottie.tsx");

export const MessagesTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14445, animation: "all", ref, layers, markers: items });
});
