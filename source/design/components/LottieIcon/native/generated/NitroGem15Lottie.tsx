// Module ID: 12948
// Function ID: 98581
// Name: items
// Dependencies: [0, 0, 0, 0, 0]

// Module 12948 (items)
import { jsx } from "result";
import importAllResult from "result";
import result from "result";

let closure_3 = [null];
const items = [{ navigationReplace: 2.5, openTextInVoiceIfVoiceChannel: "relative", hideFrame: -16 }];
result = result.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = require("result").forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
