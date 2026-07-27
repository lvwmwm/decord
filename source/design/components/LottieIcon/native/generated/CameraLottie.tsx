// Module ID: 10680
// Function ID: 83170
// Name: items
// Dependencies: [31, 33, 9747, 10681, 2]

// Module 10680 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(10681) /* registerAsset */, ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9747) /* LottieIcon */.LottieIcon, { dotLottie: require(10681) /* registerAsset */, ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = forwardRefResult;
