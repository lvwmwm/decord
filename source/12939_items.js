// Module ID: 12939
// Function ID: 98536
// Name: items
// Dependencies: [0, 0, 0, 0, 0]

// Module 12939 (items)
import { jsx } from "result";
import importAllResult from "result";
import result from "result";

let closure_3 = [];
const items = [{ -44998052: 2.5, -1437179389: "relative", -1594110876: -16 }];
result = result.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
