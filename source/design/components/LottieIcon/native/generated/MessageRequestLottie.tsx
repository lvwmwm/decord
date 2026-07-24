// Module ID: 13127
// Function ID: 101102
// Name: items
// Dependencies: [31, 33, 9823, 13128, 2]

// Module 13127 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(13128) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9823) /* LottieIcon */.LottieIcon, { dotLottie: require(13128) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export const MessageRequestLottie = forwardRefResult;
