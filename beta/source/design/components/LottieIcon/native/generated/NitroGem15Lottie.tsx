// Module ID: 14476
// Function ID: 14477
// Name: NitroGem15Lottie
// Dependencies: [19, 21, 558, 568, 14477, 10243, 2]

// Module 14476 (NitroGem15Lottie)
import c from "c" /* 568 */;
import LottieIcon from "LottieIcon" /* 10243 */;
import _mod14477 from "module_14477" /* 14477 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(14477);
    cResult[0] = tmpResult;
    let first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === ref) {
      let tmp6 = cResult[3];
    }
    return tmp6;
  }
  const merged = Object.assign(arg0);
  const tmp8 = jsx(LottieIcon.LottieIcon, { dotLottie: first, animation: "all", ref, layers, markers: items });
  cResult[1] = arg0;
  cResult[2] = ref;
  cResult[3] = tmp8;
  tmp6 = tmp8;
}) : ((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14477, animation: "all", ref, layers, markers: items });
}));
