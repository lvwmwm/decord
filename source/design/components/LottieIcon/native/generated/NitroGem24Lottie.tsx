// Module ID: 13199
// Function ID: 13200
// Name: items
// Dependencies: [19, 21, 9806, 13200, 2]

// Module 13199 (items)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_3 = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { dotLottie: null, animation: "all", ref: null, layers: null, markers: null };
  obj[0] = require(13200) /* registerAsset */;
  obj[2] = arg1;
  obj[3] = closure_3;
  obj[4] = items;
  const merged = Object.assign(arg0);
  return jsx(require(9806) /* LottieIcon */.LottieIcon, { dotLottie: null, animation: "all", ref: null, layers: null, markers: null });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem24Lottie.tsx");

export const NitroGem24Lottie = forwardRefResult;
