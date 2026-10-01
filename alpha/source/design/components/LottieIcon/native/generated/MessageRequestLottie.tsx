// Module ID: 14177
// Function ID: 14178
// Name: MessageRequestLottie
// Dependencies: [19, 21, 9600, 14178, 2]

// Module 14177 (MessageRequestLottie)
import LottieIcon from "LottieIcon" /* 9600 */;
import _mod14178 from "module_14178" /* 14178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export const MessageRequestLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14178, animation: "all", ref, layers, markers: items });
});
