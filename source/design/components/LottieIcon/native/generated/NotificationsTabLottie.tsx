// Module ID: 13161
// Function ID: 101374
// Name: items
// Dependencies: [31, 33, 9787, 13162, 2]

// Module 13161 (items)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_3 = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: require(13162) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(require(9787) /* LottieIcon */.LottieIcon, { dotLottie: require(13162) /* registerAsset */, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = forwardRefResult;
