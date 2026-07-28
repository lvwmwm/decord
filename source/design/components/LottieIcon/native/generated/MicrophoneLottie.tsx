// Module ID: 13163
// Function ID: 101377
// Name: items
// Dependencies: [31, 33, 9787, 13164, 2]

// Module 13163 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(13164) /* registerAsset */, ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9787) /* LottieIcon */.LottieIcon, { dotLottie: require(13164) /* registerAsset */, ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = forwardRefResult;
