// Module ID: 13719
// Function ID: 13720
// Name: items
// Dependencies: [19, 21, 9977, 13720, 2]

// Module 13719 (items)
import LottieIcon from "LottieIcon" /* 9977 */;
import registerAsset from "registerAsset" /* 13720 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = forwardRefResult;
