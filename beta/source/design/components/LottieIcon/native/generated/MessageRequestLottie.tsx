// Module ID: 14472
// Function ID: 14473
// Name: MessageRequestLottie
// Dependencies: [19, 21, 10245, 14473, 2]

// Module 14472 (MessageRequestLottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14473 from "module_14473" /* 14473 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export const MessageRequestLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14473, animation: "all", ref, layers, markers: items });
});
