// Module ID: 14250
// Function ID: 14251
// Name: MessageRequestLottie
// Dependencies: [19, 21, 10078, 14251, 2]

// Module 14250 (MessageRequestLottie)
import LottieIcon from "LottieIcon" /* 10078 */;
import _mod14251 from "module_14251" /* 14251 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export const MessageRequestLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14251, animation: "all", ref, layers, markers: items });
});
