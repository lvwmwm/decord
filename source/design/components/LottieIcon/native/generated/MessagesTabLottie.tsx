// Module ID: 13178
// Function ID: 13179
// Name: items
// Dependencies: [19, 21, 9809, 13179, 2]

// Module 13178 (items)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { dotLottie: null, animation: "all", ref: null, layers: null, markers: null };
  obj[0] = require(13179) /* registerAsset */;
  obj[2] = arg1;
  obj[3] = closure_3;
  obj[4] = items;
  const merged = Object.assign(arg0);
  return jsx(require(9809) /* LottieIcon */.LottieIcon, { dotLottie: null, animation: "all", ref: null, layers: null, markers: null });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/MessagesTabLottie.tsx");

export const MessagesTabLottie = forwardRefResult;
