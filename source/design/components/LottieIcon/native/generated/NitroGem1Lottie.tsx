// Module ID: 13602
// Function ID: 13603
// Name: items
// Dependencies: [19, 21, 10298, 13603, 2]

// Module 13602 (items)
import LottieIcon from "LottieIcon" /* 10298 */;
import registerAsset from "registerAsset" /* 13603 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export const NitroGem1Lottie = forwardRefResult;
