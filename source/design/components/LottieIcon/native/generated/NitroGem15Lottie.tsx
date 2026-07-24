// Module ID: 13121
// Function ID: 101093
// Name: items
// Dependencies: [31, 33, 9823, 13122, 2]

// Module 13121 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(13122) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9823) /* LottieIcon */.LottieIcon, { dotLottie: require(13122) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = forwardRefResult;
