// Module ID: 13157
// Function ID: 101368
// Name: items
// Dependencies: [31, 33, 9787, 13158, 2]

// Module 13157 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(13158) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9787) /* LottieIcon */.LottieIcon, { dotLottie: require(13158) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = forwardRefResult;
