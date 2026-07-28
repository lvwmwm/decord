// Module ID: 13165
// Function ID: 101380
// Name: items
// Dependencies: [31, 33, 9787, 13166, 2]

// Module 13165 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(13166) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9787) /* LottieIcon */.LottieIcon, { dotLottie: require(13166) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export const NitroGem1Lottie = forwardRefResult;
