// Module ID: 13109
// Function ID: 101075
// Name: items
// Dependencies: [31, 33, 9823, 13110, 2]

// Module 13109 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(13110) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9823) /* LottieIcon */.LottieIcon, { dotLottie: require(13110) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export const NitroGem1Lottie = forwardRefResult;
