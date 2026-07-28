// Module ID: 9789
// Function ID: 76023
// Name: items
// Dependencies: [31, 33, 9787, 9790, 2]

// Module 9789 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(9790) /* registerAsset */, ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9787) /* LottieIcon */.LottieIcon, { dotLottie: require(9790) /* registerAsset */, ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = forwardRefResult;
