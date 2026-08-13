// Module ID: 13463
// Function ID: 13464
// Name: items
// Dependencies: [19, 21, 10190, 13464, 2]

// Module 13463 (items)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_3 = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { dotLottie: null, ref: null, layers: null, markers: null };
  obj[0] = require(13464) /* registerAsset */;
  obj[1] = arg1;
  obj[2] = closure_3;
  obj[3] = items;
  const merged = Object.assign(arg0);
  return jsx(require(10190) /* LottieIcon */.LottieIcon, { dotLottie: null, ref: null, layers: null, markers: null });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = forwardRefResult;
