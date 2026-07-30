// Module ID: 13175
// Function ID: 13176
// Name: items
// Dependencies: [19, 21, 9806, 13176, 2]

// Module 13175 (items)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_3 = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { dotLottie: null, animation: "all", ref: null, layers: null, markers: null };
  obj[0] = require(13176) /* registerAsset */;
  obj[2] = arg1;
  obj[3] = closure_3;
  obj[4] = items;
  const merged = Object.assign(arg0);
  return jsx(require(9806) /* LottieIcon */.LottieIcon, { dotLottie: null, animation: "all", ref: null, layers: null, markers: null });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = forwardRefResult;
